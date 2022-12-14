// Meat - 400g per person (if the duration is more than 6 hours = 600gr)
// Beer - 1400ml per person (if the duration is more than 6 hours = 2100ml)
// Soda - 1000ml per person (if the duration is more than 6 hours = 1500ml)
// Children values are halfed (0,5)

let inputAdults = document.getElementById("adults");
let inputChildren = document.getElementById("children");
let inputDuration = document.getElementById("duration");
let result = document.getElementById("result");

function meatPerPerson(duration) {
    if (duration >= 6) {
        return 600;
    } else {
        return 400;
    }
}

function beerPerPerson(duration) {
    if (duration >= 6) {
        return 2100;
    } else {
        return 1400;
    }
}

function sodaPerPerson(duration) {
    if (duration >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

function calculate() {
    let adults = inputAdults.value;
    let children = inputChildren.value;
    let duration = inputDuration.value;

    let totalMeat = meatPerPerson(duration) * adults + ((meatPerPerson(duration) / 2) * children);
    let totalBeer = beerPerPerson(duration) * adults;
    let totalSoda = sodaPerPerson(duration) * adults + ((meatPerPerson(duration) / 2) * children);

    result.innerHTML = `<p>${totalMeat / 1000}Kg de Carne`;
    result.innerHTML += `<p>${totalBeer / 350} Latas 350ml de Cerveja`;
    result.innerHTML += `<p>${totalSoda / 2000} Garrafas 2L de Refrigerante`;
}