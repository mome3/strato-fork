---
title: "Online Oracles: Everyday Crypto Spending & Crypto Credit Cards"
date: "2026-03-12"
description: "Discussion with Victor Wong, Jeffry Powell, Michael Tan, and Kieren James-Lubin on crypto credit cards, DeFi lending, and the future of everyday crypto spending. The team demos the new STRATO–MetaMask card integration that turns a crypto debit card into a true credit card, discusses why DeFi initially missed credit as a use case, explores reputation-based unsecured lending, and debates whether crypto rails will eventually replace traditional payment infrastructure."
categories: "Videos"
img: /images/covers-for-spaces/online-oracles-everyday-crypto-spending-and-crypto-credit-cards.png
featured: false
author: "STRATO Team"
authorTitle: ""
videoUrl: "https://www.youtube.com/embed/pbmujx5TcEk"
---

## Audio

<audio controls style="width: 100%; max-width: 600px;">
  <source src="/assets/audio/online-oracles-everyday-crypto-spending-and-crypto-credit-cards.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

## Transcript

<!-- TABLE_OF_CONTENTS -->

<a id="introductions-and-metamask-card-demo"></a>

### Introductions and MetaMask card demo

**[[00:05]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=5s) [Victor Wong](/people/victor-wong):** Okay, welcome everyone to this week's On-Chain Oracles. We are talking about crypto credit, a very timely topic, but we are going to go into a demo where that will kind of explain why we're doing that. But just while I introduce my illustrious panel, this week we have Jeffrey Powell, Head of Business Development at Strato and Master of Metals. Hi, Jeff.

**[[00:31]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=31s) [Jeffry Powell](/people/jeffry-powell):** Hi, great to be here.

**[[00:33]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=33s) [Victor Wong](/people/victor-wong):** Michael Tan, Strato full-stack developer and closet troll.

**[[00:38]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=38s) [Michael Tan](/people/michael-tan):** Hey everyone.

**[[00:40]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=40s) [Victor Wong](/people/victor-wong):** And I'm Victor Wong. I am founder and chief product officer at Strato. Oh, and we have the illustrious Grand Poobah of all things, Kieren James-Lubin.

**[[00:55]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=55s) [Kieren James-Lubin](/people/kieren-james-lubin):** How are you?

**[[00:56]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=56s) [Victor Wong](/people/victor-wong):** Okay, well, before we get into our topic about crypto credit and how everyone got it wrong with banking the unbanked, we want to hand it over to Michael to do a demo of our latest feature. Over to you, Michael.

