window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

/* SCROLL TO TOP BUTTON */
let arrowButton = document.getElementById("arrow-button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arrowButton.style.display = "block";
  } else {
    arrowButton.style.display = "none";
  }
}

function toTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* LOAD CAKES OR CUPCAKES IN PRODUCT WINDOW */
function loadCakes() {
  let result = "";

  result += "<div class='product-wrapper'><img class='flash' src='/images/cakes/cake1.jpg' /><h4>Strawberries & Cream</h4><p>$35.00</p></div>"
  result += "<div class='product-wrapper'><img class='flash' src='/images/cakes/cake2.jpg' /><h4>Blueberry</h4><p>$30.00</p></div>"
  result += "<div class='product-wrapper'><img class='flash' src='/images/cakes/cake3.jpg' /><h4>Summer</h4><p>$30.00</p></div>"
  result += "<div class='product-wrapper'><img class='flash' src='/images/cakes/cake4.jpg' /><h4>Sprinkles</h4><p>$35.00</p></div>"
  result += "<div class='product-wrapper'><img class='flash' src='/images/cakes/cake5.jpg' /><h4>Heavenly</h4><p>$30.00</p></div>"
  result += "<div class='product-wrapper'><img class='flash' src='/images/cakes/cake6.jpg' /><h4>Triple Chocolate</h4><p>$35.00</p></div>"
  result += "<div class='product-wrapper'><img class='flash' src='/images/cakes/cake7.jpg' /><h4>Birthday</h4><p>$35.00</p></div>"
  result += "<div class='product-wrapper'><img class='flash' src='/images/cakes/cake8.jpg' /><h4>Clementine</h4><p>$30.00</p></div>"

  document.getElementById("products-window").innerHTML = result;
};

function loadCupcakes() {
  let result = "";

  result += "<div class='product-wrapper'><img class='flash' src='/images/cupcakes/cupcake1.jpg' /><h4>Red Velvet</h4><p>$20.00/12pcs</p></div>"
  result += "<div class='product-wrapper'><img class='flash' src='/images/cupcakes/cupcake2.jpg' /><h4>Ferrero Rocher</h4><p>$15.00/6pcs</p></div>"
  result += "<div class='product-wrapper'><img class='flash' src='/images/cupcakes/cupcake3.jpg' /><h4>Mint Chocolate</h4><p>$20.00/12pcs</p></div>"
  result += "<div class='product-wrapper'><img class='flash' src='/images/cupcakes/cupcake4.jpg' /><h4>Birthday</h4><p>$20.00/12pcs</p></div>"
  result += "<div class='product-wrapper'><img class='flash' src='/images/cupcakes/cupcake5.jpg' /><h4>Dark Chocolate</h4><p>$12.00/4pcs</p></div>"
  result += "<div class='product-wrapper'><img class='flash' src='/images/cupcakes/cupcake6.jpg' /><h4>Sprinkles</h4><p>$15.00/6pcs</p></div>"
  result += "<div class='product-wrapper'><img class='flash' src='/images/cupcakes/cupcake7.jpg' /><h4>Fudge</h4><p>$15.00/6pcs</p></div>"
  result += "<div class='product-wrapper'><img class='flash' src='/images/cupcakes/cupcake8.jpg' /><h4>Summer</h4><p>$12.00/4pcs</p></div>"

  document.getElementById("products-window").innerHTML = result;
};