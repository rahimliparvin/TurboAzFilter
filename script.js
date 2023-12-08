"use strict";


const marka = document.getElementById("marka");
const model = document.getElementById("model");
const buttons = document.querySelectorAll(".buttons button");
const city = document.getElementById("city");
const valut = document.getElementById("valyuta");
const cred = document.getElementById("cred");
const rent = document.getElementById("rent");
const banType = document.getElementById("banType");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const minYear = document.getElementById("minYear");
const maxYear = document.getElementById("maxYear");
const allCarsRadioValue = document.getElementById("allCarsRadio");
const novelCarsRadioValue = document.getElementById("novelCarsRadio");
const exCarsRadioValue = document.getElementById("exCarsRadio");





let saleCars =
    [
        {
            Marka: "Bmw",
            Model: "M3",
            Novel: true,
            City: "Baki",
            Credit: true,
            Barter: false,
            Ban: "Pickup",
            Year: 2023,
            Valut: "AZN",
            Price: 20500
        },
        {
            Marka: "Bmw",
            Model: "M3",
            Novel: false,
            City: "Baki",
            Credit: false,
            Barter: false,
            Ban: "Pickup",
            Year: 2013,
            Valut: "USD",
            Price: 10000

        },
        {
            Marka: "Mersedes",
            Model: "GLK",
            Novel: false,
            City: "Sumqayit",
            Credit: false,
            Barter: true,
            Ban: "Jeep",
            Year: 2019,
            Valut: "EUR",
            Price: 30500

        },
        {
            Marka: "Mersedes",
            Model: "GLK",
            Novel: false,
            City: "Gence",
            Credit: false,
            Barter: true,
            Ban: "Jeep",
            Year: 2019,
            Valut: "EUR",
            Price: 9600
        },
        {
            Marka: "Mersedes",
            Model: "GLK",
            Novel: false,
            City: "Sumqayit",
            Credit: false,
            Barter: true,
            Ban: "Jeep",
            Year: 2019,
            Valut: "EUR",
            Price: 45500
        },
        {
            Marka: "Audi",
            Model: "Q7",
            Novel: true,
            City: "Gence",
            Credit: true,
            Barter: false,
            Ban: "Sedan",
            Year: 2019,
            Valut: "EUR",
            Price: 100000
        },

        {
            Marka: "Audi",
            Model: "Q7",
            Novel: true,
            City: "Gence",
            Credit: true,
            Barter: false,
            Ban: "Sedan",
            Year: 2019,
            Valut: "EUR",
            Price: 100000
        },
        
        {
            Marka: "Fiat",
            Model: "Doblo",
            Novel: false,
            City: "Zaqatala",
            Credit: false,
            Barter: false,
            Ban: "Van",
            Year: 2016,
            Valut: "AZN",
            Price: 120000
        }

    ]
let cities = ["Agcabedi", "Baki", "Gence", "Salyan", "Sumqayit", "Zaqatala", "Xizi"];
let cars = [
    { Marka: "BMW", Model: ["M3", "M4", "M5"] },
    { Marka: "Mersedes", Model: ["GLK", "BRABUS", "AMG"] },
    { Marka: "Audi", Model: ["A8", "Q7", "RS7"] },
    { Marka: "Fiat", Model: ["Doblo", "AF", "AF1"] },
    { Marka: "Ferrari", Model: ["fER1", "FER2", "FER3"] }
]
let bans = ["Van", "Pickup", "Jeep", "Sedan"];
let valutes = ["AZN", "USD", "EUR"];


