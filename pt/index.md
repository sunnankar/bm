---
layout: default
title: Semua hal yang harus anda ketahui tentang menambang Bitcoin
toc:
  hwc: Perbandingan Perangkat Keras Pertambangan Bitcoin
  wibm: Apakah Menambang Bitcoin ?
  what-is-blockchain: Apakah Blockchain (Rantai Blok)?
  wipow: Apakah Proof of Work (Bukti dari Pekerjaan)?
  md: Apakah Tingkat Kesulitan Pertambangan Bitcoin?
  tcdp: Masalah Kesulitan Komputasi
  difficulty: Metric Kesulitan Jaringan Bitcoin
  bw: Hadiah Blok
---

<center>
  <p>A Portugese translation is coming soon. Check our GitHub to learn how to contribute!</p>
</center>

<center><iframe width="720" height="394" src="https://www.youtube.com/embed/GmOzih6I1zs" frameborder="0" allowfullscreen></iframe></center>

<div class="home-grid">
	<a href="/getting-started/" class="section">
		<img src="/images/icons/mining.png"> 
		<div class="section-title">Baru dengan Menambang?</div> 
		<div class="section-view">Memulai ›</div> 
	</a>
	<a href="/bitcoin-mining-hardware/" class="section">
		<img src="/images/icons/mining2.png"> 
		<div class="section-title">Perangkat Keras Pertambangan</div> 
		<div class="section-view">Pelajari ›</div> 
	</a>
	<a href="/best-bitcoin-cloud-mining-contract-reviews/" class="section">
		<img src="/images/icons/cloud.png"> 
		<div class="section-title">Pertambangan Awan</div> 
		<div class="section-view">Pelajari ›</div> 
	</a>
</div>

<img class="icon-home" alt="bitcoin mining" src="/images/icons/icon-big-bitcoinfrom.png">
<h2>Bagaimana Cara Kerja Pertambangan Bitcoin</h2>
<p>Dari mana bitcoin dihasilkan? Dengan uang kertas, pemerintah memutuskan kapan mencetak dan mendistribusikan uang. Bitcoin tidak mempunyai pemerintah pusat.</p>

<p>Dengan Bitcoin, penambang menggunakan <a href="/bitcoin-mining-software/">perangkat lunak khusus</a> untuk memecahkan masalah matematika dan menghasilkan sejumlah Bitcoins sebagai hasilnya. Ini merupakan cara cerdas untuk mengeluarkan mata uang dan juga menciptakan insentif bagi lebih banyak orang untuk menambang.</p>

<img class="icon-home" alt="bitcoin is secure" src="/images/icons/icon-big-secure.png">
<h2>Bitcoin Aman</h2>

<p>Dengan mengesahkan transaksi-transaksi, penambang Bitcoin membantu menjaga jaringan bitcoin tetap terlindung. Pertambangan adalah bagian penting dan integral dari Bitcoin yang menjamin kesetaraan sambil menjaga jaringan Bitcoin stabil, terlindung dan aman.</p>

<img class="icon-home" alt="bitcoin is secure" src="/images/icons/icon-big-links.png">
<h2>Links</h2>
<ul>
	<li><a href="https://www.weusecoins.com/" target="_blank">We Use Coins</a> - Belajar semua hal tentang mata uang crypto.<br></li>
	<li><a href="https://www.reddit.com/r/Bitcoin/" target="_blank">Bitcoin News</a> - Tempat dimana komunitas Bitcoin mendapatkan kabar berita.<br></li>
	<li><a href="http://www.bitcoin.kn">Bitcoin Knowledge Podcast</a> - Wawancara dengan orang orang TOP di dunia Bitcoin.</li>
</ul>

<hr id="hwc" style="width: 100%; margin: 20px 0; color: #eee;" />

<h2>Perbandingan Perangkat Keras Pertambangan Bitcoin</h2>

<p>Pada saat ini, berdasarkan pada <b>(1)</b> harga per hash dan <b>(2)</b> efesiensi listrik pilihan alat penambang bitcoin terbaik adalah:</p>

<div class="hardware-comparison">
{% for miner in site.data.hardware %}
{% if miner.cat contains 'featured' %}
{% include hardware-compare.html %}
{% endif %}
{% endfor %}
</div>

<hr style="width: 100%; margin: 20px 0; color: #eee;" />
<h2 id="wibm">Apakah pertambangan Bitcoin?</h2>
<center><img src="/images/what-is-bitcoin-mining.png" width="700" height="auto">
<a href="/images/what-is-bitcoin-mining-high-resolution.png" target="_blank">Memvisualisasikan dan Mengunduh Infographic Resolusi Tinggi</a></center>

{% include page-toc.html %}

