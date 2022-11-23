let rand = () => Math.ceil(9 * Math.random()),
    bot = () => {
        let a = rand();
        0 === flag && (console.log(a), !0 == document.getElementById(`btn${a}`).disabled || !0 == document.getElementById(`btn${a}`).disabled ? (console.log("hey"), console.log(a), bot()) : (document.getElementById(`btn${a}`).innerHTML = "0", document.getElementById(`btn${a}`).disabled = !0, result(), flag = 1))
    };

function result() {
    var b, f, c, g, a, h, d, i, e;
    if (b = document.getElementById("btn1").innerHTML, f = document.getElementById("btn2").innerHTML, c = document.getElementById("btn3").innerHTML, g = document.getElementById("btn4").innerHTML, a = document.getElementById("btn5").innerHTML, h = document.getElementById("btn6").innerHTML, d = document.getElementById("btn7").innerHTML, i = document.getElementById("btn8").innerHTML, e = document.getElementById("btn9").innerHTML, "x" == b && "x" == f && "x" == c ? (document.getElementById("show").innerHTML = "Player X won", alert("Player X won"), document.getElementById("btn4").disabled = !0, document.getElementById("btn5").disabled = !0, document.getElementById("btn6").disabled = !0, document.getElementById("btn7").disabled = !0, document.getElementById("btn8").disabled = !0, document.getElementById("btn9").disabled = !0) : "x" == b && "x" == g && "x" == d ? (document.getElementById("show").innerHTML = "Player X won", alert("Player X won"), document.getElementById("btn2").disabled = !0, document.getElementById("btn5").disabled = !0, document.getElementById("btn6").disabled = !0, document.getElementById("btn3").disabled = !0, document.getElementById("btn8").disabled = !0, document.getElementById("btn9").disabled = !0) : "x" == b && "x" == a && "x" == e ? (document.getElementById("show").innerHTML = "Player X won", alert("Player X won"), document.getElementById("btn2").disabled = !0, document.getElementById("btn4").disabled = !0, document.getElementById("btn6").disabled = !0, document.getElementById("btn3").disabled = !0, document.getElementById("btn8").disabled = !0, document.getElementById("btn7").disabled = !0) : "x" == f && "x" == a && "x" == i ? (document.getElementById("show").innerHTML = "Player X won", alert("Player X won"), document.getElementById("btn1").disabled = !0, document.getElementById("btn4").disabled = !0, document.getElementById("btn6").disabled = !0, document.getElementById("btn3").disabled = !0, document.getElementById("btn9").disabled = !0, document.getElementById("btn7").disabled = !0) : "x" == g && "x" == a && "x" == h ? (document.getElementById("show").innerHTML = "Player X won", alert("Player X won"), document.getElementById("btn2").disabled = !0, document.getElementById("btn1").disabled = !0, document.getElementById("btn9").disabled = !0, document.getElementById("btn3").disabled = !0, document.getElementById("btn8").disabled = !0, document.getElementById("btn7").disabled = !0) : "x" == c && "x" == a && "x" == d ? (document.getElementById("show").innerHTML = "Player X won", alert("Player X won"), document.getElementById("btn2").disabled = !0, document.getElementById("btn4").disabled = !0, document.getElementById("btn6").disabled = !0, document.getElementById("btn1").disabled = !0, document.getElementById("btn8").disabled = !0, document.getElementById("btn9").disabled = !0) : "x" == d && "x" == i && "x" == e && (document.getElementById("show").innerHTML = "Player X won", alert("Player X won"), document.getElementById("btn2").disabled = !0, document.getElementById("btn4").disabled = !0, document.getElementById("btn6").disabled = !0, document.getElementById("btn1").disabled = !0, document.getElementById("btn5").disabled = !0, document.getElementById("btn3").disabled = !0), "0" == b && "0" == f && "0" == c) document.getElementById("show").innerHTML = "Player 0 won", alert("Player 0 won"), document.getElementById("btn4").disabled = !0, document.getElementById("btn5").disabled = !0, document.getElementById("btn6").disabled = !0, document.getElementById("btn7").disabled = !0, document.getElementById("btn8").disabled = !0, document.getElementById("btn9").disabled = !0;
    else if ("0" == b && "0" == g && "0" == d) document.getElementById("show").innerHTML = "Player 0 won", alert("Player 0 won"), document.getElementById("btn2").disabled = !0, document.getElementById("btn5").disabled = !0, document.getElementById("btn6").disabled = !0, document.getElementById("btn3").disabled = !0, document.getElementById("btn8").disabled = !0, document.getElementById("btn9").disabled = !0;
    else if ("0" == b && "0" == a && "0" == e) document.getElementById("show").innerHTML = "Player 0 won", alert("Player 0 won"), document.getElementById("btn2").disabled = !0, document.getElementById("btn4").disabled = !0, document.getElementById("btn6").disabled = !0, document.getElementById("btn3").disabled = !0, document.getElementById("btn8").disabled = !0, document.getElementById("btn7").disabled = !0;
    else if ("0" == f && "0" == a && "0" == i) document.getElementById("show").innerHTML = "Player 0 won", alert("Player 0 won"), document.getElementById("btn1").disabled = !0, document.getElementById("btn4").disabled = !0, document.getElementById("btn6").disabled = !0, document.getElementById("btn3").disabled = !0, document.getElementById("btn9").disabled = !0, document.getElementById("btn7").disabled = !0;
    else if ("0" == c && "0" == h && "0" == e) document.getElementById("show").innerHTML = "Player 0 won", alert("Player 0 won"), document.getElementById("btn2").disabled = !0, document.getElementById("btn4").disabled = !0, document.getElementById("btn5").disabled = !0, document.getElementById("btn1").disabled = !0, document.getElementById("btn8").disabled = !0, document.getElementById("btn7").disabled = !0;
    else if ("x" == c && "x" == h && "x" == e) document.getElementById("show").innerHTML = "Player X won", alert("Player X won"), document.getElementById("btn2").disabled = !0, document.getElementById("btn4").disabled = !0, document.getElementById("btn6").disabled = !0, document.getElementById("btn1").disabled = !0, document.getElementById("btn8").disabled = !0, document.getElementById("btn9").disabled = !0;
    else if ("0" == g && "0" == a && "0" == h) document.getElementById("show").innerHTML = "Player 0 won", alert("Player 0 won"), document.getElementById("btn2").disabled = !0, document.getElementById("btn1").disabled = !0, document.getElementById("btn9").disabled = !0, document.getElementById("btn3").disabled = !0, document.getElementById("btn8").disabled = !0, document.getElementById("btn7").disabled = !0;
    else if ("0" == c && "0" == a && "0" == d) document.getElementById("show").innerHTML = "Player 0 won", alert("Player 0 won"), document.getElementById("btn2").disabled = !0, document.getElementById("btn4").disabled = !0, document.getElementById("btn6").disabled = !0, document.getElementById("btn1").disabled = !0, document.getElementById("btn8").disabled = !0, document.getElementById("btn9").disabled = !0;
    else if ("0" == d && "0" == i && "0" == e) document.getElementById("show").innerHTML = "Player 0 won", alert("Player 0 won"), document.getElementById("btn2").disabled = !0, document.getElementById("btn4").disabled = !0, document.getElementById("btn6").disabled = !0, document.getElementById("btn1").disabled = !0, document.getElementById("btn5").disabled = !0, document.getElementById("btn3").disabled = !0;
    else if (("0" == b || "x" == b) && ("0" == f || "x" == f) && ("0" == c || "x" == c) && ("0" == g || "x" == g) && ("0" == a || "x" == a) && ("0" == h || "x" == h) && ("0" == d || "x" == d) && ("0" == i || "x" == i) && ("0" == e || "x" == e)) {
        let l = "Player X won",
            k = document.getElementById("show").innerHTML,
            m = "Player 0 won";
        l == k || k == m ? console.log("Hey") : (document.getElementById("show").innerHTML = "Match Tie", alert("Match Tie"), confirm("Wanna reset?") && reset())
    } else {
        let n = "Player X won",
            o = "Player 0 won",
            j = document.getElementById("show").innerHTML;
        1 == flag ? o == j ? document.getElementById("show").innerHTML = "Player 0 won" : document.getElementById("show").innerHTML = "Player X turn" : 0 == flag && (j == n ? document.getElementById("show").innerHTML = "Player X won" : document.getElementById("show").innerHTML = "Player 0 turn");
        let p = document.getElementById("show").innerHTML;
        console.log(j), console.log(p)
    }
}

