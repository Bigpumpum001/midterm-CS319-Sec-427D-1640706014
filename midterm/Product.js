
// Product class
function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
}

// Method to update the price of the product
Product.prototype.updatePrice = function(newPrice) {
    this.price = newPrice;
};

// Method to get product information
Product.prototype.getProductInfo = function() {
    return `Product Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`;
};

