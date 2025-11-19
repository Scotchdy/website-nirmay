
        let currentUserType = 'vet';
        
        function toggleUserType(button, type) {
            // Remove active class from all buttons
            document.querySelectorAll('.toggle-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            button.classList.add('active');
            currentUserType = type;
            
            // Optional: Update form based on user type
            console.log('Selected user type:', type);
        }
function goNext() {
  
        window.location.href = './vet-page/vet-page.html';
    
}



        function generateCaptcha() {
            const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
            let result = '';
            for (let i = 0; i < 6; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            document.getElementById('captcha').textContent = result;
        }

        function loginWithGoogle() {
            alert('Google login integration would be implemented here');
        }

        function showSignup() {
            alert('Redirect to signup page');
        }

        function showHelp() {
            alert('Open help/support page');
        }

        // Form submission handling
        document.querySelector('.login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const mobile = document.querySelector('input[type="tel"]').value;
            const captcha = document.querySelector('.captcha-input').value;
            
            if (!mobile) {
                alert('Please enter your mobile number');
                return;
            }
            
            if (!captcha) {
                alert('Please enter the verification code');
                return;
            }
            
            // Simulate login process
            alert(`Login attempted for ${mobile} as ${currentUserType}`);
        });

        // Generate initial captcha
        generateCaptcha();
    