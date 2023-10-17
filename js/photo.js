var wrap = document.getElementsByClassName('wrap')[0];
var cards = wrap.getElementsByClassName('card');
console.log(wrap);
console.log(cards);
for(var i = 0;i<cards.length; i++){
    cards[i].addEventListener('mouseover',function(){
        removeActive();
        this.className ="card active"
    })
}
function removeActive(){
    for(var i = 0; i<cards.length;i++){
        cards[i].className = "card";
    }
}
