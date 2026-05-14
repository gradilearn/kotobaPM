/*
===================================
KOTOBA KOSONGAN FINAL
===================================
*/

const kotobaData = [
  { t: "<ruby>アレルギー反応<rt>アレルギーはんのう</rt></ruby>", i: "Reaksi Alergi", d: "Reaksi kekebalan tubuh yang berlebihan terhadap bahan makanan tertentu." },
  { t: "<ruby>アレルギー物質<rt>アレルギーぶっしつ</rt></ruby>", i: "Bahan Alergi", d: "Bahan makanan yang dapat memicu alergi (seperti telur, susu, gandum)." },
  { t: "<ruby>安全カバー<rt>あんぜんカバー</rt></ruby>", i: "Penutup Keselamatan", d: "Pelindung pada mesin untuk mencegah tangan atau benda lain terjepit." },
  { t: "<ruby>安全靴<rt>あんぜんぐつ</rt></ruby>", i: "Sepatu Keselamatan", d: "Sepatu khusus dengan pelindung jari untuk mencegah cedera akibat benda berat." },
  { t: "<ruby>安全装置<rt>あんぜんそうち</rt></ruby>", i: "Perangkat Keselamatan", d: "Sistem otomatis yang menghentikan mesin jika terdeteksi bahaya." },
  { t: "<ruby>安全標識<rt>あんぜんひょうしき</rt></ruby>", i: "Tanda Keselamatan", d: "Rambu atau simbol peringatan bahaya di area pabrik." },
  { t: "<ruby>安全保護具<rt>あんぜんほうごぐ</rt></ruby>", i: "Alat Pelindung Diri (APD)", d: "Peralatan seperti helm, sepatu safety, dan sarung tangan untuk melindungi pekerja." },
  { t: "<ruby>異物<rt>いぶつ</rt></ruby>", i: "Benda Asing", d: "Benda yang tidak seharusnya ada di makanan (logam, kaca, rambut, serangga)." },
  { t: "<ruby>飲食料品製造業<rt>いんしょくりょうひんせいぞうぎょう</rt></ruby>", i: "Industri Manufaktur Makanan & Minuman", d: "Bidang usaha yang memproses bahan mentah menjadi produk makanan atau minuman." },
  { t: "<ruby>衛生管理<rt>えいせいかんり</rt></ruby>", i: "Manajemen Kebersihan", d: "Upaya mengelola kebersihan pabrik dan pekerja untuk menjaga keamanan produk." },
  { t: "<ruby>労働安全<rt>ろうどうあんぜん</rt></ruby>", i: "Keselamatan Kerja", d: "Tindakan untuk mencegah kecelakaan dan melindungi nyawa pekerja di tempat kerja." },
  { t: "<ruby>労働災害<rt>ろうどうさいがい</rt></ruby>", i: "Kecelakaan Kerja", d: "Cedera atau penyakit yang dialami pekerja akibat aktivitas pekerjaannya." },
  { t: "<ruby>X線異物検出機<rt>エックスせんいぶつけんしゅつき</rt></ruby>", i: "Detektor Benda Asing Sinar-X", d: "Mesin untuk mendeteksi benda asing non-logam seperti plastik, tulang, atau batu." },
  { t: "<ruby>汚染作業区域<rt>おせんさぎょうくいき</rt></ruby>", i: "Area Kerja Terkontaminasi", d: "Area untuk menangani bahan baku mentah yang masih mengandung banyak bakteri." },
  { t: "<ruby>改善措置<rt>かいぜんそち</rt></ruby>", i: "Tindakan Perbaikan", d: "Langkah yang diambil untuk memperbaiki masalah agar tidak terulang kembali." },
  { t: "<ruby>解凍<rt>かいとう</rt></ruby>", i: "Pencairan (Thawing)", d: "Proses mencairkan bahan makanan yang membeku sebelum diolah." },
  { t: "<ruby>開封<rt>かいふゅう</rt></ruby>", i: "Membuka Kemasan", d: "Tindakan membuka segel atau kemasan bahan baku atau produk." },
  { t: "<ruby>加温<rt>かおん</rt></ruby>", i: "Pemanasan", d: "Proses menaikkan suhu makanan hingga tingkat tertentu." },
  { t: "<ruby>化学的危害要因<rt>かがくてききがいよういん</rt></ruby>", i: "Bahaya Kimia", d: "Bahaya berupa zat kimia seperti deterjen, pestisida, atau alergen." },
  { t: "<ruby>加熱殺菌<rt>かねつさっきん</rt></ruby>", i: "Sterilisasi Panas", d: "Membunuh mikroorganisme dengan menggunakan suhu tinggi." },
  { t: "<ruby>加熱調理<rt>かねつちょうり</rt></ruby>", i: "Memasak dengan Panas", d: "Proses pengolahan makanan menggunakan api atau uap panas." },
  { t: "<ruby>芽胞<rt>がほう</rt></ruby>", i: "Spora", d: "Bentuk perlindungan bakteri tertentu yang sangat tahan terhadap panas tinggi." },
  { t: "<ruby>芽胞菌<rt>がほうきん</rt></ruby>", i: "Bakteri Pembentuk Spora", d: "Bakteri yang tidak mati hanya dengan pemanasan biasa (misal: Clostridium botulinum)." },
  { t: "<ruby>感染症<rt>かんせんしょう</rt></ruby>", i: "Penyakit Menular", d: "Penyakit yang disebabkan oleh virus atau bakteri dan bisa menyebar antar manusia." },
  { t: "<ruby>管理基準<rt>かんりきじゅん</rt></ruby>", i: "Standar Pengendalian", d: "Batas nilai (suhu/waktu) yang harus dipatuhi untuk menjamin keamanan pangan." },
  { t: "<ruby>危害要因<rt>きがいよういん</rt></ruby>", i: "Bahaya (Hazard)", d: "Faktor yang dapat menyebabkan gangguan kesehatan (Biologi, Kimia, atau Fisik)." },
  { t: "<ruby>危害要因分析<rt>きがいよういんぶんせき</rt></ruby>", i: "Analisis Bahaya", d: "Proses mengidentifikasi potensi bahaya dalam setiap tahap produksi." },
  { t: "<ruby>危険予知訓練<rt>きけんよちくんれん</rt></ruby>", i: "Latihan Prediksi Bahaya (KYT)", d: "Diskusi kelompok untuk memprediksi potensi kecelakaan sebelum bekerja." },
  { t: "<ruby>寄生虫<rt>きせいちゅう</rt></ruby>", i: "Parasit", d: "Makhluk hidup yang menumpang pada inang, seperti Anisakis pada ikan mentah." },
  { t: "<ruby>記録<rt>きろく</rt></ruby>", i: "Catatan", d: "Bukti tertulis hasil pemantauan suhu, kebersihan, dan proses kerja." },
  { t: "<ruby>緊急停止ボタン<rt>きんきゅうていしボタン</rt></ruby>", i: "Tombol Berhenti Darurat", d: "Tombol merah besar untuk menghentikan mesin seketika saat terjadi bahaya." },
  { t: "<ruby>金属探知機<rt>きんぞくたんちき</rt></ruby>", i: "Detektor Logam", d: "Mesin untuk mendeteksi kontaminasi logam (besi/stainless steel) dalam makanan." },
  { t: "<ruby>鎖手袋<rt>くさりてぶくろ</rt></ruby>", i: "Sarung Tangan Rantai", d: "Sarung tangan logam untuk melindungi tangan dari pisau tajam saat memotong daging." },
  { t: "<ruby>区分衛生管理<rt>くぶんえいせいかんり</rt></ruby>", i: "Manajemen Kebersihan Terpisah", d: "Mengelola kebersihan dengan membagi area berdasarkan tingkat risiko kontaminasi." },
  { t: "<ruby>健康チェック<rt>けんこうチェック</rt></ruby>", i: "Cek Kesehatan", d: "Pemeriksaan kondisi fisik pekerja (diare, demam, luka) sebelum masuk area kerja." },
  { t: "<ruby>原材料の保管<rt>げんざいりょうのほかん</rt></ruby>", i: "Penyimpanan Bahan Baku", d: "Menyimpan bahan mentah pada suhu dan tempat yang benar agar tidak rusak." },
  { t: "<ruby>交差汚染<rt>こうさおせん</rt></ruby>", i: "Kontaminasi Silang", d: "Perpindahan bakteri dari bahan mentah atau lingkungan kotor ke produk jadi." },
  { t: "<ruby>硬質異物<rt>こうしついぶつ</rt></ruby>", i: "Benda Asing Keras", d: "Benda tajam atau keras seperti pecahan kaca, logam, atau batu." },
  { t: "<ruby>５S活動<rt>ごえすかつどう</rt></ruby>", i: "Aktivitas 5S", d: "Dasar kebersihan Jepang: Seiri, Seiton, Seiso, Seiketsu, Shitsuke." },
  { t: "<ruby>ゴム手袋<rt>ゴムてぶくろ</rt></ruby>", i: "Sarung Tangan Karet", d: "Alat pelindung tangan untuk mencegah kontaminasi langsung dari tangan ke makanan." },
  { t: "<ruby>細菌<rt>さいきん</rt></ruby>", i: "Bakteri", d: "Mikroorganisme bersel satu yang dapat berkembang biak dan menyebabkan keracunan." },
  { t: "<ruby>先入れ先出し<rt>さきいれさきだし</rt></ruby>", i: "FIFO (Masuk Pertama, Keluar Pertama)", d: "Menggunakan bahan yang datang lebih awal untuk menjaga kesegaran." },
  { t: "<ruby>作業服<rt>さぎょうふく</rt></ruby>", i: "Seragam Kerja", d: "Pakaian khusus bersih yang wajib dipakai di dalam area produksi." },
  { t: "<ruby>作業手順書<rt>さぎょうてじゅんしょ</rt></ruby>", i: "Manual Prosedur Kerja", d: "Dokumen standar (SOP) yang menjelaskan cara melakukan pekerjaan dengan benar." },
  { t: "<ruby>殺菌<rt>さっきん</rt></ruby>", i: "Sterilisasi", d: "Tindakan mematikan mikroorganisme yang berbahaya bagi kesehatan." },
  { t: "<ruby>次亜塩素酸ナトリウム<rt>じあえんそさんナトリウム</rt></ruby>", i: "Natrium Hipoklorit", d: "Zat kimia yang umum digunakan untuk disinfeksi peralatan atau sayuran." },
  { t: "<ruby>始業前点検<rt>しぎょうまえてんけん</rt></ruby>", i: "Pemeriksaan Sebelum Kerja", d: "Mengecek kondisi mesin dan area sebelum produksi dimulai." },
  { t: "<ruby>指差呼称<rt>しさこしょう</rt></ruby>", i: "Menunjuk dan Menyebut", d: "Metode memastikan keamanan dengan menunjuk objek dan menyuarakannya." },
  { t: "<ruby>自然解凍<rt>しぜんかいとう</rt></ruby>", i: "Pencairan Alami", d: "Mencairkan makanan beku pada suhu ruang (kurang disarankan untuk makanan tertentu)." },
  { t: "<ruby>下処理<rt>したしょり</rt></ruby>", i: "Persiapan Awal", d: "Proses awal seperti mencuci atau mengupas bahan baku sebelum dimasak." },
  { t: "<ruby>しつけ<rt>しつけ</rt></ruby>", i: "Disiplin (Rajin)", d: "Membiasakan diri untuk selalu mematuhi aturan kerja yang sudah ditetapkan." },
  { t: "<ruby>習慣付け<rt>しゅうかんづけ</rt></ruby>", i: "Pembiasaan", d: "Sama dengan Shitsuke, yaitu membuat perilaku benar menjadi kebiasaan." },
  { t: "<ruby>充填<rt>じゅうてん</rt></ruby>", i: "Pengisian", d: "Proses memasukkan produk makanan ke dalam wadah atau kemasan." },
  { t: "<ruby>重要管理点<rt>じゅうようかんりてん</rt></ruby>", i: "CCP (Titik Kendali Kritis)", d: "Tahap krusial dalam HACCP untuk menghilangkan atau mengurangi bahaya." },
  { t: "<ruby>準清潔作業区域<rt>じゅんせいけつさぎょうくいき</rt></ruby>", i: "Area Kerja Semi-Bersih", d: "Area antara, seperti tempat persiapan bahan baku sebelum dimasak." },
  { t: "<ruby>使用期限<rt>しようきげん</rt></ruby>", i: "Batas Penggunaan", d: "Batas waktu penggunaan bahan baku agar kualitas produk tetap terjaga." },
  { t: "<ruby>消費期限<rt>しょうひきげん</rt></ruby>", i: "Batas Konsumsi", d: "Tanggal terakhir makanan aman dimakan. Jika lewat, risiko keracunan tinggi." },
  { t: "<ruby>賞味期限<rt>しょうみきげん</rt></ruby>", i: "Batas Kualitas Terbaik", d: "Tanggal batas rasa terbaik. Masih aman dimakan setelah lewat, tapi rasa menurun." },
  { t: "<ruby>食中毒菌<rt>しょくちゅうどくきん</rt></ruby>", i: "Bakteri Keracunan Makanan", d: "Bakteri yang menghasilkan racun atau menginfeksi tubuh melalui makanan." },
  { t: "<ruby>食中毒予防３原則<rt>しょくちゅうどくよぼう３げんそく</rt></ruby>", i: "3 Prinsip Pencegahan Keracunan", d: "Jangan menempelkan, Jangan membiarkan berkembang biak, dan Matikan." },
  { t: "<ruby>食品衛生<rt>しょくひんえいせい</rt></ruby>", i: "Kebersihan Makanan", d: "Kondisi di mana makanan aman dan tidak menyebabkan penyakit atau luka." },
  { t: "<ruby>水冷<rt>すいれい</rt></ruby>", i: "Pendinginan Air", d: "Proses mendinginkan produk menggunakan air dingin atau es." },
  { t: "<ruby>成形<rt>せいけい</rt></ruby>", i: "Pembentukan", d: "Proses membentuk bahan makanan menjadi bentuk tertentu (misal: bulat)." },
  { t: "<ruby>清潔<rt>せいけつ</rt></ruby>", i: "Rawat (Bersih)", d: "Menjaga kondisi 3S (Seiri, Seiton, Seiso) agar terus berlanjut." },
  { t: "<ruby>清潔作業区域<rt>せいけつさぎょうくいき</rt></ruby>", i: "Area Kerja Bersih", d: "Area proses akhir atau pengemasan yang harus dijaga sangat higienis." },
  { t: "<ruby>清掃<rt>せいそう</rt></ruby>", i: "Resik (Pembersihan)", d: "Membersihkan debu dan kotoran agar lingkungan kerja selalu bersih." },
  { t: "<ruby>整理<rt>せいり</rt></ruby>", i: "Ringkas", d: "Memilah barang dan membuang apa yang tidak diperlukan di tempat kerja." },
  { t: "<ruby>整頓<rt>せいとん</rt></ruby>", i: "Rapi", d: "Menata barang di tempat yang ditentukan agar mudah ditemukan dan diambil." },
  { t: "<ruby>生物的危害要因<rt>せいぶつてききがいよういん</rt></ruby>", i: "Bahaya Biologi", d: "Bahaya dari makhluk hidup seperti bakteri, virus, atau parasit." },
  { t: "<ruby>洗浄<rt>せんじょう</rt></ruby>", i: "Pencucian", d: "Menghilangkan kotoran fisik menggunakan air atau deterjen." },
  { t: "<ruby>惣菜<rt>そうざい</rt></ruby>", i: "Lauk Pauk (Side Dish)", d: "Makanan siap saji yang biasanya dijual di supermarket atau toko." },
  { t: "<ruby>惣菜製造業<rt>そうざいせいぞうぎょう</rt></ruby>", i: "Industri Pembuatan Lauk Pauk", d: "Bisnis yang memproduksi makanan siap saji atau bento." },
  { t: "<ruby>ゾーニング<rt>ゾーニング</rt></ruby>", i: "Zonasi", d: "Pemisahan area bersih dan kotor untuk mencegah kontaminasi silang." },
  { t: "<ruby>ソラニン<rt>ソラニン</rt></ruby>", i: "Solanin", d: "Racun alami yang terdapat pada tunas atau bagian hijau kentang." },
  { t: "<ruby>耐熱エプロン<rt>たいねつエプロン</rt></ruby>", i: "Apron Tahan Panas", d: "Pelindung tubuh saat menangani uap panas atau air mendidih." },
  { t: "<ruby>中心温度<rt>ちゅうしんおんど</rt></ruby>", i: "Suhu Bagian Tengah", d: "Suhu di bagian paling dalam makanan yang harus mencapai standar aman (misal 75°C)." },
  { t: "<ruby>調理器具<rt>ちょうりきぐ</rt></ruby>", i: "Peralatan Masak", d: "Alat-alat yang digunakan untuk mengolah makanan (pisau, spatula, dll)." },
  { t: "<ruby>手洗い<rt>てあらい</rt></ruby>", i: "Cuci Tangan", d: "Tindakan wajib sebelum masuk area kerja untuk membunuh bakteri di tangan." },
  { t: "<ruby>手袋<rt>てぶくろ</rt></ruby>", i: "Sarung Tangan", d: "Alat pelindung tangan untuk menjaga higienitas makanan." },
  { t: "<ruby>電源<rt>でんげん</rt></ruby>", i: "Sumber Listrik", d: "Aliran listrik yang menggerakkan mesin-mesin di pabrik." },
  { t: "<ruby>毒素<rt>どくそ</rt></ruby>", i: "Toksin (Racun)", d: "Zat berbahaya yang dihasilkan oleh bakteri tertentu (misal: Staphylococcus)." },
  { t: "<ruby>特徴<rt>とくちょう</rt></ruby>", i: "Ciri Khas", d: "Sifat atau karakteristik unik dari suatu bakteri atau bahan pangan." },
  { t: "<ruby>特定原材料<rt>とくていげんざいりょう</rt></ruby>", i: "Bahan Baku Spesifik", d: "8 bahan wajib label alergi (Telur, Susu, Gandum, Udang, Kepiting, dll)." },
  { t: "<ruby>特定原材料に準ずるもの<rt>とくていげんざいりょうにじゅんずるもの</rt></ruby>", i: "Bahan Setara Bahan Spesifik", d: "20 bahan yang disarankan dicantumkan di label alergi (Daging sapi, babi, dll)." },
  { t: "<ruby>トッピング<rt>トッピング</rt></ruby>", i: "Topping", d: "Bahan tambahan yang diletakkan di atas produk makanan." },
  { t: "<ruby>二次災害<rt>にじさいがい</rt></ruby>", i: "Bencana Sekunder", d: "Kecelakaan susulan yang terjadi akibat kecelakaan pertama." },
  { t: "<ruby>熱中症<rt>ねっちゅうしょう</rt></ruby>", i: "Heatstroke", d: "Gangguan kesehatan serius akibat paparan suhu panas berlebih." },
  { t: "<ruby>ハインリッヒの法則<rt>ハインリッヒのほうそく</rt></ruby>", i: "Hukum Heinrich", d: "Teori 1:29:300 (1 kecelakaan berat diawali banyak kejadian nyaris celaka)." },
  { t: "<ruby>ハザード<rt>ハザード</rt></ruby>", i: "Bahaya", d: "Potensi penyebab cedera atau sakit dalam makanan (Sama dengan kigai youin)." },
  { t: "<ruby>ハザード分析<rt>ハザードぶんせき</rt></ruby>", i: "Analisis Bahaya", d: "Identifikasi bahaya biologi, kimia, dan fisik pada setiap proses." },
  { t: "<ruby>HACCPの７原則<rt>HACCPの７げんそく</rt></ruby>", i: "7 Prinsip HACCP", d: "Langkah-langkah sistematis untuk menjamin keamanan pangan dunia." },
  { t: "<ruby>HACCPプラン<rt>HACCPプラン</rt></ruby>", i: "Rencana HACCP", d: "Dokumen yang memuat cara mengontrol bahaya pada titik kendali kritis." },
  { t: "<ruby>非加熱調理<rt>ひかねつちょうり</rt></ruby>", i: "Memasak Tanpa Panas", d: "Pengolahan makanan yang tidak melibatkan pemanasan (misal: salad)." },
  { t: "<ruby>非常停止ボタン<rt>ひじょうていしボタン</rt></ruby>", i: "Tombol Berhenti Darurat", d: "Sama dengan kyuukyuu teishi botan (penghenti mesin saat bahaya)." },
  { t: "<ruby>ヒスタミン<rt>ヒスタミン</rt></ruby>", i: "Histamin", d: "Zat pemicu alergi yang muncul pada ikan yang tidak disimpan di suhu dingin." },
  { t: "<ruby>微生物<rt>びせいぶつ</rt></ruby>", i: "Mikroorganisme", d: "Makhluk sangat kecil yang hanya bisa dilihat dengan mikroskop." },
  { t: "<ruby>微生物理検査<rt>びせいぶつけんさ</rt></ruby>", i: "Uji Mikroorganisme", d: "Pemeriksaan jumlah bakteri dalam produk untuk memastikan keamanan." },
  { t: "<ruby>ヒヤリハット活動<rt>ヒヤリハットかつどう</rt></ruby>", i: "Aktivitas Hiyari Hatto", d: "Kegiatan melaporkan insiden 'hampir celaka' untuk mencegah kecelakaan nyata." },
  { t: "<ruby>病原性微生物<rt>びょうげんせいびせいぶつ</rt></ruby>", i: "Mikroba Patogen", d: "Mikroorganisme yang dapat menyebabkan penyakit pada manusia." },
  { t: "<ruby>風冷<rt>ふうれい</rt></ruby>", i: "Pendinginan Udara", d: "Proses mendinginkan makanan menggunakan aliran udara dingin." },
  { t: "<ruby>フールプルーフ<rt>フールプルーフ</rt></ruby>", i: "Fool-proof", d: "Desain mesin agar tidak bisa dioperasikan salah oleh manusia (mencegah eror)." },
  { t: "<ruby>フェールセーフ<rt>フェールセーフ</rt></ruby>", i: "Fail-safe", d: "Sistem yang membuat mesin otomatis berhenti dalam kondisi aman jika rusak." },
  { t: "<ruby>物理的危害要因<rt>ぶつりてききがいよういん</rt></ruby>", i: "Bahaya Fisik", d: "Bahaya berupa benda padat (logam, batu, kaca) yang masuk ke makanan." },
  { t: "<ruby>ヘルメット<rt>ヘルメット</rt></ruby>", i: "Helm", d: "Pelindung kepala dari benturan atau benda jatuh di area kerja." },
  { t: "<ruby>弁当<rt>べんとう</rt></ruby>", i: "Kotak Makan (Bento)", d: "Makanan lengkap dalam wadah yang siap dibawa dan dimakan." },
  { t: "<ruby>包装<rt>ほうそう</rt></ruby>", i: "Pengemasan", d: "Proses membungkus produk untuk melindungi dari kontaminasi luar." },
  { t: "<ruby>保管温度<rt>ほかんおんど</rt></ruby>", i: "Suhu Penyimpanan", d: "Suhu yang ditetapkan untuk menjaga kualitas bahan atau produk." },
  { t: "<ruby>混ぜる<rt>まぜる</rt></ruby>", i: "Mencampur", d: "Proses menyatukan beberapa bahan makanan menjadi satu." },
  { t: "<ruby>耳栓<rt>みみせん</rt></ruby>", i: "Penyumbat Telinga", d: "APD untuk melindungi pendengaran dari kebisingan mesin pabrik." },
  { t: "<ruby>盛り付け<rt>もりつけ</rt></ruby>", i: "Penataan (Plating)", d: "Menata makanan di atas wadah atau piring agar terlihat menarik." },
  { t: "<ruby>薬剤<rt>やくざい</rt></ruby>", i: "Bahan Kimia/Obat", d: "Zat kimia seperti alkohol atau pembersih yang digunakan di pabrik." },
  { t: "<ruby>薬剤の管理<rt>やくざいのかんり</rt></ruby>", i: "Manajemen Bahan Kimia", d: "Penyimpanan zat kimia di tempat terpisah agar tidak masuk ke makanan." },
  { t: "<ruby>薬剤による殺菌<rt>やくざいによるさっきん</rt></ruby>", i: "Sterilisasi Bahan Kimia", d: "Membunuh bakteri menggunakan zat seperti alkohol atau klorin." },
  { t: "<ruby>流水<rt>りゅうすい</rt></ruby>", i: "Air Mengalir", d: "Air bersih yang mengalir, digunakan untuk mencuci tangan atau bahan." },
  { t: "<ruby>流水解凍<rt>りゅうすいかいとう</rt></ruby>", i: "Pencairan Air Mengalir", d: "Mencairkan makanan beku dengan meletakkannya di bawah air mengalir." },
  { t: "<ruby>冷却<rt>れいきゃく</rt></ruby>", i: "Pendinginan", d: "Menurunkan suhu makanan dengan cepat setelah dimasak." },
  { t: "<ruby>冷凍<rt>れいとう</rt></ruby>", i: "Pembekuan", d: "Penyimpanan makanan pada suhu di bawah -15°C agar tahan lama." },
  { t: "<ruby>冷凍庫<rt>れいとうこ</rt></ruby>", i: "Freezer", d: "Alat atau ruangan untuk membekukan makanan." },
  { t: "<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>", i: "Kulkas/Chiller", d: "Tempat menyimpan makanan pada suhu dingin (biasanya di bawah 10°C)." },
  { t: "<ruby>技能<rt>ぎのう</rt></ruby>", i: "Keterampilan", d: "Kemampuan teknis yang dibutuhkan untuk melakukan pekerjaan tertentu." },
  { t: "<ruby>一般衛生管理<rt>いっぱんえいせいかんり</rt></ruby>", i: "Manajemen Kebersihan Umum", d: "Langkah dasar sanitasi pabrik yang harus dilakukan sebelum HACCP." },
  { t: "<ruby>施設<rt>しせつ</rt></ruby>", i: "Fasilitas", d: "Bangunan dan sarana yang digunakan untuk kegiatan produksi." },
  { t: "<ruby>設備<rt>せつび</rt></ruby>", i: "Peralatan/Instalasi", d: "Mesin dan alat tetap yang ada di pabrik untuk mendukung kerja." },
  { t: "<ruby>器具<rt>きぐ</rt></ruby>", i: "Alat Kerja", d: "Peralatan tangan atau mesin kecil yang digunakan saat bekerja." },
  { t: "<ruby>作業者<rt>さぎょうしゃ</rt></ruby>", i: "Pekerja", d: "Orang yang melakukan tugas di area produksi." },
  { t: "<ruby>原材料<rt>げんざいりょう</rt></ruby>", i: "Bahan Baku", d: "Bahan mentah yang diolah menjadi produk jadi." },
  { t: "<ruby>食品<rt>しょくひん</rt></ruby>", i: "Makanan", d: "Produk yang dimaksudkan untuk dikonsumsi manusia." },
  { t: "<ruby>経験<rt>けいけん</rt></ruby>", i: "Pengalaman", d: "Pengetahuan yang didapat dari melakukan pekerjaan sebelumnya." },
  { t: "<ruby>関係<rt>かんけい</rt></ruby>", i: "Hubungan", d: "Kaitan antara satu proses dengan proses lainnya." },
  { t: "<ruby>卵の殻<rt>たまごから</rt></ruby>", i: "Cangkang Telur", d: "Salah satu benda asing fisik yang sering masuk jika tidak hati-hati." },
  { t: "<ruby>苦情（クレーム）<rt>くじょう</rt></ruby>", i: "Keluhan", d: "Laporan dari konsumen jika produk bermasalah atau tidak memuaskan." },
  { t: "<ruby>返品<rt>へんぴん</rt></ruby>", i: "Pengembalian Barang", d: "Barang yang dikembalikan oleh konsumen karena cacat atau rusak." },
  { t: "<ruby>じゃがいもの芽<rt>じゃがいものめ</rt></ruby>", i: "Tunas Kentang", d: "Bagian kentang yang mengandung racun solanin, harus dibuang." },
  { t: "<ruby>かゆみ<rt>かゆみ</rt></ruby>", i: "Gatal", d: "Gejala umum yang muncul akibat reaksi alergi makanan." },
  { t: "<ruby>じんましん<rt>じんましん</rt></ruby>", i: "Biduran/Kaligata", d: "Bercak merah gatal pada kulit akibat alergi." },
  { t: "<ruby>まな板<rt>まないた</rt></ruby>", i: "Talenan", d: "Alat alas untuk memotong bahan makanan." },
  { t: "<ruby>洗い流す<rt>あらいながす</rt></ruby>", i: "Membilas", d: "Membersihkan kotoran atau sabun dengan air mengalir." },
  { t: "<ruby>条件<rt>じょうけん</rt></ruby>", i: "Syarat", d: "Kondisi yang dibutuhkan agar sesuatu terjadi (misal: syarat bakteri tumbuh)." },
  { t: "<ruby>含まれている<rt>ふくまれている</rt></ruby>", i: "Terkandung", d: "Keberadaan suatu zat atau bahan di dalam makanan." },
  { t: "<ruby>呼吸困難<rt>こきゅうこんなん</rt></ruby>", i: "Sesak Napas", d: "Gejala alergi parah yang membutuhkan penanganan medis segera." },
  { t: "<ruby>つけない<rt>つけない</rt></ruby>", i: "Jangan Menempelkan", d: "Prinsip 1 pencegahan keracunan: jaga tangan dan alat tetap bersih." },
  { t: "<ruby>増やさない<rt>ふやさない</rt></ruby>", i: "Jangan Membiarkan Berkembang Biak", d: "Prinsip 2 pencegahan keracunan: kontrol suhu (dingin/beku)." },
  { t: "<ruby>やっつける（殺す）<rt>やっつける</rt></ruby>", i: "Matikan/Bunuh", d: "Prinsip 3 pencegahan keracunan: panaskan makanan hingga matang." },
  { t: "<ruby>温度<rt>おんど</rt></ruby>", i: "Suhu", d: "Derajat panas atau dingin yang sangat berpengaruh pada bakteri." },
  { t: "<ruby>水分<rt>すいぶん</rt></ruby>", i: "Kadar Air", d: "Salah satu dari 3 syarat utama bakteri untuk tumbuh." },
  { t: "<ruby>栄養<rt>えいよう</rt></ruby>", i: "Nutrisi", d: "Bahan makanan yang dibutuhkan bakteri untuk berkembang biak." },
  { t: "<ruby>低温<rt>ていおん</rt></ruby>", i: "Suhu Rendah", d: "Suhu dingin yang memperlambat pertumbuhan bakteri." },
  { t: "<ruby>室温<rt>しつおん</rt></ruby>", i: "Suhu Ruang", d: "Suhu lingkungan normal yang sering kali masuk zona bahaya bakteri." },
  { t: "<ruby>高温<rt>こうおん</rt></ruby>", i: "Suhu Tinggi", d: "Suhu panas yang dapat membunuh sebagian besar mikroba." },
  { t: "<ruby>濃度<rt>のうど</rt></ruby>", i: "Konsentrasi", d: "Kepekatan larutan zat kimia pembersih atau disinfektan." },
  { t: "<ruby>冷やします<rt>ひやします</rt></ruby>", i: "Mendinginkan", d: "Tindakan menurunkan suhu produk secara aktif." },
  { t: "<ruby>感染した人<rt>かんせんしたひと</rt></ruby>", i: "Orang yang Terinfeksi", d: "Pekerja yang membawa penyakit dan berisiko menularkannya ke makanan." },
  { t: "<ruby>持ち込まない<rt>もちこまない</rt></ruby>", i: "Jangan Membawa Masuk", d: "Aturan melarang barang pribadi atau kuman masuk ke area produksi." },
  { t: "<ruby>広げない<rt>ひろげない</rt></ruby>", i: "Jangan Menyebarkan", d: "Mencegah kontaminasi yang sudah ada agar tidak meluas ke produk lain." },
  { t: "<ruby>冷却する<rt>れいきゃくする</rt></ruby>", i: "Melakukan Pendinginan", d: "Proses teknis menurunkan suhu makanan dengan cepat." },
  { t: "<ruby>考え方<rt>かんがえかた</rt></ruby>", i: "Cara Berpikir/Konsep", d: "Dasar pemahaman dalam menjalankan manajemen kebersihan." },
  { t: "<ruby>取り除く<rt>とりのぞく</rt></ruby>", i: "Menghilangkan/Membuang", d: "Proses memisahkan bahaya atau kotoran dari makanan." },
  { t: "<ruby>基本<rt>きほん</rt></ruby>", i: "Dasar", d: "Hal paling penting yang harus dikuasai sebelum hal lainnya." },
  { t: "<ruby>使い分け<rt>つかいわけ</rt></ruby>", i: "Pembedaan Penggunaan", d: "Menggunakan alat berbeda untuk bahan berbeda (misal: pisau daging vs sayur)." },
  { t: "<ruby>保ちます<rt>たもちます</rt></ruby>", i: "Menjaga/Mempertahankan", d: "Menjaga kondisi kebersihan atau suhu agar tetap stabil." },
  { t: "<ruby>ダンボール箱<rt>ダンボールばこ</rt></ruby>", i: "Kardus", d: "Wadah luar yang sering membawa kotoran, dilarang masuk area bersih." },
  { t: "<ruby>防ぎます<rt>ふせぎます</rt></ruby>", i: "Mencegah", d: "Melakukan tindakan agar bahaya atau kecelakaan tidak terjadi." },
  { t: "<ruby>症状<rt>しょうじょう</rt></ruby>", i: "Gejala", i: "Tanda-tanda penyakit yang dirasakan oleh tubuh." },
  { t: "<ruby>着用する<rt>ちゃくようする</rt></ruby>", i: "Memakai", d: "Tindakan mengenakan seragam, masker, atau APD." },
  { t: "<ruby>埃<rt>ほこり</rt></ruby>", i: "Debu", d: "Partikel kecil kotoran yang dapat mengontaminasi makanan." },
  { t: "<ruby>腕カバー<rt>うでカバー</rt></ruby>", i: "Pelindung Lengan", d: "APD tambahan untuk melindungi lengan dari kotoran atau panas." },
  { t: "<ruby>正しい<rt>ただしい</rt></ruby>", i: "Benar", d: "Sesuai dengan prosedur standar yang ditetapkan perusahaan." },
  { t: "<ruby>間違っている<rt>まちがっている</rt></ruby>", i: "Salah", d: "Tidak sesuai dengan aturan, berisiko menyebabkan bahaya." },
  { t: "<ruby>選びます<rt>えらびます</rt></ruby>", i: "Memilih", d: "Tindakan menentukan opsi yang benar dalam bekerja atau ujian." },
  { t: "<ruby>破れます<rt>やぶれます</rt></ruby>", i: "Robek", d: "Kondisi sarung tangan atau kemasan yang rusak dan berisiko kontaminasi." },
  { t: "<ruby>汚れます<rt>よごれます</rt></ruby>", i: "Menjadi Kotor", d: "Terkena noda atau kuman yang dapat merusak kebersihan." },
  { t: "<ruby>汚染されます<rt>おせんされます</rt></ruby>", i: "Terkontaminasi", d: "Kondisi di mana kuman atau benda asing masuk ke dalam produk." },
  { t: "<ruby>移動します<rt>いどうします</rt></ruby>", i: "Berpindah", d: "Pergerakan kuman atau barang dari satu tempat ke tempat lain." },
  { t: "<ruby>石鹸<rt>せっけん</rt></ruby>", i: "Sabun", d: "Zat pembersih untuk menghilangkan kuman saat cuci tangan." },
  { t: "<ruby>手を乾かします<rt>てをかわかします</rt></ruby>", i: "Mengeringkan Tangan", d: "Langkah wajib setelah cuci tangan agar bakteri tidak mudah menempel lagi." },
  { t: "<ruby>交換する<rt>こうかんする</rt></ruby>", i: "Mengganti", d: "Tindakan mengganti sarung tangan atau alat yang sudah kotor/rusak." },
  { t: "<ruby>受け入れ<rt>うけいれ</rt></ruby>", i: "Penerimaan Barang", d: "Tahap awal saat bahan baku datang ke pabrik dan dicek suhunya." },
  { t: "<ruby>殺菌済み<rt>さっきんずみ</rt></ruby>", i: "Sudah Disterilisasi", d: "Kondisi bahan atau alat yang sudah bebas dari kuman berbahaya." },

  /*
===================================
KOTOBA KOSONGAN FINAL
===================================
*/

  { t: "<ruby>飲料<rt>いんりょう</rt></ruby>", i: "Minuman", d: "Segala jenis cairan yang diproduksi untuk diminum seperti air, teh, atau jus." },
  { t: "<ruby>食料品<rt>しょくりょうひん</rt></ruby>", i: "Bahan Makanan", d: "Barang-barang hasil olahan yang diproduksi untuk dimakan." },
  { t: "<ruby>缶詰<rt>かんづめ</rt></ruby>", i: "Pengalengan", d: "Produk yang diawetkan dalam kaleng kedap udara agar tahan lama." },
  { t: "<ruby>調味料<rt>ちょうみりょう</rt></ruby>", i: "Bumbu", d: "Bahan penambah rasa seperti garam, gula, kecap, atau saus." },
  { t: "<ruby>冷凍食品<rt>れいとうしょくひん</rt></ruby>", i: "Makanan Beku", d: "Makanan yang dibekukan agar kualitasnya terjaga untuk waktu lama." },
  { t: "<ruby>業種<rt>ぎょうしゅ</rt></ruby>", i: "Jenis Industri", d: "Klasifikasi bidang usaha, misalnya industri pembuatan lauk pauk." },
  { t: "<ruby>知識<rt>ちしき</rt></ruby>", i: "Pengetahuan", d: "Informasi dan teori yang diperlukan sebelum mulai bekerja di pabrik." },
  { t: "<ruby>管理する<rt>かんりする</rt></ruby>", i: "Mengelola/Mengontrol", d: "Tindakan mengatur suhu, kebersihan, atau proses agar sesuai standar." },
  { t: "<ruby>信用<rt>しんよう</rt></ruby>", i: "Kepercayaan", d: "Kredibilitas perusahaan yang dijaga melalui keamanan produk makanan." },
  { t: "<ruby>行動<rt>こうどう</rt></ruby>", i: "Tindakan/Perilaku", d: "Langkah atau aktivitas yang dilakukan pekerja sesuai prosedur." },
  { t: "<ruby>共通<rt>きょうつう</rt></ruby>", i: "Umum/Secara Umum", d: "Hal-hal yang berlaku sama di semua bagian atau lini produksi." },
  { t: "<ruby>組み合わせる<rt>くみあわせる</rt></ruby>", i: "Mengkombinasikan", d: "Menggabungkan beberapa langkah, seperti sanitasi umum dengan HACCP." },
  { t: "<ruby>尖る<rt>とがる</rt></ruby>", i: "Lancip/Tajam", d: "Kondisi benda asing (logam/kaca) yang berisiko melukai mulut konsumen." },
  { t: "<ruby>金属片<rt>きんぞくへん</rt></ruby>", i: "Serpihan Logam", d: "Potongan logam kecil yang tidak sengaja masuk ke dalam produk." },
  { t: "<ruby>ガラス片<rt>ガラスへん</rt></ruby>", i: "Serpihan Kaca", d: "Pecahan kaca yang termasuk dalam kategori bahaya fisik keras." },
  { t: "<ruby>プラスチック片<rt>プラスチックへん</rt></ruby>", i: "Serpihan Plastik", d: "Potongan plastik dari peralatan atau kemasan yang pecah." },
  { t: "<ruby>石<rt>いし</rt></ruby>", i: "Kerikil/Batu", d: "Benda asing yang biasanya terbawa dari bahan baku hasil pertanian." },
  { t: "<ruby>紙片<rt>しへん</rt></ruby>", i: "Serpihan Kertas", d: "Potongan kertas yang dapat mengontaminasi produk makanan." },
  { t: "<ruby>不潔<rt>ふけつ</rt></ruby>", i: "Kotor/Tidak Bersih", d: "Kondisi yang menjadi sumber perkembangbiakan bakteri." },
  { t: "<ruby>不衛生<rt>ふえいせい</rt></ruby>", i: "Tidak Higienis", d: "Kondisi atau cara kerja yang tidak memenuhi standar kebersihan." },
  { t: "<ruby>物質<rt>ぶっしつ</rt></ruby>", i: "Bahan/Zat", d: "Materi kimia atau biologi yang membentuk suatu unsur." },
  { t: "<ruby>殺菌剤<rt>さっきんざい</rt></ruby>", i: "Agen Pembasmi Kuman", d: "Zat kimia (sanitizer) yang digunakan untuk membunuh mikroba." },
  { t: "<ruby>洗浄剤<rt>せんじょうざい</rt></ruby>", i: "Deterjen Cuci", d: "Zat kimia untuk menghilangkan kotoran fisik pada alat atau lantai." },
  { t: "<ruby>過剰<rt>かじょう</rt></ruby>", i: "Berlebihan", d: "Jumlah yang melampaui batas aman (misal: penggunaan zat aditif)." },
  { t: "<ruby>義務<rt>ぎむ</rt></ruby>", i: "Wajib", d: "Hal yang harus dilakukan secara hukum, seperti label 8 bahan alergi." },
  { t: "<ruby>推奨<rt>すいしょう</rt></ruby>", i: "Disarankan/Rekomendasi", d: "Label alergi yang tidak wajib namun sangat dianjurkan dicantumkan." },
  { t: "<ruby>赤身魚<rt>あかみざかな</rt></ruby>", i: "Ikan Daging Merah", d: "Ikan seperti tuna yang dapat menghasilkan histamin jika disimpan tidak dingin." },
  { t: "<ruby>保存状態<rt>ほぞんじょうたい</rt></ruby>", i: "Status Penyimpanan", d: "Kondisi suhu dan kebersihan tempat bahan makanan disimpan." },
  { t: "<ruby>吐き気<rt>はきけ</rt></ruby>", i: "Mual", d: "Perasaan ingin muntah, salah satu gejala awal keracunan." },
  { t: "<ruby>おう吐<rt>おうと</rt></ruby>", i: "Muntah", d: "Keluarnya isi perut secara paksa akibat infeksi atau racun bakteri." },
  { t: "<ruby>下痢<rt>げり</rt></ruby>", i: "Diare", d: "Gejala keracunan berupa buang air besar cair secara terus-menerus." },
  { t: "<ruby>腹痛<rt>ふくつう</rt></ruby>", i: "Sakit Perut", d: "Rasa nyeri pada perut yang sering menyertai gejala keracunan." },
  { t: "<ruby>頭痛<rt>ずつう</rt></ruby>", i: "Sakit Kepala", d: "Gejala tambahan yang bisa muncul saat tubuh bereaksi terhadap racun makanan." },
  { t: "<ruby>顕微鏡<rt>けんびきょう</rt></ruby>", i: "Mikroskop", d: "Alat untuk melihat mikroorganisme yang tidak kasat mata." },
  { t: "<ruby>発症する<rt>はっしょうする</rt></ruby>", i: "Timbul Gejala", d: "Saat mulai munculnya rasa sakit setelah periode inkubasi bakteri." },
  { t: "<ruby>皮膚<rt>ひふ</rt></ruby>", i: "Kulit", d: "Bagian tubuh pekerja yang harus selalu bersih agar tidak mencemari produk." },
  { t: "<ruby>血便<rt>けつべん</rt></ruby>", i: "BAB Berdarah", d: "Gejala serius akibat bakteri seperti E. coli (O-157)." },
  { t: "<ruby>通常<rt>つうじょう</rt></ruby>", i: "Umum/Normal", d: "Kondisi standar yang biasanya terjadi di lingkungan pabrik." },
  { t: "<ruby>育ちにくい<rt>そだちにくい</rt></ruby>", i: "Sulit Tumbuh", d: "Kondisi lingkungan yang menghambat perkembangbiakan bakteri." },
  { t: "<ruby>一方<rt>いっぽう</rt></ruby>", i: "Di Sisi Lain", d: "Kata hubung untuk membandingkan dua kondisi yang berbeda." },
  { t: "<ruby>牡蠣<rt>かき</rt></ruby>", i: "Tiram", d: "Makanan laut yang sering menjadi sumber utama Norovirus." },
  { t: "<ruby>腸<rt>ちょう</rt></ruby>", i: "Usus", d: "Bagian dalam tubuh manusia tempat bakteri dan virus berkembang biak." },
  { t: "<ruby>おう吐物<rt>おうとぶつ</rt></ruby>", i: "Muntahan", d: "Sisa muntah yang sangat menular, harus dibersihkan dengan prosedur khusus." },
  { t: "<ruby>専門用具<rt>せんもんようぐ</rt></ruby>", i: "Alat Khusus", d: "Peralatan tertentu yang hanya digunakan untuk tugas khusus (misal: sanitasi)." },
  { t: "<ruby>存在する<rt>そんざいする</rt></ruby>", i: "Ada/Eksis", d: "Keberadaan mikroba atau bahaya di area produksi." },
  { t: "<ruby>生える<rt>はえる</rt></ruby>", i: "Tumbuh", d: "Biasanya merujuk pada pertumbuhan jamur (kabi) pada makanan." },
  { t: "<ruby>体内<rt>たいない</rt></ruby>", i: "Dalam Tubuh", d: "Bagian internal tubuh manusia tempat infeksi kuman terjadi." },
  { t: "<ruby>魚介類<rt>ぎょかいるい</rt></ruby>", i: "Hidangan Laut", d: "Segala jenis ikan dan kerang-kerangan sebagai bahan makanan." },
  { t: "<ruby>取り出せる<rt>とりだせる</rt></ruby>", i: "Bisa Dikeluarkan", d: "Kemudahan mengambil barang karena penataan yang rapi (Seiton)." },
  { t: "<ruby>順序<rt>じゅんじょ</rt></ruby>", i: "Berurutan", d: "Melakukan langkah-langkah kerja sesuai dengan urutan SOP." },
  { t: "<ruby>数量<rt>すうりょう</rt></ruby>", i: "Kuantitas/Jumlah", d: "Banyaknya barang yang harus dicocokkan saat penerimaan." },
  { t: "<ruby>触れる<rt>ふれる</rt></ruby>", i: "Menyentuh", d: "Kontak langsung antara tangan atau alat dengan makanan." },
  { t: "<ruby>出荷する<rt>しゅっかする</rt></ruby>", i: "Mengirim Barang", d: "Proses pengeluaran produk jadi dari pabrik ke distributor." },
  { t: "<ruby>責任者<rt>せきにんしゃ</rt></ruby>", i: "Penanggung Jawab", d: "Orang yang berwenang mengawasi dan mengambil keputusan di area kerja." },
  { t: "<ruby>更衣室<rt>こういしつ</rt></ruby>", i: "Ruang Ganti", d: "Tempat pekerja mengganti pakaian rumah menjadi seragam kerja bersih." },
  { t: "<ruby>香水<rt>こうすい</rt></ruby>", i: "Parfum", d: "Cairan wangi yang dilarang dipakai karena dapat merusak aroma makanan." },
  { t: "<ruby>ヘアーネット<rt>ヘアーネット</rt></ruby>", i: "Jaring Rambut", d: "Penutup kepala di dalam topi untuk mencegah rambut jatuh ke produk." },
  { t: "<ruby>ブラッシング<rt>ブラッシング</rt></ruby>", i: "Menyikat/Membersihkan", d: "Membersihkan rambut atau debu dari seragam menggunakan roller." },
  { t: "<ruby>粘着ローラー<rt>ねんちゃくローラー</rt></ruby>", i: "Rol Perekat", d: "Alat untuk mengangkat kotoran/rambut pada baju kerja (disebut juga gorogoro)." },
  { t: "<ruby>指の先<rt>ゆびのさき</rt></ruby>", i: "Ujung Jari", d: "Bagian tangan yang krusial dan harus dipastikan bersih saat cuci tangan." },
  { t: "<ruby>不備<rt>ふび</rt></ruby>", i: "Cacat/Kekurangan", d: "Kondisi peralatan atau dokumen yang tidak lengkap atau rusak." },
  { t: "<ruby>外部<rt>がいぶ</rt></ruby>", i: "Bagian Luar", d: "Sesuatu yang berasal dari luar lingkungan bersih pabrik." },
  { t: "<ruby>書類<rt>しょるい</rt></ruby>", i: "Dokumen", d: "Berkas tertulis untuk mencatat hasil monitoring suhu dan kebersihan." },
  { t: "<ruby>照らし合わせる<rt>てらしあわせる</rt></ruby>", i: "Mencocokkan", d: "Membandingkan isi dokumen dengan kondisi barang atau fakta sebenarnya." },
  { t: "<ruby>規格<rt>きかく</rt></ruby>", i: "Volume/Standar", d: "Ukuran atau spesifikasi baku yang harus dipenuhi oleh setiap produk." },
  { t: "<ruby>腐敗<rt>ふはい</rt></ruby>", i: "Busuk", d: "Kondisi rusaknya makanan akibat aktivitas bakteri pembusuk." },
  { t: "<ruby>食品衛生法<rt>しょくひんえいせいほう</rt></ruby>", i: "UU Sanitasi Pangan", d: "Undang-undang di Jepang yang mengatur standar keamanan makanan." },
  { t: "<ruby>未開封<rt>みかいふう</rt></ruby>", i: "Belum Dibuka", d: "Kondisi segel kemasan yang masih utuh (penting untuk batas kadaluarsa)." },
  { t: "<ruby>可能性<rt>かのうせい</rt></ruby>", i: "Kemungkinan", d: "Potensi terjadinya risiko bahaya di dalam proses produksi." },
  { t: "<ruby>水道<rt>すいどう</rt></ruby>", i: "Air Keran", d: "Sumber air bersih yang dialirkan melalui pipa untuk proses produksi." },
  { t: "<ruby>トレー<rt>トレー</rt></ruby>", i: "Nampan", d: "Wadah datar untuk menaruh bahan makanan selama proses kerja." },
  { t: "<ruby>網目トレー<rt>あみめトレー</rt></ruby>", i: "Nampan Berjaring", d: "Wadah berlubang untuk memudahkan sirkulasi udara atau pembuangan air." },
  { t: "<ruby>排水<rt>はいすい</rt></ruby>", i: "Pembuangan Air", d: "Saluran untuk mengalirkan air kotor sisa pencucian/produksi." },
  { t: "<ruby>確実<rt>かくじつ</rt></ruby>", i: "Akurat/Pasti", d: "Melakukan tugas dengan benar dan meyakinkan tanpa kesalahan." },
  { t: "<ruby>仕組み<rt>しくみ</rt></ruby>", i: "Metode/Sistem", d: "Rangkaian cara kerja terpadu (seperti HACCP) untuk mencapai tujuan." },
  { t: "<ruby>監視する<rt>かんしする</rt></ruby>", i: "Memonitor", d: "Mengamati secara terus-menerus apakah suhu dan proses sudah sesuai standar." },
  { t: "<ruby>逸脱する<rt>いつだつする</rt></ruby>", i: "Penyimpangan", d: "Kondisi di mana hasil monitoring berada di luar batas aman (CL)." },
  { t: "<ruby>除去<rt>じょきょ</rt></ruby>", i: "Menghilangkan", d: "Tindakan membuang faktor bahaya dari dalam makanan." },
  { t: "<ruby>低減<rt>ていげん</rt></ruby>", i: "Mengurangi", d: "Menurunkan tingkat risiko bahaya hingga ke batas yang bisa diterima." },
  { t: "<ruby>有効<rt>ゆうこう</rt></ruby>", i: "Efektif", d: "Langkah yang terbukti memberikan hasil nyata dalam menjaga keamanan pangan." }
];

