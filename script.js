const products = [
  {
    name: " Samsung s10",
    promoPrice: "$400",
    originalPrice: "$600",
    image: "./images/s10.jpg",
  },
  {
    name: "Samsung S20",
    promoPrice: "$500",
    originalPrice: "$700",
    image: "./images/s20.webp",
  },
  {
    name: "Samsung S20 ultra",
    promoPrice: "$600",
    originalPrice: "$700",
    image: "./images/s20ultra.webp",
  },
  {
    name: "Redmi 15c",
    promoPrice: "$700",
    originalPrice: "$800",
    image: "./images/redmi15c.jpg",
  },
  {
    name: "Tecno POP 10",
    promoPrice: "$800",
    originalPrice: "$900",
    image: "./images/pop10.webp",
  },
  {
    name: "Redmi 14c",
    promoPrice: "$500",
    originalPrice: "$700",
    image: "./images/redmi14c.webp",
  },
  {
    name: "Redmi 13c",
    promoPrice: "$400",
    originalPrice: "$600",
    image: "./images/redmi13c.webp",
  },
  {
    name: "Redmi note 8",
    promoPrice: "$400",
    originalPrice: "$600",
    image: "./images/note8.webp",
  },
  {
    name: "Redmi A5",
    promoPrice: "$400",
    originalPrice: "$900",
    image: "./images/redmiA5.jpg",
  },
  {
    name: "Redmi note 9",
    promoPrice: "$500",
    originalPrice: "$700",
    image: "./images/note9.webp",
  },
  {
    name: "Itel city 100",
    promoPrice: "$500",
    originalPrice: "$700",
    image: "./images/city100.jpg",
  },
  {
    name: "Samsung s23 ",
    promoPrice: "$800",
    originalPrice: "$1000",
    image: "./images/s23ultra.webp",
  },
];

let eachItem= document.getElementById("product");

eachItem.innerHTML = products
  .map(function (value, index, array) {
    return `
    
   
    <div class="eachproduct">
        <img src="${value.image}">
        <p class="itemName">${value.name}</p>
        <p>PromoPrice: ${value.promoPrice}</p>
        <span>OriginalPrice:</span>
        <span class="oldprice"> ${value.originalPrice}</span>
       <div class="add"> <button>Add to cart</button></div>
        <div class="discount">25%</div>
       
    </div>
   
    `;
  })
  .join("");

