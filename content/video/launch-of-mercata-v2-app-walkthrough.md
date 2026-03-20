---
title: "Launch of Mercata V2: Vaulted Assets OnChain and App Walkthrough"
date: "2025-11-05"
description: "The STRATO Mercata team celebrates the launch of V2 with a comprehensive walkthrough of the new platform. The team discusses how V2 makes DeFi accessible through a point-and-click interface while maintaining the benefits of decentralized finance."
categories: "Videos"
img: /images/covers-for-spaces/launch-of-mercata-v2-app-walkthrough.png
featured: false
author: "STRATO Team"
authorTitle: ""
videoUrl: "https://www.youtube.com/embed/NPLeU3iVIMw"
---

On November 5, 2025, the STRATO Mercata team went live to celebrate the official launch of **Mercata V2** - a completely redesigned platform that transforms how users earn on tokenized real-world assets. This marks a major milestone in the evolution from V1's NFT marketplace to V2's DeFi-focused platform.

The session features Kieren James-Lubin explaining the technical evolution and design philosophy, Victor Wong discussing the earning opportunities and user experience improvements, and Michael providing a live demonstration of the app's key features including bridging, swapping, liquidity pools, and collateralized borrowing.

## Audio

<audio controls style="width: 100%; max-width: 600px;">
  <source src="/assets/audio/launch-of-mercata-v2-app-walkthrough.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>


## Transcript

<!-- TABLE_OF_CONTENTS -->

<a id="introduction-bonfire-night"></a>

### Introduction: Bonfire Night

[[0:00]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=0s) **Bob Summerwill:**
We're live for real.

[[0:03]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=3s) **Victor Wong:**
We are live, yes.

[[0:05]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=5s) **Bob Summerwill:**
We're live and we're live. So maybe this won't be so meaningful for the rest of you, but it is the 5th of November today, which in the UK is a very famous day of the calendar because it's bonfire night, or Guy Fawkes night, celebrating the burning at the stake, I guess, of Guy Fawkes, who was the guy who tried to blow up the Parliament in the mid-17th century. Oh, the Viva Vendetta guy. Viva Vendetta, so that's based on that.

[[0:49]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=49s) **Victor Wong:**
I mean, the poem says, remember, remember, right in the first line, right?

[[0:54]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=54s) **Bob Summerwill:**
That's right. So basically the deal there was that, I guess, annually you had like the king giving the speech in front of the parliament, you know, So you had like basically the royalty and all of the elite sitting in the hall. They like stuffing barrels of gunpowder underneath, but it was discovered at the last minute. So then there you go. You now have a burning of Guy Fawkes in effigy on bonfire nights to celebrate that it didn't happen. And yeah, so you have a doll or whatever that's the guy that you put on the fire. So anyway, happy bonfire night, everybody. Happy bonfire night.

<a id="v2-launch-celebration"></a>

### V2 Launch Celebration

[[1:45]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=105s) **Victor Wong:**
We should probably introduce Michael, because he's a special guest. Absolutely, yes.

[[1:52]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=112s) **Kieren James-Lubin:**
I guess he's a guest.

[[1:55]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=115s) **Michael Tan:**
We'll make him a regular, I assume. You guys see me on the telegraph.

[[1:59]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=119s) **Victor Wong:**
Michael, do you want to introduce yourself quickly?

[[2:02]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=122s) **Michael Tan:**
Yeah, I work on the sales side of the team. I'm going to be introducing the app today to you guys, and I hope you're excited.

[[2:08]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=128s) **Victor Wong:**
Well, you work sales, you're a dev, you're a front-end dev, you do a bunch of different stuff on the team.

[[2:16]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=136s) **Bob Summerwill:**
Got the moves. Let me just kick off. Hi. Hello, everybody. Welcome, welcome. So we did it. We launched V2. It happened. How does that feel?

[[2:33]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=153s) **Kieren James-Lubin:**
Man, I think, Bob, you may not be as tired, you know.

[[2:41]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=161s) **Victor Wong:**
Oh, he's gone away. Okay, he's frozen. He was filming. Yes, wow. There are a lot of sleepless nights and working through weekends. Oh, you are back.

[[2:58]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=178s) **Kieren James-Lubin:**
He was back. It was my problem. Okay. Yeah. It started spinning everything for a second and then I, and you all came back. Um, yeah.

<a id="evolution-from-v1-to-v2"></a>

### Evolution from V1 to V2

[[3:10]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=190s) **Bob Summerwill:**
So how's V2 being live? How does that feel?

