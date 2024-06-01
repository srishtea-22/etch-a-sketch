const container = document.getElementById("container");

let dimension = 5;

function makeGrid(rows){
   
    for (let i = 0; i < rows; i++){
        let rowcell = document.createElement('div');
        rowcell.classList.add("rowcell")
        
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