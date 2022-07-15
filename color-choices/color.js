const doc = document,
select = doc.querySelector('select'),
html = doc.querySelector('.output');

select.addEventListener('change', () => {
    const choice = select.value;

    switch (choice) {
        case 'white':
            update('white', 'black');
            break;

        case 'blue':
            update('blue', 'white');
            break;

        case 'orange':
            update('orange', 'black');
            break;

        case 'pink':
            update('pink', 'crimson')
            break;

        case 'red':
            update('red', 'white');
            break;
    }
});

function update (bgColor, textColor){
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}
