document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;
    const addButton = document.getElementById('add');
    const participantsFieldset = document.querySelector('.participants');
    const form = document.querySelector('form');
    const summarySection = document.getElementById('summary');
  
    // Function to add a new participant
    addButton.addEventListener('click', () => {
      participantCount++;
  
      // Create a new participant section
      const newParticipant = document.createElement('section');
      newParticipant.classList.add(`participant${participantCount}`);
      newParticipant.innerHTML = `
        <p>Participant ${participantCount}</p>
        <div class="item">
          <label for="fname${participantCount}"> First Name<span>*</span></label>
          <input id="fname${participantCount}" type="text" name="fname${participantCount}" required />
        </div>
        <div class="item activities">
          <label for="activity${participantCount}">Activity #<span>*</span></label>
          <input id="activity${participantCount}" type="text" name="activity${participantCount}" />
        </div>
        <div class="item">
          <label for="fee${participantCount}">Fee ($)<span>*</span></label>
          <input id="fee${participantCount}" type="number" name="fee${participantCount}" />
        </div>
        <div class="item">
          <label for="date${participantCount}">Desired Date <span>*</span></label>
          <input id="date${participantCount}" type="date" name="date${participantCount}" />
        </div>
        <div class="item">
          <p>Grade</p>
          <select name="grade${participantCount}">
            <option value="" disabled selected></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
          </select>
        </div>
      `;
  
      // Insert the new participant section before the add button
      participantsFieldset.insertBefore(newParticipant, addButton);
  
      // Switch to two-column layout if needed
      if (participantCount > 1) {
        participantsFieldset.classList.add('multiple');
      }
    });
  
    // Handle form submission
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission
  
      // Collect data
      const participants = [];
      for (let i = 1; i <= participantCount; i++) {
        const participant = {
          firstName: document.getElementById(`fname${i}`).value,
          activity: document.getElementById(`activity${i}`).value,
          fee: document.getElementById(`fee${i}`).value,
          date: document.getElementById(`date${i}`).value,
          grade: form[`grade${i}`].value,
        };
        participants.push(participant);
      }
  
      const adultContact = {
        name: document.getElementById('adult_name').value,
        address: document.getElementById('address1').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        email: document.getElementById('eaddress').value,
        phone: document.getElementById('phone').value,
        zip: document.getElementById('zip').value,
        relationship: form['relationship'].value,
      };
  
      // Generate a summary
      let summaryHTML = `<h2>Registration Summary</h2>`;
      participants.forEach((p, index) => {
        summaryHTML += `
          <h3>Participant ${index + 1}</h3>
          <p><strong>Name:</strong> ${p.firstName}</p>
          <p><strong>Activity #:</strong> ${p.activity}</p>
          <p><strong>Fee:</strong> $${p.fee}</p>
          <p><strong>Date:</strong> ${p.date}</p>
          <p><strong>Grade:</strong> ${p.grade}</p>
        `;
      });
  
      summaryHTML += `
        <h3>Household / Adult Primary Contact</h3>
        <p><strong>Name:</strong> ${adultContact.name}</p>
        <p><strong>Address:</strong> ${adultContact.address}</p>
        <p><strong>City:</strong> ${adultContact.city}</p>
        <p><strong>State:</strong> ${adultContact.state}</p>
        <p><strong>Email:</strong> ${adultContact.email}</p>
        <p><strong>Phone:</strong> ${adultContact.phone}</p>
        <p><strong>Zip:</strong> ${adultContact.zip}</p>
        <p><strong>Relationship:</strong> ${adultContact.relationship}</p>
      `;
  
      // Display the summary
      summarySection.innerHTML = summaryHTML;
  
      // Optionally, clear the form
      form.reset();
      participantsFieldset.classList.remove('multiple');
      participantCount = 1;
    });
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const summarySection = document.getElementById('summary');
    const adultNameInput = document.getElementById('adult_name');
    
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission (page reload)
  
      const feeInputs = document.querySelectorAll('input[id^="fee"]');
      let totalFees = 0;
      
      feeInputs.forEach(feeInput => {
        const feeValue = parseFloat(feeInput.value) || 0; 
        totalFees += feeValue;
      });
  
      const adultName = adultNameInput.value;
  
      form.style.display = 'none';
  
      summarySection.style.display = 'block';
  
      summarySection.innerHTML = `
        <h2>Thank you ${adultName} for registering.</h2>
        <p>You have registered ${feeInputs.length} participants and owe $${totalFees.toFixed(2)} in Fees.</p>
      `;
    });
  });
  