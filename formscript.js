

document.addEventListener("DOMContentLoaded", function () {
    const savedSpot = localStorage.getItem("finalSpot");
    const spot = document.getElementById("inputPlace");
    const findSpot = document.getElementById("calculateSpot");

    const savedSize = localStorage.getItem("finalSize");
    const pax = document.getElementById("inputSize");
    const findPax = document.getElementById("calculatePax");

    spot.value = savedSpot;
    pax.value = savedSize;

    let x = savedSize;
    let y = x % 2 === 0 ? "s" : "";
    findPax.innerText = x + " guest" + y;
    findSpot.innerText = savedSpot;


    const price = document.getElementById("calculatePrice");
    let maxSize = 0;
    let basePrice = 0;

    if (findSpot.innerText === "Main Hall") {
        price.innerText = "$10";
        maxSize = 8;
        basePrice = 10;
    } else if (findSpot.innerText === "Alfresco Area") {
        price.innerText = "$15";
        maxSize = 6;
        basePrice = 15;
    } else {
        price.innerText = "$30";
        maxSize = 4;
        basePrice = 30;
    };

    const price1 = document.getElementById("calculatePrice1");
    let halfOflimit = maxSize / 2;

    if (Number(x) > halfOflimit) {
        price1.innerText = "+$5";
    } else {
        price1.innerText = "-";
    };


    document.getElementById("inputTimeslot").addEventListener("change", function (event) {
        const duration = event.target.options[event.target.selectedIndex];
        const findTime = document.getElementById("calculateTime");
        findTime.innerText = duration.innerText;


        const price2 = document.getElementById("calculatePrice2");

        if (findTime.innerText === "1pm - 3pm" || findTime.innerText === "8pm - 10pm") {
            let surchage1 = basePrice * 0.25;
            price2.innerText = "+$" + surchage1.toFixed(2);
        } else {
            price2.innerText = "-";
        }
    });


    const date = document.getElementById("inputDate");

    date.addEventListener("change", function () {
        const findDate = document.getElementById("calculateDay");
        const dateFormat = new Date(date.value);
        const dayOfweek = dateFormat.toLocaleDateString("en-SG", { weekday: "long" });
        findDate.innerText = dayOfweek;


        const price3 = document.getElementById("calculatePrice3");

        if (findDate.innerText === "Saturday" || findDate.innerText === "Sunday") {
            let surchage2 = basePrice * 0.5;
            price3.innerText = "+$" + surchage2.toFixed(2);
        } else {
            price3.innerText = "-";
        }
    });


    document.getElementById("calculator").addEventListener("click", function() {
        const p0 = getPriceFromText(document.getElementById("calculatePrice").innerText);
        const p1 = getPriceFromText(document.getElementById("calculatePrice1").innerText);
        const p2 = getPriceFromText(document.getElementById("calculatePrice2").innerText);
        const p3 = getPriceFromText(document.getElementById("calculatePrice3").innerText);

        function getPriceFromText(text) {
            if (text === "-") {
                return 0;
            } else {
                return Number(text.replace("$", "").replace("+", ""));
            }
        }

        const total = p0 + p1 + p2 + p3;
        document.getElementById("calculateTotal").innerText = "$" + total.toFixed(2);
    });
});