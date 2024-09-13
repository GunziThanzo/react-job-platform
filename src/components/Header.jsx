import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import PropTypes from 'prop-types';

function Header({ darkMode, setDarkMode }) {
  const location = useLocation();

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 fixed top-0 left-0 right-0 z-10">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-green-600 dark:text-green-400">TrouveTonEmploi</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/" 
                className={`${location.pathname === '/' ? 'text-green-600 font-medium dark:text-green-400' : 'text-gray-600 dark:text-gray-300'} hover:text-green-600 dark:hover:text-green-400`}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                to="/jobs" 
                className={`${location.pathname === '/jobs' ? 'text-green-600 foont-medium dark:text-green-400' : 'text-gray-600 dark:text-gray-300'} hover:text-green-600 dark:hover:text-green-400`}
              >
                Emplois
              </Link>
            </li>

          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <Link to="/login" className="bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300">
            Se connecter
          </Link>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Header;