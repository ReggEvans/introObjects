// NORMAL MODE ( 0 - 4 )


// Part 0 

// Write a function called flipColor. This function may be 
// used to change the color of a tile in a game. It should 
// take as input an object. If that object's color property
// has the value blue, it should change it to red, and 
// vice-versa.

// see test.js for example usage

var flipColor = function(colorObj) {
	if (colorObj['color'] === 'blue') {
		colorObj['color'] = 'red'
	}
    else if (colorObj['color'] === 'red') {
			 colorObj['color'] = 'blue'
	}
    return colorObj
}


// Part 1

// Write a function called getFullNames that takes an array 
// of objects with first and last names and returns an array 
// of strings, where each string is a customer's full name.

// see test.js for example usage

var getFullNames = function(objArray) {
	var arrayOfStrings = []
	for (var i = 0; i < objArray.length; i++) {
        arrayOfStrings.push(objArray[i]['first'] + " " + objArray[i]['last'])
    }
	return arrayOfStrings
}

// Part 2

// Write a function called generateDog that returns an object which represents a dog.
// The dog object should have attributes like legs, weight and color. The dog *constructor* 
// (which is, almost, what this is) should take a name input, and the dog should receive the 
// assigned name.

// Give the dog a method called .speak(). speak() should receive a string as input and 
// return a new version of that string where the first letter of every word is replaced 
// with the letter 'r'.


// see test.js for example usage

var generateDog = function(dogName) {
    var dogObject = {
        name: dogName,
        legs: 4,
        color: 'yellow',
        weight: 20,
        speak: function(dogStr) {
            var dogSpeakArr = []
            var dogStrArray = dogStr.split(' ')
            for (var i = 0; i < dogStrArray.length; i++) {
                var words = dogStrArray[i]
                dogSpeakArr.push(words.charAt[0] = 'r' + words.slice(1))
            }
            return dogSpeakArr.join(' ')
        }
    }
    return dogObject
}


// Part 3

// Write a function pluck() that, given a list of objects, extracts a list of
// the values associated with a given property name.

// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]
// pluck(stooges, 'name') should yield the array, ['moe','larry','curly']

// see test.js for example usage

var pluck = function(objectName, prop) {
    var nameStr = []
    for (var i = 0; i < objectName.length; i++) {
        nameStr.push(objectName[i][prop])
    }
    return nameStr
}

// Part 4

// Write a function called getCounts that takes a string of text as input and returns
// an object which stores the frequency of each word in the string.

// Note that your counts should NOT be case-sensitive.


// check test.js for examples of how this function should be used.


var getCounts = function(strOfText) {
    var wordCountObject = {}
    var arrayOfText = strOfText.replace(/[^A-Za-z0-9" "]/g,"").toLowerCase().split(/\W+/)
    for (var i = 0; i < arrayOfText.length; i++) {
        var counter = 0
        if (wordCountObject[arrayOfText[i]] === undefined) {
            for (var j = 0; j < arrayOfText.length; j++) {
                if (arrayOfText[i] === arrayOfText[j]) {
                    counter += 1
                }
                wordCountObject[arrayOfText[i]] = counter
            }
        }
    }
    return wordCountObject
}


// ADVENTURE MODE ( 5 - 8 )

// for these problems you will need to use the for-in loop


// Part 5

// Write a function called reverseObject(). It should take as input an object, 
// and it should output a new object where the keys and values are reversed.


// var object = {
//     occupants: 4,
//     apartment_no: "2b",
//     structural_integrity: "failing"
// }
// reverseObject(object) should yield: 
// {
//   4: 'occupants',
//   2b: 'apartment_no',
//   failing: 'structural_integrity'
// }

var reverseObject = function(object) {
    var newObject = {}
    for (var prop in object) {
        newObject[object[prop]] = prop
    }
    return newObject 
}


// Part 6

// Write a function called reverseAll(). It should take as input an array of 
// objects, and it should output an array of objects with the keys and values
// reversed.

var users = [{obama: 'president@gmail.com',hobby: 'basketball'},{trump: 'americamoneywin@yahoo.com', hobby:'dealmaking'},{bush: 'jeb!@hotmail.com',hobby:'portraiture'}]
// should yield: [{'president@gmail.com': 'obama',basketball: 'hobby'}, ....]

var reverseAll = function(arrayOfObjects) {
    var reversedArray = []
    for(var i = 0; i < arrayOfObjects.length; i++) {
		reversedArray.push(reverseObject(arrayOfObjects[i]))
    }
    return reversedArray
}

// Part 7

// Write a function where() that takes two inputs, a list of objects and 
// a properties object. It should return a new list containing only those
// objects that meet the key-value conditions in the properties object.

var plays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1623},
    {title: "The Tempest", author: "Shakespeare", year: 1623},
    {title: "Hamlet", author: "Shakespeare", year: 1603},
    {title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600},
    {title: "Macbeth", author: "Shakespeare", year: 1620},
    {title: "Death of a Salesman", author: "Arthur Miller", year: 1949},
    {title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949}
]


var where = function(listOfObjects, propObject) {
    var newArray = []
    for(var i = 0; i < listOfObjects.length; i++) {
        var object = listOfObjects[i]
        for(var prop in object) {
            



            
        }
    }
    return newArray
}