function getElan() {

    saleCars.forEach(saleCar => {
        if (saleCar.Marka.toUpperCase() == marka.value.toUpperCase()) {
            if (saleCar.Model.toUpperCase() == model.value.toUpperCase()) {
                if (novelCarsRadioValue.checked && saleCar.Novel == true) {
                    if (city.value.toUpperCase() == saleCar.City.toUpperCase()) {
                        if (cred.checked && saleCar.Credit == true) {
                            if (rent.checked && saleCar.Barter == true) {
                                if (banType.value == saleCar.Ban) {
                                    if (minYear.value <= saleCar.Year && maxYear.value >= saleCar.Year) {
                                        if (valut.value.toUpperCase() == saleCar.Valut.toUpperCase()) {
                                            if (+minPrice.value == 0 && +maxPrice.value == 0) {
                                                console.log(saleCar);
                                            }
                                            else if (+minPrice.value > 0 && +maxPrice.value > 0) {
                                                if (+minPrice.value <= saleCar.Price && +maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else if (+maxPrice.value > 0) {
                                                if (+maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else {
                                                if (+minPrice.value <= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (rent.checked == false && saleCar.Barter == false) {
                                if (banType.value == saleCar.Ban) {
                                    if (minYear.value <= saleCar.Year && maxYear.value >= saleCar.Year) {
                                        if (valut.value.toUpperCase() == saleCar.Valut.toUpperCase()) {
                                            if (+minPrice.value == 0 && +maxPrice.value == 0) {
                                                console.log(saleCar);
                                            }
                                            else if (+minPrice.value > 0 && +maxPrice.value > 0) {
                                                if (+minPrice.value <= saleCar.Price && +maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else if (+maxPrice.value > 0) {
                                                if (+maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else {
                                                if (+minPrice.value <= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else if (cred.checked == false && saleCar.Credit == false) {
                            if (rent.checked && saleCar.Barter == true) {
                                if (banType.value == saleCar.Ban) {
                                    if (minYear.value <= saleCar.Year && maxYear.value >= saleCar.Year) {
                                        if (valut.value.toUpperCase() == saleCar.Valut.toUpperCase()) {
                                            if (+minPrice.value == 0 && +maxPrice.value == 0) {
                                                console.log(saleCar);
                                            }
                                            else if (+minPrice.value > 0 && +maxPrice.value > 0) {
                                                if (+minPrice.value <= saleCar.Price && +maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else if (+maxPrice.value > 0) {
                                                if (+maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else {
                                                if (+minPrice.value <= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (rent.checked == false && saleCar.Barter == false) {
                                if (banType.value == saleCar.Ban) {
                                    if (minYear.value <= saleCar.Year && maxYear.value >= saleCar.Year) {
                                        if (valut.value.toUpperCase() == saleCar.Valut.toUpperCase()) {
                                            if (+minPrice.value == 0 && +maxPrice.value == 0) {
                                                console.log(saleCar);
                                            }
                                            else if (+minPrice.value > 0 && +maxPrice.value > 0) {
                                                if (+minPrice.value <= saleCar.Price && +maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else if (+maxPrice.value > 0) {
                                                if (+maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else {
                                                if (+minPrice.value <= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else if (exCarsRadioValue.checked && saleCar.Novel == false) {
                    if (city.value.toUpperCase() == saleCar.City.toUpperCase()) {
                        if (cred.checked && saleCar.Credit == true) {
                            if (rent.checked && saleCar.Barter == true) {
                                if (banType.value == saleCar.Ban) {
                                    if (minYear.value <= saleCar.Year && maxYear.value >= saleCar.Year) {
                                        if (valut.value.toUpperCase() == saleCar.Valut.toUpperCase()) {
                                            if (+minPrice.value == 0 && +maxPrice.value == 0) {
                                                console.log(saleCar);
                                            }
                                            else if (+minPrice.value > 0 && +maxPrice.value > 0) {
                                                if (+minPrice.value <= saleCar.Price && +maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else if (+maxPrice.value > 0) {
                                                if (+maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else {
                                                if (+minPrice.value <= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (rent.checked == false && saleCar.Barter == false) {
                                if (banType.value == saleCar.Ban) {
                                    if (minYear.value <= saleCar.Year && maxYear.value >= saleCar.Year) {
                                        if (valut.value.toUpperCase() == saleCar.Valut.toUpperCase()) {
                                            if (+minPrice.value == 0 && +maxPrice.value == 0) {
                                                console.log(saleCar);
                                            }
                                            else if (+minPrice.value > 0 && +maxPrice.value > 0) {
                                                if (+minPrice.value <= saleCar.Price && +maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else if (+maxPrice.value > 0) {
                                                if (+maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else {
                                                if (+minPrice.value <= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else if (cred.checked == false && saleCar.Credit == false) {
                            if (rent.checked && saleCar.Barter == true) {
                                if (banType.value == saleCar.Ban) {
                                    if (minYear.value <= saleCar.Year && maxYear.value >= saleCar.Year) {
                                        if (valut.value.toUpperCase() == saleCar.Valut.toUpperCase()) {
                                            if (+minPrice.value == 0 && +maxPrice.value == 0) {
                                                console.log(saleCar);
                                            }
                                            else if (+minPrice.value > 0 && +maxPrice.value > 0) {
                                                if (+minPrice.value <= saleCar.Price && +maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else if (+maxPrice.value > 0) {
                                                if (+maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else {
                                                if (+minPrice.value <= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (rent.checked == false && saleCar.Barter == false) {
                                if (banType.value == saleCar.Ban) {
                                    if (minYear.value <= saleCar.Year && maxYear.value >= saleCar.Year) {
                                        if (valut.value.toUpperCase() == saleCar.Valut.toUpperCase()) {
                                            if (+minPrice.value == 0 && +maxPrice.value == 0) {
                                                console.log(saleCar);
                                            }
                                            else if (+minPrice.value > 0 && +maxPrice.value > 0) {
                                                if (+minPrice.value <= saleCar.Price && +maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else if (+maxPrice.value > 0) {
                                                if (+maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else {
                                                if (+minPrice.value <= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else if (allCarsRadioValue.checked) {
                    if (city.value.toUpperCase() == saleCar.City.toUpperCase()) {
                        if (cred.checked && saleCar.Credit == true) {
                            if (rent.checked && saleCar.Barter == true) {
                                if (banType.value == saleCar.Ban) {
                                    if (minYear.value <= saleCar.Year && maxYear.value >= saleCar.Year) {
                                        if (valut.value.toUpperCase() == saleCar.Valut.toUpperCase()) {
                                            if (+minPrice.value == 0 && +maxPrice.value == 0) {
                                                console.log(saleCar);
                                            }
                                            else if (+minPrice.value > 0 && +maxPrice.value > 0) {
                                                if (+minPrice.value <= saleCar.Price && +maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else if (+maxPrice.value > 0) {
                                                if (+maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else {
                                                if (+minPrice.value <= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (rent.checked == false && saleCar.Barter == false) {
                                if (banType.value == saleCar.Ban) {
                                    if (minYear.value <= saleCar.Year && maxYear.value >= saleCar.Year) {
                                        if (valut.value.toUpperCase() == saleCar.Valut.toUpperCase()) {
                                            if (+minPrice.value == 0 && +maxPrice.value == 0) {
                                                console.log(saleCar);
                                            }
                                            else if (+minPrice.value > 0 && +maxPrice.value > 0) {
                                                if (+minPrice.value <= saleCar.Price && +maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else if (+maxPrice.value > 0) {
                                                if (+maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else {
                                                if (+minPrice.value <= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else if (cred.checked == false && saleCar.Credit == false) {
                            if (rent.checked && saleCar.Barter == true) {
                                if (banType.value == saleCar.Ban) {
                                    if (minYear.value <= saleCar.Year && maxYear.value >= saleCar.Year) {
                                        if (valut.value.toUpperCase() == saleCar.Valut.toUpperCase()) {
                                            if (+minPrice.value == 0 && +maxPrice.value == 0) {
                                                console.log(saleCar);
                                            }
                                            else if (+minPrice.value > 0 && +maxPrice.value > 0) {
                                                if (+minPrice.value <= saleCar.Price && +maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else if (+maxPrice.value > 0) {
                                                if (+maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else {
                                                if (+minPrice.value <= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (rent.checked == false && saleCar.Barter == false) {
                                if (banType.value == saleCar.Ban) {
                                    if (minYear.value <= saleCar.Year && maxYear.value >= saleCar.Year) {
                                        if (valut.value.toUpperCase() == saleCar.Valut.toUpperCase()) {
                                            if (+minPrice.value == 0 && +maxPrice.value == 0) {
                                                console.log(saleCar);
                                            }
                                            else if (+minPrice.value > 0 && +maxPrice.value > 0) {
                                                if (+minPrice.value <= saleCar.Price && +maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else if (+maxPrice.value > 0) {
                                                if (+maxPrice.value >= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                            else {
                                                if (+minPrice.value <= saleCar.Price) {
                                                    console.log(saleCar);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
}


getValuate();
function getValuate() {
    for (let i = 0; i < valutes.length; i++) {
        valut.innerHTML += `<option>${valutes[i]}</option>`
    }
}

oldYear();
function oldYear() {
    let year = new Date().getFullYear()
    for (let index = year; index >= year - 100; index--) {
        minYear.innerHTML += `<option>${index}</option>`
        maxYear.innerHTML += `<option>${index}</option>`
    }
}

changeBan();
function changeBan() {
    for (let i = 0; i < bans.length; i++) {
        banType.innerHTML += `<option>${bans[i]}</option>`
    }
}

changeCity();
function changeCity() {
    for (let i = 0; i < cities.length; i++) {
        city.innerHTML += `<option>${cities[i]}</option>`
    }
}

buttons.forEach(button => {
    button.addEventListener("click", function () {
        for (const btn of buttons) {
            btn.classList.remove("activeBtn");
        }
        this.classList.add("activeBtn")
    })
});

getMarka();
function getMarka() {
    for (let i = 0; i < cars.length; i++) {
        marka.innerHTML += `<option value="${cars[i].Marka}">${cars[i].Marka}</option>`;
    }
}

function getAllModel() {
    model.innerHTML = "";
    cars.forEach(car => {
        if (car.Marka == marka.value) {
            for (let i = 0; i < car.Model.length; i++) {
                model.innerHTML += `<option value="${car.Model[i]}">${car.Model[i]}</option>`;
            }
        }
    });
}



    // for (const car of saleCars) {
    //     console.log(`Marka ${car.Marka} / Model ${car.Model} / Novel ${car.Novel} / City ${car.City} / Credit ${car.Credit} / Barter ${car.Barter} / Ban ${car.Ban} / Year ${car.Year}`);
    // }
