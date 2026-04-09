---
title: "Online Oracles: TRUSTSHIFT, Ethereum, and the Reinvention of Trust"
date: "2026-03-25"
description: "William Mougayar joins Bob Summerwill, Victor Wong, and Kieren James-Lubin to discuss Ethereum's original social mission, why enterprise pilots and infrastructure alone are not enough, how AI can become the new UI for DeFi, his fundamentals-based Ethereum valuation framework, and the core thesis behind his forthcoming book TRUSTSHIFT."
categories: "Videos"
img: /images/covers-for-spaces/online-oracles-trustshift-ethereum-and-the-reinvention-of-trust.jpeg
featured: false
author: "STRATO Team"
authorTitle: ""
videoUrl: "https://www.youtube.com/embed/PgPBW2DXoa8"
---

In this **Online Oracles** episode, [Bob Summerwill](/people/bob-summerwill), [Victor Wong](/people/victor-wong), and [Kieren James-Lubin](/people/kieren-james-lubin) are joined by William Mougayar for a wide-ranging discussion about Ethereum's past, present, and possible future.

Mougayar reflects on the original promise he saw in Ethereum, argues that corporate pilots and infrastructure alone will not deliver blockchain's full potential, explains why AI can simplify DeFi by becoming the new interface layer, lays out his Internet-inspired framework for valuing Ethereum, and previews his forthcoming book *TRUSTSHIFT*, which frames blockchain's next act as the movement of trust rather than just the movement of money.

## Audio

<audio controls style="width: 100%; max-width: 600px;">
  <source src="/assets/audio/online-oracles-trustshift-ethereum-and-the-reinvention-of-trust.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

## Transcript

**Contents**

