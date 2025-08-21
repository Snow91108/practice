// function isPalindrome(str){
//     let reversed =str.split("").reverse().join("");
//     return str===reversed
// }
// console.log(isPalindrome("madam"));


// function ispalindrome(str){
//     let reversed=str.split("").reverse().join("")
//     return str==reversed
// }
// console.log(ispalindrome("raju"))


function ispalindrome(str){
    let left =0, right= str.length-1;
    while (left<right) {
        if(str[left]!=str[right])return false;
        left++;right--;
        
    }
    return true;
}
console.log(ispalindrome("madam"))