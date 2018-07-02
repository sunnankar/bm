---
layout: post
title: Bitmain Antminer S5 Review All You Need to Know
description: Bitmain Antminer S5 Review All You Need to Know
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

<p>Bitmain Tech introduces, second newest version of its Antminer series of Bitcoin miners, the Bitmain Antminer S5</p>
 
<h2>PROS</h2>
<ul>
<li><p>Low-priced miner, with second-hand units available for under $200</p></li>
<li><p>Relatively low power demand of 590 Watts</p></li>
<li><p>Suitable for learning and experimentation</p></li>
</ul>
<h2>CONS</h2>
<ul>
<li><p>Noisy at ~75dB, single fan design, nevertheless mods can quieten it</p></li>
<li><p>Low by today’s standards, it’s spec hashrate of around 1155 GH/s</p></li>
</ul>
<h2>The AntMiner S5: Still Relevant to Modern Mining?</h2>

<p>The AntMiner S5 Bitcoin miner was released by Bitmain in late 2014. It was one of the <a href="/certain-traits-necessary-for-bitcoin-mining-success-21/">fastest and most</a> efficient ASIC miners available during that period, and was a contender to the Spondoolies-Tech SP20. However it didn’t last long, because the S5 has long since been outshined by latest models.</p>

<p>In terms of hashrate or power efficiency, the S5 can’t reasonably be competitive with modern 16nm or 14nm ASIC designs since it is a product of a 28nm fabrication process.</p>
 
<h2>Is there still a place for the venerable S5?</h2>

<p>The S5 is worth considering if you’re a hobbyist miner on a budget, with no interest in the <a href="/avalon-wins-the-asic-race-sort-of-23/">profitability of transmogrifying electricity</a> into bitcoins.</p>

<h2>Power Supply</h2>

<p>At around 115 Volts, the S5 will use between 560 to 590 Watts. The S5 will run without problems with any sufficiently-powered ATX Power Supply Unit. So even the power supply from your old PC - or someone else’s second hand unit, it can be easily reused for Bitcoin mining.</p>

<p>Take note that the power supplies’ efficiency is rated as gold (10% of electricity wasted), silver (20% wasted) or bronze (30% wasted). A good topic of investigation for any aspiring Bitcoin miner is the power supplies’ efficiency. Power supplies that are inefficient and unrated will throw around electricity and make unnecessary noise and heat. Here is a list of PSU ratings.</p>

<h2>Recommended for use with the S5:</h2>

<p>With either the 650 or 750 Watt model, preferably you can get a PSU from the Corsair Enthusiast Series Bronze Certified PSU. For a little over $100, the 650W model is available second hand. Corsair upholds a good reputation for setting up a reliable hardware among Bitcoin miners and other tech enthusiasts. The Bronze series offers good value.</p>

<p>Take note also that under-clocking the S5 is challenging in the absence of a special, 9 Volt-capable PSU.</p>

<h2>Bitcoins per Month (Profitability)</h2>

<p>According to relevant data, CoinWarz’ <a href="/bitcoin-mining-its-about-solving-problems-27/">Bitcoin mining calculator</a> is useful for computing the profitability of any Bitcoin miner.  Remember to use your local power rate, preferred mining pool and your intended price to buy your S5 by the time you do your own calculations.</p>

<p>Using the CoinWarz site, it will automatically put in the present BTC-USD price, Difficulty and Block Reward. Take note that the Block Reward will halve to 12.5 BTC in July 2016 for every block solved. It’s necessary for you to join a Pool in order to see any bitcoins from a single S5. The probability of solo-mining a block with a single or even several S5s are virtually zero.</p>

<p>The post-halving Reward, relatively expensive Power and AntPool’s Pool Fees are entered, along with the <a href="/advertise/">current Bitcoin price</a> and all the relevant stats of the AntMiner S5.</p>

<p>The results are, as expected, very nonprofitable:</p>

<p>Red bracketed numbers indicate negative returns.</p>

<p>For instances where the Bitcoin price were to double to a new all-time high around $1400, the returns would remain negative. But, if you’re electricity cost goes below 10c per KWh, it would just be a break even at the current price of ~$700. Therefore, if only the Bitcoin price is higher, power is cheap, Difficulty is stable and there’s adjustment to improve efficiency, it is not impossible to profit from a new or used s5.</p>

<h2>Power Efficiency</h2>

<p>For every 0.51 Watts consumed, the S5 will produce 1 Gigahash. This figure can be expressed as 0.51 J/GH. As measured by your electric bill, the S5’s real power consumption will differ depending on the efficiency of your PSU and the ambient temperature.</p>

<p>S5’s 0.51 J/GH is a lot more efficient than the S3’s 0.78 J/GH, however a lot less efficient than the more expensive AntMiner S7 (0.25 J/GH) or S9 (0.098 J/GH) models. Traditionally, each new BitMain miner series doubles efficiency.</p>

<p>Primarily by increasing its frequency (aka overclocking), it’s possible to upgrade the S5’s hashrate, but this increases the miner’s power and cooling requirements. Ranging from simple to extreme, there are ways to manage the overclocking burdens. Needing serious effort, gains of up to ~400 GH/s are achievable. Oil immersion cooling can be seen in this video.</p>
 
<h2>Price</h2>

<p>Prices ranging from $190 to $299, second-hand or used AntMiner S5s are available on eBay  and Amazon  and is mostly shipped from America. For $413, brand new S5s ship from Bitmain in China, though stocks aren’t always available so there may be a waiting period for some.</p>

<p>Always bear in mind the shipping costs and possible customs duties.</p>
 
<h2>Casing</h2>

<p>Limiting the placement of the unit therefore reduces its safety is due to the fact that the S5 is open at the top and bottom and the sides are constructed of fairly lightweight plastic. The good thing about the plastic casing is that the unit only weight 2.5 kg. / 6.5 lbs.</p>
 
<h2>Noise</h2>

<p>The noise from a stock S5’s 120mm fan has been compared to an industrial vacuum. It’s without doubt an <a href="/usb-bitcoin-miner-setup-guide/">inappropriate device to run</a> in your living environment, engulfing conversation and irritating people as well as pets.</p>
<p>The only solution is to replace the stock ~75 decibel fan with a quieter kind. Often a secondary fan is added to the back-end, where screw holes exist for this purpose.</p>
 
<h2>Setup</h2>

<p>In order to use and likewise features an intuitive control panel, the S5 will automatically search out an available IP address.  To configure easily your mining pool settings, upgrade the device’s firmware and share access privileges to the miner over a network connection, the MinerLink software will permit you to observe the status of your miner(s). </p>

<p>The MinerLink interface.</p>

<h2>Temperature</h2>

<p>The maintained onboard temperature should be below 80°C / 175°F.</p>

<p>The lifetime of the S5 will prolong, if onboard temperature is kept below 60°C / 140°F.  The lower the operating temperature, the higher they can be overclocked, as with all miners.</p>

<h2>Verdict</h2>

<p>It’s hard to justify the cost of buying a new S5 since it’s unlikely to ever turn a profit. A cheaper, second-hand S5 still in excellent used condition is enough already to learn the ropes of Bitcoin mining. It shows a low-cost introduction to the complex business of Bitcoin mining.</p>

<p>If you want to experiment with hardware, firmware and software tweaks and mods, the S5 is likewise a good platform. The S5 is inexpensive enough to test possibly harmful operations like over/under-clocking and immersion cooling at roughly one tenth the price of the cutting-edge Antminer S9</p>

