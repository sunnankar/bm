---
layout: post
title: Bitcoin Mining Heart Attack
description: The only ironclad solution is to replace the sudden halving of the Bitcoin coinbase with a continuous, gradual decrease.
author: Bitcoin Mining
authorurl: /
published: true
---

<p>Special thanks to Marshall Long, Greg Maxwell, Mark Freidenbach, and Adam Back for related discussion.</p>

<h2 id="the-problem">The Problem</h2>

<p>This issue is one which <em>might disable Bitcoin completely</em>, requiring a (simple) hard fork to get it “unstuck”. This issue becomes more dangerous over the next 20-30 years (likely most dangerous in 2020-2028), but then quickly declines.</p>

<p>I’ll break it into two subproblems:</p>

<h3 id="subproblem-1-the-blockreward-halving-instantly-cuts-miner-revenues-by-a-huge-fraction">SubProblem 1: The blockreward halving instantly cuts miner revenues by a huge fraction.</h3>

<p>Of course, this assumes [1] that transaction fees are negligible and [2] the Bitcoin exchange rate never increases in response to the <a href="/what-is-bitcoin-mining-difficulty/">difficulty halving</a>.</p>

<p>Transaction fees are currently around 1% of miner-revenues, and no one expects this proportion to significantly increase anytime soon. Even if transaction fees were 50% of revenues (wildly optimistic), the reward-halving would still cut total revenues by (1/4), a sizable proportion.</p>

<p>The Bitcoin exchange rate is important to miners and shouldn’t change in response to the difficulty halving, at all. By <a href="https://en.wikipedia.org/wiki/Efficient-market_hypothesis">Weak Efficient Markets</a>, anyone who believes that the USD/BTC price will imminently double, should be buying immediately (and bidding up the price). Because of “saturation” Bitcoin might have some immunity to the EMH, but (like all EMH-resistance) this immunity is constantly hard at work, canceling itself out. </p>

<p><img src="/images/sp-1.png" alt="sp1" /></p>

<p>Figure. On the left, the reward-halving dominates the block-reward; on the right, transaction-fee variance dominates.</p>

<h3 id="subproblem-2-the-difficulty-adjustment-process-causes-miner-homogeneity">SubProblem 2: The difficulty adjustment process causes miner homogeneity.</h3>

<p>Every two weeks, the total costs of mining (namely, the difficulty) reset such that the average miner achieves an expected <a href="http://www.investopedia.com/terms/e/economicprofit.asp">economic profit</a> of zero. Those in the bottom half can no longer afford to operate, and they (eventually) switch their miners off and drop out of the system.</p>

<p>Of course, this is an academic simplification of actual mining. It ignores [1] uncertainty (in all factors) and [2] ‘permanent advantages’ (“free” power, geographic distribution of energy sources, ASIC engineering secrets), but those artifacts merely slow the inevitable: this is an ever-present, fundamentally underlying process of filtration.</p>

<p>As the lower-quality miners get filtered out, <a href="https://en.wikipedia.org/wiki/Red_Queen_hypothesis">the filter reacts to the increase in quality</a> by becoming more intense. Eventually, only a few top quality miners will remain. These miners might follow <em>different</em> best-practices (all the solar-power miners might have a different set of best practices than the hydro-power miners), but <strong>all miners should eventually have tiny, and <u>equal</u> economic profit margins</strong>.</p>

<p><img src="/images/sp-2.png" alt="sp2" /></p>

<!--
Because an average is just a single number, it necessarily contains less total information than the distribution from whence it came.
-->

<h3 id="combined">Combined</h3>

<p>The problem is when these effects happen at once.</p>

<p><img src="/images/prob.png" alt="Prob" /></p>

<p>In short, we will reach a day when all miners have small profit margins, and then a blockreward-halving will slash their revenues in half. <strong>The result will be that not half, but <i>all</i> miners will shut off their mining rigs.</strong></p>

<p>You see, the difficulty won’t re-adjust (decrease) until (on average) 1008 blocks later. (In fact, we always <a href="http://bitcoinclock.com/">know exactly</a> the number of blocks.) So, even miners who plan to turn their mining rigs back on, post-difficulty-decrease, would have them off for this brief unprofitable period.</p>

<p>The problem is that it might not be brief. The difficulty adjustment period, which would normally last two weeks, is counted in <em>blocks</em>, not human-time. So it could actually last forever.</p>

<p>(Or, until someone manually hard-forked the network [to something with 60% difficulty], thus giving the stalled engine a jump.)</p>

