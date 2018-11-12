/**
 * check if the input bucket array could make up a given string
 * @param {*} inputArrayBucket
 * @param {*} inputString
 */
const checkIfArrayCouldMakeString = (inputArrayBucket, inputString) => {
    // generate an empty array
    const db = [...Array(500).fill(0)];

    // convert inputArray to an array of character asciis and
    // use them as indices to mark their existence
    inputArrayBucket.forEach((element) => {
        db[element.charCodeAt(0)] += 1;
    });

    // convert inputString to an array of character asciis
    const inputStringAsAsciis = [...inputString].map(item => item.charCodeAt(0));

    return inputStringAsAsciis.reduce((isThereAMatch = true, item) => {
        const isMatch = isThereAMatch && (db[item] > 0);
        db[item] -= 1;
        return isMatch;
    }, true);
};

export default checkIfArrayCouldMakeString;
