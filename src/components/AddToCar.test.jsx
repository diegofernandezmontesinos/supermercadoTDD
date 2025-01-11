import { screen, render, fireEvent } from "@testing-library/react";
import AddToCar from "./AddToCar";

const renderShoopingCar = () => {
  render(<AddToCar />);
};

describe("component addToCar", () => {
  it("should render the component", () => {
    renderShoopingCar();
    expect(screen.getByText("Supermercado Online")).toBeInTheDocument();
  });

  // it("should render the list of products", () => {
  //   renderShoopingCar();
  //   expect(screen.getByText(/Manzana/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Precio: 1€/i)).toBeInTheDocument();
  // });

  it("should render the button 'Agregar al carrito'", () => {
    renderShoopingCar();
    const buttons = screen.getAllByText(/Agregar al carrito/i);
    expect(buttons).toHaveLength(3);
  });

  it("should add a product to the car", () => {
    renderShoopingCar();

    const buttons = screen.getAllByText(/Agregar al carrito/i);
    const button = buttons[0]; //usamos el primer boton

    expect(screen.getByText(/Total: 0€/i)).toBeInTheDocument();

    fireEvent.click(button);
    const product = screen.getAllByText(/Manzana/i);
    expect(product).toHaveLength(3);

    const price = screen.getAllByText(/Precio: 1€/i);
    expect(price).toHaveLength(3);
  });

  it("should eliminate a product from the shopping car", () => {
    renderShoopingCar();

    // Obtenemos el botón para agregar el producto
    const addButton = screen.getAllByText(/Agregar al carrito/i)[0]; // Seleccionamos el primer botón
    expect(screen.getByText(/Total: 0€/i)).toBeInTheDocument();

    // Simulamos agregar el producto al carrito
    fireEvent.click(addButton);

    // Verificamos que el producto aparece en el carrito
    const product = screen.queryAllByText(/Manzana/i); // Obtenemos todos los elementos 'Manzana'
    expect(product).toHaveLength(1); // Ahora esperamos un solo producto agregado

    const price = screen.getByText(/Precio: 1€/i);
    expect(price).toBeInTheDocument();

    // Obtenemos el botón para eliminar el producto
    const removeButton = screen.getAllByText(/Eliminar del carrito/i)[0]; // Seleccionamos el primer botón de eliminar
    fireEvent.click(removeButton);

    // Verificamos que el producto desaparece del carrito
    expect(screen.queryByText(/Manzana/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Total: 0€/i)).toBeInTheDocument();
  });
});