<p>But that’s not all: even if most of the miners stayed on, the resulting uncertainty (or merely the increase in confirmation times) might cause a Bitcoin currency crisis. Abnormal tx-fee and exchange-rate volatility would increase Bitcoin’s risk premium, harming Bitcoin’s value-proposition as money. One example: were the USD/BTC price to fall by half, the blockreward-halving would have an effect more-resembling a blockreward-<em>quartering</em>. A falling USD/BTC price widens the gulf between mining costs and revenues, and makes the problem <em>even worse</em>, potentially resulting in a death spiral.</p>

<p>In the near term, miners are different enough (and the exchange rate is already volatile enough) such that most will survive the halving, and in the long term, Bitcoin might be sufficiently important such that transaction fees simply increase (in step with the higher confirmation times) to offset the problem. However, in the medium term, namely the year 2020, it is potentially disastrous.</p>

<h2 id="solution">Solution</h2>

<h3 id="what-wont-work">What Won’t Work</h3>

<h4 id="do-nothing">Do Nothing</h4>

<p>We might hope that miners, out of the kindness of their hearts, would simply keep mining (at a loss) to prevent Bitcoin from dying (and prevent their specialized hardware from depreciating to zero).</p>

<p>This isn’t acceptable to me - in equilibrium, miners consume all of their BTC revenues (which are all spent on operating or capital costs), and it is easy to imagine miners who plan their capital investments to align with the 4 year Bitcoin halving cycle (“we’re going to run these into the ground until the reward halves, and then replan from there”). [Mining hardware](/bitcoin-mining-hardware/) itself rarely lasts longer than 2 years, anyway.</p>

<p>The cost of altruistic mining can be roughly estimated. Currently, miners collectively earn 2016*25*300 = over $15 million dollars in revenue each difficulty cycle. These inputs might all change, of course, but, if they didn’t, the 2016 halving would slash this revenue by over $7,000,000. If miners were already running at cost, this 7M figure is the cost of keeping 10 minute blocks. Worse still, such altruism would <em>prevent</em> the subsequent difficulty adjustment from being representative; miners would only keep themselves trapped in Altruism Prison, losing money the whole time.</p>

<p>Moreover, “we” are increasingly unable to “help” the miners…ongoing professional hardware-specialization makes our “civilian hardware” (home PCs, phones) overwhelmingly irrelevant.</p>

<h4 id="upon-each-blockreward-halving-also-halve-the-difficulty">Upon Each Blockreward Halving, Also Halve the Difficulty</h4>

<p>Clearly the intent was to cut profits in half, not revenues. Unfortunately, there’s no clear way for the protocol to learn about miner’s profit margins.</p>

<p>One (hard fork) idea is to simultaneously halve the difficulty (with the reward); this <em>might</em> work, but instead it might simply delay the problem for 2016 blocks (which might all mined in one week, instead of two), at which point the difficulty would double…landing us right back where we started. If ‘halving the difficulty’ perfectly halved the total costs of mining (including overhead and labor), and the blockreward perfectly halved the revenues (ie, transactions fees were nonexistent and the exchange rate never changed), then it might work, but difficulty has a stronger relationship with <strong>time</strong> that it does with cost (and revenues are driven mostly by Bitcoin’s exchange rate).</p>

<p><img src="/images/in-one-image.png" alt="ProbImage" /></p>

<p>It seems that there’s only one way to guarantee that the problem be removed.</p>

<h3 id="smooth-the-deflation-out">Smooth the Deflation Out</h3>

<p>The only ironclad solution is to replace the sudden halving of the Bitcoin coinbase with a continuous, gradual decrease.</p>

<p>Something like this:</p>

<p><img src="/images/reward-eq.png" alt="reward-eq" /></p>

<p>Where r refers to the quantity of BTC released per block, t refers to the block number (ie, “time”), and lambda is some parameter. (Little t is used to index on r, but big T refers to the actual number itself).</p>

<h4 id="fork-types">Fork Types</h4>

<p>This can be done either with a hard fork or with a soft fork.</p>

<p>While any hard fork can replace one issuance policy with another, a soft fork must obey the original issuance rules. This can be done by storing coins in a kind of “softfork reserve account”, with special rules allowing only <em>future</em> block-finders to withdraw. Because the bank can never have a negative balance under soft fork, such a change would involve some sacrifice on the part of the miners (they’d be losing coins that they’d otherwise be able to keep). A hard fork, freed from the original rules, can reduce this problem.</p>

<h4 id="details">Details</h4>

