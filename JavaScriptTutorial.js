var ownerName = prompt("What is your Name?");
var CarCompany = prompt("What is your car company?");
var CarModel = prompt("What is your car Model?");
var CareType = prompt("What type of care would you like?");
var CareDetails;

if (CarModel > 1980 && CarModel <= 2000) {
    CareDetails = "you git a free wash";
    document.getElementById("sucess").hidden = false;
}
else if (CarModel > 2000 && CarModel <= 2010) {
    CareDetails = "you git a free wash & free Polish";
    document.getElementById("sucess").hidden = false;
}
else if (CarModel > 2010 && CarModel <= 2020) {
    CareDetails = "you git a free polish & 15% discount";
    document.getElementById("sucess").hidden = false;
}
else if (CarModel > 2020) {
    CareDetails = "you git a free polish, free wash & 40% discount";
    document.getElementById("sucess").hidden = false;
}
else {
    CareDetails = "Sorry, we don't treat old models";
    document.getElementById("faliure").hidden = false;
}

document.getElementById("ownerName").innerText = ownerName;
document.getElementById("CarCompany").innerText = CarCompany;
document.getElementById("CarModel").innerText = CarModel;
document.getElementById("CareType").innerText = CareType;
document.getElementById("caredetail").innerText = CareDetails;
