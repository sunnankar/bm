---
layout: post
title: How Does Bitcoin Mining Really Operate?
description: How Does Bitcoin Mining Really Operate?
author: Melvin Draupnir
authorurl: https://www.weusecoins.com/melvin-draupnir/
published: true
---

<p>If you’ve already heard about Bitcoin, you probably know that mining is one of the core concept underlying this <a href="/decrypting-bitcoin-documentary/">blockchain technology</a>. You’ve maybe also heard that mining involves thousands of powerful computers which solve some magical puzzles. But do you really know how does mining works under the hood?</p>

<h2>Science behind Bitcoin</h2>

<p>Despite the fact that the <a href="/banks-and-brokerages-should-be-mining-the-blockchain/">blockchain technology takes advantage</a> of a few sophisticated numerical algorithms, the underlying concepts are quite straightforward. And definitely you don’t need an engineering degree in programming to grasp the gist of this revolutionary technology!</p>

<p><center><img src="/images/blockchain-technology.jpg" alt="blockchain-technology"/></center></p>

<h2>Cryptographic hash function</h2>

<p>Hash functions belong to a very useful class of algorithms that transform any data into a short message which then we can easily compare and process. Simple example of that could be a mathematical function which as an output gives the remainder of division by 1000 (modulo operation). You can think about hashes as fingerprints of data.</p>

<p>Cryptographic hash functions must meet some conditions, such as:</p>

<ul>
<li>be deterministic-that means for the same input function have to always return the same hash</li>
<li>you shouldn’t be able to guess the input from hash except by trying all possibilities, which is impossible even for supercomputers</li>
<li>small change in the input should result in a completely different hash</li>
<li>it should be extremely hard to find 2 different inputs which give the same hash (like winning Powerball 10 times in a row hard!!!)</li>
</ul>

<p>Cryptographic hash functions are diligently analyzed before they are recommended to production use. For instance National Institute of Standards and Technology organized several contests for hash functions in which finest minds in the world tried to crack or find vulnerabilities in the list of proposed algorithms.</p>

<p>Bitcoin relies heavily on this properties when it comes to mining blocks. If you’re curious, an actual implementation uses well known and battle-tested algorithm called SHA-256.</p>

<p>Merkle tree</p>

<p>Second important thing you need to get to fully understand mining is the concept of Merkle tree. Merkle trees can be used to verify contents and order of given chunks of data. Let’s say you want to send 4 files to your friend and you want to guarantee that any of these files won’t be modified along the way. Merkle tree is solution to your problem. All you need to do is simply follow three steps below:</p>

<p><strong>1.</strong> Generate hashes of each file. Each of them is a fingerprint of corresponding file.</p>

<p><strong>2.</strong> Combine hashes of the first and second file together and calculate hash of these 2 hashes. Repeat this action for files number 3 and 4. Now you have 2 hashes which uniquely identify pairs of your files.</p>

<p><strong>3.</strong> Final step is to combine hashes of pairs and calculate hash of them, so-called Merkle root. This is the fingerprint of your 4 files.</p>

<p>Bitcoin uses Merkle trees to verify which transactions and in which order are included in any given block.</p>

<p>When you send Bitcoin transaction it lands in a set of unconfirmed transactions distributed over thousands of computers called mempool. Then <a href="/some-fast-facts-about-bitcoin-mining-14/">each miner picks some of them</a> and calculates the root of the given merkle tree. Those transactions are candidates to be included in the next block. By knowing that we can finally start to mine Bitcoin blocks.</p>

<h2>Mining process</h2>

<p>The result of a mining process will be a block, which is a set of transactions with a corresponding block hash that proves validity of the given block.</p>

<p>Ok then, let’s try to construct block hash based on the pieces of information we already have. Maybe it’s just fine to take merkle root and call it block hash?</p>

<p>merkle root -> block hash</p>

<p>Indeed, it marks the contents and order of included transactions, yet unfortunately it doesn’t say anything about the place of this block in within the blockchain. I <a href="/what-is-the-bitcoin-block-reward/">could mine this block</a> without knowing how blockchain looked like at the given moment. </p>

<p>There’s an easy fix for that-we just have to add hash of the last block in the blockchain… and hash it… twice (as stated in the bitcoin blockchain specification). Because of that we can’t produce blocks in advance.</p>

<p>SHA256(SHA256(previous block hash + merkle root)) -> block hash</p>

<p>But don’t you think there is something wrong with this formula? No one can, for instance, stop me from generating millions of these blocks. Each computer on our beautiful planet could mine plenty of valid Bitcoin blocks every second. There’s a clever part here. </p>

<p>SHA256 hash is really a number between 0 and 2<sup>256</sup> - 1. 2<sup>256</sup> is huge. Bitcoin sets a very small threshold above which hashes are considered invalid. If I do my math correctly only about 0.00000000000000000007% (seven and 19 zeros in front of it) of all possible hashes could be valid block hashes. </p>

<p>That threshold is called difficulty and it’s automatically adjusted every 2016 blocks (~2 weeks) to compensate changing computing power of the network. That’s the reason why blocks appear at intervals of roughly 10 minutes. </p>

<p>Because we can’t predict the output of SHA256, we have to blindly guess different combinations of inputs. In order to do so, we have to include some number we can change called nonce.</p>

<p>SHA256(SHA256(previous block hash + merkle root + nonce)) -> block hash</p>

<p>That’s the core idea of mining. An actual implementation of block hash is slightly different, for example it includes current time and information about difficulty. You can read more technical explanation here.</p>

<p>Well, now you know three core concepts underlying the <a href="/usb-bitcoin-miner-setup-guide/">blockchain mining process</a>. Now, don’t forget to check out our explainer video about bitcoin to learn more about how increasingly useful it is in everyday life and why you should start using it! If you like it please share it across your network and help us convince many more people to start using bitcoins!</p>

<center><iframe width="720" height="394" src="https://www.youtube.com/embed/GmOzih6I1zs" frameborder="0" allowfullscreen></iframe></center>

