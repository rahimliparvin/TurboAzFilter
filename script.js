"use strict";

const marka = document.getElementById("markaSelect");
const model = document.getElementById("aalaa");
const buttons = document.querySelectorAll(".buttons button");
const city = document.getElementById("citiesSelect");
const valut = document.getElementById("valyuta");
const cred = document.getElementById("kredRadio");
const rent = document.getElementById("bartRadio");
const banType = document.getElementById("banTypes");
const minPrice = document.getElementById("minPriceInput");
const maxPrice = document.getElementById("maxPriceInput");
const minYear = document.getElementById("minYearSelect");
const maxYear = document.getElementById("maxYearSelect");
const allCarsRadioValue = document.getElementById("AllNovelInput");
const novelCarsRadioValue = document.getElementById("NewNovelInput");
const exCarsRadioValue = document.getElementById("OldNovelInput");
const minPriceInput = document.getElementById("minPriceInput");
const minPriceLabel = document.getElementById("minPriceLabel");
const maxPriceInput = document.getElementById("maxPriceInput");
const maxPriceLabel = document.getElementById("maxPriceLabel");
const kredLabel = document.getElementById("kredLabel");
const kredRadio = document.getElementById("kredRadio");
const bartLabel = document.getElementById("bartLabel");
const bartRadio = document.getElementById("bartRadio");
const valuteOptions = document.querySelectorAll(".kredBartValut select option");
const selectValut = document.querySelector(".kredBartValut select");
const novelLabels = document.querySelectorAll(".novelOldAll label");
const cards = document.getElementById("cards");
const barterIcon = document.querySelector(".fa-arrows-rotate");

