let commentForm = document.getElementById("comment_form");
let nameInput = document.getElementById("name");
let commentInput = document.getElementById("comment");
let commentsList = document.getElementById("comments_list");

commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    let name = nameInput.value;
    let comment = commentInput.value;
  
    if (name && comment) {
      let newComment = document.createElement("li");
      newComment.textContent = `${name}: ${comment}`;
      commentsList.appendChild(newComment);
  
      nameInput.value = "";
      commentInput.value = "";
    }
});  
