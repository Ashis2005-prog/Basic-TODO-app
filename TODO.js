let input=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerHTML=`${input.value} `;
    let delBtn=document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.innerText="delete";
    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value="";
})
let dltBtns=document.querySelectorAll(".delete");
    for(dltBtn of dltBtns){
        dltBtn.addEventListener("click",function(){
            let par=this.parentElement;
            console.log(par);
            par.remove();
        })
    }
    ul.addEventListener("click",function(event){
        if(event.target.nodeName==="BUTTON"){
            let listItem=event.target.parentElement;
            listItem.remove();
        }
    })