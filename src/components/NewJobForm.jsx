/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function NewJobForm({ setJobs, setShowNewJobForm }) {
  const [newJob, setNewJob] = useState({
    title: '',
    category: '',
    location: '',
    salary: '',
    description: ''
  });

  const handleNewJobSubmit = (e) => {
    e.preventDefault();
    const jobWithId = { ...newJob, id: Date.now(), salary: Number(newJob.salary) };
    setJobs(prevJobs => [...prevJobs, jobWithId]);
    setNewJob({ title: '', category: '', location: '', salary: '', description: '' });
    setShowNewJobForm(false);
  };

  const handleNewJobChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  return (
    <form onSubmit={handleNewJobSubmit} className="mb-4 p-4 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700">
      <input
        type="text"
        name="title"
        placeholder="Titre de l'emploi"
        value={newJob.title}
        onChange={handleNewJobChange}
        className="p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 mb-2 w-full"
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Catégorie"
        value={newJob.category}
        onChange={handleNewJobChange}
        className="p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 mb-2 w-full"
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Lieu"
        value={newJob.location}
        onChange={handleNewJobChange}
        className="p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 mb-2 w-full"
        required
      />
      <input
        type="number"
        name="salary"
        placeholder="Salaire"
        value={newJob.salary}
        onChange={handleNewJobChange}
        className="p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 mb-2 w-full"
        required
      />
      <textarea
        name="description"
        placeholder="Description de l'emploi"
        value={newJob.description}
        onChange={handleNewJobChange}
        className="p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 mb-2 w-full"
        required
      ></textarea>
      <button type="submit" className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300">
        Ajouter l'emploi
      </button>
    </form>
  );
}

export default NewJobForm;