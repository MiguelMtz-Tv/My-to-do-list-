window.addEventListener("load", () => {
  var form = document.querySelector("#divForm");
  var text = document.querySelector("#prueba");
  var taskList = document.querySelector("#tasks");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    //New div
    var newDiv = document.createElement("input");
    newDiv.setAttribute("readonly", "");
    newDiv.type = "text";
    newDiv.classList.add("task-el");
    var newText = document.createTextNode(text.value);
    newDiv.value = newText.textContent;

    //verify if there are some text and create div
    if(text.value ===""){
      alert("Write something first!")
    }else{

      var currenDiv = document.getElementById("div1");
      document.body.insertBefore(newDiv, currenDiv);
      
      //div container
      var divContainer = document.createElement("div");
      divContainer.classList.add("div-container");
      var currenDivContainer = document.getElementById("div0");
      document.body.insertBefore(divContainer, currenDivContainer);
      divContainer.appendChild(newDiv);
      taskList.appendChild(divContainer);

      //edit button (incoming B) )
      var editButton = document.createElement("button");
      editButton.classList.add("edit-button");
      editText = document.createTextNode("EDIT");
      editButton.appendChild(editText); 
      
      var currenEdit = document.getElementById("delete1");
      document.body.insertBefore(editButton, currenEdit);
      divContainer.appendChild(editButton);

      //delete button
      var deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-el");
      deleteButton.appendChild(document.createTextNode("DELETE"));

      var currenDelete = document.getElementById("delete1");
      document.body.insertBefore(deleteButton, currenDelete);
      divContainer.appendChild(deleteButton);

      
    }
        
    //add checked
    newDiv.addEventListener("click", (e)=>{
      newDiv.classList.toggle("checked");
    });

    //edit button function
    editButton.addEventListener('click', (e)=>{
      if(editButton.innerText.toLowerCase() == "edit"){ //toLowerCase is optional
        editButton.innerText = "SAVE";
        newDiv.classList.add("editing");
        newDiv.removeAttribute("readonly");
        newDiv.focus();
      }else{
        editButton.innerText = "EDIT";
        newDiv.classList.remove("editing");
        newDiv.setAttribute("readonly", "");
      }
    });

    //delete button function
    deleteButton.addEventListener('click', () =>{
      divContainer.removeChild(deleteButton);
      divContainer.removeChild(newDiv);
      taskList.removeChild(divContainer);
    });

    //input task reset
    prueba.value = "";

    
  });
});
