class Bubble {
  constructor(numberSet = [4, 5, 8, 3, 2]) {
    this.numberSet = numberSet;
    this.sorted = false;
  }

  swap(numberSet, firstIndex, secondIndex) {
    let temp = numberSet[firstIndex];
    numberSet[firstIndex] = numberSet[secondIndex];
    numberSet[secondIndex] = temp;
  }

  sort() {
    let numberSet = this.numberSet;
    let length = numberSet.length;
    let i;
    let j;
    let stop;

    for (i = 0; i < length; i++) {
      for (j = 0, stop = length - i; j < stop; j++) {
        if (numberSet[j] > numberSet[j + 1]) {
          this.swap(numberSet, j, j + 1);
        }
      }
    }
    return numberSet;
  }
}

module.exports = Bubble;