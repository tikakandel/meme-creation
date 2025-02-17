const baseFontClasses = 'position-absolute text-center w-100 text-white'

const radioElementsPositions = document.querySelectorAll('.text-position');
const radioElementsColour = document.querySelectorAll('.text-colour');

const removeArrayItem = (arr, value) => { 
    return arr.filter(item => { 
        return item != value; 
    });
};


const renderTextPosition = (event) => {

    const position = event.target.getAttribute('id');

    const captionEL = document.querySelector('#displayCaption');

    let result;

    if (position == 'top') {result = 'top-0'};
    if (position == 'middle') {result = 'top-50'};
    if (position == 'bottom') {result = 'bottom-0'};

    captionEL.setAttribute('class', `${result} ${baseFontClasses}`);
};


document
    .querySelector('#caption')
    .addEventListener('keyup', event => {

        const value = document.querySelector('#caption').value.trim();
        const captionEL = document.querySelector('#displayCaption');

        captionEL.textContent = value;
    });

radioElementsPositions.forEach(radioEL => {
    radioEL .addEventListener('click', renderTextPosition);
});

// const renderTextColour = (event) => {

//     const captionEL = document.querySelector('#displayCaption');
//     const captionELClasses = captionEL.getAttribute('class');

//     const splitClasses = captionELClasses.split(' ');

//     const currentTextColour = () {
//     }
    
//     splitClasses.includes('white') ?
//         const currentTextColour = splitClasses.find(subclass => subclass == 'white' ) :



    
//     splitClasses.find(subclass => subclass == 'white' );
//     const currentTextColourWhite = splitClasses.find(subclass => subclass == 'black' );

//     const newColour = event.target.getAttribute('id');

//     if(currentTextColour.includes(newColour)) {
//         return
//     }
//     else {
 
//         const removeClassArray = splitClasses.filter(item => {
//             return item !== currentTextColour
//         });
    
//         console.log(removeClassArray);
         
//         removeClassArray.push(newColour);
    
//         const newClasses = removeClassArray.join(' ');
    
//         captionEL.setAttribute('class', newClasses);
//     }
// };


// radioElementsColour.forEach(radioEL => {
//     radioEL .addEventListener('click', renderTextColour);
// });