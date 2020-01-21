class Board {
    start = null
    tend = null

    render() {
        this.element = document.createElement('div')
        this.element.id = 'board'
        this.element.style.border = '0.5rem groove #804000'
        this.element.style.position = 'relative'

        for (let i = 0; i < 8; i++) {
            let row = document.createElement('div')
            row.style.display = 'flex'
            for (let j = 0; j < 8; j++) {
                let square = document.createElement('div')
                square.className = 'square'

                square.style.minWidth = '1rem'
                square.style.maxWidth = '1rem'
                square.style.minHeight = '1rem'
                square.style.maxHeight = '1rem'
                square.style.margin = '0'

                if (i & 1) {
                    if (j & 1) {
                        square.style.backgroundColor = '#C19A6B'
                    } else {
                        square.style.backgroundColor = '#52412D'
                    }
                } else {
                    if (j & 1) {
                        square.style.backgroundColor = '#52412D'
                    } else {
                        square.style.backgroundColor = '#C19A6B'
                    }

                }

                row.appendChild(square)
            }
            this.element.appendChild(row)
        }
    }
    mount(parent) {
        this.render()
        parent.appendChild(this.element)
    }
}