import { SubmitHandler, useForm } from "react-hook-form";
const RegistrationForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  type Inputs = {
    name: string;
    email: string;
    password: string;
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
        />
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" {...register("email")} />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />
      </div>

      <button
        type="submit"
        className="btn-primary w-full text-gray-700 font-semibold mt-4 bg-green-400 hover:bg-green-600"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
