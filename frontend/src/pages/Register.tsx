import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <h1 className="text-slate-400 font-black text-5xl capitalize">
        Create your account and manage your{' '}
        <span className="text-amber-300">projects</span>
      </h1>

      <form className="my-10 bg-gray-800 shadow rounded-lg dark:shadow-white p-10">
        <div className="my-5">
          <label className="block text-xl font-bold" htmlFor="email">
            Name
          </label>
          <input
            id="name"
            className="w-full mt-3 p-2 bg-gray-900 placeholder:text-gray-600 rounded text-gray-400"
            type="text"
            placeholder="Michael, Anna..."
          />
        </div>
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
        <div className="my-5">
          <label className="block text-xl font-bold" htmlFor="password2">
            Repeat Password
          </label>
          <input
            id="password2"
            className="w-full mt-3 p-2 bg-gray-900 rounded text-gray-400"
            type="password"
          />
        </div>
        <input
          type="submit"
          value="Create Account"
          className="bg-amber-300 w-full py-2 mb-5 text-gray-900 font-bold rounded-lg hover:bg-amber-400 transition-colors"
        />
      </form>

      <nav
        className="
        lg:flex lg:justify-between mx-1"
      >
        <p className="text-center text-sm">
          Do you have an account?{' '}
          <Link className="block hover:text-amber-300" to="/">
            Sign In
          </Link>
        </p>
        <Link
          className="hover:text-amber-300 block text-center text-sm md:mt-2"
          to="/forgot-password"
        >
          Forgot my password
        </Link>
      </nav>
    </>
  );
}

export default Register;
