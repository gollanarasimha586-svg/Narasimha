document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("addBtn");
    const container = document.getElementById("container");

    button.addEventListener("click", function () {

        // 1. Create element
        const paragraph = document.createElement("p");

        // 2. Add content
        paragraph.textContent = "This paragraph was added using DOM.";

        // 3. (Optional) Add class
        paragraph.classList.add("new-paragraph");

        // 4. Append to parent
        container.appendChild(paragraph);

    });

});