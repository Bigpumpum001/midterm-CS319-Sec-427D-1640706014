// Define Customer object
function Customer(name, email) {
    this.name = name;
    this.email = email;
    this.orders = [];
}

// Add method to add orders
Customer.prototype.addOrder = function(order) {
    this.orders.push(order);
};

// Add method to get customer info
Customer.prototype.getCustomerInfo = function() {
    return `Customer Name: ${this.name}, Email: ${this.email}, Total Orders: ${this.orders.length}`;
};
