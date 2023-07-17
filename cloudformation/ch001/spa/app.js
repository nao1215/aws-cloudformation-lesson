function showContent(contentId) {
    let content = document.getElementById('content');
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                content.innerHTML = xhr.responseText;
            } else {
                content.innerHTML = 'Error: ' + xhr.status;
            }
        }
    };

    xhr.open('GET', contentId + '.html', true);
    xhr.send();
}

function handleNavigation() {
    let links = document.getElementsByTagName('a');
    for (const element of links) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            let contentId = this.getAttribute('href').substring(1);
            showContent(contentId);
        });
    }
}

window.addEventListener('DOMContentLoaded', function() {
    handleNavigation();
    showContent('home');
});