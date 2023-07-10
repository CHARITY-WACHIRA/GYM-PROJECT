fetch("db.json") // add your server
    .then(response => response.json())
    .then(data => {
      // Getting schedule container
      const scheduleContainer = document.querySelector('.schedule');
      // Getting days buttons   
      const daysButtons = document.querySelectorAll('.days-sector button');

      // Function for updating schedule based on day 
      const updateSchedule = (day) => {
        const classData = data.find(item => item.day === day); 
        
        // Changing the html content
        scheduleContainer.querySelector('h3').textContent = `Our ${classData.class} Classes`; 
        scheduleContainer.querySelector('p:nth-of-type(1)').textContent = `Day: ${classData.day}`;
        scheduleContainer.querySelector('p:nth-of-type(2)').textContent = `Class: ${classData.class}`;
        scheduleContainer.querySelector('p:nth-of-type(3)').textContent = `Time: ${classData.time}`;
      }
      
      // Adding event listeners to the buttons 
      daysButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedDay = event.target.getAttribute('type'); 
            updateSchedule(selectedDay); 
        }); 
      }); 
      
    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });

    const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};
