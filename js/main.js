// Recipe Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Recipe filtering
    const filterTabs = document.querySelectorAll('.filter-tab');
    const recipeCards = document.querySelectorAll('.recipe-card[data-category]');
    
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
    
    // Add meal plan filtering functionality
    document.addEventListener('DOMContentLoaded', function() {
        // Meal plan filtering
        const mealPlanCards = document.querySelectorAll('.meal-plan-card[data-category]');
        
        filterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active tab
                filterTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
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
    });
});