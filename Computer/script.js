// SweetAlert 
document.getElementById('buyNowBtn').addEventListener('click', function() {
    Swal.fire({
      title: 'คุณต้องการดูสินค้าเพิ่มเติมไหม?',
      text: "คุณสามารถดูรายละเอียดสินค้าเพิ่มเติมได้",
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'ใช่, ดูสินค้าเพิ่มเติม',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'index.html';  // แก้ใขหน้าตรงนี้นะคับ
      }
    });
  });
  
// เมื่อคลิกที่ปุ่ม "ดูรายละเอียด" ให้เปลี่ยนรูปภาพใน Modal
const productModal = document.getElementById('productModal');

productModal.addEventListener('show.bs.modal', function (event) {
  // ดึงปุ่มที่ถูกคลิก
  const button = event.relatedTarget;
  // ดึง URL ของภาพจาก data-bs-image
  const imageUrl = button.getAttribute('data-bs-image');
  // หา element ของภาพใน Modal
  const modalImage = document.getElementById('productImage');
  
  // ตั้งค่ารูปภาพใน Modal ให้เป็นรูปที่ถูกคลิก
  modalImage.src = imageUrl;
});

  