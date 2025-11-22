// Tunggu hingga DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }

    // Welcome Message dengan Nama
    const userName = "Rexana Aprillia";
    const welcomeText = document.getElementById('welcome-text');
    if (welcomeText) {
        welcomeText.textContent = `Hi ${userName}, Welcome To Rexana Beauty`;
    }

    // Form Validation dan Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const birthdate = document.getElementById('birthdate').value;
            const gender = document.querySelector('input[name="gender"]:checked');
            const message = document.getElementById('message').value.trim();
            
            // Reset error messages
            document.getElementById('name-error').style.display = 'none';
            document.getElementById('birthdate-error').style.display = 'none';
            document.getElementById('gender-error').style.display = 'none';
            document.getElementById('message-error').style.display = 'none';
            
            let isValid = true;
            
            // Validasi nama
            if (name === '') {
                document.getElementById('name-error').style.display = 'block';
                isValid = false;
            }
            
            // Validasi tanggal lahir
            if (birthdate === '') {
                document.getElementById('birthdate-error').style.display = 'block';
                isValid = false;
            }
            
            // Validasi jenis kelamin
            if (!gender) {
                document.getElementById('gender-error').style.display = 'block';
                isValid = false;
            }
            
            // Validasi pesan
            if (message === '') {
                document.getElementById('message-error').style.display = 'block';
                isValid = false;
            }
            
            // Jika form valid, tampilkan hasil
            if (isValid) {
                // Format tanggal lahir
                const birthdateObj = new Date(birthdate);
                const formattedBirthdate = `${birthdateObj.getDate().toString().padStart(2, '0')}/${(birthdateObj.getMonth() + 1).toString().padStart(2, '0')}/${birthdateObj.getFullYear()}`;
                
                // Set waktu saat ini
                const now = new Date();
                
                // Tampilkan hasil
                const formResults = document.getElementById('form-results');
                formResults.innerHTML = `
                    <h3>Form Submission Details</h3>
                    <div class="results-container">
                        <div class="current-time">
                            <h4>Current Time</h4>
                            <p>${now.toString()}</p>
                        </div>
                        <div class="form-data">
                            <h4>Your Data</h4>
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Tanggal Lahir:</strong> ${formattedBirthdate}</p>
                            <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
                            <p><strong>Pesan:</strong> ${message}</p>
                        </div>
                    </div>
                `;
                
                formResults.style.display = 'block';
                formResults.scrollIntoView({ behavior: 'smooth' });
                
                // Reset form
                contactForm.reset();
            }
        });
    }

    // Smooth scrolling untuk navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Tutup mobile menu jika terbuka
                navMenu.classList.remove('show');
            }
        });
    });
});