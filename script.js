// Function to toggle box animation
function toggleBoxAnimation() {
  const box = document.getElementById('box');
  box.classList.toggle('animate');
}

// Function to show modal
function showModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('hidden');
  modal.classList.add('show');
}

// Function to hide modal
function hideModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('show');
  modal.classList.add('hidden');
}

// Function to toggle spinner visibility
function toggleSpinner() {
  const spinner = document.getElementById('spinner');
  spinner.classList.toggle('hidden');
}

// Event listeners
document.getElementById('animateBtn').addEventListener('click', toggleBoxAnimation);
document.getElementById('openModal').addEventListener('click', showModal);
document.getElementById('closeModal').addEventListener('click', hideModal);
document.getElementById('toggleSpinner').addEventListener('click', toggleSpinner);
