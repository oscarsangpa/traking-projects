function Login() {
  return (
    <>
      <h1 className="text-slate-400 font-black text-5xl capitalize">
        Sing in and manage your <span className="text-amber-300">projects</span>
      </h1>

      <form className="my-10 bg-gray-800 shadow rounded-lg dark:shadow-white p-10">
        <div className="my-5">
          <label className="block text-xl font-bold" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="w-full mt-3 p-2 bg-gray-900 placeholder:text-gray-600 rounded text-gray-400"
            type="email"
            placeholder="email@example.com"
          />
        </div>
        <div className="my-5">
          <label className="block text-xl font-bold" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="w-full mt-3 p-2 bg-gray-900 rounded text-gray-400"
            type="password"
          />
        </div>
        <input
          type="submit"
          value="Sign in"
          className="bg-amber-300 w-full py-2 mb-5 text-gray-900 font-bold rounded-lg hover:bg-amber-500 transition-colors"
        />
      </form>
    </>
  );
}

export default Login;
