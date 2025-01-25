let id = 'home';
document.getElementById(id).classList.add('current');
function loadContent(page) {
    console.log(id);
    document.getElementById(id).classList.remove('current');
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
    id = page.slice(5, page.length-5);
    document.getElementById(id).classList.add('current');
}