---
layout: post
title: Bitmain Antminer S7 Review All You Need To Know
description: Bitmain Antminer S7 Review All You Need To Know
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

<p>The Bitmain Antminer S7 is Bitmain Tech's latest version of its Antminer series of Bitcoin miners.</p>

<h2>PROS</h2>
<ul>
<li><p>High 4.73 TH/s hashrate, and efficient at 0.25 Joule per GH/s</p></li>
<li><p>Priced reasonably at $440 new (add for shipping)</p></li>
<li><p>Prominent miner with ample guides and parts available</p></li>
</ul>
<h2>CONS</h2>
<ul>
<li><p>Eclipsed by 16nm miners (AntMiner S9) and forthcoming 14nm miners</p></li>
<li><p>Demands high-end PSU due to high power consumption of ~1350 Watts</p></li>
<li><p>Little noisy at 62dB</p></li>
</ul>

<h2>The AntMiner S7: Bitcoin Mining Mainstay</h2>

<p>Now that it has reached its 19th batch of production, <a href="/what-is-ethereum-cloud-mining/">Bitmain’s AntMiner S7</a> found to be so prominent since its release in mid-2015. Offering a high hashrate for the amount of power it consumes, the S7 believed to have dominated the market for a good reason. If you view any modern industrial mining operation, chances are you’ll see racks of AntMiner S7s hashing away. Also a popular choice among hobbyist miners, the S7 has a reasonable price and strong performance.</p>

<p>The S7 is powered by a 28nm BM1385 ASIC chip. Kept cool by dual fans (or a single fan in the case of a particular batch), 135 of these chips are spread across 3 boards. The strong metal casing features a tongue and groove system which allows for the neat arrangement of multiple miners.</p>

<h2>Power Supply</h2>

<p>Designed specifically for use with <a href="/usb-bitcoin-miner-setup-guide/">Bitcoin miners</a>, Bitmain’s high quality 1600 Watt APW3 power supply unit is recommended to use with the S7. Losing only 7% of electricity between outlet and miner, this PSU is considered extremely efficient. In order to function, the APW3 requires a minimum 205 Volts and sadly does not come with the necessary 16A power cord.</p>

<p>Even though it’s not so cheap at $140 excluding shipping, the APW3 is a great choice with regards to ability to upgrade in the future for the reason that it also works with the power-hungry AntMiner S9. It’s also possible to use any ATX PSU of sufficient Wattage to run the S7.</p>

<p>The <a href="/certain-traits-necessary-for-bitcoin-mining-success-21/">S7-LN includes its own PSU</a>; a 1000W Enermax, rated Gold (above 80% efficiency). As the S7-LN only draws about 700W, this PSU has excess capacity even when overclocking the unit above its default 600M frequency. Adding quite a lot of weight to the unit, it increases the shipping cost. While an integral PSU makes for a compact and convenient miner, there are few other reasons to recommend such a setup. The S7-LN also doesn’t include a cord.</p>

<h2>Bitcoins / Month (Profitability)</h2>

<p>With Difficulty rising and the halving of block rewards coming, profitability for the S7 is reaching its end for those without access to low cost power. On the other hand, if Bitcoin’s exchange rate increases adequately, the profitability of S7 may well be extended beyond predictions.</p>

<p>Using the CoinWarz’ Bitcoin mining calculator, we’ll take a look at some likely returns for an S7 and S7-LN. Supposing an average household Power Cost of 15c per kWh, a Pool Fee of 2.5% (as charged by AntPool) and a post-halving Block Reward of 12.5 BTC per block mined:</p>

<p>For greatly increased accuracy, perform your own custom calculation!</p>

<p>The result doesn’t look good:</p>

<p>Monthly loss is $18 and $223 annually.</p>

<p>It’s clear that nobody who pays a regular price for their electricity will be getting rich off an S7, as seen from this rough calculation (which appears not to factor in the Hardware Costs field). With careful adjustments, it may be possible to profit from an S7 even at 15c power. Taking only if Bitcoin’s price doesn’t fall and Difficulty doesn’t jump which are really risky assumptions.</p>

<p>The same calculations adjusted for the <a href="/bitcoin-mining-pools-give-everyone-a-chance-to-be-involved-12/">Hash Rate and Power consumption</a> of the S7-LN produces slightly more encouraging results:</p>

<p>Monthly loss is only $6 and $77 annually.</p>

<h2>Power Consumption</h2>

<p>At a room temperature of 25°C / 77°F, the S7 draws a minimum of 1293 Watts. Obviously, the hotter it is the environment, the more energy the fan(s) will use to cool the unit. Twice as efficient as the S5 at converting all this energy into bitcoins, the S7 needs a modest 0.25 Joules of power per Gigahash.</p>

<p>As mentioned, the LN (“Lite”) version draws only 700W. It likewise consumes 0.25 J/GH.</p>

<h2>Price</h2>

<p>A little bit cheaper than the current cost of the S9, the S7 was priced at nearly $2000 shortly after release. The price has decreased abruptly and can be bought now from Bitmain at $440 only (when in stock), plus shipping. However, it can costs $545 when bought new or $500 for second-hand from Amazon.</p>

<p>S7-LN is priced at $291 in Bitmain while it is going for $439 new or $409 used in Amazon.</p>

<p>As the S9 and other superior mining hardware becomes the new standard, these prices can be expected to fall further. It’s also possible to buy modded S7(-LNs) with upgraded efficiency and diminished noise and heat levels.</p>

<h2>Setup</h2>

<p>Both S7’s have DHCP capability, meaning they’ll automatically seek out an IP address to use. Requiring only your mining pool credentials to begin mining, setting them up via the MinerLink GUI is a simple process. Upon powering up, the units will <a href="/usb-bitcoin-miner-setup-guide/">automatically begin hashing</a>, which can be useful in the event of power failure. S7 connectivity is via Ethernet only.</p>

<h2>Temperature</h2>

<p>Both S7 versions can be used well below an ambient temperature of 40°C / 77°C. Both are cooled by dual 12038 fans. To help extend the life of these miners, it should be kept in a room with a cool and dry place. An ideal location for example is a dry basement.</p>

<h2>Verdict: Is the S7 Right for You?</h2>

<p>Hoping to make a profit but can’t wait for the S9 (or other forthcoming miners from different companies) to become affordable, S7 is likely the best option for you. With access to low cost power and perhaps some smart tweaking, it’s possible that the S7 will pay for itself and become profitable. </p>

<p>A slightly more efficient S7-LN is certainly fitting to the home miner who can’t tolerate a lot of fan noise or cable clutter.</p>
