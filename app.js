/* ===== STARRYVERSE — CONSTELLATION QUIZ ENGINE ===== */

// ===== CONSTELLATION DATA =====
const CONSTELLATIONS = [
    {
        name: "Orion",
        hint: "This constellation is named after a legendary hunter from Greek mythology and contains a famous 'belt' of three aligned stars.",
        stars: [
            { x: 200, y: 40, label: "Betelgeuse" },
            { x: 280, y: 60, label: "" },
            { x: 230, y: 120, label: "" },
            { x: 250, y: 120, label: "" },
            { x: 200, y: 170, label: "Alnitak" },
            { x: 230, y: 175, label: "" },
            { x: 260, y: 170, label: "Mintaka" },
            { x: 180, y: 270, label: "Saiph" },
            { x: 290, y: 280, label: "Rigel" },
            { x: 230, y: 220, label: "" },
            { x: 235, y: 245, label: "" },
        ],
        lines: [[0,2],[1,3],[2,3],[2,4],[3,6],[4,5],[5,6],[4,7],[6,8],[5,9],[9,10]],
        fact: "Orion, the Hunter, contains Betelgeuse — a red supergiant so large that if placed at our Sun's location, it would extend past Jupiter's orbit!"
    },
    {
        name: "Ursa Major",
        hint: "Seven of its brightest stars form one of the most recognizable asterisms in the northern sky, often used for navigation.",
        stars: [
            { x: 100, y: 100, label: "Dubhe" },
            { x: 160, y: 90, label: "Merak" },
            { x: 180, y: 140, label: "Phecda" },
            { x: 130, y: 155, label: "Megrez" },
            { x: 200, y: 190, label: "Alioth" },
            { x: 260, y: 180, label: "Mizar" },
            { x: 320, y: 210, label: "Alkaid" },
        ],
        lines: [[0,1],[1,2],[2,3],[3,0],[3,4],[4,5],[5,6]],
        fact: "Ursa Major's seven brightest stars form the Big Dipper. The two pointer stars Dubhe and Merak point directly to Polaris, the North Star!"
    },
    {
        name: "Cassiopeia",
        hint: "This constellation is famous for its distinctive 'W' or 'M' shape, easily visible in the northern sky all year round.",
        stars: [
            { x: 100, y: 150, label: "Caph" },
            { x: 160, y: 80, label: "Schedar" },
            { x: 220, y: 140, label: "Gamma" },
            { x: 280, y: 70, label: "Ruchbah" },
            { x: 340, y: 130, label: "Segin" },
        ],
        lines: [[0,1],[1,2],[2,3],[3,4]],
        fact: "Cassiopeia forms a distinctive 'W' or 'M' shape in the sky. In Greek mythology, she was a queen who boasted about her unrivalled beauty!"
    },
    {
        name: "Scorpius",
        hint: "This zodiac constellation features a bright red supergiant at its heart and a long curved 'tail' stretching across the southern sky.",
        stars: [
            { x: 180, y: 50, label: "" },
            { x: 200, y: 90, label: "" },
            { x: 210, y: 130, label: "Antares" },
            { x: 200, y: 170, label: "" },
            { x: 180, y: 210, label: "" },
            { x: 160, y: 240, label: "" },
            { x: 150, y: 270, label: "" },
            { x: 170, y: 300, label: "" },
            { x: 200, y: 310, label: "" },
            { x: 220, y: 320, label: "Shaula" },
        ],
        lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]],
        fact: "Scorpius contains Antares, a red supergiant whose name means 'rival of Mars' due to its reddish hue. It's about 700 times the diameter of our Sun!"
    },
    {
        name: "Leo",
        hint: "This zodiac constellation represents the king of beasts and is best seen in spring. Its brightest star means 'Little King' in Latin.",
        stars: [
            { x: 150, y: 80, label: "Regulus" },
            { x: 120, y: 120, label: "" },
            { x: 140, y: 160, label: "" },
            { x: 170, y: 130, label: "" },
            { x: 200, y: 100, label: "" },
            { x: 250, y: 90, label: "" },
            { x: 300, y: 130, label: "Denebola" },
            { x: 280, y: 170, label: "" },
            { x: 240, y: 160, label: "" },
        ],
        lines: [[0,1],[1,2],[2,3],[3,0],[3,4],[4,5],[5,6],[6,7],[7,8],[8,5]],
        fact: "Leo is one of the oldest recognized constellations. Ancient Mesopotamians had a similar constellation dating back to 4000 BC. Its brightest star Regulus means 'Little King'!"
    },
    {
        name: "Cygnus",
        hint: "This constellation represents a bird in flight and contains one of the most luminous stars visible to the naked eye as its 'tail'.",
        stars: [
            { x: 220, y: 50, label: "Deneb" },
            { x: 220, y: 130, label: "" },
            { x: 140, y: 170, label: "" },
            { x: 300, y: 170, label: "" },
            { x: 220, y: 230, label: "" },
            { x: 220, y: 300, label: "Albireo" },
        ],
        lines: [[0,1],[1,2],[1,3],[1,4],[4,5]],
        fact: "Cygnus, the Swan, contains Deneb — one of the most luminous stars visible to the naked eye. It forms the 'Northern Cross' and is part of the famous Summer Triangle!"
    },
    {
        name: "Gemini",
        hint: "This constellation is most easily identifiable by its two brightest stars, named after twin brothers from Greek mythology.",
        stars: [
            { x: 160, y: 50, label: "Castor" },
            { x: 260, y: 60, label: "Pollux" },
            { x: 150, y: 120, label: "" },
            { x: 250, y: 130, label: "" },
            { x: 140, y: 180, label: "" },
            { x: 220, y: 200, label: "" },
            { x: 130, y: 260, label: "" },
            { x: 200, y: 270, label: "" },
        ],
        lines: [[0,2],[2,4],[4,6],[1,3],[3,5],[5,7],[4,5],[2,3]],
        fact: "Gemini represents the twins Castor and Pollux. The Geminid meteor shower, one of the best annual meteor showers, appears to radiate from this constellation!"
    },
    {
        name: "Lyra",
        hint: "This small constellation contains one of the brightest stars in the night sky, which served as our North Star about 12,000 years ago.",
        stars: [
            { x: 220, y: 60, label: "Vega" },
            { x: 190, y: 140, label: "" },
            { x: 250, y: 140, label: "" },
            { x: 170, y: 220, label: "" },
            { x: 270, y: 220, label: "" },
            { x: 190, y: 260, label: "" },
            { x: 250, y: 260, label: "" },
        ],
        lines: [[0,1],[0,2],[1,3],[2,4],[3,5],[4,6],[5,6],[3,4]],
        fact: "Lyra contains Vega, one of the brightest stars in the night sky and part of the Summer Triangle. Vega was the North Star about 12,000 years ago and will be again in about 13,700 years!"
    },
    {
        name: "Aquila",
        hint: "This constellation represents an eagle and contains Altair — one of the closest bright stars to Earth and part of the Summer Triangle.",
        stars: [
            { x: 220, y: 60, label: "" },
            { x: 180, y: 120, label: "" },
            { x: 260, y: 120, label: "" },
            { x: 220, y: 160, label: "Altair" },
            { x: 160, y: 200, label: "" },
            { x: 280, y: 200, label: "" },
            { x: 220, y: 280, label: "" },
        ],
        lines: [[0,3],[1,3],[2,3],[3,4],[3,5],[3,6]],
        fact: "Aquila, the Eagle, contains Altair — one of the closest visible stars at just 16.7 light-years away. Altair rotates so rapidly that it's noticeably flattened at its poles!"
    },
    {
        name: "Taurus",
        hint: "This zodiac constellation contains a famous open star cluster called the 'Seven Sisters' and a bright orange star marking the Bull's eye.",
        stars: [
            { x: 250, y: 80, label: "" },
            { x: 320, y: 100, label: "" },
            { x: 200, y: 140, label: "Aldebaran" },
            { x: 170, y: 160, label: "" },
            { x: 220, y: 170, label: "" },
            { x: 140, y: 180, label: "" },
            { x: 100, y: 200, label: "" },
            { x: 80, y: 220, label: "Pleiades ✦" },
        ],
        lines: [[0,2],[1,4],[2,3],[2,4],[3,5],[5,6],[6,7]],
        fact: "Taurus contains the bright orange star Aldebaran, which marks the Bull's fiery eye. It also hosts the Pleiades star cluster — the 'Seven Sisters' visible to the naked eye!"
    },
    {
        name: "Canis Major",
        hint: "This constellation is home to the brightest star in the entire night sky, which the ancient Egyptians used to predict the flooding of the Nile.",
        stars: [
            { x: 200, y: 50, label: "Sirius" },
            { x: 170, y: 120, label: "" },
            { x: 240, y: 110, label: "" },
            { x: 150, y: 190, label: "" },
            { x: 260, y: 180, label: "" },
            { x: 130, y: 260, label: "" },
            { x: 280, y: 250, label: "" },
            { x: 220, y: 300, label: "" },
        ],
        lines: [[0,1],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,7]],
        fact: "Canis Major contains Sirius, the brightest star in the entire night sky! Ancient Egyptians based their calendar on Sirius's rising, which signaled the annual flooding of the Nile."
    },
    {
        name: "Draco",
        hint: "This long, winding constellation wraps around the north celestial pole. One of its stars served as the North Star when the Egyptian pyramids were built.",
        stars: [
            { x: 300, y: 60, label: "" },
            { x: 310, y: 100, label: "" },
            { x: 280, y: 130, label: "" },
            { x: 240, y: 120, label: "Thuban" },
            { x: 200, y: 150, label: "" },
            { x: 160, y: 190, label: "" },
            { x: 130, y: 230, label: "" },
            { x: 150, y: 270, label: "" },
            { x: 190, y: 290, label: "" },
            { x: 230, y: 280, label: "" },
            { x: 245, y: 250, label: "Eltanin" },
        ],
        lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]],
        fact: "Draco, the Dragon, wraps around the north celestial pole. About 4,700 years ago, its star Thuban served as the North Star when the Egyptian pyramids were being built!"
    },
    {
        name: "Sagittarius",
        hint: "This zodiac constellation points toward the center of our Milky Way galaxy. Its brightest stars form an asterism shaped like a teapot.",
        stars: [
            { x: 180, y: 80, label: "" },
            { x: 220, y: 100, label: "" },
            { x: 260, y: 80, label: "" },
            { x: 200, y: 150, label: "" },
            { x: 240, y: 150, label: "" },
            { x: 180, y: 210, label: "" },
            { x: 250, y: 200, label: "" },
            { x: 220, y: 260, label: "" },
            { x: 280, y: 250, label: "Kaus Australis" },
        ],
        lines: [[0,1],[1,2],[1,3],[1,4],[3,4],[3,5],[4,6],[5,7],[6,8]],
        fact: "Sagittarius points toward the center of our Milky Way galaxy! The constellation's 'Teapot' asterism is one of the easiest star patterns to spot in the summer sky."
    },
    {
        name: "Andromeda",
        hint: "This constellation is famous for containing the nearest large galaxy to our Milky Way, visible to the naked eye on clear dark nights.",
        stars: [
            { x: 80, y: 160, label: "" },
            { x: 150, y: 150, label: "" },
            { x: 230, y: 130, label: "Mirach" },
            { x: 310, y: 110, label: "Alpheratz" },
            { x: 170, y: 100, label: "" },
            { x: 200, y: 200, label: "" },
            { x: 260, y: 80, label: "" },
        ],
        lines: [[0,1],[1,2],[2,3],[1,4],[2,5],[2,6]],
        fact: "Andromeda is home to the Andromeda Galaxy (M31) — the nearest large galaxy to our Milky Way at 2.5 million light-years away, and is visible to the naked eye on clear nights!"
    },
    {
        name: "Perseus",
        hint: "In mythology, this hero slew Medusa. The constellation contains a famous 'Demon Star' that eerily dims every 2.87 days.",
        stars: [
            { x: 200, y: 40, label: "" },
            { x: 190, y: 100, label: "Mirfak" },
            { x: 220, y: 160, label: "" },
            { x: 160, y: 150, label: "Algol" },
            { x: 140, y: 200, label: "" },
            { x: 250, y: 220, label: "" },
            { x: 260, y: 280, label: "" },
            { x: 230, y: 300, label: "" },
        ],
        lines: [[0,1],[1,2],[1,3],[3,4],[2,5],[5,6],[6,7]],
        fact: "Perseus is famous for the Perseid meteor shower every August. The star Algol is called the 'Demon Star' because of its eerie dimming every 2.87 days!"
    },
    {
        name: "Crux",
        hint: "This is the smallest of all 88 constellations but one of the most iconic — used for centuries by navigators in the Southern Hemisphere.",
        stars: [
            { x: 220, y: 60, label: "Gacrux" },
            { x: 220, y: 240, label: "Acrux" },
            { x: 140, y: 150, label: "" },
            { x: 300, y: 150, label: "" },
            { x: 240, y: 180, label: "" },
        ],
        lines: [[0,1],[2,3],[1,4]],
        fact: "Crux, the Southern Cross, is the smallest of all 88 constellations but one of the most famous! It has been used for centuries to find due south."
    },
    {
        name: "Virgo",
        hint: "This is the largest constellation in the zodiac. Its brightest star's name means 'ear of wheat' in Latin.",
        stars: [
            { x: 200, y: 50, label: "" },
            { x: 170, y: 110, label: "" },
            { x: 240, y: 100, label: "" },
            { x: 200, y: 170, label: "Spica" },
            { x: 280, y: 160, label: "" },
            { x: 170, y: 240, label: "" },
            { x: 250, y: 230, label: "" },
            { x: 140, y: 300, label: "" },
            { x: 280, y: 290, label: "" },
        ],
        lines: [[0,1],[0,2],[1,3],[2,4],[3,5],[3,6],[5,7],[6,8]],
        fact: "Virgo is the largest constellation in the zodiac! Its brightest star, Spica, is actually a close binary star system about 250 light-years away."
    },
    {
        name: "Pegasus",
        hint: "This constellation features the 'Great Square' — four stars forming a large square shape that is one of the easiest patterns to spot in autumn.",
        stars: [
            { x: 140, y: 80, label: "Markab" },
            { x: 280, y: 80, label: "Scheat" },
            { x: 280, y: 220, label: "Algenib" },
            { x: 140, y: 220, label: "" },
            { x: 100, y: 280, label: "" },
            { x: 320, y: 160, label: "" },
        ],
        lines: [[0,1],[1,2],[2,3],[3,0],[3,4],[1,5]],
        fact: "Pegasus features the Great Square — four stars forming a large square that is one of the easiest patterns to find in the autumn sky. In mythology, Pegasus was the famous winged horse!"
    },
];

