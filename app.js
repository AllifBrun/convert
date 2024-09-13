const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const button = document.querySelector(".btn");
const footer = document.querySelector("main footer");
const description = document.getElementById('description');
const result = document.getElementById("result");




amount.addEventListener('input', ()=>{
    const hascharacters = /\D+/g;
    amount.value = amount.value.replace(hascharacters, '')

})


form.onsubmit = (e)=>{
    e.preventDefault()
    
    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, 'US$')
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
}
}

function convertCurrency(amount, price, symbol){

    try{

        description.textContent = `${symbol} 1 = ${price}`
        
        
        let valor = String(amount * price);
        let total = parseFloat(valor).toFixed(2);

    
       
        result.textContent = `${total} Reais`

        footer.classList.add("show-result")

    }catch(error){
        console.log(error)
        footer.classList.remove("show-result")
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}

