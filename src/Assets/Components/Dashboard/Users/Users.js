import React from "react";

const users = [
  { id: 1, usuario: "Juan Perez", seccion: "Ventas", rol: "Admin", estado: "Activo" },
  { id: 2, usuario: "Maria Lopez", seccion: "IT", rol: "Usuario", estado: "Inactivo" },
  { id: 3, usuario: "Carlos Ruiz", seccion: "Recursos Humanos", rol: "Editor", estado: "Activo" },
];

const TableComponent = () => {
  const handleEdit = (id) => {
    console.log("Editar usuario con ID:", id);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lista de Usuarios</h2>
      <table className="min-w-full bg-white border border-gray-300 shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="border px-4 py-2">Número Consecutivo</th>
            <th className="border px-4 py-2">Usuario</th>
            <th className="border px-4 py-2">Sección</th>
            <th className="border px-4 py-2">Rol</th>
            <th className="border px-4 py-2">Estado</th>
            <th className="border px-4 py-2">Editar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="text-center border hover:bg-gray-100">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{user.usuario}</td>
              <td className="border px-4 py-2">{user.seccion}</td>
              <td className="border px-4 py-2">{user.rol}</td>
              <td className="border px-4 py-2">
                <span className={`px-2 py-1 rounded ${user.estado === "Activo" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
                  {user.estado}
                </span>
              </td>
              <td className="border px-4 py-2">
                <button 
                  onClick={() => handleEdit(user.id)} 
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;