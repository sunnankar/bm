---
layout: post
title: What is Bitcoin Mining Difficulty
description: What is Bitcoin Mining Difficulty
author: Bitcoin Mining
authorurl: /
published: true
toc:
  what-is: What is Bitcoin Mining Difficulty?
  cdp: The Computationally-Difficult Problem
  dm: The Bitcoin Network Difficulty Metric
  bw: The Block Reward
---

{% include page-toc.html %}
<h2 id="what-is">What is Bitcoin Mining Difficulty?</h2>
<center><img src="/images/what-is-bitcoin-mining-difficulty.png">
<a href="/images/what-is-bitcoin-mining-difficulty-high-resolution.png" target="_blank">Visualize and Download High-Resolution Infographic</a></center>
<h3 id="cdp">The Computationally-Difficult Problem</h3>
<p>Bitcoin mining a block is difficult because the SHA-256 hash of a block's header must be lower than or equal to the target in order for the block to be accepted by the network.
<p>This problem can be simplified for explanation purposes: The hash of a block must start with a certain number of zeros. The probability of calculating a hash that starts with many zeros is very low, therefore many attempts must be made. In order to generate a new hash each round, a nonce is incremented. This is based on the <a href="/what-is-hashcash/">hashcash</a> function.
<h3 id="dm">The Bitcoin Network Difficulty Metric</h3>
<p>The Bitcoin network difficulty is the measure of how difficult it is to find a new block compared to the easiest it can ever be. It is recalculated every 2016 blocks to a value such that the previous 2016 blocks would have been generated in exactly two weeks had everyone been mining at this difficulty. This will yield, on average, one block every ten minutes.
<p>As more miners join, the rate of block creation will go up. As the rate of block generation goes up, the difficulty rises to compensate which will push the rate of block creation back down. Any blocks released by malicious miners that do not meet the required difficulty target will simply be rejected by everyone on the network and thus will be worthless.
<h3 id="bw">The Block Reward</h3>
<p>When a block is discovered, the discoverer may award themselves a certain number of bitcoins, which is agreed-upon by everyone in the network. Currently this bounty is 25 bitcoins; this value will halve every 210,000 blocks. See Controlled Currency Supply.
<p>Additionally, the miner is awarded the fees paid by users sending transactions. The fee is an incentive for the miner to include the transaction in their block. In the future, as the number of new bitcoins miners are allowed to create in each block dwindles, the fees will make up a much more important percentage of mining income.
