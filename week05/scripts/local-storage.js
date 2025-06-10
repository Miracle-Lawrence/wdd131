// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

// DOM element references
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Initialize the array with data from localStorage or an empty array if not found
let chaptersArray = getChapterList() || [];

// Display any previously stored chapters
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Event listener for button click
button.addEventListener('click', () => {
  if (input.value != '') {  // Ensure the input is not empty
    displayList(input.value);            // Display the new chapter
    chaptersArray.push(input.value);     // Add to array
    setChapterList();                    // Save to localStorage
    input.value = '';                    // Clear input
    input.focus();                       // Refocus input
  }
});

// Display a chapter on the list
function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');

  li.textContent = item;
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete');

  li.append(deletebutton);
  list.append(li);

  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);  // Remove the chapter from array and storage
    input.focus();                  // Refocus input
  });
}

// Save the chaptersArray to localStorage
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Retrieve the chaptersArray from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Remove a chapter from the array and update localStorage
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);  // Remove the ❌
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();  // Update localStorage
}
