document.getElementById("submit").addEventListener("click", function(){

    const names = document.getElementById("name").value;

    document.getElementById("display").innerHTML= `<h1>${names}</h1>`;
})