import React from 'react';
import { useParams } from 'react-router-dom';
import { FaBuilding, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import PropTypes from 'prop-types';

function JobDetails({ jobs }) {
  const { id } = useParams();
  const job = jobs.find(job => job.id === parseInt(id));

  if (!job) {
    return <div className="text-center py-12">Emploi non trouvé</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        {/* Job Header */}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-4 text-green-600 dark:text-green-400">{job.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
            <p className="flex items-center"><FaBuilding className="w-4 h-4 mr-2" />Entreprise XYZ</p>
            <p className="flex items-center"><FaMapMarkerAlt className="w-4 h-4 mr-2" />{job.location}</p>
            <p className="flex items-center"><FaClock className="w-4 h-4 mr-2" />Temps plein</p>
          </div>
        </div>

        {/* Job Description */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Description du poste</h2>
          <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
        </div>

        {/* Responsibilities */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Responsabilités</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Développer et maintenir des applications web</li>
            <li>Collaborer avec l&apos;équipe de design pour implémenter des interfaces utilisateur</li>
            <li>Optimiser les performances des applications</li>
            <li>Participer aux revues de code et aux réunions d&apos;équipe</li>
          </ul>
        </div>

        {/* Qualifications */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Qualifications requises</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Diplôme en informatique ou domaine connexe</li>
            <li>Expérience en développement web avec des frameworks modernes</li>
            <li>Connaissance approfondie de JavaScript, HTML et CSS</li>
            <li>Capacité à travailler en équipe et à communiquer efficacement</li>
          </ul>
        </div>
      </div>

      {/* Search Card */}
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">Rechercher un emploi</h3>
          <input
            type="text"
            placeholder="Titre de l'emploi ou mots-clés"
            className="p-2 border rounded-md w-full bg-white dark:bg-gray-700 dark:border-gray-600"
          />
          <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-md transition duration-300">
            Rechercher
          </button>
        </div>
      </div>
    </div>
  );
}

JobDetails.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default JobDetails;