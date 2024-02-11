function displayResult(){
    // Values of co2 emissions
    const petrol = 2.31;
    const diesel = 2.68;
    const gas = 2.3;

    // Getting element to display result later
    var result = document.getElementById("result-emission");

    // Getting values for calculations
    var transportType = document.getElementById("car-types").value;
    var distance = document.getElementById("distance").value;
    var fuelUsage = document.getElementById("fuel-usage").value;
    var fuelType = document.getElementById("fuel-type").value;

    var co2;
    if(fuelType == "petrol"){
        co2 = petrol;
    }else if(fuelType == "diesel"){
        co2 = diesel;
    }else{
        co2 = gas;
    }

    // Algorithms depends on transport type
    switch(transportType){
        case "car":
            var res = fuelUsage * distance * co2 / 100;
            break;
        case "motorbike":
            var res = fuelUsage * distance * co2 / 100;
            break;
        case "van":
            var res = fuelUsage * distance * co2 / 100;
            break;
    }
    result.innerText = "Результат " + res + " кг/м3 CO2";
}

function displayCalculator(){
    document.getElementById("calculator-wrapper").id = "calculator-wrapper-active";
}
function hideCalculator(){
    document.getElementById("calculator-wrapper-active").id = "calculator-wrapper";
}

function scrollToNews(){
    document.getElementById('news').scrollIntoView();
}

