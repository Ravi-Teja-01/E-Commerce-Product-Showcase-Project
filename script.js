// Sample products
const products = [
  { id: 1, name: "Smartphone", price: 24999, img: "C:/Users/ravit/OneDrive/Pictures/Saved Pictures/Smartphone.jpeg" },
  { id: 2, name: "Headphones", price: 699, img: "C:/Users/ravit/OneDrive/Pictures/Saved Pictures/Headphones.jpg" },
  { id: 3, name: "Smartwatch", price: 999, img: "C:/Users/ravit/OneDrive/Pictures/Saved Pictures/Smartwatch.jpeg" },
  { id: 4, name: "Pen", price: 25, img: "C:/Users/ravit/OneDrive/Pictures/Saved Pictures/pen.jpg" }
  ];
// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render products
const productList = document.getElementById("product-list");
products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Rs.${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productList.appendChild(div);
});

// Update cart count
function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}
updateCartCount();

// Add to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(product.name + " added to cart!");
}
