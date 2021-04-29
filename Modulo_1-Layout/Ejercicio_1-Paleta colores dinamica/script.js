document.querySelectorAll('.color-box-text').forEach(element => {
    element.addEventListener('click', () => {
        let text = window.getComputedStyle(element,':after')['content'].replace(/['"]+/g, '');
        navigator.clipboard.writeText(text);
        window.alert("El siguiente texto se ha copiado en el portapapeles:\n"+text)
    });
});
