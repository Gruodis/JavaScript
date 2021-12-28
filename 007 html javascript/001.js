let box = document.querySelector('.box');



box.addEventListener('click',
    function () {
        box.classList.toggle('right');
        box.classList.toggle('left');
    });

/******************
 * 
 * 
 * 
 * 
 * 
 * 
 * */

let box3 = document.querySelector('.box3');
box3.style.left = '0';


box3.addEventListener('click',
    function () {

        if (box3.dataset.leftRight == 'right') {

            box3.style.left = '0';
            box3.dataset.leftRight = 'left';

        }
        else {

            box3.style.left = 'calc(100% - 120px)';
            box3.dataset.leftRight = 'right';

        }
        // box3.classList.toggle('right');
        // box3.classList.toggle('left');
    }
);