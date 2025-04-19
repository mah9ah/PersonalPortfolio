const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
}

// EmailJS Configuration
(function() {
    // Initialize EmailJS with your public key
    emailjs.init("LAp3XOOGmAH6YEzyL");
    
    // Get the form element
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        // Add submit event listener to the form
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            // Create a loading indicator
            const btn = contactForm.querySelector('.btn');
            const originalBtnText = btn.value;
            btn.value = 'Sending...';
            btn.disabled = true;
            
            // Prepare template parameters from form data
            const templateParams = {
                name: contactForm.querySelector('#name').value,
                email: contactForm.querySelector('#email').value,
                subject: contactForm.querySelector('#subject').value,
                message: contactForm.querySelector('#message').value
            };
            
            // Send email using EmailJS
            emailjs.send('service_qxvvprk', 'template_z2ofk5p', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Your message has been sent successfully!');
                    contactForm.reset(); // Reset form fields
                })
                .catch(function(error) {
                    console.log('FAILED...', error);
                    alert('Failed to send the message. Please try again later.');
                })
                .finally(function() {
                    // Restore button state
                    btn.value = originalBtnText;
                    btn.disabled = false;
                });
        });
    }
})();
