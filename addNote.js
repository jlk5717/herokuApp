const fs = require('fs');

let addNote = (name, task) => {
    let items = [];
    let item = {
        name,
        task
    }
    try {
        let itemsString = fs.readFileSync('tasks.json');
        items = JSON.parse(itemsString);
        
    } catch (e) {
        console.log(`error ${e}`);
    }
    let myDuplicates = items.filter(myItem => myItem.task === task)
    if (myDuplicates.length === 0) {
        items.push(item);
        fs.writeFileSync('tasks.json', JSON.stringify(items));
    }

}

//exports functions call 
module.exports = {
    addNote
}