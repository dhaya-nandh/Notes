
// Select the pages container and plus button
const pages = document.querySelector(".pages");
const plusButton = document.getElementById("plus");

// Event listener for adding new notes
plusButton.addEventListener("click", () => {
    // Create a new <div> element for the note
    const noteContainer = document.createElement("div");
    noteContainer.classList.add("note");

    // Create a new textarea with a placeholder
    const textarea = document.createElement("textarea");
    textarea.setAttribute("placeholder", "Write your note here...");

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "Delete";

    // Append the textarea and delete button to the note container
    noteContainer.appendChild(textarea);
    noteContainer.appendChild(deleteButton);

    // Append the new note container to the pages container
    pages.appendChild(noteContainer);
});

// Event listener for handling delete button clicks
pages.addEventListener("click", (event) => {
    // Check if the clicked element is a delete button
    if (event.target && event.target.classList.contains("deleteButton")) {
        // Remove the parent note container
        event.target.parentElement.remove();
    }
});
