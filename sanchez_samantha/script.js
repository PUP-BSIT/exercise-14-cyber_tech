let nameInput = document.getElementById("name_input");
let commentInput = document.getElementById("comment_input");
let submitButton = document.getElementById("submit_comment");
let commentsList = document.querySelector(".comments-list");

updateSubmitButton();

nameInput.addEventListener("input", updateSubmitButton);
commentInput.addEventListener("input", updateSubmitButton);
submitButton.addEventListener("click", addComment);

// Function to enable/disable the submit button 
function updateSubmitButton() {
    if (nameInput.value.trim() !== "" && commentInput.value.trim() !== "") {
        submitButton.removeAttribute("disabled");
    } else {
        submitButton.setAttribute("disabled", "disabled");
    }
}

// Function to add a new comment to the comments section
function addComment() {
    if (nameInput.value.trim() === "" || commentInput.value.trim() === "") {
        return; 
    }

    let newComment = document.createElement("li");
    let commenterName = document.createElement("strong");
    commenterName.textContent = nameInput.value + ": ";
    let commentText = document.createElement("span");
    commentText.textContent = commentInput.value;

    newComment.appendChild(commenterName);
    newComment.appendChild(commentText);
    commentsList.appendChild(newComment);

    nameInput.value = "";
    commentInput.value = "";

    submitButton.setAttribute("disabled", "disabled");
}
