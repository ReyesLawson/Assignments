let productItems = [
  {
    name: "Hershey",
    Price: 1.98,
    description: "Flavorfull chocolate bar",
    image: "./images/Hershey.jpg",
  },
  {
    name: "Nerds",
    Price: 1.35,
    description: "Colorful chewable hard candy",
    image: "./images/Nerds.jpg",
  },
  {
    name: "Swedish Fish",
    Price: 5.0,
    description: "Fish shaped gummy candy",
    image: "./images/Fish.jpg",
  },
  {
    name: "Lollipop",
    Price: 0.98,
    description: "Hard sugar candy on a stick",
    image: "./images/Lollipop.jpg",
  },
  {
    name: "Gum Drops",
    Price: 2.0,
    description: "Gummy colorful sweet candy",
    image: "./images/Drops.jpg",
  },
];

function addProducts() {
  let productDiv = document.getElementById("products");

  for (let index in productItems) {
    console.log(productItems[index].name);

    let candyContainer = document.createElement("div");
    candyContainer.className = "col";

    let productTitleElement = document.createElement("h2");
    productTitleElement.textContent = `${productItems[index].name}`;

    let productPriceElement = document.createElement("p");
    productPriceElement.textContent = `Price: $${productItems[index].Price}`;

    let productDescriptionElement = document.createElement("p");
    productDescriptionElement.textContent = `${productItems[index].description}`;

    let productImgElement = document.createElement("img");
    productImgElement.src = `${productItems[index].image}`;

    candyContainer.appendChild(productTitleElement);
    candyContainer.appendChild(productPriceElement);
    candyContainer.appendChild(productDescriptionElement);
    candyContainer.appendChild(productImgElement);

    productDiv.appendChild(candyContainer);
  }
}
