// import $ from "jquery";


// document.addEventListener('click',e=>{
//     const isDropdownButton=e.target.maches("[data-dropdown-button]")
//     if(!isDropdownButton && e.target.closest('[data-dropdown]')) return
    
//     let currentDropdown
//     if(isDropdownButton)
//     {
//         currentDropdown=e.target.closest('[data-dropdown]')
//         currentDropdown.classList.toggle('active')
//         // eslint-disable-next-line no-unused-expressions
        
//     }

//     document.querySelectorAll("[dara-dropdown].active").forEach(dropdown=>{
//         if(dropdown===currentDropdown) return
//         dropdown.classList.remove('active')
//     })

// })

// $(document).on('click', 'div .Nav-Dropdown', function (e) {
//     e.stopPropagation();
//   });