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

async function fetchNotesComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');

    if (!response.ok) {
        throw new Error(`Błąd HTTP: ${response.status}`);
    }

    const comments = await response.json();
    return comments.slice(0, 50);
}

function createNoteElement(post, comments)
{
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.textContent = `${post.id}: ${post.title}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Usuń';
    deleteButton.id = 'delete-button';

     deleteButton.addEventListener('click', function() {
        noteDiv.remove();
    });

    //probably to seperate function

    const commentButton = document.createElement('button');
    commentButton.textContent = 'Pokaż komentarze';
    commentButton.id = 'comment-button';

    const commentContainer = document.createElement('div');
    commentContainer.id = 'comment-container';
    commentContainer.style.display = 'none';

    const postComments = comments.filter(comment => comment.postId === post.id);
    postComments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = `Komentarz ${comment.id}: ${comment.body}`;
        commentContainer.appendChild(commentDiv);
    });

    commentButton.addEventListener('click', function() {
        if (commentContainer.style.display === 'none') {
            commentContainer.style.display = 'block';
        } else {
            commentContainer.style.display = 'none';
        }
    });

    const closeCommentsButton = document.createElement('button');
    closeCommentsButton.textContent = 'x';
    closeCommentsButton.id = 'close-comments-button';

    closeCommentsButton.addEventListener('click', function() {
        commentContainer.remove();
    })

    //////////////////////////////////////////////////////

    noteDiv.appendChild(deleteButton);
    noteDiv.appendChild(commentButton);
    noteDiv.appendChild(commentContainer);
    commentContainer.appendChild(closeCommentsButton);
    return noteDiv;
}

async function renderNotesList()
{

    const noteContainer = document.querySelector('.notes-container');

    try
    {

        const notes = await fetchNotes();
        const comments = await fetchNotesComments();

        notes.forEach(post => {
            const noteDiv = createNoteElement(post, comments);
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