<p>Pertambangan Bitcoin adalah proses penambahan rekaman transaksi ke buku kas induk umum Bitcoin untuk transaksi masa lalu atau <b>blockchain (Rantai Blok)</b>. Buku  dari transaksi masa lalu ini disebut rantai blok karena merupakan rantai dari blok- blok. Rantai blok berfungsi untuk mengkonfirmasi transaksi yang terjadi ke seluruh jaringan.
<p>Simpul Bitcoin menggunakan <b> rantai blok </ b> untuk membedakan transaksi Bitcoin yang sah dari upaya untuk mengunakan koin kembali yang telah dihabiskan di tempat lain.
<h3 id="what-is-blockchain">Apakah Block Chain (Rantai Blok)?</h3>
<center><iframe width="700" height="394" src="https://www.youtube.com/embed/YIVAluSL9SU" frameborder="0" allowfullscreen></iframe></center>
<p><a href="http://bitcoinminer.com/">Pertambangan Bitcoin</a> sengaja dirancang untuk menjadi sumber daya intensif dan sulit sehingga jumlah blok yang ditemukan setiap hari oleh para penambang tetap stabil. Block individu harus memuat <a href="/what-is-proof-of-work/">proof of work (bukti dari pekerjaan)</a> untuk dianggap sah. Bukti kerja diverifikasi oleh simpul Bitcoin setiap kali mereka menerima blok. Bitcoin menggunakan <a href="/what-is-hashcash/">hashcash</a>fungsi proof-of-work (bukti dari pekerjaan).
<p>Tujuan utama dari pertambangan adalah untuk memungkinkan simpul Bitcoin  untuk mencapai, konsensus aman tahan terhadap kerusakan. Pertambangan juga merupakan mekanisme yang digunakan untuk memperkenalkan Bitcoins ke dalam sistem: Penambang dibayar dengan biaya transaksi serta dari "subsidi" koin yang baru dibuat.
<p>Ini baik melayani tujuan menyebarkan koin baru dengan cara desentralisasi serta memotivasi orang untuk memberikan keamanan untuk sistem.
<p>Pertambangan Bitcoin dinamakan demikian karena menyerupai pertambangan komoditas lain: membutuhkan pengerahan tenaga dan perlahan-lahan membuat mata uang baru tersedia pada tingkat yang menyerupai tingkat di mana komoditas seperti emas yang ditambang dari tanah.
<h2 id="wipow">Apakah Proof of Work (Bukti dari Pekerjaan)?</h2>
<center><img src="/images/what-is-proof-of-work.png" width="700" height="auto">
<a href="/images/what-is-proof-of-work-high-resolution.png" target="_blank">Memvisualisasikan dan Mengunduh Infographic Resolusi Tinggi</a></center></center>
<p>A <a href="/what-is-proof-of-work/">proof of work (bukti dari pekerjaan)</a> adalah sepotong data yang sulit (mahal, memakan waktu) untuk dihasilkan untuk memenuhi persyaratan tertentu. Harus secara teratur untuk diperiksa apakah data di katakan memenuhi persyaratan.
<p>Memproduksi sebuah bukti kerja dapat menjadi proses acak dengan probabilitas rendah, sehingga rata-rata banyak trial and error diperlukan sebelum bukti pekerjaan yang dihasilkan sah. Bitcoin menggunakan bukti kerja Hashcash.
<h2 id="md">Apakah Tingkat Kesulitan Pertambangan Bitcoin?</h2>
<center><img src="/images/what-is-bitcoin-mining-difficulty.png" width="700" height="auto">
<a href="/images/what-is-bitcoin-mining-difficulty-high-resolution.png" target="_blank">Memvisualisasikan dan Mengunduh Infographic Resolusi Tinggi</a></center>
<h3 id="tcdp">Masalah Kesulitan Komputasi</h3>
<p>Menambang Bitcoin blok sulit karena hasil hash SHA256 dari sebuah header blok harus lebih rendah dari atau sama dengan target agar blok dapat diterima oleh jaringan.
<p>Masalah ini dapat disederhanakan untuk tujuan penjelasan: hash dari blok harus dimulai dengan sejumlah angka nol. Probabilitas menghitung hash yang dimulai dengan banyak nol sangat rendah, karena itu banyak upaya harus dilakukan. Dalam rangka untuk menghasilkan hash baru setiap putaran, sebuah nonce ditambahkan. Lihat bukti dari pekerjaan untuk informasi lebih lanjut.
<h3 id="difficulty">The Bitcoin Network Difficulty Metric</h3>
<p><a href="/what-is-bitcoin-mining-difficulty/">Kesulitan jaringan pertambangan Bitcoin</a> adalah ukuran seberapa sulitnya untuk menemukan blok baru dibandingkan dengan yang paling mudah pernah didapat. Hal ini dihitung ulang setiap 2016 blok ke nilai misalnya 2016 blok sebelumnya  akan telah dihasilkan dalam tepat dua minggu setelah semua orang menambang di kesulitan ini. Ini akan menghasilkan, rata-rata, satu blok setiap sepuluh menit.
<p>Karena semakin banyak penambang bergabung, tingkat penciptaan blok akan naik. Karena tingkat generasi blok naik, kesulitan naik untuk mengimbangi yang akan mendorong tingkat penciptaan blok kembali turun. Setiap blok yang dirilis oleh penambang berbahaya tidak memenuhi target kesulitan yang dibutuhkan hanya akan ditolak oleh semua orang di jaringan dan dengan demikian tidak akan berharga.
<h3 id="bw">Hadiah Blok</h3>
<p>Ketika sebuah blok ditemukan, sang penemu mendapatkan penghargaan sejumlah Bitcoins, yang disepakati oleh semua orang dalam jaringan. Saat ini hadiahnya 12.5 Bitcoins; nilai ini akan terbagi dua setiap 210.000 blok. Lihat persediaan mata uang terkontrol.
<p>Selain itu, penambang diberikan biaya yang dibayar oleh pengguna yang mengirimkan transaksi. biayanya adalah insentif bagi penambang untuk menyertakan transaksi di blok mereka. Di masa depan, apabila jumlah penambang Bitcoins baru diizinkan untuk membuat di setiap blok berkurang, biaya ini akan membuat persentase yang jauh lebih penting dari pendapatan pertambangan.