- [Introductions and STRATO demo](#introductions-and-strato-demo)
- [Ethereum's original promise](#ethereums-original-promise)
- [Enterprise pilots, middleware, and AI as the new UI](#enterprise-pilots-middleware-and-ai-ui)
- [Ethereum valuation and trust surplus](#ethereum-valuation-and-trust-surplus)
- [TRUSTSHIFT and the movement of trust](#trustshift-and-the-movement-of-trust)
- [Closing thoughts and book timeline](#closing-thoughts-and-book-timeline)

<a id="introductions-and-strato-demo"></a>

### Introductions and STRATO demo


**[[00:02]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=2s) Bob Summerwill:** Hello everybody. We are live. Welcome to Online Oracles where we are joined today by a frozen-screened William, so we will hope he returns.

**[[00:19]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=19s) Victor Wong:** From

**[[00:23]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=23s) Bob Summerwill:** one framer every 10 seconds here. Oh, are you back? William? You were, you were very frozen. Can you hear us?

**[[00:34]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=34s) William Mougayar:** Yes, I'm here.

**[[00:36]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=36s) Kieren James-Lubin:** Perfect.

**[[00:36]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=36s) Bob Summerwill:** Okay, you went very frozen there. So, so yes, we're joined today by. By. By William, which will be the main part of the. I was gonna say show. I don't know, show is quite the right word. Is it?

**[[00:52]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=52s) Victor Wong:** Episode, podcast,

**[[00:55]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=55s) Bob Summerwill:** broadcast, conversation. Before we do that, Michael has a demo for us. So over to you, Michael first.

**[[01:06]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=66s) Michael Tan:** Hey everyone. Just demoing my regularly scheduled slot. We have a couple of new updates to STRATO and the structure of finding things on the app. One would be this Fund option now, Bridge in Ethereum, Linea, and Base as we had it before, the new bimetals flow where it mints on purchase, which is slightly different than the swap that we're used to in this widget. Borrowing from the CDP that used to be in the Advanced tab is now here, Transfer here as usual, Withdrawals, the card when you connect your MetaMask card, Earn, contribute to the different pools in the lending pool and the vault here to earn different amounts of yield, and you can filter the pools here. Rewards coming back soon. Activity feeds same as it used to be, just check your activity. All activities on chain, all block events, also available on StratoScan. STRATO Stats, that's still here as well. Advanced, a couple things got moved around, but feel free to take a look if you're into some deeper features of the app. And referrals here in case you want to refer a friend and send them some assets onchain. Everything's a little different, but feel free to take a look when you get a chance, guys.

**[[02:37]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=157s) William Mougayar:** Okay, thank you, Michael.

**[[02:39]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=159s) Bob Summerwill:** Thank you, Michael.

**[[02:40]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=160s) William Mougayar:** All right, see you.

**[[02:42]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=162s) Victor Wong:** So.

**[[02:44]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=164s) Bob Summerwill:** So William, it's. It's great to have you on here before I murder your surname. Mugia. How. How exactly?

**[[02:52]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=172s) William Mougayar:** Good.

**[[02:52]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=172s) Victor Wong:** Pretty good.

**[[02:53]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=173s) William Mougayar:** Mugayar.

**[[02:55]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=175s) Bob Summerwill:** Excellent. That's great. So. So yeah, I mean William, you are not at all new to the Ethereum space. I only recently learned that you first met Vitalik on the 1 January 2014 on the opening night of Anthony Diorio's bitcoin decentral. The same, same night that Joe Lubin also joined the journey. So you are were an author of firstly the Business Blockchain which was published in 2016. You spoke at DEVCON 1 in 2015. You, you wrote a. A blog on the Official ethereum post in 2015 as well about. I can't remember quite the title there. You have a forthcoming book Trust Shift and are a self described Ethereum maxi realist. So could you give us a summary of your journey? Like how did you get involved here and what were you doing before?

<a id="ethereums-original-promise"></a>

### Ethereum's original promise

**[[04:01]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=241s) William Mougayar:** How did that happen? Sure, sure, it's good to be here. Hi everybody. So I've been in the space for a long time. My whole career has been in technology, in sales and marketing, a bit of engineering. Early on my blockchain experience started perhaps in 2011 or 12. At the time I had just finished one of my startups was sold and in early 2012 I had lots of time to think about what's next. And at the time Bitcoin was the main thing. So I immersed myself and started to read about it and try to understand it. And what dawned on me is the fact that I did, I put two and two together because around 2001

**[[05:05]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=305s) Victor Wong:** when

**[[05:05]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=305s) William Mougayar:** the Internet crashed, if you remember, we saw the first version of peer-to-peer technology and that was with Napster and that was all about file sharing. At the time I was running a website called Peer Intelligence, so I was keeping track of about 75 different technologies focused on file sharing. But then Napster took a good thing and turned it into a bad thing because it started getting used for copyright infringement. The government stepped in and killed not just Napster, but a lot of the technology with it as well. And what's funny is today when you look at Spotify, Spotify is like Napster but with the rights and the licensing. My first book was written in 1996 or 1997 about the Internet, about e-commerce specifically, and I had several pages in there about digital cash. At the time it was called DigiCash and CyberCash, but they had not solved it.

**[[07:14]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=434s) Bob Summerwill:** The.

**[[07:18]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=438s) William Mougayar:** The problem that Bitcoin solved was that it no longer had to be used with a database. So that was the issue. I had seen the first version of CyberCash, but when I saw the Bitcoin paper, I realized that file sharing and the transmission of money without intermediaries were finally coming together.

And then I met Vitalik on January 1, and he went even further. What struck me very early on was the human element to Ethereum. Vitalik's vision was not just about the movement of money. He wanted Ethereum to be a societal catalyst.

Here we are 12 years later, and I think the Ethereum Foundation may be trying to bring things back to those roots. Ethereum is not just about sending money from A to B, and it's not just about institutions adopting it to save money on their own processes. We have to use Ethereum for doing new things that we could not do before. That's the real asset test.

**[[10:41]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=641s) Bob Summerwill:** I remember a particular phrase that Vitalik said at one point which was talking about an almost infinitely long tail of business process improvements. It's like that's a boring potential end state. So hopefully you've got something a bit exciting on the front end at least.

<a id="enterprise-pilots-middleware-and-ai-ui"></a>

### Enterprise pilots, middleware, and AI as the new UI

**[[11:04]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=664s) William Mougayar:** Yeah. Was he referring to the businesses adopting blockchain to just improve their processes instead of doing.

**[[11:16]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=676s) Bob Summerwill:** Yeah, yeah.

**[[11:18]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=678s) William Mougayar:** There's nothing wrong with that because I was involved in another technological phenomenon that was very popular in 1989 and 1990, if you remember. It was called reengineering. One of my last jobs at HP, I was the reengineering czar. So I was in charge of process reengineering of technology for all of Canada, and we were plugged in with the worldwide team.

If you were an IT or CIO leader at the time, the best thing you could do was use technology to reengineer processes. The idea is that you don't just put a Band-Aid on the old process. You throw it out and invent a new one.

The blockchain is no different. The Internet enabled some companies to reengineer processes, and blockchain is allowing companies to reengineer some processes too.

I heard you talk about this just a few minutes ago before we started. There's a lot of activity right now in the corporate and institutional world, and I'm getting that vibe as well.

I was in New York two days ago listening to a couple of events, and it's reminding me of what was going on in 2016 and 2017 when blockchain first came along.

I was in boardrooms, invited at the highest levels. Fortune 100 companies were calling me and wanting to understand how to put a blockchain strategy together. At the time there were lots of pilots, if you remember.

**[[13:33]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=813s) Victor Wong:** I mean, we built a lot of them.

**[[13:40]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=820s) William Mougayar:** So that's the issue. They didn't go too far. Big companies are notorious for starting pilots and giving you a hundred reasons why they will not continue with them. I'm afraid we're going to get a bit of the same flavor right now, maybe with different players to some extent.

Pilots don't cost them too much. They'll throw a hundred thousand, five hundred thousand, a million dollars, even five million here and there. For big companies, that's nothing.

They'll start a pilot tomorrow on something. It gives them a bit of hand-waving mojo so they can say, "Hey, we're doing this. We're serious. We have six people doing this in the corner over there." Now bring that to the boardroom. Good luck.

I'm sure we're going to get further than we did in 2016 and 2017 because the technology is better, but I can promise you not all of these pilots are going to get somewhere. Corporations can only go so far in reinventing themselves. It's the innovator's dilemma.

Big companies are never going to shoot themselves in the head. The most they will do is shoot themselves in the foot. They can take a small amount of pain, but they will not reinvent businesses. Everything has to be a tuck-in. Everything has to go under their existing process.

The starting point is not, "Here's something new." The starting point is, "That's how we do things. Let's see if we can do it a little bit better. Can we tuck blockchain in underneath?"

Even with stablecoins, for what? For a dropdown choice. It's a tuck-in. Okay, it's good, but it's not going to change the world, is it?

**[[16:08]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=968s) Victor Wong:** Yeah, it's funny you should say this because we're at the Digital Asset Summit and I was listening to one CEO of a major bank talking about how it will use Ethereum or other L1s and saying, "Oh yeah, but the problem is we need these features, so we're having conversations with them." And I'm like, who are you having conversations with? This is a decentralized protocol. It's not a company that you work with. It's infrastructure

**[[16:38]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=998s) Bob Summerwill:** that you use I remember hearing very similar things, you know, back in the day of, you know, yeah, we'll do a partnership with Ethereum. What does that even mean?

**[[16:53]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1013s) William Mougayar:** Yeah, so that's where we are right now. Unfortunately, I think there are too many infrastructure efforts at once. We talked about this three years ago: too much infrastructure, not enough apps.

There's so much infrastructure already. How much more infrastructure do you need? Let's go and build some apps. Let's go and do some user-facing stuff.

One area of the blockchain world that has not matured as much as I would have liked is the part between the infrastructure and the apps. I call that middleware. Some people call it primitives, but it's the glue between the infrastructure and the applications.

We need more services in the middle because applications that go straight to the infrastructure are harder to write. If you touch the infrastructure directly every time, it makes things harder. Every time I think of BlockApps, that's what you were doing. You had some middleware and you made it easier.

**[[18:11]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1091s) Victor Wong:** Yeah, that's right.

**[[18:14]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1094s) William Mougayar:** You have to insulate the application developer from the infrastructure. So I'd like to see more of that. I like to see more of these tools in the middle because that's what's going to allow apps to take off. I mean, that's how the Internet took

**[[18:30]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1110s) Bob Summerwill:** off,

**[[18:32]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1112s) William Mougayar:** because we had the WordPresses of the world. That's middleware, and it made things easier to develop applications.

Now we have AI, obviously, and it's a bit of a shit disturber, but it's a good shit disturber because you can use it to your advantage.

You can fake middleware by interacting with something like Claude. You become the developer by just telling it what to do, and you become the middleware on the fly.

I'd like to see more of that. I don't know, have there been blockchain apps developed with Claude necessarily? We have user agents, but that's still a personal thing. If you're smart and you have a user agent doing stuff for you, I can't use it myself. I have to reinvent it myself.

**[[19:49]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1189s) Kieren James-Lubin:** There's been an uptick. I can say we're very heavy AI users at block apps and it just makes everything faster, even the review side, the security side. I kind of think we've Seen a couple of these DEFI hacks lately and I bet they're using the AI to do it. Scan all the old contracts and, and so on and find things people have missed. So it's super fast, it's sophisticated and to your point, it has made the interface layer in a way less essential.

**[[20:22]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1222s) Victor Wong:** Right.

**[[20:22]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1222s) Kieren James-Lubin:** Like the. IT just if you give it something, you know, after a couple tries, it will figure out how to write to the API and then. Yeah, you're talking to it in English, you know, that's ending up being. And so in some ways were short new ideas more than we're short coding execution capacity, you know, in the.

**[[20:49]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1249s) William Mougayar:** Exactly. I did something, I did an experiment last week after the SEC published their March guidance. I'm not sure if you saw that.

**[[21:00]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1260s) Victor Wong:** Yeah, yes. I saw the head of the SEC talking about this week too. He was jumping

**[[21:07]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1267s) William Mougayar:** the document and I turned it into a small mini-LLM. I added some other documents too because I follow the regulation space quite a bit, as you know.

I gave it some instructions and put it on a website called `asksec.org`.

You can go there and ask it any legal compliance information about any token, either current or future. You could say, "Assess the ETH token," for example, or "Assess the Canton token against the framework." That's all you have to say.

It will analyze the framework, give you an assessment, and apply it on a chart to tell you where it fits, whether it's a security or a commodity.

You can even give it your own design and say, "I'm thinking about developing a token that will do this and this and that. What do you think?"

It's going to use that information against the SEC framework and give you an assessment. I'm surprised I didn't get a lot of hits on it, but something like that I think is very valuable.

**[[22:32]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1352s) Victor Wong:** For a long time people have complained about blockchain UX. One of the things we see now is that AI can make this a lot simpler because what people want to do is simple in their heads, but in blockchain it gets broken down into multiple transactions. AI can act as that intermediary and simplify those steps.

**[[23:13]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1393s) William Mougayar:** Yeah, I mean one area that I think is ready for this is defi.

**[[23:17]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1397s) Victor Wong:** Oh yeah, absolutely.

**[[23:18]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1398s) William Mougayar:** I mean look at Aave and Morpho. Those DeFi user interfaces are not very friendly. You have to go find the market you want to borrow on or trade on, and it's like looking at a spreadsheet. You have to squint a little bit and look left and right.

Why can't I just tell it, "Give me the markets where I can take a loan with stETH. I have USDC. That's it, and I want to see that." Instead, you have to go search and make sure it's the right one and not some other one.

If you make a mistake, that's exactly why this area is ripe for AI. I hope the next iterations of app interfaces do that.

**[[24:22]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1462s) Victor Wong:** I can tell you we're working very hard on that because DeFi has produced many of the real innovations, but the limitation is that, as you said, they're too complicated to use.

**[[24:36]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1476s) William Mougayar:** Like I've been saying, this AI is the new ui.

**[[24:39]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1479s) Victor Wong:** Yeah.

**[[24:40]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1480s) William Mougayar:** And nobody needs more better UI than

**[[24:44]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1484s) Victor Wong:** Crypto and DeFi in particular because there

**[[24:49]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1489s) William Mougayar:** is a lot of traction right now and there are some small cases. Have you played with Banker B A, N, K R?

**[[25:00]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1500s) Kieren James-Lubin:** Yeah, I think it pinged us on X one time as I've checked it out a little bit.

**[[25:04]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1504s) William Mougayar:** It's a starting point. It's not too bad. You can say, "Create a token," and tell it to create a token with a billion units or something like that, and it will do it for you.

There was an app where you could do sports betting by just talking to it, Bracky Sports. I'm not sure if they pivoted or are not going to continue.

But we need more of those because the interface is going to be more natural language. More than just going to a website, figuring out where to click, and clicking on a website is going to be a thing of the past, at least for the consumer.

**[[25:54]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1554s) Bob Summerwill:** Post-app era is what I call it. Applications are just going to go away.

This whole waterfall concept of, "What's our market? What are the average users going to be like? What will their profiles be like? What kind of things might they want in terms of complexity and simplicity?" and then mapping that out into a roadmap of features and milestones, it just breaks down.

You spend months building this website or app that you hope will meet the needs of some people you've mostly made up, it totally fails, and you've spent an incredible amount of time on it.

**[[26:36]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1596s) William Mougayar:** Yeah, the website is going to be more in the background. The website is going to be the model.

**[[26:43]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1603s) Kieren James-Lubin:** Yeah. Everything is an API now, even a website with AI. And it's interesting that it will all work in the user's favor, we hope. We got this very long era with the social media companies locking everyone's data in and so on and so forth. But now me personally, I operate a lot from either cursor or openclaw and just fetch the data from everywhere and keep it and it's very portable. Then it can translate very well from format to format, app to app and so on. I want to segue just interest of time. William, you got some good coverage and a little bit of controversy with your Ethereum valuation recently. So, you know, maybe, maybe we could walk through the thinking and you know how people might be thinking about Ethereum the wrong way.

<a id="ethereum-valuation-and-trust-surplus"></a>

### Ethereum valuation and trust surplus

**[[27:42]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=1662s) William Mougayar:** Sure, yeah. What drove me to this is that I'm obsessed with having fundamentals drive valuations. Currently, as you know, in crypto almost everything that is not related to crypto drives the prices. One day it's a geopolitical situation somewhere in the world, another day it's interest rates, then it's the US dollar, then sometimes it's Nvidia. It's always external factors because the market is liquidity-driven. Crypto is always the first one to take the hit and the last one to recover. We're getting both ends of the short stick.

So imagine if we were valuing tokens based on their fundamental value. I started to look at the different sectors. I won't talk too much about DeFi, but DeFi is more mature in having metrics. You can look at TVL, the treasury, and transactions. Those at least give you balance-sheet strength and user activity.

But Ethereum is very special. Bitcoin is like gold, okay, leave it alone. Ethereum is like infrastructure. It's like the Internet.

I looked at how the Internet was being valued, and there are credible studies from MIT and others that tried to put a value on the Internet.

That model was based on three different parts. The first part is the value of the companies that were created because of the Internet: Google, Amazon, eBay, Facebook, all of these companies that would not exist without it.

The second bucket is the Internet economy itself, how much it contributes to the world economy. It's widely accepted that the Internet today contributes around 15% of world GDP, and world GDP is about $100 trillion.

Then the third bucket is what is called the consumer surplus. These are the benefits we get from using Internet services. Apparently the value of email is about $16,000 per year per user in the US. Search is about five or six thousand dollars. Those are benefits we receive without directly paying that amount.

So I'm taking that analogy and applying it to Ethereum. I wrote that report in December, about 50 pages, on the Ethereum Market Research Center. Same thing with Ethereum, it's three buckets because it's also infrastructure.

At the base level Ethereum is like TCP/IP. If you look at the higher levels, the L2s are like middleware, and then at the top you have enterprises, institutions, and apps. What people forget is that the biggest monetization happens at the top, not at the bottom. The bottom enables the value to happen at the top, but the bottom layers don't capture all of the value.

If you look at the value of the Internet itself, it's a lot less than the value of all of the companies built on top of it plus the GDP improvements and the consumer surplus. I think the same thing is going to happen with Ethereum. I wouldn't be upset if the Ethereum economy ends up being bigger than Ethereum from a market cap perspective. That would be a success.

The three buckets are the same. There's the companies that exist because of Ethereum. There's the GDP equivalent, the flow of value between the L1s and the L2s, the stablecoin flow, the DeFi flow.

There's a lot of money there, trillions of dollars. I think it's approaching $2 trillion per month currently on Ethereum. That's measurable. That's not science fiction.

And then you have the trust surplus. In the Internet world we had consumer surplus, so with Ethereum I'm calling it the trust surplus. It's the things we do and save money on because we're not paying big intermediaries that cost a lot for compliance reasons.

The numbers are not huge yet. I'm estimating the trust surplus is between $50 and $150 net surplus per active user per year, based on about 20 to 30 million meaningful users per year. That gets you to about $1 billion to $5 billion of trust surplus per year, which is at least a start.

Then you capitalize that and add it to the valuation of Ethereum. I'm not pulling these numbers out of the air. There's a grounded model here, which is the Internet, and the analogy is striking if you study it carefully.

Based on those numbers, the model gives us that today Ethereum should be valued at about $1 trillion, which is equivalent to about $8,000 per token.

It is vastly underpriced today, and we need to continue educating the market about how to see Ethereum in the right framework.

If you follow that same model over the next 10 years, then in 2035 Ethereum should be valued at $20 trillion, which gives us a unit number of about $166,000 per ETH. I'm not pulling those numbers out of the air either. I'm extrapolating them from the reality of today and the actual growth that is going on right now.

**[[37:30]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=2250s) Bob Summerwill:** Do you think that low surplus number really speaks to the lack of, like, mature apps that are really, like, delivering absolute value over current services?

**[[37:45]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=2265s) William Mougayar:** You mean there's not enough of them, perhaps?

**[[37:48]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=2268s) Bob Summerwill:** Yeah, there's not doing enough.

**[[37:50]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=2270s) William Mougayar:** The thing is, right now a lot of the adoption is with institutions, and that tends to be a bit more invisible than visible because it's business-to-business or between a business and some enabling service.

I'll admit we need more consumer apps. We definitely need more decentralized apps. I don't fault Vitalik for what you could read between the lines of some of his tweets in early January. He's not happy with the fact that we don't have a lot of decentralized apps following that cypherpunkish direction.

I'm not saying we need everything to be totally cypherpunk, but it wouldn't be a bad thing to have more user sovereignty. What's wrong with user sovereignty? What's wrong with owning your own data? What's wrong with signing on with Ethereum instead of with Google? These are the primitives we need to build on.

We need more of those cases, but that doesn't mean we have to push institutions down. Let institutions do what they're doing, but let's bring consumer apps up to that level. That's the challenge right now.

And I don't think there's a better blockchain than Ethereum to do this because it's part of the ethos, the native beliefs that the developers, stakeholders, and stewards of the protocol believe in.

Most other protocols want to make money. They think of the blockchain they are responsible for as a SaaS product driven by fees and revenue.

Imagine if we valued the Internet based on packet fees. That's the lowest-level activity. Blockchain fees are like packet fees. It's commodity-level stuff. That shouldn't be the main thing. We don't value Amazon based on its shipping revenue or shipping costs. That's a low-level activity compared to the actual value being created.

<a id="trustshift-and-the-movement-of-trust"></a>

### TRUSTSHIFT and the movement of trust

**[[41:35]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=2495s) Victor Wong:** Yes, yes, yes.

**[[41:37]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=2497s) Victor Wong:** Preview because you've always been one of the best thinkers in the Ethereum space, particularly around these issues, bringing in the history and understanding how institutions and different parties interact. We're really excited to hear about your new book, TRUSTSHIFT. Can you give us a little preview of it?

**[[41:59]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=2519s) William Mougayar:** Sure. You have to have depth of perspective, and you can't get that overnight. It takes a few years to understand, so it comes with experience. As you know, I wrote one of the first books about the business blockchain in 2016, and I've obviously stayed involved in the market.

I always wanted to write another book, but I wasn't inspired enough until just recently. It dawned on me, maybe four to six months ago, while I was writing this new valuation framework, that there is something more we can talk about now in more detail.

The promise of blockchain was not going to be just about the movement of money. Maybe that was act one. What I'm saying now is that the second act of the blockchain is about the movement of trust.

If you think about it, that is what we are doing. We are shifting trust from the existing intermediaries to new intermediaries in the same way that the Internet shifted a lot of e-commerce from old intermediaries to new intermediaries.

Amazon is a new intermediary. You cannot get rid of intermediaries. When you used to go to the bookstore, that was a physical intermediary. Amazon is a virtual intermediary.

So we need to see more virtual intermediaries that we will be able to rely on for these trust functions. The way we're going to get there is by having a lot more native processes on the blockchain.

The blockchain is a trust machine, right? We agree on that. But it's a trust machine for onchain data. Onchain data is very important.

The blockchain cannot, in its current architecture, be a truth machine for offchain reality.

A lot of the activity I see today is taking offchain assets and putting them on the blockchain. It doesn't do much. It's like a souvenir. What can you do with it if you still have to go back to the authorities that put the asset on their own books and talk to them every time you want to move it?

We need authorities that become onchain authorities. People talk about real-world assets, and maybe they are, but I want to see native assets.

They have to be native, meaning you can only move them on the blockchain. You cannot go back to paper or to an old intermediary and say, "No, I have to move my asset the old way."

If we don't cut that cord, we're not going to have innovation going forward. You can't go to an Amazon store and buy a book there. You have to buy it online. There's no second option. That's what makes it a valid digital marketplace.

So we need more online authorities where the source of truth, the source of ownership, the source of data, the source of getting to the bottom of a transfer, all of that has to be on the blockchain and only on the blockchain.

Initially we start by improving a process, but eventually we have to see those new intermediaries. That's what's missing.

The book is going to be a little bit about the present, but a lot about the future, painting this potential future across industry after industry.

At the same time, I want to see more consumer apps where the user has agency. Web2 did Hotel California very well: you check in, you cannot get out. Try to leave Facebook or even just stop a service and they bury the exit deep in the menu. It's not a no-hassle exit.

**[[47:32]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=2852s) Bob Summerwill:** Phone them up sometimes, and sometimes you

**[[47:34]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=2854s) William Mougayar:** have to hold them, and even the bank will argue with you about why you want to leave. If you try switching cellular companies, they want to have a fight with you about it.

So imagine the difference with what we have today in a wallet. In Web3, you click and you're out. The wallet is still with you. The money is still with you.

But I want to have my data as well. The Web3 wallet has not evolved into becoming a wallet of data, a wallet of identity, not just a wallet of currency.

If I'm plugged in, this is how it works today. You switch your account, you're into Aave. It knows you're there. Boom. You show your assets. You turn it off, it's out, and it's still with you.

Why can't we have that when you sign on to websites? Why can't I loan you my data? My data belongs to me. You're not the owner of it. I loan it to you. We do some transactions. But if I exit, I want a no-hassle exit and I want to go somewhere else maybe.

So that's the vision. These are the use cases I want to talk about more in the book. And I coined the term TRUSTSHIFT in one word because my inspiration was *Power Shift*, Alvin Toffler's book from the 1970s.

That was an amazing book. I reread it almost on an annual basis. I had the privilege to meet Alvin Toffler before his passing and spent three days with him. He inspired me a lot. He was an amazing thinker and futurist.

So I was inspired to write, I hope, a book that will inspire others in the same way that the first one inspired a lot of people. What keeps me going is meeting people who tell me they learned the economics of the blockchain by reading *The Business Blockchain*. I heard that again two days ago, and it still gets me a bit emotional sometimes.

<a id="closing-thoughts-and-book-timeline"></a>

### Closing thoughts and book timeline

**[[50:19]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=3019s) Victor Wong:** Well, we thank you for all your contributions in the space. You bring a rare combination of understanding the technical things but also understanding the ramifications. That's a unique combination in this space, so thank you for joining us today. We really appreciate your time.

**[[50:40]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=3040s) William Mougayar:** Thank you for having me. It was a pleasure.

**[[50:42]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=3042s) Victor Wong:** Pleasure.

**[[50:42]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=3042s) William Mougayar:** Okay.

**[[50:42]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=3042s) Kieren James-Lubin:** When's the book roughly coming out?

**[[50:44]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=3044s) William Mougayar:** Yes, the plan is to be out in September.

**[[50:48]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=3048s) Victor Wong:** September, okay.

**[[50:49]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=3049s) William Mougayar:** Yeah, I'm going to look for it

**[[50:51]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=3051s) Victor Wong:** On the shelves in September.

**[[50:52]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=3052s) William Mougayar:** I'm going to finish writing it in June. There's about a three months delay between the end of the book and the distribution because it's distributed by Simon and Schuster, so we're going to have good distribution and it'll go from there, hopefully.

**[[51:08]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=3068s) Bob Summerwill:** Are you going to be sitting on a table in Mumbai for devcon signing copies?

**[[51:14]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=3074s) William Mougayar:** I'm trying to get the Ethereum foundation to purchase a number of those books, to give them away to everybody. So maybe they'll hear, and I'm waiting to hear the confirmation. Hopefully they'll agree and we'll have a special edition. I want to do a custom edition for the Mumbai Attendees at DefConnect, and I hope it will happen.

**[[51:42]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=3102s) Victor Wong:** Well, we're hoping it happens, too, but if not, we'll get our own copies. Have a great day, William. Thank you again for your time.

**[[51:50]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=3110s) Bob Summerwill:** Thanks so much.

**[[51:52]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=3112s) Victor Wong:** Bye.

**[[51:59]](https://www.youtube.com/watch?v=PgPBW2DXoa8&t=3119s) Bob Summerwill:** And stream.
