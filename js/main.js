// ========== 公共工具函数 ==========

// 购物车操作
function getCart() {
  return JSON.parse(localStorage.getItem('ecommerce_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('ecommerce_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity });
  }
  saveCart(cart);
  showToast('已添加到购物车');
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
}

function updateCartQuantity(productId, quantity) {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = Math.max(1, quantity);
    saveCart(cart);
  }
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function getCartTotal() {
  return getCart().reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (badge) {
    const count = getCartCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

// Toast 提示
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 2000);
}

// 获取URL参数
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// 设置当前页面导航高亮
function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && path.endsWith(href)) {
      link.classList.add('active');
    }
  });
}

// 格式化价格
function formatPrice(price) {
  return '¥' + price.toFixed(2);
}

// 生成产品卡片HTML
function createProductCard(product) {
  return `
    <div class="product-card">
      <a href="product.html?id=${product.id}">
        <div class="product-img" style="background:${product.bg}">
          <span>${product.emoji}</span>
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
      </a>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="product-category">${product.category}</div>
        <div class="product-price">
          ${formatPrice(product.price)}
          <span class="original">${formatPrice(product.originalPrice)}</span>
        </div>
        <div class="product-actions">
          <a href="product.html?id=${product.id}" class="btn btn-outline btn-sm">查看</a>
          <button class="btn btn-primary btn-sm" onclick="addToCart(${product.id}); event.stopPropagation();">
            加入购物车
          </button>
        </div>
      </div>
    </div>
  `;
}

// 页面初始化
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  updateCartBadge();
});
