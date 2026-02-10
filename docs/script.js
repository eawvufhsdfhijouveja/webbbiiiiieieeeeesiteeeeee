// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Hamburger menu
function toggleHamburgerMenu(menuId) {
    const menu = document.getElementById(menuId);
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Stats update
function updateStats(statsElementId, newStats) {
    const statsElement = document.getElementById(statsElementId);
    if (statsElement) {
        statsElement.innerText = newStats;
    }
}

// Month photo update
function updateMonthPhoto(photoElementId, newPhotoUrl) {
    const photoElement = document.getElementById(photoElementId);
    if (photoElement) {
        photoElement.src = newPhotoUrl;
    }
}

// Initial call for setting up events
document.addEventListener("DOMContentLoaded", function() {
    // Example of setting up event listeners if needed
    document.getElementById("openModalButton").onclick = () => openModal('myModal');
    document.getElementById("closeModalButton").onclick = () => closeModal('myModal');
    document.getElementById("hamburgerMenuButton").onclick = () => toggleHamburgerMenu('hamburgerMenu');
});
