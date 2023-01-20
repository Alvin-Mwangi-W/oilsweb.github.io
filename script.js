// import {data} from './data.js';

// for(let productData of data) {
//     showProduct();
// }

var logo = document.querySelector(".container");
var menu = document.querySelector(".menu-2");

logo.addEventListener('click', function(){
    menu.classList.toggle('showmenu')
})

showProduct();

function showProduct() {
   
    const newHTML = `
    <ul class="slide" data-active>
    <li >
        <div class="products">
            <div class="product-card">
                <img src="/assets/prod1.jpeg" alt="">
            </div>
            <div class="product-desc">
                <span>Coconut Oil</span>
               <h5>250ml</h5>
                <p>Kshs 1000.00</p>
            </div>
        </div>
    </li>
    <li >
        <div class="products">
            <div class="product-card">
                <img src="/assets/prod15.jpeg" alt="">
            </div>
            <div class="product-desc">
                <span>Coconut Oil</span>
               <h5>250ml</h5>
                <p>Kshs 1000.00</p>
            </div>
        </div>
    </li>
    <li >
        <div class="products">
            <div class="product-card">
                <img src="/assets/prod5.jpeg" alt="">
            </div>
            <div class="product-desc">
                <span>Coconut Oil</span>
               <h5>250ml</h5>
                <p>Kshs 1000.00</p>
            </div>
        </div>
    </li>
    <li >
        <div class="products">
            <div class="product-card">
                <img src="/assets/prod6.jpeg" alt="">
            </div>
            <div class="product-desc">
                <span>Coconut Oil</span>
               <h5>250ml</h5>
                <p>Kshs 1000.00</p>
            </div>
        </div>
    </li>
</ul>
    `;

    console.log(newHTML);

}

