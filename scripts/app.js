
    // Get all ADD buttons
    const addButtons = document.querySelectorAll('.section_3_price_button');
    
    // Get modal and close button
    const modal = document.getElementById("productInfoModal");
    const span = document.getElementsByClassName("close")[0];
    
    // Function to open modal and display product information
    function displayProductInfo(productId) {
        // Here you would retrieve product information based on productId
        // For demonstration, let's assume we have some sample data
        const productData = {
            title: "Product " + productId,
            description: "This is a placeholder description for Product " + productId + "."
            // Add more properties as needed
        };

        // Display product information in modal
        document.getElementById("productTitle").innerText = productData.title;
        document.getElementById("productDescription").innerText = productData.description;

        // Open modal
        modal.style.display = "block";
    }

    // Add click event listeners to ADD buttons
    addButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Call function to display product information when ADD button is clicked
            displayProductInfo(index + 1); // Assuming product IDs start from 1
        });
    });

    // Close the modal when the user clicks on the close button
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when the user clicks outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

