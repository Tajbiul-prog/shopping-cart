// buy phone
const addOne = document.getElementById("addOnePhone");
addOne.addEventListener("click", function(){
    phoneQuant = document.getElementById("phoneQuantity").value;
    phoneQuantNumb = parseFloat(phoneQuant);
    result = phoneQuantNumb + 1;
    document.getElementById("phoneQuantity").value = result;
    const phoneCost = document.getElementById("phoneAmount").innerText;
    phoneCostNumb = parseFloat(phoneCost);
    document.getElementById("phoneAmount").innerText = phoneCostNumb + phoneCostNumb;

})

const minusOne = document.getElementById("minusOnePhone");
minusOne.addEventListener("click", function(){
    phoneQuant = document.getElementById("phoneQuantity").value;
    phoneQuantNumb = parseFloat(phoneQuant);
    result = phoneQuantNumb - 1;
    if (result <= 1) {
        result = 1;
    }
    document.getElementById("phoneQuantity").value = result;
})
// buy phone case
const addOneCase = document.getElementById("addOnePhoneCase");
addOneCase.addEventListener("click", function(){
    caseQuant = document.getElementById("caseQuantity").value;
    caseQuantNumb = parseFloat(caseQuant);
    result = caseQuantNumb + 1;
    document.getElementById("caseQuantity").value = result;
    const caseCost = document.getElementById("caseAmount").innerText;
    caseCostNumb = parseFloat(caseCost);
    document.getElementById("caseAmount").innerText = caseCostNumb + caseCostNumb;

})

const minusOnePhoneCase = document.getElementById("minusOnePhoneCase");
minusOnePhoneCase.addEventListener("click", function(){
    caseQuant = document.getElementById("caseQuantity").value;
    caseQuantNumb = parseFloat(caseQuant);
    result = caseQuantNumb - 1;
    if (result <= 1) {
        result = 1;
    }
    document.getElementById("caseQuantity").value = result;
})

