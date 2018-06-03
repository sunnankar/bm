---
layout: post
title: USB - Bitcoin Mining Setup Guide
description: USB - Bitcoin Mining Setup Guide
author: Bitcoin Mining
authorurl: /
published: true
---


Have you purchased a <a href="http://geni.us/gekkoscienceusb">USB</a> Bitcoin miner and need to learn how to set it up?

### USB - Bitcoin Mining Setup Guide

<iframe width="700" height="394" src="https://www.youtube.com/embed/fJSITD0sPVY" frameborder="0" allowfullscreen></iframe>

### Additional Supplies you will need

<ul><li><a href="http://geni.us/raspberrypi">Complete Raspberry Pi Kit</a></li>
<li><a href="http://geni.us/10portusbhub">10 Port Powered USB Hub</a></li>
<li><a href="http://geni.us/usbfan">USB Fan</a></li>
<li><a href="http://geni.us/usbcable">Micro USB Cable</a></li>
<li><a href="http://geni.us/ethernetcable">Ethernet Cable</a></li></ul>

<div class="hardware-comparison">
{% for miner in site.data.hardware %}
{% if miner.cat contains 'usbminer' %}
{% include hardware-compare.html %}
{% endif %}
{% endfor %}
</div>

### Transcript - USB - Bitcoin Mining Setup Guide

What's going on every one?  This is Fred and today we're going to build a Bitcoin miner.  All right.  So, if you're unfamiliar with Bitcoin I do have another video that has all the 10 things that you need to know about Bitcoin.  So, give that a watch, get caught up, come back and we'll get started.

So, here’s all the pieces that you need to start building your own Bitcoin miner.  I will place some links to all the parts down below so that you can get started on your project.  Now, the first item that you want to pick up is called a Raspberry Pi.  Now, this is basically just a credit card sized computer.  Now, the nice thing about having one of these is that this is a completely separate unit from your personal computer, which means you can mine for Bitcoins 24x7 without affecting your daily computer usage.  Now, when you're picking up one of these you want to make sure that you get the version B.  Now, due to its size it's very efficient on power consumption.  This entire computer can be powered by USB cable.

The next item on the list is just a plastic case for your Raspberry Pi.  Now this is an optional item but I highly recommend it because it will protect your Raspberry Pi in case anything falls on top of it.  Plus, it's very inexpensive.  This one was about $10.  Okay.  So, you'll also have to get an SD card.  Now this SD card basically acts as the hard drive for your Raspberry Pi.  Now you want to get a 4 gigabyte minimum on this card.  Now I have an 8 gigabyte just because it was on sale and easier to find at the time.  The thing that you want to focus on is getting a class 10 SD class.  And to power your Raspberry Pi you will need a micro USB to USB cable.  So, all the parts that I just listed basically creates a separate computer.  Now this computer will run the mining software.  All the parts that I list next will be the [actual mining hardware that will mine for Bitcoins](/bitcoin-mining-hardware/).

Okay, so this is the actual hardware that mines for Bitcoins.  This is called an ASIC miner or a Block Erupter.  Now this is basically just a chip that has one job and that is to mine for Bitcoins.  It could be powered by USB so you could plug a bunch of these into a USB port.  Now this specific one mines at a rate of 335 megahashes per second.  So, what I have is I have six of them so these will give me over 2 gigahashes of mining power.  Okay.  And to power all those Block Erupters you need to get a good quality powered USB hub.  Now the keyword here is powered meaning that there is an eternal adapter that you plug into the wall outlet.

Now this will give it an even power across all of the USB ports.  Now you don't want to cheap out on this you definitely want to get a good quality hub.  Now because your Bitcoin miner will be running 24x7, those Block Erupters tend to get pretty warm.  Now what you can do is just get one of these USB fans, plug it into the USB port and this is a very good inexpensive way to keep things cool.  Okay.  Lastly, all you need is an Ethernet cable.  Now this is what’s going to get your Bitcoin miner connected to the internet.  Okay, so that's all the hardware that you will need for this project.  Let's start putting everything together starting with the Raspberry Pi.

Okay, so the first thing you do is take apart the case and place your Raspberry Pi on the bottom piece.  Now just go ahead and line everything up and it should snap together, like so.  Then just go ahead and put the cover over just like that.  Okay, so as you can see your Raspberry Pi will have two USB ports.  A spot for your Ethernet connection it's going to have some audio and video outputs.  This slot is for the SD card.  Here is a micro USB to power the unit.  And then finally you'll also have an HDMI output so that you could connect this to a screen.

The next step is to insert your SD card into your Raspberry Pi.  Now this SD card is already loaded with my mining software.  Right now I'm using an operating system called MinePeon.  Now if you’re not familiar with how to load up the software onto your SD card, I will be making another video going through the step by step instructions on how to do that.  But until then just take your Raspberry Pi and insert the card into its SD slot, like so.  Okay, now let's take a look at the USB hub.  Now this is not plugged in yet.  I just want to get everything installed prior to powering it up.  The first thing that I'm going to do is install the power cord for the Raspberry Pi.  I'm going to put it in the first slot right here and then move this off to the side for later use.

Next I'm going to start plugging in the Block Erupters one by one.  I have a total of six.  Make sure they're in there nice and firm evenly seeded.  Like I mentioned before, each one of these Block Erupters are able to mine at roughly 335 megahashes per second.  So with six of them I am getting roughly 2 gigahashes.  All right, so I have six of them plugged in right here.  And finally take your USB fan and just direct it above the Block Erupters.  Now this USB hub has a USB 2.0 connection right here on the end.  Now this is going to connect to the USB ports on the Raspberry Pi.  So the Raspberry Pi has two USB ports we are just going to need one of them, like so.

Next, take your Ethernet cable, connect it to the Ethernet spot on your Raspberry Pi and connect the other end to your modem.  Once you have everything plugged in just go ahead and power it up.  Okay, so as you can see by these green LED indicators it's just telling you that these Block Erupters are properly installed or in standby.  All you need to do now is go into your mining software, [set up your mining pools](/bitcoin-mining-pools/) and start mining.  It's just easy as that guys.

All right, so that's all the hardware that you will need to start mining for Bitcoins.  Now this mining rig is mining at over two gigahashes, which is not too bad considering the costs and simplicity of the entire project.  Now I'm going to show you a quick screen shot of the performance that I am getting with this mining rig using the MinePeon software.  Now if you need help setting up the mining software I will be uploading another video soon showing you the step by step instructions of how to get everything set up.  But this video should give you a good head start.  Start ordering the parts that you need and I will see you on the next video, but until then have fun mining guys.
