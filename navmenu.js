// Navigation menu data
const navData = [
    {"title": "home", "url": "/"},
    {"title": "producten", "url": "/producten/"},
    {"title": "Over ons", "url": "/overons/"},
    {"title": "contact", "url": "/contact/"}
];

// Function to generate navigation menu
function generateNavMenu(data) {
    // Create the nav element
    const nav = document.createElement('nav');
    nav.className = 'nav-menu';
    
    // Create the unordered list
    const ul = document.createElement('ul');
    
    // Loop through the JSON data and create list items
    data.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        // Set the link properties
        a.href = item.url;
        // Capitalize the first letter of each title for better presentation
        a.textContent = item.title.charAt(0).toUpperCase() + item.title.slice(1);
        
        // Append the anchor to the list item
        li.appendChild(a);
        
        // Append the list item to the unordered list
        ul.appendChild(li);
    });
    
    // Append the unordered list to the nav element
    nav.appendChild(ul);
    
    return nav;
}

// Function to toggle hamburger menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
    
    // Toggle the hamburger button active state as well
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    hamburgerBtn.classList.toggle('active');
}

// Initialize the menu when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the container for the navigation menu
    const navContainer = document.getElementById('navMenu');
    
    // Generate and append the navigation menu
    const navMenu = generateNavMenu(navData);
    navContainer.appendChild(navMenu);
    
    // Add event listener to hamburger button
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    hamburgerBtn.addEventListener('click', toggleMenu);
    
    // Check for window resize to handle responsive behavior
    window.addEventListener('resize', () => {
        const navMenu = document.querySelector('.nav-menu');
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        
        // Reset classes if window is resized beyond mobile breakpoint
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }
    });
});