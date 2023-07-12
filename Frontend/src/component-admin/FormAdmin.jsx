import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { formOptions, sendData } from "../component-admin/helpers/FormAdminsHelpers";

export const FormAdmin = ({ userProp, titleButton, option }) => {
  const [admin, setAdmin] = useState(userProp);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  useEffect(() => {
    setAdmin({ ...user, password: "" });
  }, []);

  const crud = async () => {
    await sendData(admin, option);
  };
  return (
    <form onSubmit={handleSubmit(crud)}>
      <div className="form-group">
        <label className="text-black">Nombre de usuario</label>
        <input
          {...register("username")}
          type="text"
          className="form-control"
          value={user.username}
          onChange={({ target: { value } }) =>
            setAdmin(() => ({ ...user, username: value }))
          }
        />
        {errors.username && (
          <span className="text-danger">{errors.username.message}</span>
        )}
      </div>
      <div className="form-group">
        <label className="text-black">Correo Eletrónico</label>
        <input
          {...register("email")}
          type="email"
          className="form-control"
          value={user.email}
          onChange={({ target: { value } }) =>
            setUser(() => ({ ...user, email: value }))
          }
        />
        {errors.email && (
          <span className="text-danger">{errors.email.message}</span>
        )}
      </div>
      <div className="form-group">
        <label className="text-black">Contaseña</label>
        <input
          {...register("password")}
          type="password"
          className="form-control"
          value={user.password}
          onChange={({ target: { value } }) =>
            setAdmin(() => ({ ...user, password: value }))
          }
        />
        {errors.password && (
          <span className="text-danger">{errors.password.message}</span>
        )}
      </div>
      <button type="submit" className="btn btn-success">
        {titleButton}
      </button>
    </form>
  );
};
