---
layout: post
title: Bitcoin Mining in 2017 Profitable or Not? 
description: Bitcoin Mining in 2017 Profitable or Not? 
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

<p>“It depends on how much you’re willing to spend”, the answer would be as simple as that. Seeing that Bitcoin Mining profitability relies on many different factors, each person asking himself this will get a slightly different answer. “Mining profitability calculators” were innovated so as to find out Bitcoin mining profitability for different factors.</p>

<p>Different parameters that <a href="/how-does-bitcoin-mining-really-operate/">these calculators</a> take into account are electricity cost, the hardware cost and other variables and it will generate an approximate of your projected profit. Let’s make sure you are familiar with the different variables first, before I show you a short example of how this is calculated:</p>

<p><strong>Hash Rate</strong> – A Hash is the mathematical problem the miner’s computer needs to solve. The Hash Rate is the rate at which these problems are being solved. The more miners that join the Bitcoin network, the higher the network Hash Rate is.</p>
 
<p>The Hash Rate can also refer to your miner’s performance. Today Bitcoin miners (those super powerful computers talked about in the video) come with different Hash Rates. Miners’ performance is measured in MH/s (Mega hash per second), GH/s (Giga hash per second), TH/s (Terra hash per second) and even PH/s (Peta hash per second).</p>

<p><strong>Bitcoins per Block</strong> – Each time a mathematical problem is solved, a constant amount of Bitcoins are created. The number of Bitcoins generated per block starts at 50 and is halved every 210,000 blocks (about four years). The current number of Bitcoins awarded per block is 25. However soon enough the block halving will occur and the reward will be downgraded to only 12.5 Bitcoins.</p>
 
<p><strong>Bitcoin Difficulty</strong> – Since the Bitcoin network is designed to produce a constant amount of Bitcoins every 10 minutes, the difficulty of solving the mathematical problems has to increase in order to adjust to the network’s Hash Rate increase. Basically this means that the more miners that join, the harder it gets to actually mine Bitcoins.</p>
 
<p><strong>Electricity Rate</strong> – Operating a <a href="/bitcoin-mining-centralization/">Bitcoin miner</a> consumes a lot of electricity. You’ll need to find out your electricity rate in order to calculate profitability. This can usually be found on your monthly electricity bill.</p>
 
<p><strong>Power consumption</strong> – Each miner consumes a different amount of energy. Make sure to find out the exact power consumption of your miner before calculating profitability. This can be found easily with a quick search on the Internet or through this list. Power consumption is measured is Watts.</p>
 
<p><strong>Pool fees</strong> – In order to mine you’ll need to join a mining pool. A mining pool is a group of miners that join together in order to mine more effectively. The platform that brings them together is called a mining pool and it deducts some sort of a fee in order to maintain its operations. Once the pool manages to mine <a href="/bitcoin-mining-for-beginners-how-to-mine-bitcoins/">Bitcoins the profits</a> are divided between the pool members depending on how much work each miner has done (i.e. their miner’s hash rate).</p>

<p><strong>Time Frame</strong> – When calculating if Bitcoin mining is profitable you’ll have to define a time frame to relate to. Since the more time you mine, the more Bitcoins you’ll earn.</p>
 
<p><strong>Profitability decline per year</strong> – This is probably the most important and illusive variable of them all. The idea is that since no one can actually predict the rate of miners joining the network no one can also predict how difficult it will be to mine in 6 weeks, 6 months or 6 years from now. This is one of the two reasons no one will ever be able to answer you once and for all “is Bitcoin mining profitable?” The second reason is the conversion rate. In the case below, you can inset an annual profitability decline factor that will help you estimate the growing difficulty.</p>
 
<p><strong>Conversion rate</strong> – Since no one knows what the BTC/USD exchange rate will be in the future it’s hard to predict if Bitcoin mining will be profitable. If you’re into mining in order to accumulate Bitcoins only then this doesn’t need to bother you. But if you are planning to convert these Bitcoins in the future to any other currency this factor will have a major impact of course.</p>
 
