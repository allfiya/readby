if (customerData) {
  document.querySelectorAll(" .cart-increase-cookie").forEach((button) => {
    button.addEventListener("click", function () {
      // Extracting data attributes from the clicked button
      const itemId = this.getAttribute("data-item-id");
      const itemFormat = this.getAttribute("data-item-format");
      const itemLanguage = this.getAttribute("data-item-language");

      $.ajax({
        url: "/check-cart-cookie", // Endpoint to check if the item is in the cart
        method: "POST",
        data: {
          productId: itemId,
          formatId: itemFormat,
          languageId: itemLanguage,
        },
        success: function (response) {
          const stock = response.stock;
          if (
            $(`#cartQuantity-${itemId}-${itemFormat}-${itemLanguage}`).val() <
            stock
          ) {
            $.ajax({
              url: "/cart-increment",
              method: "POST",
              data: {
                productId: itemId,
                formatId: itemFormat,
                languageId: itemLanguage,
              },
              success: function (response) {
                  
                  

                // Set the value of the element with ID 'quantity' to response.latestQuantity
                $(`#cartQuantity-${itemId}-${itemFormat}-${itemLanguage}`).val(
                  response.latestQuantity
                );
                const itemPrice = $(
                  `#group-price-${itemId}-${itemFormat}-${itemLanguage}`
                ).data("item-price");
                const totalPrice = response.latestQuantity * itemPrice;
                $(`#group-price-${itemId}-${itemFormat}-${itemLanguage}`).html(
                    `₹${totalPrice}

                    <i data-item-id="${itemId}"
                                                data-item-format="${itemFormat}"
                                                data-item-language="${itemLanguage}"
                                                class="bi delete bi-trash3-fill text-danger fs-3 mt-5"></i>
                  `
                );

                

                calculatePrices()

                // // Update content if needed
                  // updateContentInactive();
                  
                  enableDeleteIconClick()
              },
              error: function (xhr, status, error) {
                console.error(error);
              },
            });
          }
        },
        error: function (xhr, status, error) {
          console.error(error);
        },
      });
    });
  });

  document.querySelectorAll(" .cart-decrease-cookie").forEach((button) => {
    button.addEventListener("click", function () {
      // Extracting data attributes from the clicked button
      const itemId = this.getAttribute("data-item-id");
      const itemFormat = this.getAttribute("data-item-format");
      const itemLanguage = this.getAttribute("data-item-language");

      // Now you can use itemId, itemFormat, and itemLanguage variables as needed

      if (
        $(`#cartQuantity-${itemId}-${itemFormat}-${itemLanguage}`).val() > 1
      ) {
        $.ajax({
          url: "/cart-decrement",
          method: "POST",
          data: {
            productId: itemId,
            formatId: itemFormat,
            languageId: itemLanguage,
          },
          success: function (response) {
            
              


            // Set the value of the element with ID 'quantity' to response.latestQuantity
            $(`#cartQuantity-${itemId}-${itemFormat}-${itemLanguage}`).val(
              response.latestQuantity
            );
            const itemPrice = $(
              `#group-price-${itemId}-${itemFormat}-${itemLanguage}`
            ).data("item-price");
            const totalPrice = response.latestQuantity * itemPrice;
            $(`#group-price-${itemId}-${itemFormat}-${itemLanguage}`).html(
                `₹${totalPrice}
                <i data-item-id="${itemId}"
                data-item-format="${itemFormat}"
                data-item-language="${itemLanguage}"
                class="bi delete bi-trash3-fill text-danger fs-3 mt-5"></i>`
              );
              
              calculatePrices()
              
              enableDeleteIconClick()


            // // Update content if needed
            // updateContentInactive();
          },
          error: function (xhr, status, error) {
            console.error(error);
          },
        });
      }
    });
  });


}else if (cartCookie) {
  document.querySelectorAll(" .cart-increase-cookie").forEach((button) => {
    button.addEventListener("click", function () {
      // Extracting data attributes from the clicked button
      const itemId = this.getAttribute("data-item-id");
      const itemFormat = this.getAttribute("data-item-format");
      const itemLanguage = this.getAttribute("data-item-language");

      $.ajax({
        url: "/check-cart-cookie", // Endpoint to check if the item is in the cart
        method: "POST",
        data: {
          productId: itemId,
          formatId: itemFormat,
          languageId: itemLanguage,
        },
        success: function (response) {
          const stock = response.stock;

          if (
            $(`#quantityCookie-${itemId}-${itemFormat}-${itemLanguage}`).val() <
            stock
          ) {
            $.ajax({
              url: "/cart-increment-cookie",
              method: "POST",
              data: {
                productId: itemId,
                formatId: itemFormat,
                languageId: itemLanguage,
              },
              success: function (response) {
                  


                // Set the value of the element with ID 'quantity' to response.latestQuantity
                $(
                  `#quantityCookie-${itemId}-${itemFormat}-${itemLanguage}`
                ).val(response.latestQuantity);
                const itemPrice = $(
                  `#group-price-${itemId}-${itemFormat}-${itemLanguage}`
                ).data("item-price");
                const totalPrice = response.latestQuantity * itemPrice;
                $(`#group-price-${itemId}-${itemFormat}-${itemLanguage}`).html(
                    `₹${totalPrice}
                    <i data-item-id="${itemId}"
                    data-item-format="${itemFormat}"
                    data-item-language="${itemLanguage}"
                    class="bi delete bi-trash3-fill text-danger fs-3 mt-5"></i>`
                  );
                  
                  calculatePrices()
                  

                  enableDeleteIconClick()


                // // Update content if needed
                // updateContentInactive();
              },
              error: function (xhr, status, error) {
                console.error(error);
              },
            });
          }
        },
        error: function (xhr, status, error) {
          console.error(error);
        },
      });

      // Now you can use itemId, itemFormat, and itemLanguage variables as needed
    });
  });

  document.querySelectorAll(" .cart-decrease-cookie").forEach((button) => {
    button.addEventListener("click", function () {
      // Extracting data attributes from the clicked button
      const itemId = this.getAttribute("data-item-id");
      const itemFormat = this.getAttribute("data-item-format");
      const itemLanguage = this.getAttribute("data-item-language");

      // Now you can use itemId, itemFormat, and itemLanguage variables as needed

      if (
        $(`#quantityCookie-${itemId}-${itemFormat}-${itemLanguage}`).val() > 1
      ) {
        $.ajax({
          url: "/cart-decrement-cookie",
          method: "POST",
          data: {
            productId: itemId,
            formatId: itemFormat,
            languageId: itemLanguage,
          },
            success: function (response) {
                

            

            // Set the value of the element with ID 'quantity' to response.latestQuantity
            $(`#quantityCookie-${itemId}-${itemFormat}-${itemLanguage}`).val(
              response.latestQuantity
            );
            const itemPrice = $(
              `#group-price-${itemId}-${itemFormat}-${itemLanguage}`
            ).data("item-price");
            const totalPrice = response.latestQuantity * itemPrice;
            $(`#group-price-${itemId}-${itemFormat}-${itemLanguage}`).html(
                `₹${totalPrice}
                <i data-item-id="${itemId}"
                data-item-format="${itemFormat}"
                data-item-language="${itemLanguage}"
                class="bi delete bi-trash3-fill text-danger fs-3 mt-5"></i>`
              );
              
              calculatePrices()

                
            enableDeleteIconClick()

            // // Update content if needed
            // updateContentInactive();
          },
          error: function (xhr, status, error) {
            console.error(error);
          },
        });
      }
    });
  });

  
}






