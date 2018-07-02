---
layout: default
title: Bitcoin madenciliği hakkında bilmeniz gereken her şey
description: Bitcoin madenciliği hakkında bilmeniz gereken her şey
toc:
  mdk: Madencilik Donanımı Karşılaştırması
  bmn: Bitcoin Madenciliği Nedir?
  blok-zinciri-nedir: Blok zinciri Nedir?
  ikn: İşin Kanıdı nedir?
  mz: Bitcoin Madencilik Zorluğu nedir?
  hzp: Hesaplamadaki Zorluk Problemi
  zorluk: Zorluğa göre Bitcoin Ağı
  bo: Blok Ödülü
---


<center><iframe width="720" height="394" src="https://www.youtube.com/embed/GmOzih6I1zs" frameborder="0" allowfullscreen></iframe></center>

<div class="home-grid">
	<a href="/getting-started/" class="section">
		<img src="/images/icons/mining.png"> 
		<div class="section-title">New to Mining?</div> 
		<div class="section-view">Get started ›</div> 
	</a>
	<a href="/bitcoin-mining-hardware/" class="section">
		<img src="/images/icons/mining2.png"> 
		<div class="section-title">Mining Hardware</div> 
		<div class="section-view">Learn More ›</div> 
	</a>
	<a href="/best-bitcoin-cloud-mining-contract-reviews/" class="section">
		<img src="/images/icons/cloud.png"> 
		<div class="section-title">Cloud Mining</div> 
		<div class="section-view">Learn More ›</div> 
	</a>
</div>

<img class="icon-home" alt="bitcoin madenciliği" src="/images/icons/icon-big-bitcoinfrom.png">
<h2>Bitcoin Madenciliği Nasıl Çalışır</h2>
<p>Bitcoinler nereden geliyor? Kağıt paranın ne zaman basılacağına ve dağıtılacağına devlet karar verir. Ancak Bitcoin'in merkezi bir hükümeti yoktur.</p>

<p>Bitcoin'de, madenciler matematik problemlerini çözmek için <a href="/bitcoin-mining-software/">özel yazılımlar</a> kullanır ve sonucunda bir miktar yeni Bitcoin yaratılır. Aslında bu yeni paranın üretilmesi için çok zekice bir yöntemdirVe insanları madenci olmaya teşvik eder.</p>

<img class="icon-home" alt="bitcoin güvenlidir" src="/images/icons/icon-big-secure.png">
<h2>Bitcoin Güvenlidir</h2>

<p>Bitcoin madencileri ödemeleri doğrulayarak Bitcoin ağının güvenli kalmasını sağlar. Madencilik Bitcoin'in önemli bir parçasıdır ve Bitcoin ağını güvenli, adil ve sorunsuz tutar.</p>

<img class="icon-home" alt="bitcoin güvenlidir" src="/images/icons/icon-big-links.png">
<h2>Linkler</h2>
<ul>
	<li><a href="https://www.weusecoins.com/" target="_blank">We Use Coins</a> - Kripto-para birimleri hakkında her şeyi öğrenin.<br></li>
	<li><a href="https://www.reddit.com/r/Bitcoin/" target="_blank">Bitcoin Haberleri</a> - Bitcoin topluluğunun haberleri öğrendiği yer.<br></li>
	<li><a href="http://www.bitcoin.kn">Bitcoin Bilgiler Ses Kayıtları</a> - Bitcoin dünyasındaki en ünlü insanlarla röportajlar.</li>
</ul>

<hr id="mdk" style="width: 100%; margin: 20px 0; color: #eee;" />

<h2>Madenci Donanmıları Karşılaştırması</h2>

<p>Şimdilik, hash başına fiyat <b>(1)</b> ve elektriksel verimliliğe <b>(2)</b> göre en iyi Bitcoin madenci seçenekleri şunlardır:</p>

<div class="hardware-comparison">
{% for miner in site.data.hardware %}
{% if miner.cat contains 'featured' %}
{% include hardware-compare.html %}
{% endif %}
{% endfor %}
</div>

<hr style="width: 100%; margin: 20px 0; color: #eee;" />
<h2 id="bmn">Bitcoin Madenciliği Nedir?</h2>
<center><img src="/images/what-is-bitcoin-mining.png" width="700" height="auto">
<a href="/images/what-is-bitcoin-mining-high-resolution.png" target="_blank">Yüksek çözünürlüklü infografiği görselleştirin ve indirin</a></center>

{% include page-toc.html %}

