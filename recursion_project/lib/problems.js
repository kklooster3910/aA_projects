// Write a function, lucasNumber(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively!
//
// Examples:
//
// lucasNumber(0)   // => 2
// lucasNumber(1)   // => 1
// lucasNumber(2)   // => 3
// lucasNumber(3)   // => 4
// lucasNumber(5)   // => 11
// lucasNumber(9)   // => 76
function lucasNumber(n) {
    if (n === 0) return 2;
    if (n === 1) return 1;

    return lucasNumber(n - 1) + lucasNumber(n - 2);
}


// Write a function, sumArray(array), that takes in an array of numbers.
// The function should return the total sum of the elements.
// 
// Solve this recursively!
//
// Examples:
//
// sumArray([])             // => 0
// sumArray([5])            // => 5
// sumArray([5, 2])         // => 7
// sumArray([4, 10, -1, 2]) // => 15
function sumArray(array) {

    if (array.length < 1) return 0;
    if (array.length === 1) return array[0];

    return array[0] + sumArray(array.splice(1))
}


// Write a function, reverseString(str), that takes in a string.
// The function should return the string with it's characters in reverse order.
//
// Solve this recursively!
//
// Examples:
// 
// reverseString("")            // => ""
// reverseString("c")           // => "c"
// reverseString("internet")    // => "tenretni"
// reverseString("friends")     // => "sdneirf"
function reverseString(str) {
    if (str.length <= 1) return str;

    return str[str.length - 1] + reverseString(str.slice(0, -1));
}


// Write a function, pow(base, exponent), that takes in two numbers.
// The function should calculate the base raised to the exponent power.
//
// Note: 
// A negative exponent can be calculate by taking the reciprocal of the positive exponent.
// That is, pow(2, -5) is equal to 1 / pow(2, 5)
// 
// Solve this recursively!
//
// Examples:
//
// pow(2, 0)    // => 1
// pow(2, 1)    // => 2
// pow(2, 5)    // => 32
// pow(3, 4)    // => 81
// pow(2, -5)   // => 0.03125
function pow(base, exponent) {
    if (exponent === 0) return 1


    if (exponent > 0) {
        return base * pow(base, exponent - 1)
    }

    if (exponent < 0) {
        return 1 / base * (pow(base, exponent + 1))
    }
}


// A 1-dimensional array is also known as a flattened array.
// Write a method, flatten(data), that accepts a single argument. The
// method should take in an array of any dimension and return the flattened
// version of that array. Solve this recursively.
//   
// Hint:
//  - if the argument is not an array, then we have reached the base case
//  - look up the documentation for how to check if data is an array or not
//
// Examples:
//
// array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
// flatten(array_1)      // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]
//
// array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
// flatten(array_2)      // => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]
//
// flatten('base case')  // => [ 'base case' ]
//
// Another Hint:
//
// From the last example, you may be confused. We said that the method takes
// in an array as an arg, but we passed it a string?
// If data is not an array, then we can consider it as a 0-dimensional array.
//     0-dimensional array: 'some data'
//     1-dimensional array: ['some data']
//     2-dimensional array: [['some data']]
//     3-dimensional array: [[['some data']]]
function flatten(data) {
    if (!Array.isArray(data)) {
        return [data]
    };
    let returnArr = [];
    for (let i = 0; i < data.length; i++) {
        if (Array.isArray(data[i])) {
            returnArr = returnArr.concat(flatten(data[i]));
        } else {
            returnArr.push(data[i]);
        }
    }
    return returnArr;
}

// Write a function, fileFinder(directories, targetFile), that accepts an object representing directories and a string respresenting a filename.
// The function should return true, if the file is contained anywhere in the given directories.
// Note that directory names will begin with '/', but file names will not.
// 
// Example:
//
let desktop = {
    '/images': {
        'app_academy_logo.svg': null,
        '/parks': {
            'yosemite.jpeg': null,
            'acadia.jpeg': null,
            'yellowstone.png': null
        },
        '/pets': {
            'trixie_lou.jpeg': null,
            'rolo.jpeg': null,
            'opal.jpeg': null,
            'diana.jpeg': null,
        }
    },
    '/music': {
        'hey_programmers.mp3': null,
        '/genres': {
            '/rock': {
                'everlong.flac': null,
                'livin_on_a_prayer.mp3': null
            },
            '/hip_hop': {
                'express_yourself.wav': null,
                'ny_state_of_mind.mp3': null
            }
        }
    }
};
//
// fileFinder(desktop, 'app_academy_logo.svg');     // => true
// fileFinder(desktop, 'everlong.flac');            // => true
// fileFinder(desktop, 'sequoia.jpeg');             // => false
function fileFinder(directories, targetFile) {
    // if (directories[targetFile] === null) return false
    // if (!directories[targetFile] === null) return true

    // let directoryArray = Object.keys(directories)
    // for (let i = 0; i < directoryArray.length; i++) {
    //     // let search = fileFinder(directoryArray[i], targetFile)
    //     // console.log(directoryArray);
    //     // console.log(directories);
    //     // console.log(directories[directoriesArray[i]]);

    //     if (directoryArray[i] === targetFile || fileFinder(directories[directoryArray[i]], targetFile)) {
    //         return true;
    //     };
    // }

    for (let key in directories) {
        if (key === targetFile || fileFinder(directories[key], targetFile)) {
            return true;
        }
    }
    return false;
    // return search
}


// Write another function, pathFinder(directories, targetFile), that returns the path that contains the targetFile.
// If the targetFile is not found in the directories, then return null.
// You can assume the files are unique.
//
// Example using the same desktop from previously:
//
// pathFinder(desktop, 'trixie_lou.jpeg'));     // => '/images/pets/trixie_lou.jpeg'
// pathFinder(desktop, 'everlong.flac'));       // => '/music/genres/rock/everlong.flac'
// pathFinder(desktop, 'honeybadger.png'));     // => null
function pathFinder(directories, targetFile) {

    // let fileName;
    // for (name in directories) {
    //     if (name === targetFile) fileName = ` /${targetFile}`
    //     let subDir = directories[name];
    //     console.log(subDir)
    //     let pathName = pathFinder(subDir, targetFile);
    //     // console.log(pathName);
    //     // debugger;
    //     if (pathName !== null) {
    //         return name + pathName;
    //     }

    // }
    // return null;

    for (let key in directories) {
        if (key === targetFile) {
            return '/' + targetFile;
        }
        let subDir = directories[key];
        let filePath = pathFinder(subDir, targetFile);
        if (filePath !== null) {
            return key + filePath;
        }

    }
    return null;
}

// console.log(pathFinder())

module.exports = {
    lucasNumber,
    sumArray,
    reverseString,
    pow,
    flatten,
    fileFinder,
    pathFinder
};

pathFinder(desktop, 'everlong.flac')