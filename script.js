

document.getElementById("numberOfguests").addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        const x = Number(document.getElementById('numberOfguests').value)

        if (!Number.isInteger(x) || x <= 0) {
            alert("Oops! We need at least one guest to set the table — please enter a valid number.")
        } else if (x > 8) {
            alert("Oops! That’s a few too many for this area. Try picking another spot that fits your group better!")
        } else {
            alert("Thanks for booking with us! See you soon at JapBite.")
        }
    }
})


document.getElementById("numberOfguests1").addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        const x = Number(document.getElementById('numberOfguests1').value)

        if (!Number.isInteger(x) || x <= 0) {
            alert("Oops! We need at least one guest to set the table — please enter a valid number.")
        } else if (x > 6) {
            alert("Oops! That’s a few too many for this area. Try picking another spot that fits your group better!")
        } else {
            alert("Thanks for booking with us! See you soon at JapBite.")
        }
    }
})


document.getElementById("numberOfguests2").addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        const x = Number(document.getElementById('numberOfguests2').value)

        if (!Number.isInteger(x) || x <= 0) {
            alert("Oops! We need at least one guest to set the table — please enter a valid number.")
        } else if (x > 4) {
            alert("Oops! That’s a few too many for this area. Try picking another spot that fits your group better!")
        } else {
            alert("Thanks for booking with us! See you soon at JapBite.")
        }
    }
})