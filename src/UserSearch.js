// src/UserSearch.js

// Importamos React y los hooks useState desde React
import React, { useState } from 'react';
// Importamos axios para hacer solicitudes HTTP
import axios from 'axios';

const UserSearch = () => {
  // Declaramos un estado para almacenar el ID del usuario ingresado por el usuario
  const [userId, setUserId] = useState('');  // Inicialmente vacío
  // Declaramos un estado para almacenar el nombre del usuario obtenido desde el backend
  const [userName, setUserName] = useState('');  // Inicialmente vacío
  // Declaramos un estado para almacenar cualquier mensaje de error
  const [error, setError] = useState('');  // Inicialmente vacío

  // Función para hacer la solicitud al backend cuando el usuario ingrese un ID
  const getUserInfo = async () => {
    try {
      // Realizamos una solicitud GET a la API backend usando axios, pasando el ID del usuario en la URL
      const response = await axios.get(`http://localhost:8080/users/${userId}`);
      // Si la solicitud es exitosa, actualizamos el nombre del usuario con el dato recibido
      setUserName(response.data.user_name);
      // Limpiamos cualquier mensaje de error
      setError('');
    } catch (err) {
      // Si ocurree un error (por ejemplo, el usuario no existe o hay un problema con la solicitud)
      // mostramos un mensaje de error
      setError('Usuario no encontrado o error en la solicitud');
      // Limpiamos el nombre del usuario en caso de error
      setUserName('');
    }
  };

  return (
    // Contenedor principal con estilo de texto centrado
    <div style={{ textAlign: 'center' }}>
      <h1>Buscar Usuario</h1>

      <div>
        {/* Etiqueta para el campo de ID */}
        <label htmlFor="userId">Ingrese el ID del Usuario:</label>
        {/* Campo de entrada para que el usuario ingrese el ID */}
        <input
          type="number"  // El campo solo acepta números
          id="userId"  // Identificador único para el campo
          value={userId}  // Vinculamos el valor del input con el estado userId
          onChange={(e) => setUserId(e.target.value)}  // Actualizamos el estado cuando el valor cambia
        />

        {/* Botón para enviar la solicitud al backend */}
        <button onClick={getUserInfo}>Enviar</button>
        <button className='btn-salir' onClick>Salir</button>
      </div>

      {/* Si el nombre del usuario está disponible, lo mostramos */}
      {userName && (
        <div>
          <h2>Nombre del Usuario:</h2>
          <p>{userName}</p>
        </div>
      )}

      {/* Si hay un mensaje de error, lo mostramos en color rojo */}
      {error && (
        <div style={{ color: 'red' }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

// Exportamos el componente UserSearch para que pueda ser utilizado en otras partes de la aplicación
export default UserSearch;
