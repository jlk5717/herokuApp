const fs = require("fs");

let deleteNote = (task) =>{
    items = [];
    try{
        let itemString = fs.readFileSync("tasks.json")
        let items= JSON.parse(itemString);
    }catch (e){
        console.log(`error in delete!!!!! ${e}`);
    }
    let lookforDelete = items.filter(myItem => item.task === task)
    console.log(lookforDelete);
}