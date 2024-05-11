import { Link } from "react-router-dom";
import LoginForm from "../components/ui/AuthForm/LoginForm";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign in</h4>
        <LoginForm />
        <span className="text-center text-xs text-gray-500">
          Don't have an account?
          <Link className="underline hover:text-green-600 mx-1" to="/register">
            Register
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Login;
