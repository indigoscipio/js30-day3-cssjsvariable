let inputs = document.querySelectorAll(".controls")

function handleUpdate(){
    var suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    console.log(this.name);
}

inputs.forEach(function(element){
    element.addEventListener("change", handleUpdate)
});


inputs.forEach(function(element){
    element.addEventListener("mousemove", handleUpdate)
});