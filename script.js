//your code here
// Get all the draggable elements 
const draggables = document.querySelectorAll(".image");

// Add event listeners for dragging and dropping
draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", dragStart);
    draggable.addEventListener("dragover", dragOver);
    draggable.addEventListener("drop", drop);
});

let draggedItem = null;

function dragStart(event) {
    draggedItem = event.target;
    event.dataTransfer.setData("text", event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const target = event.target;
    const draggedId = event.dataTransfer.getData("text");

    // Swap the background images by reassigning their background-image properties
    const tempImage = window.getComputedStyle(target).backgroundImage;
    target.style.backgroundImage = window.getComputedStyle(draggedItem).backgroundImage;
    draggedItem.style.backgroundImage = tempImage;
}