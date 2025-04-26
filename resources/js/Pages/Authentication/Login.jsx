import { useForm } from '@inertiajs/react';

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/login');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left form section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 lg:px-24 py-10">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
          <p className="text-gray-500 mb-8">Sign in to your account</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition"
              disabled={processing}
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account? <a href="/register" className="text-indigo-600 font-medium hover:underline">Register</a>
          </p>
        </div>
      </div>

      {/* Right image / info section */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0B3C49] items-center justify-center text-white p-10">
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Very simple way you can engage</h3>
          <p className="text-sm max-w-md">
            Welcome to your Inventory Management System! Effortlessly track and manage your data with ease.
          </p>
          {/* You can replace this with real image later */}
          <div className="mt-10">
            <img src="/images/analytics-mockup.svg" alt="Analytics" className="w-72 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}