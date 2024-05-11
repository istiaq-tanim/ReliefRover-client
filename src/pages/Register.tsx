import { Link } from "react-router-dom";
import RegistrationForm from "../components/ui/AuthForm/RegistrationForm";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Register</h4>
        <RegistrationForm />
        <span className="text-center text-xs text-gray-500">
          Already have an account?
          <Link className="underline hover:text-green-600 mx-1" to="/login">
            Login
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Register;