// ===== REVEAL IMAGE MAP =====
const REVEAL_IMAGES = {
    'Orion': 'images/orion.png',
    'Ursa Major': 'images/ursa_major.png',
    'Cassiopeia': 'images/cassiopeia.png',
    'Scorpius': 'images/scorpius.png',
    'Leo': 'images/leo.png',
    'Cygnus': 'images/cygnus.png',
};

// Preload reveal images
const preloadedImages = {};
Object.entries(REVEAL_IMAGES).forEach(([name, src]) => {
    const img = new Image();
    img.src = src;
    preloadedImages[name] = img;
});

// ===== QUIZ STATE =====
let quizState = {
    currentQuestion: 0,
    score: 0,
    questions: [],
    answered: false,
    totalQuestions: 10,
};

// ===== DOM REFS =====
const screens = {
    welcome: document.getElementById('welcome-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen'),
};

const els = {
    startBtn: document.getElementById('start-btn'),
    questionCounter: document.getElementById('question-counter'),
    progressBar: document.getElementById('progress-bar'),
    currentScore: document.getElementById('current-score'),
    constellationCanvas: document.getElementById('constellation-canvas'),
    answersContainer: document.getElementById('answers-container'),
    feedbackPanel: document.getElementById('feedback-panel'),
    feedbackIcon: document.getElementById('feedback-icon'),
    feedbackText: document.getElementById('feedback-text'),
    funFact: document.getElementById('fun-fact'),
    nextBtn: document.getElementById('next-btn'),
    hintText: document.getElementById('hint-text'),
    finalScore: document.getElementById('final-score'),
    scoreRingFill: document.getElementById('score-ring-fill'),
    resultsEmoji: document.getElementById('results-emoji'),
    resultsTitle: document.getElementById('results-title'),
    resultsMessage: document.getElementById('results-message'),
    retryBtn: document.getElementById('retry-btn'),
    revealImage: document.getElementById('reveal-image'),
};

