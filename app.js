var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'),
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning')

// Mobile drawer menu
const menuToggleBtn = document.querySelector('.menu-toggle')
const mobileDrawer = document.querySelector('.mobile-drawer')
const drawerOverlay = document.querySelector('.drawer-overlay')
const drawerCloseEls = document.querySelectorAll('[data-drawer-close]')
const drawerLinks = document.querySelectorAll('[data-drawer-link]')

function setDrawerOpen(isOpen) {
    document.body.classList.toggle('drawer-open', isOpen)
    if (menuToggleBtn) menuToggleBtn.setAttribute('aria-expanded', String(isOpen))
    if (mobileDrawer) mobileDrawer.setAttribute('aria-hidden', String(!isOpen))
}
// Product data
const wholesaleDescription =
    "Bulk non‑woven bags supplied at wholesale rates. Ideal for supermarkets, garment stores and large promotional events.";
const retailDescription =
    "Premium non‑woven bags sold in smaller quantities, perfect for gifting, boutiques and daily shopping.";

const commonSpecs = [
    "Material: 100% non‑woven polypropylene",
    "GSM range: 60–120 (customisable)",
    "Sizes: Small, Medium, Large, XL",
    "Printing: Custom logo & full‑colour design"
];

const commonFeatures = [
    "Eco‑friendly & reusable",
    "High weight‑carrying capacity",
    "Soft, comfortable handles",
    "Available in multiple colours"
];

const defaultWholesaleImages = [
    "https://5.imimg.com/data5/SELLER/Default/2023/5/307542609/QH/EH/WZ/25697888/non-woven-bag-raw-material.png",
    "https://www.greenhandle.in/images/category/119.jpg",
    "https://www.greenhandle.in/images/category/118.jpg",
    "https://5.imimg.com/data5/BP/GM/MY-39315735/non-woven-carry-bag.jpeg"
];

const defaultRetailImages = [
    "https://satnamoverseas.in/wp-content/uploads/2024/11/Untitled-design-2022-06-10T122554.031.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/9/342653705/HX/EE/WE/53529457/non-woven-bag-roll.jpeg",
    "https://5.imimg.com/data5/SELLER/Default/2023/10/355127709/AM/GN/RR/4309428/non-woven-fabric-manufacturer-500x500.jpg",
    "https://5.imimg.com/data5/BP/GM/MY-39315735/non-woven-carry-bag.jpeg"
];

const defaulbagImages = [
    "img/bag1.jpeg",
    "img/bag2.jpeg",
    "img/bag3.jpeg",
    "img/bag4.jpeg"
];

