document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const photoInput = document.getElementById('photo');
    const preview = document.getElementById('preview');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const photo = photoInput.files[0];
        const pan = photoInput.files[0];
        const license = photoInput.files[0];

        if (!name || !email || !address || !photo || ! pan || !license) {
            alert('Please fill in all fields and select a photo.');
            return;
        }

        // You can add additional validation here (e.g., file type, file size)

        // If all validation passes, you can submit the form to the server here
        alert('Form submitted successfully!');
        form.reset();
        preview.style.display = 'none';
    });

    // Display the selected image in the preview
    photoInput.addEventListener('change', function () {
        if (photoInput.files && photoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(photoInput.files[0]);
        }
    });
});