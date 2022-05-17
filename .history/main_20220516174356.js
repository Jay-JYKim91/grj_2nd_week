// Open modal
document.getElementById('openModalBtn').addEventListener('click', openOrCloseModal);
document.getElementsByClassName('close')[0].addEventListener('click', openOrCloseModal);

function openOrCloseModal () {
    document.getElementById('addItemModal').classList.toggle('opened');
}

// Add new item
document.getElementsByClassName('modal-content')[0].addEventListener('submit', clickAddItemBtn);

function addItem(name, imageURL, description) {
    const asideSpan = document.createElement('span');
    asideSpan.textContent = name;
    document.getElementsByTagName('aside')[0].appendChild(asideSpan);
    console.log(name, imageURL, description)
}

function clickAddItemBtn(event) {
    event.preventDefault();
    addItem(document.getElementById('name').value,
            document.getElementById('imageURL').value,
            document.getElementById('description').value)
    openOrCloseModal();
}