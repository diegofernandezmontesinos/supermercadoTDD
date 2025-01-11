import { screen, render, fireEvent } from "@testing-library/react";
import AddToCar from "./AddToCar";

const renderShoopingCar = () => {
    render(<AddToCar />);
}

describe("component addToCar", () => {
  it("should render the component", () => {
    renderShoopingCar()
    expect(screen.getByText("Supermercado Online")).toBeInTheDocument();
  });

  it("should render the list of products", () => {
    renderShoopingCar()
    expect(screen.getByText(/Manzana/i)).toBeInTheDocument();
    expect(screen.getByText(/Precio: 1€/i)).toBeInTheDocument();
  });

  it("should render the button 'Agregar al carrito'", () => {
    renderShoopingCar()
    const buttons = screen.getAllByText(/Agregar al carrito/i); 
    expect(buttons).toHaveLength(3);
  });

  it('should add a product to the car',() => {
    renderShoopingCar()

    const buttons = screen.getAllByText(/Agregar al carrito/i);
    const button = buttons[0] //usamos el primer boton

    expect(screen.getByText(/Total: 0€/i)).toBeInTheDocument()

    fireEvent.click(button);
    const product = screen.getAllByText(/Manzana/i); 
    expect(product).toHaveLength(2);
    expect(screen.getByText(/Precio: 1€/i)).toBeInTheDocument();

  })
});
