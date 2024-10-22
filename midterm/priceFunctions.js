// Higher-order function that creates a price multiplier
function createPriceMultiplier(multiplier) {
    return function(price) {
        return price * multiplier;
    };
}

// Function to apply a tax to a product price (e.g., 7% tax)
const applyTax = createPriceMultiplier(1.07); // 7% tax multiplier
