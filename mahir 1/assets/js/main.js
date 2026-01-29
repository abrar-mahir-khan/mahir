


document.addEventListener("DOMContentLoaded", () => {
    const detailsItems = document.querySelectorAll('.scroll-change__details-item');
    const imgItems = document.querySelectorAll('.scroll-change__img-item');

    const observerOptions = {
        root: null, // Use the viewport
        rootMargin: '0px',
        threshold: 1.0 // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = [...imgItems].indexOf(entry.target);

                detailsItems.forEach((item, i) => {
                    if (i === index) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    imgItems.forEach((imgItem) => observer.observe(imgItem));
});