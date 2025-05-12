const products = [
    // Electronics
    {
        id: '1',
        name: 'Smartphone',
        price: 15000.0,
        description: 'Latest smartphone with amazing camera and performance',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        category: 'electronics',
        stock: 10,
        SKU: 'ELEC123'
    },
    {
        id: '2',
        name: 'Wireless Earbuds',
        price: 3000.0,
        description: 'High-quality wireless earbuds with noise cancellation',
        image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        category: 'electronics',
        stock: 25,
        SKU: 'ELEC999'
    },
    {
        id: '3',
        name: 'Laptop',
        price: 45000.0,
        description: 'High-performance laptop with latest processor and graphics',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        category: 'electronics',
        stock: 8,
        SKU: 'ELEC456'
    },
    // Clothing
    {
        id: '4',
        name: 'T-Shirt',
        price: 500.0,
        description: 'Comfortable cotton t-shirt in various colors',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        category: 'clothing',
        stock: 20,
        SKU: 'CLO456'
    },
    {
        id: '5',
        name: 'Jeans',
        price: 1200.0,
        description: 'Classic fit jeans with comfortable stretch',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        category: 'clothing',
        stock: 15,
        SKU: 'CLO789'
    },
    // Books
    {
        id: '6',
        name: 'Fiction Novel',
        price: 300.0,
        description: 'Bestselling fiction novel with engaging storyline',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        category: 'books',
        stock: 15,
        SKU: 'BOOK789'
    },
    {
        id: '7',
        name: 'Science Textbook',
        price: 1200.0,
        description: 'Comprehensive science textbook for advanced learners',
        image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        category: 'books',
        stock: 10,
        SKU: 'BOOK102'
    },
    // More products
    {
        id: '8',
        name: 'Bluetooth Speaker',
        price: 2200.0,
        description: 'Portable Bluetooth speaker with deep bass and long battery life',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
        category: 'electronics',
        stock: 18,
        SKU: 'ELEC888'
    },
    {
        id: '9',
        name: 'Formal Shirt',
        price: 900.0,
        description: 'Elegant formal shirt for office and events',
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
        category: 'clothing',
        stock: 30,
        SKU: 'CLO123'
    },
    {
        id: '10',
        name: "Children's Story Book",
        price: 250.0,
        description: 'Colorful story book for children with illustrations',
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
        category: 'books',
        stock: 40,
        SKU: 'BOOK321'
    },
   
    {
        id: '12',
        name: 'Tablet',
        price: 12000.0,
        description: '10-inch tablet with HD display and long battery life',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
        category: 'electronics',
        stock: 7,
        SKU: 'ELEC777'
    },
    {
        id: '13',
        name: 'Cookbook',
        price: 450.0,
        description: 'Delicious recipes from around the world',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
        category: 'books',
        stock: 22,
        SKU: 'BOOK654'
    }
];

// Application state
let cart = [];
let wishlist = [];
let currentUser = null;
let isAdmin = false;
let currentCategory = 'all';
let searchQuery = '';

// DOM Elements
const productGrid = document.getElementById('product-grid');
const cartModal = document.getElementById('cart-modal');
const wishlistModal = document.getElementById('wishlist-modal');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const cartCount = document.getElementById('cart-count');
const wishlistCount = document.getElementById('wishlist-count');
const cartItems = document.getElementById('cart-items');
const wishlistItems = document.getElementById('wishlist-items');
const cartTotal = document.getElementById('cart-total');
const accountLink = document.getElementById('account-link');
const registerLink = document.getElementById('register-link');
const adminDashboard = document.getElementById('admin-dashboard');
const productsSection = document.getElementById('products');
const searchInput = document.getElementById('search-input');
const categoryButtons = document.querySelectorAll('.category-btn');

// Modal functions
function openCart() {
    if (!currentUser) {
        openLogin();
        return;
    }
    cartModal.style.display = 'block';
}

function openWishlist() {
    if (!currentUser) {
        openLogin();
        return;
    }
    updateWishlistDisplay();
    wishlistModal.style.display = 'block';
}

function openLogin() {
    loginModal.style.display = 'block';
}

function openRegister() {
    registerModal.style.display = 'block';
}

