var button = document.getElementById("btn-main");
var mainDiv = document.getElementById("mainDiv");

button.addEventListener("click", function() {
  mainDiv.style.backgroundColor = "blue";
  mainDiv.style.height = "200px";
  mainDiv.style.width = "200px";
    setTimeout(function(){
      mainDiv.style.backgroundColor = "red";
      mainDiv.style.height = "100px";
      mainDiv.style.width = "100px";
    }, 3000);
});
