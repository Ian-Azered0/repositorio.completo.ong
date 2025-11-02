document.addEventListener('DOMContentLoaded',()=>{
const ano=new Date().getFullYear();
['ano','ano2'].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=ano;});
});