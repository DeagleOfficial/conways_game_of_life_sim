let grid;
let cols;
let rows;
let resolution = 5;

function make2D(col, row) {
  let arr = new Array(col);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(row);
  }
  return arr;
}

function setup() {
  createCanvas(600, 400);
  col = width / resolution;
  row = height / resolution;

  grid = make2D(col, row);
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

function draw() {
  background(60);

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] == 1) {
        fill(255);
        stroke(0);
        rect(x, y, resolution - 1, resolution - 1);
      }
    }
  }

  let next = make2D(col, row);

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      let state = grid[i][j];

      let sum = 0;
      let neighbors = countNeighbors(grid, i, j);

      if (state == 0 && neighbors == 3) {
        next[i][j] = 1;
      } 
      else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0;
      } 
      else {
        next[i][j] = state;
      }
    }
  }

  grid = next;
}

function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let cols = (x + i + col) % col;
      let rows = (y + j + row) % row;
      sum += grid[cols][rows];
    }
  }
  sum -= grid[x][y];
  return sum;
}