let saleCars =
    [
        {
            Marka: "Bmw",
            Model: "M3",
            Novel: true,
            City: "Xizi",
            Credit: true,
            Barter: false,
            Ban: "Pickup",
            Year: 2023,
            Valut: "AZN",
            Price: 20500,
            Motor: 3.2,
            Kilometrs: 15888,
            ImageUrl: "https://turbo.azstatic.com/uploads/f460x343/2023%2F12%2F11%2F12%2F00%2F11%2F06767f5a-df12-4d54-8db6-cbb45a750da3%2F3644_nHSxUlZ52X9BJpAEoGDf8Q.jpg"
        },
        {
            Marka: "Bmw",
            Model: "M4",
            Novel: false,
            City: "Sumqayit",
            Credit: false,
            Barter: false,
            Ban: "Pickup",
            Year: 2023,
            Valut: "AZN",
            Price: 20500,
            Motor: 3.2,
            Kilometrs: 15888,
            ImageUrl: "https://turbo.azstatic.com/uploads/f460x343/2023%2F11%2F23%2F16%2F00%2F02%2Fada2a96c-1470-4546-81e7-33afb19b3fdb%2F6661_9izDrkV6s24dbMqsnxk5Ig.jpg"
        },
        {
            Marka: "Bmw",
            Model: "M5",
            Novel: false,
            City: "Baki",
            Credit: true,
            Barter: true,
            Ban: "Pickup",
            Year: 2013,
            Valut: "USD",
            Price: 10000,
            Motor: 3.2,
            Kilometrs: 15888,
            ImageUrl: "https://turbo.azstatic.com/uploads/f460x343/2023%2F08%2F04%2F15%2F48%2F14%2Fd9101c66-6576-486b-85da-9035f4a56cc5%2F40041_j_l7H1fsTgOrF_catsDI8w.jpg"
        },
        {
            Marka: "Mersedes",
            Model: "GLK",
            Novel: true,
            City: "Sumqayit",
            Credit: false,
            Barter: true,
            Ban: "Jeep",
            Year: 2019,
            Valut: "EUR",
            Price: 30500,
            Motor: 3.2,
            Kilometrs: 15888,
            ImageUrl: "https://turbo.azstatic.com/uploads/f460x343/2023%2F12%2F09%2F00%2F29%2F34%2F7774ef82-aa4f-405c-83a8-3e15f46111ea%2F3620_3v6ovoEV-I03nuXmFCIomA.jpg"
        },
        {
            Marka: "Mersedes",
            Model: "Cls63",
            Novel: true,
            City: "Baki",
            Credit: false,
            Barter: true,
            Ban: "Jeep",
            Year: 2019,
            Valut: "EUR",
            Price: 30500,
            Motor: 3.2,
            Kilometrs: 15888,
            ImageUrl: "https://turbo.azstatic.com/uploads/f460x343/2023%2F11%2F21%2F15%2F38%2F28%2Fe4c84feb-2a63-41d5-b2e4-7f4adc9feaaa%2F3815_Q_kFENEkpqL9EszbzWHdog.jpg"

        },
        {
            Marka: "Mersedes",
            Model: "E350",
            Novel: false,
            City: "Agcabedi",
            Credit: false,
            Barter: false,
            Ban: "Jeep",
            Year: 2019,
            Valut: "AZN",
            Price: 30500,
            Motor: 3.2,
            Kilometrs: 15888,
            ImageUrl: "https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F20%2F17%2F16%2F28%2F5723b00e-2fba-402e-bc23-c441cdc0cbee%2F3794_VXelI_EEwrLgfPRyIJyRlg.jpg"

        },
        {
            Marka: "Mersedes",
            Model: "G400",
            Novel: true,
            City: "Sumqayit",
            Credit: true,
            Barter: true,
            Ban: "Jeep",
            Year: 2019,
            Valut: "EUR",
            Price: 30500,
            Motor: 3.2,
            Kilometrs: 15888,
            ImageUrl: "https://turbo.azstatic.com/uploads/f460x343/2023%2F11%2F29%2F11%2F44%2F50%2Ffe654d5e-09b0-4b4e-be7e-7fd07838289b%2F3790_su8j_mkpi-ToC7vEASBBJw.jpg"

        },
        {
            Marka: "Mersedes",
            Model: "GLA 250",
            Novel: false,
            City: "Salyan",
            Credit: false,
            Barter: true,
            Ban: "Jeep",
            Year: 2019,
            Valut: "EUR",
            Price: 9600,
            Motor: 3.2,
            Kilometrs: 15888,
            ImageUrl: "https://turbo.azstatic.com/uploads/f460x343/2023%2F12%2F15%2F15%2F01%2F38%2F948775b1-fcef-4004-bc29-e129018a2691%2F3795_aiuEsuQ9ZZedRS15ys-meQ.jpg"
        },
        {
            Marka: "Audi",
            Model: "Q7",
            Novel: true,
            City: "Xizi",
            Credit: true,
            Barter: false,
            Ban: "Sedan",
            Year: 2019,
            Valut: "EUR",
            Price: 100000,
            Motor: 3.2,
            Kilometrs: 15888,
            ImageUrl: "https://turbo.azstatic.com/uploads/f460x343/2023%2F04%2F17%2F15%2F05%2F17%2F00a8c91d-7c9b-4cba-9013-169c5ed3a7d9%2F77856_8Sad8rMVm8HJEq_JPx5qgw.jpg"
        },
        {
            Marka: "Audi",
            Model: "Q8",
            Novel: true,
            City: "Gence",
            Credit: false,
            Barter: true,
            Ban: "Sedan",
            Year: 2019,
            Valut: "EUR",
            Price: 100000,
            Motor: 3.2,
            Kilometrs: 15888,
            ImageUrl: "https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F23%2F16%2F38%2F27%2F582339c9-1cf6-4be6-9f3e-8a8de1c3b2f0%2F88072_ydAfFuO3wQkvo1vKVwCixA.jpg"
        },
        {
            Marka: "Audi",
            Model: "RS7",
            Novel: true,
            City: "Gence",
            Credit: true,
            Barter: false,
            Ban: "Sedan",
            Year: 2019,
            Valut: "EUR",
            Price: 100000,
            Motor: 3.2,
            Kilometrs: 15888,
            ImageUrl: "https://turbo.azstatic.com/uploads/f460x343/2023%2F11%2F19%2F22%2F05%2F06%2F4b9e8142-d262-482e-8cc4-4dcf664bc4b0%2F3650_0ndJRtpyXiDvbOrZtzFnkQ.jpg"
        },
        {
            Marka: "FIAT",
            Model: "Doblo",
            Novel: false,
            City: "Sumqayit",
            Credit: false,
            Barter: true,
            Ban: "Jeep",
            Year: 2019,
            Valut: "EUR",
            Price: 45500,
            Motor: 3.2,
            Kilometrs: 15888,
            ImageUrl: "https://turbo.azstatic.com/uploads/f460x343/2023%2F07%2F20%2F17%2F14%2F10%2F3b1b5285-2cfb-473c-a800-413031758598%2F35458_Yqhnt1aDwRrTK98L4MoDCQ.jpg"
        },
        {
            Marka: "Fiat",
            Model: "500C",
            Novel: false,
            City: "Zaqatala",
            Credit: true,
            Barter: false,
            Ban: "Van",
            Year: 2016,
            Valut: "AZN",
            Price: 120000,
            Motor: 3.2,
            Kilometrs: 15888,
            ImageUrl: "https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F21%2F17%2F57%2F21%2Ff85d2dac-d2a2-4593-bbd6-c36816824c2d%2F3651_sBZ4AcPTNKU23RFA-WOByQ.jpg"
        }

    ]
