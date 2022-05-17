// Open modal
document.getElementById('openModalBtn').addEventListener('click', openOrCloseModal);
document.getElementsByClassName('close')[0].addEventListener('click', openOrCloseModal);

function openOrCloseModal () {
    document.getElementById('addItemModal').classList.toggle('opened');
}

// Add new item
function clickAddItemBtn(event) {
    event.prevenDefault();
    
}