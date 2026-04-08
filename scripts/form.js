// Product Review Form JavaScript

// Product Array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate Product Name select element
function populateProductSelect() {
    const selectElement = document.getElementById('productName');

    if (!selectElement) return;

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);
        selectElement.appendChild(option);
    });
}

// Update last modified date in footer
function updateLastModified() {
    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        const now = new Date();
        const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        lastModifiedSpan.textContent = formattedDate;
    }
}

// Form validation before submit
function validateForm(event) {
    const productName = document.getElementById('productName');
    const rating = document.querySelector('input[name="rating"]:checked');
    const installDate = document.getElementById('installDate');

    if (!productName.value) {
        event.preventDefault();
        alert('Please select a product');
        productName.focus();
        return false;
    }

    if (!rating) {
        event.preventDefault();
        alert('Please select an overall rating');
        return false;
    }

    if (!installDate.value) {
        event.preventDefault();
        alert('Please enter the date of installation');
        installDate.focus();
        return false;
    }

    return true;
}

// Initialize page
document.addEventListener('DOMContentLoaded', function () {
    populateProductSelect();
    updateLastModified();

    const form = document.getElementById('reviewForm');
    if (form) {
        form.addEventListener('submit', validateForm);
    }

    console.log('Product Review Form loaded successfully');
});