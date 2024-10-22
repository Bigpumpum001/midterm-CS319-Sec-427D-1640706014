// Define a generic Inventory class that can store any type of product
function Inventory() {
    this.items = [];  // Array to store products
}

// Method to add an item to the inventory
Inventory.prototype.addItem = function(item) {
    this.items.push(item);
};

// Method to list all items in the inventory
Inventory.prototype.listItems = function() {
    return this.items;
};
