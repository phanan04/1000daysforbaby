export interface Stage {
  slug: string;
  title: string;
  subtitle: string;
  emoji: string;
  color: string;           // bg tailwind class
  borderColor: string;
  textColor: string;
  weeks: string;
  ageLabel: string;
  heroDesc: string;
  sections: Section[];
}

export interface Section {
  title: string;
  icon: string;
  items: string[];
}

export interface Tip {
  id: number;
  title: string;
  content: string;
  category: string;
  emoji: string;
  tag: string;
}

export interface VaccineItem {
  age: string;
  vaccines: string[];
  note?: string;
}

/* ===== EASY Method ===== */
export interface EASYSchedule {
  ageRange: string;
  emoji: string;
  totalSleep: string;
  naps: string;
  easyRoutine: { letter: string; label: string; duration: string; detail: string }[];
  tips: string[];
}

/* ===== Weaning Menu ===== */
export interface WeaningMenu {
  ageRange: string;
  emoji: string;
  title: string;
  principle: string;
  sampleDays: { day: string; meals: { time: string; menu: string }[] }[];
  notes: string[];
}

/* ===== Checklist ===== */
export interface ChecklistGroup {
  stage: string;
  emoji: string;
  color: string;
  items: { name: string; essential: boolean }[];
}

/* ===== Sleep Chart ===== */
export interface SleepData {
  ageRange: string;
  emoji: string;
  totalHours: string;
  nightHours: string;
  naps: string;
  napDuration: string;
  tips: string[];
}

