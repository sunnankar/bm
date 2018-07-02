---
title: How To Mine Smartcash?
description: How To Mine Smartcash?
author: BitcoinMining
authorurl: /
published: true
layout: post
---

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/Sh8P74Qs2Dg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></center>

<p>Smartcash will be huge soon, they have a very helpful and great community which will guide you on mining this coin using Windows, using anAMD GPU which will be the same process for Nvidia and just use the respective miner for Nvida and anything like steps and the same process with the other.</p>

<center><img src="/images/smartcash-mining-108.jpg" alt="smartcash mining"></center>

<p>At the moment, this coin is just a solo mining only space. This implies that you will just be mining using your own wallet and that means using the Smartcash wallet, with a tweak of Smartcash.conf settings and SGMiner.</p>

<h4>STEP 1 :</h4>

<p>Download your wallet on this link https://smartcash.cc/get-smartcash/ and just make it run for it to be able to update its settings with the current block.</p>

<center><img src="/images/smartcash-mining-101.jpg" alt="smartcash mining"></center>

<h4>STEP 2 :</h4>

<p>Step two, download the SGminer variant need to mine this coin https://github.com/genesismining/sgminer-gm/releases at the time of this post current version is SGminer GM 5.5.5 simply extract the zip, then goto the folder.</p>

<center><img src="/images/smartcash-mining-102.jpg" alt="smartcash mining"></center>

<p>You will have to edit the "start.bat" file with the credentials necessary for it to be working properly.</p>

<center><img src="/images/smartcash-mining-103.jpg" alt="smartcash mining"></center>

<p>It should be a one line code that looks like this,</p>

<center><img src="/images/smartcash-mining-104.jpg" alt="smartcash mining"></center>

<p>Change the -u parameter to a username of your choice and the then do the same for -P parameter as this is your password that you choose, do not share these details with anyone. once you are done save and exit.</p>

<h4>STEP 3 : </h4>

<p>Time to join the miner with the wallet and make it work, go to the following path on your computer C:\Users\yourusername\AppData\Roaming\smartcash change \yourusername to your computer user name. even if you cannot see the AppData path as it is defaul hiddden in Windows 10, you can goto the path by typing it in.</p>

<p>Once you have gotten to the smartcash path, we need to creat a .conf file, which will have the setting we need to make the wallet work with the gpu miner as a server.</p>

<p>The easiest way is to copy a .conf file from the SGminer directory, then edit it and rename, then you do not need to worry about trying to make one using notepad.</p>

<p>So to do this we went to our SGminer path were our GPU miner is and copied the sgminer-xmr.conf file now we past this file into our C:\Users\yourusername\AppData\Roaming\smartcash path, and edit the file by choosing open with and selecting notepad, make sure the tickbox is unselected we do not want this file associated with notepad.</p>

<p>Once the file is open for edit we want to delete everything in it, and then add the following lines in only.</p>

<p>server=1</p>
<p>daemon=1</p>
<p>rpcuser=yourusername</p>
<p>rpcpassword=yourpassword</p>
<p>rpcallowip=127.0.0.1</p>
<p>rpcport=9679</p>
<p>keypool=10000</p>

<p>Make sure to change the rpuser= to your username that you used in the SGminer setup and do the same for rpcpassword to the same password as used in the sgminer setup from above.</p>

<p>Once the file is looking like the above, click save and exit. now select the file and rename it to smartcash it will now be smartcash.conf.</p>

<p>Ok we are nearly there, one last step, and i am not sure why it is required, but i followed the instructions from the smartcash community and it works for me.</p>

<h4>STEP 4 :</h4>

<p>Download curl https://sourceforge.net/projects/curlforwindows/files/?source=navbar and extract the files.</p>

<h4>STEP 5 :</h4>

<p>Step 5 bringing it all together, exit the Smartcash wallet, for the moment. as we are going to begin the start up sequence to begin mining.</p>

<p>Lunch the Smartcash wallet (wait for it to sync)</p>

<p>Go to the curl directory and run the curl application </p>

<p>Now launch sgminer by running the "Start.bat" we edited before, this will launch SGminer.</p>

<p>After a few seconds maybe a minute it will look similar to this:</p>

<center><img src="/images/smartcash-mining-105.jpg" alt="smartcash mining"></center>

<p>You are now solo mining, after a while 1-3 hours at the time of writing you will find and process your first block.</p>

<p>Which is 250 SMART.</p>

<p>The following is what the miner looks like once you have mined more then one block.</p>

<center><img src="/images/smartcash-mining-106.jpg" alt="smartcash mining"></center>

<p>Every block you mine will appear in your wallet as an immature balance until confirmed by the network.</p>

<center><img src="/images/smartcash-mining-107.jpg" alt="smartcash mining"></center>

<p>You are now done, setting up and running the miner. I follow the startup sequence anytime I want to run the miner and it has worked every day for me so far.</p>

<p>I would suggest for those that want an easier way, then wait until pool mining is available.</p>
