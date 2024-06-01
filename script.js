const container = document.getElementById("container");

let dimension = 16;

function makeGrid(rows){
    console.log('doing rows');
    for (let i = 0; i < rows; i++){
        let rowcell = document.createElement('div');
        rowcell.classList.add("rowcell")
        rowcell.setAttribute("style", "border: 1px solid lightgrey")
        
        for (let j = 0; j <= rows; j++){
            let colcell = document.createElement('div');
            colcell.classList.add("colcell");
            colcell.setAttribute("style", "border: 1px solid lightgrey")
            rowcell.appendChild(colcell);
        }
        container.appendChild(rowcell);
    }
}

makeGrid(dimension);