export const stages: Stage[] = [
  {
    slug: "thai-ky",
    title: "Thai Kỳ",
    subtitle: "Hành trình 9 tháng 10 ngày kỳ diệu",
    emoji: "🤰",
    color: "bg-rose-50",
    borderColor: "border-rose-200",
    textColor: "text-rose-600",
    weeks: "Tuần 1 – 40",
    ageLabel: "9 tháng",
    heroDesc: "Giai đoạn thai kỳ là nền tảng đầu tiên và quan trọng nhất trong 1000 ngày đầu đời của bé. Dinh dưỡng và sức khoẻ của mẹ ảnh hưởng trực tiếp đến sự phát triển não bộ và thể chất của con.",
    sections: [
      {
        title: "Dinh dưỡng cho mẹ bầu",
        icon: "🥗",
        items: [
          "Bổ sung axit folic 400–800mcg mỗi ngày để phòng dị tật ống thần kinh.",
          "Ăn đa dạng: rau xanh, cá béo (omega-3), thịt nạc, đậu, sữa và trứng.",
          "Uống đủ 2–2.5 lít nước mỗi ngày.",
          "Tránh: rượu, thuốc lá, cá có hàm lượng thủy ngân cao (cá kiếm, cá ngừ đóng hộp nhiều).",
          "Bổ sung sắt để phòng thiếu máu; vitamin D và canxi cho xương bé.",
        ],
      },
      {
        title: "Khám thai định kỳ",
        icon: "🏥",
        items: [
          "3 tháng đầu: khám siêu âm xác nhận thai, xét nghiệm máu, đo độ mờ da gáy (11–13 tuần).",
          "3 tháng giữa: siêu âm hình thái (20–24 tuần), tầm soát tiểu đường thai kỳ (24–28 tuần).",
          "3 tháng cuối: kiểm tra vị trí thai, nhau thai, lượng nước ối, theo dõi tim thai.",
          "Tiêm vaccine cúm và uốn ván (Tdap) trong thai kỳ theo chỉ định bác sĩ.",
        ],
      },
      {
        title: "Chăm sóc sức khoẻ tinh thần",
        icon: "🧘‍♀️",
        items: [
          "Nghỉ ngơi đủ giấc (7–9 tiếng/đêm), ngủ nghiêng trái từ tháng thứ 5 trở đi.",
          "Đi bộ nhẹ 20–30 phút/ngày hoặc tập yoga bầu để giảm stress.",
          "Trao đổi với bạn đời về kế hoạch sinh, nuôi con để tránh áp lực một mình.",
          "Theo dõi cử động thai từ tuần 28; nếu bé ít đạp hơn bình thường hãy liên hệ bác sĩ.",
        ],
      },
      {
        title: "Chuẩn bị cho chào đời",
        icon: "🎒",
        items: [
          "Tìm hiểu các phương pháp sinh (thường/mổ), lên kế hoạch đến bệnh viện.",
          "Chuẩn bị giỏ đồ cho mẹ và bé vào tuần 36–37.",
          "Trao đổi với bác sĩ về kế hoạch cho bú sữa mẹ sớm (da kề da).",
          "Đặt phòng và chọn cơ sở y tế phù hợp điều kiện gia đình.",
        ],
      },
      {
        title: "🚨 Khi nào cần đến bệnh viện ngay?",
        icon: "⚠️",
        items: [
          "Ra máu âm đạo bất thường, đặc biệt 3 tháng đầu hoặc 3 tháng cuối.",
          "Đau bụng dữ dội, co thắt tử cung liên tục trước 37 tuần.",
          "Vỡ ối sớm (ra nước ào ạt hoặc rỉ rả liên tục).",
          "Thai ít đạp hoặc không đạp (dưới 10 lần trong 2 giờ khi đếm từ tuần 28).",
          "Phù mặt/tay đột ngột, nhức đầu dữ dội, nhìn mờ – nghi tiền sản giật.",
          "Sốt > 38°C kèm ớn lạnh, có thể là dấu hiệu nhiễm trùng.",
          "Nôn ói liên tục không ngừng, không ăn uống được gì.",
        ],
      },
    ],
  },
  {
    slug: "0-6-thang",
    title: "0 – 6 Tháng",
    subtitle: "Những ngày đầu kỳ diệu bên con",
    emoji: "👶",
    color: "bg-pink-50",
    borderColor: "border-pink-200",
    textColor: "text-pink-600",
    weeks: "Tháng 1 – 6",
    ageLabel: "0–6 tháng",
    heroDesc: "Sáu tháng đầu đời là thời gian não bộ của bé phát triển nhanh nhất. Sữa mẹ hoàn toàn là nguồn dinh dưỡng lý tưởng, cùng với tình yêu thương và sự gắn kết sẽ tạo nền tảng vững chắc cho sự phát triển toàn diện.",
    sections: [
      {
        title: "Nuôi con bằng sữa mẹ",
        icon: "🤱",
        items: [
          "Cho bú sớm trong vòng 1 giờ sau sinh để bé nhận sữa non – 'vàng lỏng' chứa kháng thể.",
          "Bú theo nhu cầu, không theo giờ giấc – sơ sinh bú 8–12 lần/ngày là bình thường.",
          "Đảm bảo bé ngậm đúng: miệng há rộng, môi dưới lật ra ngoài, cằm chạm vú mẹ.",
          "Mẹ ăn đủ chất (thêm 500 kcal/ngày), uống đủ nước để duy trì sữa.",
          "Nếu cần dùng sữa công thức: chọn loại phù hợp lứa tuổi, pha đúng tỷ lệ hướng dẫn.",
        ],
      },
      {
        title: "Giấc ngủ & lịch sinh hoạt",
        icon: "😴",
        items: [
          "Sơ sinh ngủ 16–18 tiếng/ngày, chia nhiều giấc 2–4 tiếng.",
          "Luôn đặt bé ngủ ngửa (nằm ngửa) để phòng ngừa hội chứng đột tử SIDS.",
          "Giữ phòng mát (20–22°C), không cần gối, không để đồ mềm trong nôi.",
          "Tháng 3–4: bé bắt đầu hình thành chu kỳ ngủ dài hơn về đêm.",
          "Tắm nắng sáng 15–20 phút/ngày trước 9h giúp bổ sung vitamin D tự nhiên.",
        ],
      },
      {
        title: "Phát triển của bé",
        icon: "🌱",
        items: [
          "Tháng 1: nhìn khoảng cách 20–30cm, nhận ra giọng mẹ.",
          "Tháng 2-3: nở nụ cười xã hội đầu tiên, bắt đầu 'ê a' trò chuyện.",
          "Tháng 4-5: giữ đầu vững, lật từ ngửa -> sấp, với tay cầm đồ vật.",
          "Tháng 6: ngồi khi có đỡ, nhận ra người thân, bập bẹ 'ba ba', 'ma ma'.",
          "Tummy time (nằm sấp khi thức) 3–5 phút/lần từ sơ sinh để tăng cơ cổ vai.",
        ],
      },
      {
        title: "Chăm sóc sức khoẻ hàng ngày",
        icon: "🛁",
        items: [
          "Tắm 1 lần/ngày bằng nước ấm 37–38°C, phòng kín gió.",
          "Vệ sinh rốn bằng cồn 70 độ đến khi rụng, giữ khô thoáng.",
          "Thay tã 5–8 lần/ngày, vệ sinh sạch, thoa kem chống hăm nếu cần.",
          "Theo dõi cân nặng: bé tăng ~150–200g/tuần trong 3 tháng đầu.",
          "Liên hệ bác sĩ ngay nếu bé sốt > 38°C (đặc biệt dưới 3 tháng tuổi).",
        ],
      },
      {
        title: "🚨 Khi nào cần đến bệnh viện ngay?",
        icon: "⚠️",
        items: [
          "Sốt ≥ 38°C ở trẻ dưới 3 tháng tuổi (bất kể biểu hiện nào).",
          "Bỏ bú hoàn toàn > 8 tiếng, lờ đờ, khó đánh thức.",
          "Thở nhanh (> 60 lần/phút), thở rít, rút lõm lồng ngực.",
          "Da tím tái, xanh xao bất thường, vàng da lan nhanh.",
          "Co giật, mắt trợn, cơ thể cứng đờ hoặc run rẩy bất thường.",
          "Nôn ói nhiều lần liên tiếp, phân có máu hoặc phân đen.",
          "Rốn sưng đỏ, chảy mủ, có mùi hôi – nghi nhiễm trùng rốn.",
          "Khóc liên tục > 3 tiếng không dỗ được, kèm bụng chướng.",
        ],
      },
    ],
  },
  {
    slug: "6-12-thang",
    title: "6 – 12 Tháng",
    subtitle: "Bắt đầu hành trình ăn dặm",
    emoji: "🥣",
    color: "bg-violet-50",
    borderColor: "border-violet-200",
    textColor: "text-violet-600",
    weeks: "Tháng 7 – 12",
    ageLabel: "6–12 tháng",
    heroDesc: "Giai đoạn ăn dặm là bước ngoặt quan trọng. Hệ tiêu hóa của bé đã đủ chín để tiếp nhận thức ăn ngoài sữa mẹ. Đây là lúc bé khám phá mùi vị, màu sắc và học cách tự ăn.",
    sections: [
      {
        title: "Bắt đầu ăn dặm đúng cách",
        icon: "🥄",
        items: [
          "Bắt đầu ăn dặm khi bé tròn 6 tháng (180 ngày), không sớm hơn 4 tháng.",
          "Dấu hiệu sẵn sàng: bé ngồi vững khi đỡ, không còn phản xạ đẩy lưỡi, tỏ ra thích thú với đồ ăn.",
          "Lúc đầu cho 1–2 thìa/bữa, tăng dần lên ½ – 1 chén theo tháng.",
          "Giới thiệu từng loại thực phẩm mới, chờ 3–5 ngày để phát hiện dị ứng.",
          "Vẫn duy trì sữa mẹ/công thức là nguồn dinh dưỡng chính đến 12 tháng.",
        ],
      },
      {
        title: "Thực đơn gợi ý theo tháng",
        icon: "🍎",
        items: [
          "Tháng 6–7: cháo loãng (tỷ lệ 1:10), rau củ luộc nghiền (bí đỏ, khoai lang, cà rốt).",
          "Tháng 8–9: cháo đặc hơn (1:7), thịt gà/heo xay mịn, đậu phụ, rau xanh.",
          "Tháng 10–11: cháo nhuyễn có cục nhỏ, cá hấp xé nhuyễn, lòng đỏ trứng, hoa quả mềm.",
          "Tháng 12: ăn cơm nát, thực phẩm đa dạng, ăn cùng bàn gia đình.",
          "Không thêm muối/mắm/đường vào đồ ăn của bé dưới 1 tuổi.",
        ],
      },
      {
        title: "Phát triển vận động & nhận thức",
        icon: "🎯",
        items: [
          "Tháng 7–8: bò trườn, ngồi tự do, chuyển đồ từ tay nọ sang tay kia.",
          "Tháng 9–10: bò nhanh, đứng bám, bắt đầu hiểu từ 'không', 'vỗ tay'.",
          "Tháng 11–12: đứng tự do vài giây, bước vài bước đầu tiên với đỡ.",
          "Hiểu tên mình, biết nhìn khi được gọi, bắt chước cử chỉ của người lớn.",
          "Trò chơi phù hợp: ú òa, gõ khối gỗ, bóng, sách vải, xúc xắc.",
        ],
      },
      {
        title: "Ngủ & sinh hoạt",
        icon: "🌙",
        items: [
          "Bé cần 12–15 tiếng ngủ/ngày (ngủ đêm 9–11 tiếng + 2 giấc ngủ trưa).",
          "Xây dựng thói quen buổi tối: tắm > ăn > hát ru > đặt bé xuống.",
          "Bắt đầu dạy bé tự ngủ không cần bế: đặt xuống khi buồn ngủ nhưng vẫn thức.",
          "Tháng 9–10: bé có thể thức đêm nhiều hơn do mọc răng – dùng gel nướu lạnh.",
        ],
      },
      {
        title: "🚨 Khi nào cần đến bệnh viện ngay?",
        icon: "⚠️",
        items: [
          "Sốt > 38.5°C kéo dài trên 24h hoặc kèm phát ban.",
          "Tiêu chảy > 6 lần/ngày hoặc phân có máu/nhầy.",
          "Nôn ói liên tục, bỏ ăn hoàn toàn, mắt trũng, da nhăn (mất nước).",
          "Thở khò khè nặng, tím tái quanh môi khi bú hoặc khóc.",
          "Bé ngã/va đập đầu mạnh, sau đó nôn hoặc lơ mơ bất thường.",
          "Sặc thức ăn, nghẹn: bé tím tái, không thể khóc/phát âm.",
          "Phát ban lan nhanh kèm sốt – có thể phản ứng dị ứng nghiêm trọng.",
        ],
      },
    ],
  },
  {
    slug: "1-2-tuoi",
    title: "1 – 2 Tuổi",
    subtitle: "Bé tập đi, tập nói, khám phá thế giới",
    emoji: "🚶‍♂️",
    color: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-600",
    weeks: "Tháng 13 – 24",
    ageLabel: "1–2 tuổi",
    heroDesc: "Giai đoạn từ 1 đến 2 tuổi đánh dấu sự bùng nổ về ngôn ngữ, vận động và cảm xúc. Bé trở nên độc lập hơn nhưng vẫn cần sự hướng dẫn nhẹ nhàng và môi trường an toàn để khám phá.",
    sections: [
      {
        title: "Dinh dưỡng cho trẻ 1–2 tuổi",
        icon: "🍽️",
        items: [
          "Chuyển sang ăn cơm mềm/cơm, 3 bữa chính + 2 bữa phụ/ngày.",
          "Sữa: 400–500ml sữa mẹ hoặc sữa tươi nguyên kem/sữa công thức số 2 mỗi ngày.",
          "Đảm bảo đa dạng nhóm thực phẩm: tinh bột, đạm, béo, rau củ, quả.",
          "Cho bé tự xúc ăn từ 12–14 tháng – dù bừa bộn nhưng quan trọng cho phát triển.",
          "Tránh nước ngọt, đồ ăn chiên, thức ăn nhanh và muối quá nhiều.",
        ],
      },
      {
        title: "Phát triển ngôn ngữ",
        icon: "💬",
        items: [
          "12–15 tháng: nói 1–5 từ đơn có nghĩa (bà, ba, bóng...).",
          "18 tháng: nói ít nhất 10–20 từ, hiểu và làm theo lệnh đơn giản.",
          "24 tháng: ghép 2 từ ('mẹ bế', 'có nước'), vốn từ 50+ từ.",
          "Đọc sách cho bé nghe mỗi ngày – đây là cách hiệu quả nhất để thúc đẩy ngôn ngữ.",
          "Nói chuyện với bé liên tục khi làm việc nhà, ra ngoài – 'running commentary'.",
          "Nếu 18 tháng chưa nói từ nào hoặc 24 tháng dưới 50 từ, tham khảo chuyên gia ngôn ngữ.",
        ],
      },
      {
        title: "Phát triển vận động",
        icon: "🏃‍♂️",
        items: [
          "12–15 tháng: đi vững, leo trèo cầu thang khi có đỡ, cúi nhặt đồ.",
          "18 tháng: chạy (hay té), leo cầu thang vịn, ném bóng, vẽ nguệch ngoạc.",
          "24 tháng: nhảy chân sáo, đá bóng, leo xuống cầu thang từng bước.",
          "Tạo không gian chơi an toàn: che ổ điện, khóa ngăn kéo nguy hiểm, thảm mềm.",
          "Hạn chế screen time dưới 1 giờ/ngày, không dùng điện thoại/TV trước 18 tháng.",
        ],
      },
      {
        title: "Cảm xúc & kỷ luật tích cực",
        icon: "❤️",
        items: [
          "Khủng hoảng tuổi lên 2 (terrible twos) là hoàn toàn bình thường – bé đang khẳng định bản thân.",
          "Đặt giới hạn nhất quán, nhẹ nhàng và giải thích lý do đơn giản.",
          "Khen ngợi hành vi tốt thay vì chỉ trừng phạt hành vi xấu.",
          "Dạy tên gọi cảm xúc: 'Con đang buồn à? Ôm mẹ nào.'",
          "Duy trì thói quen sinh hoạt ổn định giúp bé an tâm và ít cáu kỉnh hơn.",
        ],
      },
      {
        title: "🚨 Khi nào cần đến bệnh viện ngay?",
        icon: "⚠️",
        items: [
          "Sốt > 39°C không hạ sau khi dùng thuốc, hoặc sốt kéo dài > 3 ngày.",
          "Co giật do sốt (sốt cao co giật): mắt trợn, tay chân co cứng.",
          "Khó thở, thở rít, rút lõm lồng ngực, tím tái môi.",
          "Uống/nuốt phải chất tẩy rửa, thuốc hoặc vật nhỏ (nguy cơ ngộ độc/nghẹn).",
          "Tiêu chảy nặng kèm nôn, không uống được nước – nguy cơ mất nước.",
          "Bé đột ngột đi loạng choạng, mất thăng bằng hoặc ngã liên tục.",
          "Phát ban dạng ban xuất huyết (ấn không mất), kèm sốt – nghi sốt xuất huyết.",
          "Bé tự kỷ/chậm nói: 18 tháng không nói từ nào, không giao tiếp mắt, không chỉ tay.",
        ],
      },
    ],
  },
];

