
const button= document.querySelector("button");
const modal= document.querySelector("dialog")


button.onclick=function(){
    modal.showModal()

}

const fechar= document.querySelector("#modal");

function encerrar(){
    modal.close()
}