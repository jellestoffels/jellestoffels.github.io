// Portfolio Items Generation
function generatePortfolioItems() {
    const grid = document.querySelector('.portfolio-grid');
    const imageFolder = 'https://jellestoffels.github.io/images'; // Replace with the path to your images folder

    // Image array
    const images = [];
    for (let i = 1; i <= 18; i++) {
        const imageName = `jelle-stoffels (${i}).jpg`;
        images.push(imageName);
    }

    // Shuffle and select images
    images.sort(() => Math.random() - 0.5);
    const selectedImages = images.slice(0, 18);

    // Generate portfolio items
    selectedImages.forEach(image => {
        const item = document.createElement('div');
        item.className = 'portfolio-item';
        const link = document.createElement('a');
        link.href = `${imageFolder}/${image}`;
        link.target = "_blank";
        link.innerHTML = `<img src="${imageFolder}/${image}" alt="${image}">`;
        item.appendChild(link);
        grid.appendChild(item);
    });
}

// Initialize portfolio items on page load
window.addEventListener('DOMContentLoaded', () => {
    generatePortfolioItems();

    // Fix for <details> animation
    const detailsElements = document.querySelectorAll('details.section');
    detailsElements.forEach(details => {
        details.addEventListener('toggle', event => {
            const content = details.querySelector('.section-content');
            if (details.open) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });
});