function closeLogin() {
    loginModal.style.display = 'none';
}

function closeAllModals() {
    cartModal.style.display = 'none';
    wishlistModal.style.display = 'none';
    loginModal.style.display = 'none';
    registerModal.style.display = 'none';
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize state
    isAdmin = sessionStorage.getItem('userType') === 'admin';
    currentCategory = 'all';
    searchQuery = '';
    
    // Load products immediately
    loadProducts();
    
    // Set up event listeners
    setupEventListeners();
});

// Check if user is already logged in
function checkSession() {
    const userType = sessionStorage.getItem('userType');
    const userName = sessionStorage.getItem('userName');
    
    if (userType && userName) {
        currentUser = { email: userName, name: userName };
        isAdmin = userType === 'admin';
        updateUIForUser();
    }
}

// Set up all event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        loadProducts();
    });

    // Category filtering
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.dataset.category;
            loadProducts();
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Cart modal
    document.querySelector('a[href="#cart"]').addEventListener('click', (e) => {
        e.preventDefault();
        openCart();
    });

    // Wishlist modal
    document.querySelector('a[href="#wishlist"]').addEventListener('click', (e) => {
        e.preventDefault();
        openWishlist();
    });

    // Login modal
    document.querySelector('a[href="#account"]').addEventListener('click', (e) => {
        e.preventDefault();
        openLogin();
    });

    // Register link
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeLogin();
        openRegister();
    });

    // Close buttons
    document.querySelectorAll('.close').forEach(button => {
        button.addEventListener('click', () => {
            closeAllModals();
        });
    });

    // Login form
    document.getElementById('login-form').addEventListener('submit', handleLogin);

    // Register form
    document.getElementById('register-form').addEventListener('submit', handleRegister);

    // Checkout button
    document.getElementById('checkout-btn').addEventListener('click', handleCheckout);

    // Logout functionality
    accountLink.addEventListener('click', (e) => {
        if (currentUser) {
            e.preventDefault();
            handleLogout();
        }
    });
}

// Load products into the grid
function loadProducts() {
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery) ||
                              product.description.toLowerCase().includes(searchQuery);
        const matchesCategory = currentCategory === 'all' || 
                                product.category === currentCategory;
        return matchesSearch && matchesCategory;
    });

    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-actions">
                    <button class="quick-view-btn" onclick="quickView('${product.id}')">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}" 
                            onclick="toggleWishlist('${product.id}')">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">₹${product.price.toLocaleString()}</p>
                <button class="add-to-cart" onclick="addToCart('${product.id}')">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Cart functions
function addToCart(productId) {
    if (!currentUser) {
        openLogin();
        return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    updateCart();
}

function updateCart() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <h3>${item.name}</h3>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: ₹${(item.price * item.quantity).toLocaleString()}</p>
            <button onclick="removeFromCart('${item.id}')">Remove</button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `₹${total.toLocaleString()}`;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Wishlist functions
function isInWishlist(productId) {
    return wishlist.some(item => item.id === productId);
}

function toggleWishlist(productId) {
    if (!currentUser) {
        openLogin();
        return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (isInWishlist(productId)) {
        wishlist = wishlist.filter(item => item.id !== productId);
    } else {
        wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        });
    }

    updateWishlistCount();
    loadProducts();
}

function updateWishlistCount() {
    wishlistCount.textContent = wishlist.length;
}

// Quick view function
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Create and show quick view modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="quick-view-content">
                <img src="${product.image}" alt="${product.name}">
                <div class="quick-view-info">
                    <h2>${product.name}</h2>
                    <p class="price">₹${product.price.toLocaleString()}</p>
                    <p class="description">${product.description}</p>
                    <button class="add-to-cart" onclick="addToCart('${product.id}')">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = 'block';

    // Close button functionality
    modal.querySelector('.close').onclick = () => {
        modal.remove();
    };

    // Close when clicking outside
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.remove();
        }
    };
}

