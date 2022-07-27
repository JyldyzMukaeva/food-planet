// export const burgers = [
//     {
//         id:1,
//         name:"Чизбургер",
//
//         text:"Булка, котлета,сыр,  соленый огурец, лук, помидор,\n" +
//             "салат айсберг,\n" +
//             "соус чесночный, соус гриль,\n" +
//             "кетчуп, майонез",
//         price: 200
//     },
//     {
//         id:2,
//         name:"Чизбургер",
//
//         text:"Булка, котлета,сыр,  соленый огурец, лук, помидор,\n" +
//             "салат айсберг,\n" +
//             "соус чесночный, соус гриль,\n" +
//             "кетчуп, майонез",
//         price: 200
//     }
// ]


// const createBurgers = () => {
//     const cards = burgers.map(item => {
//         return (`<div class="card">
// <!--                 <img src=${item.image_url}>-->
//                  <h1>${item.name}</h1>
//                  <p>${item.price}<span>сом</span></p>
//                  <button>Добавить в корзину</button>
//                  </div>`);
//     })
//
//   cards.forEach(item => {
//       document.querySelector("#burgers").innerHTML = item
//
//
//     cards.forEach(item => {
//         let burgers = document.querySelector("#burgers");
//         burgers.innerHTML = burgers.innerHTML + item;
//
//   })
//
//   document.querySelector("#burgers").innerHTML = cards;
// }
// }
// createBurgers();