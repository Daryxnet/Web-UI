function changePlanet(planet) {
    const canvas = document.getElementById('starCanvas');
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Change the canvas background or draw new stars based on the selected planet
    switch (planet) {
        case 'planet1':
            // Logic to visualize stars for Exoplanet 1
            break;
        case 'planet2':
            // Logic to visualize stars for Exoplanet 2
            break;
        case 'planet3':
            // Logic to visualize stars for Exoplanet 3
            break;
        case 'planet4':
            // Logic to visualize stars for Exoplanet 4
            break;
        default:
            console.error('Unknown planet:', planet);
    }
}
