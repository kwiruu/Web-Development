var storedTotal = localStorage.getItem("cartTotal");

            if(storedTotal == 0){
                document.getElementById("total").innerHTML = "$0.00";
            }
            else{
            document.getElementById("total").innerHTML = "$ " + storedTotal + ".00";
            }

            function reset_price() {
                localStorage.setItem("cartTotal", 0);
                document.getElementById("total").innerHTML = "$0.00";
            }

let Motor = document.getElementById('Motor1');
            let bg = document.getElementById('bg1');
            let text = document.getElementById('text');
            let text2 = document.getElementById('text2');
            let text3 = document.getElementById('text3');
            let text4 = document.getElementById('text4');
            let text5 = document.getElementById('text5');
            let text6 = document.getElementById('text6');
            let square = document.getElementById('square');
            let square1 = document.getElementById('square1');

            let btn = document.getElementById('btn');

            window.addEventListener('scroll', function(){
                let value = window.scrollY;
                Motor.style.left = value * 2.50 + 'px';
                
                text.style.marginLeft = value * 1 + 'px';
                text2.style.marginLeft = -value * 0.25 + 'px';
                text3.style.marginLeft = -value * 0.25 + 'px';
                text4.style.marginLeft = -value * 2 + 'px';
                text5.style.marginLeft = value * 0.25 + 'px';
                text6.style.marginLeft = value * 0.25 + 'px';
            })


const product = [
    {
        id: 0,
        image: 'products_img/cbr_honda_1k.png',
        title: 'Honda CBR 1000cc',
        price: 28900,
    },
    {
        id: 1,
        image: 'products_img/tfx_150.jpg',
        title: 'Yamaha TFX 150cc',
        price: 2560,
    },
    {
        id: 2,
        image: 'products_img/cbr_honda_250.png',
        title: 'Honda CBR 250cc',
        price: 6960,
    },
    {
        id: 3,
        image: 'products_img/cbr_honda.png',
        title: 'Honda CBR 500cc',
        price: 6710,
    },
    {
        id: 4,
        image: 'products_img/ninja_kawasaki.png',
        title: 'Kawasaki Ninja 400cc',
        price: 5900,
    },
    {
        id: 5,
        image: 'products_img/yamaha_r1.png',
        title: 'Yamaha R1 1000cc',
        price: 30500,
    },
    {
        id: 6,
        image: 'products_img/suzuki_grsx_v2.png',
        title: 'Suzuki GSX R 1000cc',
        price: 19800,
    },
    {
        id: 7,
        image: 'products_img/cfmoto_300.jpg',
        title: 'CFMoto 300SR',
        price: 3100,
    },
    {
        id: 8,
        image: 'products_img/cfmoto_650.png',
        title: 'CFMoto 650GT',
        price: 6000,
    },
    {
        id: 9,
        image: 'products_img/BMW_S1000.jpg',
        title: 'BMW S1000RR 2023',
        price: 14545,
    },
    {
        id: 10,
        image: 'products_img/BMW-G310R.jpg',
        title: 'BMW G310R 2022',
        price: 5000,
    },
    {
        id: 11,
        image: 'products_img/BMW-G310GS.jpg',
        title: 'BMW G310GS 2022',
        price: 5700,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='product'>
            <div class='img_container'>
            <img src="image/heart.png" id="heart"></img>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <h3>${title}</h3>
        <p>★★★★★ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ$ ${price}</p>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";

        document.getElementById("total").innerHTML = "$ 00.00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
        
        localStorage.setItem("cartTotal", total);
    }
}

