"use client";

import React, { useState, useEffect } from "react";
import { api } from "../../services/api";

interface Developer {
  id: number;
  name: string;
}

export default function PageOne() {
  const [loading, setLoading] = useState(false);
  const [textInput, setTextInput] = useState("");
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

  async function handleAddDev() {
    try {
      const data = { name: textInput };
      const response = await api.post("http://localhost:3333/developers", data);
      console.log("Dev cadastrado com sucesso", response);
      loadDevs();
    } catch (error) {
      alert("Erro ao cadastrar o dev");
    }
  }

  async function handleEditDev(id: number, newName: string) {
    try {
      const updatedDevs = devs.map((dev) =>
        dev.id === id ? { ...dev, name: newName } : dev
      );
      setDevs(updatedDevs);

      const data = { name: newName };
      await api.put(`http://localhost:3333/developers/${id}`, data);
      console.log("Dev atualizado com sucesso");
    } catch (error) {
      alert("Erro ao editar o dev");
    }
  }

  return (
    <main className="p-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <h1 className="text-3xl font-bold py-4">Developers</h1>
        <ul>
          {devs.map((dev) => (
            <li key={dev.id} className="py-2">
              {dev.name}{" "}
              <button
              
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={() => {
                  const newName = prompt("Digite o novo nome:");
                  if (newName) handleEditDev(dev.id, newName);
                }}
              >
                Editar
              </button>
            </li>
          ))}
        </ul>
        <input
          className="w-full px-4 py-2 my-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Digite o nome do desenvolvedor"
        />
        <div className="flex justify-center items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddDev}
          >
            Adicionar
          </button>
        </div>
      </div>
      {loading && <p className="text-center mt-4">Carregando...</p>}
    </main>
  );
}
