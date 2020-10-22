const addButton = document.getElementById('addbutton');
const modal = document.querySelector('.container-modal');
const notes = [];
const noteList = document.querySelector('.lista');

const addNote = () => {
  const input = document.querySelector('input').value;
  const noteObj = {
    content: input,
    id: notes.length,
  };
  notes.push(noteObj);
  populateList(notes, noteList);
};

function populateList(notes = [], noteList) {
  noteList.innerHTML = notes.map((note) => {
    return `<div class="container-item" data-index=${note.id}>
        <p>${note.content}</p>
        <button type="button" class="btn btn-primary">view detail</button>
      </div>`;
  });
  document.querySelector('input').value = '';
}

function checkIfModal(e) {
  if (e.target.classList.contains('btn-primary')) {
    toggleModal();
    const el = e.target.parentNode;
    const id = el.dataset.index;
    modal.innerHTML = `<div class="modal-content"><span class="close-button">x</span><h2>${notes[id].content}</h2></div>`;
  }
}

function toggleModal() {
  modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
  if (event.target === modal || event.target.classList.contains("close-button")) {
    toggleModal();
  }
}

addButton.addEventListener('click', addNote);
document.addEventListener('click', checkIfModal); // document.addEventListener('click', () => {})
window.addEventListener('click', windowOnClick);
