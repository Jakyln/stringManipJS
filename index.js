
let str1 = "kayak";

/*let str2Reversed = "";
for(let i = str1.length - 1; i >= 0; i--){
	str2Reversed += str1[i];
}*/



//EX 1 Trouver si le mot est un palindromme
//EX 2 Trouver valeur de chaque lettre (en ne comptant pas asci uppercase), et les additionner


//1 - Sol 1
let reverse = (str) => {
	let reverseStr = "";
	for(let i = str.length - 1; i >= 0; i--){
  	reverseStr += str[i];
  }
  return reverseStr;
}
/*if(str1.localeCompare(reverse(str1)) === 0){
	console.log("Le mot " + str1 + " est un palindromme.");
}*/


//1 -  Sol2

let strArray = ["abcde","str1","aaaaeg","kayaka","aabbaaa","oottooa"];
let motPalArray = [];
for(let i = 0; i < strArray.length; i++){
	let anStr = strArray[i];
	if(anStr.localeCompare(reverse(anStr)) === 0){
  	motPalArray.push(anStr);
  }
}

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
console.log(returnMessage);
//console.log(reverse(str1));

	for(let i = 0; i < str1.length; i++){
  	
  }
