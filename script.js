/******** GLOBAL VARIABLES ********/
let cart = [];
let total = 0;

/******** LOGIN ********/
function login() {
  const username = document.getElementById("username")?.value;
  const password = document.getElementById("password")?.value;

  if (username === "" || password === "") {
    alert("Please enter username and password");
    return;
  }

  // simple demo login
  window.location.href = "dashboard.html";
}

/******** SIGNUP ********/
function signup() {
  const user = document.getElementById("newUsername")?.value;
  const pass = document.getElementById("newPassword")?.value;
  const confirm = document.getElementById("confirmPassword")?.value;

  if (!user || !pass || !confirm) {
    alert("Fill all fields");
    return;
  }

  if (pass !== confirm) {
    alert("Passwords do not match");
    return;
  }

  alert("Signup successful! Please login.");
  window.location.href = "index.html";
}

function goSignup() {
  window.location.href = "signup.html";
}

function goLogin() {
  window.location.href = "index.html";
}

/******** PRODUCTS ********/
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  alert(name + " added to cart");
}

function goCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("total", total);
  window.location.href = "cart.html";
}

/******** CART PAGE ********/
function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const totalAmount = localStorage.getItem("total") || 0;

  const cartDiv = document.getElementById("cart");
  const totalDiv = document.getElementById("total");

  if (!cartDiv || !totalDiv) return;

  cartDiv.innerHTML = "";

  cartItems.forEach(item => {
    const p = document.createElement("p");
    p.innerText = `${item.name} - ₹${item.price}`;
    cartDiv.appendChild(p);
  });

  totalDiv.innerText = totalAmount;
}

function clearCart() {
  localStorage.clear();
  document.getElementById("cart").innerHTML = "";
  document.getElementById("total").innerText = "0";
}

/******** SEARCH ********/
function searchProduct() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  const products = document.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    const text = products[i].innerText.toLowerCase();
    products[i].style.display = text.includes(input) ? "block" : "none";
  }
}function placeOrder() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("✅ Order placed successfully!\nThank you for shopping.");

  // clear cart after order
  localStorage.clear();

  // back to products page
  window.location.href = "products.html";
}
function goProducts() {
  window.location.href = "products.html";
}

function logout() {
  window.location.href = "index.html";
}