[[3:15]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=195s) **Kieren James-Lubin:**
Much better than before. You know, it's still, uh, It's a funny thing. Do you ever feel good for a sustained period? I think not, but extremely happy that it's live. I think it would be maybe interesting for the audience to go into a little bit of what it is and also why it took so long.

At the end of 2024, we started to realize that there was a lot of demand for DeFi type features. So basically, Marketplace version one, or Mercado version one, if you will, was more NFT-ish. We had interesting and exotic things that might be numbered and a breadth of them. So this was, we have carbon offsets trading on there, whiskey barrels. Michael moved a lot of collectible shoes through the system. So truly, you know, fairly unique, at least down to like having a serial number or sometimes very unique stuff. So there was occasional one of ones on there. We dipped our toes into the art market a little bit with some collabs. And also more financialized stuff too. So the medals in particular being something that we've had for a long time.

And we kind of saw the most demand for the most financialized items. And it sort of led us to realize what people want from this technology. I mean, one way or another, you know, I think in the course of the company, obviously we did very enterprise stuff, a lot in the supply chain, and that kind of actually led very naturally to the unique item focus. And, but, you know, often everything in the blockchain space pulls back to some sort of financialization. And we kind of decided to stop resisting this impulse, you know, as the market seemed to be demanding it.

So we released, the other thing we realized is that in some ways, so you know, say your goal is to tokenize everything. Like you want all manner of real world value to be on chain, existing alongside truly, you know, digital native assets like Bitcoin ETH and so on. What would get the world to do that? And we thought the answer was making liquid trading markets where they didn't exist prior. And that is definitely still part of it. But, I think it is more about debt than it is about selling or transacting, right?

And so we kind of, on Marketplace version one, created a mechanism whereby you could borrow against collateral. It was sort of primitively done, but you could do it within the system. And it got great uptake. And then we said, all right, let's just make this stuff a little more DeFi.

And it just turned out that we were not expecting to do a relaunch. In fact, we were bringing folks on through Q1 and Q2 and TVL was rising and, you know, et cetera, more loan volumes and all that sort of thing. But we realized that we were hitting the limits of the system pretty quickly and that it would be just, you know, that we needed to at least change some of the way the internals worked and, you know, So we did a listing of our gold token with a small exchange. It was a good experience to work with them. But they had a hard time dealing with things as they are, as they were, rather, and found that just everyone wants the ERC-20 style. And that to make the capabilities, you know, sort of show the best of DeFi, it was like a huge, huge effort that turned into a full relaunch, which was never the goal at the outset.

You know, I'm happy to be on the other side of it. The system is definitely way better. It's a little bit different. There are some areas where we kind of, you know, took a shortcut on version one that made it kind of easy. And we've gone and made it say more decentralized now, which is definitely better, but there can be like rough edges around it. As a, for instance, we often had fixed pricing on marketplace version one or pure spot pricing. And we have swap pools now, which is great in that they let the market determine the price and get third-party liquidity and so forth. But then there's just, more variability on any given trade execution. And so these things will all sort of work themselves out over time. But huge effort, way better, way better. But we ended up in more of a different place than I intended at the outset. Let me throw it over to, say, Victor, just on all this.

<a id="defi-earning-opportunities"></a>

### DeFi Earning Opportunities

[[8:55]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=535s) **Victor Wong:**
Yeah, I think the thing is that really, I think our core insight was really if you think about how people in the real world really accumulate wealth, it's really through like small accumulation over time of interest, you know, like think about a savings account, a retiring account, all these things. People aren't like day trading constantly, right?

What we realized is that, you know, it wasn't enough to simply be able to buy new exotic or not even exotic, but tokenized things in the real world, but really to turn those into things that were revenue generating for you individually and earning over time. So it should, you know, you should be able to have multiple ways except for trading to earn things. And we realized that DeFi had kind of answered this, but it did it in a way that was too complicated for the vast majority of people to understand.

I mean, you know, it was only a year ago that Vitalik himself was like, someone needs to explain to me where DeFi yields are coming from, right? Like, if he couldn't understand it, you know, how could the rest of the world kind of get into it? And we wanted to build a system that would allow the rest of the world to really kind of get those DeFi earning potentials.

And, you know, I think there were two things that really came out of it. One is that we had to kind of combine the pool of assets to not just be about real world assets, liquid real world assets, which we started with, but we also had to bring in, you know, high quality crypto assets. And then the second thing is that we had to offer different paths of earning, like you could be able to put some of those assets into a liquidity pool that you would lend out to other people and get interest on that. You would be able to go into swap pools and see when their prices are different. You should be able to earn directly if you put some of your things into a savings account that people could offer. So basically, v2 offers all of those paths for users, which we're really, really excited about.

