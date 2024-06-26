document.addEventListener("DOMContentLoaded",()=>{
    let productDetails = document.getElementById("productDetails")
    let product =JSON.parse( localStorage.getItem("products"))
    let pid =JSON.parse( localStorage.getItem("selectedProductid"))
    console.log(pid)
    if(product && pid){
        let selectedProduct =product.find(val =>val.id == pid)
        if(selectedProduct){
            console.log(selectedProduct.images[0])
            productDetails.innerHTML=`
            <div class="product-cnt">
            <img src=${selectedProduct.images[0]} height="120" alt="img"/>
            <div class="product-details">
            <h1 class="p-title">${selectedProduct.title}</h1>
            <p><b>category :</b>${selectedProduct.category}</p>
            <p><b>Description :</b>${selectedProduct.description}</p>
            <p><b>Rating :</b>${selectedProduct.rating}</p>
            <p><b>Price : $</b>${selectedProduct.price}</p>
            <button class = "add-to-cart" id="addToCart">Add To Cart</button>
            </div>
            </div>
            <div class="review">
            <h1>Product Review</h1>
            <hr/>
            ${
                selectedProduct.reviews.map((review)=>
                    `<div calss ="review-cnt">
                <p class="comment"><b>Comment : </b>${review.comment}</p>
                <p class="rating"><b>rating : </b> ${review.rating}</p>
                <p class="reviewerName"><b>reviewerName : </b> ${review.reviewerName}</p>
                </div>
                <hr/>
                `
            )
            }
            </div>
            `
            document.getElementById("addToCart").addEventListener("click",()=>
            addToCart (selectedProduct)
            )
        }
        else{
            productDetails.innerHTML="No product found"
        }
    }
    else{
        productDetails.innerHTML="No product selected"   
    }

})
function addToCart(product){""
    let cart = JSON.parse(localStorage.getItem("cart")) ||[]
    cart.push(product)
    localStorage.setItem("cart",JSON.stringify(cart))
    alert("product added to the cart")

}