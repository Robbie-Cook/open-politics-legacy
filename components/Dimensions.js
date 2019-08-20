// Class converting css-style dimensions (padding etc.) to an object
class Dimensions {
  // e.g. padding: 0 5px;
  constructor(top, right, bottom = top, left = right) {
    // String values given
    if (typeof top === "string") {
      this.top = top
      this.right = right
      this.bottom = bottom
      this.left = left
    } else {
      // Numeric values given
      this.top = `${top}px`
      this.right = `${right}px`
      this.bottom = `${bottom}px`
      this.left = `${left}px`
    }
  }

  toString() {
    return `${this.top} ${this.right} ${this.bottom} ${this.left}`
  }
}

export default Dimensions