[[11:16]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=676s) **Bob Summerwill:**
Yeah, I mean, what the point you were saying about trading specifically, Victor, you know, sort of a stat I've repeatedly said parroting from a prior project was that You know only about 5% of people who try and day trade actually like make a profit Yeah, most people are terrible absolutely terrible at trading because you just end up trading your emotions right and you're just scared at the wrong time and you're not brave at the right time and you just It's very very easy to you know to put yourself in a worse position and So, you know, having passive yield is absolutely, you know, a big need for a huge amount of people.

[[11:59]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=719s) **Victor Wong:**
Yeah. I was really surprised that even in the crypto world, the amount of people that had exposure to DeFi was relatively small. Like, I mean, you know, and I think people didn't understand how well established those patterns have gotten. It's funny that, you know, Vitalik has just woken up to this after like last year saying I didn't understand, you know, said, you know, the future of Ethereum is going to be based on low risk DeFi, right. So that's what we're really talking about.

[[12:30]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=750s) **Bob Summerwill:**
Well, EF are using DeFi themselves now, finally. Exactly. For like 10 years, they were just like market dumping to raise funds. And it's like, you know, the thing that's kind of got built here because of Ethereum.

[[12:44]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=764s) **Victor Wong:**
Well, and the world fundamentally, DecurancePort runs on credit, right? And DeFi has really solved the collateralized lending component in a way that is so seamless, like where else can you get a loan in like minutes, right? Place where you could do that in a reliable fashion. And I think it does it in a way that allows it to be much more transparent than, say, typical financial institutions, right? So, you know, the people that are benefiting from those loans are the other users, which is really exciting, I think, to us.

[[13:23]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=803s) **Bob Summerwill:**
So, I mean, how would you say V2 is different than existing, you know, other big name DeFi protocols.

[[13:34]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=814s) **Kieren James-Lubin:**
Yeah. It's, um, so it's very much, uh, has a point click philosophy. I think if you look at the app today, which Michael will show you, there are still details bleeding through that we will eventually kind of smooth out, uh, as appropriate, you know, you need to, you need the user to know what they're doing, but not quite know how it's happening, if you will. Give them the right amount of rope, et cetera. But it is much easier than other takes on how to do it, in my opinion.

Like, if you've got to do sort of the one wallet connect if you use the bridge in path. So probably easiest way into our system is to take some USDC and mint some of our stable token USDST. You can also go in with ETH, for instance, and then you'll be granted some vouchers, which will give you gas on bridge in. Once that's happened, you're in this sort of pleasant, let's say, essentially gas-free playground where you point and click like a normal Web 2 app.

And this philosophy extends further. So at the moment, we have just four swap pools set up, which we've seeded, and others have with some liquidity. We'll expand this over time, for sure. And eventually we'll go to sort of like a permission list listing structure, if you will. The reason we've kept it small to date is, you know, just to want to make sure everything is working, but kind of give you a little bit of a little less rope than the other platforms out there.

So if you go to Uniswap, for instance, you'll find the top pool is usually the top pool by volume. You can sort it by TVL if you want. And that tends to direct people's attention to whatever is trading right now. And, you know, the wildly variable APRs, APYs, et cetera, kind of encourage like an aping in sort of behavior. Our message is kind of more like, yeah, get into whichever assets you prefer. Maybe borrow conservatively and just kind of keep accumulating over time, basically. And so, It's not quite at a vanguard level, but more of a set it, forget it, be conservative, keep growing attitude that should show through within the system while still having flexibility.

The yeah so and it's I guess I would say batteries included they're actually two borrowing paths within the system so once you have collateral you can mint our stablecoin at a moderate interest rate and you can then put that into swap pools, you can put that into lending pools, and so on. Or you could just kind of go into the secondary market, which is a little bit more flexible in certain ways. So that would be swapping directly, lending pool, etc.

So, you know, I think we always, we don't aspire to the same ends, but look at projects like Hyperliquid where it's an alt L1, which means you've got control over the fees. The latency of the system is very good as compared with most Ethereum stuff. Let's say it's fast confirmations that are irreversible and that sort of thing. And it just gives you the latitude to make the user experience as good as possible, which will be a continual battle. But it's been a real step function change from both our old stuff and what's out there today.

<a id="app-walkthrough"></a>