function fill1() {
    if (1 == flag) {
        document.getElementById("btn1").innerHTML = "x", document.getElementById("btn1").disabled = !0, flag = 0, result();
        let c = "Player X won",
            a = document.getElementById("show").innerHTML,
            d = "Player 0 won",
            e = "Match Tie";
        c == a || a == d || e == a ? console.log("Hey") : bot()
    } else {
        document.getElementById("btn1").innerHTML = "0", document.getElementById("btn1").disabled = !0, flag = 1, result();
        let f = "Player X won",
            b = document.getElementById("show").innerHTML,
            g = "Player 0 won",
            h = "Match Tie";
        f == b || b == g || h == b ? console.log("Hey") : bot()
    }
}

function fill2() {
    if (1 == flag) {
        document.getElementById("btn2").innerHTML = "x", document.getElementById("btn2").disabled = !0, flag = 0, result();
        let c = "Player X won",
            a = document.getElementById("show").innerHTML,
            d = "Player 0 won",
            e = "Match Tie";
        c == a || a == d || e == a ? console.log("Hey") : bot()
    } else {
        document.getElementById("btn2").innerHTML = "0", document.getElementById("btn2").disabled = !0, flag = 1, result();
        let f = "Player X won",
            b = document.getElementById("show").innerHTML,
            g = "Player 0 won",
            h = "Match Tie";
        f == b || b == g || h == b ? console.log("Hey") : bot()
    }
}

