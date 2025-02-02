// Author: Neil
const headerElement = document.querySelector("#site-header");
const footerElement = document.querySelector("#site-footer");

headerElement.innerHTML = `
<nav class="navbar">
            <div class="logo">
                <a href="index.html"><img src="assets/images/JDM-Classics-Logo.png" height="75" alt="Logo"></a>
            </div>
            <div class="navbutton">
                <a href="html/about-us.html">About</a>
            </div>
            <div class="navbutton">
                <a href="#parts">OEM Parts</a>
            </div>
            <div class="navbutton">
                <a href="html/contact-us.html">Contact Us</a>
            </div>
            <div class="navbutton">
                <a href="html/products-page.html">Shop</a>
            </div>
            <div class="navbutton">
                <a href="html/order-form.html">Order</a>
            </div>
        </nav>
`;
const today = new Date();
var year = today.getFullYear();
footerElement.innerHTML = `
<p>&copy; <span class="current-year">${year}</span> JDM Classics<p>
`;