export const tips: Tip[] = [
  { id: 1, title: "Dỗ bé ngủ với 5S của Dr. Harvey Karp", content: "Swaddle (quấn khăn), Side/Stomach position (bế nghiêng), Shush (tiếng suỵt nhẹ), Swing (đung đưa), Suck (cho bú/ti giả). Kết hợp 5 yếu tố này kích hoạt 'phản xạ bình tĩnh' của sơ sinh.", category: "Ngủ", emoji: "😴", tag: "0–6 tháng" },
  { id: 2, title: "Nhận biết dấu hiệu bé đói & đủ sữa", content: "Bé đói: liếm môi, mút tay, quay đầu tìm vú. Đủ sữa: tã ướt 6–8 lần/ngày, tăng cân đều, bú xong ngủ yên. Đừng chờ bé khóc mới cho bú – đó là dấu hiệu đói muộn.", category: "Dinh dưỡng", emoji: "🍼", tag: "0–6 tháng" },
  { id: 3, title: "4 dấu hiệu bé sẵn sàng ăn dặm", content: "1. Tự ngồi khi có đỡ; 2. Không còn phản xạ đẩy lưỡi; 3. Tỏ ra tò mò/với tay vào đồ ăn; 4. Tròn 6 tháng tuổi. Đừng bắt đầu ăn dặm chỉ vì bé hay thức đêm – đó không phải là dấu hiệu đói.", category: "Ăn dặm", emoji: "🥣", tag: "6–12 tháng" },
  { id: 4, title: "Trị hăm tã tại nhà hiệu quả", content: "Để mông khoáng khí 10–15 phút sau mỗi lần thay tã. Dùng kem zinc oxide (không cần thuốc kê đơn). Thay tã thường xuyên hơn. Tránh khăn ướt có cồn khi da đang hăm.", category: "Sức khoẻ", emoji: "🩹", tag: "0–12 tháng" },
  { id: 5, title: "Kỹ thuật đọc sách cho bé 0–12 tháng", content: "Không cần bé hiểu nội dung – giọng đọc trầm bổng, biểu cảm của mẹ/ba giúp phát triển não bộ và kết nối cảm xúc. Chỉ cần 10 phút/ngày. Sách vải màu sắc tương phản cao lý tưởng cho dưới 3 tháng.", category: "Phát triển", emoji: "📚", tag: "0–12 tháng" },
  { id: 6, title: "Xử lý bé biếng ăn giai đoạn 1–2 tuổi", content: "Đây là giai đoạn tăng trưởng chậm lại, bé ăn ít hơn là bình thường. Đừng ép ăn – gây phản ứng ngược. Chia nhỏ khẩu phần, trang trí bắt mắt, cho bé tham gia chuẩn bị bữa ăn. Cung cấp đủ loại thực phẩm; bé quyết định ăn bao nhiêu.", category: "Dinh dưỡng", emoji: "🍱", tag: "1–2 tuổi" },
  { id: 7, title: "Phân biệt khóc khác nhau của sơ sinh", content: "Đói: ngắn, nhịp điệu; Mệt: đều đều, kèm dụi mắt; Đau bụng: khóc dữ, vặn người; Khó chịu/buồn: ngắt quãng, dừng nếu được bế. Bạn sẽ nhận ra pattern riêng của bé trong 2–4 tuần đầu.", category: "Chăm sóc", emoji: "😢", tag: "0–6 tháng" },
  { id: 8, title: "Tummy time đúng cách từ sơ sinh", content: "Bắt đầu từ 1–2 phút, 2–3 lần/ngày khi bé tỉnh táo và no. Tăng dần lên 30 phút tổng cộng mỗi ngày ở tháng 4. Có thể đặt bé nằm sấp lên ngực mẹ/ba thay vì sàn. Giúp phát triển cơ cổ, vai, phòng đầu bẹt.", category: "Phát triển", emoji: "🤸", tag: "0–6 tháng" },
  { id: 9, title: "Cách hạ sốt an toàn cho trẻ nhỏ", content: "Bé sốt > 38°C: cởi bớt quần áo, chườm ấm (không chườm lạnh). Paracetamol 10–15mg/kg liều nếu bé khó chịu. Dưới 3 tháng sốt bất cứ mức nào → đến bệnh viện. Không dùng aspirin cho trẻ em.", category: "Sức khoẻ", emoji: "🌡️", tag: "0–2 tuổi" },
  { id: 10, title: "Giảm lo lắng sau sinh cho mẹ", content: "Baby blues (2 tuần đầu) khác với trầm cảm sau sinh (kéo dài hơn 2 tuần, ảnh hưởng chức năng). Hãy nhờ sự giúp đỡ, chia sẻ với bạn đời, kết nối với các mẹ khác. Không có mẹ hoàn hảo – 'good enough mother' là đủ rồi!", category: "Sức khoẻ mẹ", emoji: "💆‍♀️", tag: "Cho mẹ" },
  { id: 11, title: "Cách tắm sơ sinh an toàn từ A-Z", content: "Phòng kín gió, nước 37–38°C (thử bằng khuỷu tay). Đỡ đầu bé bằng cẳng tay. Tắm nhanh 5–7 phút. Trình tự: mặt → đầu → thân → tay chân → vùng kín. Lau khô ngay, mặc đồ ấm.", category: "Chăm sóc", emoji: "🛁", tag: "0–6 tháng" },
  { id: 12, title: "Xử lý sặc sữa ở trẻ sơ sinh", content: "Đặt bé nằm nghiêng, vỗ nhẹ lưng từ dưới lên. Nếu bé tím tái/ngừng thở: úp bé lên cẳng tay, vỗ 5 cái giữa hai bả vai. Gọi 115 ngay. Phòng ngừa: bế đầu cao khi bú, vỗ ợ sau bú.", category: "Sơ cứu", emoji: "🆘", tag: "0–12 tháng" },
  { id: 13, title: "Bé bị nghẹt mũi – xử lý không cần thuốc", content: "Nhỏ 2–3 giọt nước muối sinh lý (NaCl 0.9%) vào mỗi bên mũi. Dùng bóng hút mũi nhẹ nhàng. Kê đầu bé cao hơn khi ngủ. Bật máy tạo ẩm trong phòng. Bú mẹ nhiều hơn để giữ ẩm niêm mạc.", category: "Sức khoẻ", emoji: "🤧", tag: "0–2 tuổi" },
  { id: 14, title: "Massage cho bé – kết nối và thư giãn", content: "Dùng dầu dừa/olive, vuốt nhẹ: chân → bụng (xoay kim đồng hồ giảm đầy hơi) → ngực → tay → lưng. Thời điểm tốt: sau tắm hoặc trước ngủ. 10–15 phút/lần. Ngừng nếu bé quấy.", category: "Chăm sóc", emoji: "💆", tag: "0–12 tháng" },
  { id: 15, title: "Giúp bé tự ngủ xuyên đêm", content: "Tạo ritual buổi tối cố định (tắm, đọc sách, hát ru). Đặt bé xuống khi buồn ngủ nhưng chưa ngủ hẳn. Không bế/ru lại ngay khi bé ọ ẹ – chờ 1–2 phút. Tránh cho bú rồi ngủ luôn (tạo thói quen phụ thuộc).", category: "Ngủ", emoji: "🌙", tag: "4–12 tháng" },
  { id: 16, title: "Phòng tránh tai nạn trong nhà cho trẻ tập bò/đi", content: "Che ổ điện, khóa tủ có hoá chất, chặn cầu thang. Để dao kéo/đồ nóng ngoài tầm với. Kiểm tra đồ chơi không có chi tiết nhỏ (nguy cơ hóc). Không để bé một mình gần nước (bồn tắm, xô nước).", category: "An toàn", emoji: "🔒", tag: "6–24 tháng" },
  { id: 17, title: "BLW – ăn dặm bé tự chỉ huy", content: "Baby-Led Weaning: cho bé tự cầm thức ăn cắt thanh dài (khoai lang, bông cải, chuối) thay vì đút bột. Chờ bé tròn 6 tháng + ngồi vững. Ưu điểm: phát triển vận động tinh, tự điều chỉnh lượng ăn. Luôn giám sát khi ăn.", category: "Ăn dặm", emoji: "🥕", tag: "6–12 tháng" },
  { id: 18, title: "Khi nào bé cần bổ sung vitamin D?", content: "WHO khuyến cáo: bé bú mẹ hoàn toàn nên bổ sung 400 IU vitamin D3/ngày từ lúc sinh. Bé bú công thức > 500ml/ngày thường đã đủ. Tắm nắng buổi sáng (7–9h) 15–20 phút cũng giúp tổng hợp vitamin D tự nhiên.", category: "Dinh dưỡng", emoji: "☀️", tag: "0–24 tháng" },
  { id: 19, title: "Dấu hiệu mọc răng & cách giảm đau", content: "Bé chảy dãi nhiều, cắn đồ, quấy khóc, có thể sốt nhẹ < 38°C. Giảm đau: cho gặm vòng nướu lạnh (không đông đá), dùng gel nướu teething. Răng sữa thường mọc từ tháng 6, hoàn thành 20 răng lúc 2–3 tuổi.", category: "Sức khoẻ", emoji: "🦷", tag: "6–24 tháng" },
  { id: 20, title: "Chọn đồ chơi theo giai đoạn phát triển", content: "0–3 tháng: mobile, đồ chơi đen trắng tương phản. 3–6 tháng: xúc xắc, vòng gặm. 6–12 tháng: khối xếp, sách vải, bóng. 12–24 tháng: đồ chơi lồng, xếp hình đơn giản, bút sáp, đất nặn. Chất liệu an toàn, không chi tiết nhỏ.", category: "Phát triển", emoji: "🧸", tag: "0–2 tuổi" },
  { id: 21, title: "Cách vệ sinh bình sữa đúng chuẩn", content: "Rửa ngay sau khi bú bằng nước nóng + nước rửa bình. Dùng cọ chuyên dụng cọ kỹ đáy và núm. Tiệt trùng: hấp trong nước sôi 5 phút hoặc máy tiệt trùng UV/hơi nước. Phơi khô trên giá sạch, không dùng khăn lau bên trong.", category: "Chăm sóc", emoji: "🍼", tag: "0–12 tháng" },
  { id: 22, title: "Mẹ bỉm – đừng quên chăm sóc bản thân", content: "Tận dụng giấc ngủ khi bé ngủ. Nhờ ông bà/chồng trông bé 1–2 giờ để nghỉ ngơi. Ăn đủ bữa, uống đủ nước. Nếu cảm thấy buồn bã, kiệt sức kéo dài > 2 tuần – hãy nói chuyện với bác sĩ. Mẹ khoẻ thì bé mới khoẻ.", category: "Sức khoẻ mẹ", emoji: "❤️‍🩹", tag: "Cho mẹ" },
];

