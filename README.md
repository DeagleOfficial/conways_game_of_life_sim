# Conway's Game of Life Simulation

## Use it [here](https://editor.p5js.org/DeagleOfficial/full/GWUy8L1_4P)

The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.

## Rules
Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

<li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
<li>Any live cell with two or three live neighbours lives on to the next generation.</li>
<li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
<li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li><br>

These rules, which compare the behavior of the automaton to real life, can be condensed into the following:

<li>Any live cell with two or three live neighbours survives.</li>
<li>Any dead cell with three live neighbours becomes a live cell.</li>
<li>All other live cells die in the next generation. Similarly, all other dead cells stay dead.</li>
