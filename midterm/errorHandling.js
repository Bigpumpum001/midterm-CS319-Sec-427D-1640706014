// Function to parse product data from JSON string
function parseProductData(jsonData) {
    try {
        // Try parsing the JSON string into an object
        const productData = JSON.parse(jsonData);
        return productData;
    } catch (error) {
        // If an error occurs, return an error message
        console.error("Error parsing JSON data:", error);
        return { error: "Invalid JSON data provided." };
    }
}