export const vaccineSchedule: VaccineItem[] = [
  { age: "Ngay sau sinh", vaccines: ["Viêm gan B (mũi 1)", "BCG (lao)"], note: "Tiêm trong 24h đầu sau sinh" },
  { age: "1 tháng", vaccines: ["Viêm gan B (mũi 2)"] },
  { age: "2 tháng", vaccines: ["5 trong 1 / 6 trong 1 (mũi 1)", "Rotavirus (uống, liều 1)", "Phế cầu (PCV, mũi 1)"] },
  { age: "3 tháng", vaccines: ["5 trong 1 / 6 trong 1 (mũi 2)", "Rotavirus (uống, liều 2)", "Phế cầu (PCV, mũi 2)"] },
  { age: "4 tháng", vaccines: ["5 trong 1 / 6 trong 1 (mũi 3)", "Rotavirus (uống, liều 3)", "Phế cầu (PCV, mũi 3)"] },
  { age: "6 tháng", vaccines: ["Viêm gan B (mũi 3)", "Cúm (mũi 1, nhắc hàng năm)"] },
  { age: "9 tháng", vaccines: ["Sởi (hoặc MMR mũi 1)"], note: "Tiêm trong chương trình tiêm chủng mở rộng" },
  { age: "12 tháng", vaccines: ["Viêm não Nhật Bản (mũi 1)", "Thuỷ đậu (mũi 1)", "Viêm gan A (mũi 1)"] },
  { age: "15 tháng", vaccines: ["MMR (mũi 2 hoặc MMRV)", "5 trong 1 nhắc (mũi 4)"] },
  { age: "18 tháng", vaccines: ["Viêm não Nhật Bản (mũi 2)", "Viêm gan A (mũi 2)"] },
  { age: "24 tháng", vaccines: ["Viêm não Nhật Bản (mũi 3)"], note: "Hoàn thành mốc 1000 ngày" },
];

export const devMilestones = [
  { age: "1 tháng", items: ["Nhìn khoảng cách 20–30cm", "Phản ứng với âm thanh", "Nắm tay phản xạ"] },
  { age: "2–3 tháng", items: ["Nở nụ cười xã hội", "Giữ đầu vài giây", "Theo dõi vật chuyển động"] },
  { age: "4–6 tháng", items: ["Lật ngửa → sấp", "Với tay cầm đồ vật", "'Ê a' bập bẹ"] },
  { age: "7–9 tháng", items: ["Ngồi tự do", "Bò trườn", "Bắt chước âm thanh", "Hiểu 'không'"] },
  { age: "10–12 tháng", items: ["Đứng bám", "Bước đầu tiên", "Nói 1–2 từ có nghĩa", "Vẫy tay chào"] },
  { age: "12–18 tháng", items: ["Đi vững", "Vốn từ 10–20 từ", "Chỉ vào đồ vật muốn", "Leo cầu thang"] },
  { age: "18–24 tháng", items: ["Chạy, nhảy", "Ghép 2 từ", "Vẽ nguệch ngoạc", "Chơi giả vờ (pretend play)"] },
];

/* ------------------------------------------------------------------ */
/* BẢNG TĂNG TRƯỞNG WHO (Median – p50)                               */
/* Cân nặng (kg) & Chiều dài/cao (cm) theo tháng tuổi, 0–24 tháng   */
/* Nguồn: WHO Child Growth Standards 2006                             */
/* ------------------------------------------------------------------ */

export interface GrowthDataPoint {
  month: number;
  label: string;         // "Sơ sinh", "1 tháng", …
  boyWeight: number;     // kg – median (p50)
  girlWeight: number;
  boyHeight: number;     // cm – median (p50)
  girlHeight: number;
  boyWeightP3: number;   // percentile 3 (giới hạn dưới)
  boyWeightP97: number;  // percentile 97 (giới hạn trên)
  girlWeightP3: number;
  girlWeightP97: number;
  boyHeightP3: number;
  boyHeightP97: number;
  girlHeightP3: number;
  girlHeightP97: number;
}

export const growthData: GrowthDataPoint[] = [
  { month: 0,  label: "Sơ sinh",  boyWeight: 3.3,  girlWeight: 3.2,  boyHeight: 49.9, girlHeight: 49.1, boyWeightP3: 2.5, boyWeightP97: 4.3, girlWeightP3: 2.4, girlWeightP97: 4.2, boyHeightP3: 46.3, boyHeightP97: 53.4, girlHeightP3: 45.6, girlHeightP97: 52.7 },
  { month: 1,  label: "1 tháng",  boyWeight: 4.5,  girlWeight: 4.2,  boyHeight: 54.7, girlHeight: 53.7, boyWeightP3: 3.4, boyWeightP97: 5.8, girlWeightP3: 3.2, girlWeightP97: 5.5, boyHeightP3: 51.1, boyHeightP97: 58.4, girlHeightP3: 50.0, girlHeightP97: 57.4 },
  { month: 2,  label: "2 tháng",  boyWeight: 5.6,  girlWeight: 5.1,  boyHeight: 58.4, girlHeight: 57.1, boyWeightP3: 4.3, boyWeightP97: 7.1, girlWeightP3: 3.9, girlWeightP97: 6.6, boyHeightP3: 54.7, boyHeightP97: 62.2, girlHeightP3: 53.2, girlHeightP97: 61.1 },
  { month: 3,  label: "3 tháng",  boyWeight: 6.4,  girlWeight: 5.8,  boyHeight: 61.4, girlHeight: 59.8, boyWeightP3: 5.0, boyWeightP97: 8.0, girlWeightP3: 4.5, girlWeightP97: 7.5, boyHeightP3: 57.6, boyHeightP97: 65.3, girlHeightP3: 55.8, girlHeightP97: 63.8 },
  { month: 4,  label: "4 tháng",  boyWeight: 7.0,  girlWeight: 6.4,  boyHeight: 63.9, girlHeight: 62.1, boyWeightP3: 5.6, boyWeightP97: 8.7, girlWeightP3: 5.0, girlWeightP97: 8.2, boyHeightP3: 60.0, boyHeightP97: 67.8, girlHeightP3: 58.0, girlHeightP97: 66.2 },
  { month: 5,  label: "5 tháng",  boyWeight: 7.5,  girlWeight: 6.9,  boyHeight: 65.9, girlHeight: 64.0, boyWeightP3: 6.0, boyWeightP97: 9.3, girlWeightP3: 5.4, girlWeightP97: 8.8, boyHeightP3: 61.9, boyHeightP97: 69.9, girlHeightP3: 59.9, girlHeightP97: 68.2 },
  { month: 6,  label: "6 tháng",  boyWeight: 7.9,  girlWeight: 7.3,  boyHeight: 67.6, girlHeight: 65.7, boyWeightP3: 6.4, boyWeightP97: 9.8, girlWeightP3: 5.7, girlWeightP97: 9.3, boyHeightP3: 63.6, boyHeightP97: 71.6, girlHeightP3: 61.5, girlHeightP97: 70.0 },
  { month: 7,  label: "7 tháng",  boyWeight: 8.3,  girlWeight: 7.6,  boyHeight: 69.2, girlHeight: 67.3, boyWeightP3: 6.7, boyWeightP97: 10.2, girlWeightP3: 6.0, girlWeightP97: 9.8, boyHeightP3: 65.1, boyHeightP97: 73.2, girlHeightP3: 63.0, girlHeightP97: 71.6 },
  { month: 8,  label: "8 tháng",  boyWeight: 8.6,  girlWeight: 7.9,  boyHeight: 70.6, girlHeight: 68.7, boyWeightP3: 6.9, boyWeightP97: 10.7, girlWeightP3: 6.3, girlWeightP97: 10.2, boyHeightP3: 66.5, boyHeightP97: 74.7, girlHeightP3: 64.3, girlHeightP97: 73.2 },
  { month: 9,  label: "9 tháng",  boyWeight: 8.9,  girlWeight: 8.2,  boyHeight: 72.0, girlHeight: 70.1, boyWeightP3: 7.1, boyWeightP97: 11.0, girlWeightP3: 6.5, girlWeightP97: 10.5, boyHeightP3: 67.7, boyHeightP97: 76.2, girlHeightP3: 65.6, girlHeightP97: 74.7 },
  { month: 10, label: "10 tháng", boyWeight: 9.2,  girlWeight: 8.5,  boyHeight: 73.3, girlHeight: 71.5, boyWeightP3: 7.4, boyWeightP97: 11.4, girlWeightP3: 6.7, girlWeightP97: 10.9, boyHeightP3: 69.0, boyHeightP97: 77.6, girlHeightP3: 66.8, girlHeightP97: 76.1 },
  { month: 11, label: "11 tháng", boyWeight: 9.4,  girlWeight: 8.7,  boyHeight: 74.5, girlHeight: 72.8, boyWeightP3: 7.6, boyWeightP97: 11.7, girlWeightP3: 6.9, girlWeightP97: 11.2, boyHeightP3: 70.2, boyHeightP97: 78.9, girlHeightP3: 68.0, girlHeightP97: 77.5 },
  { month: 12, label: "12 tháng", boyWeight: 9.6,  girlWeight: 8.9,  boyHeight: 75.7, girlHeight: 74.0, boyWeightP3: 7.7, boyWeightP97: 12.0, girlWeightP3: 7.0, girlWeightP97: 11.5, boyHeightP3: 71.3, boyHeightP97: 80.2, girlHeightP3: 69.2, girlHeightP97: 78.9 },
  { month: 13, label: "13 tháng", boyWeight: 9.9,  girlWeight: 9.2,  boyHeight: 76.9, girlHeight: 75.2, boyWeightP3: 7.9, boyWeightP97: 12.3, girlWeightP3: 7.2, girlWeightP97: 11.8, boyHeightP3: 72.4, boyHeightP97: 81.3, girlHeightP3: 70.3, girlHeightP97: 80.2 },
  { month: 14, label: "14 tháng", boyWeight: 10.1, girlWeight: 9.4,  boyHeight: 78.0, girlHeight: 76.4, boyWeightP3: 8.1, boyWeightP97: 12.6, girlWeightP3: 7.4, girlWeightP97: 12.1, boyHeightP3: 73.4, boyHeightP97: 82.5, girlHeightP3: 71.3, girlHeightP97: 81.4 },
  { month: 15, label: "15 tháng", boyWeight: 10.3, girlWeight: 9.6,  boyHeight: 79.1, girlHeight: 77.5, boyWeightP3: 8.3, boyWeightP97: 12.8, girlWeightP3: 7.6, girlWeightP97: 12.4, boyHeightP3: 74.4, boyHeightP97: 83.6, girlHeightP3: 72.4, girlHeightP97: 82.7 },
  { month: 16, label: "16 tháng", boyWeight: 10.5, girlWeight: 9.8,  boyHeight: 80.2, girlHeight: 78.6, boyWeightP3: 8.4, boyWeightP97: 13.1, girlWeightP3: 7.7, girlWeightP97: 12.6, boyHeightP3: 75.4, boyHeightP97: 84.8, girlHeightP3: 73.3, girlHeightP97: 83.9 },
  { month: 17, label: "17 tháng", boyWeight: 10.7, girlWeight: 10.0, boyHeight: 81.2, girlHeight: 79.7, boyWeightP3: 8.6, boyWeightP97: 13.4, girlWeightP3: 7.9, girlWeightP97: 12.9, boyHeightP3: 76.3, boyHeightP97: 85.9, girlHeightP3: 74.3, girlHeightP97: 85.0 },
  { month: 18, label: "18 tháng", boyWeight: 10.9, girlWeight: 10.2, boyHeight: 82.3, girlHeight: 80.7, boyWeightP3: 8.8, boyWeightP97: 13.7, girlWeightP3: 8.1, girlWeightP97: 13.2, boyHeightP3: 77.2, boyHeightP97: 87.0, girlHeightP3: 75.2, girlHeightP97: 86.1 },
  { month: 19, label: "19 tháng", boyWeight: 11.1, girlWeight: 10.4, boyHeight: 83.2, girlHeight: 81.7, boyWeightP3: 8.9, boyWeightP97: 13.9, girlWeightP3: 8.2, girlWeightP97: 13.5, boyHeightP3: 78.0, boyHeightP97: 88.1, girlHeightP3: 76.1, girlHeightP97: 87.2 },
  { month: 20, label: "20 tháng", boyWeight: 11.3, girlWeight: 10.6, boyHeight: 84.2, girlHeight: 82.7, boyWeightP3: 9.1, boyWeightP97: 14.2, girlWeightP3: 8.4, girlWeightP97: 13.7, boyHeightP3: 78.9, boyHeightP97: 89.2, girlHeightP3: 77.0, girlHeightP97: 88.3 },
  { month: 21, label: "21 tháng", boyWeight: 11.5, girlWeight: 10.9, boyHeight: 85.1, girlHeight: 83.7, boyWeightP3: 9.2, boyWeightP97: 14.5, girlWeightP3: 8.6, girlWeightP97: 14.0, boyHeightP3: 79.7, boyHeightP97: 90.2, girlHeightP3: 77.9, girlHeightP97: 89.4 },
  { month: 22, label: "22 tháng", boyWeight: 11.8, girlWeight: 11.1, boyHeight: 86.0, girlHeight: 84.6, boyWeightP3: 9.4, boyWeightP97: 14.7, girlWeightP3: 8.7, girlWeightP97: 14.3, boyHeightP3: 80.5, boyHeightP97: 91.2, girlHeightP3: 78.7, girlHeightP97: 90.4 },
  { month: 23, label: "23 tháng", boyWeight: 12.0, girlWeight: 11.3, boyHeight: 86.9, girlHeight: 85.5, boyWeightP3: 9.5, boyWeightP97: 15.0, girlWeightP3: 8.9, girlWeightP97: 14.6, boyHeightP3: 81.3, boyHeightP97: 92.2, girlHeightP3: 79.6, girlHeightP97: 91.4 },
  { month: 24, label: "24 tháng", boyWeight: 12.2, girlWeight: 11.5, boyHeight: 87.8, girlHeight: 86.4, boyWeightP3: 9.7, boyWeightP97: 15.3, girlWeightP3: 9.0, girlWeightP97: 14.8, boyHeightP3: 82.1, boyHeightP97: 93.2, girlHeightP3: 80.4, girlHeightP97: 92.4 },
];

