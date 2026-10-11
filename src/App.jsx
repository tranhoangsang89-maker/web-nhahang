import React, { useState, useEffect } from 'react';
import {
  PhoneCall,
  MapPin,
  Clock,
  Car,
  Sparkles,
  Leaf,
  Users,
  ChevronLeft,
  ChevronRight,
  Star,
  ExternalLink,
  Flame,
  CheckCircle2,
  Calendar,
  X,
  Send,
  Heart,
  Share2,
  ChefHat,
  Utensils,
  BookOpen,
  Info
} from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [detailDish, setDetailDish] = useState(null);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: new Date().toISOString().split('T')[0],
    time: '18:30',
    note: ''
  });

  const HOTLINE = '0909 888 678';
  const HOTLINE_TEL = 'tel:0909888678';
  const ZALO_LINK = 'https://zalo.me/0909888678';
  const GOOGLE_MAPS_LINK = 'https://maps.google.com/?q=Nhà+Hàng+Bếp+Quê+Hương+Vị+Cơm+Nhà';
  const FANPAGE_LINK = 'https://facebook.com';

  const heroSlides = [
    {
      id: 1,
      image: '/images/dishes/ca-loc-kho-to.jpg',
      tag: 'Món Ngon Số 1',
      title: 'Cá Lóc Kho Tộ Đất Nung',
      desc: 'Kho kẹo sền sệt, tiêu sọ thơm nồng chuẩn vị cơm má nấu',
      price: '139.000đ'
    },
    {
      id: 2,
      image: '/images/dishes/lau-cu-lao.jpg',
      tag: 'Đặc Sản Nam Bộ',
      title: 'Lẩu Cù Lao Than Hồng',
      desc: 'Nét tinh hoa ẩm thực xưa, nước dùng thanh ngọt sum vầy',
      price: '289.000đ'
    },
    {
      id: 3,
      image: '/images/dishes/ga-hap-la-chanh.jpg',
      tag: 'Best Seller',
      title: 'Gà Ta Hấp Lá Chanh Quê',
      desc: 'Da vàng giòn sần sật, thịt ngọt tự nhiên chấm muối tiêu chanh',
      price: '199.000đ'
    },
    {
      id: 4,
      image: '/images/dishes/suon-rim-man-ngot.jpg',
      tag: 'Đậm Vị Cơm Nhà',
      title: 'Sườn Non Rim Mặn Ngọt',
      desc: 'Sườn heo mềm ngậy, áo sốt caramel óng ánh cực hao cơm',
      price: '149.000đ'
    },
    {
      id: 5,
      image: '/images/dishes/canh-chua-ca-hu.jpg',
      tag: 'Thanh Mát Đồng Quê',
      title: 'Canh Chua Bông Điên Điển',
      desc: 'Vị chua thanh me chín, cá béo ngọt quyện rau đồng nội',
      price: '129.000đ'
    },
    {
      id: 6,
      image: '/images/dishes/goi-ngo-sen.jpg',
      tag: 'Khai Vị Giòn Ngon',
      title: 'Gỏi Ngó Sen Tôm Thịt',
      desc: 'Ngó sen trắng muốt giòn tan, tôm sú ngọt ăn kèm bánh phồng',
      price: '119.000đ'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  // Băng chuyền tự động cuộn sau mỗi 3.8s
  useEffect(() => {
    if (isCarouselHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isCarouselHovered, heroSlides.length]);

  const handleNextSlide = (e) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = (e) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const menuItems = [
    {
      id: 1,
      name: 'Cá Lóc Kho Tộ',
      price: '139.000đ',
      portion: '2 - 3 người dùng',
      tag: 'Best Seller',
      desc: 'Cá lóc đồng kho kẹo sền sệt trong tộ đất nung, tiêu sọ cay nồng, ăn cùng cơm cháy giòn rụm.',
      image: '/images/dishes/ca-loc-kho-to.jpg',
      rating: '5.0',
      reviews: 142,
      story: 'Món ăn biểu tượng của mâm cơm gia đình Nam Bộ. Cá lóc đồng tươi roi rói được kho kỹ trong tộ đất nung giữ nhiệt, khi bưng ra bàn vẫn còn sôi lục bục với mùi tiêu sọ thơm nức mũi.',
      ingredients: [
        'Cá lóc đồng tươi sống (thịt săn chắc, béo ngọt)',
        'Nước mắm nhĩ Phú Quốc truyền thống 40 độ đạm',
        'Đường thốt nốt nguyên chất (tạo màu cánh gián tự nhiên)',
        'Tiêu sọ Phú Quốc xay dập, ớt chỉ thiên cay nồng',
        'Mỡ gáy heo phi giòn béo ngậy & đầu hành hoa'
      ],
      cookingSecret: 'Thắng nước màu từ đường thốt nốt già lửa, ướp cá đẫm gia vị 30 phút rồi kho than liu riu trong tộ đất nung suốt 45 phút cho tới khi nước sốt sánh kẹo bọc trọn thớ cá.',
      enjoyMethod: 'Dùng nóng hổi ngay tại bàn. Rưới thìa sốt kho kẹo đậm đà lên cơm trắng nóng hổi, hoặc quẹt miếng cơm cháy đáy nồi giòn tan kèm đĩa rau luộc đồng quê.',
      bestPairWith: 'Canh Chua Cá Hú Bông Điên Điển (cặp bài trùng huyền thoại)'
    },
    {
      id: 2,
      name: 'Lẩu Cù Lao Miền Tây',
      price: '289.000đ',
      portion: '3 - 4 người dùng',
      tag: 'Món Đặc Trưng',
      desc: 'Nét tinh hoa ẩm thực xưa dùng than hồng đượm, nước hầm xương củ quả ngọt thanh tự nhiên.',
      image: '/images/dishes/lau-cu-lao.jpg',
      rating: '4.9',
      reviews: 98,
      story: 'Chiếc lẩu cù lao nhôm xưa với ống khói than đước rực lửa ở trung tâm tượng trưng cho dải cù lao xanh ngắt giữa dòng sông Mekong. Món ăn gắn liền với ngày lễ tiệc, giỗ chạp và sum họp gia đình của người miền Tây hào sảng.',
      ingredients: [
        'Nước hầm xương ống & củ cải ngọt thanh tự nhiên',
        'Tim heo, cật heo, gan heo tươi sơ chế kỹ',
        'Chả lụa cuộn nấm mèo tỉa hoa văn truyền thống',
        'Mực tươi giòn ngọt, trứng cút bùi béo',
        'Bắp non, cà rốt tỉa hoa, bông cải & rổ rau đồng phong phú'
      ],
      cookingSecret: 'Nước dùng ninh chậm 4 tiếng từ xương và rau củ, tuyệt đối không dùng bột ngọt hóa học. Than hồng giữ nhiệt âm ỉ trong ống khói giúp đồ ăn luôn nóng sốt mà nước canh trong vắt.',
      enjoyMethod: 'Gắp rau sống, bún tươi vào chén, chan muỗng nước lẩu thanh ngọt đang sôi lăn tăn, chấm thịt và lòng heo với nước mắm nhĩ ớt hiểm cắt lát cay xè.',
      bestPairWith: 'Gỏi Ngó Sen Tôm Thịt Củ Hũ Dừa (khai vị thanh mát)'
    },
    {
      id: 3,
      name: 'Gà Hấp Lá Chanh Quê',
      price: '199.000đ',
      portion: '2 - 4 người dùng',
      tag: 'Best Seller',
      desc: 'Gà ta thả vườn da vàng giòn sần sật, thịt ngọt tự nhiên quyện mùi thơm thanh từ lá chanh non.',
      image: '/images/dishes/ga-hap-la-chanh.jpg',
      rating: '4.9',
      reviews: 115,
      story: 'Tuyển chọn từ gà ta thả vườn tự nhiên trên đồi, ăn ngô thóc nên thớ thịt săn chắc, thơm ngọt tự nhiên và lớp da vàng ươm bóng bẩy không ngấy.',
      ingredients: [
        'Gà ta thả đồi chuẩn 1.4kg - 1.5kg (thịt chắc, ngọt)',
        'Lá chanh bánh tẻ vườn quê thái sợi chỉ tơ',
        'Rượu nếp ướp thơm, củ nén, gừng non và muối hột',
        'Chén muối hột rang, tiêu đen giã dập & chanh tươi ớt hiểm'
      ],
      cookingSecret: 'Hấp cách thủy lửa vừa cùng gừng và muối hột để khóa chặt toàn bộ vị ngọt tinh túy bên trong. Lúc gà vừa chín tới mới rải lá chanh thái chỉ để tinh dầu bay hương ngào ngạt mà không bị đắng.',
      enjoyMethod: 'Chấm từng miếng gà da vàng giòn rụm vào chén muối tiêu chanh ớt giã nhuyễn. Vị cay nồng của tiêu ớt tôn lên độ ngọt béo tự nhiên của thịt gà quê.',
      bestPairWith: 'Xôi nếp nương dẻo thơm hoặc đĩa rau răm non'
    },
    {
      id: 4,
      name: 'Sườn Non Rim Mặn Ngọt',
      price: '149.000đ',
      portion: '2 - 3 người dùng',
      tag: 'Đậm Vị Cơm Nhà',
      desc: 'Sườn heo non mềm ngậy, áo lớp sốt caramel óng ánh đậm đà, cực kỳ hao cơm cho gia đình.',
      image: '/images/dishes/suon-rim-man-ngot.jpg',
      rating: '4.8',
      reviews: 86,
      story: 'Món ăn "tốn cơm" nhất trong ký ức tuổi thơ của người Việt. Từng dẻ sườn non sụn giòn sần sật, áo lớp sốt nước mắm đường nâu óng ả, cắn vào mềm róc xương thơm nức mũi.',
      ingredients: [
        'Sườn non heo loại 1 dày thịt, sụn non giòn',
        'Nước dừa xiêm Bến Tre tươi ngọt thanh mát',
        'Nước mắm cá cơm thơm lừng, đường nâu cô đặc',
        'Tỏi Lý Sơn băm phi vàng, tiêu đen & ớt hiểm cay dịu'
      ],
      cookingSecret: 'Chiên xém cạnh vàng đều 2 mặt dẻ sườn để giữ độ mọng nước bên trong, sau đó rim chậm cùng nước dừa tươi đến khi cạn dần, tạo thành lớp sốt caramel dẻo quánh óng ánh bọc quanh từng miếng sườn.',
      enjoyMethod: 'Cắn ngập miếng sườn non mềm ngọt róc xương, chan thêm muỗng nước sốt kẹo lên bát cơm trắng dẻo thơm. Ăn kèm dưa leo, cà chua tươi giòn.',
      bestPairWith: 'Canh Chua Cá Hú hoặc Canh Cải Nấu Tôm'
    },
    {
      id: 5,
      name: 'Canh Chua Cá Hú Bông Điên Điển',
      price: '129.000đ',
      portion: '2 - 3 người dùng',
      tag: 'Thanh Mát',
      desc: 'Vị chua dịu của me chín, cá béo ngọt quyện mùi ngò gai, bạc hà tươi giòn chuẩn vị sông nước.',
      image: '/images/dishes/canh-chua-ca-hu.jpg',
      rating: '4.9',
      reviews: 120,
      story: 'Đặc sản kinh điển của mùa nước nổi Nam Bộ. Khứa cá hú da trơn sông Tiền béo ngậy kết hợp cùng hoa điên điển vàng rực nở rộ ven sông tạo nên bát canh chua vừa thanh mát vừa nồng nàn.',
      ingredients: [
        'Cá hú sông tươi thịt béo ngọt, da mướt',
        'Bông điên điển tươi hái sớm giòn ngọt',
        'Nước cốt me chín dốt tự nhiên chua dịu',
        'Thơm (dứa), cà chua mọng, bạc hà xốp giòn, đậu bắp, giá đỗ',
        'Ngò gai, rau ngổ (ngò ôm), tỏi phi vàng rụm & ớt hiểm'
      ],
      cookingSecret: 'Nấu nước dùng me thanh tao, thả cá hú vào nấu vừa chín tới để giữ độ béo mềm. Bông điên điển và rau thơm chỉ cho vào khi tắt bếp để giữ trọn màu vàng tươi và độ giòn ngọt tự nhiên.',
      enjoyMethod: 'Vớt khứa cá hú ra đĩa riêng, dầm chén nước mắm mặn ớt hiểm nguyên chất để chấm thịt cá. Húp từng thìa canh chua dịu thanh mát đánh thức mọi vị giác.',
      bestPairWith: 'Cá Lóc Kho Tộ (bộ đôi bất hủ của ẩm thực Việt)'
    },
    {
      id: 6,
      name: 'Gỏi Ngó Sen Tôm Thịt Củ Hũ Dừa',
      price: '119.000đ',
      portion: '2 - 3 người dùng',
      tag: 'Khai Vị Giòn Ngon',
      desc: 'Ngó sen trắng muốt giòn tan, tôm sú tươi luộc ngọt nước kết hợp nước mắm chua ngọt thượng hạng.',
      image: '/images/dishes/goi-ngo-sen.jpg',
      rating: '5.0',
      reviews: 164,
      story: 'Món khai vị thanh mát kết hợp giữa ngó sen đầm lầy và phần củ hũ dừa non quý giá trên đọt dừa Bến Tre. Vị chua ngọt giòn rụm giúp khởi động vị giác hoàn hảo trước bữa tiệc cơm quê.',
      ingredients: [
        'Ngó sen tươi ngâm giấm đường giòn sần sật',
        'Củ hũ dừa non ngọt bùi trắng muốt',
        'Tôm sú tươi luộc đỏ au chẻ đôi ngọt lịm',
        'Thịt ba chỉ heo thái lát mỏng mềm béo',
        'Rau răm, húng lủi, đậu phộng rang giã dập & hành phi vàng',
        'Bánh phồng tôm chiên phồng xốp giòn tan ăn kèm'
      ],
      cookingSecret: 'Nước sốt trộn gỏi pha chế theo tỷ lệ vàng: nước mắm nhĩ ngon, nước cốt chanh tươi, đường phèn thanh và tỏi ớt giã nhuyễn. Trộn nhẹ tay ngay trước khi dọn để nguyên liệu luôn giữ độ giòn tan không bị ỉu nước.',
      enjoyMethod: 'Gắp một phần gỏi đầy đặn tôm, thịt, ngó sen đặt lên miếng bánh phồng tôm giòn xốp rồi thưởng thức. Độ giòn, chua cay mặn ngọt bùng nổ trong khoang miệng.',
      bestPairWith: 'Món khai vị dùng trước Lẩu Cù Lao hoặc Cơm Niêu'
    }
  ];

  const highlights = [
    {
      icon: <Car className="w-7 h-7 text-earth-600" />,
      title: 'Chỗ Đậu Ô Tô Rộng Rãi',
      description: 'Bãi đỗ xe ô tô và xe máy miễn phí ngay trước sảnh, có bảo vệ trông giữ 24/7 an tâm dùng bữa.'
    },
    {
      icon: <Sparkles className="w-7 h-7 text-gold-600" />,
      title: 'Phòng Lạnh & Tiệc Riêng',
      description: 'Hệ thống phòng VIP máy lạnh riêng tư từ 8 - 40 khách, trang nhã cho tiệc gia đình, tiếp khách.'
    },
    {
      icon: <Leaf className="w-7 h-7 text-emerald-600" />,
      title: 'Nguyên Liệu Tươi Sạch',
      description: 'Rau củ hữu cơ từ vườn quê, cá sông gà đồi nhập mới mỗi sáng sớm, tuyệt đối không chất bảo quản.'
    },
    {
      icon: <Users className="w-7 h-7 text-amber-700" />,
      title: 'Nhận Đặt Tiệc & Sự Kiện',
      description: 'Nhận đặt tiệc sinh nhật, họp mặt đồng hương, kỷ niệm gia đình với menu thiết kế riêng ưu đãi lớn.'
    }
  ];

  const ambiancePhotos = [
    {
      url: '/images/ambiance/khong-gian-moc-mac.jpg',
      title: 'Không gian ấm cúng mộc mạc',
      caption: 'Bàn ghế gỗ mộc, đèn lồng tre và tường gạch cổ truyền'
    },
    {
      url: '/images/ambiance/phong-vip-am-cung.jpg',
      title: 'Phòng VIP riêng tư',
      caption: 'Đèn lồng lụa, vách gỗ chạm trổ sang trọng & máy lạnh mát mẻ'
    },
    {
      url: '/images/ambiance/san-vuon-que-huong.jpg',
      title: 'Góc sân vườn thoáng đãng',
      caption: 'Rợp bóng hoa giấy, hàng chuối xanh & lu nước gốm mộc'
    },
    {
      url: '/images/ambiance/ban-tiec-sum-vay.jpg',
      title: 'Bàn tiệc gia đình sum vầy',
      caption: 'Mâm cơm quây quần ấm cúng trọn vẹn tình thân'
    }
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIsBookingOpen(false);
    }, 2500);
  };

  const copyHotline = () => {
    navigator.clipboard.writeText(HOTLINE.replace(/\s+/g, ''));
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#faf6f0] text-wood-900 font-sans pb-24 md:pb-12 antialiased selection:bg-earth-500 selection:text-white">
      {/* TOP NOTIFICATION & DEMO ATTRIBUTION BAR */}
      <div className="bg-wood-950 text-gold-300 text-xs sm:text-sm py-2 px-4 text-center font-medium border-b border-wood-800/80 flex flex-wrap items-center justify-center gap-2 sm:gap-3 shadow-inner">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-earth-900 text-gold-200 text-[11px] font-bold border border-earth-700/80 shadow-xs">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          BẢN DEMO
        </span>
        <span className="text-wood-200">
          Website demo Nhà Hàng được thực hiện bởi{' '}
          <strong className="text-gold-300 font-bold">Sang Citizen</strong>
        </span>
        <span className="text-wood-600 hidden sm:inline">•</span>
        <a
          href="tel:0888003205"
          className="inline-flex items-center gap-1.5 text-gold-300 hover:text-white font-bold underline decoration-gold-400/50 hover:decoration-white transition"
        >
          <PhoneCall className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
          <span>0888.003.205</span>
        </a>
      </div>

      {/* 1. HEADER & HERO SECTION */}
      <header className="sticky top-0 z-40 bg-[#faf6f0]/95 backdrop-blur-md border-b border-wood-200/70 transition-all shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-earth-600 to-wood-900 flex items-center justify-center shadow-md shadow-earth-900/10 text-white font-serif font-black text-xl sm:text-2xl tracking-tight border border-earth-400/30 group-hover:scale-105 transition-transform">
              BQ
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-extrabold text-lg sm:text-2xl text-wood-950 tracking-wide uppercase leading-tight group-hover:text-earth-700 transition-colors">
                BẾP QUÊ
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-earth-700 tracking-widest uppercase">
                Hương Vị Cơm Nhà
              </span>
            </div>
          </a>

          {/* Quick Header CTA */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#thong-tin"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-wood-800 hover:text-earth-700 px-3 py-1.5 rounded-full hover:bg-wood-100 transition"
            >
              <Clock className="w-4 h-4 text-earth-600" />
              <span>10:00 - 22:00</span>
            </a>
            <a
              href={HOTLINE_TEL}
              className="inline-flex items-center gap-2 bg-wood-900 hover:bg-earth-700 text-gold-200 hover:text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm shadow-md transition-all duration-200 active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 animate-bounce" />
              <span>{HOTLINE}</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION MAIN */}
      <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content / Mobile Top */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-earth-100/90 border border-earth-300 text-earth-800 text-xs sm:text-sm font-semibold shadow-xs">
                <Flame className="w-4 h-4 text-earth-600 animate-pulse" />
                <span>Gìn Giữ Ẩm Thực Cơm Nhà Miền Nam</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-black text-wood-950 leading-[1.2] tracking-tight">
                Hương Vị Ấm Nồng <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-earth-600 via-earth-700 to-amber-700">
                  Chuẩn Cơm Nhà Nấu
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-wood-700 max-w-xl font-normal leading-relaxed">
                Tạm gác lại âu lo phố thị, ghé Bếp Quê để tận hưởng mâm cơm gia đình ấm cúng. 
                Từng thớ cá kho kẹo, bát canh chua thanh mát đều được nấu từ <strong className="text-wood-900 font-semibold">nguyên liệu tươi sạch mỗi sớm</strong>, 
                đượm nồng vị quê xưa.
              </p>

              {/* Banner Băng Chuyền Ảnh Món Ăn Trên Mobile (Tỉ lệ chữ nhật aspect-[4/3] chuẩn thực đơn, tự động cuộn) */}
              <div className="w-full lg:hidden my-3">
                <div
                  className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/95 bg-wood-950 select-none group/mcarousel"
                  onMouseEnter={() => setIsCarouselHovered(true)}
                  onMouseLeave={() => setIsCarouselHovered(false)}
                >
                  {heroSlides.map((slide, index) => {
                    const isActive = index === currentSlide;
                    return (
                      <div
                        key={slide.id}
                        onClick={() => {
                          const match = menuItems.find((m) => m.id === slide.id);
                          if (match) setDetailDish(match);
                        }}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out cursor-pointer ${
                          isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                        }`}
                      >
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                          loading={index === 0 ? 'eager' : 'lazy'}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-wood-950/95 via-wood-950/30 to-transparent flex flex-col justify-end p-4 text-white text-left">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="bg-gradient-to-r from-gold-500 to-amber-500 text-wood-950 font-extrabold text-[10px] px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-sm">
                              {slide.tag}
                            </span>
                            <span className="bg-wood-900/85 backdrop-blur-md text-gold-300 font-serif font-black text-xs px-2 py-0.5 rounded-md border border-wood-700">
                              {slide.price}
                            </span>
                          </div>
                          <h3 className="font-serif font-bold text-lg text-white leading-tight">
                            {slide.title}
                          </h3>
                          <p className="text-xs text-wood-200 mt-0.5 line-clamp-1 flex items-center justify-between">
                            <span>{slide.desc}</span>
                            <span className="text-gold-300 font-semibold text-[10px] underline ml-2 shrink-0">Chi tiết &gt;</span>
                          </p>
                        </div>
                      </div>
                    );
                  })}

                  {/* Nút lùi / tiến */}
                  <button
                    onClick={handlePrevSlide}
                    aria-label="Món trước"
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-wood-950/60 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 active:scale-90"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    aria-label="Món tiếp theo"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-wood-950/60 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 active:scale-90"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5">
                    {heroSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Đến slide ${idx + 1}`}
                        className={`transition-all duration-300 rounded-full ${
                          idx === currentSlide
                            ? 'w-5 h-1.5 bg-gold-400'
                            : 'w-1.5 h-1.5 bg-white/50'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Tag trạng thái tự động cuộn */}
                  <div className="absolute top-2.5 right-2.5 z-20 bg-wood-950/70 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20 text-[10px] text-gold-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Tự động cuộn</span>
                  </div>
                </div>
              </div>

              {/* 2 CTA Buttons - FULL WIDTH ON MOBILE */}
              <div className="w-full pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={HOTLINE_TEL}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-earth-600 to-earth-700 hover:from-earth-500 hover:to-earth-600 text-white font-bold text-base sm:text-lg px-6 py-4 rounded-2xl shadow-xl shadow-earth-700/25 transition-all transform active:scale-95 group text-center"
                >
                  <PhoneCall className="w-5 h-5 text-gold-200 group-hover:rotate-12 transition-transform" />
                  <span>Gọi Đặt Bàn Ngay</span>
                </a>

                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-wood-100 text-wood-900 font-bold text-base sm:text-lg px-6 py-4 rounded-2xl border-2 border-wood-300 shadow-md hover:border-earth-600 hover:text-earth-700 transition-all transform active:scale-95 text-center"
                >
                  <MapPin className="w-5 h-5 text-earth-600" />
                  <span>Chỉ Đường Đến Quán</span>
                </a>
              </div>

              {/* Social Proof Quick Badge */}
              <div className="w-full pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-wood-700">
                <div className="flex items-center gap-1 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-wood-900">4.9/5</span>
                <span className="text-wood-400">|</span>
                <span>Hơn 1.500+ đánh giá hài lòng trên Google Maps</span>
              </div>
            </div>

            {/* Right Desktop Hero Banner - Băng chuyền hình chữ nhật aspect-[4/3] */}
            <div className="hidden lg:block lg:col-span-5 relative">
              <div className="relative mx-auto w-full">
                {/* Decorative glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-earth-400/20 to-gold-400/30 rounded-3xl blur-2xl -z-10" />

                {/* Khung băng chuyền tỉ lệ chữ nhật aspect-[4/3] giống thực đơn */}
                <div
                  className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/95 bg-wood-950 select-none group/dcarousel transition-transform duration-500 hover:scale-[1.01]"
                  onMouseEnter={() => setIsCarouselHovered(true)}
                  onMouseLeave={() => setIsCarouselHovered(false)}
                >
                  {heroSlides.map((slide, index) => {
                    const isActive = index === currentSlide;
                    return (
                      <div
                        key={slide.id}
                        onClick={() => {
                          const match = menuItems.find((m) => m.id === slide.id);
                          if (match) setDetailDish(match);
                        }}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out cursor-pointer ${
                          isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                        }`}
                      >
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                          loading={index === 0 ? 'eager' : 'lazy'}
                        />

                        {/* Gradient Text Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-wood-950/95 via-wood-950/30 to-transparent flex flex-col justify-end p-6 text-white text-left">
                          <div className="flex items-center gap-2.5 mb-2">
                            <span className="bg-gradient-to-r from-gold-500 to-amber-500 text-wood-950 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                              {slide.tag}
                            </span>
                            <span className="bg-wood-900/85 backdrop-blur-md text-gold-300 font-serif font-black text-sm px-3 py-0.5 rounded-full border border-wood-700">
                              {slide.price}
                            </span>
                            <span className="text-[11px] text-gold-300/90 font-medium ml-auto flex items-center gap-1 group-hover/dcarousel:underline">
                              <Info className="w-3.5 h-3.5" />
                              <span>Bấm xem bí quyết món</span>
                            </span>
                          </div>
                          <h3 className="font-serif font-black text-2xl text-white drop-shadow-sm leading-tight">
                            {slide.title}
                          </h3>
                          <p className="text-sm text-wood-200 mt-1 max-w-sm line-clamp-1">
                            {slide.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}

                  {/* Nút chuyển slide Desktop */}
                  <button
                    onClick={handlePrevSlide}
                    aria-label="Hình trước"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-wood-950/60 hover:bg-wood-950/90 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all opacity-0 group-hover/dcarousel:opacity-100 active:scale-95"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNextSlide}
                    aria-label="Hình tiếp theo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-wood-950/60 hover:bg-wood-950/90 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all opacity-0 group-hover/dcarousel:opacity-100 active:scale-95"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-3.5 right-5 z-20 flex items-center gap-1.5">
                    {heroSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Đến món ${idx + 1}`}
                        className={`transition-all duration-300 rounded-full ${
                          idx === currentSlide
                            ? 'w-6 h-2 bg-gold-400 shadow-sm'
                            : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Live Badge Top Right */}
                  <div className="absolute top-3.5 right-4 z-20 bg-wood-950/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs text-gold-300 font-medium flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Tự động cuộn</span>
                  </div>
                </div>

                {/* Floating highlight badge góc trái (đã dời xuống để không che nội dung ảnh) */}
                <div className="absolute -bottom-10 sm:-bottom-12 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-xl border border-wood-200/80 flex items-center gap-3 z-30 transition-all hover:-translate-y-0.5">
                  <div className="w-11 h-11 rounded-xl bg-earth-100 flex items-center justify-center text-earth-700">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-earth-700 uppercase tracking-wider">100% Tươi Mới</p>
                    <p className="font-serif font-bold text-xs sm:text-sm text-wood-950">Nguyên Liệu Trong Ngày</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MENU TIÊU BIỂU SECTION (Top 6 Món Bán Chạy) */}
      <section id="thuc-don" className="py-14 sm:py-20 bg-white border-y border-wood-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
            <span className="text-earth-700 font-bold text-xs sm:text-sm tracking-widest uppercase bg-earth-50 border border-earth-200 px-3 py-1 rounded-full">
              Thực Đơn Đậm Đà
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-wood-950">
              Món Ngon Phải Thử
            </h2>
            <p className="text-sm sm:text-base text-wood-600">
              Tuyển chọn 6 món ăn gia đình được yêu thích nhất tại Bếp Quê, nêm nếm vừa miệng, 
              giữ trọn tinh hoa phong vị quê hương.
            </p>
          </div>

          {/* Grid Top 6 Món (1 col mobile, 2 col tablet, 3 col desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {menuItems.map((dish) => (
              <div
                key={dish.id}
                onClick={() => setDetailDish(dish)}
                className="group bg-[#fcf9f4] rounded-3xl overflow-hidden border border-wood-200 hover:border-earth-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Dish Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-wood-100">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    
                    {/* Tag Best Seller */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-earth-600 to-amber-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                        <Flame className="w-3 h-3 text-gold-200" />
                        {dish.tag}
                      </span>
                    </div>

                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-3 right-3 bg-wood-950/85 backdrop-blur-md text-gold-300 font-serif font-black text-base sm:text-lg px-3.5 py-1.5 rounded-xl border border-wood-800 shadow-lg">
                      {dish.price}
                    </div>

                    {/* Hover Hint Overlay: Bấm xem chi tiết & câu chuyện món */}
                    <div className="absolute inset-0 bg-wood-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 text-wood-950 text-xs font-bold px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <BookOpen className="w-3.5 h-3.5 text-earth-600" />
                        <span>Xem Câu Chuyện & Bí Quyết</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-wood-950 group-hover:text-earth-700 transition-colors">
                        {dish.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-wood-600 line-clamp-2 leading-relaxed">
                      {dish.desc}
                    </p>

                    <div className="pt-1 flex items-center gap-1.5 text-[11px] text-earth-700 font-medium">
                      <Info className="w-3.5 h-3.5 shrink-0" />
                      <span>Bấm xem nguyên liệu, cách nấu & thưởng thức</span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-wood-100 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gold-600 text-xs font-semibold">
                    <Star className="w-4 h-4 fill-current text-gold-500" />
                    <span>{dish.rating}</span>
                    <span className="text-wood-400 font-normal">({dish.reviews})</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDetailDish(dish);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-wood-700 hover:text-earth-700 bg-wood-100 hover:bg-wood-200 px-3 py-2 rounded-xl transition-colors duration-200"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Chi Tiết</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDish(dish);
                        setIsBookingOpen(true);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-white bg-earth-600 hover:bg-earth-500 px-3 py-2 rounded-xl transition-colors duration-200 shadow-sm"
                    >
                      <span>Đặt Món</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nút Xem Full Menu Qua Zalo/Fanpage */}
          <div className="mt-12 text-center">
            <a
              href={ZALO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#0068ff] hover:bg-[#0052cc] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-lg shadow-blue-500/20 transition-all transform active:scale-95 group"
            >
              <span className="w-7 h-7 rounded-full bg-white text-[#0068ff] flex items-center justify-center font-black text-xs">
                Zalo
              </span>
              <span>Xem Menu Đầy Đủ Qua Zalo / Fanpage</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-xs text-wood-500 mt-2">
              Menu gồm hơn 60+ món cơm niêu, món kho, xào, lẩu và tráng miệng truyền thống
            </p>
          </div>

        </div>
      </section>

      {/* 3. ĐIỂM NỔI BẬT & KHÔNG GIAN SECTION */}
      <section className="py-14 sm:py-20 bg-[#f9f4ec]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
            <span className="text-wood-700 font-bold text-xs sm:text-sm tracking-widest uppercase bg-wood-200/80 px-3 py-1 rounded-full">
              Dịch Vụ Chu Đáo
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-wood-950">
              Vì Sao Khách Chọn Bếp Quê?
            </h2>
            <p className="text-sm sm:text-base text-wood-600">
              Không chỉ là món ăn ngon, chúng tôi mang tới không gian thư thái và sự tiếp đón nồng hậu như trở về nhà.
            </p>
          </div>

          {/* 4 Cards Điểm Cộng */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-wood-200/90 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-start space-y-3"
              >
                <div className="p-3 rounded-2xl bg-wood-100/80 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-wood-950">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-wood-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Không Gian Quán Ấm Cúng (Bộ sưu tập 4 ảnh) */}
          <div className="mt-14 sm:mt-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-earth-700 uppercase tracking-widest">Góc Bếp Quê</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-wood-950">
                  Không Gian Ấm Cúng & Gần Gũi
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-wood-600 mt-1 sm:mt-0">
                Thoáng mát ban ngày, lung linh và thư thái mỗi khi đêm về
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {ambiancePhotos.map((photo, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-wood-300 shadow-sm"
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-950/80 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 text-white text-left">
                    <p className="font-serif font-bold text-xs sm:text-sm">{photo.title}</p>
                    <p className="text-[10px] sm:text-xs text-wood-200 line-clamp-1">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. THÔNG TIN LIÊN HỆ & FOOTER */}
      <footer id="thong-tin" className="bg-wood-950 text-wood-100 pt-14 sm:pt-20 pb-10 border-t border-wood-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-wood-800/80">
            
            {/* Cột 1: Thông tin quán */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-earth-600 to-amber-700 flex items-center justify-center text-white font-serif font-black text-2xl shadow-md border border-earth-400/40">
                  BQ
                </div>
                <div>
                  <h3 className="font-serif font-black text-2xl text-white tracking-wide uppercase">
                    BẾP QUÊ
                  </h3>
                  <p className="text-xs text-gold-400 font-medium tracking-wider uppercase">
                    Hương Vị Cơm Nhà - Đậm Tình Quê Hương
                  </p>
                </div>
              </div>

              <p className="text-sm text-wood-300 leading-relaxed">
                Nơi những ký ức tuổi thơ về mâm cơm má nấu được gói ghém trọn vẹn. 
                Rất hân hạnh được phục vụ quý khách và gia đình vào mỗi bữa trưa và bữa tối.
              </p>

              {/* Chi tiết liên hệ */}
              <div className="space-y-4 pt-2 text-sm text-wood-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-wood-900 text-gold-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Địa chỉ quán:</span>
                    <span>128 Đường Hoa Sứ, Phường 7, Quận Phú Nhuận, TP. Hồ Chí Minh</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-wood-900 text-gold-400 shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Hotline đặt bàn trước:</span>
                    <div className="flex items-center gap-2">
                      <a href={HOTLINE_TEL} className="text-gold-300 hover:text-white font-bold text-base">
                        {HOTLINE}
                      </a>
                      <button
                        onClick={copyHotline}
                        className="text-xs bg-wood-800 hover:bg-wood-700 px-2.5 py-1 rounded-md text-wood-300 transition"
                      >
                        {copiedPhone ? 'Đã sao chép!' : 'Sao chép'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-wood-900 text-emerald-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Giờ mở cửa:</span>
                    <div className="flex items-center gap-2">
                      <span>10:00 - 22:00 (Hàng ngày, kể cả ngày Lễ)</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800">
                        Đang mở cửa
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-earth-600 hover:bg-earth-500 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition shadow-md"
                >
                  Đặt Bàn Online
                </button>
                <a
                  href={ZALO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0068ff] hover:bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition shadow-md"
                >
                  Nhắn Zalo Quán
                </a>
              </div>
            </div>

            {/* Cột 2: Bản đồ Google Maps nhúng trực quan */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> Bản Đồ Vị Trí
                </span>
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-wood-300 hover:text-white flex items-center gap-1"
                >
                  <span>Mở Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map embed container */}
              <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-wood-800 shadow-xl relative bg-wood-900">
                <iframe
                  title="Bản đồ vị trí Nhà Hàng Bếp Quê"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2319460021376!2d106.6880843!3d10.7935418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d254b9d0b5%3A0x6b8bc215037d402!2zUGjDuiBOaHXhuq1uLCBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
                  className="w-full h-full border-0 filter contrast-105"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-xs text-wood-400 italic">
                * Có nhân viên hỗ trợ đậu xe ô tô và bảo vệ trông coi xe chu đáo suốt buổi tiệc.
              </p>
            </div>

          </div>

          {/* Bottom Copyright & Demo Attribution */}
          <div className="pt-8 flex flex-col gap-4 text-xs text-wood-400">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <p>© 2026 Nhà Hàng Bếp Quê - Hương Vị Cơm Nhà. Tất cả quyền được bảo lưu.</p>
              <div className="flex items-center gap-6">
                <a href={HOTLINE_TEL} className="hover:text-white transition">Hotline: {HOTLINE}</a>
                <a href={FANPAGE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Fanpage</a>
                <a href="#" className="hover:text-white transition">Chính sách đặt tiệc</a>
              </div>
            </div>

            {/* Dòng ghi nhận Bản Demo thực hiện bởi Sang Citizen */}
            <div className="pt-4 border-t border-wood-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-wood-400">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-earth-950 text-gold-300 font-bold text-[10px] border border-earth-800">
                  DEMO PROJECT
                </span>
                <span>
                  Website demo Nhà Hàng được thực hiện bởi{' '}
                  <strong className="text-white font-semibold">Sang Citizen</strong>
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-wood-300">
                <span>Tư vấn & hợp tác:</span>
                <a
                  href="tel:0888003205"
                  className="text-gold-300 hover:text-white font-bold underline transition"
                >
                  0888.003.205
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION BUTTONS (CỐ ĐỊNH GÓC DƯỚI CHO MOBILE) */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* Nút Nhắn Tin Zalo */}
        <a
          href={ZALO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0068ff] hover:bg-blue-600 text-white shadow-xl shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all p-3"
          aria-label="Nhắn tin qua Zalo"
        >
          <span className="font-extrabold text-sm tracking-tighter">Zalo</span>
          {/* Tooltip on Desktop hover */}
          <span className="hidden sm:group-hover:block absolute right-16 bg-wood-950 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md">
            Nhắn Zalo quán
          </span>
        </a>

        {/* Nút Gọi Điện Thoại Nhanh */}
        <a
          href={HOTLINE_TEL}
          className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-earth-600 to-amber-600 text-white shadow-xl shadow-earth-700/40 hover:scale-105 active:scale-95 transition-all p-3"
          aria-label="Gọi điện thoại ngay"
        >
          <PhoneCall className="w-6 h-6 animate-pulse" />
          {/* Tooltip on Desktop hover */}
          <span className="hidden sm:group-hover:block absolute right-16 bg-wood-950 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md">
            Gọi ngay: {HOTLINE}
          </span>
        </a>

        {/* Nút Đặt Bàn Nhanh Nổi Bật Trên Mobile */}
        <button
          onClick={() => setIsBookingOpen(true)}
          className="sm:hidden flex items-center gap-1.5 bg-wood-950 text-gold-300 border border-gold-500/50 text-xs font-bold px-3 py-2 rounded-full shadow-lg"
        >
          <Calendar className="w-3.5 h-3.5 text-gold-400" />
          <span>Đặt bàn trước</span>
        </button>
      </div>

      {/* MODAL ĐẶT BÀN NHANH TIỆN LỢI */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-wood-950/70 backdrop-blur-sm animate-fade-in">
          <div
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-wood-200 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setIsBookingOpen(false);
                setSelectedDish(null);
              }}
              className="absolute top-5 right-5 p-2 rounded-full text-wood-400 hover:text-wood-900 hover:bg-wood-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif font-black text-2xl text-wood-950">Gửi Yêu Cầu Thành Công!</h3>
                <p className="text-sm text-wood-600">
                  Nhà Hàng Bếp Quê đã nhận thông tin và sẽ gọi lại cho quý khách trong vòng <strong>5 phút</strong> để xác nhận giữ bàn.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold text-earth-700 uppercase tracking-widest">Giữ Chỗ Trước</span>
                  <h3 className="font-serif font-black text-2xl text-wood-950">
                    Đặt Bàn Tại Bếp Quê
                  </h3>
                  {selectedDish && (
                    <div className="mt-2 text-xs bg-earth-50 border border-earth-200 text-earth-800 p-2 rounded-xl flex items-center gap-2">
                      <span>Món bạn chọn:</span>
                      <strong className="font-bold">{selectedDish.name} ({selectedDish.price})</strong>
                    </div>
                  )}
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-wood-800 uppercase mb-1">
                      Họ và Tên *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Văn A"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-wood-300 focus:outline-none focus:ring-2 focus:ring-earth-600 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-wood-800 uppercase mb-1">
                      Số Điện Thoại Nhận Xác Nhận *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0909 xxx xxx"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-wood-300 focus:outline-none focus:ring-2 focus:ring-earth-600 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-wood-800 uppercase mb-1">
                        Số Lượng Khách
                      </label>
                      <select
                        value={bookingData.guests}
                        onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-wood-300 focus:outline-none focus:ring-2 focus:ring-earth-600 text-sm bg-white"
                      >
                        <option value="1-2">1 - 2 Khách</option>
                        <option value="3-4">3 - 4 Khách</option>
                        <option value="5-8">5 - 8 Khách (Bàn lớn)</option>
                        <option value="10+">Trên 10 Khách (Phòng riêng)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-wood-800 uppercase mb-1">
                        Giờ Đến
                      </label>
                      <input
                        type="time"
                        value={bookingData.time}
                        onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-wood-300 focus:outline-none focus:ring-2 focus:ring-earth-600 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-wood-800 uppercase mb-1">
                      Ghi Chú Thêm
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Yêu cầu phòng lạnh, ghế trẻ em, vị trí bàn..."
                      value={bookingData.note}
                      onChange={(e) => setBookingData({ ...bookingData, note: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-wood-300 focus:outline-none focus:ring-2 focus:ring-earth-600 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-earth-600 to-amber-600 hover:from-earth-500 hover:to-amber-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-earth-700/20 transition active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Xác Nhận Giữ Bàn Ngay</span>
                  </button>

                  <p className="text-[11px] text-wood-500 text-center">
                    Hoặc gọi hotline khẩn cấp: <a href={HOTLINE_TEL} className="text-earth-700 font-bold underline">{HOTLINE}</a>
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL CHI TIẾT MÓN ĂN (CÂU CHUYỆN, NGUYÊN LIỆU, BÍ QUYẾT NẤU & CÁCH THƯỞNG THỨC) */}
      {detailDish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-wood-950/75 backdrop-blur-md animate-fade-in"
          onClick={() => setDetailDish(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-wood-200 relative max-h-[92vh] flex flex-col overflow-hidden text-wood-950"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-wood-950">
              <img
                src={detailDish.image}
                alt={detailDish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-950/90 via-wood-950/30 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setDetailDish(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-wood-950/70 hover:bg-wood-950 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition active:scale-95"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Badges on Image */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="bg-gradient-to-r from-earth-600 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {detailDish.tag}
                </span>
                <span className="bg-wood-900/80 backdrop-blur-md text-gold-300 text-xs font-medium px-2.5 py-1 rounded-full border border-wood-700">
                  {detailDish.portion}
                </span>
              </div>

              {/* Dish Title & Price on Image Bottom */}
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-3">
                <div>
                  <h3 className="font-serif font-black text-xl sm:text-2xl text-white drop-shadow-md">
                    {detailDish.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-wood-200 mt-0.5">
                    <div className="flex items-center gap-0.5 text-gold-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold text-white">{detailDish.rating}</span>
                    <span>({detailDish.reviews} đánh giá)</span>
                  </div>
                </div>
                <div className="bg-gold-500 text-wood-950 font-serif font-black text-lg sm:text-xl px-3 py-1 rounded-xl shadow-lg shrink-0">
                  {detailDish.price}
                </div>
              </div>
            </div>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto p-5 sm:p-6 space-y-5 text-sm">
              
              {/* 1. Câu Chuyện & Nét Độc Đáo */}
              <div className="bg-[#faf5ee] border border-amber-200/80 rounded-2xl p-4 space-y-1.5">
                <div className="flex items-center gap-2 text-earth-800 font-bold text-xs uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-earth-600" />
                  <span>Câu Chuyện Món Ăn</span>
                </div>
                <p className="text-wood-800 text-xs sm:text-sm leading-relaxed">
                  {detailDish.story}
                </p>
              </div>

              {/* 2. Nguyên Liệu Tuyển Chọn */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-wood-900 font-bold text-xs uppercase tracking-wider">
                  <Leaf className="w-4 h-4 text-emerald-600" />
                  <span>Nguyên Liệu Tươi Sạch Trong Ngày</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-wood-700">
                  {detailDish.ingredients.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-wood-50/80 p-2.5 rounded-xl border border-wood-200/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-earth-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Bí Quyết Đầu Bếp */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-wood-900 font-bold text-xs uppercase tracking-wider">
                  <ChefHat className="w-4 h-4 text-amber-600" />
                  <span>Bí Quyết Nấu Chuẩn Vị Bếp Quê</span>
                </div>
                <p className="text-xs sm:text-sm text-wood-700 leading-relaxed bg-amber-50/60 p-3.5 rounded-2xl border border-amber-200/60">
                  {detailDish.cookingSecret}
                </p>
              </div>

              {/* 4. Cách Thưởng Thức Đúng Điệu */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-wood-900 font-bold text-xs uppercase tracking-wider">
                  <Utensils className="w-4 h-4 text-earth-600" />
                  <span>Cách Thưởng Thức Trọn Vị</span>
                </div>
                <p className="text-xs sm:text-sm text-wood-700 leading-relaxed">
                  {detailDish.enjoyMethod}
                </p>
              </div>

              {/* 5. Gợi Ý Ăn Kèm */}
              {detailDish.bestPairWith && (
                <div className="flex items-center gap-2 text-xs bg-wood-100/80 p-3 rounded-xl border border-wood-200 text-wood-800">
                  <Sparkles className="w-4 h-4 text-gold-600 shrink-0" />
                  <div>
                    <span className="font-bold">Gợi ý kết hợp: </span>
                    <span className="italic">{detailDish.bestPairWith}</span>
                  </div>
                </div>
              )}

            </div>

            {/* Sticky Action Footer */}
            <div className="p-4 sm:p-5 bg-white border-t border-wood-200 flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  setSelectedDish(detailDish);
                  setDetailDish(null);
                  setIsBookingOpen(true);
                }}
                className="w-full sm:flex-1 bg-gradient-to-r from-earth-600 to-amber-600 hover:from-earth-500 hover:to-amber-500 text-white font-bold py-3 px-5 rounded-xl shadow-lg shadow-earth-700/20 transition active:scale-95 flex items-center justify-center gap-2 text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Đặt Bàn Với Món Này</span>
              </button>

              <a
                href={HOTLINE_TEL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-wood-100 hover:bg-wood-200 text-wood-900 font-bold py-3 px-4 rounded-xl transition text-sm active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-earth-600" />
                <span>Gọi Quán Ngay</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