let flashIndex = 0;

const kotobaText = document.getElementById("kotobaText");
const artiText = document.getElementById("artiText");
const penjelasanText = document.getElementById("penjelasanText");
let isFlipped = false;


function showFlashcard(){

  kotobaText.innerHTML = kotobaData[flashIndex].t;

  artiText.innerHTML = kotobaData[flashIndex].i;

  penjelasanText.innerHTML = kotobaData[flashIndex].d || "";

  // sembunyikan dulu
  artiText.style.display = "none";
  penjelasanText.style.display = "none";

  document.getElementById("flashBtn").innerText = "Lihat Arti";
}

function showArti(){

  artiText.style.display = "block";

  penjelasanText.style.display = "block";

  document.getElementById("flashBtn").innerText = "Next";
}

function flashAction(){

  // kalau masih sembunyi → tampilkan semua (arti + penjelasan)
  if(artiText.style.display === "none"){

    showArti();
  }

  // kalau sudah tampil → next kartu
  else{

    nextFlashcard();
  }
}

function nextFlashcard(){

  flashIndex++;

  if(flashIndex >= kotobaData.length){
    flashIndex = 0;
  }

  showFlashcard();
}

function showHafalan(){

  document.getElementById("hafalanBox").classList.remove("hidden");

  document.getElementById("latihanBox").classList.add("hidden");

  document.getElementById("resultBox").classList.add("hidden");
}


