// Get references to form inputs and output elements
const generateButton = document.getElementById('generate') as HTMLButtonElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;

const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
const outputName = document.getElementById('output-name') as HTMLSpanElement;
const outputEmail = document.getElementById('output-email') as HTMLSpanElement;
const outputSkills = document.getElementById('output-skills') as HTMLSpanElement;

// Add event listener for the generate button
generateButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const skills = skillsInput.value.trim();

    if (name && email && skills) {
        // Populate the output fields
        outputName.textContent = name;
        outputEmail.textContent = email;
        outputSkills.textContent = skills;
        resumeOutput.style.display = 'block'; // Show the resume section
    } else {
        // Show an alert if fields are missing
        alert('Please fill in all fields!');
    }
});
