// JavaScript for updating selected price display
document.addEventListener('DOMContentLoaded', function() {
    const priceFilter = document.getElementById('price-filter');
    const selectedPrice = document.getElementById('selected-price');
    
    priceFilter.addEventListener('input', function() {
      const selectedValue = parseInt(priceFilter.value);
      selectedPrice.textContent = 'Selected Price: $' + selectedValue;
    });
  });
  
