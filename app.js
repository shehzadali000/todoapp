var list = document.getElementById("list")
function add(){
    var input = document.getElementById("todo");
    var lielemate = document.createElement("li");
    var litext = document.createTextNode(input.value);
    lielemate.appendChild(litext);

    list.appendChild(lielemate);

    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("Edit")
    
    editbtn.appendChild(edittext)

    var delbtn = document.createElement("button")
    var deltext = document.createTextNode("delete")
    delbtn.appendChild(deltext)
  
     lielemate.appendChild(delbtn)
     
     
     editbtn.appendChild(edittext)
     lielemate.appendChild(editbtn)
     
     editbtn.setAttribute("onclick", "edititem(this)" )
     
     delbtn.setAttribute("onclick","deleteitem(this)")


   input.value = ""
}

function delall (){
     list.innerHTML = ""
}

function deleteitem(e){
    console.log(e.parentNode.remove())
}

function edititem(e){
    var updateValue = prompt(
        "Enter update value", e.parentNode.firstChild.nodeValue
    );
    e.parentNode.firstChild.nodeValue = updateValue
}
