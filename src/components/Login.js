import React from "react";

const Login = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div className="flex items-center justify-center h-screen bg-neutral-950 dark:bg-primary-dark flex align-center justify-center">
      <div className="bg-white dark:bg-secondary-dark p-8 rounded shadow-lg ">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-text-light ">Give your customer feedback</h2>
        <div className="flex align-center justify-center">
        <button
          onClick={handleLogin}
          className="bg-blue-500 dark:bg-accent-dark text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600"
        >
          Login with Google
        </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
