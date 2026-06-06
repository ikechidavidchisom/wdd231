const cards =
document.querySelectorAll('.feature-card');

cards.forEach(card=>{

card.addEventListener('mouseenter',()=>{

card.style.transform='translateY(-8px)';

});

card.addEventListener('mouseleave',()=>{

card.style.transform='translateY(0)';

});

});