// ====================
// ACAK
// ====================

function shuffleArray(array){

  for(let i = array.length - 1; i > 0; i--){

    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
}

function acakData(){

  shuffleArray(kotobaData);

  flashIndex = 0;

  showFlashcard();

  alert("Data berhasil diacak!");
}


// ====================
// LATIHAN
// ====================

let latihanData = [];

let currentQuestion = 0;

let benar = 0;
let salah = 0;

let sesi = 1;

function startLatihan(){

  document.getElementById("hafalanBox").classList.add("hidden");

  document.getElementById("latihanBox").classList.remove("hidden");

  document.getElementById("resultBox").classList.add("hidden");

  document.getElementById('latihanBox').classList.remove('hidden');
  
  currentQuestion = 0;

  benar = 0;
  salah = 0;

  latihanData = [...kotobaData];

  shuffleArray(latihanData);

  latihanData = latihanData.slice(0,20);

  loadQuestion();
}

function loadQuestion(){

  document.getElementById("questionNumber").innerText = currentQuestion + 1;

  document.getElementById("sessionText").innerText = sesi;

  const soal = latihanData[currentQuestion];

  document.getElementById("questionText").innerHTML = soal.t;

  const optionsBox = document.getElementById("optionsBox");

  optionsBox.innerHTML = "";

  let pilihan = [soal.i];

  while(pilihan.length < 3){

    let random =
      kotobaData[Math.floor(Math.random() * kotobaData.length)].i;

    if(!pilihan.includes(random)){
      pilihan.push(random);
    }
  }

  shuffleArray(pilihan);

  pilihan.forEach(p => {

    const btn = document.createElement("button");

    btn.className = "option";

    btn.innerHTML = p;

    btn.onclick = () => checkAnswer(btn, p, soal.i);

    optionsBox.appendChild(btn);

  });

}

function checkAnswer(button, selected, correct){

  const allOptions = document.querySelectorAll(".option");

  allOptions.forEach(btn => {

    btn.disabled = true;

    if(btn.innerHTML === correct){

      btn.classList.add("correct");
    }

  });

  if(selected === correct){

    benar++;

    button.classList.add("correct");

  }else{

    salah++;

    button.classList.add("wrong");

  }

  setTimeout(() => {

    currentQuestion++;

    if(currentQuestion >= latihanData.length){

      showResult();

    }else{

      loadQuestion();
    }

  }, 1200);

}

function showResult(){

  document.getElementById("latihanBox").classList.add("hidden");

  document.getElementById("resultBox").classList.remove("hidden");

  let nilai =
    Math.round((benar / latihanData.length) * 100);

  document.getElementById("nilaiText").innerText = nilai;

  document.getElementById("benarText").innerText = benar;

  document.getElementById("salahText").innerText = salah;

}

function nextSession(){

  if(sesi >= 5){

    sesi = 1;

  }else{

    sesi++;
  }

  startLatihan();
}


// ====================
// START
// ====================

showFlashcard();

function showKotobaList() {
    // Sembunyikan semua kotak lain
    document.getElementById('hafalanBox').classList.add('hidden');
    document.getElementById('latihanBox').classList.add('hidden');
    document.getElementById('resultBox').classList.add('hidden');
    
    // Tampilkan kotak list
    const listBox = document.getElementById('kotobaListBox');
    listBox.classList.remove('hidden');

    const container = document.getElementById('listContainer');
    container.innerHTML = ""; // Kosongkan container sebelum diisi ulang

    // Render data dari variabel kotobaData (Pastikan nama variabel Anda benar)
    kotobaData.forEach((data) => {
        const item = document.createElement('div');
        item.className = 'kotoba-item';
        item.innerHTML = `
            <ruby>${data.t}</ruby>
            <div class="item-arti">${data.i}</div>
            <div class="item-desc">${data.d}</div>
        `;
        container.appendChild(item);
    });
}

function filterKotoba() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let items = document.getElementsByClassName('kotoba-item');
    
    for (let i = 0; i < items.length; i++) {
        // Mencari kata berdasarkan Kanji, Arti, atau Penjelasan
        if (items[i].innerText.toLowerCase().includes(input)) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

function backToMenu() {
    // Sembunyikan list dan kembali ke hafalan
    document.getElementById('kotobaListBox').classList.add('hidden');
    document.getElementById('hafalanBox').classList.remove('hidden');
}

// Tambahan: Pastikan saat klik menu HAFALAN atau LATIHAN, list ditutup
function showHafalan() {
    document.getElementById('kotobaListBox').classList.add('hidden');
    document.getElementById('hafalanBox').classList.remove('hidden');
    document.getElementById('latihanBox').classList.add('hidden');
    document.getElementById('resultBox').classList.add('hidden');
    // ... sisa kode fungsi hafalan Anda ...
}
function toggleMenu(){

    document
    .getElementById("dropdownMenu")
    .classList
    .toggle("active");

}

