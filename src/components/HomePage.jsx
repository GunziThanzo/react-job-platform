import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="text-center py-12">
      <h1 className="text-5xl font-bold mb-4 text-green-600 dark:text-green-400">Trouvez l&apos;emploi de vos rêves</h1>
      <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">Découvrez des milliers d&apos;opportunités d&apos;emploi au Burundi et en Afrique de l&apos;Est</p>
      <Link to="/jobs" className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md text-lg transition duration-300">
        Commencez votre recherche d&apos;emploi
      </Link>
    </div>
  );
}

export default HomePage;