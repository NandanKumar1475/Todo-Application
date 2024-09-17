const NotesInput = document.getElementById("input-box");  
const Addtask = document.getElementById("task-notes");  

function AddNotes(){
    if(NotesInput.value === '') // check the input if it is empty then show this message 
    {
        alert("Notes Can't be Empty");
    }else
    {
        const li = document.createElement("li");
        li.innerHTML = NotesInput.value ;
        Addtask.appendChild(li);             // display the value

        let span = document.createElement("span");
        span.innerHTML = "&#x274c" ;
        li.appendChild(span);
        
    }
    NotesInput.value  = '';     // after writing notes it clear the value
    saveData();
}

Addtask.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// function to save the data to the local storge 
function saveData(){
    localStorage.setItem("TodoData",Addtask.innerHTML);
}

// function to show the data from local storage 

function ShowTask(){
    Addtask.innerHTML = localStorage.getItem("TodoData");
}
ShowTask();