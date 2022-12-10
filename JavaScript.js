let modal = document.getElementById('id01');

windows.onclick = function(event){
    if(event.target.display == modal){
        modal.style.display = "none";
    }
}