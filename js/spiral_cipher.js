class spiralCipher {

    findNumberOfSpaces(str) {
        // Find squareroot of string.length, round and square to determine closest square number bigger than string.length
        return Math.pow(Math.ceil(Math.sqrt(str.length)), 2)
    }

    createGrid(numberOfSpaces, str = null) {
        //create a square grid relative to the number of spaces needed and populate if necessary
        let grid = []
        const size = Math.sqrt(numberOfSpaces)
        for (let i = 0, l = 0; i < size; i++) {
            grid.push([])
            if (str) {
                for (let j = 0; j < size; j++) {
                    grid[i].push(str[j + l])
                }
                l += size
            }
        }
        return grid
    }



    iterate(numberOfSpaces, str, type, output, input = []) {
        for (let l = 0, i = 0, j = 0, n = Math.sqrt(numberOfSpaces) - 1; l < numberOfSpaces; l++) {
            /*
            l = letter index on string
            i = inner index of spiral
            j = index of spiral (outer -> inner)
            n = grid size (n*n)
                
            l % 4  for switch:
                    0           1           2             3
                [j , i]     [i, n-j]    [n-j, n-i]    [n-i, j]
            */
            let letter = str[l]
            if (letter === undefined) {
                letter = '_'
            }
            switch (l % 4) {
                case 0:
                    console.log('[', j, i, '] => ', letter)
                    if (type === 'encode') {
                        output[j][i] = letter
                    } else if (type === 'decode') {
                        output.push(input[j][i])
                    }
                    break
                case 1:
                    console.log('[', i, n - j, '] => ', letter)
                    if (type === 'encode') {
                        output[i][n - j] = letter
                    } else if (type === 'decode') {
                        output.push(input[i][n - j])
                    }
                    break
                case 2:
                    console.log('[', n - j, n - i, '] => ', letter)
                    if (type === 'encode') {
                        output[n - j][n - i] = letter
                    } else if (type === 'decode') {
                        output.push(input[n - j][n - i])
                    }
                    break
                case 3:
                    console.log('[', n - i, j, '] => ', letter)
                    if (type === 'encode') {
                        output[n - i][j] = letter
                    } else if (type === 'decode') {
                        output.push(input[n - i][j])
                    }
                    break
            }

            console.log(`${l} ; x:${l % 4}`)
            console.log(`j: ${j} ; i: ${i} ; n: ${n} ; `)
            console.log(' ')
            console.log('//////////////////////////////')
            console.log(' ')

            // next item in spiral
            if (l % 4 === 3) {
                i++
            }
            // move to inner/next spiral
            if (i + j === n) {
                j++
                i = j
            }
        }
    }

    encode(str) {
        const numberOfSpaces = this.findNumberOfSpaces(str)
        console.log('number of spaces: ', numberOfSpaces)

        let output = this.createGrid(numberOfSpaces)
        console.log('Initial output: ', output)

        this.iterate(numberOfSpaces, str, 'encode', output)

        return output
    }

    decode(str) {
        const numberOfSpaces = this.findNumberOfSpaces(str)
        console.log('number of spaces: ', numberOfSpaces)

        const grid = this.createGrid(numberOfSpaces, str)
        console.log('grid: ', grid)

        let output = []
        this.iterate(numberOfSpaces, str, 'decode', output, grid)
        return output.join('').trim()
    }
}
const cipher = new spiralCipher

//ENCODE
// console.log(cipher.encode('Dulce et decorum est'))
// console.log(cipher.encode('Dulce_et_decorum_est_pro_patria_mori'))
// console.log(cipher.encode('Romani ite domum'))

// DECODE
console.log(cipher.decode('Stsgiriuar i ninmd l otac'))
