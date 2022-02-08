const menu = [
  {
    id: 1,
    title: "Polenta, crab and chorizo",
    category: "main courses",
    price: 630,
    img: "./img/item-1.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
  },
  {
    id: 2,
    title: "Tuna, kimchi and sweet onion",
    category: "main courses",
    price: 576,
    img: "./img/item-2.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
  },
  {
    id: 3,
    title: "Ceviche",
    category: "snacks",
    price: 436,
    img: "./img/item-3.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
  },
  {
    id: 4,
    title: "Busan Octopus",
    category: "main courses",
    price: 1340,
    img: "./img/item-4.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
  },
  {
    id: 5,
    title: "Sea Urchin",
    category: "snacks",
    price: 180,
    img: "./img/item-5.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
  },
  {
    id: 6,
    title: "Squid BBQ, julienne and brie",
    category: "main courses",
    price: 639,
    img: "./img/item-6.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
  },
  {
    id: 7,
    title: "Seafood kebab and Argentine salsa",
    category: "main courses",
    price: 658,
    img: "./img/item-7.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
  },
  {
    id: 8,
    title: "Burgundy snails",
    category: "snacks",
    price: 402,
    img: "./img/item-8.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
  },
  {
    id: 9,
    title: "Dorado, coconut rice and spicy sambal",
    category: "main courses",
    price: 543,
    img: "./img/item-9.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
  },
  {
    id: 10,
    title: "Nachos with seafood",
    category: "snacks",
    price: 795,
    img: "./img/item-9.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
  },
];

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function(){
  let displayMenu = menu.map(function(item){

    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item-info">
      <header>
      <h4>${item.title}</h4>
      <h4 class="price">${item.price}p</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
});