let cities = ["Agcabedi", "Baki", "Gence", "Salyan", "Sumqayit", "Zaqatala", "Xizi"];
let cars = [
    { Marka: "BMW", Model: ["M3", "M4", "M5"] },
    { Marka: "Mersedes", Model: ["GLK", "CLS63", "E350","G400"] },
    { Marka: "Audi", Model: ["A8", "Q7","Q8","RS7"] },
    { Marka: "Fiat", Model: ["Doblo", "AF", "AF1"] },
    { Marka: "Ferrari", Model: ["fER1", "FER2", "FER3"] }
]
let bans = ["Van", "Pickup", "Jeep", "Sedan"];
let valutes = ["AZN", "USD", "EUR"];


loadPage();
function loadPage() {
    cards.innerHTML = "";
    saleCars.forEach(saleCar => {
        CardNew(saleCar);
    })
}

function getElan() {
    cards.innerHTML = "";
    saleCars.forEach(saleCar => {
        if (saleCar.Marka.toUpperCase() == marka.value.toUpperCase()) {
            if (saleCar.Model.toUpperCase() == model.value.toUpperCase()) {
                chooseCarNovel(saleCar);
            }
            else if (model.value == "Model") {
                chooseCarNovel(saleCar);
            }
        }
        else if (marka.value == "") {
            chooseCarNovel(saleCar);
        }
    });

    if (cards.innerHTML.trim() == "") {
        cards.innerHTML = `
        <h1>Axtarışa uyğun mehsul tapılmadı !</h1>
        <img style="width:50%" src="https://turbo.azstatic.com/assets/application/placeholder-1a310ce264429c846b10a9e6783dc28a4a45b724fa7635ce7f6939598d156b8f.png" alt="notfound" />`
    };
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
    banType.innerHTML = "";
    banType.innerHTML = ` <option style="font-size: 18px;" value="" selected disabled>Ban növü</option>`
    for (let i = 0; i < bans.length; i++) {
        banType.innerHTML += `<option>${bans[i]}</option>`
    }
}

changeCity();
function changeCity() {
    city.innerHTML = "";
    city.innerHTML = `<option value="" selected disabled>Şəhər</option>`
    for (let i = 0; i < cities.length; i++) {
        city.innerHTML += `<option>${cities[i]}</option>`
    }
}