### App Walkthrough

[[17:35]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1055s) **Bob Summerwill:**
Well, should we take a look? Let's take a look. Let's take a look.

[[17:39]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1059s) **Michael Tan:**
Oh, I guess I'm off. All right. Share my screen. Okay, everybody see my screen?

[[17:57]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1077s) **Victor Wong:**
Yes. Great.

<a id="bridging-and-swapping"></a>

### Bridging and Swapping

[[17:58]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1078s) **Michael Tan:**
So we're going to start with bridging in tokens. There's two ways to do it. The normal bridge. Well, first, you have to connect your wallet, of course, using MetaMask here. There's two ways to do it. If you want to bridge in ETH or any kind of like wrapped Bitcoin, Paxgear, I think we have something else forgot, but You bridge it into this. If you want to bridge in stables, I would go through the convert feature that will mint on bridge.

So we're going to bridge in USDC. This is the test net, by the way, if you want to try it out, just go to this link. But, and, uh, if you want to get some tests, USDC, Aave has some test bosses for USDC and USDT, but let's bridge in like a hundred bucks. Maybe let's do USDC, get USDT. Bridge it in, confirm, confirm, minting. So I bridged them in before just because this is a bit of a process, but you could also check the status here. Takes a while for the, takes a little bit for the server to update there, but there's an earlier one I did that completed. So let's just assume that it's already in here.

[[19:11]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1151s) **Victor Wong:**
We should be aware that delays are not on the Mercado side. It's on the Ethereum Sepolia side.

[[19:20]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1160s) **Michael Tan:**
Yep. So we're going to swap some right now. Let's swap some USDT. Let's do like, I don't know, 10. Let's get some EFST, swap. And also gas is used through USDST on our app as well. Similar to, similar to Hyperliquid actually.

[[19:44]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1184s) **Bob Summerwill:**
And what do you pay? What do you pay? What do you pay?

[[19:48]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1188s) **Michael Tan:**
It depends on the transactions, but some are one cent to three cents, depending on what it is. If it's three cents, it's probably three transactions in there. Yes.

[[19:58]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1198s) **Kieren James-Lubin:**
Yeah.

[[19:58]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1198s) **Michael Tan:**
Yeah. Usually like, uh, I believe a transfer, no, not a transfer. A bridging is two transactions. If I'm not mistaken.

[[20:09]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1209s) **Kieren James-Lubin:**
Although, yes, if you bridge in, you get minted vouchers. So the vouchers just give you free transactions, one to one with the cents, I suppose.

[[20:19]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1219s) **Michael Tan:**
Yep, vouchers, you can track here as well. And it's cool little, little widget. Anyway, so I swapped some assets and vouchers just to clarify.

[[20:30]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1230s) **Bob Summerwill:**
So that's kind of a little, a little, a little nice hack of getting past the Oh, my God, I haven't got any any ether for gas on this chain at this time, right?

[[20:45]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1245s) **Victor Wong:**
Yeah, exactly. It's a, it's a, it's an onboarding thing, right? Like, yeah, without one big limitation on a lot of chains, right? Like is, you can't even do your first transactions on most of them until you have the native token, right? So this allows us to bring people on without requiring that.

[[21:03]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1263s) **Michael Tan:**
Yep. So we've done the swaps. We're going to add some liquidity.

[[21:07]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1267s) **Victor Wong:**
I just want to mention, if you can go back to the stock. One really important thing with our system is it allows you to see sort of like the exchange rates internally, but also like the global exchange rate. That's where you see the exchange spot right under there. So that's the global right. This is something we learned from two of our trading contests. So where are like, you know, the arbitrage opportunities, you can see from these two things directly, instead of having to go somewhere else to figure it out.

[[21:39]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1299s) **Kieren James-Lubin:**
It's been funny on the on the live system. So it, for those who have used DEXs, you find, you know, if there's not that much liquidity, you can definitely push the price as reported and provided by the DEX off of the true market price and here we're combining a couple different data sources to get the spot price and that's just coming through at Oracle. Really here it's just a reminder the spot price is used for the health calculations when you borrow and The reason you want to do that is, you know, someone could do a big trade on one of the pools and manipulate that price and then liquidate someone or etc.

[[22:27]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1347s) **Victor Wong:**
As we saw very recently with the balancer attack.

[[22:30]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1350s) **Kieren James-Lubin:**
Yeah, yeah. So, but it's also just a reminder to get good execution. So, you know, for, for those who go try this if you do it on the live net, just, just make sure, you know, don't do huge trades on there just yet because liquidity is still coming in both from us and externals to make sure you get good execution.

