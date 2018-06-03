---
layout: post
title: How do Bitcoin Mining Fees Work?
description: Miners need an incentive to pay for electricity and hardware costs.
author: Melvin Draupnir
authorurl: https://www.weusecoins.com/melvin-draupnir/
published: true
seotitle: How Bitcoin Mining Fees Work
permalink: "/bitcoin-mining-fees/"
---
Miners provide an important service: network security. A large [network hash rate](/faq/#what-does-hashing-mean) keeps Bitcoin safe from attacks by bad actors. 

Miners need an incentive to pay for electricity and hardware costs. ASIC mining hardware keeps Bitcoin secure through [proof of work](/what-is-proof-of-work/). Right now, miners are paid through a combination of Bitcoin's block reward and transaction fees.

Bitcoin's block reward is still large and provides the majority of miners' earnings. The block reward started at 50 bitcoins per block. Currently, it is 25 bitcoins per block. In July 2016 it will drop to 12.5 bitcoins per block. 

<img src="/images/bitcoinsupply.png" />

## Transaction Fees

Once the majority of bitcoins have been mined, the block reward will become an insignificant percentage of miners' overall earnings. Instead, mining fees--paid by users who transact on the network--will make up the majority of miners' earnings.

Mining fees are paid each time a user sends a transaction on the network. In the example below, a user sent 0.21959311 BTC and included a 0.0001 BTC fee. 

<img src="/images/fee.png" />

Fees incentivize miners to include transactions in a block. Once a transaction has been included in a block it is _confirmed_. Unconfirmed transactions sit in something called the mempool until they are confirmed. 

Since miners want to maximize income, they will include transactions that include higher fees. 

## Stuck Transaction? 
Transactions sent with low fees may get stuck in the mempool. Posts about stuck transactions like the one below are published many times per day on Bitcoin message boards. 

<img src="/images/stuck.png" />

New users often don't know to include a sufficient fee in order to ensure quick confirmation. Transactions sent with proper fee amounts are confirmed in about 10 minutes. 

21's [fee tool](https://bitcoinfees.21.co/) will help you include the right fee amount when sending your transaction.

## Fee Collection by Miners

The miner or [mining pool](/bitcoin-mining-pools-give-everyone-a-chance-to-be-involved-12/) that includes a transaction in a block collects the transaction fee. 

<img src="/images/blockinfo.png" />

In the example above, Antpool mined block #408450. This block included 185 transactions with a total of 0.05502059 BTC in transaction fees. 

The total reward for this block is the block reward plus the total amount of transaction fees: 0.05502059 BTC + 25 BTC = 25.05502059 BTC. The transaction fees for this block were just 0.2% of the total reward. 

The example block above is just one of many. It's clear, however, that in the future transaction fees must rise in order to compensate for the decreasing block reward.

## Recap

Bitcoin is sometimes advertised as a way to make cheap payments, which makes mining fees confusing at first. 

In reality, mining fees are needed and incentivize miners to secure the network. Without miners, the network could be attacked and would be vulnerable to [51% attacks](http://www.dailydot.com/business/bitcoin-51-percent-attack/).

Mining fees also represent users' willingness to pay to use Bitcoin. If someone is willing to pay $5 to send one Bitcoin transaction, it is clear that Bitcoin is providing a valuable service. 