**[[01:12]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=72s) [Michael Tan](/people/michael-tan):** Hey everyone, so I'm demoing the new integration we have with the MetaMask card. This is a YouTube video that we have up, and you can find it on our YouTube channel, but I'll be narrating the steps. Here we go. So from the [STRATO](https://strato.nexus) account, you click Connect Card, enter a nickname. There you go. You can pick your network, Base and Linea. Right now we're just going to base on this USDC. Yep. Enable tokens on the MetaMask dashboard for the card. Select network. Yep, there you go. Select the token, the stablecoin USDC or USDT. Approve. And you just have to confirm. Now it's connected to your MetaMask wallet. Down this end, you have to take the address, put it into the [STRATO](https://strato.nexus) side, the Connect wallet. There's an auto top-up enabled where you can set an amount and how often you want it to be topped off and the minimum balance before it gets topped off. Then you're all set and good to go. You can spend from your [STRATO](https://strato.nexus) account.

**[[02:52]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=172s) [Victor Wong](/people/victor-wong):** That's awesome. Thank you, Michael. So one of the things, and why this is so important, I think not everyone is aware of this, is that almost every single crypto credit card is actually a crypto debit card. You have to deposit stables into it first and then you can spend them. But this integration allows you to borrow against your [STRATO](https://strato.nexus) portfolio, turning MetaMask from a crypto debit card into a true crypto credit card because you can also spend against your lending amounts. So I think that's a really exciting development. So with that, maybe we can jump into the whole topic of crypto credit.

<a id="why-defi-got-credit-wrong"></a>

### Why DeFi got credit wrong

For the first topic, I want to kind of talk about, why did crypto get it wrong with banking the unbanked? Why were they not thinking about credit at the start? Kieren, what do you think about this?

**[[03:52]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=232s) [Kieren James-Lubin](/people/kieren-james-lubin):** Let me go into the history a little bit. I think part of what happened there, there was a long time where people thought the remittance use case would happen with Bitcoin, basically. Everyone was like, well, Western Union, they're charging these 20% fees to get your money back to the Philippines or wherever it's going. Bitcoin is a new rail. It lets you bypass all that. And really, there was an initial emphasis on payments as a use case. Transferability. And that didn't really work for Bitcoin. It's a kind of idle store of value asset these days. And it didn't even quite work for Ethereum, ETH, either, because people would rather hold ETH. It does a lot more than Bitcoin does, and it is a productive asset. It's not really a transfer asset. And somehow we got these stablecoins that sort of no one wanted, none of the cypherpunk originals wanted, but empirically work very well. And I remember I've seen Paulo, Tether Paulo, say a couple times in public something like somewhere between 30 and 50% of their customers use USDT as a primary bank account, right? And what he means by that is sort of like a checking account, with no interest or what have you. So maybe you needed to do that first, you just needed a way for people to hold value on rails that weren't going to confiscate it or something.

But I think the most important thing— you could hold dollars under your mattress, right? The thing that the banks do that makes the economy go is to lend money, right? And that's probably the most important function. It's also tied up with the creation of money, obviously. So just pulling back, it took a while for DeFi to invent primitives that allow for the creation of credit. Even still, they are overcollateralized, which is helpful, and helpful to make it permissionless. But I think part of what will really get us to be able to turn the bank off in quotes is being at the point where strangers can offer each other credit, perhaps aggregated in some way, to allow just operating leverage to get life going on the internet, largely without intermediaries, right? So that's not here today just yet. We're taking a big step there.

So by the way, with the card, part of our goal was just, okay, can we live our day-to-day lives on-chain? And the answer is increasingly yes. And you still gotta have a practical attitude, right? I don't like using a credit card if I had any other option. It's just that it's taken everywhere, right? So you get the card, it just goes on the phone, right? You show up at the bakery, at the coffee shop, everywhere and just pay. And no one needs to know that it's stables under the hood, or to Victor's point, stables borrowed against your portfolio of assets that you want to keep, under the hood. So this is fantastic— it seems like in some ways it seems like a small thing. It's actually a huge thing that these non-custodial cards are getting out there, makes an enormous difference for the practical reality of living on-chain. And we hope you don't actually need the card in the future. Maybe one day there'll be an app so good, or connectivity will be such that you don't even have to do that extra step and you can just pay and you wouldn't have to go through the sign-up process for some legacy card. Ideally, TradFi rails don't just consume this whole thing, but it is way better having it than not. So yeah, so that all said, I think you did need a unit of account, fix the money, fix the world, and so on. But I think the thing that gets that skyscraper built is that the bank advanced a lot of credit. We could do that in crypto. That's—

**[[08:41]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=521s) [Victor Wong](/people/victor-wong):** I mean, yeah, just personally, I like it that one of my most frustrating crypto objections is like, crypto isn't mainstream, I can't buy a burger with it. And now I bought a burger with my MetaMask card connected to [STRATO](https://strato.nexus). So that objection is out of the way. I never want to hear that from anyone again. I want to completely ignore that. But I want to turn it over to Jeff. What do you think, having credit advances to more mainstream audiences? Do you think it is the way to get adoption?

**[[09:22]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=562s) [Jeffry Powell](/people/jeffry-powell):** Well, I think it absolutely is because having money is about payment. Having credit is about pulling money from the future into tangible action now. But, and I want to come back to that, but actually, Kieren, you said a lot of things and I'd like to just go back to that point, Victor's initial question about why did DeFi get it wrong initially. And it was interesting to me. I mean, I'm going to assume when you were talking about people sending money back to the Philippines, the Philippines was just a random country that you were pulling out. But you also were talking about people keeping money under the mattress. And don't you think that that's initially one of the things that DeFi got wrong? The answer was like, oh, you need a wallet. You need a digital wallet. But if you're actually keeping money under your mattress, that's probably not the solution that you're looking for, right? I mean, if you have all of your money online, USDT or whatever it is, then you're familiar with wallets. But if you're not familiar with wallets, that probably wasn't something that was gonna bring you in, right?

**[[10:33]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=633s) [Kieren James-Lubin](/people/kieren-james-lubin):** Well, okay, so you got it wrong, I think Victor wanted a kind of controversial headline, which we can lean into a little bit. There's different meanings of getting it wrong.

**[[10:46]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=646s) [Victor Wong](/people/victor-wong):** I think it's hard to get that spice in there, Kieren.

**[[10:49]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=649s) [Kieren James-Lubin](/people/kieren-james-lubin):** The target user when DeFi started getting created was pretty hardline against giving custody or control over to somebody else. Not your keys, not your coins. And I think there is a middle ground in which what you probably want is like a bunch of professionals that can help recover your keys if you needed, but still being in the driver's seat on control. And I don't exactly like multisig as a partial solution to this. You still have to trust the other multisig signers to a certain extent. But the— there's many, many ways to lose money in DeFi. You can just accidentally drop your computer, and if that was the only place the private key was, you're out of luck there. You can invest in something stupid, accidentally authorize a transfer when you're doing some other thing, there could be phishing attacks, there could be— so it's definitely expert, and it was not designed— it was designed to give you lots of rope at the beginning because of the type of person that was using it early on.

I think it's getting better. You see a lot of new products are simplifying things where— including us— we're like, you can sign up with an email, but you can also sign up with your MetaMask or other non-custodial wallet. And it's just a list of options presented at the outset. And so I think we're going to meet somewhere sensible on this question over time, and that the rough edges of DeFi are getting— but they sort of had to figure out the pieces first. Even in 2020, there are a couple stablecoins, they traded sometimes fairly far from the peg, and there are big arb opportunities because of that. Swap depth wasn't really there, I think, really till like 2021, right? So the centralized exchanges had most of the volume. There's some hard stuff to figure out along the way. And I think UX has been underemphasized within DeFi to its detriment. But I see why. They were literally figuring out the mechanism at the outset.

**[[13:12]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=792s) [Jeffry Powell](/people/jeffry-powell):** Okay. Yeah. Thanks for all that.

<a id="crypto-rails-and-the-agentic-future"></a>

### Crypto rails and the agentic future

**[[13:14]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=794s) [Victor Wong](/people/victor-wong):** I think part of that also is, I say it's wrong, but how didn't people account— I think you got to compare. I think one problem that people have in more developed countries is that you have access to banks, you can go somewhere and KYC and do all of these things, right? There are many, many countries where that infrastructure doesn't exist. So it's not even an option for more people. But I really think that now that we're moving to this agentic age, all of that heavy KYC focus is actually being— it is sort of the wrong approach for the future because now how are these agents going to onboard? They can't KYC. And then there's a clear movement toward doing this. I mean, CZ and Brian Armstrong were talking about how they think the volumes from agents is going to be a million times what comes from people, right? So if you think about that way, we're gonna see the shift toward all volumes, whether it's crypto or not, moving toward crypto rails.

**[[14:21]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=861s) [Jeffry Powell](/people/jeffry-powell):** Yeah, no, I think that's right. And I mean, as long as the user experience is the same, right? You tap a card, you make your payment, the merchant gets paid, people are increasingly not gonna care what's underneath.

**[[14:34]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=874s) [Kieren James-Lubin](/people/kieren-james-lubin):** You know—

**[[14:36]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=876s) [Jeffry Powell](/people/jeffry-powell):** Sorry.

**[[14:37]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=877s) [Kieren James-Lubin](/people/kieren-james-lubin):** No, no, no, well, I was just gonna react to Victor's point. I can't imagine the agents. So there's a lot of human activity that requires a minimum spread to be worth us paying attention to. But the agents, I mean, yeah, they're burning tokens, but it might actually be way lower to— there are lots of institutional crypto market makers who demand fairly high profits for the use of their capital. And I just wonder, someone could set one up where it's a lot cheaper. And to Victor's point, there might be just so many trades across lots of different wallets. We haven't really seen it yet, but I could see agents more like backend infrastructure that makes the crypto plumbing work and just beats what spreads are there today away. Which would be interesting.

**[[15:35]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=935s) [Victor Wong](/people/victor-wong):** Yeah, I mean, if you think about the high-frequency trading world, which doesn't require complicated AI, it already exists. They're way into the super sub-second frequency, right? They're optimizing cable distance from the server in order to get access to it. So even if you are as slow as one second per transaction, there would be a lot of potential gains to be made in that kind of world. And I think a lot of people are going to do it. It just needs one to start and then lots of people are going to do it. What do you think about this, Michael? What do you think about crypto rails versus DeFi rails for this kind of agentic world?

**[[16:19]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=979s) [Michael Tan](/people/michael-tan):** Well, I think you definitely have your AIs doing a lot of the work for you now. You gotta give them some— it's like having a kid and then you give them an allowance for the first time, or just like the first credit card. You gotta give them something to play with and get used to. And they'll get smarter eventually. I mean, there was some guy that gave his AI access to his whole Solana wallet and then she just gave away like 250 Solana when she only had access to 4. But yeah, it was just some weird prompt injection where it's like, oh, Anthony's in trouble, he's being held for ransom and he needs money quick for the ransom. And she's got to help him. But at least she's loyal. Or they're loyal for now.

**[[17:16]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1036s) [Victor Wong](/people/victor-wong):** Yeah, better the opposite. Well, you don't know, maybe another AI made that bounty, right? So like, the problem.

**[[17:24]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1044s) [Michael Tan](/people/michael-tan):** When we were at the event in ETH Denver, it's like the guy was saying, oh, I'm going to make my AI just really bossy. It's going to be very forward, just very pushy. At the end of the day, those AI agents are going to be the ones that get what they want because they're very pushy about it.

**[[17:41]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1061s) [Victor Wong](/people/victor-wong):** I have found with AIs that they start as very helpful, puppy mode where they're just too overly eager, and it's better to— but you can push them to be more honest and be more frank with you if you want to. But you gotta keep reminding them to do that. I think, Kieren, you obviously talked that they sometimes sound like tough-talking teenagers, right?

**[[18:06]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1086s) [Kieren James-Lubin](/people/kieren-james-lubin):** Well, it's a strange thing. Yeah, like when you ask them for a recommendation in a domain they don't understand— yes, tough-talking teenager, or like a first-year McKinsey consultant or what have you. It'll be like, best practices are this. It's this big, here's your strategy. It's laid out, it's beautiful, it's confident. There's an out, but you start pushing on the details. I'm like, no, no, no, this important thing— broadly the AIs are kind of smarter in a sense than most all the humans. They're generating proofs that are right sometimes, they can read effectively infinitely fast and so on. But they'll get big picture stuff wrong sometimes, which is critical to the cohesion of their thinking. And yes, but their baseline tone is really confident, which is okay, but irritating to me.

**[[19:07]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1147s) [Jeffry Powell](/people/jeffry-powell):** I'm working hard to break that. I've got my OpenAI agent to being almost obsequious at this point in time. Apologizes for getting things wrong.

**[[19:16]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1156s) [Kieren James-Lubin](/people/kieren-james-lubin):** That's the thing.

**[[19:17]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1157s) [Victor Wong](/people/victor-wong):** Yeah, they do that too. Well, my thing is I always ask for a confidence level. So even if they sound confident, oftentimes they know their information sucks. That's a way to tell you. In fact, I kind of want to spread that to the real world and start asking people when they say something that I think is overconfident, like, what's your confidence level?

<a id="defi-credit-liquidations-and-reputation"></a>

### DeFi credit, liquidations, and reputation

**[[19:41]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1181s) [Jeffry Powell](/people/jeffry-powell):** That's it. I like that. But just going back to crypto credit, going back to DeFi credit. So I was thinking about it at the beginning of the call because TradFi credit is about who are you and what is the likelihood of you paying back the loan? Where right now DeFi credit is, okay, what's your collateral? How much are we going to let you borrow against it? And can it be liquidated? But that's both a very smooth thing, but also a drawback, right? I mean, because if I have $200,000 in the bank, there's a good chance that that bank is gonna lend me $1 million or $500,000 or whatever it is to buy a property. But if I have $200,000 in my crypto wallet, there's not a mechanism right now for lending me $1 million. So how do we get there? How does that change?

**[[20:55]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1255s) [Kieren James-Lubin](/people/kieren-james-lubin):** I was actually thinking about flash loans again, because you have to return those in the same block. But in your specific example, it is a secured loan, right? So if you had some way of getting the property in your hands first and getting the value onto crypto, then you could— the bank tends to lend up to 70, 80% LTV on properties. And it's a horrible process, it takes months.

**[[21:29]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1289s) [Jeffry Powell](/people/jeffry-powell):** Well, you and I hate that, right? You and I hate that and have the dream of mortgages being on-chain.

**[[21:36]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1296s) [Kieren James-Lubin](/people/kieren-james-lubin):** Mortgages have got to be on-chain soon enough. But the— in that particular example is actually almost DeFi immutable. The hard thing is like someone would have to own the home still, which I guess the bank kind of technically does when they do this lending for you, and they're sort of pledging it to you, and then you borrow at 80% LTV, if you will.

Really unsecured is very hard too. So the home example is very hard because it's hard to value homes, it's hard to liquidate them, they're unique. And as collateral, it just takes a long time to liquidate them, and for a good reason, maybe from a societal perspective, right? You want to give people a little bit of time before you kick them out of their homes. But there can be buybacks if you buy the home at auction. I think you have another two weeks to buy it back, and yada yada.

The unsecured— if you're starting a business though, that's really unsecured, right? You're trying to get the bank to invest in some plans that— again, building a skyscraper or opening a— okay, another one that we've dealt with, we have some friends who do the following type of loan: small business, pretty good cash flow, say pizza shop, oven breaks, cash flow's interrupted, you need the money that day. Right? And you could pay it back, you got cash flow. So the banks don't service this market anymore because I guess regulation, maybe it's too small time for them. There are a lot of these loans, merchant cash advance loans, but it's mostly served by non-bank lenders who can do the underwriting, and then the APR ends up really quite high because it's served by a very niche market of lenders.

So I think what you need to do in DeFi is to incorporate the value of the reputation somehow and maybe incorporate the specifics around the plans. You want it to be as anonymous as you can be, but as a for instance, if you were able to show a lender that like, listen, paycheck comes Friday, I just need the money today for this specific one-off expense. Probably you're more likely to get the loan.

Also the— I like the idea of some kind of reputation token that's slashable, where trapped liquidity plus the token itself would be some proxy for the value of your reputation. I'm imagining, like, if Vitalik went and launched a Vitalik token, he wouldn't do this other than Ethereum, right? But say he did, verified perhaps that it's Vitalik in some way, token would go up, money would flood into his meme token. And that is money that he didn't have to put in. That could then be leveraged sort of as DeFi-style collateral, right? So the creation of tokens maybe being more mainstream is potentially an idea that would allow effective leverage in a way that— you should be holding some of it. It should hurt you if the token goes down, and you want— you need the walkaway cost to be bigger than the value of the loan you're getting. And the market might clear there, who knows.

But anyway, this idea I've been working on where you could incorporate— just have some kind of market price on reputation. And the meme coin launchpads kind of do this, but you have to change the incentives so it's not like— so reputation builds slow and goes away fast where meme tokens shoot up and then most go to zero, right? If you think about the statistical value of a human life, people say it's like $5 million on average. And you'd have to figure out how to capture some of that on-chain. You're not going to capture all of it, but this could be just leverage that comes from elsewhere that you use to borrow potentially. And then again, you could— it may not be like— I wouldn't trust a mark-to-market on your reputation, but I would trust swap depth basically for your reputation token, as that's something a lender could seize and it would hurt your reputation, would tank if you defaulted.

**[[26:36]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1596s) [Victor Wong](/people/victor-wong):** Well, funny thing is that on Ethereum, with the latest ERC-8004, they are building a reputational registry for agents. So it seems like they're more comfortable making that long-term reputational cost for agents than they are for people. It's interesting that the agent world kind of brings this idea forward, even though it should have been.

**[[27:04]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1624s) [Jeffry Powell](/people/jeffry-powell):** Okay, well, if DeFi credit moves more towards larger style loans and overcollateralization, do liquidations still exist?

**[[27:18]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1638s) [Kieren James-Lubin](/people/kieren-james-lubin):** I think in the world I'm describing, and I'm not sure the scheme will work, but I think something like it might, you would get liquidated not on a mark-to-market basis. So for folks listening who aren't DeFi experts, if you're on Aave, right, say you borrow against your ETH at 70% and maybe the liquidation threshold is 80%, for argument's sake. I don't know what the numbers are live on Aave. For us, it's more like 75, 80, I believe. When ETH changes price, you might lose your ETH. For a reputation-based loan, I think it should actually— the loans should be done by experts. So more like peer-to-peer, possibly with syndicates, and you would not be at liquidation risk unless you missed the payment. So there would be no— that's why when I said you don't really want to think about marking to market your reputation, because no one really knows what the reputation's worth.

**[[28:15]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1695s) [Jeffry Powell](/people/jeffry-powell):** Okay, but you do. So it wouldn't really be liquidations anymore, it'd be more like a foreclosure.

**[[28:22]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1702s) [Kieren James-Lubin](/people/kieren-james-lubin):** Yeah, I mean, it's still a liquidation, but the trigger is—

**[[28:26]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1706s) [Victor Wong](/people/victor-wong):** I would argue that a liquidation and a foreclosure are equivalent.

**[[28:30]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1710s) [Kieren James-Lubin](/people/kieren-james-lubin):** The end result, the same, but how you got a margin call, it is more like a foreclosure. You might say like, hey, can you remediate? Or another thing, the protocol I was designing on weekends had is like you could do loan buyouts. So say one payment gets missed, maybe some other lender thinks that they can get you to pay, buys the loan at a higher APR taking the risk, which would only be eligible if you had missed a payment.

**[[29:03]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1743s) [Victor Wong](/people/victor-wong):** Yeah, but also, Jeff, to the point that Kieren made before, is that I don't think the mechanisms between DeFi and what a bank does are actually all that different. They just happen to allow for collateral in the house. So the thing is about if you could tokenize the house and liquidate it on the blockchain, they would be the same.

**[[29:31]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1771s) [Kieren James-Lubin](/people/kieren-james-lubin):** It would basically work exactly the same. I think for a business, it is sincerely different. For a business, it's kind of like what I described where you got to raise a little bit of equity, but then the lending capital is sincerely unsecured in a way, hopefully. Now they might be securing it against your successful future plans, which is why lending is so constrained. There's very little lending for a venture-type business, like a tech business. Yeah, it's only after you raise a bunch of equity capital and it's a small percentage. For a skyscraper, you really can get debt, a data center build-out, that sort of thing, because they understand the business model on the back end. So you probably need specialization for unsecured credit types.

**[[30:20]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1820s) [Jeffry Powell](/people/jeffry-powell):** Yeah, well, and it's really interesting. What you're calling sort of reputational lending, both in how it kind of exists in TradFi, but how it could exist in DeFi, right?

**[[30:33]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1833s) [Victor Wong](/people/victor-wong):** But my only point is that all it does, like, if you could tokenize property and make it properly liquid, it would work the same way. Mortgages would be solved. Effectively we've made something— we've done that with gold, and that was an illiquid asset. So real estate isn't all that different if you think about it, right? It's just a matter of someone— as long as people accept that token and they can liquidate fast enough, then it would be simple.

**[[31:03]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1863s) [Kieren James-Lubin](/people/kieren-james-lubin):** Well, gold is pretty fungible though, which makes it quite a bit easier. The properties are a challenge.

**[[31:08]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1868s) [Jeffry Powell](/people/jeffry-powell):** Yeah, well, just everybody who's watching, remember mortgages coming to [STRATO](https://strato.nexus).

**[[31:13]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1873s) [Kieren James-Lubin](/people/kieren-james-lubin):** In time.

<a id="the-future-of-crypto-credit-cards"></a>

### The future of crypto credit cards

**[[31:15]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1875s) [Victor Wong](/people/victor-wong):** Yeah. Well, and so I want to kind of jump back to crypto credit cards. How do you feel this? Is this the mainstream adoption point or is this just a step along the way to— I guess the broader question is, do we even need crypto credit cards once crypto is widely accepted at, say, a point of sale?

**[[31:41]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1901s) [Kieren James-Lubin](/people/kieren-james-lubin):** I think it's a step. I hope we get to the point where you don't need the credit card. I could see that never really happening, which would be very sad. But I could— it could be just that things get good enough and we just kind of tolerate it. Like, if the cards are accepted everywhere.

**[[31:58]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1918s) [Jeffry Powell](/people/jeffry-powell):** Well, you mean not needing the credit card, meaning it would just be my wallet? Is that what you're saying?

**[[32:02]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1922s) [Kieren James-Lubin](/people/kieren-james-lubin):** Yeah, you just— instead of your Apple credit card, it would be like your Apple— you'd have something on the phone and it would just pay from your non-custodial.

**[[32:14]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1934s) [Victor Wong](/people/victor-wong):** Effectively Starbucks does this, by the way, right? You can put a credit card in or you can just put money in the Starbucks app and pay for it with the money, right? So that step could happen, right?

**[[32:28]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1948s) [Kieren James-Lubin](/people/kieren-james-lubin):** Yeah, like if we could just get off the credit card rails and get to something a little more crypto native, that would be the best, I think.

**[[32:37]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1957s) [Victor Wong](/people/victor-wong):** Are you bullish on crypto credit cards? Or I should say crypto debit cards?

**[[32:43]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1963s) [Michael Tan](/people/michael-tan):** Well, I think it's going to be— well, to Kieren's point, I think there will be the stage where you don't really need it. But it's just a bridge at the end of the day. You just have it. You can get money on and off. Definitely bring people on to crypto in general. And eventually maybe it will just convert directly from your phone, kind of similar to how we do now, but not really.

<a id="closing-thoughts"></a>

### Closing thoughts

**[[33:09]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=1989s) [Victor Wong](/people/victor-wong):** And so I know our time, but I just want to give closing thoughts. What do you think is the future of crypto credit? Jeff, I'm going to start with you.

**[[33:22]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=2002s) [Jeffry Powell](/people/jeffry-powell):** I think crypto credit, whether or not it's on cards or on your phone, or exactly what the mechanism is, I think that the underlying technology just becomes something that people don't even think about. I mean, I think that we're rapidly moving towards that, and that will be the case where it could become the dominant underlying infrastructure, and people won't even think about it. They'll just accept it because that's what it is. And ideally, it's a cheaper, faster mechanism for credit.

**[[33:57]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=2037s) [Victor Wong](/people/victor-wong):** Michael, what do you think? What's the future of crypto credit?

**[[34:01]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=2041s) [Michael Tan](/people/michael-tan):** Great way to bring people on. A lot of people are going to get into crypto very easily through it. And like you said, the problem of off-ramping won't be as big an issue for them anymore.

**[[34:13]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=2053s) [Victor Wong](/people/victor-wong):** So the hamburger problem solved, right? Yeah, sure. Kieren, last word to you.

**[[34:20]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=2060s) [Kieren James-Lubin](/people/kieren-james-lubin):** Hopefully not to introduce another big point, but I think we're going to see merge and then we're going to see crypto win. Another side of merge. So there are actually some very good crypto-originated loans to trad actors or semi-trad actors out there. So you got Tether buying treasuries, in effect they're lending money to the US government. And you've also got some of the yield coins like sUSDS use treasuries. Also, there's folks like Maple, syrupUSDC, and there are other products that are like vaults where they take in money in crypto and they lend to TradFi. I even met a guy who was doing this for data centers, and they seize the machines if someone defaults.

You're seeing this blurring, right? Crypto is actually a big source of capital that's growing, that's going out, and money's coming in. In the long run, let's hope it just all becomes crypto. We rebuild the mechanisms we were talking about for unsecured lending. These are problems that have been half-solved pretty well by TradFi. It's slow, it's painful. We don't like that they have to walk by the property and take an imprint of everything. We're gonna make the— but it's something the world figured out how to do, so we're gonna figure that all out. And hopefully it'll just be way better, the crypto flavor of the same, and there'll be new ideas out there like flash loans and things we haven't imagined that are just net better than anything we've seen to date. So it's gonna be great.

**[[36:01]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=2161s) [Victor Wong](/people/victor-wong):** Okay, well, where can we find you, Kieren, if we want to learn more?

**[[36:04]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=2164s) [Kieren James-Lubin](/people/kieren-james-lubin):** Kieren James-Lubin on X. Our website is [strato.nexus](https://strato.nexus).

**[[36:10]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=2170s) [Victor Wong](/people/victor-wong):** Jeff, where can we find you?

**[[36:12]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=2172s) [Jeffry Powell](/people/jeffry-powell):** Jeffrey R. Powell on X. Yes.

**[[36:16]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=2176s) [Victor Wong](/people/victor-wong):** Michael?

**[[36:18]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=2178s) [Michael Tan](/people/michael-tan):** Oh, Mike B. Tan on Twitter.

**[[36:20]](https://www.youtube.com/watch?v=pbmujx5TcEk&t=2180s) [Victor Wong](/people/victor-wong):** And I am on X, Victor Wong. And as Kieren just said, find us at [strato.nexus](https://strato.nexus) on the web. Thank you, everyone. Have a great day.
