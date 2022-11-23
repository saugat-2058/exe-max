function result() {
    var btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, conf;
    btn1 = document.getElementById('btn1').innerHTML;
    btn2 = document.getElementById('btn2').innerHTML;
    btn3 = document.getElementById('btn3').innerHTML;
    btn4 = document.getElementById('btn4').innerHTML;
    btn5 = document.getElementById('btn5').innerHTML;
    btn6 = document.getElementById('btn6').innerHTML;
    btn7 = document.getElementById('btn7').innerHTML;
    btn8 = document.getElementById('btn8').innerHTML;
    btn9 = document.getElementById('btn9').innerHTML;
    if (btn1 == 'x' && btn2 == "x" && btn3 == 'x') {
        document.getElementById('show').innerHTML = "Player X won"
        alert("Player X won");

        // window.alert("Wanna reset" ? yes == true : no == false)
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn9').disabled = true;
    } else if (btn1 == 'x' && btn4 == "x" && btn7 == 'x') {
        document.getElementById('show').innerHTML = "Player X won"
        alert("Player X won");
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn9').disabled = true;
    } else if (btn1 == 'x' && btn5 == "x" && btn9 == 'x') {
        document.getElementById('show').innerHTML = "Player X won"
        alert("Player X won");
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn7').disabled = true;
    } else if (btn2 == 'x' && btn5 == "x" && btn8 == 'x') {
        document.getElementById('show').innerHTML = "Player X won"
        alert("Player X won");
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn9').disabled = true;
        document.getElementById('btn7').disabled = true;
    } else if (btn4 == 'x' && btn5 == "x" && btn6 == 'x') {
        document.getElementById('show').innerHTML = "Player X won"
        alert("Player X won");
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn9').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn7').disabled = true;
    } else if (btn3 == 'x' && btn5 == "x" && btn7 == 'x') {
        document.getElementById('show').innerHTML = "Player X won"
        alert("Player X won");
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn9').disabled = true;
    } else if (btn7 == 'x' && btn8 == "x" && btn9 == 'x') {
        document.getElementById('show').innerHTML = "Player X won"
        alert("Player X won");
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn3').disabled = true;
    }
    if (btn1 == '0' && btn2 == "0" && btn3 == '0') {
        document.getElementById('show').innerHTML = "Player 0 won"
        alert("Player 0 won");
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn9').disabled = true;
    } else if (btn1 == '0' && btn4 == "0" && btn7 == '0') {
        document.getElementById('show').innerHTML = "Player 0 won"
        alert("Player 0 won");
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn9').disabled = true;
    } else if (btn1 == '0' && btn5 == "0" && btn9 == '0') {
        document.getElementById('show').innerHTML = "Player 0 won"
        alert("Player 0 won");
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn7').disabled = true;
    } else if (btn2 == '0' && btn5 == "0" && btn8 == '0') {
        document.getElementById('show').innerHTML = "Player 0 won"
        alert("Player 0 won");
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn9').disabled = true;
        document.getElementById('btn7').disabled = true;
    } else if (btn3 == '0' && btn6 == "0" && btn9 == '0') {
        document.getElementById('show').innerHTML = "Player 0 won"
        alert("Player 0 won");
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn7').disabled = true;
    } else if (btn3 == 'x' && btn6 == "x" && btn9 == 'x') {
        document.getElementById('show').innerHTML = "Player X won"
        alert("Player X won");
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn9').disabled = true;
    } else if (btn4 == '0' && btn5 == "0" && btn6 == '0') {
        document.getElementById('show').innerHTML = "Player 0 won"
        alert("Player 0 won");
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn9').disabled = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn7').disabled = true;
    } else if (btn3 == '0' && btn5 == "0" && btn7 == '0') {
        document.getElementById('show').innerHTML = "Player 0 won"
        alert("Player 0 won");
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn9').disabled = true;
    } else if (btn7 == '0' && btn8 == "0" && btn9 == '0') {
        document.getElementById('show').innerHTML = "Player 0 won"
        alert("Player 0 won");
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn3').disabled = true;
    } else if ((btn1 == '0' || btn1 == 'x') && (btn2 == '0' || btn2 == 'x') && (btn3 == '0' || btn3 == 'x') && (btn4 == '0' || btn4 == 'x') && (btn5 == '0' || btn5 == 'x') && (btn6 == '0' || btn6 == 'x') && (btn7 == '0' || btn7 == 'x') && (btn8 == '0' || btn8 == 'x') && (btn9 == '0' || btn9 == 'x')) {
        let str1 = "Player X won";
        let str2 = document.getElementById('show').innerHTML;
        let str3 = "Player 0 won";
        // console.log(str3);
        if ((str1 == str2) || (str2 == str3)) {
            console.log("Hey");
        } else {

            document.getElementById('show').innerHTML = "Match Tie"
            alert("Match Tie");
            conf = confirm("Wanna reset?");
            if (conf) {

                reset();
            }

        }
        // document.getElementById('show').innerHTML = "Match Tie"
        // alert("Match Tie");





    } else {
        let str1 = "Player X won";
        let str3 = "Player 0 won";
        let str2 = document.getElementById('show').innerHTML;




        if (flag == 1) {
            if (str3 == str2) {
                document.getElementById('show').innerHTML = "Player 0 won"

            } else {

                document.getElementById('show').innerHTML = "Player X turn";
            }




        } else if (flag == 0) {
            if (str2 == str1) {
                document.getElementById('show').innerHTML = "Player X won"

            } else {

                document.getElementById('show').innerHTML = "Player 0 turn";
            }



        }
        let str5 = document.getElementById('show').innerHTML;
        console.log(str2)
        console.log(str5)
    }

}





