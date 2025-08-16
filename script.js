// ==========================
// Contact Form Submission
// ==========================
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const action = form.action;
    const formData = new FormData(form);
    const successDiv = document.getElementById('successMessage');

    fetch(action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            successDiv.style.display = 'block'; // Show success message
            form.reset(); // Clear form fields
            setTimeout(() => {
                successDiv.style.display = 'none';
            }, 5000); // Hide message after 5 seconds
        } else {
            alert("⚠ Oops! There was a problem sending your form. Please try again later.");
        }
    })
    .catch(error => {
        alert("⚠ Oops! There was a problem sending your form. Please try again later.");
    });
});

// ==========================
// Testimonials Slider
// ==========================
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.testimonial-indicators .dot');

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

document.querySelector('.testimonial-arrow.prev').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});

document.querySelector('.testimonial-arrow.next').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentTestimonial = i;
        showTestimonial(currentTestimonial);
    });
});

// Auto-slide every 5 seconds
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// ==========================
// Gallery Auto Scroll
// ==========================
const gallery = document.querySelector('.gallery-slider');
let scrollAmount = 0;
setInterval(() => {
    scrollAmount += 1;
    if(scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
        scrollAmount = 0;
    }
    gallery.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}, 50);