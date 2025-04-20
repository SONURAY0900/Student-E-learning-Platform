// Modal functionality
        function openModal(modalId) {
            document.getElementById(`${modalId}-modal`).style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function closeModal(modalId) {
            document.getElementById(`${modalId}-modal`).style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Show/hide login form
        function showLogin() {
            document.getElementById('main-content').style.display = 'none';
            document.getElementById('login-content').style.display = 'block';
            return false;
        }

        function showMain() {
            document.getElementById('login-content').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }

        // Newsletter form submission
        document.querySelector(".newsletter-form").addEventListener("submit", function(event) {
            event.preventDefault();
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();

            if (name === "" || email === "") {
                alert("Please enter your name and email.");
            } else {
                window.location.href = "https://www.linkedin.com/pulse/complete-placement-preparation-roadmap-free-materials-mahidhar-a-1juhc/";
            }
        });

        // Login form submission
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            if (!email || !password) {
                alert('Please enter both email and password');
                return;
            }
            
            // For demo purposes, just show main content
            showMain();
        });

        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });