function onTextChange() {
    let myInput = document.getElementById("my_input");
    let name = document.getElementById("name");
    let submitButton = document.getElementById("submit_button");
  
    if (myInput.value.trim() !== "" && name.value.trim() !== "") {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
}
  
function addComment() {
    let name = document.getElementById("name").value;
    let comment = document.getElementById("my_input").value;
  
    if (name.trim() === "" || comment.trim() === "") {
      return; 
    }
  
    let commentsList = document.getElementById("comments_list");
    let listItem = document.createElement("li");
    let paragraph = document.createElement("p");
    paragraph.textContent = `${name}: ${comment}`;
    listItem.appendChild(paragraph);
    commentsList.appendChild(listItem);
  
    document.getElementById("name").value = "";
    document.getElementById("my_input").value = "";
    document.getElementById("submit_button").disabled = true;
}
  