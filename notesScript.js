const notes =
[
    {id: 1, note: 'abc'},
    {id: 2, note: 'def'},
    {id: 3, note: 'ghi'}
];

function createNoteTemplate(id, note)
{
    return {
        id: id,
        title: `Notatka ${id}`,
        body: note,
        createdAt: new Date().toISOString()
    };
}

function addNote(notes)
{
    const cards = [];
    
    notes.forEach(element =>
    {
        const content = createNoteTemplate(element.id, element.note);
        cards.push(content);
    });

    return cards;
}

const cards = addNote(notes);

console.log(cards);