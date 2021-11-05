
//Write function to print prime integers from 80 to 50 in reverse order (use while loop)
var j = 2;

function isPrime() {
    var start = parseInt(prompt("enter staring number"));
    var End = parseInt(prompt("enter ending  number"));
    var flag;
    while (start >= End) {
        var j = 2;
        prime();
        if (flag == true && start > 1) {
            console.log(start);
        }
        start--;
    }

    function prime() {
        while (j < start) {
            if (start % j == 0) {
                flag = false;
                break;
            } else {
                flag = true;
            }
            j++;
        }
    }

}
isPrime();