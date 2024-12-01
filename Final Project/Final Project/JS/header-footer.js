const header = document.querySelector("#site-header");
const footer = document.querySelector("#site-footer");

header.innerHTML = `
<nav class="navbar">
    <div class="logo">
        <a href="#homepage-header"><img src="images/JDM-Classics-Logo.png" height="75" alt="Logo"></a>
    </div>
    <div class="navbutton">
        <a href="#about">About</a>
    </div>
    <div class="navbutton">
        <a href="#parts">OEM Parts</a>
    </div>
    <div class="navbutton">
        <a href="#contacts">Contact Us</a>
    </div>
    <div class="navbutton">
        <a href="order_form.html">Shop</a>
    </div>
</nav>
`;
footer.innerHTML = `

`;