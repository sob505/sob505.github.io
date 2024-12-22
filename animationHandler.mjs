import 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';

export function playAnimation(animationUrl) {
    const player = document.createElement('dotlottie-player');
    player.src = animationUrl;
    player.autoplay = true;
    player.loop = true; // Optional: Loop the animation
    player.style.width = '200px'; // Set desired width
    player.style.height = '200px'; // Set desired height
    document.body.appendChild(player);
}
