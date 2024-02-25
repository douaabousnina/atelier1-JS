const dateInput = document.getElementById("date");
const contentInput = document.getElementById("content");
const addbtn = document.getElementById("add-to-do");

const newElement = () => {
    let dateValue=dateInput.value;
    let contentValue=contentInput.value;
    
    if (dateValue=='' || contentValue=='') {
        alert("Champs vide(s)");
    }

    else {
        let li = document.createElement("li");
        let t = document.createTextNode(dateValue +  " : " + contentValue);
        li.appendChild(t);
       
        
        //nzid close button
        const closebtn=document.createElement("button");
        closebtn.textContent="x";
        closebtn.addEventListener('click', () => { li.remove(); });
        li.appendChild(closebtn);

        document.getElementById("to-do-list").appendChild(li);

        
        // dateValue='' doesnt work, alech?
        dateInput.value='';
        contentInput.value='';
    }
    
}

addbtn.addEventListener('click', newElement);



