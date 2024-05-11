const LoginForm = () => {
  return (
    <form className="login-form">
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button
        type="submit"
        className="btn-primary text-gray-700 font-semibold w-full mt-4 bg-green-400 hover:bg-green-600"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