const products = {
    // Wholesale products (1–10)
    1: {
        title: "D-cut Bags (Wholesale)",
        price: "$99.99 / 500 pcs",
        description: wholesaleDescription,
        images: defaulbagImages,
        specs: commonSpecs,
        features: commonFeatures
    },
    2: {
        title: "Box Bags (Wholesale)",
        price: "$249.99 / 500 pcs",
        description: wholesaleDescription,
        images: defaultWholesaleImages,
        specs: commonSpecs,
        features: commonFeatures
    },
    3: {
        title: "Loop Handle Bags (Wholesale)",
        price: "$189.99 / 500 pcs",
        description: wholesaleDescription,
        images: defaultWholesaleImages,
        specs: commonSpecs,
        features: commonFeatures
    },
    4: {
        title: "W-cut Bags (Wholesale)",
        price: "$129.99 / 500 pcs",
        description: wholesaleDescription,
        images: defaultWholesaleImages,
        specs: commonSpecs,
        features: commonFeatures
    },
    5: {
        title: "Plain Non Woven Bags (Wholesale)",
        price: "$159.99 / 500 pcs",
        description: wholesaleDescription,
        images: defaultWholesaleImages,
        specs: commonSpecs,
        features: commonFeatures
    },
    6: {
        title: "Wedding Return Bags (Wholesale)",
        price: "$199.99 / 500 pcs",
        description: wholesaleDescription,
        images: defaultWholesaleImages,
        specs: commonSpecs,
        features: commonFeatures
    },
    7: {
        title: "Grocery Bags (Wholesale)",
        price: "$139.99 / 500 pcs",
        description: wholesaleDescription,
        images: defaultWholesaleImages,
        specs: commonSpecs,
        features: commonFeatures
    },
    8: {
        title: "Gift & Hamper Bags (Wholesale)",
        price: "$179.99 / 500 pcs",
        description: wholesaleDescription,
        images: defaultWholesaleImages,
        specs: commonSpecs,
        features: commonFeatures
    },
    9: {
        title: "Bottle Bags (Wholesale)",
        price: "$149.99 / 500 pcs",
        description: wholesaleDescription,
        images: defaultWholesaleImages,
        specs: commonSpecs,
        features: commonFeatures
    },
    10: {
        title: "Boutique Bags (Wholesale)",
        price: "$189.99 / 500 pcs",
        description: wholesaleDescription,
        images: defaultWholesaleImages,
        specs: commonSpecs,
        features: commonFeatures
    },

    // Retail products (11–20)
    11: {
        title: "Retail D-cut Bag",
        price: "$3.99 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    },
    12: {
        title: "Retail Box Bag",
        price: "$4.49 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    },
    13: {
        title: "Retail Loop Handle Bag",
        price: "$4.99 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    },
    14: {
        title: "Retail W-cut Bag",
        price: "$3.49 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    },
    15: {
        title: "Retail Printed Bag",
        price: "$5.49 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    },
    16: {
        title: "Retail Wedding Bag",
        price: "$6.99 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    },
    17: {
        title: "Retail Grocery Bag",
        price: "$2.99 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    },
    18: {
        title: "Retail Gift Bag",
        price: "$4.29 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    },
    19: {
        title: "Retail Bottle Bag",
        price: "$3.79 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    },
    20: {
        title: "Retail Boutique Bag",
        price: "$5.99 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    }
    
    , 26: {
        title: "Retail Boutique Bag",
        price: "$5.99 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    }
    , 27: {
        title: "Retail Boutique Bag",
        price: "$5.99 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    }
    , 28: {
        title: "Retail Boutique Bag",
        price: "$5.99 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    }
    , 29: {
        title: "Retail Boutique Bag",
        price: "$5.99 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    }
    , 30: {
        title: "Retail Boutique Bag",
        price: "$5.99 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    }
    , 41: {
        title: "Retail Boutique Bag",
        price: "$5.99 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    }
     , 42: {
        title: "Retail Boutique Bag",
        price: "$5.99 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    }
     , 43: {
        title: "Retail Boutique Bag",
        price: "$5.99 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    }
     , 44: {
        title: "Retail Boutique Bag",
        price: "$5.99 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    }
     , 45: {
        title: "Retail Boutique Bag",
        price: "$5.99 / piece",
        description: retailDescription,
        images: defaultRetailImages,
        specs: commonSpecs,
        features: commonFeatures
    }

};

// Get modal element
const modal = document.getElementById('productModal');
const closeBtn = document.querySelector('.close-btn');

// Get all product cards
const productCards = document.querySelectorAll('.product-card');

// Add click event to each product card
productCards.forEach(card => {
    card.addEventListener('click', function () {
        const productId = this.getAttribute('data-product');
        showProductDetails(productId);
    });
});

// Close modal and restore scroll
function closeModal() {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Set up modal close functionality if modal exists
if (modal && closeBtn) {
    // Close modal when clicking the X button
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal when pressing Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// Mobile drawer menu functionality
function setDrawerOpen(isOpen) {
    document.body.classList.toggle('drawer-open', isOpen)
    if (menuToggleBtn) menuToggleBtn.setAttribute('aria-expanded', String(isOpen))
    if (mobileDrawer) mobileDrawer.setAttribute('aria-hidden', String(!isOpen))
}

if (menuToggleBtn) {
    menuToggleBtn.addEventListener('click', () => {
        const isOpen = document.body.classList.contains('drawer-open')
        setDrawerOpen(!isOpen)
    })
}

drawerCloseEls.forEach((el) => {
    el.addEventListener('click', () => setDrawerOpen(false))
})

drawerLinks.forEach((a) => {
    a.addEventListener('click', () => setDrawerOpen(false))
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close drawer if open
        if (document.body.classList.contains('drawer-open')) {
            setDrawerOpen(false)
        }
        // Close modal if open
        if (modal && modal.style.display === 'block') {
            closeModal()
        }
    }
})

// Carousel slider functionality (only if elements exist)
if (nextBtn && prevBtn && carousel && list && runningTime) {
    let timeRunning = 3000
    let timeAutoNext = 7000

    nextBtn.onclick = function () {
        showSlider('next')
    }

    prevBtn.onclick = function () {
        showSlider('prev')
    }

    let runTimeOut

    let runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    function resetTimeAnimation() {
        runningTime.style.animation = 'none'
        runningTime.offsetHeight /* trigger reflow */
        runningTime.style.animation = null
        runningTime.style.animation = 'runningTime 7s linear 1 forwards'
    }

    function showSlider(type) {
        let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
        if (type === 'next') {
            list.appendChild(sliderItemsDom[0])
            carousel.classList.add('next')
        } else {
            list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
            carousel.classList.add('prev')
        }

        clearTimeout(runTimeOut)

        runTimeOut = setTimeout(() => {
            carousel.classList.remove('next')
            carousel.classList.remove('prev')
        }, timeRunning)

        clearTimeout(runNextAuto)
        runNextAuto = setTimeout(() => {
            nextBtn.click()
        }, timeAutoNext)

        resetTimeAnimation() // Reset the running time animation
    }

    // Start the initial animation 
    resetTimeAnimation()
}





// Custom products (owner-listed) – stored in localStorage
function getCustomProducts() {
    try {
        const raw = localStorage.getItem('customProducts');
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function getCustomProductById(id) {
    const list = getCustomProducts();
    return list.find(p => p.id === id) || null;
}

// Function to show product details
function showProductDetails(productId) {
    if (!modal) return;

    const isCustom = typeof productId === 'string' && productId.startsWith('custom-');
    let product = isCustom ? getCustomProductById(productId) : products[productId];
    if (!product) return;

    // Normalize for modal (custom products have different shape)
    const title = product.title || product.name;
    const price = product.price || '';
    const description = product.description || (isCustom ? 'Added by owner.' : '');
    const images = product.images || (product.image ? [product.image] : ['img/bag1.jpeg']);
    const specs = product.specs || commonSpecs;
    const features = product.features || commonFeatures;

    // Set main content
    const productTitle = document.getElementById('productTitle');
    const productPrice = document.getElementById('productPrice');
    const productDescription = document.getElementById('productDescription');

    if (productTitle) productTitle.textContent = title;
    if (productPrice) productPrice.textContent = price;
    if (productDescription) productDescription.textContent = description;

    // Set main image
    const mainImage = document.getElementById('mainProductImage');
    if (mainImage) {
        mainImage.src = images[0];
        mainImage.alt = title;
    }

    // Set thumbnail images
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        if (images[index]) {
            thumb.src = images[index];
            thumb.alt = `${title} - View ${index + 1}`;
            thumb.style.display = 'block';
        } else {
            thumb.style.display = 'none';
        }
    });

    // Set specifications
    const specsList = document.getElementById('productSpecs');
    if (specsList) {
        specsList.innerHTML = '';
        specs.forEach(spec => {
            const li = document.createElement('li');
            li.textContent = spec;
            specsList.appendChild(li);
        });
    }

    // Set features
    const featuresList = document.getElementById('productFeatures');
    if (featuresList) {
        featuresList.innerHTML = '';
        features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    }

    // Add click event to thumbnails using event delegation
    const thumbnailContainer = document.querySelector('.thumbnail-images');
    if (thumbnailContainer) {
        // Remove old event listeners by replacing the container's content
        thumbnailContainer.onclick = function (e) {
            const clickedThumb = e.target.closest('.thumbnail');
            if (clickedThumb && clickedThumb.style.display !== 'none') {
                // Find the index of the clicked thumbnail
                const allThumbnails = Array.from(thumbnails);
                const thumbIndex = allThumbnails.indexOf(clickedThumb);

                if (thumbIndex !== -1 && product.images[thumbIndex]) {
                    // Remove active class from all thumbnails
                    thumbnails.forEach(t => t.classList.remove('active'));
                    // Add active class to clicked thumbnail
                    clickedThumb.classList.add('active');
                    // Update main image
                    if (mainImage) {
                        mainImage.src = product.images[thumbIndex];
                    }
                }
            }
        };
    }

    // Owner-only: show "Remove from listing" when logged in
    const removeWrap = document.getElementById('owner-remove-from-listing-wrap');
    if (removeWrap) {
        const ownerLoggedIn = typeof window.isOwnerLoggedIn === 'function' && window.isOwnerLoggedIn();
        removeWrap.style.display = ownerLoggedIn ? 'block' : 'none';
        removeWrap.setAttribute('aria-hidden', String(!ownerLoggedIn));
    }
    if (modal) modal.dataset.currentProductId = productId;

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Add event listeners to buttons inside cards (prevent card click when clicking button)
document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const productCard = this.closest('.product-card');
        const productId = productCard.getAttribute('data-product');
        showProductDetails(productId);
    });
});

// Product search (products page only)
(function () {
    const searchInput = document.getElementById('product-search-input');
    const searchClear = document.getElementById('product-search-clear');
    const noResultsEl = document.getElementById('product-search-no-results');
    const searchQueryEl = document.getElementById('product-search-query');
    if (!searchInput || !noResultsEl) return;

    const sections = document.querySelectorAll('.products-section');
    const subsectionTitles = document.querySelectorAll('.products-subsection-title');
    const mainTitles = document.querySelectorAll('.products-section-title');

    function getSearchTerm() {
        return (searchInput.value || '').trim().toLowerCase();
    }

    function updateVisibility() {
        const term = getSearchTerm();
        searchClear.classList.toggle('visible', term.length > 0);
        if (term.length === 0) {
            noResultsEl.classList.remove('visible');
            sections.forEach(s => s.classList.remove('search-hidden'));
            subsectionTitles.forEach(t => t.classList.remove('search-hidden'));
            mainTitles.forEach(t => t.classList.remove('search-hidden'));
            return;
        }
        let anyVisible = false;
        sections.forEach(section => {
            const cards = section.querySelectorAll('.product-card[data-search]');
            let sectionHasVisible = false;
            cards.forEach(card => {
                const searchText = (card.getAttribute('data-search') || '').toLowerCase();
                const name = (card.querySelector('h3') && card.querySelector('h3').textContent) || '';
                const match = searchText.includes(term) || name.toLowerCase().includes(term);
                card.classList.toggle('search-hidden', !match);
                if (match) {
                    sectionHasVisible = true;
                    anyVisible = true;
                }
            });
            section.classList.toggle('search-hidden', !sectionHasVisible);
        });
        subsectionTitles.forEach(h3 => {
            const section = h3.nextElementSibling;
            const isVisible = section && !section.classList.contains('search-hidden');
            h3.classList.toggle('search-hidden', !isVisible);
        });
        mainTitles.forEach((h2, i) => {
            if (i === 0) {
                const wholesaleSection = document.querySelector('.products-section[data-section="wholesale"]');
                h2.classList.toggle('search-hidden', wholesaleSection && wholesaleSection.classList.contains('search-hidden'));
            } else {
                const retailSections = document.querySelectorAll('.products-section[data-section="retail"]');
                const anyRetailVisible = Array.from(retailSections).some(s => !s.classList.contains('search-hidden'));
                h2.classList.toggle('search-hidden', !anyRetailVisible);
            }
        });
        if (searchQueryEl) searchQueryEl.textContent = searchInput.value.trim();
        noResultsEl.classList.toggle('visible', !anyVisible);
    }

    searchInput.addEventListener('input', updateVisibility);
    searchInput.addEventListener('keyup', updateVisibility);
    if (searchClear) {
        searchClear.addEventListener('click', function () {
            searchInput.value = '';
            searchInput.focus();
            updateVisibility();
        });
    }
})();

// Owner-only product listing (products page)
(function () {
    const OWNER_STORAGE_KEY = 'ownerLoggedIn';
    const CUSTOM_PRODUCTS_KEY = 'customProducts';
    const HIDDEN_PRODUCTS_KEY = 'hiddenProductIds';
    // Change this password; only the owner should know it.
    const OWNER_PASSWORD = 'THEHEMRAJ';

    const loginModal = document.getElementById('owner-login-modal');
    const addProductModal = document.getElementById('owner-add-product-modal');
    const ownerEntryBtn = document.getElementById('owner-entry-btn');
    const drawerOwnerBtn = document.getElementById('drawer-owner-btn');
    const ownerFab = document.getElementById('owner-fab');
    const loginClose = document.getElementById('owner-login-close');
    const addProductClose = document.getElementById('owner-add-product-close');
    const passwordInput = document.getElementById('owner-password');
    const loginSubmit = document.getElementById('owner-login-submit');
    const loginError = document.getElementById('owner-login-error');
    const addProductForm = document.getElementById('owner-add-product-form');
    const logoutBtn = document.getElementById('owner-logout-btn');

    if (!loginModal || !addProductModal) return;

    function isOwnerLoggedIn() {
        return sessionStorage.getItem(OWNER_STORAGE_KEY) === 'true';
    }

    function setOwnerLoggedIn(value) {
        if (value) sessionStorage.setItem(OWNER_STORAGE_KEY, 'true');
        else sessionStorage.removeItem(OWNER_STORAGE_KEY);
        updateOwnerUI();
    }

    function updateOwnerUI() {
        const loggedIn = isOwnerLoggedIn();
        if (ownerFab) {
            ownerFab.setAttribute('aria-hidden', String(!loggedIn));
            ownerFab.style.display = loggedIn ? 'flex' : 'none';
        }
    }

    function openLoginModal() {
        if (loginModal) {
            loginModal.classList.add('open');
            loginModal.setAttribute('aria-hidden', 'false');
            if (passwordInput) passwordInput.value = '';
            if (loginError) loginError.textContent = '';
        }
    }

    function closeLoginModal() {
        if (loginModal) {
            loginModal.classList.remove('open');
            loginModal.setAttribute('aria-hidden', 'true');
        }
    }

    function openAddProductModal() {
        if (addProductModal) {
            addProductModal.classList.add('open');
            addProductModal.setAttribute('aria-hidden', 'false');
        }
    }

    function closeAddProductModal() {
        if (addProductModal) {
            addProductModal.classList.remove('open');
            addProductModal.setAttribute('aria-hidden', 'true');
            if (addProductForm) addProductForm.reset();
        }
    }

    function getCustomProductsList() {
        try {
            const raw = localStorage.getItem(CUSTOM_PRODUCTS_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    }

    function saveCustomProducts(list) {
        localStorage.setItem(CUSTOM_PRODUCTS_KEY, JSON.stringify(list));
    }

    function getContainerForProduct(section, category) {
        if (section === 'wholesale') {
            const sec = document.querySelector('.products-section[data-section="wholesale"]');
            return sec ? sec.querySelector('.products-container') : null;
        }
        const sec = document.querySelector('.products-section[data-section="retail"][data-category="' + category + '"]');
        return sec ? sec.querySelector('.products-container') : null;
    }

    function getHiddenProductIds() {
        try {
            const raw = localStorage.getItem(HIDDEN_PRODUCTS_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    }

    function saveHiddenProductIds(ids) {
        localStorage.setItem(HIDDEN_PRODUCTS_KEY, JSON.stringify(ids));
    }

    function applyHiddenProducts() {
        const hidden = getHiddenProductIds();
        if (hidden.length === 0) return;
        document.querySelectorAll('.product-card').forEach(function (card) {
            const id = card.getAttribute('data-product');
            if (id && hidden.indexOf(id) !== -1) card.classList.add('product-removed');
        });
    }

    function closeProductModal() {
        const productModal = document.getElementById('productModal');
        if (productModal) {
            productModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    function removeProductFromListing(productId) {
        if (!productId) return;
        const isCustom = typeof productId === 'string' && productId.startsWith('custom-');
        if (isCustom) {
            const list = getCustomProductsList().filter(function (p) { return p.id !== productId; });
            saveCustomProducts(list);
            const card = document.querySelector('.product-card[data-product="' + productId + '"]');
            if (card) card.remove();
        } else {
            const hidden = getHiddenProductIds();
            if (hidden.indexOf(String(productId)) === -1) {
                hidden.push(String(productId));
                saveHiddenProductIds(hidden);
            }
            const card = document.querySelector('.product-card[data-product="' + productId + '"]');
            if (card) card.classList.add('product-removed');
        }
        closeProductModal();
    }

    function renderCustomProducts() {
        const list = getCustomProductsList();
        list.forEach(function (p) {
            const container = getContainerForProduct(p.section, p.category || 'pp-bags');
            if (!container) return;
            if (document.querySelector('.product-card[data-product="' + p.id + '"]')) return;
            const card = document.createElement('div');
            card.className = 'product-card';
            card.setAttribute('data-product', p.id);
            card.setAttribute('data-section', p.section);
            if (p.category) card.setAttribute('data-category', p.category);
            card.setAttribute('data-search', (p.searchText || '').toLowerCase());
            card.innerHTML =
                '<div class="product-image"><img src="' + (p.image || 'img/bag1.jpeg') + '" alt="' + (p.title || '').replace(/"/g, '&quot;') + '"></div>' +
                '<div class="product-info"><h3>' + (p.title || '').replace(/</g, '&lt;') + '</h3><p class="product-price">' + (p.price || '').replace(/</g, '&lt;') + '</p><button class="view-details-btn">View Details</button></div>';
            container.appendChild(card);
            card.querySelector('.view-details-btn').addEventListener('click', function (e) {
                e.stopPropagation();
                showProductDetails(p.id);
            });
        });
    }

    if (ownerEntryBtn) ownerEntryBtn.addEventListener('click', openLoginModal);
    if (drawerOwnerBtn) drawerOwnerBtn.addEventListener('click', function () { openLoginModal(); setDrawerOpen(false); });
    if (loginClose) loginClose.addEventListener('click', closeLoginModal);
    if (addProductClose) addProductClose.addEventListener('click', closeAddProductModal);

    if (loginSubmit && passwordInput) {
        loginSubmit.addEventListener('click', function () {
            const pwd = passwordInput.value.trim();
            if (pwd === OWNER_PASSWORD) {
                setOwnerLoggedIn(true);
                closeLoginModal();
            } else {
                if (loginError) loginError.textContent = 'Incorrect password.';
            }
        });
    }

    if (ownerFab) ownerFab.addEventListener('click', openAddProductModal);

    if (addProductForm) {
        addProductForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const title = document.getElementById('add-product-title').value.trim();
            const price = document.getElementById('add-product-price').value.trim();
            const description = (document.getElementById('add-product-description') && document.getElementById('add-product-description').value.trim()) || 'Added by owner.';
            const image = document.getElementById('add-product-image').value.trim() || 'img/bag1.jpeg';
            const extraImagesRaw = (document.getElementById('add-product-extra-images') && document.getElementById('add-product-extra-images').value.trim()) || '';
            const extraUrls = extraImagesRaw.split(/[\n,]+/).map(function (s) { return s.trim(); }).filter(Boolean);
            const images = [image].concat(extraUrls);
            const section = document.getElementById('add-product-section').value;
            const categorySelect = document.getElementById('add-product-category');
            const category = (section === 'retail' && categorySelect) ? categorySelect.value : 'pp-bags';
            const searchText = (document.getElementById('add-product-search').value || '').trim().toLowerCase().replace(/,/g, ' ');
            if (!title || !price) return;
            const list = getCustomProductsList();
            const id = 'custom-' + (Date.now().toString(36) + Math.random().toString(36).slice(2, 8));
            const newProduct = {
                id: id,
                title: title,
                price: price,
                description: description,
                image: image,
                images: images,
                section: section,
                category: category,
                searchText: searchText
            };
            list.push(newProduct);
            saveCustomProducts(list);
            const container = getContainerForProduct(section, category);
            if (container) {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.setAttribute('data-product', id);
                card.setAttribute('data-section', section);
                if (category) card.setAttribute('data-category', category);
                card.setAttribute('data-search', searchText);
                card.innerHTML =
                    '<div class="product-image"><img src="' + image.replace(/"/g, '&quot;') + '" alt="' + title.replace(/"/g, '&quot;') + '"></div>' +
                    '<div class="product-info"><h3>' + title.replace(/</g, '&lt;') + '</h3><p class="product-price">' + price.replace(/</g, '&lt;') + '</p><button class="view-details-btn">View Details</button></div>';
                container.appendChild(card);
                card.querySelector('.view-details-btn').addEventListener('click', function (ev) {
                    ev.stopPropagation();
                    showProductDetails(id);
                });
            }
            closeAddProductModal();
        });
    }

    if (logoutBtn) logoutBtn.addEventListener('click', function () { setOwnerLoggedIn(false); closeAddProductModal(); });

    var removeFromListingBtn = document.getElementById('owner-remove-from-listing');
    if (removeFromListingBtn) {
        removeFromListingBtn.addEventListener('click', function () {
            if (!isOwnerLoggedIn()) return;
            var modal = document.getElementById('productModal');
            var productId = modal && modal.dataset.currentProductId;
            if (productId) removeProductFromListing(productId);
        });
    }

    loginModal.addEventListener('click', function (e) { if (e.target === loginModal) closeLoginModal(); });
    addProductModal.addEventListener('click', function (e) { if (e.target === addProductModal) closeAddProductModal(); });

    window.isOwnerLoggedIn = isOwnerLoggedIn;
    updateOwnerUI();
    renderCustomProducts();
    applyHiddenProducts();
})();


