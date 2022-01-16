const changeVisibility = () => {
    document.getElementById('textContainer').classList.add('invisible-text');
}

const deleteTextContainer = () => {
    document.getElementById('textContainer').remove();
}

document.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
        deleteTextContainer();
    }
})