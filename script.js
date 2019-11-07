function home() {
  var wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "Home";
  var button ShowNotes();
  var button AddNotes();
  var button = document.createElement("Notes");
  var button = document.createElement("New Notes");
  document.appendChild.("wrapper");
  
}
function addNotes("Write Notes"){
  var addNotes = document.createElement("Add Notes"); 
  var wrapper = document.creatElement("div");
  wrapper.classList.add("wrapper");
  document.appendChild.("Write Notes");
  document.appendChild.("wrapper");

}
function showNotes("Notes") {
  var wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "Notes";
  wrapper.classList.add("wrapper");
  document.appendChild.("Notes");
  document.appendChild.("wrapper");
}
function nav(list) {
  for(var i=0; i<list.length; i++){
    const button =document.createElement("button");
    const val = list[i];
    button.innerHTML=list[i];
    button.addEventListener("click", function(){
      renderPage(val);
    document.body.querySelector(".nav").appendChild(button);
    var nav = document.createElement("nav"); 
    var wrapper = document.creatElement("div");
    wrapper.classList.add("wrapper");
    document.appendChild.("Navigation");
    document.appendChild.("wrapper");    
    }
  }                                                      
}
  
function renderPage(page) {
  if (page === "Home") {
    home();
  } else if (page === " Write Notes") {
    somePage();
  } else if (page === "Notes") {
    somePage();
  }
}

function DisplayNotes("Display Notes"){
  var DisplayNMotes = document.createElement("Notes Page"); 
  var wrapper = document.creatElement("div");
  wrapper.classList.add("wrapper");
  document.appendChild.("Notes Page");
  document.appendChild.("wrapper");
  var wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "Notes Page";
  

function app(){
  var app = document.createElement("app"); 
  var wrapper = document.creatElement("div");
  wrapper.classList.add("wrapper");
  document.appendChild.("app");
  document.appendChild.("wrapper");
  renderPage("Home");
  var pages = ["Home", "Notes", "Write Notes", "Notes Page"];
  nav(pages);
}
  
}
  
app();