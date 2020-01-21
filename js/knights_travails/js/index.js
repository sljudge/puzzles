const verfifyCoords = (input) => {
    const firstChar = typeof (input.slice(0, 1)) === 'string' ? input.slice(0, 1).toLowerCase() : null
    const secondChar = parseInt(input.slice(1, 2))

    if (firstChar === null || firstChar.charCodeAt(0) < 97 || firstChar.charCodeAt(0) > 104) {
        return 'First character must be a letter from A to H.'
    } else if (secondChar !== secondChar || secondChar < 1 || secondChar > 8) {
        return 'Second character must be a number between 1 and 8'
    }

    let output = []
    switch (firstChar) {
        case ('a'): output.push(0); break;
        case ('b'): output.push(1); break;
        case ('c'): output.push(2); break;
        case ('d'): output.push(3); break;
        case ('e'): output.push(4); break;
        case ('f'): output.push(5); break;
        case ('g'): output.push(6); break;
        case ('h'): output.push(7); break;
    }
    output.push(secondChar - 1)
    return output
}


document.addEventListener('DOMContentLoaded', () => {

    const onSubmit = () => {
        ////////   ERROR MESSAGES       /////////
        if (typeof (start) === 'string') {
            alert(start)
        } else if (typeof (end) === 'string') {
            alert(end)
        } else if (start[0] === end[0] && start[1] === end[1]) {
            alert('Start must be different to end')
        }
        else {
            ////////   CALCULATE PATH       /////////
            moves = knightMoves(start, end)
            ////////   CREATE DIVS   /////////
            const route = document.createElement('div')
            route.id = 'route'
            const routeContainer = document.getElementById('route-container')
            routeContainer.appendChild(route)
            ////////   ADD IN MOVES  /////////
            for (let move of moves) {
                const entry = document.createElement('div')
                entry.innerHTML = (
                    `${move} <br/>... <br/>`
                )
                route.appendChild(entry)
            }
            ////////   ADD PIECES  /////////
            const knight = new Piece(start, 'knight')
            knight.mount(boardArea)
            const king = new Piece(end, 'king')
            king.mount(boardArea)
        }
    }

    const onClear = () => {
        document.getElementById('route').remove()
        document.getElementById('knight').remove()
        document.getElementById('king').remove()
    }

    /////////////////////////////////////////
    /////////       BOARD       /////////////
    /////////////////////////////////////////

    const app = document.getElementById('app')
    const board = new Board
    board.mount(app)
    const boardArea = document.getElementById('board')
    /////////////////////////////////////////
    /////////       INPUTS       /////////////
    /////////////////////////////////////////
    const startInput = document.getElementById('start')
    const endInput = document.getElementById('end')
    const submit = document.getElementById('submit')
    const clear = document.getElementById('clear')
    /////////////////////////////////////////
    //////     EVENT LISTENERS       ////////
    /////////////////////////////////////////
    let start, end, moves
    startInput.addEventListener('change', () => {
        start = verfifyCoords(startInput.value)
    })
    endInput.addEventListener('change', () => {
        end = verfifyCoords(endInput.value)
    })
    submit.addEventListener('click', () => {
        try { onClear() }
        finally { onSubmit(start, end) }
    })
    app.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            try { onClear() }
            finally { onSubmit(start, end) }
        }
    })
    clear.addEventListener('click', () => onClear())





})