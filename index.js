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

