// Function to simulate fetching product data from an external API
async function fetchProductData() {
    try {
        // Simulate fetching data from an external API (e.g., with a delay)
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    name: "External Product",
                    price: 120,
                    category: "Imported",
                    discountRate: 15
                });
            }, 2000); // 2-second delay to simulate API call
        });

        // Return the fetched data
        return response;
    } catch (error) {
        console.error("Error fetching product data:", error);
        throw error;
    }
}
