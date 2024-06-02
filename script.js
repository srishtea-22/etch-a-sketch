const container = document.getElementById("container");

let dimension = 16;

function makeGrid(rows){
    for (let i = 0; i < rows; i++){
        let rowcell = document.createElement('div');
        rowcell.className = ("rowcell");
        
        for (let j = 0; j < rows; j++){
            let colcell = document.createElement('div');
            colcell.className = ("colcell");
            rowcell.appendChild(colcell);
        }
        container.appendChild(rowcell);
    }
}

makeGrid(dimension);

const newGrid = document.querySelector(".grid");
newGrid.addEventListener("click", () =>{
   let newDimension =  prompt("Add New Dimension MAX: 100");
   container.innerHTML = '';
   makeGrid(newDimension);
})

container.addEventListener("mouseover", (event) => {
  if (event.target.className === "colcell") {
    event.target.style.background = "black";
  }
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  const cell = document.querySelectorAll(".colcell");
  cell.forEach((element) => {
    element.style.background = "white";
  })
})