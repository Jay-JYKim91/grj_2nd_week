// Open modal
document.getElementById('openModalBtn').addEventListener('click', openOrCloseModal)

function openOrCloseModal () {
    document.getElementById('addItemModal').classList.toggle('opened');
}