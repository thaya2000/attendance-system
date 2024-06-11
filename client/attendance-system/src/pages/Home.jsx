import { useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const Home = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" || false
  );

  const handleLogout = () => {
    localStorage.removeItem("auth");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
        <nav className="bg-white bg-opacity-60 dark:bg-gray-800 dark:bg-opacity-60 shadow-md p-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            Attendance System
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="focus:outline-none bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-lg mr-4"
            >
              {darkMode ? (
                <MdOutlineLightMode
                  size="2em"
                  className="text-gray-900 dark:text-white"
                />
              ) : (
                <MdDarkMode
                  size="2em"
                  className="text-gray-900 dark:text-white"
                />
              )}
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Logout
            </button>
          </div>
        </nav>
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8 bg-white bg-opacity-60 dark:bg-gray-800 dark:bg-opacity-60 rounded-lg shadow-lg">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-pulse">
              Welcome to the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 dark:from-teal-400 dark:via-blue-500 dark:to-indigo-600">
                Home Page!
              </span>
            </h1>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-4">
              We&apos;re glad to have you here. Enjoy your stay!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
