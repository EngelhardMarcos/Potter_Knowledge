/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

//Harry potter related

let hpCharacters = []

let characterList = document.getElementById('characterlist')
let characterModal = document.getElementById('charactermodal')
let searchBar = document.getElementById('searchBar')
let i = 0;
let j = 0;

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    //conver name to lowercase
    //convert house to lowercase
    const filteredCharacters = hpCharacters.filter((character) => {
        return (character.name.toLowerCase().includes(searchString) || 
        character.house.toLowerCase().includes(searchString))
     });
    displayCharacters(filteredCharacters);
    displayModal(filteredCharacters);
});

const loadCharacters = async() => {
    try {
        const res = await fetch('https://hp-api.onrender.com/api/characters')
        hpCharacters = await res.json();              
        displayCharacters(hpCharacters);
        displayModal(hpCharacters);
    } catch (err) {
        console.error(err)
    }   
}

const displayCharacters = (characters) => {
    j = 0;
    const htmlString = characters
        .map((character) => {
            j++;
            return `<div class="col-md-6 col-lg-4 mb-5">
                <div class="portfolio-item mx-0" data-bs-toggle="modal" data-bs-target="#portfolioModal${j}">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <h2 class= "name"> ${character.name}</h2>
                    <p id="house"> House: ${character.house}</p>
                    <img class="img-portfolio" src = "${character.image}"></img>
                    </div>
                </div>`
        }).join();
        characterList.innerHTML = htmlString;
};

const displayModal = (characters) => {
    i = 0;
    const stringtxt = characters
        .map((character) => {
            i++;
            return `<div class="portfolio-modal modal fade" id="portfolioModal${i}" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">${character.name}</h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image-->
                                    <img class="img-fluid rounded mb-5" src="${character.image}" />
                                    <!-- Portfolio Modal - Text-->
                                    <p class="mb-4">House: ${character.house}</p>
                                    <p class="mb-4">Date of birth: ${character.dateOfBirth}</p>
                                    <p class="mb-4">Eye Colour: ${character.eyeColour}</p>
                                    <p class="mb-4">Hair Colour: ${character.hairColour}</p>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <p class="fas fa-xmark fa-fw pe-none"></p>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        }).join();
        characterModal.innerHTML = stringtxt;
};


loadCharacters();
//From the template
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
