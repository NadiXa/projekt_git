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

        noteContainer.appendChild(noteDiv);

    });

    for(let i=0; i<notes.id; i++)
    {

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Usuń";
    deleteButton.id = 'delete-button';
    deleteButton.onclick = () =>
    {
        const newNote = document.getElementById(`noteDiv-${notes.id}`);
        noteContainer.removeChild(newNote);
    }
    
    newNote.appendChild(deleteButton);
    }

}

addNote(notes);

// async functions

async function fetchData() 
{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Dane zostały pobrane.");
        }, 2000); //simulating delay
    });
}

async function showData()
{
    const dane = await fetchData();
    console.log(dane);
}

showData();

//async function with open API

async function fetchPublicData() 
{
    try 
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if(!response.ok)
        {
            throw new Error('Błąd HTTP: $response.status');
        }
        const data = await response.json();
        console.log("Pobrane dane: ", data);
    } catch (error)
    {
        console.error("Wystąpił błąd: ", error);
    }
}

fetchPublicData();