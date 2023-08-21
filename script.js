let inputBox = document.getElementById("inputBox")
let listContainer = document.getElementById("listContainer")


//Function to add item on the list
function addItem() {
    if (inputBox.value === '') {
        alert('You must type something!'); //message for user if no input is inserted
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);//Text will be added to to the list
        let span = document.createElement('span')
        span.innerHTML = ' \u00d7';//Code for multiplication sign
        li.appendChild(span)//Multiplication sign has been added
    }
    inputBox.value = '';//to empty the input box once the item has been added to the list
    saveData()//to save data in the local storage
}


//Event listener added to check or uncheck item or to remove it 
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData()//to save data in the local storage
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()//to save data in the local storage
    }
}, false);

//Function to save the data in the local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

//Function to show item 
function showItem() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showItem();