<h2>Get a mining calculator</h2>

<p>We will use a mining profitability calculator, to compute all of these parameters and get an answer to our question. Here’s a simple mining calculator from 99Bitcoins:</p>

<p><center><img src="/images/mining-calculator-ofir-beigel.jpg" alt="mining-calculator-ofir-beigel"/></center></p>
 
<h2>CALCULATOR</h2>

<p>Moreover, let’s now take a look at a more complex example where we cover more components:</p>

<p>The Antminer S9 is one of the most advanced miners out there today. It is what is known as an ASIC mining rig which has a mining rate of 14 TH/s. You will see that at today’s difficulty you will earn around 1 Bitcoin a month, if we use the simple Bitcoin mining calculator (shown above).</p>
 
<p><center><img src="/images/mining-with-s9-ofir-beigel.png" alt="mining-with-s9-ofir-beigel"/></center></p>

<p>However, the hardware cost, electricity cost, pool fees, etc. were not yet included. Now let’s try to compute all of these together.</p>

<p>This data was taken from an advanced Bitcoin mining calculator using the following stats: 2% mining pool fees, 25 Bitcoins as a block reward, 14 TH/s hash rate, 1375W power consumption. </p>
 
<p>So in a year, we should be making approximately $6,000. But, the hardware cost was not deducted yet, so it’s more or less $3,400.  Also, sooner or later the block reward goes down to 12.5 so we’ll actually only be breaking even.</p>
 
<p>But just like we’ve mentioned, this result can change depending on your own electricity cost, the change in mining difficulty and most specially the price change of Bitcoin.</p>

<p>Mining Bitcoins at home will most probably not make you rich unless you have very low electricity costs and you can afford to buy some heavy duty equipment. Here’s a list of the most efficient Bitcoin mining hardware out there today. Since home mining is a dying art, there’s just a short list of variety to choose from.</p>
 
<p>Other alternatives are present that may be applicable for you to get into the mining game at a cheap price, even though home mining is considered an expensive business.</p>

<h2>How to mine Bitcoins with cloud mining</h2>

<p>A case where there’s no need to purchase a <a href="/usb-bitcoin-miner-setup-guide/">physical mining rig</a> but rather rent only a computing power from a different company and get paid according to how much power you own is a new concept called “cloud mining“. This concept at first sounds like a really good idea, for reasons that you will not have the trouble of buying expensive equipment, storing it, cooling it, etc.</p>
 
<p>But eventually, when you do the math, it seems that none of these cloud mining sites are profitable. Scams that don’t even own any mining equipment are those that appear profitable but really they are just complex Ponzi schemes.</p>
 
<p>I recommend using Genesis Mining – the only cloud mining company that has been around long enough to prove it’s not a scam, if you do not like to look at the idea of cloud mining. On the other hand you have to make sure to try a month first before investing into any of these plans.</p>
 
<h2>Mining Altcoins as an alternative to Bitcoin</h2>

<p>Altcoins is an alternate option you can consider instead of mining Bitcoins. There are hundreds of Altcoins obtainable on the market today and a couple of them are still unchallenging to mine. However, one drawback is there are so many Altcoins so it’s difficult to tell which ones are worth spending your time in. Litecoin, Dogecoin and Peercoin are some good examples for Altcoins.</p>
 
<p>You can note website indexes such as CoinChoose that will yield you a complete Altcoin breakdown, in order for you to understand which Altcoins are profitable. You can see the difficulty for each Altcoin on CoinChoose, where you can exchange them and see your chances to profit Bitcoins by mining each specific Altcoin. </p>

<h2>So is Bitcoin Mining Profitable?</h2>

<p>My guess is that in the long run you could make a profit from Bitcoin mining but only if you invest a considerable amount of money in a good mining rig (e.g. Antminer s9) or take your time to “hack” through making a profit with CEX.IO. I’d currently stay away from Altcoins but that’s my own personal opinion. If you don’t have the time or the money – stay away from mining and just invest in buying Bitcoins for the long run.</p>
