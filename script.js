// Sample cart data
const cartItems = [
    { id: 1, name: "Product 1", price: 19.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 29.99, quantity: 1 },
  ];
  
  // Calculate total price
  function calculateTotal() {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }
    return total.toFixed(2);
  }
  
  // Render cart items
  function renderCartItems() {
    const cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = "";
  
    for (const item of cartItems) {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.className = "cart-item";
      cartItemDiv.innerHTML = `
        <div class="item-info">
          <p>${item.name}</p>
          <p>$${item.price.toFixed(2)}</p>
          <p>Quantity: ${item.quantity}</p>
        </div>
        <button class="remove-btn" data-id="${item.id}">Remove</button>
      `;
      cartItemsDiv.appendChild(cartItemDiv);
    }
  
    const cartTotalSpan = document.getElementById("cart-total");
    cartTotalSpan.textContent = `$${calculateTotal()}`;
  }
  
  // Handle remove button click
  function handleRemoveClick(event) {
    const itemId = parseInt(event.target.getAttribute("data-id"));
    const index = cartItems.findIndex(item => item.id === itemId);
    if (index !== -1) {
      cartItems.splice(index, 1);
      renderCartItems();
    }
  }
  
  // Initialize
  function initialize() {
    renderCartItems();
  
    const removeButtons = document.querySelectorAll(".remove-btn");
    removeButtons.forEach(button => {
      button.addEventListener("click", handleRemoveClick);
    });
  }
  
  // Run initialization when the page loads
  window.addEventListener("load", initialize);
  