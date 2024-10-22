// Import the Product class (optional, depends on module system)

// DiscountedProduct class inheriting from Product
function DiscountedProduct(name, price, category, discountRate) {
    // Call the parent constructor (Product) to inherit its properties
    Product.call(this, name, price, category);
    this.discountRate = discountRate;
}

// Set up inheritance from Product
DiscountedProduct.prototype = Object.create(Product.prototype);
DiscountedProduct.prototype.constructor = DiscountedProduct;

// Method to calculate the final price after discount
DiscountedProduct.prototype.getFinalPrice = function() {
    return this.price - (this.price * this.discountRate) / 100;
};

// Override getProductInfo method for DiscountedProduct
DiscountedProduct.prototype.getProductInfo = function() {
    const finalPrice = this.getFinalPrice();
    return `Product Name: ${this.name}, Original Price: ${this.price}, Discount: ${this.discountRate}%, Final Price: ${finalPrice}, Category: ${this.category}`;
};
