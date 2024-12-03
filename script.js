// User Registration
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    if (username) {
        localStorage.setItem('username', username);
        alert(`You are registered as ${username}!`);
        displayWelcomeMessage();
        document.getElementById('user-registration').style.display = 'none'; // Hide registration after successful registration
        showFields(); // Show all fields after registration
        initializeDashboard();
    }
});

// Display Welcome Message
function displayWelcomeMessage() {
    const username = localStorage.getItem('username');
    document.getElementById('registration-message').innerText = `Welcome, ${username}!`;
}

// Show Fields
function showFields() {
    document.getElementById('bmi-calculator').style.display = 'block'; // Show BMI section
    document.getElementById('goal-setting').style.display = 'block'; // Show Goal Setting section
    document.getElementById('weight-tracker').style.display = 'block'; // Show Weight Tracker section
    document.getElementById('health-tips').style.display = 'block'; // Show Health Tips section
    document.getElementById('diet-exercise-recommendations').style.display = 'block'; // Show Diet and Exercise Recommendations section
    document.getElementById('reminders').style.display = 'block'; // Show Reminders section
    enableInputs(); // Enable inputs after registration
}

// Enable Inputs
function enableInputs() {
    document.getElementById('height').disabled = false;
    document.getElementById('weight').disabled = false;
    document.getElementById('bmi-form').querySelector('button').disabled = false;
    document.getElementById('goal-weight').disabled = false;
    document.getElementById('set-goal').disabled = false;
    document.getElementById('new-weight').disabled = false;
    document.getElementById('log-weight').disabled = false;
    document.getElementById('reminder-input').disabled = false;
    document.getElementById('set-reminder').disabled = false;
}

// Initialize Dashboard
function initializeDashboard() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('registration-message').innerText = `Welcome back, ${username}!`;
        document.getElementById('logout').style.display = 'block'; // Show logout button
        loadUserData(); // Load user data
    }
}

// Load User Data
function loadUserData() {
    const bmiHistory = JSON.parse(localStorage.getItem('bmiHistory')) || [];
    bmiHistory.forEach(entry => {
        const li = document.createElement('li');
        li.innerText = `Date: ${entry.date}, BMI: ${entry.bmi}`;
        document.getElementById('bmi-history').appendChild(li);
    });

    const weightHistory = JSON.parse(localStorage.getItem('weightHistory')) || [];
    weightHistory.forEach(weight => {
        const li = document.createElement('li');
        li.innerText = `Logged Weight: ${weight} kg`;
        document.getElementById('weight-history').appendChild(li);
    });

    const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    reminders.forEach(reminder => {
        const li = document.createElement('li');
        li.innerText = reminder;
        document.getElementById('reminder-list').appendChild(li);
    });

    const healthTips = [
        "Stay hydrated by drinking at least 8 glasses of water a day.",
        "Incorporate a variety of fruits and vegetables into your diet.",
        "Aim for at least 30 minutes of physical activity most days of the week.",
        "Get enough sleep; aim for 7-9 hours per night.",
        "Practice mindfulness or meditation to reduce stress."
    ];
    const randomTip = healthTips[Math.floor(Math.random() * healthTips.length)];
    document.getElementById('tips').innerText = randomTip;

    const dietRecommendations = [
        "Include lean proteins like chicken, fish, and legumes in your meals.",
        "Choose whole grains over refined grains.",
        "Limit added sugars and saturated fats.",
        "Plan your meals ahead to avoid unhealthy choices.",
        "Snack on nuts, fruits, or yogurt instead of chips or candy."
    ];
    const randomRecommendation = dietRecommendations[Math.floor(Math.random() * dietRecommendations.length)];
    document.getElementById('diet-recommendation').innerText = randomRecommendation;
}

// Set Reminder
document.getElementById('set-reminder').addEventListener('click', function() {
    const reminderInput = document.getElementById('reminder-input').value.trim();
    if (reminderInput) {
        const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
        reminders.push(reminderInput);
        localStorage.setItem('reminders', JSON.stringify(reminders));
        const li = document.createElement('li');
        li.innerText = reminderInput;
        document.getElementById('reminder-list').appendChild(li);
        document.getElementById('reminder-input').value = ''; // Clear input field
    } else {
        alert('Please enter a reminder.');
    }
});

// Clear Reminders
document.getElementById('clear-reminders').addEventListener('click', function() {
    localStorage.removeItem('reminders');
    document.getElementById('reminder-list').innerHTML = ''; // Clear displayed reminders
});

// Event Listener for Health Tips and Diet Recommendations
document.getElementById('refresh-tips').addEventListener('click', function() {
    const healthTips = [
        "Stay hydrated by drinking at least 8 glasses of water a day.",
        "Incorporate a variety of fruits and vegetables into your diet.",
        "Aim for at least 30 minutes of physical activity most days of the week.",
        "Get enough sleep; aim for 7-9 hours per night.",
        "Practice mindfulness or meditation to reduce stress."
    ];
    const randomTip = healthTips[Math.floor(Math.random() * healthTips.length)];
    document.getElementById('tips').innerText = randomTip;

    const dietRecommendations = [
        "Include lean proteins like chicken, fish, and legumes in your meals.",
        "Choose whole grains over refined grains.",
        "Limit added sugars and saturated fats.",
        "Plan your meals ahead to avoid unhealthy choices.",
        "Snack on nuts, fruits, or yogurt instead of chips or candy."
    ];
    const randomRecommendation = dietRecommendations[Math.floor(Math.random() * dietRecommendations.length)];
    document.getElementById('diet-recommendation').innerText = randomRecommendation;
});