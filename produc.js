



function productSet(container,coffeeTitle,coffeePrice,coffeeQuantity,totalPrice) {
    count++;
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>${count}</th>
    <td>${coffeeTitle}</td>
    <td>${coffeePrice}</td>
    <td>${coffeeQuantity}</td>
    <td>${totalPrice}</td>
    `
    container.appendChild(tr);
}

function getProductId(coffeeId) {
    const productId = document.getElementById(coffeeId).innerText;
    return productId;
}



let count = 0;
document.getElementById('coffee-btn').addEventListener('click',()=>{
    const container = document.getElementById('container');
    const coffeeTitle = getProductId('coffee');
    const coffeePrice = getProductId('coffee-price');
    const coffeeQuantity = getProductId('coffee-quantity');
    
    const totalPrice = parseFloat(coffeePrice) * parseFloat(coffeeQuantity);
    productSet(container,coffeeTitle,coffeePrice,coffeeQuantity,totalPrice); 
    document.getElementById('coffee-btn').setAttribute('disabled',true);
})

document.getElementById('heart-btn').addEventListener('click',()=>{
    const container = document.getElementById('container');
    const coffeeTitle = getProductId('heart');
    const coffeePrice = getProductId('heart-price');
    const coffeeQuantity = getProductId('heart-quantity');
    
    const totalPrice = parseFloat(coffeePrice) - parseFloat(coffeeQuantity);
    productSet(container,coffeeTitle,coffeePrice,coffeeQuantity,totalPrice); 
    document.getElementById('heart-btn').setAttribute('disabled',true);
})

document.getElementById('panda-btn').addEventListener('click',()=>{
    const container = document.getElementById('container');
    const coffeeTitle = getProductId('panda');
    const coffeePrice = getProductId('panda-price');
    const coffeeQuantity = getProductId('panda-quantity');
    
    const totalPrice = parseFloat(coffeePrice) / parseFloat(coffeeQuantity);
    productSet(container,coffeeTitle,coffeePrice,coffeeQuantity,totalPrice); 
    document.getElementById('panda-btn').setAttribute('disabled',true);
})

document.getElementById('umbrella-btn').addEventListener('click',()=>{
    const container = document.getElementById('container');
    const coffeeTitle = getProductId('umbrella');
    const coffeePrice = getProductId('umbrella-price');
    const coffeeQuantity = getProductId('umbrella-quantity');
    
    const totalPrice = parseFloat(coffeePrice) + parseFloat(coffeeQuantity);
    productSet(container,coffeeTitle,coffeePrice,coffeeQuantity,totalPrice); 
    document.getElementById('umbrella-btn').setAttribute('disabled',true);
})

document.getElementById('vue-btn').addEventListener('click',()=>{
    const container = document.getElementById('container');
    const coffeeTitle = getProductId('vue');
    const vuePriceValue = document.getElementById('price-input');
    const vueQuantityValue = document.getElementById('quantity-input');
    
    const totalPrice = parseFloat(vuePriceValue.value) * parseFloat(vueQuantityValue.value);
    if (!isNaN(totalPrice)) {
        productSet(container,coffeeTitle,vuePriceValue.value,vueQuantityValue.value,totalPrice); 
        document.getElementById('vue-btn').setAttribute('disabled',true);
        vuePriceValue.value = '';
        vueQuantityValue.value = '';
    }else{
        alert('Please enter the valid number');
        vuePriceValue.value = '';
        vueQuantityValue.value = '';
    }
})