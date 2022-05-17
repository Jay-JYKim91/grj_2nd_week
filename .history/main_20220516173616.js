// Open modal
document.getElementById('openModalBtn').addEventListener('click', openOrCloseModal);
document.getElementsByClassName('close')[0].addEventListener('click', openOrCloseModal);

function openOrCloseModal () {
    document.getElementById('addItemModal').classList.toggle('opened');
}

// Add new item
document.getElementsByClassName('modal-content')[0].addEventListener('submit', clickAddItemBtn);

function clickAddItemBtn(event) {
    console.log(event);
    event.preventDefault();
    openOrCloseModal();
    // console.log(event);
}