function enableDeleteIconClick() {
    $(".delete").on("click", function () {
        // Retrieve data attributes
        const itemId = $(this).data("item-id");
        const itemFormat = $(this).data("item-format");
      const itemLanguage = $(this).data("item-language");
      

      if (customerData) {
        $.ajax({
          url: "/delete-from-cart", // Replace with your actual endpoint
          type: "POST", // Or "GET" depending on your server route
          data: {
            itemId: itemId,
            itemFormat: itemFormat,
            itemLanguage: itemLanguage,
          },
          success: function (response) {
            $(`#product-${itemId}-${itemFormat}-${itemLanguage}`).remove();
            calculatePrices();
      
            if ($(".product-row").length < 1) {
              window.location.href = `/cart`;
            }
          },
          error: function (error) {
            // Handle error
            console.error("AJAX error:", error);
          },
        });
      
        
      } else {

        $.ajax({
          url: "/delete-from-cookie", // Replace with your actual endpoint
          type: "POST", // Or "GET" depending on your server route
          data: {
            productId: itemId,
            formatId: itemFormat,
            languageId: itemLanguage,
          },
          success: function (response) {
            $(`#product-${itemId}-${itemFormat}-${itemLanguage}`).remove();
            calculatePrices();
      
            if ($(".product-row").length < 1) {
              window.location.href = `/cart`;
            }
          },
          error: function (error) {
            // Handle error
            console.error("AJAX error:", error);
          },
        });
        
      }
      
        // Make AJAX call
        
      
      });
}


enableDeleteIconClick()





function calculatePrices() {

  
  const groupPrices = [];
  
  $(".group-price").each(function (index, element) {
    // Get the text content of the element and remove whitespace and ₹ symbol
    const cleanedText = $(element).text().replace(/\s/g, "").replace("₹", "");
    // Convert the cleaned text content to a number
    const price = parseFloat(cleanedText);
    // Push the number into the groupPrices array
    groupPrices.push(price);
  });

  // Calculate the sum of all elements in the array using reduce()
  const subtotal = groupPrices.reduce(
    (total, currentValue) => total + currentValue,
    0
  );

  // Update the subtotal in the DOM
  $(`#subtotal`).html(`₹${subtotal}`);

  // Define the tax rate
  const tax = 18;
  
  // Calculate the tax amount
  const taxAmount = (tax * subtotal) / 100;

  // Update the tax amount in the DOM
  $(`#tax`).html(`₹${taxAmount}`);

  // Calculate the total amount
  const total = taxAmount + subtotal;

  // Update the total in the DOM
  $(`#total`).html(`₹${total}`);
}

// Call the function to execute the calculation
calculatePrices();

  



