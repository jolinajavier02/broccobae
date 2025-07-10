// Recipe Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Recipe filtering
    const filterTabs = document.querySelectorAll('.filter-tab');
    const recipeCards = document.querySelectorAll('.recipe-card[data-category]');
    const mealPlanCards = document.querySelectorAll('.meal-plan-card[data-category]');
    
    // Handle recipe and meal plan filtering
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter recipes
            recipeCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Filter meal plans
            mealPlanCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Community tab switching
    const communityTabs = document.querySelectorAll('.community-tab');
    const seasonContents = document.querySelectorAll('.season-content');
    
    communityTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const season = this.getAttribute('data-season');
            
            // Update active tab
            communityTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding content
            seasonContents.forEach(content => {
                content.style.display = 'none';
            });
            
            const targetContent = document.getElementById(season + '-content');
            if (targetContent) {
                targetContent.style.display = 'block';
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add click handlers for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your CTA functionality here
            console.log('CTA button clicked:', this.textContent);
        });
    });
    
    // Add navigation functionality
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all nav items
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
    
    // Error handling for missing elements
    if (filterTabs.length === 0) {
        console.warn('No filter tabs found on this page');
    }
    if (recipeCards.length === 0) {
        console.warn('No recipe cards found on this page');
    }
});