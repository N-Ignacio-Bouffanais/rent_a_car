import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      fullname: "",
      dni: "",
      model:"",
      brand: "",
      price:"",
      year:"",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            {...register("fullname", {
              required: {
                value: true,
                message: "Nombre es requerido",
              },
              maxLength: 20,
              minLength: 2,
            })}
          />
          {errors.fullname?.type === "required" && (
            <span>Nombre requerido</span>
          )}
          {errors.fullname?.type === "maxLength" && (
            <span>Nombre no debe ser mayor a 20 caracteres</span>
          )}
          {errors.fullname?.type === "minLength" && (
            <span>Nombre debe ser mayor a 2 caracteres</span>
          )}
        </div>
        <div>
          <label>DNI:</label>
          <input
            type="text"
            {...register("dni", {
              required: {
                value: true,
                message: "El RUT es requerido",
              },
              maxLength: 10,
              minLength: 10,
            })}
          />
          {errors.dni?.type === "required" && <span>RUT requerido</span>}
          {errors.dni?.type === "maxLength" && (
            <span>RUT debe tener 10 caracteres</span>
          )}
          {errors.dni?.type === "minLength" && (
            <span>RUT debe tener 10 caracteres</span>
          )}
        </div>
        <div>
          <label>Modelo:</label>
          <input
            type="text"
            {...register("model", {
              required: {
                value: true,
                message: "El modelo es requerido",
              },
              maxLength: 12,
              minLength: 2,
            })}
          />
          {errors.model?.type === "required" && (
            <span>El modelo requerido</span>
          )}
          {errors.model?.type === "maxLength" && (
            <span>El modelo no debe ser mayor a 12 caracteres</span>
          )}
          {errors.model?.type === "minLength" && (
            <span>El modelo debe ser mayor a 2 caracteres</span>
          )}
        </div>
        <div>
          <label>Marca:</label>
          <input
            type="text"
            {...register("brand", {
              required: {
                value: true,
                message: "La marca es requerida",
              },
              maxLength: 20,
              minLength: 2,
            })}
          />
          {errors.brand?.type === "required" && (
            <span>La marca es requerida</span>
          )}
          {errors.brand?.type === "maxLength" && (
            <span>La marca debe tener maximo 20 caracteres</span>
          )}
          {errors.brand?.type === "minLength" && (
            <span>La marca debe tener al menos 2 caracteres</span>
          )}
        </div>

        <button className="rounded-lg h-12 p-3 bg-black text-white" type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Form;
