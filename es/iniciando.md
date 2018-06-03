---
layout: default
title: Iniciación a la minería Bitcoin
description: Iniciación a la minería Bitcoin
toc:
  hbmw: How Bitcoin Mining Works
  gmhw: Get The Best Bitcoin Mining Hardware
  sm: How To Start Bitcoin Mining
  cloud: Bitcoin Cloud Mining Contracts
  hc: Hardware Comparison
  dms: Download Bitcoin Mining Software
  mp: Join a Bitcoin Mining Pool
  bw: Set Up A Bitcoin Wallet
---

<h1>Bitcoin Mining Guide - Getting started with Bitcoin mining</h1>
{% include page-toc.html %}

You will learn <b>(1)</b> how bitcoin mining works, <b>(2)</b> how to start mining bitcoins, <b>(3)</b> what the best bitcoin mining software is, <b>(4)</b> what the <a href="/bitcoin-mining-hardware/">best bitcoin mining hardware</a> is, <b>(5)</b> where to find the best bitcoin mining pools and <b>(6)</b> how to optimize your bitcoin earnings.
<p>Bitcoin mining is <a href="/bitcoin-mining-profitability/">difficult to do profitably</a> but if you try then this <a href="http://geni.us/37CM">Bitcoin miner</a> is probably a good shot.
<br /><br />
<iframe width="700" height="394" src="https://www.youtube.com/embed/GmOzih6I1zs" frameborder="0" allowfullscreen></iframe>
<hr style="width: 100%; margin: 20px 0; color: #eee;" />
<h2 id="hbmw">How Bitcoin Mining Works</h2>
<p>Before you start mining Bitcoin, it's useful to understand what Bitcoin mining really means. Bitcoin mining is legal and is accomplished by running SHA256 double round hash verification processes in order to validate Bitcoin transactions and provide the requisite security for the public ledger of the Bitcoin network. The speed at which you mine Bitcoins is measured in hashes per second.

<p>The Bitcoin network compensates Bitcoin miners for their effort by releasing bitcoin to those who contribute the needed computational power. This comes in the form of both newly issued bitcoins and from the transaction fees included in the transactions validated when mining bitcoins. The more computing power you contribute then the greater your share of the reward.

<hr style="width: 100%; margin: 20px 0; color: #eee;" />
<img src="/images/icons/icon-gs-bitcoin-mining-hardware.png" alt="buy bitcoin mining hardware" align="right"><h2 id="gmhw"><em><b>Step 1</b> - Get The Best Bitcoin Mining Hardware</em></h2>
<p><strong>Purchasing Bitcoins</strong> - In some cases, you may need to purchase mining hardware with bitcoins. Today, you can purchase most hardware on <a href="http://geni.us/37CM">Amazon</a>. You also may want to check the <a href="http://www.bitcoincharts.com">bitcoin charts</a>.

<img src="/images/icons/mining.png" class="pull-right bitcoin-icon">

<h2 id="sm">How To Start Bitcoin Mining</h2>

<p>To <a href="/bitcoin-mining-for-beginners-how-to-mine-bitcoins/">begin mining bitcoins</a>, you'll need to acquire bitcoin mining hardware. In the early days of bitcoin, it was possible to mine with your computer CPU or high speed video processor card. Today that's no longer possible. Custom Bitcoin ASIC chips offer performance up to 100x the capability of older systems have come to dominate the Bitcoin mining industry.
<p>Bitcoin mining with anything less will consume more in electricity than you are likely to earn. It's essential to mine bitcoins with the best bitcoin mining hardware built specifically for that purpose. Several companies such as Avalon offer excellent systems built specifically for bitcoin mining.

<h2 id="cloud">Best Bitcoin Cloud Mining Services</h2>
<img src="/images/icons/cloud.png" class="pull-right bitcoin-icon">


<div class="mining-software-wrap">
<p>Another option is to purchase in Bitcoin cloud mining contracts. This greatly simplifies the process but increases risk because you do not control the actual physical hardware.
<p>Being listed in this section is NOT an endorsement of these services. There have been a tremendous amount of Bitcoin cloud mining scams.</p>

{% for service in site.data.cloud %}
{% if service.desc_btc != null %}
<p class="cloud-mining-info">
<b>{% if service.url != null %}<a rel="nofollow" href="{{ service.url }}">{{ service.company }}</a>: {% else %}{{ service.company }}: {% endif %}</b>{{ service.desc_btc }}
</p>
{% endif %}
{% endfor %}
</div>

