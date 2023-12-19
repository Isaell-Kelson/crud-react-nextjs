"use client";

import React, { useEffect, useState } from 'react';
import { api } from '../../../services/api';

interface Developer {
  id: number;
  name: string;
  email: string;
}

const DeveloperListPage = () => {
  const [loading, setLoading] = useState(false);
  const [devs, setDevs] = useState<Developer[]>([]);

  useEffect(() => {
    loadDevs();
  }, []);

  async function loadDevs() {
    setLoading(true);
    try {
      const response = await api.get("http://localhost:3333/developers");
      setDevs(response.data);
    } catch (error) {
      alert("Erro ao carregar os devs");
    } finally {
      setLoading(false);
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await deleteDeveloper(id);
      const updatedDevelopers = devs.filter((dev) => dev.id !== id);
      setDevs(updatedDevelopers);
    } catch (error) {
      alert("Erro ao deletar o dev");
    }
  };

  const deleteDeveloper = async (id: number) => {
    try {
      await api.delete(`http://localhost:3333/developers/${id}`);
    } catch (error) {
      throw new Error("Erro ao realizar a exclusão do dev");
    }
  };

  return (
    <div>
      <h1>Lista de Desenvolvedores</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {devs.map((dev) => (
            <li key={dev.id}>
              {dev.name} - {dev.email}
              <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' onClick={() => handleDelete(dev.id)}>Deletar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeveloperListPage;
