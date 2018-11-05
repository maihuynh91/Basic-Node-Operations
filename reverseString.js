// Input: "I'm learning to program algorithms!"
// Output: "m'I gninrael ot margorp !smhtirogla"

function reverseString(str){
   let result="";
   let splitString = str.split(" ");

   splitString.forEach(element => {
   
      let splitWord = element.split("");
      let joinArray = splitWord.reverse().join("");
      
      result += joinArray + " "
   });

  return result

}

console.log(reverseString("I'm learning to program algorithms!"));