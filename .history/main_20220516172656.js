// Open modal
document.getElementById('openModalBtn').addEventListener('click', openOrCloseModal);
document.getElementsByClassName('close')[0].addEventListener('click', openOrCloseModal);

function openOrCloseModal () {
    document.getElementById('addItemModal').classList.toggle('opened');
}

// Add new item
document.getElementById('addItemBtn').addEventListener('submit', clickAddItemBtn(e));

function clickAddItemBtn(event) {
    event.preventDefault();
    console.log(event);
}