<a id="lending-and-borrowing"></a>

### Lending and Borrowing

[[22:55]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1375s) **Michael Tan:**
Yep. And yeah, just the pool is not really relevant to the, the Oracle price, but yeah, everyone should keep that in mind as well. Anyway, we'll get back to the pool. So these are the lending pools that contribute to the borrow lending, which we'll get to in a little bit, but I can deposit a hundred in here. And then I will, it should admit me some MUSDST tokens, which is my pool token. That's represented of my, my lending pool contribution. Believe that is in these non-earnings right here. So let's also contribute some money to the swap pool so you can earn APY. Let's see what looks juicy right now. The silver, wow. Someone confirmed my deposit. And we are deposited and we're earning APY.

[[23:56]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1436s) **Bob Summerwill:**
and you're depositing both SILVST and USDST?

[[24:02]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1442s) **Kieren James-Lubin:**
That's right. When you input to a swap pool, you need to put in both pairs. And we have two modes here. It's probably just better to use the A and B mode. But you can do a single-sided liquidity add. But what it does is it does a swap so that you have an equal amount of the other one. And then it deposits it.

[[24:22]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1462s) **Bob Summerwill:**
So yeah, and to the convenience if you want to get into it, but you haven't got the right stuff.

[[24:30]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1470s) **Michael Tan:**
That's correct. Yeah, the buttons right here for everybody that wants to do it single side if they choose to do so. And let's see what we're going to let's do some borrowing. So I'm going to supply my whole ETH stack, $14. All of it. Don't do it all. Do all of it.

[[24:50]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1490s) **Kieren James-Lubin:**
He'll be okay on the gas though.

[[24:56]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1496s) **Michael Tan:**
So I have, let's see, I have $14. Oh, we got to hide some of these. $14.90 here. Because the LTV, I believe is about 75%. I have $11.

[[25:11]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1511s) **Kieren James-Lubin:**
You don't need to go all the way up to the LTV.

[[25:14]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1514s) **Michael Tan:**
Let's let's go all the way.

[[25:18]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1518s) **Victor Wong:**
This is risky.

[[25:23]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1523s) **Michael Tan:**
My hope that always be careful. Once you hit one, you can get liquidated.

[[25:30]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1530s) **Victor Wong:**
But we can also recommend basically, we can always just repay it.

[[25:38]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1538s) **Michael Tan:**
And it should update here. Buyer's remorse, instant refund, please. Overall, that's the app. It's kind of a combination of Uniswap and Aave for you guys more familiar with Web3. If you guys have any questions or you want a deeper walkthrough, feel free to message me on Telegram and we can hop on to Zoom.

[[25:58]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1558s) **Kieren James-Lubin:**
Yeah. But there you go, guys. Also, for the gold and silver bugs out there, we take physical deposits in addition to supporting some of the popular Well, actually, there's no as far as I know, there's no really popular silver token other than ours. But, you know, we'll take PAX G right now and soon the tether gold coin as well. And that can drive your borrowing power within the system, you can borrow and then turn around and lend CDP path, and that will make your gold into a productive asset.

[[26:36]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1596s) **Bob Summerwill:**
I hadn't thought that there weren't other silver tokens. That's a good thing.

[[26:39]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1599s) **Kieren James-Lubin:**
I looked, but they're very small to the extent that they're out there.

[[26:44]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1604s) **Victor Wong:**
I mean, there are a bunch of gold tokens at this point. A lot of gold. Yeah.

[[26:53]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1613s) **Bob Summerwill:**
So, yeah. So that was that.

[[26:57]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1617s) **Kieren James-Lubin:**
I have one more comment, actually. It's been kind of fun. So the prod system, you know, it's been online for a couple of days. And that, you know, The most trading has been on the ETH pool because it's been volatile, right? Sorry if anyone's gotten hurt out there in the last, you know, 24 hours or so. Michael likes to get liquidated, I know. So, you know, that's manifested very quickly on our system and it's where a lot of the the trading is, and it's, you know, still very much beta mode, but we have enough people that it's we're starting to see the pool prices actually converge to the spot price, because if it doesn't, there's an ARB in there.

So, you know, get in early, you know, don't don't put crazy amounts in. But because, you know, these systems become pretty efficient over time. But when it's not, there's money to be made. And finally, I will say, for those of you who are holders of CADA points, mostly from V1 or contest participation, we're going to monitor the system for a little bit, just make sure everything is working and so on, and then start to work towards the V2 points program. So not imminent, but coming.