// Authentication functions
async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userrole').value;

    try {
        const response = await fetch(`${API_BASE}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, userType })
        });

        if (response.ok) {
            currentUser = await response.json();
            isAdmin = userType === 'admin';
            
            // Store session data
            sessionStorage.setItem('userName', currentUser.email);
            sessionStorage.setItem('userType', userType);
            
            updateUIForUser();
            closeAllModals();
        } else {
            alert('Login failed. Please check your credentials.');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred during login.');
    }
}

async function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const address = document.getElementById('reg-address').value;
    const mobile = document.getElementById('reg-mobile').value;
    const usertype = document.getElementById('reg-usertype').value;

    try {
        const response = await fetch(`${API_BASE}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, address, mobile, usertype })
        });

        if (response.ok) {
            alert('Registration successful! Please login.');
            closeAllModals();
            openLogin();
        } else {
            alert('Registration failed. Please try again.');
        }
    } catch (error) {
        console.error('Registration error:', error);
        alert('An error occurred during registration.');
    }
}

function handleLogout() {
    currentUser = null;
    isAdmin = false;
    cart = [];
    wishlist = [];
    sessionStorage.clear();
    updateUIForUser();
    updateCart();
    updateWishlistCount();
}

function updateUIForUser() {
    if (currentUser) {
        accountLink.textContent = currentUser.name;
        if (isAdmin) {
            if (adminDashboard) adminDashboard.style.display = 'block';
            if (productsSection) productsSection.style.display = 'none';
        } else {
            if (adminDashboard) adminDashboard.style.display = 'none';
            if (productsSection) {
                productsSection.style.display = 'block';
                loadProducts();
            }
        }
    } else {
        accountLink.textContent = 'Login';
        if (adminDashboard) adminDashboard.style.display = 'none';
        if (productsSection) productsSection.style.display = 'block';
    }
}

// Checkout function
async function handleCheckout() {
    if (!currentUser) {
        openLogin();
        return;
    }

    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/api/checkout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: currentUser.email,
                items: cart
            })
        });

        if (response.ok) {
            alert('Order placed successfully!');
            cart = [];
            updateCart();
            closeAllModals();
        } else {
            alert('Checkout failed. Please try again.');
        }
    } catch (error) {
        console.error('Checkout error:', error);
        alert('An error occurred during checkout.');
    }
}

// Admin Functions
function viewProducts() {
    // Hide admin dashboard and show products management section
    adminDashboard.style.display = 'none';
    const productsManagement = document.getElementById('products-management');
    if (!productsManagement) {
        // Create products management section if it doesn't exist
        const section = document.createElement('section');
        section.id = 'products-management';
        section.className = 'admin-section';
        section.innerHTML = `
            <div class="admin-header">
                <button onclick="backToDashboard()" class="back-button">
                    <i class="fas fa-arrow-left"></i> Back to Dashboard
                </button>
                <h2>Product Management</h2>
            </div>
            <div class="admin-content">
                <div class="admin-actions">
                    <button onclick="addProduct()" class="action-button">
                        <i class="fas fa-plus"></i> Add Product
                    </button>
                    <button onclick="removeProduct()" class="action-button">
                        <i class="fas fa-trash"></i> Remove Product
                    </button>
                    <button onclick="updateProduct()" class="action-button">
                        <i class="fas fa-edit"></i> Update Product
                    </button>
                </div>
                <div id="products-list" class="admin-list">
                    <!-- Products will be loaded here -->
                </div>
            </div>
        `;
        document.body.appendChild(section);
    }
    document.getElementById('products-management').style.display = 'block';
}

function viewOrders() {
    // Hide admin dashboard and show orders management section
    adminDashboard.style.display = 'none';
    const ordersManagement = document.getElementById('orders-management');
    if (!ordersManagement) {
        // Create orders management section if it doesn't exist
        const section = document.createElement('section');
        section.id = 'orders-management';
        section.className = 'admin-section';
        section.innerHTML = `
            <div class="admin-header">
                <button onclick="backToDashboard()" class="back-button">
                    <i class="fas fa-arrow-left"></i> Back to Dashboard
                </button>
                <h2>Order Management</h2>
            </div>
            <div class="admin-content">
                <div class="admin-actions">
                    <button onclick="viewAllOrders()" class="action-button">
                        <i class="fas fa-list"></i> View All Orders
                    </button>
                    <button onclick="viewShippedOrders()" class="action-button">
                        <i class="fas fa-truck"></i> View Shipped Orders
                    </button>
                    <button onclick="viewUnshippedOrders()" class="action-button">
                        <i class="fas fa-box"></i> View Unshipped Orders
                    </button>
                </div>
                <div id="orders-list" class="admin-list">
                    <!-- Orders will be loaded here -->
                </div>
            </div>
        `;
        document.body.appendChild(section);
    }
    document.getElementById('orders-management').style.display = 'block';
}

