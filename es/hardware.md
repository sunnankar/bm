---
layout: default
title: Obtener información sobre el hardware de minería Bitcoin
description: Obtener información sobre el hardware de minería Bitcoin
---

<h1>Bitcoin Mining Hardware Guide</h1>
<img src="/images/bitcoin-mining-chips.jpg" alt="bitcoin mining chips" width="700" height="247"/>
<h3><em>The best Bitcoin mining hardware has evolved dramatically since 2009</em></h3>

<img src="/images/icons/mining.png" class="pull-right bitcoin-icon">

<p>At first, miners used their central <strong>processing unit</strong> (CPU) to mine, but soon this wasn't fast enough and it bogged down the system resources of the host computer. Miners quickly moved on to using the <strong>graphical processing unit</strong> (GPU) in computer graphics cards because they were able to hash data 50 to 100 times faster and consumed much less power per unit of work.
<p>During the winter of 2011, a new industry sprang up with custom equipment that pushed the performance standards even higher. The first wave of these specialty bitcoin mining devices were easy to use Bitcoin miners were based on field-programmable gate array (FPGA) processors and attached to computers using a convenient USB connection.
<p>FPGA miners used much less power than CPU's or GPU's and made concentrated mining farms possible for the first time.</p>
<h3><em>Today's modern and best bitcoin mining hardware</em></h3>
<p><strong>Application-specific integrated circuit</strong> (ASIC) miners have taken over completely. These ASIC machines mine at unprecedented speeds while consuming much less power than FPGA or GPU mining rigs. Several reputable companies have established themselves with excellent products.</p>

<h2>Bitcoin Mining Hardware Comparison</h2>

<p>Currently, based on <b>(1)</b> price per hash and <b>(2)</b> electrical efficiency the best Bitcoin miner options are:</p>

<div class="hardware-comparison">
{% for miner in site.data.hardware %}
{% if miner.cat contains 'featured' %}
{% include hardware-compare.html %}
{% endif %}
{% endfor %}
</div>

<p>For a comprehensive comparison of bitcoin mining hardware</a>.
<h2>Best Bitcoin Mining Hardware</h2>
<img src="/images/bitcoin-mining-chip-sheet.jpg" alt="bitcoin mining chip sheet" width="700" height="247"/>
<p>Two major factors go into determining the best bitcoin mining hardware: <b>(1)</b> cost and <b>(2)</b> electricity efficiency.
<p>Bitcoin mining is difficult to do profitably but if you try then this <a href="http://geni.us/37CM">Bitcoin miner</a> is probably a good shot.
<h2>ASIC Bitcoin Mining Hardware</h2>
<p>Application-specific integrated circuit chips (ASICs) are bitcoin mining hardware created solely to solve Bitcoin blocks. They have only minimal requirements for other normal computer applications. Consequently, ASIC Bitcoin mining systems can solve Bitcoin blocks much quicker and use less less electricity or power than older bitcoin mining hardware like CPUs, GPUs or FPGAs.
<p>As Bitcoin mining increases in popularity and the Bitcoin price rises so does the value of ASIC Bitcoin mining hardware. As more Bitcoin mining hardware is deployed to secure the Bitcoin network the Bitcoin difficulty rises. This makes it impossible to profitably compete without a Bitcoin ASIC system. Furthermore, Bitcoin ASIC technology keeps getting faster, more efficient and more productive so it keeps pushing the limits of what makes the best Bitcoin mining hardware.
<p>Some models of Bitcoin miners include Antminer S5, Antminer U3, ASICMiner BE Tube, ASICMiner BE Prisma, Avalon 2, Avalon 3, BTC Garden AM-V1 616 GH/s, VMC PLATINUM 6 MODULE, and <a href="/usb-bitcoin-miner-setup-guide/">USB miners</a>.

<div class="hardware-comparison">
{% for miner in site.data.hardware %}
{% if miner.cat contains 'usbminer' %}
{% include hardware-compare-usb.html %}
{% endif %}
{% endfor %}
</div>

<h2 id="best-bitcoin-cloud-mining-services">Best Bitcoin Cloud Mining Services</h2>
<div class="mining-software-wrap">

<img src="/images/icons/cloud.png" class="pull-right bitcoin-icon">

<p>For those not interested in operating the actual hardware then they can purchase Bitcoin cloud mining contracts. Being listed in this section is NOT an endorsement of these services. There have been a tremendous amount of Bitcoin cloud mining scams.</p>

{% for service in site.data.cloud %}
{% if service.desc_btc != null %}
<p class="cloud-mining-info">
<b>{% if service.url != null %}<a rel="nofollow" href="{{ service.url }}">{{ service.company }}</a>: {% else %}{{ service.company }}: {% endif %}</b>{{ service.desc_btc }}
</p>
{% endif %}
{% endfor %}
</div>

<h2>Full List of Mining Hardware</h2>
<table class="mining-hardware-list">
	<tr>
	<th>Miner</th>
	<th>Capacity</th>
	<th class="miner-pe">Efficiency</th>
	<th>Price</th>
	</tr>
{% for miner in site.data.hardware %}
{% include hardware-compare-table.html %}
{% endfor %}
</table>
