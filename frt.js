const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const heartContainer = document.getElementById('heartContainer');

// 1. WHAT HAPPENS WHEN THEY CLICK YES!
yesBtn.addEventListener('click', () => {
    alert("Yay! 🥰 Can't wait for our date! 📅❤️");
    // You can also change the title here if you want:
    document.querySelector('.main-title').innerText = "It's a Date! 👑❤️";
});

// 2. THE RUNAWAY "NO" BUTTON TRICK
// Moves the button instantly when the mouse touches it or shifts over it
function moveNoButton() {
    // Calculate random coordinates bounded safe inside the viewport dimensions
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 40) + 20;
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 40) + 20;
    
    // Switch element properties to absolute positioning layer to let it jump freely
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton); // Extra safety lock for mobile screen touches

// 3. AMBIENT BACKGROUND FLOATING HEARTS GENERATOR
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerText = '🌸'; // Soft cherry blossoms mixed with hearts
    
    if(Math.random() > 0.5) {
        heart.innerText = '❤️';
    }

    heart.style.left = Math.random() * 100 + 'vw';
    const randomSize = Math.random() * 16 + 14; 
    heart.style.fontSize = randomSize + 'px';
    
    heartContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 400);