function fill3() {
    if (1 == flag) {
        document.getElementById("btn3").innerHTML = "x", document.getElementById("btn3").disabled = !0, flag = 0, result();
        let c = "Player X won",
            a = document.getElementById("show").innerHTML,
            d = "Player 0 won",
            e = "Match Tie";
        c == a || a == d || e == a ? console.log("Hey") : bot()
    } else {
        document.getElementById("btn3").innerHTML = "0", document.getElementById("btn3").disabled = !0, flag = 1, result();
        let f = "Player X won",
            b = document.getElementById("show").innerHTML,
            g = "Player 0 won",
            h = "Match Tie";
        f == b || b == g || h == b ? console.log("Hey") : bot()
    }
}

function fill4() {
    if (1 == flag) {
        document.getElementById("btn4").innerHTML = "x", document.getElementById("btn4").disabled = !0, flag = 0, result();
        let c = "Player X won",
            a = document.getElementById("show").innerHTML,
            d = "Player 0 won",
            e = "Match Tie";
        c == a || a == d || e == a ? console.log("Hey") : bot()
    } else {
        document.getElementById("btn4").innerHTML = "0", document.getElementById("btn4").disabled = !0, flag = 1, result();
        let f = "Player X won",
            b = document.getElementById("show").innerHTML,
            g = "Player 0 won",
            h = "Match Tie";
        f == b || b == g || h == b ? console.log("Hey") : bot()
    }
}

