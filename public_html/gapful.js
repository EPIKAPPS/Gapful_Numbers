window.onload = function () {

    //USER INPUT

    var input = document.getElementById("input");
    var enter = document.getElementById("enter");
    var result = document.getElementById("result");
    enter.disabled = true;
    enter.onclick = function () {
        var full = input.value;//full value

        var splitted = full.split("");//split value
        var last = splitted.length - 1;

        var newValue = [splitted[0], splitted[last]];//new value
        var joined = newValue.join("");

        var res = full / joined;//operation

        var is = Number.isInteger(res);//testing

        if (is) {//print result
            result.innerHTML = full + " / " + joined + " = " + " Gapful number";
        } else {
            result.innerHTML = full + " / " + joined + " = " + " Not a gapful number";
        }
        input.value = "";
    };

    //PRINT RANGES

    var range = document.getElementById("range");
    var to = document.getElementById("to");
    range.onclick = function () {
        var myList = document.getElementById("myList");
        myList.innerHTML = "";
        if (to.value.length < 3 || to.value < 101) {
            to.value = 101;
        }
        for (var i = 100; i <= to.value; i++) {
            var full = i.toString();

            var splitted = full.split("");//split value
            var last = splitted.length - 1;

            var newValue = [splitted[0], splitted[last]];//new value
            var joined = newValue.join("");

            var res = i / joined;//operation

            var is = Number.isInteger(res);//testing
            if (is) {

                var text = document.createTextNode(i + ", ");
                myList.appendChild(text);
            }

        }

    };

    // RESTRICTIONS FOR INPUT
    var ch;
    input.oninput = function () {

        if (this.value.length > 7) {
            this.value = this.value.slice(0, 7);
        }
        if (this.value.length >= 3) {
            enter.disabled = false;
        } else {
            enter.disabled = true;
        }

        if (!(/[0-9]/.test(ch))) {
            this.value = this.value.slice();
        }
    };

    to.oninput = function () {

        if (this.value.length > 5) {
            this.value = this.value.slice(0, 5);
        }

        if (!(/[0-9]/.test(ch))) {
            this.value = this.value.slice();
        }
    };

};
    