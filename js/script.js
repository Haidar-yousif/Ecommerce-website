function Product(src,kind,price){
    
    this.src=src;
    this.kind=kind;
    this.price=price;
}
const prodList=[
    new Product("/images/products (1)/f1.jpg","T-Shirt",30),
    new Product("/images/products (1)/f2.jpg","T-Shirt",50),
    new Product("/images/products (1)/f3.jpg","T-Shirt",54),
    new Product("/images/products (1)/f4.jpg","T-Shirt",69),
    new Product("/images/products (1)/f5.jpg","T-Shirt",23),
    new Product("/images/products (1)/f6.jpg","Chemise",44),
    new Product("/images/products (1)/f7.jpg","Pantalon",33),
    new Product("/images/products (1)/f8.jpg","T-Shirt-Women",57)
]

function FillProducts(withevent){
    let prodcontainer=document.querySelector(".pro-container");
    for(let i=0;i<prodList.length;i++){
        let div=document.createElement("div")
        div.classList.add("pro");
        div.innerHTML=`
        <img src="${prodList[i].src}" alt="product${i+1}">
            <div class="des">
                <span>Cara</span>
                <h5>${prodList[i].kind}</h5>
                <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h4>$${prodList[i].price}</h4>

            </div>
            <a href="subpages/cart.html" class="cart">
                <i class="fa-solid fa-bag-shopping"></i>
            </a>
        `;
        prodcontainer.appendChild(div)
    }
}
FillProducts()