const buttons = document.querySelectorAll('.btn-buy');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let cart = [];

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.parentElement;
    const name = card.querySelector('h3').textContent;
    const price = Number(card.dataset.price);

    // Adiciona ao carrinho
    cart.push({ name, price });

    renderCart();
  });
});

function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price.toLocaleString('pt-BR')}`;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = `R$ ${total.toLocaleString('pt-BR')}`;
}
