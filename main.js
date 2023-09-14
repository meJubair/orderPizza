document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("pizza-form");
    const totalPrice = document.getElementById("tot_Cost");
    /* const totPrice = document.getElementsById("to_Cart"); */

    form.addEventListener("change", updateTotal);

    function updateTotal() {
        const selectedSize = parseFloat(getSelectedValue("pizza-size"));
        const selectedToppings = getSelectedToppings("topping");
        const deliveryOption = (document.querySelector(("#delivery-option"))).value;
    
        let basePrice = 0;
        switch (selectedSize) {
            case 2:
                basePrice = 9.90;
                break;
            case 4:
                basePrice = 12.90;
                break;
            case 6:
                basePrice = 14.90;
                break;
            case 8:
                basePrice = 19.90;
                break;
            default:
                basePrice = 0;
        }
    
        let toppingsCost = selectedToppings.length > 4 ? (selectedToppings.length - 4) * 0.50 : 0;
        
        let deliveryFee = 0;
    
        if (deliveryOption === "home-delivery") {
            deliveryFee = 5.00;
            document.getElementById("address").style.display = "block";
            document.getElementById("u_Address").style.display = "block";
        } else {
            deliveryFee = 0;
            document.getElementById("address").style.display = "none";
            document.getElementById("u_Address").style.display = "none";
        }
    
        let totalCost = basePrice + toppingsCost + deliveryFee;
    
        totalPrice.textContent = `€${totalCost.toFixed(2)}`;
        /* totPrice.textContent = totalPrice; */

        // Summary Info
        const custName = document.querySelector('#customer_name'); // input from customer
        console.log(custName.value);
        const cName = document.querySelector("#c_Name"); // customer name in the summary info
        cName.textContent =  `${custName.value}`; //custName.value;

        //cust_Name
        const custPhn = document.querySelector('#customer_phone'); //input from customer
        const cPhn = document.querySelector("#c_Phn"); // customer phoneNum in the summary info
        cPhn.textContent = `${custPhn.value}`;

        //cust_Phone
        const delAddress = document.querySelector("#del_Address"); // for summary part
        const custAddress = document.querySelector("#customer-address"); //input from customer
        delAddress.textContent = custAddress.value;

        //pizza size
        const sizeInput = document.querySelectorAll('input[type=radio]:checked').value; // pizza size input from customer
        console.log(sizeInput)
        const pSize = document.querySelector("p_Size");
        pSize.textContent = sizeInput;

        

    }




    // Functions
    function getSelectedValue(name) {
        const selected = document.querySelector(`input[name="${name}"]:checked`);
        return selected ? selected.value : "0";
    }

    console.log(getSelectedValue());

    
    function getOption() {
        selectElement = document.querySelector('#delivery-option');
        output = selectElement.value;
        //document.querySelector('.output').textContent = output;
    }

    console.log(getOption());


    function getSelectedToppings(name) {
        const selectedToppings = Array.from(document.querySelectorAll(`input[name="${name}"]:checked`));
        return selectedToppings.map(topping => topping.value);
    }
    console.log(selectedToppings.map(topping => topping.value));
});










// Summary Info

// toppings
/* const toppingInput = document.querySelectorAll('input[type=checkbox]');
let ul = document.getElementById("p_Tops");
ul.innerHTML = '';
toppingInput.forEach((top) => {
    if (top.checked) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(top.name));
        ul.appendChild(li);
    } */


// delivery Option
/* function getOption() {
    const selectElement = document.querySelector('#delivery-option');*/
   /*  const delInfo = document.querySelector('#del_Info'); 

    if (deliveryOption === "home-delivery") {
    
        delInfo.textContent = "Home Delivery";
    }

    else if (deliveryOption === "pick-up") {
        
        delInfo.textContent = "Pick-up";
    }

    else {
        delInfo.textContent = "Dine-in";
    } */



/* const topsInput = document.querySelectorAll('input[type=checkbox]:checked'); // pizza size input from customer
console.log(topsInput)


const pTops = document.querySelector("p_Tops")


const select = document.getElementById('delivery-option');
const currentOpt = select.options[select.selectedIndex]; 
console.log(currentOpt)





pSize.textContent = ""; */




/* // this part is copied from pair task with Mariia.
const toppingInput = document.querySelectorAll('input[type=checkbox]'); // toppings input from customer
let pTops = document.getElementById("userToppings");
    pTops.innerHTML = '';
    toppingInput.forEach((top) => {
        if (top.checked) {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(top.name));
            ul.appendChild(li);
        }
    }); */
