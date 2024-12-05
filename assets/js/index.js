//Author: Neil

// Navbar Height
const navbarElement = document.querySelector("nav"); // Select Navbar DOM
var navbarHeight = navbarElement.offsetHeight; // Set navbarHeight to the height of the navbar
document.querySelector("main").style.paddingTop = `${navbarHeight}px` // Set top padding length to navbarHeight

// Slider array elements for each car and its details
const slides = [
    `
    <div class="car-slide">
        <div class="car-details">
            <h3>Skyline H/T Turbo 2000GT ES 1981 KHR31</h3>
            <p>The sixth-generation Skyline (Type R30), was launched in August 1981. For the advertising campaign, the actor Paul Newman - a familiar face in racing circles - was hired, and the catchphrase "New Love Skyline" attracted much attention. The 6-cylinder and 4-cylinder models used bodies with the same nose length. A 5-door hatchback was also launched, while the estate wagon was discontinued.</p>
        </div>
        <div class="car-item">
            <img class="car-img" src="../assets/images/cars/Skyline-HT-Turbo-2000GT-ES-1981-KHR31.jpg" height="500" alt="Skyline H/T Turbo 2000GT ES 1981 KHR31">
        </div>
        <div class="logo-item">
            <img class="car-logo" src="../assets/images/car-logo/Nissan-Logo.png" height="100" alt="Nissan Logo">
        </div>
    </div>`,
    `
    <div class="car-slide">
        <div class="car-details">
            <h3>Skyline 2000GTS-R 1987 KHR31</h3>
            <p>The seventh-generation Skyline (R31) was launched in August 1985 and this model is well remembered as being the first to reintroduce the 6-cylinder DOHC engine (discontinued with the C110). In May 1986, the coupe GTS appeared, and in August 1987, after a minor change, the coupe GTS-R (RB20DET-R: 210PS engine) - based on Group A race specifications - was sold as a limited edition (800 units).</p>
        </div>
        <div class="car-item">
            <img class="car-img" src="../assets/images/cars/Skyline-2000GTS-R-1987-KHR31.jpg" height="500" alt="Skyline 2000GTS-R 1987 KHR31">
        </div>
        <div class="logo-item">
            <img class="car-logo" src="../assets/images/car-logo/Nissan-Logo.png" height="100" alt="Nissan Logo">
        </div>
    </div>`,
    `
    <div class="car-slide">
        <div class="car-details">
            <h3>Skyline GT-R 1989 BNR32</h3>
            <p>The eighth generation Skyline R32 was rolled out in May 1989. Three months later, the “GT-R” was brought back after the 16-year absence. The engine was a specially designed “RB26DETT” of 2.6-liter inline 6-cylinder DOHC twin turbo and generated maximum power of 280ps. The drive system was called “ATTESA E-TS” that was the electronically controlled torque split 4WD which transmitted the best torque to all the wheels. It even had the 4-wheel multilink suspension. These equipment realized one of the best performances all over the world as a sedan-based sport car. This GT-R has a record of amazing 29 victories and no defeat for 4 seasons at Japan Touring Car Championship from 1990 through 1993. It also received a high reputation at overseas races like Spa-Francorchamps24 Hours.</p>
        </div>
        <div class="car-item">
            <img class="car-img" src="../assets/images/cars/Skyline-GT-R-1989-BNR32.jpg" height="500" alt="Skyline GT-R 1989 BNR32">
        </div>
        <div class="logo-item">
            <img class="car-logo" src="../assets/images/car-logo/Nissan-Logo.png" height="100" alt="Nissan Logo">
        </div>
    </div>
    `,
    `
    <div class="car-slide">
        <div class="car-details">
            <h3>180SX Type II 1990 RS13</h3>
            <p>180SX was a hatchback coupe that shared the platform with Silvia S13. 240SX/200SX were released in North America and Europe as 1989 year model prior to the release in Japan in 1989. It realized the aerodynamic performance of Cd 0.3 due to the flowing body with retractable headlamps. It had CA18DET engine of 1800cc, 4-valve DOHC with turbo for "Silvia K's," multilink rear suspension and HICAS-II, which enabled handling stability, traveling performance and comfortability to be balanced in a high level.</p>
        </div>
        <div class="car-item">
            <img class="car-img" src="../assets/images/cars/180SX-Type-II.jpg" height="500" alt="180SX Type II 1990 RS13">
        </div>
        <div class="logo-item">
            <img class="car-logo" src="../assets/images/car-logo/Nissan-Logo.png" height="100" alt="Nissan Logo">
        </div>
    </div>
    `,
    `
    <div class="car-slide">
        <div class="car-details">
            <h3>Fairlady Z Convertible 1992 HZ32</h3>
            <p>The fourth-generation (Z32) was launched exactly 20 years after the first-generation Fairlady Z in July 1989. The convertible was officially released in August 1992, after its exhibition at the 1991 Tokyo Motor Show. The car is based on the two-seater 300ZX and features an independent trunk lid. The engine was a non-turbo VG30DE (230PS).</p>
        </div>
        <div class="car-item">
            <img class="car-img" src="../assets/images/cars/Fairlady-Z-Convertible-1992-HZ32.jpg" height="500" alt="Fairlady Z Convertible 1992 HZ32">
        </div>
        <div class="logo-item">
            <img class="car-logo" src="../assets/images/car-logo/Nissan-Logo.png" height="100" alt="Nissan Logo">
        </div>
    </div>
    `,
    `
    <div class="car-slide">
        <div class="car-details">
            <h3>300ZX T-Top 1992 Z32</h3>
            <p>The fourth generation Fairlady Z (Z32) was released in 1989, twenty years after the release of the first generation. The styling with refined beauty and sharpness of Z such as curvy wide & low proportion, extremely slanted headlamps and short overhang representing high dynamic performance became a popular topic.</p>
        </div>
        <div class="car-item">
            <img class="car-img" src="../assets/images/cars/300ZX-T-Top-1992-Z32.jpg" height="500" alt="Fairlady Z Convertible 1992 HZ32">
        </div>
        <div class="logo-item">
            <img class="car-logo" src="../assets/images/car-logo/Nissan-Logo.png" height="100" alt="Nissan Logo">
        </div>
    </div>
    `
];

