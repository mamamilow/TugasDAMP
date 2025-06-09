document.addEventListener('DOMContentLoaded', function() {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const navUl = document.querySelector('nav ul');

        if (hamburgerMenu && navUl) {
            hamburgerMenu.addEventListener('click', function() {
                navUl.classList.toggle('active');
            });
        }
    });

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Add active class to current nav item (on click)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Calculate read time based on content length (commented out)
    /*
    function calculateReadTime() {
        const articleContent = document.querySelectorAll('.section-content');
        let totalWords = 0;

        articleContent.forEach(section => {
            const text = section.textContent.trim();
            const words = text.split(/\s+/).length;
            totalWords += words;
        });

        const readTimeMinutes = Math.ceil(totalWords / 200);
        console.log(`Estimated read time: ${readTimeMinutes} minutes`);

        // Optional: dynamically update read time in HTML
        // const readTimeElement = document.querySelector('.read-time');
        // if (readTimeElement) {
        //     readTimeElement.textContent = `${readTimeMinutes} Minutes Read`;
        // }
    }
    calculateReadTime();
    */

    console.log('Page loaded successfully');

    // Filter Kategori
    const filterTabs = document.querySelectorAll('.filter-tab');
    const blogCards = document.querySelectorAll('.blog-card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Ganti class aktif
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('data-category');

            blogCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                card.style.display = (category === 'all' || cardCategory === category) ? 'block' : 'none';
            });
        });
    });

    // Fitur Search
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            const keyword = searchInput.value.toLowerCase();
            searchBlogs(keyword, blogCards);
        });

        searchInput.addEventListener('input', function() {
            const keyword = this.value.toLowerCase();
            searchBlogs(keyword, blogCards);
        });
    }

    function searchBlogs(keyword, cards) {
        cards.forEach(card => {
            const title = card.querySelector('.blog-title')?.textContent.toLowerCase() || '';
            const excerpt = card.querySelector('.blog-excerpt')?.textContent.toLowerCase() || '';
            const content = title + ' ' + excerpt;

            card.style.display = content.includes(keyword) ? 'block' : 'none';
        });
    }

    // Inisialisasi tampilan semua blog saat halaman dimuat
    filterBlogs('all');
});

function filterBlogs(category) {
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        card.style.display = (category === 'all' || cardCategory === category) ? 'block' : 'none';
    });
}