// Get references to form inputs and output elements
var generateButton = document.getElementById('generate');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var skillsInput = document.getElementById('skills');
var resumeOutput = document.getElementById('resume-output');
var outputName = document.getElementById('output-name');
var outputEmail = document.getElementById('output-email');
var outputSkills = document.getElementById('output-skills');
// Add event listener for the generate button
generateButton.addEventListener('click', function () {
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var skills = skillsInput.value.trim();
    if (name && email && skills) {
        // Populate the output fields
        outputName.textContent = name;
        outputEmail.textContent = email;
        outputSkills.textContent = skills;
        resumeOutput.style.display = 'block'; // Show the resume section
    }
    else {
        // Show an alert if fields are missing
        alert('Please fill in all fields!');
    }
});
