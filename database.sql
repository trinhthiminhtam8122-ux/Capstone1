-- ==========================================
-- BÀI TẬP CAPSTONE 1 - BACKEND PINTEREST CLONE
-- FILE SQL TỔNG HỢP KHỞI TẠO CƠ SỞ DỮ LIỆU
-- Hướng dẫn chạy trên TablePlus:
-- 1. Kết nối tới MySQL Server của bạn.
-- 2. Nhấn CMD + T (hoặc chọn SQL Query editor).
-- 3. Copy toàn bộ nội dung file này dán vào editor.
-- 4. Nhấn Run All hoặc CMD + Enter để thực thi toàn bộ script.
-- ==========================================

-- 1. Tạo Database
CREATE DATABASE IF NOT EXISTS capstone_db;
USE capstone_db;

-- 2. Xóa các bảng cũ nếu đã tồn tại để tránh xung đột (tùy chọn)
DROP TABLE IF EXISTS SavedImages;
DROP TABLE IF EXISTS Comments;
DROP TABLE IF EXISTS Images;
DROP TABLE IF EXISTS Users;

-- 3. Tạo bảng Người Dùng (Users)
CREATE TABLE Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  fullName VARCHAR(255) NOT NULL,
  age INT,
  avatar VARCHAR(255) DEFAULT 'default-avatar.png'
);

-- 4. Tạo bảng Hình Ảnh (Images)
CREATE TABLE Images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  description TEXT,
  userId INT,
  FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
);

-- 5. Tạo bảng Bình Luận (Comments)
CREATE TABLE Comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT,
  imageId INT,
  commentDate DATETIME DEFAULT CURRENT_TIMESTAMP,
  content TEXT NOT NULL,
  FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE,
  FOREIGN KEY (imageId) REFERENCES Images(id) ON DELETE CASCADE
);

-- 6. Tạo bảng Lưu Ảnh (SavedImages)
CREATE TABLE SavedImages (
  userId INT,
  imageId INT,
  savedDate DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (userId, imageId),
  FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE,
  FOREIGN KEY (imageId) REFERENCES Images(id) ON DELETE CASCADE
);

-- 7. Chèn dữ liệu mẫu (Mock Data) để kiểm thử API dễ dàng hơn
-- Mật khẩu mẫu cho tất cả tài khoản dưới đây là '123456' (Đã được mã hóa bằng bcrypt)
INSERT INTO Users (email, password, fullName, age, avatar) VALUES
('admin@gmail.com', '$2b$10$dbGeMZPPjdkjSC1T6JqbC.Xg9CZGd8mgbWqn.WnZ8zcSYLgDbOcL.', 'Quản trị viên', 25, 'admin-avatar.png'),
('nguyenvana@gmail.com', '$2b$10$ulSiKPnPgC7WaQ23mQxbEuiuJ78isWbEVy7P22Yo3gaTwbO90ceA6', 'Nguyễn Văn A', 22, 'user-a.png'),
('tranlhithib@gmail.com', '$2b$10$iESTiScymQeYeBhLpfVTTeRCr19G/pOa6scZ8EW.pTeJZdtiwF/GC', 'Trần Thị B', 20, 'user-b.png');

-- Chèn ảnh mẫu
INSERT INTO Images (title, url, description, userId) VALUES
('Thành phố lên đèn', 'https://picsum.photos/800/600?random=1', 'Ảnh chụp thành phố ban đêm rất đẹp', 1),
('Phong cảnh thiên nhiên', 'https://picsum.photos/800/600?random=2', 'Rừng cây mùa thu lá vàng rơi', 1),
('Món ăn ngon Việt Nam', 'https://picsum.photos/800/600?random=3', 'Phở bò Hà Nội truyền thống', 2),
('Chú mèo con dễ thương', 'https://picsum.photos/800/600?random=4', 'Mèo con lông trắng mắt xanh ngủ say', 3);

-- Chèn bình luận mẫu
INSERT INTO Comments (userId, imageId, content) VALUES
(2, 1, 'Wow! Ảnh chụp đêm nghệ thuật quá!'),
(3, 1, 'Bạn dùng máy ảnh gì chụp vậy?'),
(1, 3, 'Trông ngon mắt thật sự, thèm phở quá!');

-- Chèn danh sách ảnh đã lưu
INSERT INTO SavedImages (userId, imageId) VALUES
(2, 1), -- Nguyễn Văn A lưu ảnh số 1
(2, 2), -- Nguyễn Văn A lưu ảnh số 2
(3, 1); -- Trần Thị B lưu ảnh số 1
