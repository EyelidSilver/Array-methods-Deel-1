 //A
 const wowWords = ["nice", "awesome", "tof"];

 const addTheWordCool = function (wowWords) {
     wowWords.push('cool');
     console.log("Add cool: ", wowWords)
 }

 addTheWordCool(wowWords);



 //B
 const fruits = ['appels', 'peren', 'citroenen'];

 const getAmountOfArrayItems = function (fruits) {
     console.log(fruits.length)
 }

 getAmountOfArrayItems(fruits);


 //C
 const benelux = ["Belgie", "Nederland", "Luxemburg"];

 const selectBelgiumFromBenelux = function (benelux) {
     console.log(benelux[0])
 }

 selectBelgiumFromBenelux(benelux);


 //D
 const animals = ["Haas", "Cavia", "Kip", "Schildpad"];

 const lastElementInArray = function (animals) {
     console.log(animals[animals.length - 1])
 }

 lastElementInArray(animals);


 //E
 const presidents = ["Trump", "Obama", "Bush", "Clinton"]

 const impeachTrumpSlice = function (presidents) {
     console.log(presidents.slice(1))
 }
 const impeachTrumpSplice = (presidents) => {
     console.log(presidents.splice(1))
 }

 impeachTrumpSlice(presidents);
 impeachTrumpSplice(presidents);


 //F
 const wordsArray = ['Winc', 'Academy', 'is', 'leuk', ';-}']

 const stringsTogether = function (wordsArray) {
     console.log(wordsArray.join(' '));
 }

 stringsTogether(wordsArray)


 //G
 const array1 = [1, 2, 3];
 const array2 = [4, 5, 6];

 const combineArrays = function (combineArrays) {
     console.log(array1.concat(array2))
 }

 combineArrays(combineArrays)