function score(){
var left = [document.querySelectorAll('[id="m'+document.getElementById('left_card_0').getElementsByClassName("cc vol_on")[0].getAttribute('data-idx')+'"][class="match-meaning"]')[0].innerText,document.querySelectorAll('[id="m'+document.getElementById('left_card_1').getElementsByClassName("cc vol_on")[0].getAttribute('data-idx')+'"][class="match-meaning"]')[0].innerText,document.querySelectorAll('[id="m'+document.getElementById('left_card_2').getElementsByClassName("cc vol_on")[0].getAttribute('data-idx')+'"][class="match-meaning"]')[0].innerText,document.querySelectorAll('[id="m'+document.getElementById('left_card_3').getElementsByClassName("cc vol_on")[0].getAttribute('data-idx')+'"][class="match-meaning"]')[0].innerText]
var right = [document.getElementById('right_card_0').innerText,document.getElementById('right_card_1').innerText,document.getElementById('right_card_2').innerText,document.getElementById('right_card_3').innerText]
for (var i in left){
for (var n in right){
if (left[i].indexOf(right[n])!=-1){
console.log((Number(i)+1)+','+(Number(n)+1))
}
}
}
}