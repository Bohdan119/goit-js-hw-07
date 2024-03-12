const mainBox = document.querySelector('#categories')
const itemEl = document.querySelectorAll(".item");
mainBox.classList.add('box');
console.log(`Numbers of categories ${itemEl.length}`);

// не потрібні зміни, так робити не треба
// const child = listMain.children;
// console.log(`Numbers of categories ${child.length}`);

itemEl.forEach(item => {
    showCategory(item);
});
function showCategory(category) {
    let titleCategory = category.querySelector('h2').textContent;
    console.log(`Category : ${titleCategory}`);
    // зайшов у console.dir(category); з textContent взяв заголовок
    // перед цим достукався до нього querySelector('h2')
    
    let itemProduct = category.querySelectorAll('li');
    console.log(`Elements ${itemProduct.length}`);
    
    
    itemProduct.forEach(item => {
        item.classList.add('list_product')
    });
    category.querySelector('h2').classList.add('title');

};



// const categoriesItems = categoriesList.querySelectorAll('li.item');

// // Порахувати та вивести кількість категорій
// console.log('Кількість категорій:', categoriesItems.length);

// // Для кожної категорії вивести назву та кількість елементів у ній
// categoriesItems.forEach(category => {
//   const categoryName = category.querySelector('h2').textContent;
//   const categoryItems = category.querySelectorAll('ul > li');
//     console.log(`Категорія: ${categoryName}`);
//     console.log(`Кількість елементів: ${categoryItems.length}`)
// });