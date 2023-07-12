import React, { useState } from 'react';

const OrderAcount = () => {
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState(null);

  const fetchAccounts = async (order) => {
    try {
      let sortOption = {};

      if (order === "asc") {
        sortOption = { $sort: { transactionCount: 1 } };
      } else if (order === "desc") {
        sortOption = { $sort: { transactionCount: -1 } };
      } else {
        throw new Error("Orden no válido. Debe ser 'asc' o 'desc'");
      }

      const response = await fetch(`http://localhost:3007/api/admin/accounts?order=${order}`);
      if (!response.ok) {
        throw new Error('Error al obtener las cuentas');
      }

      const data = await response.json();
      setAccounts(data.accounts);
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Cuentas ordenadas por cantidad de movimientos</h2>
      <button onClick={() => fetchAccounts('asc')}>Orden Ascendente</button>
      <button onClick={() => fetchAccounts('desc')}>Orden Descendente</button>
      {accounts.map((account) => (
  <div key={account.id}>{account.name}</div>
))}

    </div>
  );
}

export default OrderAcount;


