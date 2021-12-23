// memory increase function
function memoryIncrease(memoryAdded){
    const extraMemory = document.getElementById('extraMemory');
    const extraMemoryText = extraMemory.innerText;
    const extraMemoryAmount = parseInt(extraMemoryText);
    if(memoryAdded == true){
        // const sixteengbUpdate = extraMemoryAmount +180;
        extraMemory.innerText = 180;
    }
    else if(memoryAdded == false){
        extraMemory.innerText = 0;
    }
}
// storage increase function
function storageIncrease(storageAdded){
    const extraStorage = document.getElementById('extraStorage');
    const extraStorageText = extraStorage.innerText;
    const extraStorageAmount = parseInt(extraStorageText);
    if(storageAdded == true){
        extraStorage.innerText = 180;
    }
    else if(storageAdded == false){
        extraStorage.innerText = 100;
    }
    else if(storageAdded == null){
        extraStorage.innerText = 0;
    }
}
// delivery option function
function delivery(isNeeded){
    const delivery = document.getElementById('deliveryCharge');
    const deliveryText = delivery.innerText;
    const deliveryAmount = parseInt(deliveryText);
    if(isNeeded == true){
        delivery.innerText = 20;
    }
    else if(isNeeded == false){
        delivery.innerText = 0;
    }
}
// total calculation function
function totalCalculation(){
    // bestPrice
    const bestPrice = document.getElementById('bestPrice');
    const bestPriceText = bestPrice.innerText;
    const bestPriceAmount = parseInt(bestPriceText);
    // memory
    const memory = document.getElementById('extraMemory');
    const memoryText = memory.innerText;
    const memoryAmount = parseInt(memoryText);
    // storage
    const extraStorage = document.getElementById('extraStorage');
    const extraStorageText = extraStorage.innerText;
    const extraStorageAmount = parseInt(extraStorageText);
    // delivery
    const delivery = document.getElementById('deliveryCharge');
    const deliveryText = delivery.innerText;
    const deliveryAmount = parseInt(deliveryText);
    // grand total
    let grandTotal = bestPriceAmount+memoryAmount+extraStorageAmount+deliveryAmount;
    //update on html
    document.getElementById('gTotal').innerText = grandTotal;
    document.getElementById('finalTotal').innerText = grandTotal;
}
// pomo code function
function pomoCode(){
    // get pomo code 
    const pomo = document.getElementById('codeInput');
    const pomoValue = pomo.value;
    // get total price
    const gtotal = document.getElementById('gTotal');
    const gtotalText = gtotal.innerText;
    const gtotalAmount = parseInt(gtotalText);
    if( pomoValue == 'stevekaku'){
        let finalTotal = gtotalAmount - (gtotalAmount * 0.2); //20% off
        //update on html page
        document.getElementById('finalTotal').innerText = finalTotal;
    }
    //clear text from input area
    pomo.value = '';
}
// 16 gb unified memory button
document.getElementById('sixteenGB').addEventListener('click',function(){
    memoryIncrease(true);
    totalCalculation();
})
// 8 gb unified memory button
document.getElementById('eightGB').addEventListener('click',function(){
    memoryIncrease(false);
    totalCalculation();
})
// 1tb ssd storage button
document.getElementById('tb1').addEventListener('click',function(){
    storageIncrease(true);
    totalCalculation();
})
// 512 gb ssd storage button
document.getElementById('gb512').addEventListener('click',function(){
    storageIncrease(false);
    totalCalculation();
})
// 256 gb ssd storage button
document.getElementById('gb256').addEventListener('click',function(){
    storageIncrease(null);
    totalCalculation();
})
// free prime delivery button
document.getElementById('free').addEventListener('click',function(){
    delivery(false);
    totalCalculation();
})
// $20 added button
document.getElementById('charge').addEventListener('click',function(){
    delivery(true);
    totalCalculation();
})
// apply button
document.getElementById('apply').addEventListener('click',function(){
    pomoCode();
})