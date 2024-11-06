let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    const cartCount = document.getElementById('cart-count');

    listaCarrito.innerHTML = '';

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        listaCarrito.appendChild(li);
    });

    totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
    cartCount.textContent = carrito.length;
}

function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}

function mostrarCarrito() {
    const carritoSection = document.getElementById('carrito');
    carritoSection.style.display = carritoSection.style.display === 'none' ? 'block' : 'none';
}

// Agrega un evento a los botones del menú
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', (event) => {
        const producto = event.target.closest('.product');
        const nombre = producto.querySelector('p').innerText;
        const precio = parseFloat(producto.querySelector('span').innerText.replace('$', ''));
        agregarAlCarrito(nombre, precio);
    });
});
