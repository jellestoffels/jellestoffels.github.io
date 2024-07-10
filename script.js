function generatePortfolioItems() {
    const grid = document.querySelector('.portfolio-grid');
    const imageFolder = 'https://jellestoffels.github.io/images'; // Replace with the path to your images folder

    // Fetch the images from the folder
    const images = [];
    for (let i = 1; i <= 89; i++) {
        const imageName = `jelle-stoffels-${i}.jpg`;
        images.push(imageName);
    }

    // Shuffle the images array
    images.sort(() => Math.random() - 0.5);
    const selectedImages = images.slice(0, 60);

    // Generate portfolio items for each image
    selectedImages.forEach(image => {
        const item = document.createElement('div');
        item.className = 'portfolio-item';
        const link = document.createElement('a');
        link.href = `${imageFolder}/${image}`;
        link.innerHTML = `<img src="${imageFolder}/${image}" alt="${image}" style="width: 100%; height: 100%; object-fit: cover;">`;
        item.appendChild(link);
        grid.appendChild(item);
    });
}

// Get all image elements
const images = Array.from(document.querySelectorAll('.portfolio-grid img'));

// Function to create a new image page
function createImagePage(imgElement) {
    // Get the image source and generate a description
    const image = {
        src: imgElement.src,
        description: 'Description for ' + imgElement.alt
    };

    // Create a new window or tab
    const win = window.open('', '_blank');

    // Write the HTML for the new page
    win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
                <title>Image Page</title>
                <link rel="stylesheet" href="styles.css">
        </head>
        <body>
                <div class="image-container">
                        <img src="${image.src}" alt="${image.description}">
                        <p class="image-description">${image.description}</p>
                </div>
        </body>
        </html>
    `);

    // Close the document writing stream
    win.document.close();
}

// Create a new image page for each image
images.forEach(createImagePage);

// Call the function when the page loads
window.addEventListener('DOMContentLoaded', generatePortfolioItems);