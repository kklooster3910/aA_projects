// Write a function that takes two strings, s1 and s2 and
// returns the longest common subsequence of s1 and s2 
// letters just have to be in the correct order

// "ABAZDC", "BACBAD" => "ABAD"
// "AGGTAB", "GXTXAYB" => "GTAB"
// "aaaa, aa" => "aa"
// "", "..." => ""
// "ABBA", "ABCABA" => "ABBA"

// need to find a way to compare two strings of words as long as the letters are in the same order
// brute force: 
// iterate over the first string, use nested for loop to iterate over both, if you compare characters and their idx

// const isInString = (str, letter) => {
//   let strArray = str.split('');
//   for (let i = 0; i < str.length; i++) {
//     if (strArray[i] === letter) {
//       return true;
//     }
//   }
//   return false
// }

// const subSequence = (str1, str2) => {
//   let subString = ''
//   let str1Array = str1.split('');
//   let str2Array = str2.split('');

//   let helperResponse;
//   for (let i = 0; i < str1Array.length; i++) {
//     helperResponse = isInString(str2, str1Array[i]);
//     if (helperResponse === true) {
//       // console.log('HELLO')
//       console.log(str2Array.indexOf(str1Array[i]));
//       console.log(str1Array.indexOf(str1Array[i]));
//       if (str2Array.indexOf(str1Array[i]) >= str1Array.indexOf(str1Array[i])) {
//         subString += str1Array[i];
//       }
//     }
//   }
//   return subString
// }


// Pauls' solution below, try and figure out the time complexity
function longestSubsequence(str1, str2) {
  if (str1.length === 0) return str1;
  const str1Arr = str1.split("");
  const str2Arr = str2.split("");
  let subSeqHsh = {};
  for (i = 0; i < str1Arr.length; i++) {
    let subSeq = "";
    let begIdx = 0;
    for (j = i; j < str1Arr.length; j++) {
      let nextLetter = str1Arr[j];
      let nextArr = str2Arr.slice(begIdx, str2.length);
      if (nextArr.includes(nextLetter)) {
        subSeq = subSeq + nextLetter;
        begIdx = begIdx + nextArr.indexOf(str1Arr[j]) + 1;
      }
      subSeqHsh[subSeq.length] = subSeq;
    }
  }
  let subSeqKeysArr = Object.keys(subSeqHsh).sort();
  let longest = subSeqKeysArr[subSeqKeysArr.length - 1];
  return subSeqHsh[`${longest}`];
}

// console.log(subSequence('ABAZDC', 'BACBAD'));
// console.log(isInString("ABAZDC", "A"));
console.log(longestSubsequence("zxvvyzw", "xkykzpw"))



