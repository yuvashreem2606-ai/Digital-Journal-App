let entries =
JSON.parse(
localStorage.getItem("entries")
) || [];

function saveEntry(){

let title =
document.getElementById("title").value;

let content =
document.getElementById("content").value;

if(title==="" || content===""){
alert("Fill all fields");
return;
}

entries.push({
title:title,
content:content
});

localStorage.setItem(
"entries",
JSON.stringify(entries)
);

showEntries();

document.getElementById("title").value="";
document.getElementById("content").value="";
}

function showEntries(){

let list =
document.getElementById("entryList");

if(!list) return;

list.innerHTML="";

entries.forEach(item=>{

let li =
document.createElement("li");

li.innerHTML =
"<b>"+item.title+
"</b><br>"+item.content;

list.appendChild(li);

});

let total =
document.getElementById("totalEntries");

if(total){
total.innerText =
entries.length;
}
}

function clearEntries(){

localStorage.removeItem("entries");

entries=[];

alert("All entries deleted");
}

showEntries();

let date =
document.getElementById("todayDate");

if(date){
date.innerText =
new Date().toDateString();
}