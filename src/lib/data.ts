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
