function isPalindrome(str){
    var flag=true;
    for(k=0;k<str.length;k++){
         if(str[k]!==str[str.length-k-1]){
             flag=false;
             break;
         }
    }
    return flag
}let str = "naman";