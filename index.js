class Polygon {
    constructor(sidesArray) {
        this.sidesArray = sidesArray
    }

    get countSides() {
        return this.sidesArray.length
    }

    get perimeter() {

        return this.sidesArray.reduce((a,b) => a+b, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let valid = true

        if (this.countSides !== 3) {
            valid = false
        } else if (this.sidesArray.some(side => (side > this.perimeter/2))){
            valid = false
        }
        return valid
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.sidesArray.every(side => side === this.sidesArray[0])){
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.sidesArray[0] ** 2
    }
}
