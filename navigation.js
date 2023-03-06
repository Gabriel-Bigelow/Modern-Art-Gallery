const navButtonMouseOver = (event, element1, element2 ) => {
    const navButtons = document.getElementsByClassName('nav-button');

    console.log(navButtons[0].children[0]);

    const text = navButtons[0].children[element1].children[0];
    const arrow = navButtons[0].children[element2].children[0];

    if (event.target.parentNode.classList.value.includes('nav-button') || event.target.parentNode.parentNode.classList.value.includes('nav-button')) {
        arrow.style.backgroundColor = '#151515';
        text.style.backgroundColor = '#d5966C';
        console.log(text);
    }
}

const navButtonMouseOut = (element1, element2) => {
    const navButtons = document.getElementsByClassName('nav-button');

    const text = navButtons[0].children[element1].children[0];
    const arrow = navButtons[0].children[element2].children[0];

    arrow.style.backgroundColor = '';
    text.style.backgroundColor = '';
}