<p>Bitcoin madenciliği, ödemeleri herkese açık bir deftere (<b>blok zincirine</b>) kaydetme işlemidir. Geçmiş ödemelerin kaydedildiği yere blok zinciri denir çünkü blokların bulunduğu zincirdir. Bu blok zinciri, ağa bağlı diğer bilgisayarlara doğrulamaları için ödemeleri dağıtır.
<p>Bitcoin düğümleri <b>blok zincirini</b> doğru ödemelerden, çoktan başka bir yere ödenmiş tekrar-ödemeleri ayırmak için kullanır.
<h3 id="blok-zinciri-nedir">Blok inciri nedir?</h3>
<center><iframe width="700" height="394" src="https://www.youtube.com/embed/YIVAluSL9SU" frameborder="0" allowfullscreen></iframe></center>
<p><a href="http://bitcoinminer.com/">Bitcoin madenciliği</a> kasten kaynaklara-aç ve zor tasarlanmıştır, böylece her gün madencilerin bulduğu blok sayısı sabit kalır. Her blok geçerli olduğunu kanıtlamak için<a href="/what-is-proof-of-work/">İşin Kanıdı'nı</a> taşımak zorundadır. Diğer Bitcoin düğümleri, bir blok onlara ulaştığı zaman İşin Kanıdı'nı doğrularlar. Bitcoin <a href="/what-is-hashcash/">hashcash</a> adında bir İşin Kanıdı fonksiyonu kullanır.
<p>Madenciliğin en önemli amacı Bitcoin düğümlerine güvenli ve hatasız bir uzlaşma sağlamaktır. Madencilik ayrıca sisteme yeni Bitcoinler ekleyen bir mekanizmadır: Madenciler işlem ücretleri ve yeni yaratılmış Bitcoinlerle ödüllendirilir.
<p>Bu hem yeni paraları merkezi olmayan şekilde dağıtır, hem de insanları ağın güvenliğini sağlamak için motive eder.
<p>Bitcoin madenciliğinin adı böyledir, çünkü diğer hammadelerin madenciliğine benzer: Emek ister ve altın gibi maddelerin yerden çıkarıldığı gibi yavaş çıkar.
<h2 id="ikn">İşin Kanıdı nedir?</h2>
<center><img src="/images/what-is-proof-of-work.png" width="700" height="auto">
<a href="/images/what-is-proof-of-work-high-resolution.png" target="_blank">Yüksek çözünürlüklü infografiği görselleştirin ve indirin</a></center></center>
<p><a href="/what-is-proof-of-work/">İşin Kanıdı</a> yaratılması zor olan (pahalı, zaman harcayan) belirli gereksinimleri karşılayan bir parça veridir. Verinin gereksinimleri karşılayıp karşılamadığını kontrol etmek önemlidir.
<p>İşin Kanıdı'nın yaratılması düşük ihtimalli rastgele bir işlemdir, bu yüzden geçerli bir İşin Kanıdı'nı yaratmak genellikle çok deneme-yanılma isteyen bir iştir. Bitcoin Hashcash isimli İşin Kanıdı yöntemini kullanır.
<h2 id="mz">Bitcoin Madencilik Zorluğu nedir?</h2>
<center><img src="/images/what-is-bitcoin-mining-difficulty.png" width="700" height="auto">
<a href="/images/what-is-bitcoin-mining-difficulty-high-resolution.png" target="_blank">Yüksek çözünürlüklü infografiği görselleştirin ve indirin</a></center>
<h3 id="hzp">Hesaplamadaki Zorluk Problemi</h3>
<p>Bir bloğa madencilik yapmak zordur çünkü o bloğun başlığının SHA-256 hash'i, bloğun ağda kabul edilebilmesi için hedefe eşit veya daha az olmak zorundadır.
<p>Bu problemi daha kolay anlatmak için basitleştirelim: Bir bloğun hash'i belirli sayıda sıfırlarla başlamak zorundadır. Çok sıfırla başlayan bir hash'in hesaplanma olasılığı azdır, ve bir sürü deneme yapılmalıdır. Her yeni turda yeni bir hash oluşturulması için, bir kerelik anahtar arttırılır. Daha fazla bilgi için İşin Kanıdı'na bakılınız.
<h3 id="zorluk">Zorluğa göre Bitcoin Ağı</h3>
<p><a href="/what-is-bitcoin-mining-difficulty/">Bitcoin madenciliği ağ zorluğu</a> yeni blok bulma zorluğunun birimidir, bu birim olabilecek en kolay bulma zorluğunu karşılaştırılarak bulunur. Her 2016 blokta bir yeniden hesaplanır ve 2016 blok 2 haftaya denk gelir. Ayrıca her 2016 blok boyunca herkes aynı zorlukta kazar. Bu demektir ki her blok yaratılması yaklaşık 10 dakika sürer.
<p>Daha fazla madenci katıldığında blok yaratılma oranı artar. Blok yaratılma oranı arttığında; zorluk, blok yaratılma oranını dengelemek için artar ve blok yaratılma oranı tekrar düşer. Sahtekâr madencilerin gerekli zorluğu çözemeyen sahte blokları ağdaki herkes tarafından reddedilir ve hiçbir değeri kalmaz.
<h3 id="bo">Blok Ödülü</h3>
<p>Yeni bir blok keşfedildiğinde, keşfeden kişi kendini belli sayıda Bitcoinlerle ödüllendirebilir, ağdaki herkes de bunu kabul eder. Şimdilik bu ödül 25 Bitcoin'dir; bu değer her 210,000 blokta bir yarıya düşecektir. Daha fazla bilgi: kontrol edilen para birimi tedariği.
<p>Ayrıca madenci, kullanıcıların ödeme yaparken kullandığı işlem ücretini de kazanır. İşlem ücreti madenci ödemeyi bloğa eklemesi için bir teşvik edicidir. Gelecekte, her blokta izin verilen Bitcoin madencilerinin sayısı azaldıkça, işlem ücretleri madencilik gelirinin önemli bir yüzdesini oluşturacaktır.