<a id="wrap-up"></a>

### Wrap Up

[[28:23]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1703s) **Bob Summerwill:**
Excellent. Because we have a number of people asking that question.

[[28:28]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1708s) **Victor Wong:**
And I was just going to add, if you want to try it out now, you can just go to our updated website at stradomercada.com and click Launch App. One of the big efforts that we're going to is to improve the UX. So if anyone has any suggestions, please join our Telegram community and send us messages there. We'd love to hear from you. We're actively trying to improve it and achieve our goal of mainstreaming DeFi.

[[28:59]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1739s) **Bob Summerwill:**
And Colin there says, the whole platform works perfectly, just waiting on the rendering of front page to be visible for me. That's a friend, Krypto Tarzan, who was having the issue of seeing his Carter that were hiding under the non-earning assets tab.

[[29:21]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1761s) **Victor Wong:**
Yeah, just click that arrow button, yes, and you'll see.

[[29:24]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1764s) **Bob Summerwill:**
That's the sneaky arrows. When I do that, I get the old stuff. I think I've got some whiskey barrel bits in there and some other little... Oh, you get a whiskey barrel? Those are real, they're trading. I got some fraction.

[[29:44]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1784s) **Kieren James-Lubin:**
Did you really?

[[29:46]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1786s) **Bob Summerwill:**
Okay. I believe so. Right, right. That's cool. Yeah, I bought some bits and pieces, so yeah, they're still lurking there.

[[29:55]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1795s) **Kieren James-Lubin:**
Yes, yeah, we should. I know some people have exited those. They are, no pun intended, kind of illiquid, but there's been a little bit of whiskey barrel trading, so we should discuss offline.

[[30:10]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1810s) **Bob Summerwill:**
Holders are not being rugged. The whiskey's still out there.

[[30:15]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1815s) **Kieren James-Lubin:**
You know, you get the physical delivery at the end. Maybe not if it's fractionalized.

[[30:22]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1822s) **Bob Summerwill:**
At the end of the rail bed.

[[30:25]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1825s) **Kieren James-Lubin:**
That's right.

[[30:26]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1826s) **Bob Summerwill:**
Making delivery. Okay. Well, is there anything else anyone wanted to cover or we can wrap it up?

[[30:34]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1834s) **Victor Wong:**
No, we just look forward to you guys trying it and giving us whatever input. We're really excited for you to see this and it's still going to evolve a lot. Things have been moving quickly and will continue to be moving quickly on it. So exciting times for us.

[[30:52]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1852s) **Bob Summerwill:**
So yeah, just to head to [strato.nexus](https://strato.nexus), so S-T-R-A-T-O-M-E-R-C-A-T-A dot com, [strato.nexus](https://strato.nexus), and you've got the app there and all the information.

[[31:08]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1868s) **Kieren James-Lubin:**
My button in the top right.

[[31:10]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1870s) **Bob Summerwill:**
That's the best button.

[[31:11]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1871s) **Kieren James-Lubin:**
Then it takes us to another landing page, which we have to, of course, eliminate as well. It's better that this thing is up, but yes, this, you know. Sometimes you have to just make a choice and launch it. But yes, in time.

[[31:25]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1885s) **Bob Summerwill:**
Well, don't I say if you're not embarrassed a bit about the things that you release, then you release too late.

[[31:33]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1893s) **Victor Wong:**
For sure. Absolutely. Yeah. We are strong advocates.

[[31:38]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1898s) **Kieren James-Lubin:**
It's great stuff. It's like a teenager. You're like, I love this child, but he's still getting on my nerves a little bit.

[[31:47]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1907s) **Victor Wong:**
You can say that as a non-parent.

[[31:49]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1909s) **Kieren James-Lubin:**
As a parent, I can say that.

[[31:52]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1912s) **Victor Wong:**
They never get, it's just love.

[[31:54]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1914s) **Kieren James-Lubin:**
They're perfect. All love. They never get on your nerves? Never. They definitely get on your nerves. You're lying to me. You're lying to the internet.

[[32:02]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1922s) **Bob Summerwill:**
Children are never frustrating. Never.

[[32:05]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1925s) **Victor Wong:**
They're just perfect. They're balls of joy. That's it. Non-stop. Thank you.

[[32:14]](https://www.youtube.com/watch?v=NPLeU3iVIMw&t=1934s) **Bob Summerwill:**
Well, cheers to everyone. Have a good week.
