function TestPage1() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl text-center text-white font-semibold mb-6">Welcome Back</h2>
        <input type="email" placeholder="Email"
               className="w-full p-4 mb-4 rounded-lg bg-white bg-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        <input type="password" placeholder="Password"
               className="w-full p-4 mb-4 rounded-lg bg-white bg-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        <button
          className="w-full py-3 bg-purple-600 text-white rounded-lg mt-4 hover:bg-purple-700 transition duration-300">Login
        </button>
        <p className="text-center text-white mt-4">or</p>
        <button
          className="w-full py-3 bg-red-500 text-white rounded-lg mt-4 hover:bg-red-600 transition duration-300">Login
          with Google
        </button>
      </div>
    </div>
  );
}

export default TestPage1;