const commentsSidebar = document.getElementById('comments-sidebar');
const closeCommentsButton = document.getElementById('close-comments-button');
    closeCommentsButton.onclick = () => {
        commentsSidebar.style.display = 'none';
    }

const commentContainer = document.getElementById('comment-container');

async function fetchNotes()
{ 
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if(!response.ok)
    {
        throw new Error(`Błąd HTTP: $response.status`);
    }
        
    const notes = await response.json();
    return notes.slice(0, 10);
}

async function fetchCommentsForNote(noteId)
{
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${noteId}`);

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    const comments = await response.json();
    return comments;
}

function clearComments()
{
    commentContainer.innerHTML = '';
}

async function displayCommentsForNote(noteId)
{
    
    commentsSidebar.style.display = 'block';

    clearComments();

    const comments = await fetchCommentsForNote(noteId);

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = `Komentarz ${comment.id}: ${comment.body}`;
        commentContainer.appendChild(commentDiv);
    });
}

function createNoteElement(note)
{
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.textContent = `${note.id}: ${note.title}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Usuń';
    deleteButton.id = 'delete-button';

     deleteButton.addEventListener('click', function() {
        noteDiv.remove();
    });

    const commentButton = document.createElement('button');
    commentButton.textContent = 'Pokaż komentarze';
    commentButton.id = 'comment-button';

    commentButton.addEventListener('click', function() {
        displayCommentsForNote(note.id);
    })    

    noteDiv.appendChild(deleteButton);
    noteDiv.appendChild(commentButton);
    return noteDiv;
}

async function renderNotesList()
{

    const noteContainer = document.querySelector('.notes-container');

    try
    {

        const notes = await fetchNotes();

        notes.forEach(note => {
            const noteDiv = createNoteElement(note);
            noteContainer.appendChild(noteDiv);
        });

    } catch(error)
    {
        const errorDiv = document.createElement('div');
        errorDiv.style.color = "red";
        errorDiv.textContent = 'Wystąpił błąd!';
        noteContainer.appendChild(errorDiv);
    }

}

renderNotesList();

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