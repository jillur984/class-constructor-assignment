let submitBtn = document.querySelector("#submit")
let resultDiv = document.querySelector("#resultList")



class Products{
  constructor(name, price, quantity){
    this.name = name
    this.price = price
    this.quantity = quantity
    }
    getTotalCost(){
      return this.price * this.quantity
    }

    displayItem(){
      return `${this.name}  - Price: ${this.price} x Quantity: ${this.quantity} = ${this.getTotalCost()}`
    }
  

}

submitBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  console.log("the button is clicked");

let nameValue = document.querySelector("#pName").value
let priceValue = document.querySelector("#price").value
let qtyValue = document.querySelector("#quantity").value

  if(nameValue && !isNaN(priceValue) && !isNaN(qtyValue)){
    const Result = new Products(nameValue, priceValue, qtyValue)
    const itemElement = document.createElement("li")
    const itemText = Result.displayItem()
    itemElement.textContent = itemText
    resultDiv.appendChild(itemElement)

 document.querySelector("#pName").value = ""
 document.querySelector("#price").value =""
 document.querySelector("#quantity").value =""


  }else{
    alert("Please fillup the valid inputs")
  }


})





