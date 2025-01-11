import React, { useState } from "react";

const AddToCar = () => {
    const [productsAddedToCar, setProductsAddedToCar] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const productos = [
        { id: 1, nombre: "Manzana", precio: 1 },
        { id: 2, nombre: "Plátano", precio: 2 },
        { id: 3, nombre: "Pan", precio: 3 },
    ];

    const addToCar = (producto) => {
        setProductsAddedToCar((prev) => [...prev, producto])
        setTotalPrice((prev)=> prev + producto.precio)
    }

    const removeFromCar = (index) => {
      const producto = productsAddedToCar[index]
      setProductsAddedToCar((prev) => prev.filter((_, i) => i !== index));
      setTotalPrice((prevTotal) => prevTotal - producto.precio);
    }

  return (
    <>
      <div>
        <h1>Supermercado Online</h1>
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              {producto.nombre} - Precio: {producto.precio}€
              <button onClick={() => addToCar(producto)}>Agregar al carrito</button>
            </li>
          ))}
        </ul>
        {productos.map((producto, index) => (
            <li key={producto.id}>
              {producto.nombre} - Precio: {producto.precio}€
              <button onClick={() => removeFromCar(index)}>Eliminar del carrito</button>
            </li>
          ))}

        <h2>Shopping Car</h2>
        <ul>
          {productsAddedToCar.map((producto, index) => (
            <li key={index}>
              {producto.nombre} - Precio: {producto.precio}€
            </li>
          ))}
        </ul>
        <p>Total: {totalPrice}€</p>
      </div>
    </>
  );
};

export default AddToCar;
