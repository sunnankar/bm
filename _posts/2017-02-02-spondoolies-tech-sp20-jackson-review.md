---
layout: post
title: An Evaluation of Spondoolies-Tech SP20 Jackson
description: An Evaluation of Spondoolies-Tech SP20 Jackson
author: Melvin Draupnir
authorurl: https://www.weusecoins.com/melvin-draupnir/
published: true
---

<hr id="hwc" style="width: 100%; margin: 20px 0; color: #eee;" />

<h2>Bitcoin Mining Hardware Comparison</h2>

<p>Currently, based on <b>(1)</b> price per hash and <b>(2)</b> electrical efficiency the best Bitcoin miner options are:</p>

<div class="hardware-comparison">
{% for miner in site.data.hardware %}
{% if miner.cat contains 'featured' %}
{% include hardware-compare.html %}
{% endif %}
{% endfor %}
</div>

<p>Made by Spondoolies-Tech, the SP20 Jackson is a Bitcoin ASIC miner which claims to have a hash rate of 1.3-1.7TH/s.</p>

<h2>PROS</h2>
<ul>
<li><p>With the 1.7 TH/s max hashrate, it beats the AntMiner S5, its nearest rival</p></li>
<li><p>It costs $110 and can be bought on eBay or Amazon</p></li>
<li><p>Generating ~52 dB from 1 meter, it is quiet at low speeds</p></li>
</ul>
<h2>CONS</h2>
<ul>
<li><p>Spondoolies co. has closed, meaning limited availability & support</p></li>
<li><p>Mostly at higher speed, the unit runs quite hot</p></li>
<li><p>Compared to the S5’s 0.25W/GH its efficiency is poor at 0.9W/GH</p></li>
</ul>
<h2>The Spondoolies SP20: Better Value than the AntMiner S5?</h2>

<p>On the 4th of May 2016, <a href="/bitgold-goldmoney-review/">Spondoolies shut down unfortunately</a>. They released the SP20 in the late 2014. A total of eight 28nm RockerBox ASIC mining chips were crammed by Spondoolies onto 2 circuit boards within a compact form factor.</p>

<p>Powerful for its cheap price with a size and noise level perfect for home miners, the SP20 is a neat miner. However, its relative inefficiency is the major drawback. The SP20 drags a lot of power for its hashrate, which by modern standards is low.</p>

<h2>Power Supply</h2>

<p>The SP20 will run without any problems if any ATX PSU has sufficient wattage (1200W+).  You may also use <a href="/spondoolies-tech-SP20-bitcoin-miner-setup/">dual lower wattage</a> (750W+) PSUs to replace a single powerful PSU, to keep up with the SP20’s flexible design.</p>

<h2>Bitcoins / Month (Profitability)</h2>

<p>It’s highly unlikely that the SP20 will ever pay for itself, never mind make a profit unless you have free electricity. If we write the SP20’s stats and some average costs into the CoinWarz mining profitability calculator:</p>

<p>Far less than a single BTC will be mined in a year, therefore concluding the SP20 a waste of electricity.</p>

<h2>Price</h2>

<p>From eBay , the SP20’s price is in the region of $110.</p>

<h2>Casing

<p>With its solid, rectangular metal housing, the SP20 is easy to keep or store.</p>

<h2>Noise</h2>

<p>Compared to either the SP10 or SP30 models, the SP20’s 120mm fan is quieter. <a href="/banks-and-brokerages-should-be-mining-the-blockchain/">The SP20 is quiet enough</a> to run in a home, despite the fact that it gets noisier the faster and hotter it runs.</p>

<h2>Setup</h2>

<p>Spondoolies’ user interface provides all the configuration settings and monitoring information you’re most likely need. The SP20 is simple enough to setup. Along with other vital info, the GUI shows temperatures and hashrate for each individual chip. To discover that sweet spot <a href="/how-to-setup-bitcoin-mining-hardware-bitmain-antminer/">between hashrate</a>, power and heat, you can even use it to adjust voltages (within reason) on the board.</p>

<p>The SP20 connects via Ethernet only.</p>

<h2>Temperature</h2>

<p>This unit needs to be operated in environments with temperature below 35°C / 95°F. It generates a lot of heat because it has high power consumption. During high processing speeds, the heat will cause the fan to become much louder.</p>

<h2>Verdict</h2>

<p>The Spondoolies SP20 was considered a notable mining device during its reign. With regards to economic sense, it’s no longer practical to run an SP20 given its low efficiency, with the Bitcoin network’s current Difficulty.</p>

<p>With almost the same cost, the <a href="/what-is-dash-mining/">AntMiner S5</a> is way more power-efficient. Even if there’s some specific hardware mod you’d like to go with the SP20, it’s still not worth the purchase except as a piece of mining souvenir.</p>
