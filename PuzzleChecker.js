/**
 * Find the coordinates of a character in a puzzle
 * @param puzzle a matrix of characters
 * @param char character string
 * @returns an array of coordinates objects
 */
const findLocationsOfCharacterInPuzzle = (puzzle, char) => {
    const locations = [];
    for (let i = 0; i < puzzle.length; i++) {
        const indexOfChar = puzzle[i].indexOf(char);
        if (indexOfChar >= 0) {
            const coordinates = {};
            coordinates.x = i;
            coordinates.y = indexOfChar;
            locations.push(coordinates);
        }
    }

    return locations;
};

/**
 * Keeps looking for the next matching character in the puzzle recursively.
 * @param puzzle matrix
 * @param location an object that contains ta character coordinates in the matrix: x and y
 * @param word a string of words
 * @returns {*} true if a complete match is found, false if not
 */
const findNextLocation = (puzzle, location, word) => {
    if (word.length === 0) {
        return true;
    }

    const { x, y } = location;
    const char = word.charAt(0);

    if (y + 1 < puzzle.length && puzzle[x][y + 1] === char) { // check right
        location.y = y + 1;
        return findNextLocation(puzzle, location, word.substring(1));
    } if (x + 1 < puzzle.length && y + 1 < puzzle.length
        && puzzle[x + 1][y + 1] === char) { // check lower diagonal
        location.x = x + 1;
        location.y = y + 1;
        return findNextLocation(puzzle, location, word.substring(1));
    } if (x + 1 < puzzle.length && puzzle[x + 1][y] === char) { // check lower item
        location.x = x + 1;
        return findNextLocation(puzzle, location, word.substring(1));
    } if (x > 0 && x - 1 < puzzle.length && puzzle[x - 1][y] === char) { // check upper item
        location.x = x - 1;
        return findNextLocation(puzzle, location, word.substring(1));
    } if (x > 0 && x - 1 < puzzle.length && y + 1 < puzzle.length
        && puzzle[x - 1][y + 1] === char) { // check upper diagonal item
        location.x = x - 1;
        location.y = y + 1;
        return findNextLocation(puzzle, location, word.substring(1));
    }
    return false;
};

/**
 * Main function to call to check if there is match for a word in a puzzle
 * @param puzzle matrix
 * @param word a string of characters
 */
const checkPuzzle = (puzzle, word) => {
    let isThereAMatch = false;
    for (const locationCoordinates of findLocationsOfCharacterInPuzzle(puzzle, word.charAt(0)).values()) {
        if (findNextLocation(puzzle, locationCoordinates, word.substring(1))) {
            isThereAMatch = true;
            return isThereAMatch;
        }
    }

    return isThereAMatch;
};

export default { findLocationsOfCharacterInPuzzle, findNextLocation, checkPuzzle };
