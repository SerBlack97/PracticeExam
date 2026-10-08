function totalOrder(){
    var price = parseFloat(document.getElementById('content').value);
    var quantity = parseFloat(document.getElementById('quantityNum').value);
    var totalPrice = price * quantity;

    document.getElementById('result').innerText = totalPrice;
}