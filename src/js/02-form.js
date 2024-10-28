const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const STORAGE_KEY = 'feedback-form-state';

// 1. Sayfa yüklendiğinde localStorage verilerini alıp form alanlarına yerleştir
function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
}

// 2. Form verilerini kaydet
function saveFormData() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// 3. Formdaki input değişikliklerini dinle
form.addEventListener('input', saveFormData);

// 4. Form submit edildiğinde verileri konsola yazdır ve localStorage'ı temizle
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log({
    email: emailInput.value,
    message: messageInput.value,
  });
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

// Sayfa yüklendiğinde form verilerini yükle
loadFormData();
