const ShoppingListService = require("../src/shopping-list-service");
const knex = require("knex");
const { expect } = require("chai");

describe("Shopping List Service object", () => {
  let db;
  let testItems = [
    {
      id: 1,
      name: "First test item!",
      date_added: new Date("2029-01-22T16:28:32.615Z"),
      price: "12.00",
      category: "Main",
      checked: false,
    },
    {
      id: 2,
      name: "Second test item!",
      date_added: new Date("2100-05-22T16:28:32.615Z"),
      price: "21.00",
      category: "Snack",
      checked: false,
    },
    {
      id: 3,
      name: "Third test item!",
      date_added: new Date("1919-12-22T16:28:32.615Z"),
      price: "3.00",
      category: "Lunch",
      checked: false,
    },
    {
      id: 4,
      name: "Third test item!",
      date_added: new Date("1919-12-22T16:28:32.615Z"),
      price: "0.99",
      category: "Breakfast",
      checked: false,
    },
  ];

  before(() => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DB_URL,
    });
  });

  before(() => db("shopping_list").truncate());

  afterEach(() => db("shopping_list").truncate());

  after(() => db.destroy());

  context("Cases when shopping_list table has data", () => {
    beforeEach(() => {
      return db.into("shopping_list").insert(testItems);
    });

    it("getList() resolves all items from shopping_list table", () => {
      return ShoppingListService.getList(db).then((actual) =>
        expect(actual).to.eql(testItems)
      );
    });

    it("getItem() resolves an item by id from shopping_list table", () => {
      const itemId = 3;
      const thirdItem = testItems[itemId - 1];
      return ShoppingListService.getItem(db, itemId).then((actual) =>
        expect(actual).to.eql({
          id: itemId,
          name: thirdItem.name,
          date_added: thirdItem.date_added,
          price: thirdItem.price,
          category: thirdItem.category,
          checked: thirdItem.checked,
        })
      );
    });

    it("deleteItem() removes an item by id from shopping_list table", () => {
      const dItemId = 2;
      return ShoppingListService.deleteItem(db, dItemId)
        .then(() => ShoppingListService.getList(db))
        .then((list) => {
          const newList = testItems.filter((item) => item.id !== dItemId);
          expect(list).to.eql(newList);
        });
    });
  });

  context("Cases when shopping_list table is empty", () => {
    it("getList() resolves to an empty array", () => {
      return ShoppingListService.getList(db).then((actual) =>
        expect(actual).to.eql([])
      );
    });
  });
});
