/*
===================================
FORMAT KOTOBA
===================================

t = tulisan Jepang
i = arti Indonesia

CONTOH:

{
  t: "<ruby>野菜<rt>やさい</rt></ruby>",
  i: "Sayur"
}

===================================
*/

const kotobaData = [
  // BAB 1: MANAJEMEN KEBERSIHAN (食品衛生管理)
  { t: "<ruby>食品衛生<rt>しょくひんえいせい</rt></ruby>", i: "Kebersihan Makanan", d: "Menjamin keamanan makanan agar tidak menyebabkan gangguan kesehatan pada konsumen." },
  { t: "<ruby>衛生管理<rt>えいせいかんり</rt></ruby>", i: "Manajemen Kebersihan", d: "Upaya terencana untuk mencegah kontaminasi biologi, kimia, dan fisik pada produk." },
  { t: "<ruby>一般衛生管理<rt>いっぱんえいせいかんり</rt></ruby>", i: "Manajemen Kebersihan Umum", d: "Langkah dasar (Prasyarat) sebelum HACCP, mencakup kebersihan fasilitas dan pekerja." },
  { t: "<ruby>交差汚染<rt>こうさおせん</rt></ruby>", i: "Kontaminasi Silang", d: "Bakteri berpindah dari bahan mentah ke produk jadi melalui alat, tangan, atau area kerja." },
  { t: "<ruby>異物混入<rt>いぶつこんにゅう</rt></ruby>", i: "Kontaminasi Benda Asing", d: "Masuknya benda berbahaya seperti logam, plastik, rambut, atau serangga ke dalam produk." },
  { t: "<ruby>異物<rt>いぶつ</rt></ruby>", i: "Benda Asing", d: "Benda yang tidak seharusnya ada di makanan (logam, kaca, serangga, rambut, dll)." },
  { t: "<ruby>金属探知機<rt>きんぞくたんちき</rt></ruby>", i: "Detektor Logam", d: "Mesin untuk mendeteksi adanya kontaminasi logam pada produk akhir." },
  { t: "<ruby>X線探知機<rt>エックスせんたんちき</rt></ruby>", i: "Detektor Sinar-X", d: "Mesin untuk mendeteksi benda asing non-logam seperti tulang, plastik, atau batu." },
  { t: "<ruby>消毒<rt>しょうどく</rt></ruby>", i: "Disinfeksi", d: "Proses membunuh atau mengurangi jumlah mikroorganisme hingga tingkat aman." },
  { t: "<ruby>殺菌<rt>さっきん</rt></ruby>", i: "Sterilisasi", d: "Proses mematikan semua mikroorganisme termasuk bakteri dan spora." },
  { t: "<ruby>洗浄<rt>せんじょう</rt></ruby>", i: "Pencucian", d: "Menghilangkan kotoran yang terlihat dengan air dan deterjen." },
  
  // 5S - DASAR KERJA
  { t: "<ruby>整理<rt>せいり</rt></ruby>", i: "Ringkas (Seiri)", d: "Memilah dan membuang barang yang tidak diperlukan di tempat kerja." },
  { t: "<ruby>整頓<rt>せいとん</rt></ruby>", i: "Rapi (Seiton)", d: "Menentukan tempat dan jumlah barang agar mudah diambil saat diperlukan." },
  { t: "<ruby>清掃<rt>せいそう</rt></ruby>", i: "Resik (Seiso)", d: "Membersihkan tempat kerja dan mesin agar selalu dalam kondisi baik." },
  { t: "<ruby>清潔<rt>せいけつ</rt></ruby>", i: "Rawat (Seiketsu)", d: "Menjaga kondisi 3S (Seiri, Seiton, Seiso) tetap konsisten dan higienis." },
  { t: "<ruby>しつけ<rt>しつけ</rt></ruby>", i: "Disiplin (Shitsuke)", d: "Membiasakan diri mematuhi aturan dan standar operasional yang berlaku." },

  // ZONASI & AREA
  { t: "<ruby>ゾーニング<rt>ゾーニング</rt></ruby>", i: "Zonasi", d: "Pemisahan area kerja (Area Bersih vs Area Kotor) untuk mencegah kontaminasi." },
  { t: "<ruby>清潔作業区域<rt>せいけつさぎょうくいき</rt></ruby>", i: "Area Kerja Bersih", d: "Area proses akhir (pemasakan/pengemasan) yang harus dijaga sangat steril." },
  { t: "<ruby>準清潔作業区域<rt>じゅんせいけつさぎょうくいき</rt></ruby>", i: "Area Kerja Semi Bersih", d: "Area antara, seperti tempat persiapan bahan atau pencucian awal." },
  { t: "<ruby>汚染作業区域<rt>おせんさぎょうくいき</rt></ruby>", i: "Area Kerja Terkontaminasi", d: "Area penerimaan bahan baku mentah atau pencucian alat kotor." },
  { t: "<ruby>作業エリア<rt>さぎょうエリア</rt></ruby>", i: "Area Kerja", d: "Tempat berlangsungnya proses pengolahan makanan." },
  
  // HACCP & KUALITAS
  { t: "<ruby>HACCP<rt>ハサップ</rt></ruby>", i: "HACCP", d: "Sistem manajemen keamanan pangan dengan mengendalikan Titik Kendali Kritis (CCP)." },
  { t: "<ruby>品質管理<rt>ひんしつかんり</rt></ruby>", i: "Manajemen Kualitas", d: "Menjaga agar produk sesuai standar rasa, tekstur, dan keamanan." },
  { t: "<ruby>温度管理<rt>おんどかんり</rt></ruby>", i: "Kontrol Suhu", d: "Sangat penting untuk mencegah pertumbuhan bakteri (Zona Bahaya: 10°C - 60°C)." },
  { t: "<ruby>湿度管理<rt>しつどかんり</rt></ruby>", i: "Kontrol Kelembaban", d: "Mengatur kadar air di udara untuk mencegah pertumbuhan jamur." },
  { t: "<ruby>不適合品<rt>ふてきごうひん</rt></ruby>", i: "Produk Tidak Sesuai", d: "Produk yang gagal memenuhi standar keamanan atau kualitas (NG)." },
  { t: "<ruby>回収<rt>かいしゅう</rt></ruby>", i: "Penarikan Produk", d: "Tindakan mengambil kembali produk yang sudah beredar karena ditemukan bahaya." },
  { t: "<ruby>記録<rt>きろく</rt></ruby>", i: "Catatan", d: "Bukti tertulis pelaksanaan kontrol suhu, kebersihan, dan proses produksi." },

  // KERACUNAN MAKANAN (食中毒)
  { t: "<ruby>食中毒<rt>しょくちゅうどく</rt></ruby>", i: "Keracunan Makanan", d: "Penyakit akibat mengonsumsi makanan yang mengandung bakteri, virus, atau racun." },
  { t: "<ruby>ノロウイルス<rt>ノロウイルス</rt></ruby>", i: "Norovirus", d: "Penyebab utama keracunan di musim dingin. Sangat menular melalui tangan/tiram mentah." },
  { t: "<ruby>サルモネラ菌<rt>サルモネラきん</rt></ruby>", i: "Bakteri Salmonella", d: "Sering ditemukan pada telur dan ayam mentah. Menyebabkan demam dan diare." },
  { t: "<ruby>カンピロバクター<rt>カンピロバクター</rt></ruby>", i: "Campylobacter", d: "Bakteri pada daging ayam mentah. Mati jika dipanaskan dengan benar." },
  { t: "<ruby>黄色ブドウ球菌<rt>おうしょくブドウきゅうきん</rt></ruby>", i: "Staphylococcus Aureus", d: "Bakteri dari luka tangan manusia. Menghasilkan racun yang tahan panas." },
  { t: "<ruby>アニサキス<rt>アニサキス</rt></ruby>", i: "Anisakis", d: "Parasit pada ikan mentah. Dapat dibunuh dengan pembekuan atau pemanasan." },

  // TANGGAL & LABEL
  { t: "<ruby>消費期限<rt>しょうひきげん</rt></ruby>", i: "Batas Konsumsi", d: "Batas waktu 'keamanan' (untuk makanan cepat basi seperti bento/daging)." },
  { t: "<ruby>賞味期限<rt>しょうみきげん</rt></ruby>", i: "Batas Kualitas Terbaik", d: "Batas waktu 'rasa terbaik' (untuk makanan tahan lama seperti mie instan/kaleng)." },
  { t: "<ruby>アレルギー表示<rt>アレルギーひょうじ</rt></ruby>", i: "Label Alergi", d: "Informasi bahan pemicu alergi (Telur, Susu, Gandum, Udang, Kepiting, dll)." },

  // KESELAMATAN KERJA (労働安全)
  { t: "<ruby>労働安全<rt>ろうどうあんぜん</rt></ruby>", i: "Keselamatan Kerja", d: "Mencegah kecelakaan kerja demi melindungi keselamatan pekerja." },
  { t: "<ruby>労働災害<rt>ろうどうさいがい</rt></ruby>", i: "Kecelakaan Kerja", d: "Cedera atau penyakit yang terjadi akibat aktivitas pekerjaan di pabrik." },
  { t: "<ruby>指差呼称<rt>しさしこしょう</rt></ruby>", i: "Menunjuk dan Menyebut", d: "Metode menunjuk objek dan meneriakkan kondisinya untuk memastikan keamanan." },
  { t: "<ruby>ヒヤリ・ハット<rt>ヒヤリ・ハット</rt></ruby>", i: "Hiyari Hatto", d: "Insiden hampir celaka. Harus dilaporkan agar tidak menjadi kecelakaan serius." },
  { t: "<ruby>熱中症<rt>ねっちゅうしょう</rt></ruby>", i: "Heatstroke", d: "Gangguan kesehatan akibat suhu panas. Harus diatasi dengan air, garam, dan istirahat." },
  { t: "<ruby>危険予知活動<rt>きけんよちかつどう</rt></ruby>", i: "Aktivitas Prediksi Bahaya (KYT)", d: "Diskusi sebelum kerja untuk memprediksi potensi bahaya di area kerja." },
  { t: "<ruby>安全保護具<rt>あんぜんほごぐ</rt></ruby>", i: "Alat Pelindung Diri (APD)", d: "Perlengkapan seperti helm, sepatu safety, dan sarung tangan pelindung." },
  
  // ATURAN & KERJA
  { t: "<ruby>就業規則<rt>しゅうぎょうきそく</rt></ruby>", i: "Peraturan Kerja", d: "Aturan internal perusahaan yang harus ditaati oleh semua karyawan." },
  { t: "<ruby>雇用契約書<rt>こようけいやくしょ</rt></ruby>", i: "Kontrak Kerja", d: "Dokumen kesepakatan tertulis mengenai gaji, jam kerja, dan jenis pekerjaan." },
  { t: "<ruby>特定技能制度<rt>とくていぎのうせいど</rt></ruby>", i: "Sistem Tokutei Ginou", d: "Sistem visa keterampilan khusus untuk pekerja asing di bidang industri tertentu." },
  { t: "<ruby>報告・連絡・相談<rt>ほう・れん・そう</rt></ruby>", i: "Hou-Ren-Sou", d: "Budaya kerja Jepang: Melapor, Menghubungi, dan Berkonsultasi." }
];
// ====================
// HAFALAN
// ====================

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
