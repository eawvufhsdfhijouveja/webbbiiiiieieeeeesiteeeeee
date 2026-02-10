// ==================== MODAL FUNCTIONALITY ====================
const joinModal = document.getElementById('joinModal');
const joinBtns = document.querySelectorAll('#joinBtn, #joinBtnHero');
const modalClose = document.querySelector('.modal-close');

// Open modal when clicking join button
joinBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        joinModal.classList.add('active');
    });
});

// Close modal when clicking the X
modalClose.addEventListener('click', () => {
    joinModal.classList.remove('active');
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === joinModal) {
        joinModal.classList.remove('active');
    }
});

// ==================== HAMBURGER MENU ====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-menu a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==================== STATS UPDATE ====================
function updateStats() {
    const totalDistance = document.getElementById('totalDistance');
    const totalDrivers = document.getElementById('totalDrivers');
    const jobsCompleted = document.getElementById('jobsCompleted');

    // Placeholder values - vervang met je Trucksbook API call
    if (totalDistance) totalDistance.textContent = '0 KM';
    if (totalDrivers) totalDrivers.textContent = '0';
    if (jobsCompleted) jobsCompleted.textContent = '0';

    // Hier kun je je Trucksbook API call toevoegen:
    // fetch('YOUR_TRUCKSBOOK_API_ENDPOINT')
    //     .then(response => response.json())
    //     .then(data => {
    //         totalDistance.textContent = data.totalDistance + ' KM';
    //         totalDrivers.textContent = data.totalDrivers;
    //         jobsCompleted.textContent = data.jobsCompleted;
    //     })
    //     .catch(error => console.error('Error fetching stats:', error));
}

// Update stats on page load
window.addEventListener('load', updateStats);

// ==================== MONTH PHOTO UPDATE ====================
// Voor later: je kunt de foto van de maand hier updaten
const monthPhoto = {
    'Februari 2026': 'INSERT_PHOTO_URL_HERE'
};

function updateMonthPhoto() {
    const photoImg = document.getElementById('monthPhoto');
    const monthLabel = document.getElementById('monthLabel');
    
    // Huidige maand en jaar
    const now = new Date();
    const monthNames = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni',
                        'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];
    const currentMonth = monthNames[now.getMonth()] + ' ' + now.getFullYear();
    
    if (photoImg && monthLabel) {
        // Momenteel placeholder - voeg foto's toe per maand
        monthLabel.textContent = currentMonth;
    }
}

// Update photo on page load
window.addEventListener('load', updateMonthPhoto);