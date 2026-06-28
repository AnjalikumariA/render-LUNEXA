const products = [
  {
    brand: "LUNEXA",
    name: "Premium Black Oversized T-Shirt",
    price: "₹1,999"
  },
  {
    brand: "LUNEXA",
    name: "Elegant White Shirt",
    price: "₹2,499"
  },
  {
    brand: "LUNEXA",
    name: "Luxury Beige Dress",
    price: "₹3,499"
  },
  {
    brand: "LUNEXA",
    name: "Classic Brown Handbag",
    price: "₹4,999"
  }
];

const productsContainer = document.querySelector(".products");

products.forEach(product => {
  productsContainer.innerHTML += `
    <div class="product-card">
      <div class="product-image">
        Image
      </div>

      <div class="product-info">
        <h4>${product.brand}</h4>
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    </div>
  `;
});