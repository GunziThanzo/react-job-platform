/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaPlus, FaMapMarkerAlt } from 'react-icons/fa';
import NewJobForm from './NewJobForm';
import { locations } from '../data/locations';

const ITEMS_PER_PAGE = 4; // Number of items per page

function JobList({ jobs, setJobs }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [showNewJobForm, setShowNewJobForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === '' || job.category === filterCategory) &&
    (filterLocation === '' || job.location === filterLocation)
  );

  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-green-600 dark:text-green-400">Liste des emplois</h1>
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex-grow w-full md:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher des emplois..."
              className="p-3 pl-10 border rounded-md w-full bg-white dark:bg-gray-800 dark:border-gray-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <select
          className="p-3 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700 w-full md:w-auto"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">Toutes les catégories</option>
          <option value="Programmation">Programmation</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
        </select>
        <select
          className="p-3 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700 w-full md:w-auto"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
        >
          <option value="">Toutes les localisations</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>{location}</option>
          ))}
        </select>
        <button
          onClick={() => setShowNewJobForm(true)}
          className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md flex items-center gap-2 w-full md:w-auto justify-center transition duration-300"
        >
          <FaPlus /> Ajouter un nouvel emploi
        </button>
      </div>
      {showNewJobForm && <NewJobForm setJobs={setJobs} setShowNewJobForm={setShowNewJobForm} />}
      <ul className="grid gap-6 md:grid-cols-2">
        {currentJobs.map(job => (
          <li key={job.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition duration-300">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-black dark:text-green-400">{job.title}</h2>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full dark:bg-green-200 dark:text-green-900">
                  {job.category}
                </span>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400 flex items-center mb-2">
                  <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                  {job.location}
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path></svg>
                  {job.salary.toLocaleString()} FBU par an
                </p>
              </div>
              <Link to={`/jobs/${job.id}`} className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md transition duration-300 inline-block text-center">
                Voir les détails
              </Link>
            </div>
          </li>
        ))}
      </ul>
      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        <span className="self-center">Page {currentPage} sur {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </div>
    </>
  );
}

export default JobList;