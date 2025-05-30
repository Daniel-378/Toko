const gamesData = [
    {
        id: 'ml',
        name: 'Mobile Legends',
        logo: 'images/ff-logo.png',
        category: 'Mobile',
        diamondOptions: [
            { quantity: 10, price: 12000 },
            { quantity: 50, price: 54000 },
            { quantity: 100, price: 102000 }
        ]
    },
    {
        id: 'ff',
        name: 'Free Fire',
        logo: 'images/ff-logo.png',
        category: 'Mobile',
        diamondOptions: [
            { quantity: 20, price: 15000 },
            { quantity: 70, price: 48000 },
            { quantity: 140, price: 88000 }
        ]
    },
    {
        id: 'pubg',
        name: 'PUBG',
        logo: 'images/pubg-logo.png',
        category: 'PC',
        diamondOptions: [
            { quantity: 40, price: 25000 },
            { quantity: 80, price: 47000 },
            { quantity: 160, price: 90000 }
        ]
    },
    {
        id: 'valorant',
        name: 'Valorant',
        logo: 'images/valorant-logo.png',
        category: 'PC',
        diamondOptions: [
            { quantity: 100, price: 150000 },
            { quantity: 200, price: 280000 },
            { quantity: 300, price: 400000 }
        ]
    }
];

function renderHeroSection() {
    const heroSection = document.createElement('div');
    heroSection.className = 'hero';
    heroSection.innerHTML = `
        <h1>Top-Up Diamond Instan & Aman 💎</h1>
        <p>Top-up semua game favoritmu dalam hitungan detik.</p>
        <button class="neon-button" onclick="renderGameList()">Mulai Top-Up</button>
    `;
    document.getElementById('root').appendChild(heroSection);
}

function renderGameList() {
    document.getElementById('root').innerHTML = '';
    const gameListSection = document.createElement('div');
    gameListSection.className = 'game-list';
    gamesData.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.logo}" alt="${game.name}" style="width: 100px;">
            <h2>${game.name}</h2>
            <button class="neon-button" onclick="renderProductPage('${game.id}')">Top Up</button>
        `;
        gameListSection.appendChild(gameCard);
    });
    document.getElementById('root').appendChild(gameListSection);
}

function renderProductPage(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    document.getElementById('root').innerHTML = `
        <h2>${game.name} Top-Up</h2>
        <input type="text" placeholder="ID Player" id="playerId">
        <input type="text" placeholder="Server" id="server">
        <div>
            ${game.diamondOptions.map(option => `
                <button class="neon-button" onclick="confirmPayment(${option.price}, '${game.name}', ${option.quantity})">
                    ${option.quantity} Diamond - Rp${option.price}
                </button>
            `).join('')}
        </div>
        <button class="neon-button" onclick="renderGameList()">Kembali</button>
    `;
}

function confirmPayment(price, gameName, quantity) {
    alert(`Pembayaran untuk ${gameName}\nJumlah Diamond: ${quantity}\nTotal Harga: Rp${price}`);
}

renderHeroSection();
