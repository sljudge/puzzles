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
    // console.log('MOVES: ')
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
        const numberOfSquares = Math.pow(boardSize - 1, 2);
        console.log('Number of squares: '+ numberOfSquares);
        let starters = [];

        for( i=0; i <= numberOfSquares + boardSize - 2; i++ ){
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
    const checkMove = (moves, boxes, x, y) => {
        let score = false;

        if(x > moves.length){
            return 'Finished';
        }
        //Cycle through moves
        let move = moves[x];
        if(y%2===0){
            console.log('PLAYER1 - '+'MOVE: '+ '[' + move + ']' )
        }else{
            console.log('PLAYER2 - '+'MOVE: '+ '[' + move + ']' )
        }
        //Cycle through each box
        boxes.map( box => {
            for(i=0; i<box.length; i++){
                //Cycle through lines looking for match with move
                if(box[i][0] === move[0] && box[i][1] === move[1]){
                    box.splice(i, 1);
                    // console.log(boxes)
                    //Check if score
                    if(box.length === 0){
                        boxes = boxes.filter(box => box.length !== 0)
                        if(y % 2 === 0){
                            player1 += 1
                            console.log('player 1 score!!')
                            score = true;
                        }else if(y % 2 === 1){
                            player2 += 1
                            console.log('player 2 score!!')
                            score = true;
                        }
                    }
                }
            };
        });
        if(score === true){
            return checkMove(moves, boxes, x+1, y);
        }else{
            return checkMove(moves, boxes, x+1, y+1)
        }
    }
    
    let player1 = 0;
    let player2 = 0;
    let y = 0;
    let x = 0;
    checkMove(moves, boxes, x, y)
    // console.log('BOARD SIZE: '+ boardSize)
    // console.log('NUMBER OF SQUARES: '+ starters.length)
    // console.log('LENGTH: '+moves.length)
    // console.log('PLAYER1: '+player1)
    // console.log('PLAYER2: '+player2)


    return [player1, player2]


}
// let moves = [[0,1],[7,8],[1,2],[6,7],[0,3],[8,5],[3,4],[4,1],[4,5],[2,5],[3,6],[7,4]];
// let moves = [[0,1],[7,8],[1,2],[6,7],[0,3],[5,8],[3,4],[1,4],[4,5],[2,5],[4,7],[3,6]];
let moves = [[5,6],[12,17],[16,21],[13,14],[2,7],[5,10],[13,18],[17,18],[10,11],[15,20],[21,22],[1,6],[7,8],[10,15],[15,16],[8,3],[18,23],[0,5],[6,7],[8,13],[11,12],[11,16],[22,23],[17,22],[20,21],[6,11],[16,17],[0,1],[7,12],[12,13],[2,3],[14,19],[23,24],[1,2],[8,9],[19,24],[18,19],[9,14],[4,9],[3,4]];

console.log(dotsAndBoxes(moves))

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

    8,9 - 8,12 - 9,13 - 12-13               => 6x6 => [0,1,2,3,4], [6,7,8,9,10], [12,13,14,15,16], [18,19,20,21,22], [24,25,26,27,28]
                                            => number of squares = 25
    9,10 - 9,13 - 10,14 - 13,14
                                            *** i=0; i <= numberOfSquares + boardSize % 3; i++
    10,11 - 10,14 - 11,15 - 14,15           for( i=0; i <= numberOfSquares; i++ ){
                                                if( (i + 1) % boardSize === 0){
                                                    continue
                                                }else{
                                                    starters.push(i)
                                                }
                                            }
]*/


