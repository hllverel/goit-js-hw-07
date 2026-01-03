'use strict';

// DOM özelliklerini ve yöntemlerini kullanarak, aşağıdaki işlevleri gerçekleştiren bir script yazın:
//  1. ul#categories içindeki kategorilerin sayısını ve yani li.item öğelerinin sayısını hesaplar ve konsola yazdırır.
//  2. ul#categories listesindeki her li.item öğesi için, öğenin başlığının metnini ( <h2> etiketi) ve
//     kategorideki öğe sayısını (içinde bulunan tüm <li> öğeleri) bulur ve konsola yazdırır.

const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const header = item.querySelector('h2').textContent;
    console.log(`Category: ${header}`);
    
    const listItemCount = item.querySelectorAll('li').length;
    console.log(`Elements: ${listItemCount}`);
});
