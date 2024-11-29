// Fungsi untuk menampilkan/menghilangkan navbar saat tombol hamburger diklik
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    
    // Menambahkan atau menghapus class 'show' untuk menampilkan menu
    navLinks.classList.toggle('show');


//intercept form nya
}window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Your question submited! Thankyou ^^ ~Jey");
      })
    });
  });



  // Function untuk menampilkan deskripsi skill
function showSkillDescription(description) {
    const descriptionBox = document.getElementById('skill-description');
    const descriptionText = document.getElementById('description-text');

    // Masukkan deskripsi ke dalam box
    descriptionText.textContent = description;

    // Tampilkan box deskripsi
    descriptionBox.classList.remove('hidden');
    descriptionBox.style.display = 'block';
}

// Function untuk menyembunyikan deskripsi skill
function hideSkillDescription() {
    const descriptionBox = document.getElementById('skill-description');
    descriptionBox.style.display = 'none';
    descriptionBox.classList.add('hidden');
}

// Event listener untuk setiap skill-item
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', function () {
        const description = this.getAttribute('data-description');
        showSkillDescription(description);
    });
});

