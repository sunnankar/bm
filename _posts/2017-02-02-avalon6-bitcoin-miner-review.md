---
layout: post
title: An Evaluation of Avalon6 Bitcoin Miner
description: An Evaluation of Avalon6 Bitcoin Miner
author: Melvin Draupnir
authorurl: https://www.weusecoins.com/melvin-draupnir/
published: true
---

<hr id="hwc" style="width: 100%; margin: 20px 0; color: #eee;" />

<h2>Bitcoin Mining Hardware Comparison</h2>

<p>Currently, based on <b>(1)</b> price per hash and <b>(2)</b> electrical efficiency the <a href="/bitcoin-mining-fees/">best Bitcoin miner options</a> are:</p>

<div class="hardware-comparison">
{% for miner in site.data.hardware %}
{% if miner.cat contains 'featured' %}
{% include hardware-compare.html %}
{% endif %}
{% endfor %}
</div>

<h2>PROS</h2>

<p>It is the second most productive Bitcoin miner on the market</p>
<p>Stated in some reviews that the miner is quiet compared to others</p>

<h2>CONS</h2>

<p>Compared to the Antminer S7, it has less hash power for the money</p>
<p>It is less efficient compared to the Antminer S7.</p>

<h2>The Avalon 6: Serious Rival to the AntMiner S7</h2>

<p>The troubled Avalon brand was taken over by Canaan Creative. With their <a href="/profit-bitcoin-without-owning/">recent hardware offerings</a>, they’ve been rebuilding the brand to its previous glory. The impressive Avalon 6, their latest device, contains eighty 18nm A3218 chips, running at 500 MHz to achieve a respectable 3.5 TH/s hashrate which comes close to that of the AntMiner S7.</p>

<h2>Power Supply</h2>

<p>The Avalon 6 will surely run with any good power supply of 1100W and up. The unit uses about 1050 Watts when using a platinum-rated PSU.</p>

<h2>Bitcoins / Month (Profitability)</h2>

<p>Despite the release of the 14 TH/s AntMiner S9, the expected halving combined with a rising Bitcoin price may allow the Avalon 6 to turn a profit. Through CoinWarz’mining profitability calculator, we’ll run the Avalon stats and some average costs: </p>

<p><center><img src="/images/avalon1.png" alt="avalon 6"/></center></p>

<p>And the results, while in the minus column, don’t look so bad. A lower electricity cost or higher Bitcoin price could make the Avalon 6 into profit:</p>

<p><center><img src="/images/avalon2.png" alt="avalon 6"/></center></p>

<h2>Price</h2>

<p>Canaan sells the unit for $550 (with substantial $100 and $130 discounts for 10 and 50 units respectively). For shipping information, the unit weighs 5 kg / 11 lb. From Amazon, second-hand or used device costs about $450.</p>

<h2>Noise</h2>

<p>Ideally not to be put in your bedroom or living room, the Avalon 6 is <a href="/bitcoin-mining-centralization/">quiet enough to run at home</a>, at 55 dB from 1.2 m. / 4 ft. The unit will further reduce noise by underclocking (aka downclocking).</p>

<h2>Setup</h2>

<p>Either a Raspberry Pi (B / B+) or a TP-Link TL-WR703N is required in an Avalon 6 as a controller. From one RPi, up to 50 miners can be maintained.</p>

<p>It can be easily installed because it uses DHCP which automatically finds an IP address.</p>

<p>To setup, control and monitor the device you can use either Avalon’s control panel or CGminer. Basic and advanced settings are easy to access.</p>

<h2>Temperature</h2>

<p>With the intention on operating at an ambient temperature below 35°C / 95°F, the frequency of the Avalon 6 can be easily adjusted from its standard 500 MHz and it runs fairly cool even when overclocked. Due to the unit’s design, the single fan has no problem cooling it.</p>

<h2>Verdict</h2>

<p>The Avalon 6 is a tough contender to the AntMiner S7. Even if it’s slightly less energy-efficient , it compensates by arguably having enough customization options to please any hardware enthusiast.</p>
