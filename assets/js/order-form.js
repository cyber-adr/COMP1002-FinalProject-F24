// Author: Bijay
// Pre-fill the car model based on the query parameter
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedCar = urlParams.get('car');
    if (selectedCar) {
        document.getElementById('car').value = selectedCar;
    }
};