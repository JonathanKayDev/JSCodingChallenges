//driver function used for display and passing values.
function findVowels() {

    //getting values from the page no need to change.
    let str = document.getElementById("wordOne").value;

    if (str == "") {
        alert("Please enter a word or phrase");
        return;
    }

    //implement getVowelCount
    let vowelObj = getVowelCount(str);
    
    //used for display no need to change
    //check if the obj returned is empty
    if (Object.keys(vowelObj).length === 0){
        alert("Error: Vowel Object is Empty");
        return;
    }

    document.getElementById("results").innerHTML = `You entered <strong>"${str}"</strong> it has ${vowelObj.vCount} vowels.<br>The vowels found are ${vowelObj.vFound.toString()}`;

}

//takes an string and returns the vowel count and the vowels found as an object.
function getVowelCount(str) {
    // strip out whitespace
    str = str.replace(/\s/g,"");
    // convert to lower-case
    str = str.toLowerCase();

    // set vowel count integer
    let vowelObj = {};
    vowelObj.vCount = 0;
    vowelObj.vFound = [];

    // loop over string and count each vowel
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        
        if (element == "a" || element == "e" || element == "i" || element == "o" || element == "u") {
            vowelObj.vCount += 1;
            vowelObj.vFound.push(element);
        }

    }

    return vowelObj;

}