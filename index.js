var btnPlus = document.querySelectorAll(".btnPlus")
var btnMoins = document.querySelectorAll('.btnMoins')
var trash = document.querySelectorAll(".fa-trash")
// var trash = document.getElementsByClassName("fa-trash")
// console.log(trash)
var hearts = document.querySelectorAll('.fa-heart')

for(let i = 0; i < btnPlus.length;i++){
    btnPlus[i].addEventListener('click',function(){
        btnPlus[i].previousElementSibling.innerText++
        SommeTotal()
    })
}


for(let i = 0; i<btnMoins.length;i++){
    btnMoins[i].addEventListener('click',function() {
        if(btnMoins[i].nextElementSibling.innerText>0){
            btnMoins[i].nextElementSibling.innerText--
            SommeTotal()
        }        
    })
}


for(let i = 0;i< trash.length; i++){
    trash[i].addEventListener('click',function(){
        trash[i].parentElement.remove()
        SommeTotal()
        // console.log(trash)
    })
}


for(let i = 0;i<hearts.length;i++){
    hearts[i].addEventListener('click',function(){
        hearts[i].classList.toggle('essia')
    })
}


function SommeTotal(){
    var price = document.querySelectorAll('.price')
    var qte = document.querySelectorAll('.qte')
    var total = document.querySelector('#total')


    var resultat = 0
    
    for(let i = 0; i< price.length;  i++){
        resultat = resultat + price[i].innerText * qte[i].innerText
    }

    total.innerText = resultat
}
