function dotsAndBoxes(ar){
    /*for a 3 x 3 square

    0  1  2

    3  4  5

    6  7  8 */

    //Sort moves for comparing
    const sortMoves = (moves) => {
        moves = moves.map(i => i.sort((a, b) => {return a - b}));
        return moves
    }
    const moves = sortMoves(ar);
    // console.log(moves)
    
    //Find max in order to determine board size
    const findMax = (moves) => {
        let highers = [];
        moves.map(i => highers.push(Math.max(...i) ));
        const max = Math.max(...highers);
        return max
    };
    
    //Find board size using max play
    const boardSize = Math.sqrt( findMax(moves) + 1 );
    console.log('Board size: '+ boardSize);
    
    //Find starting points of each possible square
    const checkForStartPoints = (boardSize) => {
        const numberOfSquares = (boardSize % 3 + 1) * boardSize + 1;
        console.log('Number of squares: '+ numberOfSquares);
        let starters = [];

        for( i=0; i <= numberOfSquares + boardSize % 3; i++ ){
            if( (i + 1) % boardSize === 0){
                continue
            }else{
                starters.push(i)
            }
        }
        
        return starters
    }
    const starters = checkForStartPoints(boardSize);
    console.log('Starters: '+starters)
    
    //Create boxes in order to check off moves
    const createBoxes = (startPoints, boardSize) => {
        const boxes = [];
        startPoints.map( point => {
            boxes.push([
                [point, point+1],
                [point, point+boardSize],
                [point+1, point+1+boardSize],
                [point+boardSize, point+1+boardSize]
            ])
        });
        return boxes;
    }
    let boxes = createBoxes(starters, boardSize);
    console.log(boxes);

    //Check moves using x to indicate player and allocate score
    const checkMove = (move, boxes, x) => {
        console.log('x: '+x)
        if(x%2===0){
            console.log('PLAYER1')
        }else{
            console.log('PLAYER2')
        }
        console.log('MOVE: '+ '[' + move + ']')
        //Cycle through each box
        boxes.map( box => {
            for(i=0; i<box.length; i++){
                //Cycle through lines looking for match with move
                if(box[i][0] === move[0] && box[i][1] === move[1]){
                    box.splice(i, 1);
                    //Check if score
                    if(box.length === 0){
                        boxes = boxes.filter(box => box.length !== 0)
                        if(x % 2 === 0){
                            player1 += 1
                            console.log('player 1 score!!')
                            console.log(boxes)
                            //Increment x to give extra go
                            return x + 1;
                        }else if(x % 2 === 1){
                            player2 += 1
                            console.log('player 2 score!!')
                            console.log(boxes)
                            return x + 1;
                        }
                    }
                }
            };
        });
    }
    
    let player1 = 0;
    let player2 = 0;
    // console.log(moves);
    for(x=0; x<moves.length; x++){
        checkMove(moves[x], boxes, x);
    }

    console.log(player1)
    console.log(player2)


    


}
let moves = [[0,1],[7,8],[1,2],[6,7],[0,3],[8,5],[3,4],[4,1],[4,5],[2,5],[3,6],[7,4]];


// dotsAndBoxes([ [0,1],[7,8],[1,2],[6,7],[0,3],[8,5],[3,4],[4,1],[4,5],[2,5],[3,6],[7,4] ]);
dotsAndBoxes(moves)

/*var three3 = [
    0,1 - 0,3 - 1,4 - 3,4                   => 3x3 starting points = [0, 1] , [3, 4]                       ** no 2
                                            => number of squares = 4                                        i(n)-1
    1,2 - 1,4 - 2,5 - 4,5                   0   1   2                                                       n = board-size
                                            3   4   5                                                       i = board-size % 3
    3,4 - 3,6 - 4,7 - 6,7                   6   7   8

    4,5 - 4,7 - 5,8 - 7,8                                           *****(boardSize -1)^2 + boardSize % 3
]*/                                                         //

/*var four4 = [
    0,1 - 0,4 - 1,5 - 4,5                   => 4x4 starting points = [0, 1, 2], [4, 5, 6], [8, 9, 10]      **no 3 no 7
                                            => number of squares = 9
    1,2 - 1,5 - 2,6 - 5,6                   0   1   2   3
                                            4   5   6   7
    2,3 - 2,6 - 3,7 - 6,7                   8   9   10  11
                                            12  13  14  15
    4,5 - 4,8 - 5,9 - 8,9

    5,6 - 5,9 - 6,10 - 9,10
                                            => 5x5 => [0,1,2,3], [5,6,7,8], [10,11,12,13], [15,16,17,18]
    6,7 - 6,10 - 7,11 - 10,11               => number of squares = 16

    8,9 - 8,12 - 9,13 - 12-13
    
    9,10 - 9,13 - 10,14 - 13,14

    10,11 - 10,14 - 11,15 - 14,15
]*/

/*[ [ 0, 1 ], [ 0, 3 ], [ 1, 4 ], [ 3, 4 ] ],
  [ [ 1, 2 ], [ 1, 4 ], [ 2, 5 ], [ 4, 5 ] ],
  [ [ 3, 4 ], [ 3, 6 ], [ 4, 7 ], [ 6, 7 ] ],
  [ [ 4, 5 ], [ 4, 7 ], [ 5, 8 ], [ 7, 8 ] ] ]
[ [ 0, 1 ],
  [ 7, 8 ],
  [ 1, 2 ],
  [ 6, 7 ],
  [ 0, 3 ],
  [ 5, 8 ],
  [ 3, 4 ],
  [ 1, 4 ],
  [ 4, 5 ],
  [ 2, 5 ],
  [ 3, 6 ],
  [ 4, 7 ] ]
  */
