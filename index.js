
let str1 = "kayak";

/*let str2Reversed = "";
for(let i = str1.length - 1; i >= 0; i--){
	str2Reversed += str1[i];
}*/



//EX 1 Trouver si le mot est un palindromme
//EX 2 Trouver valeur de chaque lettre (en ne comptant pas asci uppercase), et les additionner


//1 - Solution 1
let reverse = (str) => {
	let reverseStr = "";
	for(let i = str.length - 1; i >= 0; i--){
  	reverseStr += str[i];
  }
  return reverseStr;
}

//Renvoie les mots palindromme dans un tableau de string
let findPalindrommeInArray = (array) => {

    let motPalArray = [];
    for(let i = 0; i < array.length; i++){
        if(typeof array[i] != "string"){
            //throw new TypeError("Item non string dans le tableau")
            continue;
        }
        let aString = array[i];
        if(aString.localeCompare(reverse(aString)) === 0){
          motPalArray.push(aString);
      }
    }
}

let palindrommeArraytoString = (motPalArray) => {
    let returnMessage = "";
    if(motPalArray.length > 0){
        let toStringPalArray = "Les mots Palindromme sont :";
        for(let i = 0; i < motPalArray.length; i++){
          toStringPalArray += " " + motPalArray[i];
        if(i < motPalArray.length - 2){
            toStringPalArray += ",";
        }
        else if(i < motPalArray.length - 1){
            toStringPalArray += " et";
        }
      }
      returnMessage = toStringPalArray;
    }
    else{
        returnMessage = "Il n'y a aucun mots palindromme";
    }
    return returnMessage;
}


let palindrommeFunc = (array) => {
    let palindrommeArray = findPalindrommeInArray(array);
    return palindrommeArraytoString(palindrommeArray);
}

let strArray = ["abcde","str1",4,"aaaaeg","kayaka","aabbaaa","oottooa",4];
console.log(palindrommeFunc(strArray));
