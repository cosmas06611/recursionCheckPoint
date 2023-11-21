    function isPalindrome(word) {

        if (word.length <= 1) {
            return true;
        }

        
        if (word[0] === word[word.length - 1]) {
        
            return isPalindrome(word.slice(1, -1));
        } else {
        
            return false;
        }
    }


    const wordToCheck = "radar";
    const result = isPalindrome(wordToCheck);

    if (result) {
        console.log(`${wordToCheck} is a palindrome!`);
    } else {
        console.log(`${wordToCheck} is not a palindrome.`);
    }
