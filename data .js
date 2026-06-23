// [Tiêu chí 2] Mảng tĩnh lưu trữ đúng 8 đối tượng giải đấu (Dữ liệu gốc)
const EVENTS_DATA = [
    { 
        id: 1, 
        title: "Giải Đấu Liên Quân Mobile - King of Solo", 
        category: "Mobile", 
        level: "Cơ bản", 
        price: "Miễn phí", 
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500", 
        description: "Giải đấu cá nhân dành cho các kiện tướng tranh tài kỹ năng định hướng và tư duy di chuyển bản đồ đơn độc." 
    },
    { 
        id: 2, 
        title: "Championship League League of Legends", 
        category: "PC", 
        level: "Nâng cao", 
        price: "150.000đ", 
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500", 
        description: "Giải đấu đội hình 5v5 chuyên nghiệp trên bản đồ Summoner's Rift, yêu cầu chiến thuật và phối hợp đồng đội cao." 
    },
    { 
        id: 3, 
        title: "PUBG Mobile - Khóa Huấn Luyện Sinh Tồn", 
        category: "Mobile", 
        level: "Cơ bản", 
        price: "Miễn phí", 
        image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?w=500", 
        description: "Trải nghiệm nhảy dù bắn súng sinh tồn, học cách chạy bo, ẩn nấp và xử lý các tình huống đọ súng cự ly gần." 
    },
    { 
        id: 4, 
        title: "Valorant Mini Tournament - Spike Rush", 
        category: "PC", 
        level: "Nâng cao", 
        price: "200.000đ", 
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500", 
        description: "Giải đấu súng bắn súng chiến thuật góc nhìn thứ nhất kết hợp kỹ năng đặc vụ đầy kịch tính và tốc độ cao." 
    },
    { 
        id: 5, 
        title: "TFT Teamfight Tactics - Kỳ Thủ Cờ Nhân Phẩm", 
        category: "PC", 
        level: "Cơ bản", 
        price: "Miễn phí", 
        image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=500", 
        description: "Giải đấu cờ tự động Đấu Trường Chân Lý, nơi tư duy sắp xếp đội hình và quản lý tiền quyết định chiến thắng." 
    },
    { 
        id: 6, 
        title: "FC Online - Đường Đua Sân Cỏ Điện Tử", 
        category: "PC", 
        level: "Cơ bản", 
        price: "99.000đ", 
        image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500", 
        description: "Sân chơi dành cho các huấn luyện viên đam mê bóng đá thể hiện kỹ năng điều khiển cầu thủ và tư duy chiến thuật." 
    },
    { 
        id: 7, 
        title: "Free Fire - Đại Chiến Học Đường", 
        category: "Mobile", 
        level: "Cơ bản", 
        price: "Miễn phí", 
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500", 
        description: "Giải đấu sinh tồn tốc độ cao dành cho cộng đồng học sinh, sinh viên với những pha giao tranh liên tục không ngừng nghỉ." 
    },
    { 
        id: 8, 
        title: "CS2 Pro League - Thử Thách Aim Master", 
        category: "PC", 
        level: "Nâng cao", 
        price: "250.000đ", 
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500", 
        description: "Đấu trường bắn súng kinh điển huyền thoại đòi hỏi kỹ năng kiểm soát tâm súng và thuộc lòng các vị trí ném bom chiến thuật." 
    }
];