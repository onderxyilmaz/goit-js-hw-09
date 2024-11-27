const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Form verilerini local storage'dan yükle
const loadFormData = () => {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            const { email, message } = JSON.parse(savedData);
            form.elements.email.value = email || '';
            form.elements.message.value = message || '';
        }
    } catch (error) {
        console.error('Error loading form data:', error);
    }
};

// Form verilerini local storage'a kaydet
const saveFormData = () => {
    const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

// Input olayını dinle (delegation kullanarak)
form.addEventListener('input', event => {
    // Sadece email ve message alanlarındaki değişiklikleri kaydet
    if (event.target.matches('input[name="email"], textarea[name="message"]')) {
        saveFormData();
    }
});

// Form submit olayını dinle
form.addEventListener('submit', event => {
    event.preventDefault();
    
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    
    // Her iki alanın da dolu olduğunu kontrol et
    if (!email || !message) {
        alert('Lütfen tüm alanları doldurun!');
        return;
    }
    
    // Form verilerini konsola yazdır
    const formData = { email, message };
    console.log(formData);
    
    // LocalStorage ve formu temizle
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});

// Sayfa yüklendiğinde form verilerini yükle
document.addEventListener('DOMContentLoaded', loadFormData);