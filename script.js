const scriptURL = "https://script.google.com/macros/s/AKfycbxCR1iWqCuPelI5vYxFDgL_mrN3pZJ-Df3luhc4JJ9RGg5mLGdwPxZXgcb66dJKXCan/exec";

const form = document.getElementById("studentForm");

form.addEventListener("submit", e => {
e.preventDefault();

fetch(scriptURL,{
method:"POST",
body:new FormData(form)
})
.then(()=>{
document.getElementById("msg").innerHTML="✅ Admission Submitted Successfully";
form.reset();
})
.catch(()=>{
document.getElementById("msg").innerHTML="❌ Error submitting form";
});
});


/* Loader Remove After Page Load */

window.addEventListener("load",function(){
setTimeout(()=>{
document.getElementById("loader").classList.add("hide");
},1800);
});

/* ===== POPUP CONTROL ===== */

function closePopup(){
document.getElementById("offerPopup").classList.remove("show");
}

window.addEventListener("load",()=>{
setTimeout(()=>{
document.getElementById("offerPopup").classList.add("show");
},2500);
});



const API =
"https://script.google.com/macros/s/AKfycbxD76Tl-hsP41BfXUVVPE3fb4moxEBNsjO4q4I6M_5kecQupqPda58-AaIpMePKnDSvRw/exec";

function searchResult(){

const roll = document.getElementById("roll").value.trim();
const box = document.getElementById("resultBox");

box.innerHTML = "Searching...";

fetch(API)
.then(res => res.json())
.then(data => {

const student = data.find(s => s.RollNo == roll);

if(!student){
box.innerHTML = "<h3>❌ Result Not Found</h3>";
return;
}

box.innerHTML = `
<div class="result-card">

<img src="${student.Photo}"
onerror="this.src='https://via.placeholder.com/120'"
class="student-photo">

<h3>${student.Name}</h3>

<p><b>Course :</b> ${student.Course}</p>
<p><b>Marks :</b> ${student.Marks}</p>
<p><b>Status :</b> ${student.Result}</p>

</div>
`;

})
.catch(err=>{
box.innerHTML = "⚠ Server Error";
console.log(err);
});

}