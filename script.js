document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const messageBox = document.getElementById('message-box');

    // Simulate sending data (in real-world, use AJAX or fetch)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    messageBox.textContent = 'Cảm ơn bạn đã gửi tin nhắn!';
    messageBox.style.display = 'block';

    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