// Products Page JS (products-page.html)

// Specs Declaration
// Set the specification title and create 2 indices for the specification title and data
const specs = [
    ["Overall length / width / height",""],
    ["Wheelbase",""],
    ["Tread",""],
    ["Curb weight",""],
    ["Engine",""],
    ["Engine Max. power",""],
    ["Engine Max. torque",""],
    ["Transmission",""],
    ["Suspension",""],
    ["Brakes",""],
    ["Tires",""]
];
// Specification for each car
const specsData = [
    ["4,595/1,665/1,360mm", "2,615mm", "1,410/1,400mm", "1,160kg", "L20ET (6-cyl. in line, OHC), 1,998cc", "107kW (145PS)/5,600rpm", "206Nm (21.0kgm)/3,200rpm", "N/A", "Strut, semi trailing-arm", "Disc (front & rear)", "185/70HR14"],
    ["4,660/1,690/1,365mm", "2,615mm", "1,425/1,420mm", "1,345kg", "RB20DET-R (6-cyl. in line, DOHC), 1,998cc", "154kW (210PS)/6,400rpm", "245Nm (25kgm)/4,800rpm", "5-speed, floor shift", "Strut, semi trailing-arm", "Ventilated disc (front & rear)", "205/60R15"],
    ["4,545/1,755/1,340mm", "2,615mm", "1,480mm (front & rear)", "1,430kg", "RB26DETT (6-cyl. in line, DOHC), 2,568cc", "206kW (280PS)/6,800rpm", "353Nm (36kgm)/4,400rpm", "5-speed, floor shift", "Multilink (front & rear)", "Ventilated disc (front & rear)", "225/50R16"],
    ["4,540/1,690/1,290mm", "2,475mm", "1,465/1,460mm", "1,170kg", "CA18DET (4-cyl. in line, 4-valve DOHC, turbo) 1,809cc", "123kW(175ps)/6,400rpm", "225N·m(23.0kgf·m)/4,000rpm", "N/A", "Strut/Multilink (front & rear)", "Ventilated disc/Disc (front & rear)", "195/60R15 86H"],
    ["4,310/1,790/1,255mm", "2,450mm", "1,495/1,535mm", "1,530kg", "VG30DE (V6, DOHC), 2,960cc", "169W (230PS)/6,400rpm", "273Nm (27.8kgm)/4,800rpm", "Electronically controlled AT (E-AT)", "Multilink (front & rear)", "Ventilated disc (front & rear)", "225/50R16 (front & rear)"],
    ["4,310/1,790/1,250mm", "2,450mm", "1,495/1,535mm", "1,470kg", "VG30DE (V6, 4-valve DOHC) 2,960cc", "169.2kw(230PS)/6400rpm", "273N·m(27.8kgf·m)/4800rpm", "Full-range electronic 4-speed AT", "Multilink / Multilink", "Ventilated disc / Ventilated disc", "225/50R16 92V"]
];


