const defaultProducts = [
    { id: 1, category: 'discord', name: 'Discord Nitro', img: 'https://cdn.discordapp.com/emojis/1484466806545715311.gif?size=96', features: 'Nitro ID → ₹60, Basic Gift Link → ₹135, Nitro Full → ₹390, Promo Code → ₹10', price: 'Starts at ₹10' },
    { id: 2, category: 'discord', name: 'Server Boosts', img: 'https://cdn.discordapp.com/emojis/1484466806545715311.gif?size=96', features: '14x Boosts applied instantly, 1 Month Validity, Guaranteed stability', price: '₹330' },
    { id: 3, category: 'discord', name: 'Minecraft Premium ID', img: '⛏️', features: 'Full Access Account, Changeable details, Instant delivery', price: '₹600 / $6.32' },
    { id: 4, category: 'streaming', name: 'YouTube Premium', img: 'https://cdn.discordapp.com/emojis/1494018341780721804.gif?size=96', features: 'Activated on your mail, Ad-Free viewing, Background play enabled', price: '₹30' },
    { id: 5, category: 'streaming', name: 'Amazon Prime Video', img: 'https://cdn.discordapp.com/emojis/1503782800854089908.webp?size=96', features: 'With Ads: 1M (₹59) | 6M (₹110), Ad-Free 4K: 1M (₹89) | 6M (₹210)', price: 'Starts at ₹59' },
    { id: 6, category: 'streaming', name: 'Spotify Premium', img: 'https://cdn.discordapp.com/emojis/1511680103342538847.webp?size=96', features: 'Activated on new mail, Ad-Free & Unlimited Skips, 2 Months (₹110) | 3 Months (₹149)', price: 'Starts at ₹110' },
    { id: 7, category: 'streaming', name: 'Hotstar Super Plan', img: 'https://cdn.discordapp.com/emojis/1500099608963973151.webp?size=96', features: 'Activated on your number, Works on TV/Laptop (5 Devices), 1 Month (₹69) | 3 Months (₹159)', price: 'Starts at ₹69' },
    { id: 8, category: 'utility', name: 'Nord VPN', img: 'https://cdn.discordapp.com/emojis/1512380335512358992.webp?size=96', features: 'Premium Access, High-speed secure servers, 3 Months Validity', price: '₹269' },
    { id: 9, category: 'utility', name: 'Emergent AI', img: 'https://cdn.discordapp.com/emojis/1497016083381620867.webp?size=96', features: 'Full access to features, 1 Month Validity', price: '₹310' },
    { id: 10, category: 'utility', name: 'Indian +91 Numbers', img: 'https://cdn.discordapp.com/emojis/1399857555064356884.webp?size=96', features: 'Fresh Accounts, Unlimited Quantity Available, Secure & Verified', price: '₹110 / $1.3 ea' },
    { id: 11, category: 'domain', name: '.gg Domain', img: '🌐', features: 'Perfect for gaming, 1 Year Registration', price: '₹6864.05 / $79.99' },
    { id: 12, category: 'domain', name: '.tech Domain', img: '🌐', features: 'Great for tech projects, 1 Year Registration', price: '₹556.52 / $5.99' },
    { id: 13, category: 'domain', name: '.com Domain', img: '🌐', features: 'Global standard, 1 Year Registration', price: '₹1000 / $11.83' },
    { id: 14, category: 'domain', name: '.net Domain', img: '🌐', features: 'Network businesses, 1 Year Registration', price: '₹1500 / $17.74' },
    { id: 15, category: 'domain', name: '.fun Domain', img: '🌐', features: 'Entertainment & Gaming, 1 Year Registration', price: '₹200 / $2.37' },
    { id: 16, category: 'domain', name: '.info Domain', img: '🌐', features: 'Informational sites, 1 Year Registration', price: '₹350 / $3.99' },
    { id: 17, category: 'domain', name: '.online Domain', img: '🌐', features: 'Digital presence, 1 Year Registration', price: '₹190 / $2.25' },
    { id: 18, category: 'domain', name: '.xyz Domain', img: '🌐', features: 'Creative & Web3, 1 Year Registration', price: '₹300 / $3.55' },
    { id: 19, category: 'domain', name: '.in Domain', img: '🌐', features: 'India targeted, 1 Year Registration', price: '₹600 / $7.10' },
    { id: 20, category: 'domain', name: '.shop Domain', img: '🌐', features: 'E-commerce stores, 1 Year Registration', price: '₹100 / $0.99' },
    { id: 21, category: 'domain', name: '.cloud Domain', img: '🌐', features: 'Cloud & Hosting, 1 Year Registration', price: '₹188 / $1.99' },
    { id: 22, category: 'domain', name: '.space Domain', img: '🌐', features: 'Creative spaces, 1 Year Registration', price: '₹100 / $0.99' }
];

function getProducts() {
    let products = localStorage.getItem('bm_products');
    if (!products) {
        localStorage.setItem('bm_products', JSON.stringify(defaultProducts));
        return defaultProducts;
    }
    return JSON.parse(products);
}

function saveProducts(products) {
    localStorage.setItem('bm_products', JSON.stringify(products));
}

function createProductCard(product) {
    let imgHTML = product.img.includes('http') ? `<img src="${product.img}" alt="${product.name}">` : product.img;
    let featureList = product.features.split(',').map(f => `<li>${f.trim()}</li>`).join('');

    return `
        <div class="item-card">
            <div class="card-header">
                <div class="item-img">${imgHTML}</div>
                <h3>${product.name}</h3>
            </div>
            <ul class="features-list">${featureList}</ul>
            <div class="price-container">${product.price}</div>
            <button class="btn" style="width: 100%; margin-top: auto;" onclick="alert('Opening purchase link for: ${product.name}')">Buy Now</button>
        </div>
    `;
}
