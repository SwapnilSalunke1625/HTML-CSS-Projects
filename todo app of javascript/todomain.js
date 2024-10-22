let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click", function(){
    // console.log(inp.value);
    // inp.value=""; // because of this it erased after clicking
    let item=document.createElement("li");  // it will create li tag
    item.innerText=inp.value;    
    let deletebtn=document.createElement("button");
    deletebtn.innerText="delete";
    deletebtn.classList.add("delete");
    item.appendChild(deletebtn);
    ul.appendChild(item);  // because of this it will place at the end
    inp.value="";
}); 



// let deltbtn=document.querySelectorAll(".delete");
// for(deltb of deltbtn){
//     deltb.addEventListener("click", function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();

//     });
// }


// this is for applyiiinng deete property on new button
ul.addEventListener("click",function(Event){
    if(Event.target.nodeName=="BUTTON"){
        let listItem=Event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }
});



// let btn=document.querySelector("button");
// let inp=document.querySelector("input");
// let ul=document.querySelector("ul");

// IT IS FOR ADDING ELEMENT AND REMOVING IT
// // btn.addEventListener("click", function(){
// //     console.log(inp.value);
// //     inp.value="";
// // })

// btn.addEventListener("click", function(){
//     let item=document.createElement("li");
//     let ldelete=document.createElement("button");
//     item.innerText=inp.value;
//     ul.appendChild(item);
//     ldelete.innerText="delete";
//     ldelete.classList.add("delete");
//     item.appendChild(ldelete);
//     inp.value="";
// });
// // IT IS FOR EXISTING ELEMENT 
// // let deletebtns=document.querySelectorAll(".delete");
// // for(del of deletebtns){
// //     del.addEventListener("click", function(){
// //         let par=this.parentElement;
// //         par.remove();

// //     })
// // };

// // for understanding purpose 
// // ul.addEventListener("click", function(Event){
// //    console.dir(Event.target.nodeName);
// //    if(Event.target.nodeName=="BUTTON"){
// //     console.log("delete");
// //    }
// //    else{
// //     console.log("dont delete");
// //    }
// // })
// ul.addEventListener("click", function(Event){
//     if(Event.target.nodeName=="BUTTON"){
//       let listItem=Event.target.parentElement;
//       listItem.remove();
//       console.log("deleted");
//     }
// });