/* ------------------------------------------------------------------ */
/* FAQ - CÂU HỎI THƯỜNG GẶP                                          */
/* ------------------------------------------------------------------ */

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  emoji: string;
}

export const faqData: FAQItem[] = [
  { id: 1, question: "Bé bú mẹ hoàn toàn có cần uống thêm nước không?", answer: "Không. Sữa mẹ chứa ~88% nước, đủ cung cấp cho bé dưới 6 tháng ngay cả trong thời tiết nóng. Uống nước trước 6 tháng có thể làm bé bú ít sữa, dẫn đến thiếu dinh dưỡng. Sau 6 tháng khi bắt đầu ăn dặm, cho bé tập uống nước từ cốc.", category: "Dinh dưỡng", emoji: "💧" },
  { id: 2, question: "Bé khóc đêm liên tục có sao không?", answer: "Khóc đêm ở sơ sinh là bình thường (chu kỳ ngủ chưa ổn định). Tuy nhiên nếu bé khóc dữ dội > 3 tiếng/ngày, > 3 ngày/tuần, kéo dài > 3 tuần → có thể là colic (đau bụng co thắt), nên khám bác sĩ. Kiểm tra: đói, tã ướt, nóng/lạnh, ốm trước khi lo lắng.", category: "Giấc ngủ", emoji: "😭" },
  { id: 3, question: "Khi nào nên cai sữa mẹ?", answer: "WHO khuyến cáo bú mẹ hoàn toàn 6 tháng đầu, tiếp tục bú kết hợp ăn dặm đến ít nhất 2 tuổi. Cai sữa nên từ từ (giảm 1 cữ bú mỗi 3–5 ngày) để tránh tắc sữa cho mẹ và shock cho bé. Thời điểm cai tuỳ thuộc vào mẹ và bé.", category: "Dinh dưỡng", emoji: "🤱" },
  { id: 4, question: "Bé ngủ ngáy có bình thường không?", answer: "Ngáy nhẹ, thỉnh thoảng khi bé nghẹt mũi là bình thường. Ngáy to, đều đặn mỗi đêm, kèm ngừng thở tạm thời (ngưng thở khi ngủ – OSA) cần khám ngay. Nguyên nhân phổ biến: VA/amidan quá phát, dị ứng, thừa cân.", category: "Giấc ngủ", emoji: "😴" },
  { id: 5, question: "Bé mấy tháng thì mọc răng?", answer: "Trung bình 6–7 tháng, nhưng sớm nhất có thể 3 tháng, muộn nhất 14 tháng – đều bình thường. Thường mọc răng cửa dưới trước. 20 răng sữa hoàn thành lúc 2.5–3 tuổi. Lo lắng nếu 18 tháng chưa mọc răng nào → khám nha khoa.", category: "Phát triển", emoji: "🦷" },
  { id: 6, question: "Bé bị vàng da sơ sinh có nguy hiểm không?", answer: "Vàng da sinh lý (xuất hiện ngày 2–3, giảm dần sau 1–2 tuần) khá phổ biến và thường không nguy hiểm. Vàng da bệnh lý: xuất hiện trong 24h đầu, vàng lan nhanh đến tay chân, bé lừ đừ, bú kém → cần chiếu đèn hoặc thay máu. Khám ngay nếu nghi ngờ.", category: "Sức khoẻ", emoji: "💛" },
  { id: 7, question: "Có nên cho bé dùng ti giả không?", answer: "Ti giả giúp bé tự trấn an, giảm nguy cơ SIDS (đột tử). Tuy nhiên không nên dùng trước 4–6 tuần (ảnh hưởng bú mẹ). Nên cai trước 2 tuổi để tránh ảnh hưởng khớp cắn. Chọn loại silicone, vệ sinh thường xuyên.", category: "Chăm sóc", emoji: "👶" },
  { id: 8, question: "Bé bị chàm sữa (viêm da cơ địa) xử lý thế nào?", answer: "Dưỡng ẩm da 2–3 lần/ngày bằng kem không hương liệu (cetaphil, eucerin). Tắm nhanh 5–10 phút bằng nước ấm, tránh xà phòng mạnh. Cắt ngắn móng tay bé để tránh gãi. Nếu nặng (da nứt, chảy nước, nhiễm trùng) → bác sĩ da liễu kê kem steroid phù hợp.", category: "Sức khoẻ", emoji: "🧴" },
  { id: 9, question: "Có cần cho bé uống vitamin tổng hợp không?", answer: "Bé bú mẹ: bổ sung vitamin D 400 IU/ngày (sữa mẹ thiếu vitamin D). Bé bú công thức > 500ml/ngày thường đã đủ. Sắt: bổ sung từ tháng 4–6 nếu bú mẹ hoàn toàn. Vitamin A: theo chương trình quốc gia (6 tháng & 12 tháng). Không cần vitamin tổng hợp nếu bé ăn đa dạng.", category: "Dinh dưỡng", emoji: "💊" },
  { id: 10, question: "Bé chậm nói có phải tự kỷ không?", answer: "Chậm nói ≠ tự kỷ. Nhiều bé chậm nói nhưng phát triển bình thường. Dấu hiệu nghi tự kỷ: không giao tiếp mắt, không chỉ tay, không phản ứng khi gọi tên, chơi lặp đi lặp lại. Chậm nói đơn thuần: bé vẫn giao tiếp phi ngôn ngữ tốt. Khám nếu 18 tháng không nói, 24 tháng < 50 từ.", category: "Phát triển", emoji: "💬" },
  { id: 11, question: "Bé đi phân xanh/có nhầy có sao không?", answer: "Phân xanh do: sữa đầu (foremilk) nhiều hơn sữa cuối, bổ sung sắt, hoặc thức ăn dặm xanh. Phân có nhầy ít: bình thường (nước bọt nuốt nhiều). Cần khám nếu: phân xanh đậm kèm sốt, phân có máu, nhầy nhiều/mùi hôi bất thường, kèm quấy khóc bất thường.", category: "Sức khoẻ", emoji: "💩" },
  { id: 12, question: "Bé có cần đi khám mắt/thính lực sớm không?", answer: "Thính lực: tầm soát ngay sau sinh (OAE/ABR) tại bệnh viện. Thị lực: kiểm tra phản xạ đỏ đồng tử lúc sơ sinh. Khám mắt chuyên sâu nếu: bé không theo dõi vật di chuyển lúc 3 tháng, mắt lé, đồng tử trắng. Nên khám mắt tổng quát lúc 1 tuổi.", category: "Sức khoẻ", emoji: "👀" },
  { id: 13, question: "Mẹ bị cảm/sốt có nên tiếp tục cho bú không?", answer: "CÓ. Sữa mẹ chứa kháng thể giúp bảo vệ bé. Vi rút cảm lạnh không lây qua sữa mẹ. Mẹ nên: đeo khẩu trang khi cho bú, rửa tay sạch, uống thuốc an toàn cho con bú (paracetamol ok). Tham khảo bác sĩ nếu cần dùng thuốc đặc biệt.", category: "Cho bú", emoji: "🤒" },
  { id: 14, question: "Tại sao bé hay ọc/trớ sữa?", answer: "Trào ngược sinh lý rất phổ biến (60–70% trẻ dưới 4 tháng) do cơ thắt dạ dày chưa hoàn thiện. Giảm ọc: vỗ ợ sau bú 10–15 phút, bế đầu cao 30 phút, không cho bú quá no. Cần khám nếu: ọc nặng (phun vòi rồng), sụt cân, quấy khóc nhiều khi bú.", category: "Chăm sóc", emoji: "🤮" },
  { id: 15, question: "Bé hay đổ mồ hôi trộm ban đêm có thiếu canxi?", answer: "Đổ mồ hôi đầu khi ngủ ở trẻ nhỏ THƯỜNG DO: hệ thần kinh chưa hoàn thiện, phòng nóng, mặc nhiều đồ. Không nhất thiết do thiếu canxi. Kiểm tra: phòng mát 24–26°C, mặc đồ thoáng. Nếu kèm rụng tóc vành khăn, thóp chậm liền, chân vòng kiềng → khám kiểm tra vitamin D/canxi.", category: "Sức khoẻ", emoji: "💦" },
];

