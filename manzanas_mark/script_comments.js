document.addEventListener("DOMContentLoaded", init);

function init() {
    // Get the form elements
    const nameInput = document.getElementById("name");
    const commentText = document.getElementById("comment_text");
    const commentButton = document.getElementById("comment_button");
    const ascendingButton = document.getElementById("ascending_button");
    const descendingButton = document.getElementById("descending_button");
    const commentsForm = document.getElementById("registration_form");
    const commentsList = document.getElementById("comments_list");

    
    let commentsArray = [];

    //Function to check if both fields are filled and enable/disable the button
    function checkFields() {
        const name = nameInput.value.trim();
        const comment = commentText.value.trim();
        commentButton.disabled = !(name.length && comment.length);
    }

    // Function to add a new comment at the top of the list
    function addComment() {
        const name = nameInput.value.trim();
        const comment = commentText.value.trim();

        if (name.length && comment.length) {
            const currentDate = new Date();
            const newComment = {
                name,
                date: currentDate,
                comment,
            };

            commentsArray.unshift(newComment);

            // Sort comments based on date in descending order by default
            sortComments("desc");

            // Clear the input fields
            nameInput.value = "";
            commentText.value = "";

            // Recheck and disable the button after adding the comment
            checkFields();
        }
    }

    // Function to handle form input
    function handleInput() {
        checkFields();
    }

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission
        addComment();
    }

    // Function to sort comments based on date
    function sortComments(order) {
        if (order === "asc") {
            commentsArray.sort((a, b) => a.date - b.date);
        } else {
            commentsArray.sort((a, b) => b.date - a.date);
        }

        // Update the comments list
        updateCommentsList();
    }

    // Function to update the comments list in the DOM
    function updateCommentsList() {
        // Clear the existing comments
        commentsList.innerHTML = "";

        // Append the sorted comments to the comments list
        commentsArray.forEach((comment) => {
            const li = document.createElement("li");
            li.classList.add("comment-item");

            // Create the user profile and comment content divs
            const userProfile = document.createElement("div");
            userProfile.classList.add("user-profile");

            const commentContent = document.createElement("div");
            commentContent.classList.add("comment-content");

            // Create the username and comment text paragraphs
            const username = document.createElement("span");
            username.classList.add("username");
            username.textContent = `${comment.name} `;

            // Create the date span
            const dateSpan = document.createElement("span");
            dateSpan.classList.add("date");
            dateSpan.textContent = `${comment.date.toLocaleDateString()}`;

            // Create the time span
            const timeSpan = document.createElement("span");
            timeSpan.classList.add("time");
            timeSpan.textContent = ` ${comment.date.toLocaleTimeString()}`;

            const commentPara = document.createElement("p");
            commentPara.classList.add("comment");
            commentPara.textContent = comment.comment;

            // Append paragraphs to the user profile and comment content divs
            userProfile.appendChild(username);
            userProfile.appendChild(dateSpan); // Add the date span
            userProfile.appendChild(timeSpan); // Add the time span
            commentContent.appendChild(commentPara);

            // Append user profile and comment content divs to the comment item div
            li.appendChild(userProfile);
            li.appendChild(commentContent);

            // Insert the new comment at the top of the list
            commentsList.appendChild(li);
        });
    }

    // Add event listeners to input fields
    nameInput.addEventListener("input", handleInput);
    commentText.addEventListener("input", handleInput);

    // Add an event listener to the comment button
    commentButton.addEventListener("click", handleSubmit);

    // Add event listeners for sorting buttons
    ascendingButton.addEventListener("click", () => sortComments("asc"));
    descendingButton.addEventListener("click", () => sortComments("desc"));

    // Add an event listener to the form for preventing default form submission
    commentsForm.addEventListener("submit", (event) => {
        event.preventDefault();
    });
}

// Initial comments load, if any
updateCommentsList();