function fill5() {
    if (1 == flag) {
        document.getElementById("btn5").innerHTML = "x", document.getElementById("btn5").disabled = !0, flag = 0, result();
        let c = "Player X won",
            a = document.getElementById("show").innerHTML,
            d = "Player 0 won",
            e = "Match Tie";
        c == a || a == d || e == a ? console.log("Hey") : bot()
    } else {
        document.getElementById("btn5").innerHTML = "0", document.getElementById("btn5").disabled = !0, flag = 1, result();
        let f = "Player X won",
            b = document.getElementById("show").innerHTML,
            g = "Player 0 won",
            h = "Match Tie";
        f == b || b == g || h == b ? console.log("Hey") : bot()
    }
}

function fill6() {
    if (1 == flag) {
        document.getElementById("btn6").innerHTML = "x", document.getElementById("btn6").disabled = !0, flag = 0, result();
        let c = "Player X won",
            a = document.getElementById("show").innerHTML,
            d = "Player 0 won",
            e = "Match Tie";
        c == a || a == d || e == a ? console.log("Hey") : bot()
    } else {
        document.getElementById("btn6").innerHTML = "0", document.getElementById("btn6").disabled = !0, flag = 1, result();
        let f = "Player X won",
            b = document.getElementById("show").innerHTML,
            g = "Player 0 won",
            h = "Match Tie";
        f == b || b == g || h == b ? console.log("Hey") : bot()
    }
}

function fill8() {
    if (1 == flag) {
        document.getElementById("btn8").innerHTML = "x", document.getElementById("btn8").disabled = !0, flag = 0, result();
        let c = "Player X won",
            a = document.getElementById("show").innerHTML,
            d = "Player 0 won",
            e = "Match Tie";
        c == a || a == d || e == a ? console.log("Hey") : bot()
    } else {
        document.getElementById("btn8").innerHTML = "0", document.getElementById("btn8").disabled = !0, flag = 1, result();
        let f = "Player X won",
            b = document.getElementById("show").innerHTML,
            g = "Player 0 won",
            h = "Match Tie";
        f == b || b == g || h == b ? console.log("Hey") : bot()
    }
}

function fill7() {
    if (1 == flag) {
        document.getElementById("btn7").innerHTML = "x", document.getElementById("btn7").disabled = !0, flag = 0, result();
        let c = "Player X won",
            a = document.getElementById("show").innerHTML,
            d = "Player 0 won",
            e = "Match Tie";
        c == a || a == d || e == a ? console.log("Hey") : bot()
    } else {
        document.getElementById("btn7").innerHTML = "0", document.getElementById("btn7").disabled = !0, flag = 1, result();
        let f = "Player X won",
            b = document.getElementById("show").innerHTML,
            g = "Player 0 won",
            h = "Match Tie";
        f == b || b == g || h == b ? console.log("Hey") : bot()
    }
}

function fill9() {
    if (1 == flag) {
        document.getElementById("btn9").innerHTML = "x", document.getElementById("btn9").disabled = !0, flag = 0, result();
        let c = "Player X won",
            a = document.getElementById("show").innerHTML,
            d = "Player 0 won",
            e = "Match Tie";
        c == a || a == d || e == a ? console.log("Hey") : bot()
    } else {
        document.getElementById("btn9").innerHTML = "0", document.getElementById("btn9").disabled = !0, flag = 1, result();
        let f = "Player X won",
            b = document.getElementById("show").innerHTML,
            g = "Player 0 won",
            h = "Match Tie";
        f == b || b == g || h == b ? console.log("Hey") : bot()
    }
}

function reset() { location.reload(), document.getElementById("btn1").innerHTML = "", document.getElementById("btn2").innerHTML = "", document.getElementById("btn3").innerHTML = "", document.getElementById("btn4").innerHTML = "", document.getElementById("btn5").innerHTML = "", document.getElementById("btn6").innerHTML = "", document.getElementById("btn7").innerHTML = "", document.getElementById("btn8").innerHTML = "", document.getElementById("btn9").innerHTML = "" }
flag = 1