document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const commentInput = document.getElementById("comment");
    const commentButton = document.getElementById("comment_button");
    const commentsList = document.getElementById("comments_list");

    nameInput.addEventListener("input", updateCommentButtonState);
    commentInput.addEventListener("input", updateCommentButtonState);
    commentButton.addEventListener("click", addComment);

    function updateCommentButtonState() {
        if (nameInput.value.trim() !== "" && commentInput.value.trim() !== "") {
            commentButton.disabled = false;
        } else {
            commentButton.disabled = true;
        }
    }

    function addComment(event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const comment = commentInput.value.trim();

        if (name === "" || comment === "") {
            return;
        }

        const newComment = document.createElement("li");
        const commentText = document.createElement("p");
        commentText.textContent = `${name}: ${comment}`;
        newComment.appendChild(commentText);
        commentsList.appendChild(newComment);

        // Clear input fields after adding the comment
        nameInput.value = "";
        commentInput.value = "";
        commentButton.disabled = true;
    }
});