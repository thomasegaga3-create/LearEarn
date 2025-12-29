document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("showBtn");
  const box = document.getElementById("messageBox");

  button.onclick = function() {
    if (box.style.display === "none" || box.style.display === "") {
      box.style.display = "block";
      button.textContent = "Hide";
    } else {
      box.style.display = "none";
      button.textContent = "View";
    }
  };
});

const sourceInput = document.getElementById('rid');
const targetInput = document.getElementById('apply_fee');
const original = targetInput.value || targetInput.placeholder || '';

sourceInput.addEventListener('input', function() {
  if (this.value.trim() === '') {
    targetInput.value = '# 5000';
  } else {
    targetInput.value = '# 2500';
  }
});

const NIN = document.getElementById('nin');
const ninInput = document.getElementById('Nin');
const bankName = document.getElementById('bankName');
const accountNum = document.getElementById('accountNum');
const ninInputs = document.getElementById('Nins');
const bankNames = document.getElementById('bankNames');
const accountNums = document.getElementById('accountNums');

NIN.addEventListener('input', function() {
  if (NIN.value === 'Personal') {
    ninInput.style.display = 'block';
    bankName.style.display = 'block';
    accountNum.style.display = 'block';
    ninInputs.style.display = 'none';
    bankNames.style.display = 'none';
    accountNums.style.display = 'none';
  } else if (NIN.value === 'Guardiance/Sponsor') {
    ninInput.style.display = 'none';
    bankName.style.display = 'none';
    accountNum.style.display = 'none';
    ninInputs.style.display = 'block';
    bankNames.style.display = 'block';
    accountNums.style.display = 'block';
  }else{
    ninInput.style.display = 'none';
    bankName.style.display = 'none';
    accountNum.style.display = 'none';
    ninInputs.style.display = 'none';
    bankNames.style.display = 'none';
    accountNums.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const button2 = document.getElementById("showBtn2");
  const box2 = document.getElementById("messageBox2");

  button2.onclick = function() {
    if (box2.style.display === "none" || box2.style.display === "") {
      box2.style.display = "block";
      button2.textContent = "Hide";
    } else {
      box2.style.display = "none";
      button2.textContent = "View";
    }
  };
});

document.addEventListener("DOMContentLoaded", function() {
  const button3 = document.getElementById("showBtn3");
  const box3 = document.getElementById("messageBox3");

  button3.onclick = function() {
    if (box3.style.display === "none" || box3.style.display === "") {
      box3.style.display = "block";
      button3.textContent = "Hide";
    } else {
      box3.style.display = "none";
      button3.textContent = "View";
    }
  };
});

document.addEventListener("DOMContentLoaded", function() {
  const button4 = document.getElementById("showBtn4");
  const box4 = document.getElementById("messageBox4");

  button4.onclick = function() {
    if (box4.style.display === "none" || box4.style.display === "") {
      box4.style.display = "block";
      button4.textContent = "Hide";
    } else {
      box4.style.display = "none";
      button4.textContent = "View";
    }
  };
});

document.addEventListener("DOMContentLoaded", function() {
  const button5 = document.getElementById("showBtn5");
  const box5 = document.getElementById("messageBox5");

  button5.onclick = function() {
    if (box5.style.display === "none" || box5.style.display === "") {
      box5.style.display = "block";
      button5.textContent = "Hide";
    } else {
      box5.style.display = "none";
      button5.textContent = "View";
    }
  };
});

// Toggle hamburger menu
document.addEventListener("DOMContentLoaded", () => {
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
});
});

// You can add interactivity here if needed
/*console.log("E-Learrning site loaded!");*/
document.getElementById("signUpForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const address = document.getElementById("address").value.trim();
  const photo = document.getElementById("photo").files[0];
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const message = document.getElementById("message");
  const sog = document.getElementById('sog');
  const lga = document.getElementById('lga');
  const nationality = document.getElementById('ntion');
  const nationalID = document.getElementById('nin');
  const Nin = document.getElementById('Nin');
  const bankName = document.getElementById('bankName');
  const accountNum = document.getElementById('accountNum');
  const Nins = document.getElementById('Nins');
  const bankNames = document.getElementById('bankNames');
  const accountNums = document.getElementById('accountNums');
  const drop = document.getElementById('drop');
  const rid = document.getElementById('rid');
  const apply_fee = document.getElementById('apply_fee');

  if (!fullName || !email || !phone || !dob || !gender || !address || !photo || !password || !confirmPassword
    || !sog || !lga || !nationality || !nationalID || !Nin || !bankName || !accountNum || !Nins || !bankNames || !accountNums
    || !drop || !rid || !apply_fee
  ) {
    message.textContent = "Please fill in all fields.";
    message.style.color = "red";
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    message.style.color = "red";
    return;
  } else{

  // Simulate success
    message.style.color = "green";
    message.textContent = "Your application has been Successfully Submitted!, Wait While we Process your Application";
  }
});

document.getElementById("signUpForm").addEventListener("submit", function(event){
      event.preventDefault();

      const letterBox = document.getElementById("letter");
      letterBox.style.display = "block";
      letterBox.innerHTML = `
        <h3>Admission Letter</h3>
        <p>Date: ${new Date().toLocaleDateString()}</p>
        <p>Dear <strong>${name}</strong>,</p>
        <p>We are pleased to inform you that you have been granted admission into our institution. 
        You have successfully applied for the <strong>${course}</strong> program, with a duration of <strong>${duration}</strong>. 
        Your course of study will be <strong>${study}</strong>.</p>
        <p>We congratulate you on this achievement and look forward to supporting you throughout your academic journey. 
        Please ensure you complete all necessary registration formalities at the earliest convenience.</p>
        <p>Sincerely,<br><strong>Admissions Office</strong></p>
      `;
    });

