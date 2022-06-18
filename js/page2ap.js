// store needed element from html to variable in order to reuse easily
let id1 = "buttonTest";
let button = document.getElementById(id1);
let id2 ='myList';
let myList = document.getElementById(id2);
let id3 = "textfiled";
let textfiled = document.getElementById(id3);
let id4 = 'buttonrest';
let buttonrest =  document.getElementById(id4);
let id5 = 'doneList';
let doneList = document.getElementById(id5);

button.addEventListener('click', addItem);
buttonrest.addEventListener('click', restList);
// this varibale needed to track two keys comands
let previsekey = '';
textfiled.addEventListener("keydown", (str) => {
    if (str.code === "Enter") {  //checks whether the pressed key is "Enter"
        addItem(str.code);
    }
    if (str.code === "KeyY" && previsekey === "ControlRight") {  //checks for Ctr+Y compination"
        restList();
    }
    // update previse key
    previsekey = str.code;
});

//take txt from filed and add it to tdodo list with a check box
function addItem(str) {
    const item = document.createElement("li");
    const checkBox = document.createElement("input");
    const textnode = document.createTextNode(textfiled.value);
    item.className = 'itemToDo';
    checkBox.type = 'checkbox';
    checkBox.className = 'checkbox';
    checkBox.addEventListener('click', moveItem);
    textfiled.value = ''; // romve text from entry filed for eaase of use
    item.appendChild(checkBox);
    item.appendChild(textnode);
    myList.appendChild(item);

}

//delete all items from both todo and done list
function restList() {
    myList.innerHTML = "To Do:";
    doneList.innerHTML = "Done:";
    textfiled.value = '';
}

//check all items if item is in todo and check move it to done
// if item is uncked and in done move it to todo
function moveItem() {
    let items = document.getElementsByClassName('itemToDo');
    for(let i=0; i< items.length; i++){
        if(items[i].getElementsByTagName('input')[0].checked && items[i].parentElement.id == 'myList'){
            doneList.appendChild(items[i]);
        } else if(!items[i].getElementsByTagName('input')[0].checked && items[i].parentElement.id == 'doneList'){
            myList.appendChild(items[i]);
        }
    }
}
