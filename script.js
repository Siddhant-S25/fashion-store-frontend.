const products = [
    { id: 1, name: "Summer Floral Dress", price: 1299, image: "images/dress1.jpg" },
    { id: 2, name: "Casual Denim Jacket", price: 1999, image: "images/jacket1.jpg" },
    { id: 3, name: "Trendy Sneakers", price: 2499, image: "images/shoes1.jpg" },
    { id: 4, name: "Leather Handbag", price: 1799, image: "images/bag1.jpg" }
];

function loadFeaturedProducts() {
    const container = document.getElementById("featured-products");
    if (!container) return;
    container.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join("");
}

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

loadFeaturedProducts();