/* ------------------------------------------------------------------ */
/* DINH DƯỠNG MẸ SAU SINH                                            */
/* ------------------------------------------------------------------ */

export interface PostpartumSection {
  title: string;
  icon: string;
  items: string[];
}

export const postpartumData: PostpartumSection[] = [
  {
    title: "Nguyên tắc dinh dưỡng sau sinh",
    icon: "🥗",
    items: [
      "Mẹ cho bú cần thêm ~500 kcal/ngày so với bình thường (tổng ~2300–2500 kcal).",
      "Ăn đa dạng 5 nhóm thực phẩm: tinh bột, đạm, béo, vitamin, khoáng chất.",
      "Uống đủ 2.5–3 lít nước/ngày (nước lọc, sữa, canh, nước ép).",
      "Chia thành 5–6 bữa nhỏ thay vì 3 bữa lớn để duy trì năng lượng.",
      "Không ăn kiêng giảm cân ít nhất 6 tuần đầu sau sinh.",
    ],
  },
  {
    title: "Thực phẩm lợi sữa",
    icon: "🤱",
    items: [
      "Cháo chân giò hầm đu đủ xanh – công thức lợi sữa truyền thống hiệu quả.",
      "Hạt: vừng đen, hạt điều, óc chó – giàu chất béo tốt giúp sữa mẹ béo hơn.",
      "Rau ngót, rau dền, mồng tơi – rau xanh đậm hỗ trợ tiết sữa.",
      "Cá hồi, cá thu – omega-3 (DHA) truyền qua sữa giúp phát triển não bé.",
      "Yến mạch, gạo lứt – ngũ cốc nguyên hạt giàu năng lượng và chất xơ.",
      "Uống sữa ấm hoặc nước gừng ấm trước khi cho bú giúp tiết sữa tốt hơn.",
    ],
  },
  {
    title: "Thực phẩm nên hạn chế / tránh",
    icon: "🚫",
    items: [
      "Rượu, bia: truyền qua sữa mẹ, ảnh hưởng não bé. Nếu uống, đợi ≥ 2 giờ mới cho bú.",
      "Caffeine: giới hạn < 300mg/ngày (khoảng 2 ly cà phê). Quá nhiều khiến bé khó ngủ.",
      "Đồ sống (gỏi, sushi, trứng lòng đào) – nguy cơ nhiễm khuẩn.",
      "Đồ ăn cay quá mức có thể khiến bé quấy khóc, đi ngoài.",
      "Thực phẩm gây dị ứng phổ biến (đậu phộng, hải sản): theo dõi phản ứng bé sau khi mẹ ăn.",
      "Thuốc lá: nicotine giảm sản lượng sữa, gây hại phổi bé qua khói thụ động.",
    ],
  },
  {
    title: "Phục hồi thể chất sau sinh",
    icon: "🏃‍♀️",
    items: [
      "6 tuần đầu: nghỉ ngơi là chính, đi bộ nhẹ trong nhà khi sẵn sàng.",
      "Sau 6–8 tuần (sinh thường) hoặc 8–12 tuần (sinh mổ): tập nhẹ (yoga, pilates, đi bộ).",
      "Bài tập Kegel giúp phục hồi sàn chậu – bắt đầu ngay sau sinh nếu không đau.",
      "Quấn bụng/đai bụng hỗ trợ nhưng không thay thế tập luyện.",
      "Giảm cân từ từ: mục tiêu 0.5kg/tuần, không giảm quá nhanh ảnh hưởng sữa.",
      "Kiểm tra lại sức khoẻ mẹ ở mốc 6 tuần sau sinh (khám hậu sản).",
    ],
  },
  {
    title: "Sức khoẻ tinh thần sau sinh",
    icon: "💆‍♀️",
    items: [
      "Baby blues (50–80% mẹ): buồn, khóc, lo lắng 1–2 tuần đầu → tự hết.",
      "Trầm cảm sau sinh (10–15%): kéo dài > 2 tuần, mất hứng thú, suy nghĩ tiêu cực → cần hỗ trợ chuyên khoa.",
      "Dấu hiệu cần gặp bác sĩ ngay: nghĩ đến tự gây hại bản thân hoặc bé.",
      "Ngủ khi bé ngủ, không cố 'hoàn hảo' mọi thứ.",
      "Nhờ ba/ông bà giúp: chia việc cho bú đêm (vắt sữa sẵn), nấu ăn, dọn nhà.",
      "Tham gia nhóm mẹ bỉm (online/offline) để chia sẻ và học hỏi kinh nghiệm.",
    ],
  },
  {
    title: "Bổ sung vi chất sau sinh",
    icon: "💊",
    items: [
      "Sắt: bổ sung 4–6 tuần sau sinh nếu thiếu máu (đặc biệt mất máu nhiều khi sinh).",
      "Canxi: 1000mg/ngày từ thức ăn + bổ sung nếu cần (sữa, phô mai, đậu nành).",
      "Vitamin D: 600–1000 IU/ngày giúp hấp thu canxi, phòng loãng xương.",
      "DHA: 200–300mg/ngày (từ cá béo hoặc viên bổ sung) hỗ trợ não bé qua sữa mẹ.",
      "Iốt: quan trọng cho tuyến giáp mẹ và phát triển trí não bé → dùng muối iốt.",
      "Tiếp tục vitamin tổng hợp bà bầu trong 3–6 tháng sau sinh rồi chuyển sang đa vitamin thường.",
    ],
  },
];

/* ========================================
   PHƯƠNG PHÁP EASY (Tracy Hogg)
   ======================================== */
