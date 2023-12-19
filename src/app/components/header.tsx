"use client";



export default function Header() {

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sistema de Devs</h1>
        <div>
          <a
            href="/pages"
            className="mx-2 px-4 py-2 rounded hover:bg-gray-600"
          >
            Criar/Atualizar Devs
          </a>
          <a
            href="/pages/page2" 
            className="mx-2 px-4 py-2 rounded hover:bg-gray-600"
          >
            Listar/Deletar Devs
          </a>
        </div>
      </nav>
    </header>
  );
};
