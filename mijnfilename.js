 //A
 const wowWords = ["nice", "awesome", "tof"];

 const addTheWordCool = function (wowWords) {
    wowWords.push('cool'); 
    return wowWords
 }

 console.log(addTheWordCool(wowWords));


 //B
 const fruits = ['appels', 'peren', 'citroenen'];

 const getAmountOfArrayItems = function (fruits) {
     return fruits.length
 }

 console.log(getAmountOfArrayItems(fruits));


 //C
 const benelux = ["Belgie", "Nederland", "Luxemburg"];

 const selectBelgiumFromBenelux = function (benelux) {
     return benelux[0]
 }

 console.log(selectBelgiumFromBenelux(benelux));


 //D
 const animals = ["Haas", "Cavia", "Kip", "Schildpad"];

 const lastElementInArray = function (animals) {
     return animals[animals.length - 1]
 }

 console.log(lastElementInArray(animals));


 //E
 const presidents = ["Trump", "Obama", "Bush", "Clinton"]

 const impeachTrumpSlice = function (presidents) {
    return presidents.slice(1)
 }
 const impeachTrumpSplice = (presidents) => {
    return presidents.splice(1)
 }

 console.log(impeachTrumpSlice(presidents));
 console.log(impeachTrumpSplice(presidents));


 //F
 const wordsArray = ['Winc', 'Academy', 'is', 'leuk', ';-}']

 const stringsTogether = function (wordsArray) {
     return wordsArray.join(' ');
 }

 console.log(stringsTogether(wordsArray))


 //G
 const array1 = [1, 2, 3];
 const array2 = [4, 5, 6];

 const combineArrays = function (combineArrays) {
     return array1.concat(array2)
 }

 console.log(combineArrays(combineArrays))