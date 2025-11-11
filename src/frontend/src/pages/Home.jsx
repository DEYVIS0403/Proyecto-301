import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react"; // si usas lucide-react

function Home() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const productos = [
    { id: 1, nombre: "Producto 1", precio: 25.0, imagen: "/img1.jpg" },
    { id: 2, nombre: "Producto 2", precio: 40.0, imagen: "/img2.jpg" },
    { id: 3, nombre: "Producto 3", precio: 30.0, imagen: "/img3.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900">
      {/* Encabezado */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          MiTienda <ShoppingCart className="w-6 h-6 text-indigo-600" />
        </h1>
        {!token && (
          <Link
            to="/login"
            className="text-indigo-600 hover:text-indigo-800 font-semibold"
          >
            Iniciar sesión
          </Link>
        )}
      </header>

      {/* Contenido principal */}
      <main className="max-w-6xl mx-auto p-8">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Bienvenido a MiTienda
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Encuentra los mejores productos al mejor precio
        </p>

        {!token && (
          <p className="text-center text-red-500 font-medium mb-6">
            Parece que no has iniciado sesión
          </p>
        )}

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={p.imagen}
                alt={p.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{p.nombre}</h3>
                <p className="text-lg text-gray-700 mb-4">${p.precio.toFixed(2)}</p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;

