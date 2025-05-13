let boxes=document.querySelectorAll(".box");
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       let fid=box.getAttribute("id");
        console.log(fid);
       // console.log(e.target.id);
         document.querySelector("body").style.backgroundColor=fid;
    });
});


