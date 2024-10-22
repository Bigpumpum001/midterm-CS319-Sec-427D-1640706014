
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("productForm");
    const productTable = document.getElementById("productTable").getElementsByTagName("tbody")[0];

    // Create a new customer
    const currentCustomer = new Customer("John Doe", "johndoe@example.com");

    // Create a new inventory to store products
    const inventory = new Inventory();

    // Function to display customer info
    function displayCustomerInfo() {
        const customerInfoElement = document.getElementById("customerInfo");
        if (customerInfoElement) {
            customerInfoElement.textContent = currentCustomer.getCustomerInfo();
        }
    }

    // Function to display inventory items in the table
    function displayInventoryItems() {
        const items = inventory.listItems();  
        productTable.innerHTML = '';  // Clear the table before displaying new data

        items.forEach(function(item) {
            const finalPrice = item.getFinalPrice();
            const finalPriceWithTax = applyTax(finalPrice);  // Apply tax to the final price
            const newRow = productTable.insertRow();  // Add new row in the table
            newRow.innerHTML = `<td>${item.name}</td>
                                <td>${item.price}</td>
                                <td>${item.discountRate}%</td>
                                <td>${finalPrice}</td>
                                <td>${finalPriceWithTax.toFixed(2)}</td> <!-- Price after tax -->
                                <td>${item.category}</td>`;
        });
    }
    async function addExternalProduct() {
        try {
            const productData = await fetchProductData();  // Fetch product data from external source

            // Create a DiscountedProduct instance from fetched data
            const discountedProduct = new DiscountedProduct(productData.name, productData.price, productData.category, productData.discountRate);

            // Add the product to the inventory
            inventory.addItem(discountedProduct);

            // Update the inventory display
            displayInventoryItems();  // Refresh the table to show updated inventory
        } catch (error) {
            console.error("Error adding external product:", error);
        }
    }
    // Function to filter and display products priced above 100
    function filterAndDisplayProducts() {
        const filteredProducts = filterProductsByPrice(inventory.listItems(), 100);
        displayInventoryItems(filteredProducts);
    }

    // Function to display product names
    function displayProductNames() {
        const productNames = getProductNames(inventory.listItems());
        alert("Product Names: " + productNames.join(", "));
    }

    // Function to calculate and display total cost
    function displayTotalCost() {
        const totalCost = calculateTotalCost(inventory.listItems());
        alert("Total Cost of Products: " + totalCost);
    }
    // Add event listener for adding products
    function addProductFromJson(jsonData) {
        const productData = parseProductData(jsonData);  // Parse the JSON data

        if (productData.error) {
            // If there's an error, show an alert
            alert(productData.error);
        } else {
            // Otherwise, create a new product and add it to the inventory
            const discountedProduct = new DiscountedProduct(productData.name, productData.price, productData.category, productData.discountRate);

            // Add the product to the inventory
            inventory.addItem(discountedProduct);

            // Update the inventory display
            displayInventoryItems(inventory.listItems());
        }
    }
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("productName").value;
        const price = parseFloat(document.getElementById("productPrice").value);
        const category = document.getElementById("productCategory").value;
        const discountRate = parseFloat(document.getElementById("productDiscount").value);

        // Create a DiscountedProduct instance
        const discountedProduct = new DiscountedProduct(name, price, category, discountRate);

        // Add product to customer's order and inventory
        currentCustomer.addOrder(discountedProduct);
        inventory.addItem(discountedProduct);  // Add the product to inventory

        // Update and display the inventory and customer info
        // displayInventoryItems(); 
        displayInventoryItems(inventory.listItems());
        displayCustomerInfo();    // Refresh the customer info

        // Optionally clear the form fields after submission
        form.reset();
    });
    const exampleJsonData = '{"name":"Imported Watch","price":150,"category":"Accessories","discountRate":20}';
    addProductFromJson(exampleJsonData);  // Valid JSON

    const invalidJsonData = '{"name":"Broken Item","price":200';  // Invalid JSON
    addProductFromJson(invalidJsonData);  // Invalid JSON, will trigger an error
    // Initial display of customer info and inventory (if any)
    displayCustomerInfo();
    // displayInventoryItems();
    displayInventoryItems(inventory.listItems());

    // Add event listeners to buttons for Array Methods
    document.getElementById("filterButton").addEventListener("click", filterAndDisplayProducts);
    document.getElementById("namesButton").addEventListener("click", displayProductNames);
    document.getElementById("totalCostButton").addEventListener("click", displayTotalCost);
});
