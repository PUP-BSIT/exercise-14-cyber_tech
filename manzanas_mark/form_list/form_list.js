document.addEventListener("DOMContentLoaded", init);

function init() {
    // Get references to HTML elements
    const form = document.getElementById("my_form");
    const itemList = document.getElementById("item_list");

    // Add a submit event listener to the form
    form.addEventListener("submit", onSubmit);
    
    // Add a click event listener to the item list
    itemList.addEventListener("click", onItemClick);

    function onSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values of the full name and ID fields
        const fullName = document.getElementById("full_name").value;
        const id = document.getElementById("id").value;

        // Check if both full name and ID are provided
        if (fullName && id) {
            addItemToList(fullName, id); // Add the item to the list
            clearForm(); // Call the function to clear the form
        }
    }

    function onItemClick(event) {
        if (event.target.classList.contains("delete")) {
            removeItem(event.target.parentElement); //Remove item from the list
        }
    }

    function addItemToList(fullName, id) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${fullName} (ID: ${id})</span>
            <button class="delete">Delete</button>
        `;
        itemList.appendChild(li); // Add the new item to the list
    }

    function clearForm() {
        document.getElementById("full_name").value = "";
        document.getElementById("id").value = "";
    }

    function removeItem(item) {
        item.remove(); // Remove the item from the list
    }
}
