let todo=[];
let req=prompt("enter the request ");
while(true){
    if(req=="quit"){
        console.log("you quited from game");
        break;
    }
    if(req=="list"){
        console.log("-------------------------");
        for(let i=0;i<todo.length;i++){
            console.log(i, todo[i]);
        }
        console.log("-------------------------");
    }
    else if(req=="add"){
        let task=prompt("enter your task here");
        todo.push(task);
        console.log("task is added");
       
    }
    else if(req =="delete"){
        let idx=prompt("enter the index to delete");
        todo.splice(idx, 1);

    }
    req=prompt("enter the request");
   
    
}