getMarka();
function getMarka() {
    marka.innerHTML = "";
    marka.innerHTML = `<option style="font-size: 20px;" value="" selected disabled>Marka</option>`
    for (let i = 0; i < cars.length; i++) {
        marka.innerHTML += `<option value="${cars[i].Marka}">${cars[i].Marka}</option>`;
    }
}

function getAllModel() {
    model.innerHTML = "";
    model.innerHTML += `<option selected disabled>Model</option>`;
    cars.forEach(car => {
        if (car.Marka == marka.value) {
            for (let i = 0; i < car.Model.length; i++) {
                model.innerHTML += `<option value="${car.Model[i]}">${car.Model[i]}</option>`;
            }
        }
    });

}

///////////////////////////////// Price Inputs ///////////////////////////////

minPriceLabel.addEventListener("click", function () {
    if (maxPriceInput.value == "") {
        maxPriceLabel.style.transform = 'translateY(-50%)';
        maxPriceLabel.style.fontSize = "20px";
    }
    minPriceLabel.style.transform = 'translateY(-150%)';
    minPriceLabel.style.fontSize = "15px";

})

maxPriceLabel.addEventListener("click", function () {
    if (minPriceInput.value == "") {
        minPriceLabel.style.transform = 'translateY(-50%)';
        minPriceLabel.style.fontSize = "20px";
    }
    maxPriceLabel.style.transform = 'translateY(-150%)';
    maxPriceLabel.style.fontSize = "15px";

})

minPriceInput.addEventListener("focus", function () {
    if (maxPriceInput.value == "") {
        maxPriceLabel.style.transform = 'translateY(-50%)';
        maxPriceLabel.style.fontSize = "20px";
    }
    minPriceLabel.style.transform = 'translateY(-150%)';
    minPriceLabel.style.fontSize = "15px";

})

maxPriceInput.addEventListener("focus", function () {
    if (minPriceInput.value == "") {
        minPriceLabel.style.transform = 'translateY(-50%)';
        minPriceLabel.style.fontSize = "20px";
    }
    maxPriceLabel.style.transform = 'translateY(-150%)';
    maxPriceLabel.style.fontSize = "15px";

})

//////////////////////////////// Kredit Novleri ///////////////////////////////

kredLabel.addEventListener("click", function () {
    if (kredRadio.checked == false) {
        kredRadio.checked = true;
        this.classList.add("activeValute")
    }
    else {
        kredRadio.checked = false;
        this.classList.remove("activeValute")
    }
})

//////////////////////////////// Barter Novleri ///////////////////////////////


bartLabel.addEventListener("click", function () {
    if (bartRadio.checked == false) {
        bartRadio.checked = true;
        this.classList.add("activeValute")
    }
    else {
        bartRadio.checked = false;
        this.classList.remove("activeValute")
    }
})

//////////////////////////////// Valute Novleri ///////////////////////////////

valut.addEventListener("change", function () {
    valuteOptions.forEach(valuteOption => {
        if (selectValut.value == valuteOption.value) {
            valuteOption.classList.add("activeValute")
        } else {
            valuteOption.classList.remove("activeValute")
        }
    })
})

//////////////////////////////// Ban Novleri //////////////////////////////////

function changeNovel(text) {
    novelLabels.forEach(novelLabel => {
        if (novelLabel.getAttribute("id") == text) {
            novelLabel.classList.add("activeNovel");
            document.getElementById(text).nextElementSibling.checked = true;
        }
        else {
            novelLabel.classList.remove("activeNovel")
        }
    })
}

//////////////////////////////// Reset Inputs /////////////////////////////////

function resetInputs() {
    getMarka();
    changeCity();
    changeBan();
    oldYear();
    getAllModel();
    loadPage();
    minPriceInput.value = "";
    maxPriceInput.value = "";

}

////////////////////////////////// FILTER METHODS ////////////////////////////