function viewStock() {
    // Hide admin dashboard and show stock management section
    adminDashboard.style.display = 'none';
    const stockManagement = document.getElementById('stock-management');
    if (!stockManagement) {
        // Create stock management section if it doesn't exist
        const section = document.createElement('section');
        section.id = 'stock-management';
        section.className = 'admin-section';
        section.innerHTML = `
            <div class="admin-header">
                <button onclick="backToDashboard()" class="back-button">
                    <i class="fas fa-arrow-left"></i> Back to Dashboard
                </button>
                <h2>Stock Management</h2>
            </div>
            <div class="admin-content">
                <div class="admin-actions">
                    <button onclick="viewCurrentStock()" class="action-button">
                        <i class="fas fa-boxes"></i> View Current Stock
                    </button>
                    <button onclick="updateStock()" class="action-button">
                        <i class="fas fa-edit"></i> Update Stock
                    </button>
                </div>
                <div id="stock-list" class="admin-list">
                    <!-- Stock information will be loaded here -->
                </div>
            </div>
        `;
        document.body.appendChild(section);
    }
    document.getElementById('stock-management').style.display = 'block';
}

function backToDashboard() {
    // Hide all admin sections
    document.querySelectorAll('.admin-section').forEach(section => {
        section.style.display = 'none';
    });
    // Show admin dashboard
    adminDashboard.style.display = 'block';
}

function addProduct() {
    showAdminActionSection('add-product', 'Add Product', `
        <form id="add-product-form" class="admin-form">
            <label>Name: <input type="text" id="add-prod-name" required></label><br>
            <label>Price: <input type="number" id="add-prod-price" required></label><br>
            <label>Description: <input type="text" id="add-prod-desc" required></label><br>
            <label>Image URL: <input type="text" id="add-prod-img" required></label><br>
            <label>Category: <select id="add-prod-cat" required>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
            </select></label><br>
            <label>Stock: <input type="number" id="add-prod-stock" required></label><br>
            <label>SKU: <input type="text" id="add-prod-sku" required></label><br>
            <button type="submit">Add Product</button>
        </form>
        <div id="add-product-success" style="color:green;"></div>
    `);
    document.getElementById('add-product-form').onsubmit = function(e) {
        e.preventDefault();
        const newProduct = {
            id: (products.length + 1).toString(),
            name: document.getElementById('add-prod-name').value,
            price: parseFloat(document.getElementById('add-prod-price').value),
            description: document.getElementById('add-prod-desc').value,
            image: document.getElementById('add-prod-img').value,
            category: document.getElementById('add-prod-cat').value,
            stock: parseInt(document.getElementById('add-prod-stock').value),
            SKU: document.getElementById('add-prod-sku').value
        };
        products.push(newProduct);
        document.getElementById('add-product-success').textContent = 'Product added!';
        this.reset();
    };
}

function removeProduct() {
    let listHtml = '<ul class="admin-list">';
    products.forEach(prod => {
        listHtml += `<li>${prod.name} (SKU: ${prod.SKU}) <button onclick="removeProductById('${prod.id}')">Remove</button></li>`;
    });
    listHtml += '</ul>';
    showAdminActionSection('remove-product', 'Remove Product', listHtml);
}

window.removeProductById = function(id) {
    const idx = products.findIndex(p => p.id === id);
    if (idx !== -1) {
        products.splice(idx, 1);
        removeProduct();
    }
};

function updateProduct() {
    let listHtml = '<ul class="admin-list">';
    products.forEach(prod => {
        listHtml += `<li>${prod.name} (SKU: ${prod.SKU}) <button onclick="showUpdateProductForm('${prod.id}')">Update</button></li>`;
    });
    listHtml += '</ul>';
    showAdminActionSection('update-product', 'Update Product', `<div id="update-product-list">${listHtml}</div><div id="update-product-form-container"></div>`);
}

