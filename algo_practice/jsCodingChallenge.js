// array size n x n --- 

[
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]
]

[1, 2, 3, 6, 9, 8, 7, 4, 5]

[0, 0], [0, 1], [0, 2], [1, 2], [2, 2], [2, 1], [2, 0], [1, 0], [1, 1]

function snailSnearch(arr) {
  let path = 'right';
  let pathIdx;
  let snail = [];

  let timesGoneRight = 0;
  let timesGoneDown = 0;
  let timesGoneLeft = 0;
  let timesGoneUp = 0;
  while (snail.length < (arr.length * arr.length)) {
    if (path === 'right') {
      for (let i = 0)
      timesGoneRight++
      path = 'down'
    };
    if (path === 'down') { };
    if (path === 'left') { };
    if (path === 'up') { };
    
  }

}