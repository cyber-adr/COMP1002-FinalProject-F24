// Slider
const slides = [
    `
    <div class="car-slide">
        <div class="car-details">
            <h3>Skyline H/T Turbo 2000GT ES 1981 KHR31</h3>
            <p>The 1981 Nissan Skyline H/T Turbo 2000GT ES (KHR31) is a notable part of Nissan's legendary Skyline series, falling within the R30 generation (1981–1985). This particular model, the H/T Turbo 2000GT ES, represents a significant step in the evolution of the Skyline, combining performance-oriented turbocharged power with a sleek design and innovative technology.</p>
        </div>
        <div class="car-item">
            <img class="car-img" src="images/cars/Skyline-HT-Turbo-2000GT-ES-1981-KHR31.jpg" height="500" alt="Skyline H/T Turbo 2000GT ES 1981 KHR31">
        </div>
        <div class="logo-item">
            <img class="car-logo" src="images/car-logo/Nissan-Logo.png" height="100" alt="Nissan Logo">
        </div>
    </div>`,
    `
    <div class="car-slide">
        <div class="car-details">
            <h3>Skyline 2000GTS-R 1987 KHR31</h3>
            <p>The 1987 Nissan Skyline 2000GTS-R (KHR31) is a standout model in the R30 Skyline series, known for its performance capabilities, especially in motorsport and the early development of Nissan's turbocharged engines. The 2000GTS-R (also known by its chassis code KHR31) was a special version that offered higher performance and sportier features compared to other variants of the Skyline from the late 1980s.</p>
        </div>
        <div class="car-item">
            <img class="car-img" src="images/cars/Skyline-2000GTS-R-1987-KHR31.jpg" height="500" alt="Skyline 2000GTS-R 1987 KHR31">
        </div>
        <div class="logo-item">
            <img class="car-logo" src="images/car-logo/Nissan-Logo.png" height="100" alt="Nissan Logo">
        </div>
    </div>`,
    `
    <div class="car-slide">
        <div class="car-details">
            <h3>Skyline GT-R 1989 BNR32</h3>
            <p>The 1989 Nissan Skyline GT-R (BNR32) is one of the most iconic and revered cars in the world of performance cars and JDM enthusiasts. Often referred to simply as the R32 GT-R, it marked the beginning of a new era for Nissan and is widely regarded as a groundbreaking performance machine. This car became legendary not just because of its technological advancements, but also due to its dominance in motorsports and its status as a symbol of Nissan’s engineering prowess.</p>
        </div>
        <div class="car-item">
            <img class="car-img" src="images/cars/Skyline-GT-R-1989-BNR32.jpg" height="500" alt="Skyline GT-R 1989 BNR32">
        </div>
        <div class="logo-item">
            <img class="car-logo" src="images/car-logo/Nissan-Logo.png" height="100" alt="Nissan Logo">
        </div>
    </div>
    `,
    `
    <div class="car-slide">
        <div class="car-details">
            <h3>180SX Type II 1990 RS13</h3>
            <p>The 1990 Nissan 180SX Type II (RS13) is a highly regarded version of the Nissan 180SX, a car that became a cornerstone of Japanese sports car culture during the 1980s and early 1990s. As a part of the RS13 chassis family, the 180SX Type II was a more performance-focused model that built on the already strong foundation of the earlier 180SX variants, offering sportier features, improved handling, and a more refined driving experience.</p>
        </div>
        <div class="car-item">
            <img class="car-img" src="images/cars/180SX-Type-II.jpg" height="500" alt="180SX Type II 1990 RS13">
        </div>
        <div class="logo-item">
            <img class="car-logo" src="images/car-logo/Nissan-Logo.png" height="100" alt="Nissan Logo">
        </div>
    </div>
    `,
    `
    <div class="car-slide">
        <div class="car-details">
            <h3>Fairlady Z Convertible 1992 HZ32</h3>
            <p>The 1992 Nissan Fairlady Z Convertible (HZ32) is a rare and elegant version of the Z32 Fairlady Z, a model known for its advanced technology, sharp handling, and sleek styling. The Z32 (introduced in 1989) was the fifth generation of Nissan’s iconic Fairlady Z series, and the convertible variant offered the same high-performance characteristics, but with the added thrill of open-air driving.</p>
        </div>
        <div class="car-item">
            <img class="car-img" src="images/cars/Fairlady-Z-Convertible-1992-HZ32.jpg" height="500" alt="Fairlady Z Convertible 1992 HZ32">
        </div>
        <div class="logo-item">
            <img class="car-logo" src="images/car-logo/Nissan-Logo.png" height="100" alt="Nissan Logo">
        </div>
    </div>
    `,
    `
    <div class="car-slide">
        <div class="car-details">
            <h3>300ZX T-Top 1992 Z32</h3>
            <p>The 1992 Nissan 300ZX T-Top (Z32) is a standout model in the Z32 generation of the Nissan 300ZX, one of the most iconic Japanese sports cars of the early 1990s. Known for its cutting-edge technology, high-performance capabilities, and sleek styling, the 1992 300ZX T-Top offered a unique combination of exhilarating performance and open-air driving enjoyment with its T-Top roof design. This model played a significant role in cementing the 300ZX's status as a true contender in the world of sports coupes and remains highly revered by car enthusiasts and collectors today.</p>
        </div>
        <div class="car-item">
            <img class="car-img" src="images/cars/300ZX-T-Top-1992-Z32.jpg" height="500" alt="Fairlady Z Convertible 1992 HZ32">
        </div>
        <div class="logo-item">
            <img class="car-logo" src="images/car-logo/Nissan-Logo.png" height="100" alt="Nissan Logo">
        </div>
    </div>
    `
];

let slideIndex = 0;

function updateSlider(index) {
    const carsSlider = document.querySelector(".cars-slider");
    carsSlider.innerHTML = slides[index]; // set car-slide
}

// Left Arrow
document.querySelector(".left").addEventListener("click", function () {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    updateSlider(slideIndex);
})
// Right Arrow
document.querySelector(".right").addEventListener("click", function () {
    slideIndex++;
    slideIndex %= slides.length;
    updateSlider(slideIndex);
})

updateSlider(slideIndex);