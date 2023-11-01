document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("text", );
    const text = "Halo Ai ❤ dibawah halaman ini ada tombol tauu, klik dehhh (kalo engga keliatan, coba scroll)";
    let currentIndex = 0;
  
    function addLetter() {
      textElement.textContent += text[currentIndex];
      currentIndex++;
  
      if (currentIndex < text.length) {
        setTimeout(addLetter, 100); // Waktu jeda antara setiap huruf (dalam milidetik)
      }
    }
  
    addLetter(); // Memulai animasi teks "Halo" saat halaman di-load
  });
  document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("harap", );
    const text = "Halo Ai ❤, Dalam suatu hubungan pasti engga akan berjalan selalu baikkk!, tapi rangkaian masalah yang kita alami selama berhubungan itu bakalan jadi fondasi paling kokoh dalam suatu hubungan. Erlang berharap kita engga berhenti disini. Kita bakal lanjut ke jenjang yang lebih serius (yaa walau masi lama sii) tapi seenggaknya Ai tau, kalo Erlang bener-bener sesayaaaanggg itu sama Ai!. Sekali lagi Happy Birthday ya Sayaaanggg!❤";
    let currentIndex = 0;
  
    function addLetter() {
      textElement.textContent += text[currentIndex];
      currentIndex++;
  
      if (currentIndex < text.length) {
        setTimeout(addLetter, 100); // Waktu jeda antara setiap huruf (dalam milidetik)
      }
    }
  
    addLetter(); // Memulai animasi teks "Halo" saat halaman di-load
  });
document.addEventListener("DOMContentLoaded", function() {
    const flippableImage = document.getElementById("1");
    flippableImage.style.transform = "scaleX(-1)";
  });


  // Fungsi untuk menggerakkan elemen secara acak
  function moveElementRandomly(element) {
    // Mendapatkan lebar dan tinggi elemen container
    const container = document.querySelector('btn');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Mendapatkan lebar dan tinggi elemen yang akan digerakkan
    const elementWidth = element.clientWidth;
    const elementHeight = element.clientHeight;

    // Menghitung posisi acak untuk elemen
    const randomX = Math.random() * (containerWidth - elementWidth);
    const randomY = Math.random() * (containerHeight - elementHeight);

    // Mengatur posisi elemen
    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
  }

  // Menangani klik tombol "Tidak"
  const tombolTidak = document.getElementById("tdk");
  tombolTidak.addEventListener("click", function () {
    // Lakukan sesuatu ketika tombol "Tidak" diklik

    // Contoh: Memindahkan elemen "tidak" secara acak
    const elemenTidak = document.getElementById("tdk");
    moveElementRandomly(elemenTidak);

    document.getElementById('tdk');
  });

function alert() {
    const tombolTidak = document.getElementById("tdk");
    tombolTidak.addEventListener("click", function() {
      alert('Waduhhh tombolnya rusak nihh');
    })
}
alert();



onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 50000);
  };
  