document.querySelector('#chats_button').addEventListener('click', function(event) {
    openChatsPage("chats.html")
});

document.querySelector('#videochats_button').addEventListener('click', function(event) {
    openChatsPage("videochats.html")
});

document.querySelector('#documents_button').addEventListener('click', function(event) {
    openChatsPage("Documents.html")
});

document.querySelector('.ToProfile').addEventListener('click', function(event) {
    openChatsPage("index.html")
});

function openChatsPage(pageURL){
    window.location.replace(pageURL);
}