let slideIndex = 0; // Default selected index or car
// Car Preview Slider
function updateSlider(index) { // function with parameter of selected index to update slider
    const carsSlider = document.querySelector(".cars-slider"); // set carsSlider as the DOM for <div class="cars-slider"></div>
    carsSlider.innerHTML = slides[index]; // set car-slide
}
// Specifications Table
function updateSpecsTable(index) { // function with parameter of selected index to update the specifications table
    for (let i = 0; i < specs.length; i++) {
        specs[i][1] = specsData[index][i]; // Set specification information for each spec title for current car or index
    }
    const parentElement = document.querySelector(".specifications-table"); // Select .specification-table table DOM
    parentElement.innerHTML = ""; // Clear innerHTML of table
    for (let i = 0; i < specs.length; i++) {
        const tableRow = document.createElement("tr"); // Create table row
        const specTitle = document.createElement("td"); //create table cells
        specTitle.textContent = specs[i][0]; // Set each spec title from specs[i][0] to specTitle text
        tableRow.appendChild(specTitle); // Append specTitle to the table row
        const specInfo = document.createElement("td"); // Set specInfo as new cell table element
        specInfo.textContent = specs[i][1]; // Set each spec data from specs[i][1] tp specInfo text
        tableRow.appendChild(specInfo); // Append specInfo to the table row
        parentElement.appendChild(tableRow); // Append the table row to the <table class="specifications-table"></table>
    }
}

// Left Arrow
document.querySelector(".left").addEventListener("click", function () { // When .left button is clicked
    slideIndex--; // increment slideIndex value by -1
    if (slideIndex < 0) { // If slideIndex reaches negative value
        slideIndex = slides.length - 1; // Set slideIndex back to highest index value or the last car on the list
    }
    updateSlider(slideIndex); // Update the slider with the index of the selcted car as a parameter
    updateSpecsTable(slideIndex); // Update the specifications table at the products-page.html with the selected car
})
// Right Arrow
document.querySelector(".right").addEventListener("click", function () { // When .right button is clicked using modulo
    slideIndex++; // increment slideIndex value by -1
    slideIndex %= slides.length; // If slideIndex reaches max index value set the index back to 0
    updateSlider(slideIndex); // Update the slider with the index of the selcted car as a parameter                        
    updateSpecsTable(slideIndex); // Update the table with selected car index as parameter
})

updateSlider(slideIndex); // Initial update to slider with slideIndex = 0 (default selected index)
updateSpecsTable(slideIndex); // Initial update to the specs table with slideIndex = 0 (default selected index)