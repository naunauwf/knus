document.addEventListener('DOMContentLoaded', () => {
  // Animasi Interaktif untuk Trilogy Box
  const trilogyItems = document.querySelectorAll('.trilogy-item');
  
  trilogyItems.forEach(item => {
    item.style.cursor = 'pointer';
    
    item.addEventListener('click', () => {
      // Hapus kelas 'active' dari semua item
      trilogyItems.forEach(i => i.classList.remove('active'));
      
      // Tambahkan kelas 'active' ke item yang diklik
      item.classList.add('active');
      
      // Efek micro-interaction feedback di console
      // const trilogyName = item.querySelector('.trilogy-name').textContent;
      // // console.log(`Menampilkan fokus pada nilai: ${trilogyName}`);
    });
  });  
});