<p>To take a first look at the potential issuance schedule and its effect on miners. This analysis is oversimplified (a year spans just a single row, instead of 6*24*365 = 52,560 rows), and I would (obviously) improve it before making a formal proposal. The specific numbers are, of course, irrelevant; only the concepts are relevant.</p>

<table>
  <thead>
    <tr>
      <th>.</th>
      <th><strong>Original</strong></th>
      <th><strong>Hard Fork</strong></th>
      <th><strong>Soft Fork</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lambda (Annual)</td>
      <td>N/A</td>
      <td>.012<strong>371160</strong></td>
      <td>.012<strong>166134</strong></td>
    </tr>
    <tr>
      <td>PV Impact (BTC, at 5%)*</td>
      <td>N/A</td>
      <td>-81,442.1</td>
      <td>-119,080.3</td>
    </tr>
    <tr>
      <td>BTC in Year 2168</td>
      <td>21,038,400.0**</td>
      <td>21,038,399.7</td>
      <td>20,973,054.6</td>
    </tr>
  </tbody>
</table>

<p>*Obviously, I used math to minimize this value in each case.
<p>**This value is not 21 million, because of leap years (and other simplifications, which are consistent across scenarios). So, “Hard Fork” is accurately recreating “Original” (and not a second error).</p>

<p><img src="/images/alt-issuance.png" alt="Issuance" /></p>

<p><img src="/images/btc-reserve.png" alt="Issuance" /></p>

<p>The soft fork eventually starts accumulating larger-and-larger proportions of tinier-and-tinier blockrewards, such that ~65,000 BTC remain trapped in the bank forever.</p>

<h4 id="costs">Costs</h4>

<p>Most of the damage (~ 81/119 ~= 68%) is done whether the fork is soft or hard.</p>

<p>This damage (the cost to miners, of loaning these coins to the bank without compensation) would be substantial: at a market price of $250/BTC, the 119K BTC are worth nearly $30,000,000 USD.</p>

<p>Of course, mining revenues are mostly driven by the exchange rate itself, so we have to weigh this cost against any BTC appreciation that might occur as a result of this change.</p>

<h4 id="how-the-soft-fork-might-work">How the Soft Fork Might Work</h4>

<p>As mentioned, the soft fork would still allow miners to “mine” 25 BTC per 10 minutes. Some portion of these 25 would simply be ‘frozen’ (metaphorically, they would be “placed” into a “miner-bank”).</p>

<p>We might require the “bank” to be an <a href="https://en.bitcoin.it/wiki/Script#Anyone-Can-Spend_Outputs">‘ANYONE-CAN-SPEND’</a> BTC address, yet with miners enforcing a pre-specified policy for spending from this address. Later, when someone mines a block that needs to ‘withdraw’ from the bank (during the 2020-2038 years, where the smooth curves are above the blue jagged line) the refined protocol can simply agree to allow a certain number of BTC to be transferred from this address to anywhere (knowing that the winning miner will give it to him or herself).</p>

<p>This would be the first soft fork which is not obviously a <a href="https://en.wikipedia.org/wiki/Pareto_efficiency">Pareto improvement</a>: it harms a subset of individuals (the miners) –if we neglect to consider that miners would also be harmed by Bitcoin’s collapse as a result of this unfixed problem. This is particularly interesting because miners are the very group which turn soft forks on and off. At around year 2020, the ANYONE-CAN-SPEND address will have accumulated over 450,000 BTC (today, worth over $120 million).</p>

<p>To prevent an interesting situation might emerge where miners attempt to raid those funds, possibly by bribing users to upgrade their software, or by lobbying in some other way, notice:
<p>1. Regular users would almost certainly have upgraded their software by then (making this a little more like a hard fork).
<p>2. An un-forked block is too valuable for its own good. Worth more than surrounding blocks by a factor of 72,000 ( = 450,000/6.25), The Block that rewards all these coins would be fought over endlessly (as new miners will most certainly jump online to mine this single block, and then refuse to participate in a chain that does not allow them to win). So, threats to start a fight aren’t very credible.</p>

<h3 id="how-did-this-happen">How did this happen?</h3>

<p>It seems strange to see a design flaw in Bitcoin, something which was otherwise so perfectly-crafted. I’m inclined to think that the inherent fairness of the static “50 BTC per block” appealed to Satoshi; that he anticipated a great deal of criticism off the bat, and didn’t want to be hearing “I don’t want to join this! You’ve already started mining and got all the easiest blocks for yourself!”.</p>

<p>And, it certainly is easier to explain “you get 50 of them with each block, but this number drops by half every four years” than it is to say “ ‘a formula’ determines how many BTC you get”.</p>
