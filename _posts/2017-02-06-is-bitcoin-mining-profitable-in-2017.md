---
layout: post
title: Will 2017 be Profitable for Bitcoin Mining?
description: Will 2017 be Profitable for Bitcoin Mining?
author: Melvin Draupnir
authorurl: https://weusecoins.com/melvin-draupnir/
published: true
---

<h2>Bitcoin Mining Hardware Comparison</h2>

<p>Currently, based on <b>(1)</b> price per hash and <b>(2)</b> electrical efficiency the best Bitcoin miner options are:</p>

<div class="hardware-comparison">
{% for miner in site.data.hardware %}
{% if miner.cat contains 'featured' %}
{% include hardware-compare.html %}
{% endif %}
{% endfor %}
</div>

<p>Bitcoin mining during its early days were <a href="/banks-and-brokerages-should-be-mining-the-blockchain/">generally called as a gold rush</a>. Bitcoin, an invention of Satoshi Nakomoto's, "a peer-to-peer electronic cash system,” opened up an entirely new perimeter, not just of freedom but of profit. People with a strong interest in such things were first to stake their claim, namely cypherpunks, cryptographers, technically-minded libertarians and assorted hackers.</p>

<h2>But is there still gold in them thar hills?</h2>

<p>From a few of early enthusiasts, it is with certainty that Bitcoin mining has advanced into a cottage industry to a specialized industrial-level venture. The easy money was taken out long ago and the rest are hidden under the cryptographic equivalent of miles of hard rock.</p>

<p>To be able to profitably excavate bitcoins nowadays, you need to have specialized, <a href="/certain-traits-necessary-for-bitcoin-mining-success-21/">high-powered machinery</a>. While it is technically possible for anyone to mine, those with underpowered setups will spend more money on electricity than have money generated through mining.</p>
 
<h2>Common Mining Terms</h2>

<p>To further understand Bitcoin mining, it helps to know a few basic technical terms:</p>

<p>Block: a group of Bitcoin transactions, as collected from current pending transactions and entered into an ever-growing record of blocks (aka “the blockchain”) by a miner. A new block is created on average every ten minutes.</p>

<p>Proof of Work Hashing: this is the function miners perform in order to define a new block. PoW hashing ensures the proper function of the Bitcoin blockchain. Miners compete to solve a cryptographic “puzzle,” known as a hash. There are no shortcuts in this process, which can only be solved with raw computational power. By correctly hashing the current block, miners prove their investment of work and are rewarded with a certain number of newly-created bitcoins.</p>

<p>Block Reward: the number of newly-created bitcoins. This number was initially set to 50, halved to 25 in late-2012 and will halve again to 12.5 in mid-2016. This halving process continues, approximately every four years (or every 210,000 blocks), until all 21 million bitcoins are created. This is the only way in which <a href="/bitcoin-mining-pools-give-everyone-a-chance-to-be-involved-12/">new bitcoins can be created</a>; by miners according to the code’s rate and limit.</p>

<p>Hashrate: a measure of a miner’s computational power. The higher their relative power, the more solutions (and hence, block rewards) they’re likely to find. Initially measured in hash per second (H/s), due to the increasing speed of mining hardware. H/s was soon commonly pre-fixed with SI units as follows:</p>

<ul>
<li> <p>Kilohash = KH/s (thousands of H/s), then</p></li>
<li> <p>Megahash = MH/s (millions of H/s), then</p></li>
<li> <p>Gigahash = GH/s (billions of H/s), then</p></li>
<li> <p>Terahash = TH/s (trillions of H/s), and even</p></li>
<li> <p>Petahash = PH/s (quadrillions of H/s).</p></li>
</ul>
<p>Difficulty: with hashrate shooting up over the years, it would seem blocks would be found by miners ever more rapidly. Bitcoin’s Difficulty measure is what prevents this from happening, ensuring blocks are found roughly every 10 minutes. When total hashrate rises, the Difficulty of POW hashing adjusts upwards - and the inverse also applies. Difficulty auto-adjusts every two weeks (or 2016 blocks).</p>

<p>BTC / XBT exchange rate: the current fiat price of Bitcoin; critical for calculating profitability.</p>

<p>W/xHash/s: Watts per hashrate per second. Electricity is the major on-going cost of <a href="/avalon-wins-the-asic-race-sort-of-23/">Bitcoin mining</a>. The price paid per Watt will greatly influence profitability.</p>

<p>Mining Pool: unless you command a tremendous hashrate, your odds of solving a block by yourself (i.e. “solo-mining”) are extremely low. By banding together with other miners in a so-called pool, your combined odds of solving a block rise proportional to the pool’s total hashrate. Whenever they solve blocks, pools reward individual miners according to their contributed hashrate (minus commissions and the like).</p>
 
<h2>Calculating Mining Profitability</h2>

<p>Having these terms in mind, it’s viable to calculate the current profitability of Bitcoin mining for your circumstances. Bear in mind that the future profitability of mining cannot be reliably predicted. This is because of the ever-changing nature of the Difficulty modifier and the BTC price, in particular.</p>