flag = 1;

function fill1() {
    if (flag == 1) {
        document.getElementById('btn1').innerHTML = "x";
        document.getElementById('btn1').disabled = true;
        flag = 0;
    } else {
        document.getElementById('btn1').innerHTML = "0";
        document.getElementById('btn1').disabled = true;
        flag = 1;
    }
}

function fill2() {
    if (flag == 1) {
        document.getElementById('btn2').innerHTML = "x";
        document.getElementById('btn2').disabled = true;
        flag = 0;
    } else {
        document.getElementById('btn2').innerHTML = "0";
        document.getElementById('btn2').disabled = true;
        flag = 1;
    }
}

function fill3() {
    if (flag == 1) {
        document.getElementById('btn3').innerHTML = "x";
        document.getElementById('btn3').disabled = true;
        flag = 0;
    } else {
        document.getElementById('btn3').innerHTML = "0";
        document.getElementById('btn3').disabled = true;
        flag = 1;
    }
}

function fill4() {
    if (flag == 1) {
        document.getElementById('btn4').innerHTML = "x";
        document.getElementById('btn4').disabled = true;
        flag = 0;
    } else {
        document.getElementById('btn4').innerHTML = "0";
        document.getElementById('btn4').disabled = true;
        flag = 1;
    }
}

function fill5() {
    if (flag == 1) {
        document.getElementById('btn5').innerHTML = "x";
        document.getElementById('btn5').disabled = true;
        flag = 0;
    } else {
        document.getElementById('btn5').innerHTML = "0";
        document.getElementById('btn5').disabled = true;
        flag = 1;
    }
}

function fill6() {
    if (flag == 1) {
        document.getElementById('btn6').innerHTML = "x";
        document.getElementById('btn6').disabled = true;
        flag = 0;
    } else {
        document.getElementById('btn6').innerHTML = "0";
        document.getElementById('btn6').disabled = true;
        flag = 1;
    }
}

function fill8() {
    if (flag == 1) {
        document.getElementById('btn8').innerHTML = "x";
        document.getElementById('btn8').disabled = true;
        flag = 0;
    } else {
        document.getElementById('btn8').innerHTML = "0";
        document.getElementById('btn8').disabled = true;
        flag = 1;
    }
}

function fill7() {
    if (flag == 1) {
        document.getElementById('btn7').innerHTML = "x";
        document.getElementById('btn7').disabled = true;
        flag = 0;
    } else {
        document.getElementById('btn7').innerHTML = "0";
        document.getElementById('btn7').disabled = true;
        flag = 1;
    }
}

function fill9() {
    if (flag == 1) {
        document.getElementById('btn9').innerHTML = "x";
        document.getElementById('btn9').disabled = true;
        flag = 0;
    } else {
        document.getElementById('btn9').innerHTML = "0";
        document.getElementById('btn9').disabled = true;
        flag = 1;
    }
}




function reset() {
    location.reload();
    document.getElementById('btn1').innerHTML = "";
    document.getElementById('btn2').innerHTML = "";
    document.getElementById('btn3').innerHTML = "";
    document.getElementById('btn4').innerHTML = "";
    document.getElementById('btn5').innerHTML = "";
    document.getElementById('btn6').innerHTML = "";
    document.getElementById('btn7').innerHTML = "";
    document.getElementById('btn8').innerHTML = "";
    document.getElementById('btn9').innerHTML = "";

}