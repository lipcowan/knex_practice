const ShoppingListService = {
    getList(knex) {
        return knex
            .select('*')
            .from('shopping_list')
    },
    getItem(knex, id) {
        return knex
            .select('*')
            .from('shopping_list')
            .where('id', id)
            .first()
    },
    deleteItem(knex, id) {
        return knex
            .from('shopping_list')
            .where({id})
            .delete()
    },
    

}

module.exports = ShoppingListService;