window.showUpdateProductForm = function(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;
    document.getElementById('update-product-form-container').innerHTML = `
        <form id="update-product-form" class="admin-form">
            <label>Name: <input type="text" id="upd-prod-name" value="${prod.name}" required></label><br>
            <label>Price: <input type="number" id="upd-prod-price" value="${prod.price}" required></label><br>
            <label>Description: <input type="text" id="upd-prod-desc" value="${prod.description}" required></label><br>
            <label>Image URL: <input type="text" id="upd-prod-img" value="${prod.image}" required></label><br>
            <label>Category: <select id="upd-prod-cat" required>
                <option value="electronics" ${prod.category === 'electronics' ? 'selected' : ''}>Electronics</option>
                <option value="clothing" ${prod.category === 'clothing' ? 'selected' : ''}>Clothing</option>
                <option value="books" ${prod.category === 'books' ? 'selected' : ''}>Books</option>
            </select></label><br>
            <label>Stock: <input type="number" id="upd-prod-stock" value="${prod.stock}" required></label><br>
            <label>SKU: <input type="text" id="upd-prod-sku" value="${prod.SKU}" required></label><br>
            <button type="submit">Update Product</button>
        </form>
        <div id="update-product-success" style="color:green;"></div>
    `;
    document.getElementById('update-product-form').onsubmit = function(e) {
        e.preventDefault();
        prod.name = document.getElementById('upd-prod-name').value;
        prod.price = parseFloat(document.getElementById('upd-prod-price').value);
        prod.description = document.getElementById('upd-prod-desc').value;
        prod.image = document.getElementById('upd-prod-img').value;
        prod.category = document.getElementById('upd-prod-cat').value;
        prod.stock = parseInt(document.getElementById('upd-prod-stock').value);
        prod.SKU = document.getElementById('upd-prod-sku').value;
        document.getElementById('update-product-success').textContent = 'Product updated!';
        updateProduct();
    };
};

function viewShippedOrders() {
    showAdminActionSection('shipped-orders', 'Shipped Orders', '<p>List of shipped orders goes here.</p>');
}

function viewUnshippedOrders() {
    showAdminActionSection('unshipped-orders', 'Unshipped Orders', '<p>List of unshipped orders goes here.</p>');
}

function updateStock() {
    showAdminActionSection('update-stock', 'Update Stock', '<p>Stock update form goes here.</p>');
}

function viewCurrentStock() {
    showAdminActionSection('current-stock', 'Current Stock', '<p>Current stock information goes here.</p>');
}

function showAdminActionSection(sectionId, title, contentHtml) {
    adminDashboard.style.display = 'none';
    // Hide all other admin sections
    document.querySelectorAll('.admin-section').forEach(section => {
        section.style.display = 'none';
    });
    let section = document.getElementById(sectionId);
    if (!section) {
        section = document.createElement('section');
        section.id = sectionId;
        section.className = 'admin-section';
        section.innerHTML = `
            <div class="admin-header">
                <button onclick="backToDashboard()" class="back-button">
                    <i class="fas fa-arrow-left"></i> Back to Dashboard
                </button>
                <h2>${title}</h2>
            </div>
            <div class="admin-content">
                ${contentHtml}
            </div>
        `;
        document.body.appendChild(section);
    }
    section.style.display = 'block';
}

function updateWishlistDisplay() {
    wishlistItems.innerHTML = wishlist.map(item => `
        <div class="wishlist-item">
            <img src="${item.image}" alt="${item.name}" class="wishlist-item-image">
            <div class="wishlist-item-info">
                <h3>${item.name}</h3>
                <p class="price">₹${item.price.toLocaleString()}</p>
                <button onclick="addToCart('${item.id}')" class="add-to-cart">Add to Cart</button>
                <button onclick="toggleWishlist('${item.id}')" class="remove-from-wishlist">Remove</button>
            </div>
        </div>
    `).join('');
}

const API_BASE = "http://127.0.0.1:5000";