function menu_btn() {
    let menubardiv = document.getElementsByClassName('menu-bar-div');

    let menubar = document.getElementsByClassName('menu-bar');
    let meunbtnline1 = document.getElementsByClassName('menu-btn-line1');
    let meunbtnline2 = document.getElementsByClassName('menu-btn-line2');
    let meunbtnline3 = document.getElementsByClassName('menu-btn-line3');

    if (menubar[0].classList.length == 6) {

        menubar[0].classList.add('hidden');

        meunbtnline1[0].classList.remove('rotate-45', 'translate-y-2');

        meunbtnline2[0].classList.remove('opacity-0');

        meunbtnline3[0].classList.remove('-rotate-45', '-translate-y-1');



    }
    else if (menubar[0].classList.length == 7) {

        menubar[0].classList.remove('hidden');

        meunbtnline1[0].classList.add('rotate-45', 'translate-y-2');

        meunbtnline2[0].classList.add('opacity-0');

        meunbtnline3[0].classList.add('-rotate-45', '-translate-y-1');


    }
}