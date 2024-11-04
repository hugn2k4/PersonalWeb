document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navbarLinks = document.querySelectorAll(".navbar a");

    let currentSection = "";

    // Xác định phần hiện tại dựa trên vị trí cuộn
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) { // Điều chỉnh offset nếu cần
            currentSection = section.getAttribute("id");
        }
    });

    // Cập nhật class active cho liên kết phù hợp
    navbarLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentSection) {
            link.classList.add("active");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const text = "I'm Hùng Lê"; // Nội dung sau chữ "Hi."
    const element = document.getElementById("animated-text");
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!isDeleting) {
            // Hiển thị từng ký tự cho đến khi hoàn thành toàn bộ chuỗi
            element.innerHTML = text.slice(0, index);
            index++;
            if (index > text.length) {
                // Khi hoàn thành chuỗi, dừng lại trong 3 giây
                isDeleting = true;
                setTimeout(typeEffect, 3000); // Dừng 3 giây trước khi bắt đầu xóa
                return;
            }
        } else {
            // Xóa từng ký tự cho đến khi chuỗi rỗng
            element.innerHTML = text.slice(0, index);
            index--;
            if (index < 0) {
                // Khi đã xóa hết, quay lại trạng thái hiển thị và đặt lại index
                isDeleting = false;
                index = 0; // Đặt lại index về 0 để bắt đầu từ đầu
            }
        }
        
        // Thiết lập tốc độ: chậm hơn khi hiện, nhanh hơn khi xóa
        const speed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, speed);
    }

    typeEffect(); // Bắt đầu hiệu ứng khi tải trang
});