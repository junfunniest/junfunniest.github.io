

function reservation(spot, numberOfguests, display, colorNtext, trueTag, falseTag, maxGuests) {
    document.getElementById(numberOfguests).addEventListener('keydown', function (event) {
        const declaredDisplay = document.getElementById(display);
        const declaredchangeColorNText = document.getElementById(colorNtext);
        const declaredoriginalTag = document.getElementById(trueTag);
        const declarednewTag = document.getElementById(falseTag);

        if (event.key === "Enter") {
            const x = Number(document.getElementById(numberOfguests).value);
            const y = document.getElementById(spot).innerText;

            if (!Number.isInteger(x) || x <= 0) {
                declaredDisplay.style.display = "none";
                setTimeout(() => { alert("Oops! We need at least one guest to set the table — please enter a valid number."); }, 1);
            } else if (x > maxGuests) {
                declaredDisplay.style.display = "block";
                declaredchangeColorNText.style.color = "red";
                declaredchangeColorNText.innerText = "Oops! That’s a few too many for this area. Try picking another spot that fits your group better!";

                declaredoriginalTag.style.display = "none";
                declarednewTag.style.display = "block";
            } else {
                declaredDisplay.style.display = "block";
                declaredchangeColorNText.style.color = "green";
                declaredchangeColorNText.innerText = "Great! Your group size fits within our limit. Please proceed to the next step to provide your information and complete the payment.";
                declaredoriginalTag.style.display = "block";
                declarednewTag.style.display = "none";

                localStorage.setItem("finalSize", x);
                localStorage.setItem("finalSpot", y);
            }
        }
    })

    document.getElementById(falseTag).addEventListener('click', function (event) {
        event.target.style.display = "none";
        const declaredDisplay = document.getElementById(display);
        declaredDisplay.style.display = "none";
    })

    document.getElementById(trueTag).addEventListener('click', function (event) {
        event.target.style.display = "none";
        const declaredDisplay = document.getElementById(display);
        declaredDisplay.style.display = "none";
    })
}

reservation("spot1", "numberOfguests1", "display1", "colorNtext1", "trueTag1", "falseTag1", 8);
reservation("spot2", "numberOfguests2", "display2", "colorNtext2", "trueTag2", "falseTag2", 6);
reservation("spot3", "numberOfguests3", "display3", "colorNtext3", "trueTag3", "falseTag3", 4);