function chooseCarNovel(object){
    if (novelCarsRadioValue.checked && object.Novel == true) {
        if (city.value.toUpperCase() == object.City.toUpperCase()) {
            if (cred.checked == object.Credit) {
                if (rent.checked == object.Barter) {
                    if (banType.value == object.Ban) {
                        FilterYear(object);
                    }
                    else if (banType.value.trim() == "") {
                        FilterYear(object);
                    }
                }
            }
        }
        else if (city.value == "") {
            if (cred.checked == object.Credit) {
                if (rent.checked == object.Barter) {
                    if (banType.value == object.Ban) {
                        FilterYear(object);
                    }
                    else if (banType.value.trim() == "") {
                        FilterYear(object);
                    }
                }
            }
        }
    }
    else if (exCarsRadioValue.checked && object.Novel == false) {
        if (city.value.toUpperCase() == object.City.toUpperCase()) {
            if (cred.checked == object.Credit) {
                if (rent.checked == object.Barter) {
                    if (banType.value == object.Ban) {
                        FilterYear(object);
                    }
                    else if (banType.value.trim() == "") {
                        FilterYear(object);
                    }
                }
            }
        }
        else if (city.value == "") {
            if (cred.checked == object.Credit) {
                if (rent.checked == object.Barter) {
                    if (banType.value == object.Ban) {
                        FilterYear(object);
                    }
                    else if (banType.value.trim() == "") {
                        FilterYear(object);
                    }
                }
            }
        }
    }
    else if (allCarsRadioValue.checked) {
        if (city.value.toUpperCase() == object.City.toUpperCase()) {
            if (cred.checked == object.Credit) {
                if (rent.checked == object.Barter) {
                    if (banType.value == object.Ban) {
                        FilterYear(object);
                    }
                    else if (banType.value.trim() == "") {
                        FilterYear(object);
                    }
                }
            }
        }
        else if (city.value == "") {
            if (cred.checked == object.Credit) {
                if (rent.checked == object.Barter) {
                    if (banType.value == object.Ban) {
                        FilterYear(object);
                    }
                    else if (banType.value.trim() == "") {
                        FilterYear(object);
                    }
                }
            }
        }
    }
}
function CardNew(object) {
    cards.innerHTML += (object.Barter == true && object.Credit == true) ? `
                                                <div class="card" style="position: relative;">
                                                    <i class="fa-solid fa-arrows-rotate"></i>
                                                    <i class="fa-solid fa-percent"></i>
                                                    <div style='width:100%;border-top-left-radius:5px;border-top-right-radius:5px; height:200px;background: url(${object.ImageUrl}) center/cover'></div> 
                                                    <div class="cardInfo">
                                                    <h2>${object.Price + " " + object.Valut}</h2>
                                                    <p>${object.Marka.toUpperCase() + " " +object.Model.toUpperCase()} </p>
                                                    <p>${object.Year}, ${object.Motor}, ${object.Kilometrs + " " + "Km"} </p> 
                                                    <p>${object.City.toUpperCase()}</p> 
                                                    </div>
                                                </div>`
        : (object.Barter == true) ? `
                                                <div class="card" style="position: relative;">
                                                    <i class="fa-solid fa-arrows-rotate"></i>
                                                    <div style='width:100%;border-top-left-radius:5px;border-top-right-radius:5px; height:200px;background: url(${object.ImageUrl}) center/cover'></div> 
                                                    <div class="cardInfo">
                                                    <h2>${object.Price + " " + object.Valut}</h2>
                                                    <p>${object.Marka.toUpperCase() + " " +object.Model.toUpperCase()} </p>
                                                    <p>${object.Year}, ${object.Motor}, ${object.Kilometrs + " " + "Km"} </p> 
                                                    <p>${object.City.toUpperCase()}</p> 
                                                    </div>
                                                </div>`
            : (object.Credit == true) ?
                `<div class="card" style="position: relative;">
                                                    <i class="fa-solid fa-percent"></i>
                                                    <div style='width:100%;border-top-left-radius:5px;border-top-right-radius:5px; height:200px;background: url(${object.ImageUrl}) center/cover'></div> 
                                                    <div class="cardInfo">
                                                    <h2>${object.Price + " " + object.Valut}</h2>
                                                    <p>${object.Marka.toUpperCase() + " " +object.Model.toUpperCase()} </p>
                                                    <p>${object.Year}, ${object.Motor}, ${object.Kilometrs + " " + "Km"} </p> 
                                                    <p>${object.City.toUpperCase()}</p> 
                                                    </div>
                                                </div>`
                :
                `<div class="card" style="position: relative;">
                                                <div style='width:100%;border-top-left-radius:5px;border-top-right-radius:5px; height:200px;background: url(${object.ImageUrl}) center/cover'></div> 
                                                <div class="cardInfo">
                                                <h2>${object.Price + " " + object.Valut}</h2>
                                                <p>${object.Marka.toUpperCase() + " " +object.Model.toUpperCase()} </p>
                                                <p>${object.Year}, ${object.Motor}, ${object.Kilometrs + " " + "Km"} </p> 
                                                <p>${object.City.toUpperCase()}</p> 
                                                </div>
                                            </div>`
}
function FilterYear(object) {

    if (minYear.value <= object.Year && maxYear.value >= object.Year) {
        if (valut.value.toUpperCase() == object.Valut.toUpperCase()) {
            if (+minPrice.value == 0 && +maxPrice.value == 0) {
                CardNew(object);
            }
            else if (+minPrice.value > 0 && +maxPrice.value > 0) {
                if (+minPrice.value <= object.Price && +maxPrice.value >= object.Price) {
                    CardNew(object);
                }
            }
            else if (+maxPrice.value > 0) {
                if (+maxPrice.value >= object.Price) {
                    CardNew(object);
                }
            }
            else {
                if (+minPrice.value <= object.Price) {
                    CardNew(object);
                }
            }
        }
    }
    else if (minYear.value == "" || maxYear.value == "") {
        if (minYear.value == "" && maxYear.value == "") {
            if (valut.value.toUpperCase() == object.Valut.toUpperCase()) {
                if (+minPrice.value == 0 && +maxPrice.value == 0) {
                    CardNew(object);
                }
                else if (+minPrice.value > 0 && +maxPrice.value > 0) {
                    if (+minPrice.value <= object.Price && +maxPrice.value >= object.Price) {
                        CardNew(object);
                    }
                }
                else if (+maxPrice.value > 0) {
                    if (+maxPrice.value >= object.Price) {
                        CardNew(object);
                    }
                }
                else {
                    if (+minPrice.value <= object.Price) {
                        CardNew(object);
                    }
                }
            }
        }
        else {
            if (minYear.value == "") {
                if (maxYear >= object.Year) {
                    if (valut.value.toUpperCase() == object.Valut.toUpperCase()) {
                        if (+minPrice.value == 0 && +maxPrice.value == 0) {
                            CardNew(object);
                        }
                        else if (+minPrice.value > 0 && +maxPrice.value > 0) {
                            if (+minPrice.value <= object.Price && +maxPrice.value >= object.Price) {
                                CardNew(object);
                            }
                        }
                        else if (+maxPrice.value > 0) {
                            if (+maxPrice.value >= object.Price) {
                                CardNew(object);
                            }
                        }
                        else {
                            if (+minPrice.value <= object.Price) {
                                CardNew(object);
                            }
                        }
                    }
                }
            }
            else {
                if (valut.value.toUpperCase() == object.Valut.toUpperCase()) {
                    if (+minPrice.value == 0 && +maxPrice.value == 0) {
                        CardNew(object);
                    }
                    else if (+minPrice.value > 0 && +maxPrice.value > 0) {
                        if (+minPrice.value <= object.Price && +maxPrice.value >= object.Price) {
                            CardNew(object);
                        }
                    }
                    else if (+maxPrice.value > 0) {
                        if (+maxPrice.value >= object.Price) {
                            CardNew(object);
                        }
                    }
                    else {
                        if (+minPrice.value <= object.Price) {
                            CardNew(object);
                        }
                    }
                }
            }
        }
    }
}