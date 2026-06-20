export default class MyFunctions {
    constructor() {
    }

    RandomInt(min, max) {
        return Math.floor(min + Math.random() * (max - min + 1));
    }

}
