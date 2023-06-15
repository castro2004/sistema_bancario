const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors());

// Configurar conexión a la base de datos y modelos (usando Mongoose, por ejemplo)

// Ruta para el inicio de sesión del usuario
app.post('/api/login-user', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar al usuario por el nombre de usuario en la base de datos
    const user = await User.findOne({ username });

    // Verificar si el usuario existe
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Generar el token de autenticación
    const token = jwt.sign({ userId: user._id }, 'mi_secreto', {
      expiresIn: '10h',
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al realizar el login' });
  }
});

// Resto de la configuración del servidor y rutas

// Iniciar el servidor
app.listen(3007, () => {
  console.log('Servidor iniciado en el puerto 3007');
});