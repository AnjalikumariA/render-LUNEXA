const products = [
  {

  brand: "LUNEXA",
  name: "Premium Black Oversized T-Shirt",
  price: "₹1,999",
  image: "/images/products/shirt.jpg"

  },
  {
  brand: "LUNEXA",
  name: "Elegant White Shirt",
  price: "₹2,499",
  image: "/images/products/white-shirt.jpg"
},
  {
  brand: "LUNEXA",
  name: "Luxury Beige Dress",
  price: "₹3,499",
  image: "/images/products/dress.jpg"
},
  {
  brand: "LUNEXA",
  name: "Classic Brown Handbag",
  price: "₹4,999",
  image: "/images/products/handbag.jpg"
},
];

const productsContainer = document.querySelector(".products");

products.forEach(product => {
  productsContainer.innerHTML += `
    <div class="product-card">
     <div class="product-image">
    <img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;">
</div>


      <div class="product-info">
        <h4>${product.brand}</h4>
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    </div>
  `;
});