// Toggle hamburger menu
document.addEventListener("DOMContentLoaded", () => {
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
});
});

// Sign-up form validation
document.getElementById("signUpForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const message = document.getElementById("message");

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    message.style.color = "red";
    return;
  }

  message.style.color = "green";
  message.textContent = "Sign-up successful!";
});

// Toggle password visibility
function toggleVisibility(fieldId) {
  const field = document.getElementById(fieldId);
  field.type = field.type === "password" ? "text" : "password";
}

// Password strength checker
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const strengthMessage = document.getElementById("strengthMessage");
const passwordMessage = document.getElementById("passwordMessage");

function checkStrength(pwd) {
  let strength = 0;
  if (pwd.length >= 8) strength++;
  if (/[A-Z]/.test(pwd)) strength++;
  if (/[0-9]/.test(pwd)) strength++;
  if (/[^A-Za-z0-9]/.test(pwd)) strength++;

  switch (strength) {
    case 0:
    case 1:
      strengthMessage.textContent = "❌ Weak password";
      strengthMessage.style.color = "red";
      break;
    case 2:
      strengthMessage.textContent = "⚠️ Medium password";
      strengthMessage.style.color = "orange";
      break;
    case 3:
    case 4:
      strengthMessage.textContent = "✅ Strong password";
      strengthMessage.style.color = "green";
      break;
  }
}

// Real-time validation
password.addEventListener("input", () => {
  checkStrength(password.value);
  checkPasswords();
});

// Toggle hamburger menu
document.addEventListener("DOMContentLoaded", () => {
const hamburger9 = document.getElementById("hamburger");
const navMenu9 = document.getElementById("navMenu");

hamburger9.addEventListener("click", () => {
  navMenu9.classList.toggle("active");
});
});

confirmPassword.addEventListener("input", checkPasswords);

function checkPasswords() {
  if (!password.value || !confirmPassword.value) {
    passwordMessage.textContent = "";
    return;
  }
  if (password.value === confirmPassword.value) {
    passwordMessage.textContent = "✅ Passwords match";
    passwordMessage.style.color = "green";
  } else {
    passwordMessage.textContent = "❌ Passwords do not match";
    passwordMessage.style.color = "red";
  }
}

// Toggle hamburger menu
document.addEventListener("DOMContentLoaded", () => {
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
});
});

// Form submission validation
document.getElementById("signUpForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const message = document.getElementById("message");

  if (password.value !== confirmPassword.value) {
    message.textContent = "Passwords do not match.";
    message.style.color = "red";
    return;
  }

  message.style.color = "green";
  message.textContent = "Sign-up successful!";
});


// Toggle password visibility
function toggleVisibility(fieldId) {
  const field = document.getElementById(fieldId);
  field.type = field.type === "password" ? "text" : "password";
}

// Toggle hamburger menu
document.addEventListener("DOMContentLoaded", () => {
const hamburger9 = document.getElementById("hamburger");
const navMenu9 = document.getElementById("navMenu");

hamburger9.addEventListener("click", () => {
  navMenu9.classList.toggle("active");
});
});

// Form validation
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const rememberMe = document.getElementById("rememberMe").checked;
  const message = document.getElementById("message");

  if (!email || !password) {
    message.textContent = "Please fill in all fields.";
    message.style.color = "red";
    return;
  }

  // Simulate login success
  message.style.color = "green";
  message.textContent = rememberMe 
    ? "Login successful! (Remember Me enabled)" 
    : "Login successful!";
});


// Forgot Password form validation
document.getElementById("forgotPasswordForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message");

  if (!email) {
    message.textContent = "Please enter your email.";
    message.style.color = "red";
    return;
  }

  // Simulate reset request
  message.style.color = "green";
  message.textContent = "Password reset link has been sent to " + email;
});

// Toggle hamburger menu
document.addEventListener("DOMContentLoaded", () => {
const hamburger9 = document.getElementById("hamburger");
const navMenu9 = document.getElementById("navMenu");

hamburger9.addEventListener("click", () => {
  navMenu9.classList.toggle("active");
});
});


// Toggle hamburger menu
document.addEventListener("DOMContentLoaded", () => {
const hamburger9 = document.getElementById("hamburger");
const navMenu9 = document.getElementById("navMenu");

hamburger9.addEventListener("click", () => {
  navMenu9.classList.toggle("active");
});
});

// Validation on submit
document.getElementById("paymentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const method = paymentMethod.value;
  const amount = document.getElementById("amount").value.trim();

  if (!method || !amount) {
    message.textContent = "⚠️ Please fill in all required fields.";
    message.style.color = "red";
    return;
  }

  if (method === "PayPal") {
    const paypalEmail = document.getElementById("paypalEmail").value.trim();
    if (!paypalEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(paypalEmail)) {
      message.textContent = "❌ Please enter a valid PayPal email.";
      message.style.color = "red";
      return;
    }
  }

  // Success message
  message.style.color = "green";
  message.textContent = `✅ Payment of ₦${amount} was successful via ${method}!`;
});

document.addEventListener("DOMContentLoaded", () => {
const text = "This text will appear gradually, one character at a time...";
const container = document.getElementById("overview");

    let index = 0;

    function lazyLoadText() {
      if (index < text.length) {
        container.textContent += text.charAt(index);
        index++;
        setTimeout(lazyLoadText, 1000); // adjust speed (ms)
      }
    }
  });

    // Start loading text
    lazyLoadText();

// script.js
/*const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});*/

// Get references to button and message box
// Wait until DOM is loaded

