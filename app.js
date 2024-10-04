var list = document.getElementById("list");

//make function to add items in the list
function addtodo(){
    var todo_item = document.getElementById("todo-item");
//create list in js and append its value 
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(todo_item.value))
    

    //create delete button
    var deleteButton = document.createElement("button");
    var delText =  document.createTextNode('Delete');
    deleteButton.setAttribute("onclick","deleteitems(this)")
    deleteButton.appendChild(delText); //append text in the button
    li.appendChild(deleteButton);

    //create edit button
    var editButton = document.createElement("button");
    var editText = document.createTextNode('Edit');
    editButton.setAttribute("onclick","editItems(this)")
    editButton.appendChild(editText);
    li.appendChild(editButton);

    list.appendChild(li);  //placing li value in list to render it on browser
    todo_item.value = " "; //remove input value  
    console.log(li);
}

//create function to delete items in list 
//this brings the element as it is (which means it call the buttton as it is)

function deleteitems(e){
e.parentNode.remove()
}

//create function to edit items in list
function editItems(e){
var value = e.parentNode.firstChild.nodeValue
var editedvalue = prompt("Enter edit value",value)
e.parentNode.firstChild.nodeValue = editedvalue //replacing the old value with edit value
}

//creating function delete all
function deleteall(){
    list.innerHTML = " "
}