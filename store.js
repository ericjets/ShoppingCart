import items from "./items.json";
console.log(items);
console.log(items[0]);

const storeSection = document.querySelector("#storeSection");

export function setupStore() {
    items.forEach(item => {
        const newItem = createItemCard(item);
        storeSection.append(newItem);
    })
}

function createItemCard(item) {
    const itemCard = document.createElement("div");
    itemCard.classList.add("lg:w-1/4", "md:w-1/2", "p-4", "w-full");

    const itemView = document.createElement("div");
    itemView.className = "block relative h-48 rounded overflow-hidden";
    const itemImg = document.createElement("img");
    itemImg.alt = "ecommerce";
    itemImg.className = "object-cover object-center w-full h-full block";
    itemImg.src = `https://dummyimage.com/420x260/${item.imageColor}/${item.imageColor}`;

    const descriptionView = document.createElement("div");
    descriptionView.className = "mt-4 flex items-end justify-between";
    const description = document.createElement("div");
    const itemCategory = document.createElement("h3");
    itemCategory.className = "text-gray-500 text-xs tracking-widest title-font uppercase mb-1";
    itemCategory.innerText = `${item.category}`;
    const itemName = document.createElement("h2");
    itemName.className = "text-gray-900 title-font text-lg font-medium";
    itemName.innerText = `${item.name}`;
    const itemPrice = document.createElement("p");
    itemPrice.className = "mt-1";
    itemPrice.innerText = `$${(item.priceCents / 100).toFixed(2)}`;
    const addToCartBtn = document.createElement("button");
    addToCartBtn.className = "text-white py-2 px-4 text-xl bg-blue-500 rounded hover:bg-blue-700";
    addToCartBtn.innerText = "Add To Cart";


    itemCard.appendChild(itemView);
    itemView.appendChild(itemImg);
    itemCard.appendChild(descriptionView);
    descriptionView.appendChild(description);
    description.appendChild(itemCategory);
    description.appendChild(itemName);
    description.appendChild(itemPrice);
    descriptionView.appendChild(addToCartBtn);

    return itemCard;
}