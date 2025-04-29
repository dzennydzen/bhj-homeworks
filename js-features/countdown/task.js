const timer = document.getElementById('timer');

function formatter(time) {
    const minutes = Math.floor(time / 60);
    const hours = Math.floor(minutes / 60);
    const secs = time % 60;

    return [minutes, hours, secs].map(part => part.toString().padStart(2,'0'))
    .join(':')
}

function count(element) {
    element = +element;

    if (element < 0) {
        alert('Вы победили в конкурсе!');
        window.location.href = 'https://flibusta.su/book/353718-igrok/d/?f=fb2.zip';
        return;
    }

    timer.innerHTML = formatter(element);

    setTimeout(() => {
        count(element - 1);
    }, 100)
}

count(timer.innerHTML)





