// Basic handling of the contact form submission
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const message = document.getElementById('form-message');
    if (message) {
      message.classList.remove('hidden');
    }
    form.reset();
  });
}

// Cart handling
const CART_KEY = 'cartItems';

function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  cart.push({ name, price });
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  alert('Added to cart');
}

function loadCart() {
  const container = document.getElementById('cart-items');
  if (!container) return;
  const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  if (cart.length === 0) {
    container.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    const ul = document.createElement('ul');
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      total += item.price;
      ul.appendChild(li);
    });
    container.appendChild(ul);
    const totalEl = document.createElement('p');
    totalEl.className = 'total';
    totalEl.textContent = `Total: $${total.toFixed(2)}`;
    container.appendChild(totalEl);
  }
  const checkoutBtn = document.getElementById('checkout-button');
  if (checkoutBtn) {
    checkoutBtn.style.display = cart.length > 0 ? 'inline-block' : 'none';
  }
}

const checkoutForm = document.getElementById('checkout-form');
if (checkoutForm) {
  checkoutForm.addEventListener('submit', function (event) {
    event.preventDefault();
    localStorage.removeItem(CART_KEY);
    const msg = document.getElementById('order-message');
    if (msg) {
      msg.classList.remove('hidden');
    }
  });
}

document.addEventListener('DOMContentLoaded', loadCart);
