const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");



const para = document.createElement("p");
// for the buttons 
button.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        li.appendChild(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
            input.focus();
        });
        
    input.value = "";
    input.focus();
    }
});
    


