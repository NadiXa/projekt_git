const notes =
[
    {id: 1, note: 'abc'},
    {id: 2, note: 'def'},
    {id: 3, note: 'ghi'}
];

function addNote(notes)
{

    const noteContainer = document.querySelector('.notes-container');

    notes.forEach(element => 
    {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.textContent = `Notatka ${element.id}: ${element.note}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Usuń';
        deleteButton.id = 'delete-button';

        deleteButton.addEventListener('click', function() {
            noteDiv.remove();
        });

        noteDiv.appendChild(deleteButton);

        noteContainer.appendChild(noteDiv);

    });

}

addNote(notes);