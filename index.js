const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
    const arrInArr = tutorials.map(item => item.split(" "))
    let arrToString;
    let finalArr = [];
    for (let i = 0; i < arrInArr.length; i++) {
      arrToString = arrInArr[i].map(item => {
        return item.charAt(0).toUpperCase() + item.slice(1)
      }).join(" ")
      //console.log(arrToString)
      finalArr.push(arrToString)

    }
    return finalArr
  //return tutorials
}

//console.log(titleCased())