// ===== STARFIELD BACKGROUND =====
function initStarfield() {
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    let stars = [];
    const STAR_COUNT = 180;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createStars() {
        stars = [];
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.8 + 0.3,
                alpha: Math.random() * 0.7 + 0.3,
                speed: Math.random() * 0.003 + 0.001,
                phase: Math.random() * Math.PI * 2,
            });
        }
    }

    function draw(time) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const grad = ctx.createRadialGradient(
            canvas.width / 2, canvas.height / 2, 0,
            canvas.width / 2, canvas.height / 2, canvas.width * 0.7
        );
        grad.addColorStop(0, 'rgba(1, 57, 135, 0.05)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            const twinkle = Math.sin(time * star.speed + star.phase) * 0.3 + 0.7;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 231, 197, ${star.alpha * twinkle})`;
            ctx.fill();

            if (star.radius > 1.2) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 231, 197, ${star.alpha * twinkle * 0.08})`;
                ctx.fill();
            }
        });

        requestAnimationFrame(draw);
    }

    resize();
    createStars();
    requestAnimationFrame(draw);
    window.addEventListener('resize', () => { resize(); createStars(); });
}

// ===== CONSTELLATION RENDERER =====
function drawConstellation(constellation, revealed = false) {
    const canvas = els.constellationCanvas;
    const ctx = canvas.getContext('2d');

    // High DPI support
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);

    // Background
    if (revealed) {
        // Richer background when revealed
        const bgGrad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.7);
        bgGrad.addColorStop(0, 'rgba(1, 57, 135, 0.25)');
        bgGrad.addColorStop(0.5, 'rgba(0, 15, 35, 0.6)');
        bgGrad.addColorStop(1, 'rgba(0, 15, 35, 0.9)');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, w, h);
    } else {
        const bgGrad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.6);
        bgGrad.addColorStop(0, 'rgba(1, 57, 135, 0.12)');
        bgGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, w, h);
    }

    // Random background stars
    const bgStarCount = revealed ? 60 : 40;
    for (let i = 0; i < bgStarCount; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const r = Math.random() * 0.8 + 0.2;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 231, 197, ${Math.random() * 0.2 + 0.05})`;
        ctx.fill();
    }

    // Scale stars to fit canvas
    const scale = Math.min(w / 420, h / 370);
    const offsetX = (w - 420 * scale) / 2;
    const offsetY = (h - 370 * scale) / 2;

    const scaledStars = constellation.stars.map(s => ({
        x: s.x * scale + offsetX,
        y: s.y * scale + offsetY,
        label: s.label,
    }));

    // ---- LINES ----
    const lineAlpha = revealed ? 0.7 : 0.35;
    const lineWidth = revealed ? 2 : 1.5;
    const glowAlpha = revealed ? 0.2 : 0.08;
    const glowWidth = revealed ? 8 : 5;

    constellation.lines.forEach(([a, b]) => {
        // Glow
        ctx.strokeStyle = `rgba(255, 231, 197, ${glowAlpha})`;
        ctx.lineWidth = glowWidth;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(scaledStars[a].x, scaledStars[a].y);
        ctx.lineTo(scaledStars[b].x, scaledStars[b].y);
        ctx.stroke();

        // Core line
        ctx.strokeStyle = `rgba(255, 231, 197, ${lineAlpha})`;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.moveTo(scaledStars[a].x, scaledStars[a].y);
        ctx.lineTo(scaledStars[b].x, scaledStars[b].y);
        ctx.stroke();
    });

    // ---- STARS ----
    scaledStars.forEach((star, i) => {
        const glowRadius = revealed ? 18 : 12;
        const coreSize = revealed ? (i === 0 ? 5.5 : 4) : (i === 0 ? 4 : 3);
        const centerSize = revealed ? 2.2 : 1.5;

        // Outer glow
        const glowGrad = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, glowRadius);
        glowGrad.addColorStop(0, revealed ? 'rgba(255, 231, 197, 0.45)' : 'rgba(255, 231, 197, 0.25)');
        glowGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(star.x, star.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Star core
        ctx.beginPath();
        ctx.arc(star.x, star.y, coreSize, 0, Math.PI * 2);
        ctx.fillStyle = '#FFE7C5';
        ctx.fill();

        // Bright center
        ctx.beginPath();
        ctx.arc(star.x, star.y, centerSize, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();

        // ---- LABELS (only in revealed mode) ----
        if (revealed && star.label) {
            ctx.font = `600 ${11 * (w / 400)}px 'Outfit', sans-serif`;
            ctx.fillStyle = 'rgba(255, 231, 197, 0.85)';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';

            // Label with subtle background
            const labelX = star.x + coreSize + 8;
            const labelY = star.y - 2;
            const textWidth = ctx.measureText(star.label).width;

            // Background pill
            ctx.fillStyle = 'rgba(0, 15, 35, 0.6)';
            const pad = 4;
            ctx.beginPath();
            ctx.roundRect(labelX - pad, labelY - 8, textWidth + pad * 2, 16, 4);
            ctx.fill();

            // Label text
            ctx.fillStyle = 'rgba(255, 231, 197, 0.9)';
            ctx.fillText(star.label, labelX, labelY);
        }
    });

    // ---- CONSTELLATION NAME (only in revealed mode) ----
    if (revealed) {
        const fontSize = Math.max(18, w / 16);
        ctx.font = `800 ${fontSize}px 'Orbitron', sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

        // Text shadow/glow
        ctx.fillStyle = 'rgba(1, 57, 135, 0.6)';
        ctx.fillText(constellation.name.toUpperCase(), w / 2 + 1, h - 14);

        // Main text
        ctx.fillStyle = 'rgba(255, 231, 197, 0.7)';
        ctx.fillText(constellation.name.toUpperCase(), w / 2, h - 15);
    }
}

// ===== QUIZ LOGIC =====
function generateQuestions() {
    const shuffled = [...CONSTELLATIONS].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, quizState.totalQuestions);

    return selected.map(correct => {
        const wrongs = CONSTELLATIONS
            .filter(c => c.name !== correct.name)
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);

        const answers = [correct, ...wrongs].sort(() => Math.random() - 0.5);
        const correctIndex = answers.findIndex(a => a.name === correct.name);

        return {
            constellation: correct,
            answers: answers.map(a => a.name),
            correctIndex,
        };
    });
}

function switchScreen(from, to) {
    from.classList.remove('active');
    from.classList.add('fade-out');
    setTimeout(() => {
        from.classList.remove('fade-out');
        to.classList.add('active');
    }, 400);
}

function startQuiz() {
    quizState = {
        currentQuestion: 0,
        score: 0,
        questions: generateQuestions(),
        answered: false,
        totalQuestions: 10,
    };
    switchScreen(screens.welcome, screens.quiz);
    setTimeout(() => loadQuestion(), 500);
}

function loadQuestion() {
    const q = quizState.questions[quizState.currentQuestion];
    quizState.answered = false;

    // Update header
    els.questionCounter.textContent = `${quizState.currentQuestion + 1} / ${quizState.totalQuestions}`;
    els.progressBar.style.width = `${((quizState.currentQuestion) / quizState.totalQuestions) * 100}%`;
    els.currentScore.textContent = quizState.score;

    // Show hint text
    els.hintText.textContent = q.constellation.hint;
    els.hintText.classList.remove('hidden');

    // Hide reveal image from previous question
    els.revealImage.classList.add('hidden');
    els.revealImage.classList.remove('visible');
    els.revealImage.src = '';

    // Draw constellation (unrevealed)
    drawConstellation(q.constellation, false);

    // Render answer buttons
    const letters = ['A', 'B', 'C'];
    els.answersContainer.innerHTML = q.answers.map((name, i) => `
        <button class="answer-btn" data-index="${i}" id="answer-${i}">
            <span class="answer-letter">${letters[i]}</span>
            <span class="answer-name">${name}</span>
        </button>
    `).join('');

    // Attach click handlers
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index)));
    });

    // Hide feedback
    els.feedbackPanel.classList.add('hidden');

    // Animate card in
    const card = document.querySelector('.constellation-card');
    card.style.animation = 'none';
    card.offsetHeight;
    card.style.animation = 'cardSlideIn 0.5s ease-out';
}

function handleAnswer(selectedIndex) {
    if (quizState.answered) return;
    quizState.answered = true;

    const q = quizState.questions[quizState.currentQuestion];
    const isCorrect = selectedIndex === q.correctIndex;

    if (isCorrect) quizState.score++;

    // Highlight answers
    document.querySelectorAll('.answer-btn').forEach((btn, i) => {
        if (i === q.correctIndex) {
            btn.classList.add('correct');
        } else if (i === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
        btn.classList.add('disabled');
    });

    // === REVEAL the constellation ===
    const revealSrc = REVEAL_IMAGES[q.constellation.name];
    if (revealSrc) {
        // Show the illustration image
        els.revealImage.src = revealSrc;
        els.revealImage.classList.remove('hidden');
        // Small delay for smooth fade-in
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                els.revealImage.classList.add('visible');
            });
        });
    } else {
        // No image available — use enhanced canvas reveal
        drawConstellation(q.constellation, true);
    }

    // Show feedback
    els.feedbackIcon.textContent = isCorrect ? '✨' : '💫';
    els.feedbackText.textContent = isCorrect ? 'Correct!' : `It's ${q.constellation.name}!`;
    els.feedbackText.className = `feedback-text ${isCorrect ? 'correct-text' : 'incorrect-text'}`;
    els.funFact.textContent = q.constellation.fact;

    // Update button text for last question
    const isLast = quizState.currentQuestion >= quizState.totalQuestions - 1;
    els.nextBtn.querySelector('.btn-text').textContent = isLast ? 'Show Results' : 'Next';
    els.nextBtn.querySelector('.btn-icon').textContent = isLast ? '🌟' : '→';

    els.feedbackPanel.classList.remove('hidden');
    els.currentScore.textContent = quizState.score;
}

function nextQuestion() {
    if (quizState.currentQuestion >= quizState.totalQuestions - 1) {
        showResults();
    } else {
        quizState.currentQuestion++;
        loadQuestion();
    }
}

function showResults() {
    switchScreen(screens.quiz, screens.results);

    const score = quizState.score;
    const total = quizState.totalQuestions;
    const pct = score / total;

    let emoji, title, message;
    if (pct === 1) {
        emoji = '🏆';
        title = 'Galactic Master';
        message = 'Perfect score! You have an extraordinary knowledge of the night sky. The cosmos bows to your wisdom!';
    } else if (pct >= 0.8) {
        emoji = '🌟';
        title = 'Star Navigator';
        message = 'Impressive! You clearly know your way around the constellations. A few more stargazing nights and you\'ll be a master!';
    } else if (pct >= 0.6) {
        emoji = '🔭';
        title = 'Sky Watcher';
        message = 'Good job! You have a solid foundation. Keep exploring the night sky and you\'ll recognize even more star patterns!';
    } else if (pct >= 0.4) {
        emoji = '🌙';
        title = 'Moon Gazer';
        message = 'Not bad! The constellations are tricky, but you\'re on the right track. Grab a star chart and keep looking up!';
    } else {
        emoji = '✨';
        title = 'Cosmic Beginner';
        message = 'The universe has so much to show you! Don\'t give up—every astronomer started right where you are. Try again!';
    }

    els.resultsEmoji.textContent = emoji;
    els.resultsTitle.textContent = title;
    els.resultsMessage.textContent = message;

    setTimeout(() => {
        els.finalScore.textContent = score;
        const circumference = 2 * Math.PI * 54;
        const offset = circumference - (pct * circumference);
        els.scoreRingFill.style.strokeDashoffset = offset;
    }, 300);
}

function restartQuiz() {
    els.scoreRingFill.style.strokeDashoffset = '339.292';
    els.finalScore.textContent = '0';
    switchScreen(screens.results, screens.welcome);
}

// ===== EVENT LISTENERS =====
els.startBtn.addEventListener('click', startQuiz);
els.nextBtn.addEventListener('click', nextQuestion);
els.retryBtn.addEventListener('click', restartQuiz);

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (screens.quiz.classList.contains('active')) {
        if (e.key === '1' || e.key === 'a' || e.key === 'A') {
            document.getElementById('answer-0')?.click();
        } else if (e.key === '2' || e.key === 'b' || e.key === 'B') {
            document.getElementById('answer-1')?.click();
        } else if (e.key === '3' || e.key === 'c' || e.key === 'C') {
            document.getElementById('answer-2')?.click();
        } else if (e.key === 'Enter' || e.key === ' ') {
            if (quizState.answered) {
                e.preventDefault();
                nextQuestion();
            }
        }
    } else if (screens.welcome.classList.contains('active')) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            startQuiz();
        }
    } else if (screens.results.classList.contains('active')) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            restartQuiz();
        }
    }
});

// ===== INIT =====
initStarfield();