export const easySchedules: EASYSchedule[] = [
  {
    ageRange: "0–6 tuần",
    emoji: "🍼",
    totalSleep: "16–18 giờ",
    naps: "Nhiều giấc ngắn",
    easyRoutine: [
      { letter: "E", label: "Eat (Ăn)", duration: "30–40 phút", detail: "Bú mẹ/bình mỗi 2–3 giờ. Cho bú cả 2 bên, mỗi bên 15–20 phút." },
      { letter: "A", label: "Activity (Hoạt động)", duration: "15–20 phút", detail: "Tắm, thay tã, tummy time 1–2 phút, nói chuyện nhẹ." },
      { letter: "S", label: "Sleep (Ngủ)", duration: "1.5–2 giờ", detail: "Quấn chặt, phòng tối, tiếng ồn trắng. Đặt xuống khi buồn ngủ, chưa ngủ hẳn." },
      { letter: "Y", label: "Your time (Thời gian mẹ)", duration: "Còn lại", detail: "Mẹ nghỉ ngơi, ăn uống, tắm. Ưu tiên ngủ khi bé ngủ." },
    ],
    tips: [
      "Chu kỳ EASY lặp lại mỗi 2.5–3 giờ.",
      "Bé giai đoạn này cần bú đêm — không cần ép lịch.",
      "Ghi nhật ký ăn-ngủ giúp nhận ra pattern của bé.",
    ],
  },
  {
    ageRange: "6 tuần – 4 tháng",
    emoji: "👶",
    totalSleep: "14–16 giờ",
    naps: "3–4 giấc/ngày",
    easyRoutine: [
      { letter: "E", label: "Eat (Ăn)", duration: "20–30 phút", detail: "Bú mỗi 3–3.5 giờ. Lượng bú mỗi cữ tăng, số cữ giảm dần." },
      { letter: "A", label: "Activity (Hoạt động)", duration: "30–45 phút", detail: "Tummy time 5–10 phút, chơi đồ chơi tương phản, đọc sách, hát." },
      { letter: "S", label: "Sleep (Ngủ)", duration: "1.5–2.5 giờ", detail: "Bắt đầu tập nhận tín hiệu buồn ngủ (dụi mắt, quấy). Đặt xuống sớm." },
      { letter: "Y", label: "Your time (Thời gian mẹ)", duration: "Còn lại", detail: "Bắt đầu ra ngoài đi dạo ngắn, gặp bạn bè, tập nhẹ." },
    ],
    tips: [
      "Chu kỳ EASY kéo dài 3–3.5 giờ.",
      "Bắt đầu tập phân biệt ngày/đêm: ban ngày sáng & hoạt động, đêm tối & yên tĩnh.",
      "Sleep regression 4 tháng: bé thức đêm nhiều hơn — bình thường, kiên nhẫn.",
    ],
  },
  {
    ageRange: "4–6 tháng",
    emoji: "🧒",
    totalSleep: "14–15 giờ",
    naps: "3 giấc/ngày",
    easyRoutine: [
      { letter: "E", label: "Eat (Ăn)", duration: "15–20 phút", detail: "Bú mỗi 3.5–4 giờ. Có thể tập ăn dặm từ 5.5–6 tháng (dấu hiệu sẵn sàng)." },
      { letter: "A", label: "Activity (Hoạt động)", duration: "1–1.5 giờ", detail: "Tummy time 15–20 phút, tập lẫy, với đồ chơi, ngồi có hỗ trợ." },
      { letter: "S", label: "Sleep (Ngủ)", duration: "1.5–2 giờ", detail: "2 giấc dài (sáng + chiều) + 1 giấc ngắn cuối chiều. Bắt đầu routine ngủ đêm." },
      { letter: "Y", label: "Your time (Thời gian mẹ)", duration: "Còn lại", detail: "Giấc ngủ đêm bắt đầu dài hơn → mẹ có thể nghỉ ngơi tốt hơn." },
    ],
    tips: [
      "Chu kỳ EASY khoảng 4 giờ.",
      "Xây dựng bedtime routine: tắm → massage → bú → hát ru → đặt nằm.",
      "Cho bé tự ngủ (đặt xuống lúc buồn ngủ) giúp bé tự liên kết giấc.",
    ],
  },
  {
    ageRange: "6–9 tháng",
    emoji: "🥣",
    totalSleep: "13–14 giờ",
    naps: "2 giấc/ngày",
    easyRoutine: [
      { letter: "E", label: "Eat (Ăn)", duration: "20–30 phút", detail: "Ăn dặm 2 bữa + bú 4–5 cữ. Thử đa dạng rau, trái cây, protein." },
      { letter: "A", label: "Activity (Hoạt động)", duration: "2–2.5 giờ", detail: "Bò, tập đứng vịn, chơi đồ chơi nguyên nhân-kết quả, đọc sách." },
      { letter: "S", label: "Sleep (Ngủ)", duration: "1–2 giờ", detail: "2 giấc: sáng (~1.5h) + chiều (~1.5h). Bỏ giấc ngắn cuối chiều." },
      { letter: "Y", label: "Your time (Thời gian mẹ)", duration: "Còn lại", detail: "Thời gian bé thức dài hơn → mẹ linh hoạt sắp xếp." },
    ],
    tips: [
      "Window thức: 2.5–3.5 giờ.",
      "Sleep regression 8–10 tháng do lo lắng xa cách (separation anxiety) — vỗ về thêm.",
      "Giữ lịch ăn-ngủ đều đặn giúp bé ổn định.",
    ],
  },
  {
    ageRange: "9–12 tháng",
    emoji: "🚶",
    totalSleep: "12–14 giờ",
    naps: "2 giấc/ngày",
    easyRoutine: [
      { letter: "E", label: "Eat (Ăn)", duration: "20–30 phút", detail: "3 bữa ăn dặm + 3–4 cữ bú/sữa. Bé ăn finger food, tập tự xúc." },
      { letter: "A", label: "Activity (Hoạt động)", duration: "3–3.5 giờ", detail: "Đi men, tập đi, xếp chồng, đẩy xe, chơi ngoài trời." },
      { letter: "S", label: "Sleep (Ngủ)", duration: "1–1.5 giờ", detail: "2 giấc: sáng (1h) + chiều (1.5h). Ngủ đêm 10–12 giờ liền." },
      { letter: "Y", label: "Your time (Thời gian mẹ)", duration: "Còn lại", detail: "Bé ngủ ổn → mẹ có thời gian riêng nhiều hơn." },
    ],
    tips: [
      "Nếu bé chống giấc sáng → sắp chuyển sang 1 giấc/ngày (thường 12–18 tháng).",
      "Duy trì giờ ngủ đêm cố định: tắm 6:30 → bú 7:00 → ngủ 7:30.",
      "Hạn chế screen time trước giờ ngủ.",
    ],
  },
  {
    ageRange: "12–24 tháng",
    emoji: "🏃",
    totalSleep: "11–14 giờ",
    naps: "1–2 giấc → 1 giấc",
    easyRoutine: [
      { letter: "E", label: "Eat (Ăn)", duration: "20–30 phút", detail: "3 bữa chính + 2 bữa phụ. Ăn cùng gia đình, tự xúc muỗng." },
      { letter: "A", label: "Activity (Hoạt động)", duration: "4–5 giờ", detail: "Đi, chạy, leo cầu thang, tô màu, chơi giả vờ, chơi ngoài trời." },
      { letter: "S", label: "Sleep (Ngủ)", duration: "1.5–2.5 giờ", detail: "1 giấc chiều duy nhất. Ngủ đêm 10–12 giờ." },
      { letter: "Y", label: "Your time (Thời gian mẹ)", duration: "Còn lại", detail: "Bé độc lập hơn → mẹ có thể làm việc, tập luyện." },
    ],
    tips: [
      "Chuyển sang 1 giấc ngủ trưa thường xảy ra 14–18 tháng.",
      "Regression 18 tháng: bé muốn kiểm soát → kiên nhẫn, giữ routine.",
      "Không dùng giấc ngủ như hình phạt — giữ liên kết tích cực với giấc ngủ.",
    ],
  },
];

/* ========================================
   THỰC ĐƠN ĂN DẶM MẪU
   ======================================== */
export const weaningMenus: WeaningMenu[] = [
  {
    ageRange: "6–7 tháng",
    emoji: "🥣",
    title: "Giai đoạn làm quen",
    principle: "Bột/cháo loãng, 1 bữa/ngày, 1–2 thìa cà phê. Thử 1 loại thực phẩm mới mỗi 3 ngày.",
    sampleDays: [
      { day: "Thứ 2", meals: [{ time: "11:00", menu: "Bột gạo + bí đỏ nghiền (2 thìa)" }] },
      { day: "Thứ 3", meals: [{ time: "11:00", menu: "Bột gạo + bí đỏ nghiền (3 thìa)" }] },
      { day: "Thứ 4", meals: [{ time: "11:00", menu: "Bột gạo + khoai lang nghiền (2 thìa)" }] },
      { day: "Thứ 5", meals: [{ time: "11:00", menu: "Bột gạo + khoai lang nghiền (3 thìa)" }] },
      { day: "Thứ 6", meals: [{ time: "11:00", menu: "Bột gạo + cà rốt nghiền (2 thìa)" }] },
      { day: "Thứ 7", meals: [{ time: "11:00", menu: "Bột gạo + cà rốt + bí đỏ (3 thìa)" }] },
      { day: "Chủ nhật", meals: [{ time: "11:00", menu: "Cháo trắng loãng + bông cải xanh nghiền" }] },
    ],
    notes: [
      "Vẫn bú mẹ/sữa công thức là nguồn dinh dưỡng chính.",
      "Nghiền nhuyễn hoàn toàn, độ loãng như sữa đặc.",
      "Không nêm muối, đường, nước mắm.",
      "Quan sát dị ứng: phát ban, nôn, tiêu chảy → dừng ngay.",
    ],
  },
  {
    ageRange: "7–8 tháng",
    emoji: "🥕",
    title: "Tăng đa dạng",
    principle: "Cháo + protein, 2 bữa/ngày. Nghiền thô hơn, bé tập nhai.",
    sampleDays: [
      { day: "Thứ 2", meals: [
        { time: "10:00", menu: "Cháo thịt gà + bí đỏ (50ml)" },
        { time: "17:00", menu: "Cháo khoai lang + lòng đỏ trứng" },
      ]},
      { day: "Thứ 3", meals: [
        { time: "10:00", menu: "Cháo cá hồi + bông cải xanh" },
        { time: "17:00", menu: "Cháo bí đỏ + đậu phụ nghiền" },
      ]},
      { day: "Thứ 4", meals: [
        { time: "10:00", menu: "Cháo thịt heo + cà rốt + rau ngót" },
        { time: "17:00", menu: "Cháo gạo + sữa + chuối nghiền" },
      ]},
      { day: "Thứ 5", meals: [
        { time: "10:00", menu: "Cháo tôm + mồng tơi" },
        { time: "17:00", menu: "Cháo thịt bò + khoai tây" },
      ]},
      { day: "Thứ 6", meals: [
        { time: "10:00", menu: "Cháo gan gà + rau dền" },
        { time: "17:00", menu: "Cháo đậu xanh + bí đỏ" },
      ]},
      { day: "Thứ 7", meals: [
        { time: "10:00", menu: "Cháo cá lóc + mướp" },
        { time: "17:00", menu: "Cháo trứng toàn phần + rau cải" },
      ]},
      { day: "Chủ nhật", meals: [
        { time: "10:00", menu: "Cháo thịt gà + nấm + cà rốt" },
        { time: "17:00", menu: "Cháo yến mạch + táo nghiền" },
      ]},
    ],
    notes: [
      "Thêm 1 thìa dầu ăn (dầu oliu/dầu gấc) vào cháo.",
      "Nghiền thô, có hạt — bé tập nhai.",
      "Thử trứng toàn phần, hải sản — theo dõi dị ứng.",
    ],
  },
  {
    ageRange: "9–12 tháng",
    emoji: "🍚",
    title: "Ăn thô, finger food",
    principle: "Cháo đặc/cơm nát, 3 bữa + bữa phụ. Bé tập tự xúc, ăn finger food.",
    sampleDays: [
      { day: "Thứ 2", meals: [
        { time: "7:30", menu: "Cháo yến mạch + chuối + sữa" },
        { time: "11:00", menu: "Cơm nát + thịt bò băm + bí xanh" },
        { time: "14:30", menu: "Sữa chua + thanh long" },
        { time: "17:30", menu: "Nui nhỏ + thịt gà xé + cà rốt" },
      ]},
      { day: "Thứ 3", meals: [
        { time: "7:30", menu: "Bánh mì mềm + phô mai + bơ" },
        { time: "11:00", menu: "Cơm nát + cá hồi áp chảo + rau cải" },
        { time: "14:30", menu: "Trái cây: xoài + dưa hấu cắt que" },
        { time: "17:30", menu: "Cháo đặc + tôm + bí đỏ" },
      ]},
      { day: "Thứ 4", meals: [
        { time: "7:30", menu: "Pancake chuối yến mạch (finger food)" },
        { time: "11:00", menu: "Cơm nát + thịt heo kho + đậu que" },
        { time: "14:30", menu: "Khoai lang luộc cắt que" },
        { time: "17:30", menu: "Soup rau + thịt gà + nui ống nhỏ" },
      ]},
      { day: "Thứ 5–CN", meals: [
        { time: "Sáng", menu: "Bữa sáng nhẹ: cháo/bánh mì/pancake + trái cây" },
        { time: "Trưa", menu: "Cơm nát/cháo đặc + protein + rau" },
        { time: "Xế", menu: "Bữa phụ: sữa chua/trái cây/bánh quy homemade" },
        { time: "Chiều", menu: "Bữa tương tự trưa, thay đổi protein" },
      ]},
    ],
    notes: [
      "Cắt thức ăn cỡ ngón tay mẹ để bé tự cầm.",
      "Cho bé ăn cùng bàn với gia đình.",
      "Vẫn bú mẹ/sữa 500–600ml/ngày.",
      "Tránh: mật ong (trước 12 tháng), hạt tròn, nho nguyên quả (nguy cơ hóc).",
    ],
  },
  {
    ageRange: "12–24 tháng",
    emoji: "🍽️",
    title: "Ăn cùng gia đình",
    principle: "Cơm mềm, thức ăn gia đình cắt nhỏ. 3 bữa chính + 2 bữa phụ.",
    sampleDays: [
      { day: "Thứ 2", meals: [
        { time: "7:00", menu: "Phở gà nước trong + rau" },
        { time: "9:30", menu: "Sữa chua + vài lát chuối" },
        { time: "11:30", menu: "Cơm + trứng hấp + canh cải + thịt kho" },
        { time: "14:30", menu: "Bánh flan + nước cam" },
        { time: "17:30", menu: "Cơm + cá kho + đậu bắp luộc" },
      ]},
      { day: "Thứ 3", meals: [
        { time: "7:00", menu: "Bún riêu + rau sống cắt nhỏ" },
        { time: "9:30", menu: "Chuối + phô mai que" },
        { time: "11:30", menu: "Cơm + thịt bò xào + rau muống" },
        { time: "14:30", menu: "Khoai lang nướng + sữa" },
        { time: "17:30", menu: "Cơm + canh bí đỏ + tôm rim" },
      ]},
      { day: "Thứ 4–CN", meals: [
        { time: "Sáng", menu: "Bữa sáng Việt Nam: phở/bún/cháo/bánh cuốn" },
        { time: "Giữa sáng", menu: "Bữa phụ: trái cây/sữa chua/bánh" },
        { time: "Trưa", menu: "Cơm + protein + rau + canh" },
        { time: "Xế chiều", menu: "Bữa phụ nhẹ" },
        { time: "Tối", menu: "Cơm/súp + protein khác bữa trưa" },
      ]},
    ],
    notes: [
      "Nêm nhạt hơn khẩu phần người lớn (giảm 50% gia vị).",
      "Từ 12 tháng: có thể dùng sữa tươi nguyên chất (pasteurized).",
      "Cho bé tự xúc muỗng — bừa bộn là bình thường!",
      "Đảm bảo đủ 4 nhóm thực phẩm: tinh bột, đạm, béo, vitamin-khoáng chất.",
    ],
  },
];

