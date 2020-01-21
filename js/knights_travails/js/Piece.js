class Piece {
    constructor(position, type) {
        this.x = position[0]
        this.y = position[1]
        this.type = type

    }
    render() {
        this.element = document.createElement('div')
        this.element.innerHTML = (
            this.type === 'knight' ? '<i class="fas fa-chess-knight"></i>' : '<i class="fas fa-chess-king"></i>'
        )
        this.element.id = this.type
        this.element.style.position = 'absolute'
        this.element.style.left = `${this.x}.15rem`
        this.element.style.bottom = `${this.y}rem`
        this.element.style.fontSize = '0.9rem'
        this.element.style.color = this.type === 'knight' ? 'white' : 'black'


    }
    mount(parent) {
        this.render()
        parent.appendChild(this.element)
    }
    unmount(parent) {
        parent.removeChild(this.element)
    }
}