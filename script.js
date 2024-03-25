const menu = document.getElementById('responsivo-container');

function abrirMenu(){
    if(menu.style.display = "none"){
        menu.style.display = "flex"
    }else{
       menu.style.display = "none"
    }
}

function fecharMenu(){
    if(menu.style.display = "flex"){
        menu.style.display = "none"
    }else{
       menu.style.display = "flex"
    }
}