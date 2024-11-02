
/*
    Mobile Nav Toggling
    ----------------------------
    This section works by using an event listener to watch for clicks on the hamburger menu element, when there is a click
    classList.toggle looks at the classes currently assigned to the element, adds the designated class name if its not there or removes it if it is there.
    This allows us to add and remove classes from an element on click to ineffect change the css of that element

*/
    var CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation");
    const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

    CShamburgerMenu.addEventListener('click', function() {
        CShamburgerMenu.classList.toggle("cs-active");
        CSnavbarMenu.classList.toggle("cs-active");
        CSbody.classList.toggle("cs-open");
        // run the function to check the aria-expanded value
        ariaExpanded();
    });


    /*
        Accessible Rich Internet Applications (ARIA) Menu Toggle
        --------------------------------------------------------------
        What this is doing is basically updating the technology for screen readers on the status of the menu (being visable or not)
        This is essential to make the menu collapse-expand functionality work for accessibility related technologies like screen readers
    */
    function ariaExpanded() {
        const csUL = document.querySelector('#cs-expanded');
        const csExpanded = csUL.getAttribute('aria-expanded');

        if (csExpanded === 'false') {
            csUL.setAttribute('aria-expanded', 'true');
        } else {
            csUL.setAttribute('aria-expanded', 'false');
        }
    }

    /*
        Mobile Nav Item Dropdown Toggle
        --------------------------------------------
        What this section is doing watching for clicks on each item in the mobile nav to expand the dropdown for that item if it is clicked.
        It does this by addings/removing the cs-active class on each click with the classList.toggle method
    */
    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
        for (const item of dropDowns) {

            const onClick = () => {
                item.classList.toggle('cs-active')
            }

            item.addEventListener('click', onClick)
        }

        /*
            Dark Mode Toggle
            -------------------------------------------
            This is what makes the dark mode toggle funtionality. It also saves the users preference in local storage.

        */

        const $btn = window['dark-mode-toggle'] //this is the literal toggle the user sees

        const bodyClassList = document.body.classList
        const storageKey = 'isDarkModeEnabled' // name of what is stored in localstorage for the users dark mode preference

        let isEnabled = localStorage.getItem(storageKey) // function that returns what is in localStorage for darkmode preference

        // swaps class for darkmode on or off of the webpage when the toggle is set to true
        const update = () => {
            bodyClassList.toggle('dark-mode', isEnabled)
        }

        // the function that saves preference to local storage
        const save = () => {
            if (isEnabled) localStorage.setItem(storageKey, true)
            else localStorage.removeItem(storageKey)
        }


        const toggle = () => {
            isEnabled = !isEnabled //change the status to opposite of what is in local storage

            update() // actually swap darkmode on or off
            save() //saves the status in local storage
        }

        update()

        $btn.addEventListener('click', toggle)
