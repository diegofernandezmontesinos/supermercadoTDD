
**dependencies to install:**
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest



**To see the watch test:**


npm test -- --watch


Estructura del test

    Agregar productos al carrito:
        Verifica que los productos seleccionados se agregan correctamente al array cart.
        Verifica que el total se actualiza correctamente.

    Eliminar productos del carrito:
        Verifica que el producto se elimina correctamente del array cart.
        Verifica que el total se actualiza correctamente después de la eliminación.

    Aplicar descuento:
        Prueba que el descuento del 10% se aplique si el total es mayor a 50 euros.
        Prueba que se muestre el mensaje correcto si no se cumplen las condiciones del descuento.