<p>To start, we must select a suitable ASIC mining rig. To help in selection, the Bitcoin Wiki provides a handy mining hardware comparison:
We'll select for our example the AntMiner S7 which is pretty much the cutting edge of mining tech and is a modern mining rig that offers a good hashrate for its power consumption. The S7 in Amazon is available for $609 and only $450 from BitMain, exclusive of shipping. $150 or so is added for the power supply units.</p>

<p>Next, we need to enter the S7’s specs and cost, as well as other info such as power cost and pool fees, into a suitable number-cruncher. CoinWarz.com offers a good mining profitability calculator, which automatically fills in the current BTC price, Difficulty and block reward info.</p>

<p>As a standard in China, the <a href="/bitcoin-mining-learn-foreign-exchange-traders/">default power cost</a> we will use is 10c (USD), but possibly to be much higher elsewhere. Check worldwide electricity prices or your utility bills for the exact price to know your own power cost. The 2.5% Pool Fee is for AntPool. There is generally lower or no fees for smaller pools but remember that they will seldom find blocks.  Various pools’ fees and reward structures are compared in this list.</p>

<p>After all the needed info is registered, click Calculate for the profitability result:</p>

<p>Not a bad result! $800 per year and you can use the miner’s excess heat to warm your home.</p>
 
<h2>The American Scenarios</h2>

<p>Exciting as it seems, let’s first recompute the average power cost per kWh in the USA (~12.5c) and the 12.5 BTC block reward which becomes the new standard in 45 days or so (see Bitcoin Clock for an up-to-date estimate):</p>

<p>Given the difficulty and price hold steady and by the looks of it, it turns out that in every year, an average American miner can only make $500. But, this could be an unsafe assumption! Bitcoin’s average hashrate surprisingly climbed by a whopping 30 percent by the time this article is being written.</p>

<p>The compensatory Difficulty spike, expected on the day following reports of this spike, completely alters the previous equation:</p>

<p>If we bump up the Difficulty in the mining calculator by the corresponding 30%, all profit evaporates! $500 is lost over one year’s worth of mining.</p>
 
<p>Unexpected Profit Loss: Difficulty Spikes, Price Crashes, Equipment Failures, Power Cuts, Shipping Delays & More</p>

<p>The aforementioned scene works as a perfect picture of the risks present in the Bitcoin mining. There is a possibility that even some big, corporate miners will be injured from such a steep Difficulty spike. Unless home miner has access to free or very low-cost electricity, it really has zero chance to compete in such challenging environment.</p>

<p>Remember also that the rate of degeneration in Bitcoin hardware is tremendously fast! One should be knowledgeable that during (pre-) ordering equipment, potential manufacturing, shipping, customs or other delays could be very costly in the end as difficulty rises or price falls during the interim.</p>

<p>There are many of other inaccurate things, and such downside risks must always be considered into any concept business plan.</p>
 
<h2>The Chinese Scenarios</h2>

<p>For interest’s sake, let’s check the scenario of Chinese miners, who represent the majority of Bitcoin mining power for good reason. The results may help us better predict the post-halving Bitcoin environment, as this article attempts to do.</p>
 
<h2>Hobby Miners</h2>

<p>Some Chinese regions are over-supplied with electricity, which are subsidized in many instances. Because of this, low power cost is made and we’ll assume to be 7c for a miner in the right province.  To add, a number of mining hardware is invented in China resulting to likely be bought cheaper (and received sooner) by locals of the Middle Kingdom. We’ll assume a ¾ hardware price.</p>

<h2>Results:</h2>

<p>Before the Difficulty spike, a small-time Chinese miner with a single S7 connected to AntPool could have made over $1000 annually. That’s twice the profit of their American counterpart!</p>

<p>After the halving and Difficulty spike, the same miner would lose about $40 per year. For a Bitcoin lover, this is an easily-acceptable loss.</p>

<h2>Industrial Miners</h2>

<p>Cheap power sources are present in remote provinces so large-scale mining operations will situate closely there. One popular option is hydroelectric power from dams. From such enterprises we can assume a very low power cost, let’s say 5c. These operations also buy hardware in volumes so assuming they get S7s at $325, which is only half the price. One thousand S7 units seems a reasonable number, which permits us to simply add three zeros to hash rate, hardware and power costs. Lastly, these setups often run their own pools and so we’ll suppose zero pool fees.</p>

<h2>Results:</h2>

<p>The operation would net $1.4m annually, before the halving and Difficulty spike.</p>

<p>The operation would profit by about $200k annually, after the halving and Difficulty spike.</p>

<p>Given the initial hardware investment of $325k, a profit of $200k doesn’t look great. It can be seen that marginal mining operations will be forced out of business post-halving given the other costs involved in mining, such as property, salaries, maintenance, etc. Only those with the latest and greatest hardware and the cheapest electricity are likely to pull through. Bitcoin price is the only wild card. It’ll allow less efficient miners to keep the lights on for longer, if it rises sufficiently.</p>

<h2>Conclusion</h2>

<p>For an average home miner it will be a struggle to regain the cost of mining hardware and electricity. In this current given circumstance, profitability is highly unlikely. Once ASIC mining hardware innovation reaches the point of diminishing returns, the situation may improve in future. That, together with cheap, hopefully sustainable power solutions may once again make Bitcoin mining profitable to small individual miners around the world. The decentralization of the Bitcoin network, will also greatly improve hardening it against legislative risk.</p>