/* ========================================
   CHECKLIST CHUẨN BỊ
   ======================================== */
export const checklistData: ChecklistGroup[] = [
  {
    stage: "Túi đồ đi sinh",
    emoji: "🏥",
    color: "#d4a0a7",
    items: [
      { name: "CMND/CCCD + sổ khám thai + BHYT", essential: true },
      { name: "Quần áo mẹ sau sinh (2–3 bộ rộng)", essential: true },
      { name: "Quần áo sơ sinh (3–5 bộ)", essential: true },
      { name: "Bỉm sơ sinh (1 gói NB)", essential: true },
      { name: "Khăn sữa/khăn xô (5–10 cái)", essential: true },
      { name: "Mũ, bao tay, bao chân sơ sinh", essential: true },
      { name: "Băng vệ sinh sau sinh (2 gói)", essential: true },
      { name: "Bình sữa + sữa non (dự phòng)", essential: false },
      { name: "Dầu massage bé", essential: false },
      { name: "Máy ảnh/điện thoại sạc đầy", essential: false },
      { name: "Đồ ăn nhẹ cho mẹ (bánh, nước, sữa)", essential: false },
    ],
  },
  {
    stage: "Đồ sơ sinh (0–3 tháng)",
    emoji: "👶",
    color: "#c8836a",
    items: [
      { name: "Quần áo sơ sinh body/liền (8–10 bộ)", essential: true },
      { name: "Bỉm dán NB/S", essential: true },
      { name: "Khăn sữa, khăn tắm (10–15 cái)", essential: true },
      { name: "Nôi/cũi + đệm cứng (không gối)", essential: true },
      { name: "Chăn/túi ngủ mỏng", essential: true },
      { name: "Bồn tắm bé + nhiệt kế nước", essential: true },
      { name: "Máy hút sữa (nếu cần)", essential: true },
      { name: "Bình sữa + núm ti phù hợp", essential: true },
      { name: "Máy tiệt trùng bình sữa", essential: false },
      { name: "Gối chống trào ngược", essential: false },
      { name: "Địu/wrap sơ sinh", essential: false },
      { name: "Xe đẩy", essential: false },
      { name: "Car seat (nếu có ô tô)", essential: false },
    ],
  },
  {
    stage: "Ăn dặm (5–6 tháng)",
    emoji: "🥣",
    color: "#b89a5e",
    items: [
      { name: "Ghế ăn dặm (highchair)", essential: true },
      { name: "Bát, thìa mềm cho bé", essential: true },
      { name: "Yếm ăn silicon/vải", essential: true },
      { name: "Máy xay/rây nghiền thức ăn", essential: true },
      { name: "Hộp trữ đông thức ăn dặm", essential: true },
      { name: "Bình tập uống nước/cốc tập uống", essential: true },
      { name: "Tấm lót sàn chống bẩn", essential: false },
      { name: "Sách ăn dặm tham khảo", essential: false },
    ],
  },
  {
    stage: "Bé tập đi (9–18 tháng)",
    emoji: "🚶",
    color: "#6b9bd2",
    items: [
      { name: "Giày tập đi đế mềm", essential: true },
      { name: "Rào chắn cầu thang/cửa", essential: true },
      { name: "Nắp đậy ổ điện an toàn", essential: true },
      { name: "Khoá tủ/ngăn kéo an toàn", essential: true },
      { name: "Xe tập đi (push walker, KHÔNG dùng xe tròn)", essential: false },
      { name: "Đồ chơi phát triển: xếp hình, lắp ráp", essential: false },
      { name: "Sách vải/sách carton cho bé", essential: false },
      { name: "Balo dây chống đi lạc", essential: false },
    ],
  },
];

/* ========================================
   BẢNG GIẤC NGỦ CHUẨN
   ======================================== */
export const sleepChartData: SleepData[] = [
  {
    ageRange: "0–1 tháng",
    emoji: "😴",
    totalHours: "16–18h",
    nightHours: "8–9h",
    naps: "Nhiều giấc",
    napDuration: "30 phút – 4 giờ",
    tips: [
      "Bé chưa phân biệt ngày đêm — hoàn toàn bình thường.",
      "Ngủ ngửa, nệm cứng, không gối, không chăn phủ mặt.",
      "Quấn chặt giúp bé ngủ yên, giảm giật mình.",
    ],
  },
  {
    ageRange: "1–3 tháng",
    emoji: "🌙",
    totalHours: "14–17h",
    nightHours: "8–10h",
    naps: "4–5 giấc",
    napDuration: "30 phút – 2 giờ",
    tips: [
      "Bắt đầu phân biệt ngày/đêm: ban ngày mở rèm, đêm tối yên tĩnh.",
      "Window thức: chỉ 45–90 phút rồi cần ngủ lại.",
      "Bú đêm 2–3 lần là bình thường.",
    ],
  },
  {
    ageRange: "3–6 tháng",
    emoji: "🌟",
    totalHours: "13–15h",
    nightHours: "9–11h",
    naps: "3–4 giấc",
    napDuration: "30 phút – 2 giờ",
    tips: [
      "Sleep regression 4 tháng: giấc ngủ thay đổi cấu trúc → tạm thời khó ngủ.",
      "Bắt đầu xây bedtime routine ổn định.",
      "Window thức: 1.5–2.5 giờ.",
      "Tập tự ngủ: đặt xuống lúc buồn ngủ, không bế ngủ hoàn toàn.",
    ],
  },
  {
    ageRange: "6–9 tháng",
    emoji: "💤",
    totalHours: "12–15h",
    nightHours: "10–12h",
    naps: "2–3 giấc",
    napDuration: "1–2 giờ",
    tips: [
      "Nhiều bé có thể ngủ xuyên đêm (6–8 giờ liền) ở giai đoạn này.",
      "Bỏ giấc ngắn cuối chiều → 2 giấc/ngày.",
      "Lo lắng xa cách (separation anxiety) có thể ảnh hưởng giấc ngủ.",
      "Window thức: 2.5–3.5 giờ.",
    ],
  },
  {
    ageRange: "9–12 tháng",
    emoji: "🛏️",
    totalHours: "12–14h",
    nightHours: "10–12h",
    naps: "2 giấc",
    napDuration: "1–1.5 giờ",
    tips: [
      "Giữ 2 giấc/ngày đến ~14–18 tháng.",
      "Sleep regression 8–10 tháng, 12 tháng: do phát triển vận động + nhận thức.",
      "Giờ ngủ đêm lý tưởng: 19:00–19:30.",
      "Có thể bỏ bú đêm hoàn toàn (hỏi bác sĩ nếu cân nặng đạt chuẩn).",
    ],
  },
  {
    ageRange: "12–18 tháng",
    emoji: "🌈",
    totalHours: "11–14h",
    nightHours: "10–12h",
    naps: "1–2 giấc → 1 giấc",
    napDuration: "1.5–2.5 giờ",
    tips: [
      "Chuyển từ 2 giấc xuống 1 giấc trưa: bé chống giấc sáng → bỏ dần.",
      "Regression 18 tháng: bé muốn tự chủ, từ chối ngủ → kiên nhẫn giữ routine.",
      "Window thức tăng: 4–5.5 giờ.",
    ],
  },
  {
    ageRange: "18–24 tháng",
    emoji: "⭐",
    totalHours: "11–14h",
    nightHours: "10–12h",
    naps: "1 giấc trưa",
    napDuration: "1.5–2.5 giờ",
    tips: [
      "Giấc trưa thường 12:30–14:30 hoặc 13:00–15:00.",
      "Bé bắt đầu 'trốn ngủ' vì muốn chơi — giữ giấc trưa đến 3 tuổi.",
      "Chuyển từ cũi sang giường khi bé leo ra được (thường 2–3 tuổi).",
      "Ác mộng bắt đầu xuất hiện — vỗ về, nói nhẹ nhàng, đèn ngủ nhạt.",
    ],
  },
];
