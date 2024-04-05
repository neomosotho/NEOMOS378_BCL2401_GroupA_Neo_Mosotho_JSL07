document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName'); 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
      <h1> Certification of Achievement </h1>
        <h3> This is to certify that </h3>
       <h2> ${studentName} </h3>
        <h3> has almost completed the </h3>
       <h2> ${courseName} </h2>
        <h3> with legendary perseverance and world-class bad-assery for never giving up </h3>
      <img style="width:60%" src="logo.png" alt="logo image">
        <h3> ${personalMessage} </h3>
    `;
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });

    
  
    //  🚨 Close the modal when the close button is clicked

    closeModal.addEventListener('click', function (click) {
      modal.style.display = 'none';
    });
    closeModal.style.cursor = 'pointer';
  });
  