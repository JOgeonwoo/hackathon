const loc1=document.getElementById("memo-title-1");
const loc2=document.getElementById("memo-title-2");
const loc3=document.getElementById("memo-title-3");
const kan1=document.getElementById("selected-content-1-1");
const kan2=document.getElementById("selected-content-1-2");
const kan3=document.getElementById("selected-content-1-3");
const kan4=document.getElementById("selected-content-2-1");
const kan5=document.getElementById("selected-content-2-2");
const kan6=document.getElementById("selected-content-2-3");
const kan7=document.getElementById("selected-content-3-1");
const kan8=document.getElementById("selected-content-3-2");
const kan9=document.getElementById("selected-content-3-3");

loc1.innerHTML = localStorage.getItem('memo-title-1');
loc2.innerHTML = localStorage.getItem('memo-title-2');
loc3.innerHTML = localStorage.getItem('memo-title-3');
kan1.innerHTML = localStorage.getItem('selected-content-1-1');
kan2.innerHTML = localStorage.getItem('selected-content-1-2');
kan3.innerHTML = localStorage.getItem('selected-content-1-3');
kan4.innerHTML = localStorage.getItem('selected-content-2-1');
kan5.innerHTML = localStorage.getItem('selected-content-2-2');
kan6.innerHTML = localStorage.getItem('selected-content-2-3');
kan7.innerHTML = localStorage.getItem('selected-content-3-1');
kan8.innerHTML = localStorage.getItem('selected-content-3-2');
kan9.innerHTML = localStorage.getItem('selected-content-3-3');

if(kan1.innerHTML !== ""){kan1.innerHTML += ' : ';}
if(kan2.innerHTML !== ""){kan2.innerHTML += ' : ';}
if(kan3.innerHTML !== ""){kan3.innerHTML += ' : ';}
if(kan4.innerHTML !== ""){kan4.innerHTML += ' : ';}
if(kan5.innerHTML !== ""){kan5.innerHTML += ' : ';}
if(kan6.innerHTML !== ""){kan6.innerHTML += ' : ';}
if(kan7.innerHTML !== ""){kan7.innerHTML += ' : ';}
if(kan8.innerHTML !== ""){kan8.innerHTML += ' : ';}
if(kan9.innerHTML !== ""){kan9.innerHTML += ' : ';}

const mt4 = document.getElementById("next-button");

mt4.addEventListener("click", (e) => {
    localStorage.setItem('keyworded-content-1-1', kan1.innerHTML);
    localStorage.setItem('keyworded-content-1-2', kan2.innerHTML);
    localStorage.setItem('keyworded-content-1-3', kan3.innerHTML);
    localStorage.setItem('keyworded-content-2-1', kan4.innerHTML);
    localStorage.setItem('keyworded-content-2-2', kan5.innerHTML);
    localStorage.setItem('keyworded-content-2-3', kan6.innerHTML);
    localStorage.setItem('keyworded-content-3-1', kan7.innerHTML);
    localStorage.setItem('keyworded-content-3-2', kan8.innerHTML);
    localStorage.setItem('keyworded-content-3-3', kan9.innerHTML);
    location.href = "index.html";
});