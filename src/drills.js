require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
});

// function getAllTextItems(searchTerm) {
//     knexInstance
//     .select('name')
//     .from('shopping_list')
//     .where('name', 'ilike', `%${searchTerm}%`)
//     .then(res => console.log(res));
// };

// getAllTextItems('bur');

// function getPaginated(page) {
//     const productsPerPage = 6;
//     const offset = productsPerPage * (page - 1);

//     knexInstance
//         .select('name', 'price')
//         .from('shopping_list')
//         .limit(productsPerPage)
//         .offset(offset)
//         .then(res => console.log(res));
// };

// getPaginated(3);

// function getItemsAdded(daysAgo) {
//     knexInstance
//         .select('name','price')
//         .from('shopping_list')
//         .where(
//             'date_added',
//             '>',
//             knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
//         )
//         .then(res => console.log(res));
// };

// getItemsAdded(3);

// function getTotalByCategory() {
//     knexInstance
//         .select('category AS grocery')
//         .sum('price AS total')
//         .from('shopping_list')
//         .groupBy('category')
//         .orderBy([{column: 'total', order: 'ASC'}])
//         .then(res => console.log(res));
// };

// getTotalByCategory();