<h2 id="hc">Bitcoin Mining Hardware Comparison</h2>

<p>Currently, based on <b>(1)</b> price per hash and <b>(2)</b> electrical efficiency the best Bitcoin miner options are:</p>

<div class="hardware-comparison">
{% for miner in site.data.hardware %}
{% if miner.cat contains 'featured' %}
{% include hardware-compare.html %}
{% endif %}
{% endfor %}
</div>

<hr style="width: 100%; margin: 20px 0; color: #eee;" />
<img src="/images/icons/icon-gs-bitcoin-mining-software.png" alt="bitcoin mining software" align="right"><h2 id="dms"><em><b>Step 2</b> - Download Free Bitcoin Mining Software</em></h2>
<p>Once you've received your bitcoin mining hardware, you'll need to download a special program used for Bitcoin mining. There are many programs out there that can be used for Bitcoin mining, but the two most popular are CGminer and BFGminer which are command line programs.
<p>If you prefer the ease of use that comes with a GUI, you might want to try EasyMiner which is a click and go windows/Linux/Android program.</p>
<p>You may want to learn more detailed information on the <a href="/bitcoin-mining-software/">best bitcoin mining software</a>.
<hr style="width: 100%; margin: 20px 0; color: #eee;" />

<img src="/images/icons/pool.png" class="pull-right bitcoin-icon">
<h2 id="mp"><em><b>Step 3</b> - Join a Bitcoin Mining Pool</em></h2>
<p>Once you're ready to mine bitcoins then we recommend joining a <a href="/bitcoin-mining-pools/">Bitcoin mining pool</a>. Bitcoin mining pools are groups of Bitcoin miners working together to solve a block and share in its rewards. Without a Bitcoin mining pool, you might mine bitcoins for over a year and never earn any bitcoins. It's far more convenient to share the work and split the reward with a much larger group of Bitcoin miners. Here are some options:
<p>For a fully decentralized pool, we highly recommend <a href="http://p2pool.in">p2pool</a>.
<p>The following pools are believed to be <b>currently fully validating blocks</b> with Bitcoin Core 0.9.5 or later (0.10.2 or later recommended due to DoS vulnerabilities):
<ul><li><a href="https://bitminter.com/">BitMinter</a></li>
<li><a href="http://www.kano.is/">CK Pool</a></li>
<li><a href="http://eligius.st/~gateway/">Eligius</a></li>
<li><a href="https://en.bitcoin.it/wiki/Bitcoin_Pooled_Mining">Slush Pool</a></li></ul>

<hr style="width: 100%; margin: 20px 0; color: #eee;" />

<img src="/images/icons/wallet.png" class="pull-right bitcoin-icon">

<h2 id="bw"><em><b>Step 4</b> - Set Up A Bitcoin Wallet</em></h2>
<p>The next step to mining bitcoins is to set up a Bitcoin wallet or use your existing Bitcoin wallet to receive the Bitcoins you mine. A Bitcoin wallet is like a traditional wallet and can be software, mobile or web-based. <a href="https://www.ledgerwallet.com/r/4727">Bitcoin hardware wallets</a> are also available.
<p>Bitcoins are sent to your Bitcoin wallet by using a unique address that only belongs to you. The most important step in setting up your Bitcoin wallet is securing it from potential threats by enabling two-factor authentication or keeping it on an offline computer that doesn't have access to the Internet. Wallets can be obtained by downloading a software client to your computer.
<p>For help in choosing a Bitcoin wallet then you can <a href="https://www.weusecoins.com/en/find-the-best-bitcoin-wallet/">get started here</a>.
<p>You will also need to be able to buy and sell your Bitcoins. For this we recommend:
<ul>
<li><a href="https://www.kraken.com/">Kraken</a> - The largest European exchange with same-day SEPA</li>
<li><a href="https://www.buybitcoinworldwide.com/">Buy Bitcoin Worldwide</a> - Get help finding a Bitcoin exchange in your country.</li>
<li><a href="http://geni.us/localbitcoins">Local Bitcoins</a> - This fantastic service allows you to search for people in your community willing to sell bitcoins to you directly. But be careful!</li>
</ul>
