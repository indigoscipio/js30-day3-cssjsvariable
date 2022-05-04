let inputColor = document.querySelector("#input-color");

function handleUpdate(){
    console.log(this.value)
}

inputColor.addEventListener("change", handleUpdate);