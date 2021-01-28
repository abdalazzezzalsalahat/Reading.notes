var ownerName = prompt("What is your Name?");
var CarCompany = prompt("What is your car company?");
var CarModel = prompt("What is your car Model?");
var CareType = prompt("What type of care would you like? short term check, long term check, seasonal check");
var CareDetails;


while (CareType !== 'seasonal check' && CareType !== 'long term check' && CareType !== 'short term check'){
    var CareType = prompt("What type of care would you like?");
}

var checkType = '';
if (CareType === 'seasonal check'){
    checkType = 'https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/Images/Topics/Service%20and%20Warranty/Checkup%20and%20maintenance/seasonal%20checkup.jpg';
    document.getElementById("checktype").src = checkType;
}else if (CareType === 'long term check'){
    checkType = 'https://www.antwerpentoyota.com/blogs/162/wp-content/uploads/2017/10/maintain-car-fluids.jpg';
    document.getElementById("checktype").src = checkType;
}else if (CareType === 'short term check'){
    checkType = 'https://res-3.cloudinary.com/knfilters-com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/wysiwyg/AIRAID/air-filters/air-filter-hero.jpg';
    document.getElementById("checktype").src = checkType;
}

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

var number = prompt("what do you think about us?");
for (var i=1; i<= number; i++){
	var star = document.createElement("img");
    star.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/001/189/080/non_2x/star-png.png");
    star.setAttribute("width", "10%");
    document.getElementById("counter").appendChild(star);

}