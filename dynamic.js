// buy phone
function productHandler(isIncrease) {
    phoneQuant = document.getElementById("phoneQuantity").value;
    phoneQuantNumb = parseInt(phoneQuant);
    if (isIncrease == true ) {
        result = phoneQuantNumb + 1;
    }
    if (isIncrease == false && phoneQuantNumb > 0) {
        result = phoneQuantNumb - 1;
    }
    document.getElementById("phoneQuantity").value = result;
    const total = result * 1219;
    document.getElementById("phoneAmount").innerText = total;
}


// buy phone case
function caseHandler(isIncrease) {
    caseQuant = document.getElementById("caseQuantity").value;
    caseQuantNumb = parseInt(caseQuant);
    if (isIncrease == true) {
        result = caseQuantNumb + 1;        
    }
    if (isIncrease == false && caseQuantNumb > 0) {
        result = caseQuantNumb - 1;
    }
    document.getElementById("caseQuantity").value = result;
    const total = result * 59;
    document.getElementById("caseAmount").innerText = total;
}
