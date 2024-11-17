// Function to handle section navigation
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
  }
  
  // Add a new note
  function addNote() {
    const notesList = document.getElementById('notesList');
    const noteInput = document.getElementById('noteInput').value;
    if (noteInput) {
      const li = document.createElement('li');
      li.textContent = noteInput;
      notesList.appendChild(li);
      sendDataToServer({ type: 'note', content: noteInput });
      document.getElementById('noteInput').value = '';
    }
  }
  
  // Add a new task
  function addTask() {
    const tasksList = document.getElementById('tasksList');
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput) {
      const li = document.createElement('li');
      li.textContent = taskInput;
      tasksList.appendChild(li);
      sendDataToServer({ type: 'task', content: taskInput });
      document.getElementById('taskInput').value = '';
    }
  }
  
  // Simulate login and save user credentials
  function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Send login details to the server
    sendDataToServer({ type: 'login', username, password });
  
    alert('Login successful!');
    showSection('menu');
  }
  
  // Function to send data to your backend server
  function sendDataToServer(data) {
    fetch('https://your-server.com/api/saveData', { // Replace with your server URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
      console.log('Data sent to server:', result);
    })
    .catch(error => {
      console.error('Error sending data to server:', error);
    });
  }
  