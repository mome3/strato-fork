---
title: "Are Corporate Chains Back?"
date: "2025-10-22"
description: "The Tempo blockchain was announced in September 2025. It is an L1 payments chain backed by a consortium led by Stripe, and is leaching talent from the Ethereum ecosystem, with Dankrad Feist as the most recent example. Are permissioned corporate chains back?"
categories: "Videos"
img: /images/covers-for-spaces/are-corporate-chains-back.png
featured: false
author: "STRATO Team"
authorTitle: ""
videoUrl: "https://www.youtube.com/embed/2BR6nodzzos"
---


## Audio

<audio controls style="width: 100%; max-width: 600px;">
  <source src="/assets/audio/are-corporate-chains-back.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>


## Transcript

<!-- TABLE_OF_CONTENTS -->

<a id="introductions"></a>

### Introductions

[[00:00]](https://www.youtube.com/watch?v=2BR6nodzzos&t=0s) **Kieren:**
Okay, the stream is live.

[[00:04]](https://www.youtube.com/watch?v=2BR6nodzzos&t=4s) **Victor:**
The stream is live.

[[00:06]](https://www.youtube.com/watch?v=2BR6nodzzos&t=6s) **Bob:**
Don't cross the streams.

[[00:09]](https://www.youtube.com/watch?v=2BR6nodzzos&t=9s) **Kieren:**
Who are you going to call?

[[00:11]](https://www.youtube.com/watch?v=2BR6nodzzos&t=9s) **Bob:**
See what happens to the audio when you cross the streams?

[[00:14]](https://www.youtube.com/watch?v=2BR6nodzzos&t=14s) **Victor:**
Yes, exactly. Okay, we seem to be also live on X, so welcome everyone to another group chat by the

[[00:29]](https://www.youtube.com/watch?v=2BR6nodzzos&t=29s) **Bob:**
Mutual support group.

[[00:34]](https://www.youtube.com/watch?v=2BR6nodzzos&t=34s) **Victor:**
Yes, exactly.  With the builders from [STRATO](https://strato.nexus), I'm Victor Wong. I am Founder and Chief Product Officer at [STRATO](https://strato.nexus). [Bob]({{ '/people/bob-summerwill/' | relative_url }}), who are you?

[[00:45]](https://www.youtube.com/watch?v=2BR6nodzzos&t=45s) **Bob:**
Hello, I'm Head of Ecosystem.

[[00:48]](https://www.youtube.com/watch?v=2BR6nodzzos&t=48s) **Victor:**
And [Kieren]({{ '/people/kieren-james-lubin/' | relative_url }}), who are you?

[[00:50]](https://www.youtube.com/watch?v=2BR6nodzzos&t=50s) **Kieren:**
Kieren James-Lubin, CEO, once a coder, long time off. Code a little again. [Vibe coding](https://en.wikipedia.org/wiki/Vibe_coding) era has been great for making an occasional fix here and there.

But soon we'll be back just doing commercial stuff.

[[01:10]](https://www.youtube.com/watch?v=2BR6nodzzos&t=70s) **Victor:**
Yeah, I was playing around with the [OpenAI browser](https://chatgpt.com/atlas/) today *(ChatGPT Atlas, released 21st Oct 2025)* and it was kind of miraculous, just telling it to do stuff and seeing the cursor move around by itself. It was both miraculous and disturbing.

[[01:26]](https://www.youtube.com/watch?v=2BR6nodzzos&t=86s) **Kieren:**
It moves really slow.

[[01:28]](https://www.youtube.com/watch?v=2BR6nodzzos&t=88s) **Victor:**
It does. It takes time to do stuff, but you just kind of keep it running in the background. Anyways, today's topic, getting us back to the topic at hand, is basically "are corporate chains back"?

And we obviously have some intimate knowledge about this, having been part of the rise and perhaps fall and maybe the rise again of corporate chains. Hey, Lewis, nice to have you. But maybe you can, maybe [Bob]({{ '/people/bob-summerwill/' | relative_url }}), you can give us an outline of the new corpo chains, like what's happening currently, and then we can look back over the history of corporate chains.

<a id="the-new-corporate-chains"></a>

### The new corporate chains - Tempo, Circle Arc, and others

[[02:17]](https://www.youtube.com/watch?v=2BR6nodzzos&t=137s) **Bob:**
Yeah, well, I mean, you know, the red hot action at the moment is really about [Tempo](https://tempo.xyz). You know, so [Tempo](https://tempo.xyz) was announced on September the 4th by [Stripe](https://stripe.com) ...

{% include content-embed.html
  url='https://tempo.xyz/launch-announcement'
  title='Introducing Tempo, the payments-first blockchain'
  img='/images/www.ledgerinsights.com/2026.01.05/wp-content/uploads/2022/10/stripe-810x524.jpg'
  date="2025-09-04"
  author='Matt Huang'
%}

... and a consortium that they got together, which just reading initial members as well as [Stripe](https://stripe.com) themselves, including [Anthropic](https://anthropic.com), [Coupang](https://coupang.com), I don't know who those are, I'm not going to say all these, [Deutsche Bank](https://deutsche-bank.com), [DoorDash](https://doordash.com), [Mercury Bank](https://mercury.com), [OpenAI](https://openai.com), [Revolut](https://revolut.com), [Shopify](https://shopify.com) and [Visa](https://visa.com). So yeah, I mean, you got [Shopify](https://shopify.com) and [Visa](https://visa.com), you know, you're doing pretty well on that payment side.

{% include twitter-embed.html url="https://x.com/matthuang/status/1963633381859852514" %}

And yeah, I mean, I guess, especially where a lot of this tension has come in on the [Ethereum](https://ethereum.org) side is, you know, this is going to be another [EVM](https://ethereum.org/developers/docs/evm/) chain. So it's kind of like, thanks for the work, guys, we'll do a corporate version now. And, you know, so specifically, [Paradigm](https://www.paradigm.xyz/) are a big part of this.

Now, [Paradigm](https://www.paradigm.xyz/) have spent the last few years kind of building up [Ethereum](https://ethereum.org) stack stuff, you know, kind of being semi well behaved participants within the [Ethereum](https://ethereum.org) ecosystem, carry out a few, you know, VC nasty moments, but essentially building a, you know, hey, we've built a really good new Rust client, right, we do some of the best tooling, you know, with Foundry, right, what you had going on in earlier years, right, we've made a better one. And I think there's about three or four areas where they built sort of [Ethereum](https://ethereum.org) stack stuff, almost like, hey, [here's a full stack, [Ethereum](https://ethereum.org), you know, stack](https://www.paradigm.xyz/oss).

----

> *"Paradigm builds and contributes to projects that advance the frontier. We believe in doing so even when there may not be a direct commercial incentive."*
>
> - [Reth](https://github.com/paradigmxyz/reth) - Modular, contributor-friendly and blazing-fast implementation of the [Ethereum](https://ethereum.org) protocol, written in Rust
> - [Foundry](https://getfoundry.sh/) - Blazing fast, portable and modular toolkit for [Ethereum](https://ethereum.org) application development written in Rust
> - [Alloy](https://github.com/alloy-rs) - Stable, well-tested, and performant building blocks for [Ethereum](https://ethereum.org), in Rust
> - [Artemis](https://github.com/paradigmxyz/artemis) - Framework for MEV bots in Rust, designed to be simple, modular, and fast
> etc ...

----

*(Bob: Here was one particularly nasty moment.  They asked copious questions and then copied the [Erigon architecture](https://erigon.tech/) and made their own Reth client rather than collaborating of the existing Akula Erigon client, leading to that project shutting down and the lead developer quitting the [Ethereum](https://ethereum.org) ecosystem entirely.  There were allegations that they actually copy-pasted some of the code too, without attribution.)*

{% include twitter-embed.html url="https://x.com/vorot93/status/1595480997117706241" %}

Oh, but actually, we're going over that. So like, we've got the answer. And we can just like do a new chain deployment and off you go.

So yeah, that's not been received terribly well. Also, big brain drain, you know, that they are snuffling up a good number of fairly high profile people. [Dankrad Feist](https://x.com/dankrad), one of the main [Ethereum](https://ethereum.org) researchers, key guy behind the proof of stake transition, you know, years of work, you know, him as a primary guy, and he's off, you know, to get his paycheck, fair play to him, you know, a number of other people as well.

{% include twitter-embed.html url="https://x.com/dankrad/status/1979133618254405775" %}

But that's been the current, you know, fire, as GwartyGwart said, this is like if [Greta](https://en.wikipedia.org/wiki/Greta_Thunberg) went to work for BP.

{% include twitter-embed.html url="https://x.com/GwartyGwart/status/1979147842125021655" %}

{% include twitter-embed.html url="https://x.com/ec265/status/1979200294740259304" %}

*(Bob - some calmer worlds from [Vitalik](https://www.earlydaysofeth.org/people/vitalik-buterin/))*

{% include twitter-embed.html url="https://x.com/VitalikButerin/status/1979140260622930348" %}

*(Bob - and interesting and nuanced perspective from [Joe Lubin](https://www.earlydaysofeth.org/people/joe-lubin/) about Paradigm)*

{% include twitter-embed.html url="https://x.com/ethereumJoseph/status/1980279130638672175" %}

[[05:22]](https://www.youtube.com/watch?v=2BR6nodzzos&t=322s) **Victor:**
Well, and to be clear, also, I think we've been talking about [Tempo](https://tempo.xyz), but they're not the only corporate chain like, you know, obviously, [Robinhood](https://robinhood.com/) is launching an L2 on [Arbitrum](https://arbitrum.foundation/).

{% include content-embed.html
  url='https://robinhood.com/us/en/newsroom/robinhood-launches-stock-tokens-reveals-layer-2-blockchain-and-expands-crypto-suite-in-eu-and-us-with-perpetual-futures-and-staking/'
  title='Robinhood Launches Stock Tokens, Reveals Layer 2 Blockchain and Expands Crypto Suite in EU and US with Perpetual Futures and Staking'
  img='/images/images.ctfassets.net/2026.01.05/1hpl803w8xsv/4E2tROkP97kCBGUCTab40e/66763abe1c8e79fb57b3d7e935c1dc3b/Crypto-Event_BlogHeader.webp'
  date="2025-06-30"
%}

[[05:33]](https://www.youtube.com/watch?v=2BR6nodzzos&t=333s) **Kieren:**
I think it's an L1.

[[05:36]](https://www.youtube.com/watch?v=2BR6nodzzos&t=336s) **Bob:**
Yeah, so [Arbitrum stack](https://arbitrum.io/orbit). But yeah, I don't know if it's an L2 or an L1.

*(Bob: So that technology stack is actually called "Arbitrum Orbit")*

They've sort of talked about various bits on that. [Circle](https://circle.com/). [Circle](https://circle.com/) announced Arc.

{% include content-embed.html
  url='https://www.circle.com/blog/introducing-arc-an-open-layer-1-blockchain-purpose-built-for-stablecoin-finance'
  title='Introducing Arc: An Open Layer-1 Blockchain Purpose-Built for Stablecoin Finance'
  img='/images/cdn.prod.website-files.com/2026.01.05/67116d0daddc92483c812ead/68961fad0ee4f552ba5641e3_Blog_Arc-launch-p-1080.jpg'
  date="2015-08-12"
%}

They're not content to be a smart, sorry, a stablecoin on other chains. It's like, right, we're going to do our own chain as well.

I mean, [Base](https://base.org/), you know, the whole [Base](https://base.org/) thing from [Coinbase](https://coinbase.com/), again, you know, they haven't had a token. But, you know, there's your straight path into, you know, into [Coinbase](https://coinbase.com/).

[[06:14]](https://www.youtube.com/watch?v=2BR6nodzzos&t=374s) **Kieren:**
[Tether](https://tether.to/) has a chain or soon, right?

[[06:19]](https://www.youtube.com/watch?v=2BR6nodzzos&t=379s) **Bob:**
I think they announced something. Maybe. I mean, they started out, you know, before [Ethereum](https://ethereum.org) stuff was going, right?

It was on [Omni](https://www.omnilayer.org/) that was previously [Mastercoin](hhttps://web.archive.org/web/20140115133550/http://www.mastercoin.org/), you know, super ancient tech, 2013 era. But then, you know, they later moved to [Ethereum](https://ethereum.org) and many other chains. But yeah, like having their own totally, you know, is something that makes sense.

And I mean, you've had [Binance chain](https://bnbchain.org/) chain, you know, [BNB](https://bnbchain.org/) for years. Pretty much every major exchange seems to have their own chain now. [Uniswap](https://uniswap.org/) has a chain.

{% include content-embed.html
  url='https://blog.uniswap.org/introducing-unichain'
  title='Introducing Unichain'
  img='/images/docs.unichain.org/2026.01.05/og/og.png'
  date="2024-10-10"
  author='Uniswap Labs'
%}

Yeah.

[[06:54]](https://www.youtube.com/watch?v=2BR6nodzzos&t=414s) **Victor:**
Yeah, [Uniswap](https://uniswap.org/) has a chain. But I don't think of those as corporate chains.

[[06:59]](https://www.youtube.com/watch?v=2BR6nodzzos&t=419s) **Kieren:**
Like, it's really- It's hard to tell, right? It's like- It's supposed to align between- For us, by us, or is it sort of like, you know, somehow I see the [Stripe](https://stripe.com) chain as like the incursion of the establishment into our crypto turf, where it's like, and I kind of see [Base](https://base.org/) that way a little bit, where I feel somehow less bad about [Binance chain](https://bnbchain.org/), even though [Coinbase](https://coinbase.com/) in ways like a better actor than [Binance](https://binance.com/). But very much [Coinbase](https://coinbase.com/) just feels like part of the old thing to me.

[[07:34]](https://www.youtube.com/watch?v=2BR6nodzzos&t=454s) **Bob:**
You know, whereas.  I mean, these lines are quite arbitrary. Yeah. You know, there were various discussions I saw as well this week, you know, about "[Ethereum](https://ethereum.org) alignment".

You know, what does that even mean? It's like, so these guys, they're [Ethereum](https://ethereum.org) aligned, so it's okay. So it's okay.

{% include twitter-embed.html url="https://x.com/peter_szilagyi/status/1980009136772227525" %}

 > *I have the utmost respect for [Vitalik](https://www.earlydaysofeth.org/people/vitalik-buterin/), but he became a victim of his own success. Whether he wants to or not*
 > *he is - and has always been - directly defining what becomes successful in Ethereum and what doesn't.*
 > *His attention, direction of researcher brain-power, donations and investments absolutely define which*
 > *projects succeed (at a very high probability). And his opinions absolutely define what's permitted and*
 > *what isn't permitted in the ecosystem at large, so the key to gray-area behaviour is to convince*
 > *[Vitalik](https://www.earlydaysofeth.org/people/vitalik-buterin/) it's ok-ish. Ethereum may be decentralised, but [Vitalik](https://www.earlydaysofeth.org/people/vitalik-buterin/) absolutely has complete indirect control over it.*

 - [Péter Szilágyi](https://www.earlydaysofeth.org/people/peter-szilagyi/) - Geth team lead, 2015-2025, posted as [a Gist](https://gist.github.com/karalabe/a2bc53436f29e0711fe680d59e180f6c)

{% include twitter-embed.html url="https://x.com/sandeepnailwal/status/1980367655937929392" %}

{% include twitter-embed.html url="https://x.com/christine_dkim/status/1980658049527222286" %}

{% include twitter-embed.html url="https://x.com/tkstanczak/status/1980712824684048456" %}


[[07:54]](https://www.youtube.com/watch?v=2BR6nodzzos&t=474s) **Kieren:**
I think what it means, I mean, it's a strange thing that's going on in which- Let's take it to [Bitcoin](https://bitcoin.org) for a second. I've been critical, at least privately, maybe publicly of the Maxi mentality, in which, like, you know, there will only be [Bitcoin](https://bitcoin.org). There's only one sincere crypto asset, you know.

{% include content-embed.html
  url='https://blog.ethereum.org/2014/11/20/bitcoin-maximalism-currency-platform-network-effects'
  title='Bitcoin Maximalism, Currency, Platform, and Network Effects'
  img='/images/blog.ethereum.org/2026.01.05/_next/image/images/eth-org.jpeg'
  date="2014-11-20"
  author='Vitalik Buterin'
%}

Everything after is a scam. And we should all put our energy into [Bitcoin](https://bitcoin.org), but also never really add anything to [Bitcoin](https://bitcoin.org). Maybe very slowly add small things around the margin.

Well, it's just gotta stay secure.

[[08:42]](https://www.youtube.com/watch?v=2BR6nodzzos&t=522s) **Victor:**
It's the, like, we believe in open markets, but we should be the only market. There should only ultimately be a single market.

[[08:49]](https://www.youtube.com/watch?v=2BR6nodzzos&t=529s) **Bob:**
I mean, it's very hypocritical as well for libertarian types. Because it's like, no, no, this is all about freedom from the man, right? You know, yeah, you can't tell me what to do.

Permissionless chains, yeah, but not like that.

<a id="ethereum-alignment-and-competition"></a>

### Ethereum alignment and competition

[[09:07]](https://www.youtube.com/watch?v=2BR6nodzzos&t=547s) **Kieren:**
Everything here, just in this one approved location. Yeah. So I think it's a little bit a repeat of that phenomenon.

I mean, I get it also. I guess, like, I'm kind of a believer in the more permissive open source software licensing. Like, at the same time, maybe [Linus](https://en.wikipedia.org/wiki/Linus_Torvalds) was right as far as, like, [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License) sort of forcing the commercial efforts to accrue back one place.

And, you know, the [BSDs](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution) survived basically with [OS X](https://en.wikipedia.org/wiki/MacOS) to some extent, you know. And perhaps, maybe it outcompeted because it had a [benevolent dictator](https://en.wikipedia.org/wiki/Benevolent_dictatorship) genius, but maybe it outcompeted in part because of the virality of the license. And this is not to say, I think there's a mix of licensing regimes.

I know you've worked on this very directly, [Bob]({{ '/people/bob-summerwill/' | relative_url }}), for the [Ethereum](https://ethereum.org) software. Some of it permissive, some not. But, you know, it's sort of...

Part of it's also, like, a lot of the [Ethereum](https://ethereum.org) people did well enough to either launch the next thing on [Ethereum](https://ethereum.org) or launch the next thing not on [Ethereum](https://ethereum.org) and didn't really have any need for a job, per se, at some point. And so you'd expect something new to come and maybe try to cannibalize the old thing. It's a strange sort of religiosity also.

And I think we experienced it even in, like, back in 2015, even, like, any deviation from [Ethereum](https://ethereum.org) principles was looked askance.

<a id="blockapps-early-corporate-chain-history"></a>

### BlockApps early corporate chain history

[[10:56]](https://www.youtube.com/watch?v=2BR6nodzzos&t=656s) **Victor:**
Well, maybe that's sort of a good transition. Maybe we can, you know, we, as [BlockApps](https://blockapps.net) and [STRATO](https://strato.nexus), went in, you know, with the [Haskell](https://www.haskell.org/) implementation of [Ethereum](https://ethereum.org), went in a corpo-chain direction. Maybe, like, you can talk about why we did that and what happened there.

So we may be partly to blame for this.

*(Bob: The [BlockApps and STRATO](http://blockapps.net) origin story is told in detail in the first episode of [Early Days of Ethereum](https://earlydaysofeth.org)).*

{% include content-embed.html
  url='https://www.earlydaysofeth.org/videos/episode001/'
  title='Early Days of Ethereum - Episode 1'
  img='/images/img.youtube.com/2026.01.05/vi/V2BJX9OkDNo/maxresdefault.jpg'
  date="2024-01-15"
  author='Bob Summerwill'
%}

[[11:20]](https://www.youtube.com/watch?v=2BR6nodzzos&t=680s) **Kieren:**
Partly to blame. And it was barely on purpose. So rolling back in 20, let's say, late 2014, our CTO, [Jim]({{ '/people/jim-hormuzdiar/' | relative_url }}) and I, mostly [Jim]({{ '/people/jim-hormuzdiar/' | relative_url }}), started working on the [Haskell](https://www.haskell.org/) implementation of [Ethereum](https://ethereum.org).

And he pretty quickly got it to the point where it could, like, sync the testnet, you know. And there were some chat groups, a slack. There was a bit of a, the [Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf), I guess, was out at that time.

[[11:53]](https://www.youtube.com/watch?v=2BR6nodzzos&t=713s) **Bob:**
I found an exact date for this, actually. So [Jim]({{ '/people/jim-hormuzdiar/' | relative_url }})'s first commit was mid-September 2014. The yellow paper had been out that April.

[Commit 60d4cad - committed on Sep 14, 2014 - First version of ethereumHaskell - jamshidh/ethereum-client-haskell](https://github.com/jamshidh/ethereum-client-haskell/commit/60d4cadb9ebde7b126b80079dede5ca0d5604a99)

[[12:05]](https://www.youtube.com/watch?v=2BR6nodzzos&t=725s) **Kieren:**
Oh, really?

[[12:06]](https://www.youtube.com/watch?v=2BR6nodzzos&t=726s) **Kieren:**
Yeah. Gotcha.

[[12:08]](https://www.youtube.com/watch?v=2BR6nodzzos&t=728s) **Kieren:**
Yeah. And he might have been working on it for a while before he pushed anything, I think. I would have gotten back.

So we met up. We got introduced by a previous co-founder of [Jim]({{ '/people/jim-hormuzdiar/' | relative_url }})'s, who I had reached out to when I started working on [Ethereum](https://ethereum.org). And we probably spoke the first time June, July, something like that.

(Bob: That previous co-founder was [Steve Hsu](https://www.earlydaysofeth.org/people/steve-hsu/))

And we met up in Berkeley, probably the first time, maybe August or September, or thereabouts. By the way, since then, [Jim]({{ '/people/jim-hormuzdiar/' | relative_url }}) continues to have a client, a habit of building a full client to try to understand a piece of blockchain software. At some point, we were looking into the state of zero-knowledge proofs, and he built a, I believe, full-syncing [ZCash](https://z.cash/) client.

It's definitely missing some features, but we still have that somewhere.

[[13:03]](https://www.youtube.com/watch?v=2BR6nodzzos&t=783s) **Bob:**
As you do.

[[13:05]](https://www.youtube.com/watch?v=2BR6nodzzos&t=785s) **Victor:**
As you do, yeah.

[[13:06]](https://www.youtube.com/watch?v=2BR6nodzzos&t=786s) **Kieren:**
As one does, as one does. So yeah, we should revisit this at some later date. So yeah, so we met up, he started coding, and it got to the point of functional and syncing with the fairly primitive early testnets pretty quickly.

And we didn't quite intend to turn it into a business right at the beginning. But the three of us, that's [Victor]({{ '/people/victor-wong/' | relative_url }}), [Jim]({{ '/people/jim-hormuzdiar/' | relative_url }}), and I met up. January 2015, had a bunch of conferences that I've done, I've spoken about at other times, we can link people to the [Early Days of Ethereum one](https://www.earlydaysofeth.org/videos/episode001/), perhaps?

That helped kind of galvanize the effort. But I think what we had was always like a pragmatic attitude, right? And so shortly after that, one of the first things we built, we found like the API interaction style to be a little odd.

Like the [JSON RPC](https://ethereum.github.io/execution-apis/api-documentation/), the [Web3 library](https://web3js.readthedocs.io), we're kind of like all other APIs are like this, where this is a [REST](https://en.wikipedia.org/wiki/REST) API. We were kind of looking at [Chain.com](https://chain.com/). I think [Chain](https://chain.com/) actually sponsored the conference that we did, or spoke or something.

{% include content-embed.html
  url='https://web.archive.org/web/20161221193900mp_/http://conferences.oreilly.com/bitcoin-blockchain-2015/public/schedule/speaker/193534'
  title='O\'Reilly Bitcoin & Blockchain Conference 2015 - Speaker'
  img='/images/web.archive.org/2026.01.05/web/20150501202133im_/http:/cdn.oreillystatic.com/en/assets/1/event/130/bitcoin2015_video_placeholder.jpg'
  date='2015-07-25'
%}

And it was a good like talk where it was like, well, we've got these 20 great use cases that people are doing out there in the world. Oh, and they're all on chain. You know, [Chain](https://chain.com/) also fairly soon after that seemed to go a corpo chain direction.

*(Bob: So Chain were indeed sponsors for this event, and their CEO, [Adam Ludwin](https://www.lud.win/) spoke on "Building with Bitcoin: 10 Stories in 10 Minutes".  Here are [the slides](https://web.archive.org/web/20150210170938/http://cdn.oreillystatic.com/en/assets/1/event/130/Building%20with%20Bitcoin_%2010%20Stories%20in%2010%20Minutes%20Presentation.pdf_). The event was mainly organized by [Kieren]({{ '/people/kieren-james-lubin/' | relative_url }}) and [Lorne Lantz](https://x.com/lornestar), who together booked most of the speakers, did the intermissions and created the content arc.)*

[[14:48]](https://www.youtube.com/watch?v=2BR6nodzzos&t=888s) **Bob:**
Was that sort of like a [UTXO](https://www.investopedia.com/terms/u/utxo.asp) [Bitcoin](https://bitcoin.org)-y like? Because I know...

[[14:55]](https://www.youtube.com/watch?v=2BR6nodzzos&t=895s) **Kieren:**
I assume so. Yeah, I think they probably either forked one of the [Bitcoin](https://bitcoin.org) clients or maybe they started from scratch. But first, definitely they were trying to be the [Bitcoin](https://bitcoin.org) developer API.

It just didn't feel like there was enough demand at that time. And I assume like us, it was a strange period where you actually got pretty active corporate inbound. Like sometime in 2015 and then later into 2016, it was very common for corporate innovation labs to be running some kind of blockchain tech, usually an [Ethereum](https://ethereum.org) variant.

And, you know, they were very explicit. And maybe, you know, it's sort of like the early cloud days, like we want that thing you've got, but can you just get it on-prem? Like, can you just like, we want the ledger.

We'd want to know who the parties are. You can't just let anyone in here. We're regulated.

We want it though. We really want it. We like this API you've got.

Give it to us. We've got transactions to settle right now with our suppliers. And it all went way slower than that.

But it was like the market was actually like screaming at you for a minute there in a way that, you know, the world feels much different now. Like I think it is certainly true that to like in the, I don't know, 70s or 80s or whatever, it was common for like the [Department of Defense](https://en.wikipedia.org/wiki/United_States_Department_of_Defense) or some giant bank or something to be your first customer. And much later, it's sort of more of the opposite that you'd get like bottoms up devs, small companies first, and then later really big guys.

And it was sort of a strange mix. It's like you get, I think there's like a barbell effect where really big companies have a lot of excess cash to investigate new technologies. And then you get startups, you know, and that was the feeling.

And we would get the inbound from those really big companies and, you know, I think that even that era, you know, I bet they're all doing AI now and maybe that adoption is going, it's probably mixed. But there was a moment there where it was like screaming urgent demand.

<a id="corporate-inbound-and-baas"></a>

### Corporate inbound and Blockchain as a Service

[[17:21]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1041s) **Victor:**
Yeah, I know it's a part of that also, it's like when we launched Blockchain as a Service with Microsoft and we made it easy to effectively build your own test nets on clouds, everyone started doing it, right? And the interesting thing is at that time, the real development seemed to be happening by these corporates in these innovation labs versus, you know, independent devs.

{% include content-embed.html
  src="https://www.youtube.com/embed/x8jIUg5jXjg"
  title="DEVCON1: Microsoft Announcing Ethereum Blockchain as a Service (ETH BaaS) on Azure Cloud"
  site="https://www.youtube.com/@EthereumProtocol"
  author='Ethereum'
  date="November 10, 2015"
%}

{% include content-embed.html
  src="https://www.youtube.com/embed/ExsTb0iglcs"
  title="DEVCON 1: BlockApps STRATO - Victor Wong, Kieren James-Lubin, Jim Hormuzdiar"
  site="https://www.youtube.com/@EthereumProtocol"
  author="Ethereum"
  date="November 10, 2015"
%}

[[17:45]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1065s) **Kieren:**
Yeah, that's right. It felt like, okay, they would come to you with like a [PowerPoint](https://en.wikipedia.org/wiki/Microsoft_PowerPoint) describing the like billion plus dollar problem that they had. This is after all the NDAs were signed and all that sort of thing.

This was like very convincing. It was like, you know, some of the use cases were bad, but a lot of them are like, oh, okay, like you have some like really complicated multi-organization settlement problem that you handle with spreadsheets or some ancient system and it costs a ton of money. And if you actually could upgrade it, it would be way better potentially.

And the vast majority of those did not work out, you know, but it wasn't like they identified the wrong problem. It was like the will to implement across a corporation or multiple corporations. There's big consortium era was probably the issue.

And to some extent, I know we want to talk a little bit about [Libra](https://en.wikipedia.org/wiki/Diem_(digital_currency)), you know, regulatory barriers as well in certain cases, but yeah, it was like, so again, we at first started to be, wanted to be just like the public net API, like [Alchemy](https://alchemy.com/) or an [Infura](https://infura.io/) now. And I think we were just a little early for that. And then also we were going to the effort of maintaining a whole client, which was challenging because things kept changing as they continued to do, but got very much pulled in this, like let's run our own network direction by the corporates.

[[19:15]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1155s) **Victor:**
And I think part of it was at that early time, they couldn't hold ETH. So they were like, we will do all these things, but we can't hold ETH. Can you make a version where we don't need to do it to do all these things?

[[19:28]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1168s) **Kieren:**
I know, yeah, I totally forgot. It was like, treasury doesn't know what to do. It's pretty much like, you know, but no, we've got our procedures.

We can't, you know, it has to get in the [ERP](https://en.wikipedia.org/wiki/Enterprise_resource_planning). We can't have like a line item for that. And, you know, it was like, it just not so.

[[19:45]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1185s) **Bob:**
I mean, I remember with [ErisDB](https://web.archive.org/web/20250903224504/https://erisindustries.com/components/erisdb.html), you know, who became [Monax](https://web.archive.org/web/20170321124508/https://monax.io/) and so on, you know, there. So they started in 2014 as well, when it was still on POC5 before the mainnet. And there you had a situation of a company being set up by lawyers who, you know, really loved the smart contract functionality, but nothing to do with ETH.

It's like ETH is probably an illegal security. Like we don't want to get anywhere near that. It's like, so it really was the, you know, the "blockchain, not [Bitcoin](https://bitcoin.org)" being the phrase at the time.

Though "Blockchain, not [Ethereum](https://ethereum.org)", "not ETH".

[[20:25]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1225s) **Victor:**
But the one thing that was really interesting, like when we launched that blockchain as a service and it got on [Azure](https://azure.microsoft.com), like we had thousands of people spinning up stuff and then a good number of them reaching out to us. And I will say the use cases that didn't seem speculative did come from these corporates, right? Like to [Kieren]({{ '/people/kieren-james-lubin/' | relative_url }})'s point, it's like, like we did get contacted by sort of smaller groups, but they were like, oh, well, we just want to launch our own token and sell it.

Like that, those are all those use cases.

[[20:58]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1258s) **Kieren:**
And then- Well, I mean, that came a little later, actually. I think that took a, once a couple of ICOs had happened, like suddenly everyone wanted to pay someone to build their thing for an ICO. But that was kind of more like 2016 to 2018 phenomenon, I would say.

[[21:14]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1274s) **Victor:**
Yeah, that's true.

[[21:15]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1275s) **Kieren:**
The corporates came first, actually, which was

[[21:16]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1276s) **Victor:**
Yeah, exactly.

And so, I mean, you know, that was our experience. And shortly afterwards, and [Bob]({{ '/people/bob-summerwill/' | relative_url }}), you might have the timing, [Libra](https://en.wikipedia.org/wiki/Diem_(digital_currency)) by [Facebook](https://facebook.com/) came along and they were doing their own thing. Do you know the time?

Yeah, [Libra](https://en.wikipedia.org/wiki/Diem_(digital_currency)) was 18, 17. Yeah, we launched Blockchain as a Service in 2015, right?

[[21:38]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1298s) **Kieren:**
And it's 2015.

[[21:39]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1299s) **Victor:**
So I'm feeling like it was 2016 that [Libra](https://en.wikipedia.org/wiki/Diem_(digital_currency)) launched.

[[21:42]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1302s) **Kieren:**
No, it was later, I think.

[[21:44]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1304s) **Victor:**
Was it?

[[21:47]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1307s) **Bob:**
Okay. Um, there we go.

[[21:48]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1308s) **Victor:**
As our resident historian of all things blockchain.

<a id="libra-announcement"></a>

### Libra announcement and consortium

[[21:51]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1311s) **Bob:**
There we go. June the 18th, 2019.

{% include content-embed.html
  url='https://www.nytimes.com/2019/06/18/technology/facebook-cryptocurrency-libra.html'
  title='Facebook Plans Global Financial System Based on Cryptocurrency'
  img='/images/static01.nyt.com/2026.01.05/images/2019/06/19/sports/19facecoin-sub/19facecoin-sub-superJumbo-v2.jpg'
  author='Mike Isaac and Nathaniel Popper'
  date='2019-06-18'
%}

[[21:54]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1314s) **Victor:**
Oh, I was not right.

[[21:56]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1316s) **Bob:**
Okay, so yeah, at that point, [Meta](https://meta.com/), then [Facebook](https://facebook.com/) (this was before they'd even turned into [Meta](https://meta.com/)), you know, announced it, which is a stablecoin project intended for global payments via its applications, sorry, via its apps. So what you have there, I mean, the other thing worth saying about [Libra](https://en.wikipedia.org/wiki/Diem_(digital_currency)) is [Libra](https://en.wikipedia.org/wiki/Diem_(digital_currency)) is not an [EVM](https://ethereum.org/developers/docs/evm/) project. You know, they had their, I guess, you know, they're like happening like five years later.

So it's like, you know, let's apply all of our learnings of what's worked and what has not worked over that five year period, especially about smart contract security and, you know, having a constrained model.

[[22:43]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1363s) **Kieren:**
Their language seems pretty good to me, actually, but no one uses it. We're stuck with [Solidity](https://www.soliditylang.org/). It will be the [JavaScript](https://en.wikipedia.org/wiki/JavaScript) slash [COBOL](https://en.wikipedia.org/wiki/COBOL) of the crypto age.  We're never getting rid of this thing.

*(Bob - so 'their language' is [Move](https://en.wikipedia.org/wiki/Diem_(digital_currency)#Move) whose development has continued and evolved within the two primary Diem technical successor projects, [Aptos](https://github.com/move-language/move-on-aptos) and [Sui](https://github.com/move-language/move-sui))*

[[22:56]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1376s) **Victor:**
Well, and, you know, like, I think the [EVM](https://ethereum.org/developers/docs/evm/) has become the standard, right? Like that's just, you know, I mean, [Redwan](https://x.com/RedoudouM), was mentioning that [last week]({{ '/videos/institutions-want-tokens-how-is-ethereum-keeping-up/' | relative_url }}). And I think that that is true, basically, to a certain degree.

[[23:08]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1388s) **Bob:**
Yeah, yeah. I mean, I think it's the [JavaScript](https://en.wikipedia.org/wiki/JavaScript). It's the [C](https://en.wikipedia.org/wiki/C_(programming_language))).

It's good enough that stuff got made on it and it's never going away. Yeah. It's going to be, you know, this stuff is going to be there forever.

Or like [Unix](https://en.wikipedia.org/wiki/Unix).

[[23:21]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1401s) **Victor:**
But [Libra](https://en.wikipedia.org/wiki/Diem_(digital_currency)) had, sorry, yeah. But the launch of [Libra](https://en.wikipedia.org/wiki/Diem_(digital_currency)), they had super high profile partners, if I recall.

[[23:29]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1409s) **Kieren:**
Very similar, actually, to the kind of, it was mostly like payment networks and notably no banks. It felt like a tech company disintermediation play. Like, well, if we just had these stables, then we wouldn't have to have the bank accounts at the edge, too.

And we could just, and I think this is kind of what killed it, right? Like the banks each called up their representative and just screamed about big tech, you know, monopoly power.

[[24:07]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1447s) **Bob:**
So here's a list. So [Facebook](https://facebook.com/), [Uber](https://uber.com/), [Spotify](https://spotify.com/), [Andreessen Horowitz](https://a16z.com/), I don't know why they would be in there. [Anchorage Bank](https://anchorage.com/), [Lyft](https://lyft.com/), [Xapo](https://www.xapobank.com/), [Coinbase](https://coinbase.com/), [Union Square Ventures](https://usv.com/).

So yeah, it's actually a crappier list by far than [Tempo](https://tempo.xyz).

[[24:32]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1472s) **Kieren:**
You know, [Mastercard](https://mastercard.com/) was in until like the last second.

[[24:36]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1476s) **Bob:**
Right.

[[24:37]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1477s) **Kieren:**
People started making regulator noise and they dropped, I think maybe [Visa](https://visa.com/), too.

<a id="why-libra-failed"></a>

### Why Libra failed

[[24:43]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1483s) **Victor:**
So I guess that gets into the question, like, why didn't that work, right? Like, and I think we touched, like, I recall [Mark Zuckerberg](https://en.wikipedia.org/wiki/Mark_Zuckerberg) having to like talk to [Congress](https://en.wikipedia.org/wiki/United_States_Congress).

{% include content-embed.html
  url='https://www.theverge.com/interface/2019/10/24/20929265/mark-zuckerberg-libra-hearing-congress-backlash'
  title="After this week's hearing, Libra really might be in trouble"
  img='/images/platform.theverge.com/2026.01.05/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/19314251/1182969985.jpg.jpg'
  author='Casey Newton'
  date='2019-10-24'
%}

[[24:56]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1496s) **Bob:**
I just found these exits. So the major exits out of that were [PayPal](https://paypal.com/), [Visa](https://visa.com/), [Mastercard](https://mastercard.com/), [Stripe](https://stripe.com).

[[25:04]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1504s) **Victor:**
Right, yeah.

{% include content-embed.html
  url='https://www.theverge.com/2019/10/11/20910330/mastercard-stripe-ebay-facebook-libra-association-withdrawal-cryptocurrency'
  title="Facebook's Libra Association crumbling as Visa, Mastercard, Stripe, and others exit"
  img='/images/platform.theverge.com/2026.01.05/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/16677181/VRG_ILLO_3512_001.jpg'
  author='Russell Brandom'
  date='2019-10-11'
%}

[[25:05]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1505s) **Bob:**
[eBay](https://www.ebay.com). And they all, like, dropped out real super fast, didn't they? And I mean, I think there was a mixture of things.

This is my thoughts. Maybe you guys have got different thoughts. Firstly, everyone hated [Facebook](https://facebook.com/) because they just had the [Cambridge Analytica stuff](https://en.wikipedia.org/wiki/Facebook%E2%80%93Cambridge_Analytica_data_scandal).

{% include content-embed.html
  url='https://www.nytimes.com/2018/04/04/us/politics/cambridge-analytica-scandal-fallout.html'
  title='Cambridge Analytica and Facebook: The Scandal and the Fallout So Far'
  img='/images/static01.nyt.com/2026.01.05/images/2018/03/21/business/00cambridgestory6/merlin_135756423_8ac3aeb6-7781-4912-b9e5-fd7210e35170-superJumbo.jpg'
  author='Nicholas Confessore'
  date='2018-04-04'
%}

It's like, we're not going to trust you, you guys, like, no. But then the second one was like regulatory stuff because it was going to be like a, because it was kind of going up against the dollar, right? It was this, it was like, why are we going to have a basket of things?

So it wasn't just a straight stablecoin. It's like, oh, we're kind of having a go at the US dollar.

[[25:46]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1546s) **Kieren:**
And they cut the banks out of it too. That's the third point. Like, and it's also like, the banks are fond of making their, I guess they're called market utilities.

They're bank owned industry cabals, like the [Swift](https://swift.com/), the [DTCC](https://dtcc.com/). A lot of the exchanges are like this. I guess even the, I don't really understand how they work.

Even the [Fed](https://en.wikipedia.org/wiki/Federal_Reserve) is bank owned. But it basically like, the banks pooled a bunch of capital a long time ago. And they set up this thing that you kind of have to use.

And the profits from using that thing go back to them. And it's also like a chokepoint, and like under other circumstances, you would have some sort of antitrust issue in doing this. Like, it's kind of like definitionally collusion.

But you also need these things, right? To make the whole thing function. But it seemed like when tech attempted to do that itself, like the banks still had the ear of the relevant parties and shut it down.

[[27:01]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1621s) **Bob:**
But I mean, that's happening here again, right? It's almost the same people. And it's basically saying, right, you know, the banks and the credit card companies to a lesser degree, like own these pipes.

And we had to like sit on top kind of thing and service. Yeah. How about like if us Fintech, techie companies, the [Silicon Valley](https://en.wikipedia.org/wiki/Silicon_Valley) ones instead, how about?

[[27:31]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1654s) **Kieren:**
I think it would be cool if it happened.

By the way, I always thought, though I'm a bit of a Big Tech hater, I always thought [Libra](https://en.wikipedia.org/wiki/Diem_(digital_currency)) was at least cool. Like it would be interesting.

[[27:44]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1664s) **Victor:**
Yeah, I mean, the technology behind it, you know, it was [UTXO](https://www.investopedia.com/terms/u/utxo.asp) based, but it seemed pretty good. Like they did a good job from the technology side.

[[27:54]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1674s) **Bob:**
Yeah, yeah, I think so. And not just doing like sort of a lazy job, I guess. Because talking about some of those earlier phases, it's like, right, oh, we're going to take [Bitcoin](https://bitcoin.org) and it's an Enterprise [Bitcoin](https://bitcoin.org).

OK, and then it's like, right, sort of same deal on the [EVM](https://ethereum.org/developers/docs/evm/)s. But because they were that many years later, it was sort of almost like a clean room kind of effort. I think actually [R3](https://r3.com/) did this with [Corda](https://corda.net/), right? They did some really good blogs, right, from [Richard General Brown](https://x.com/gendal), sort of saying, hey, we looked at all of the things that these existing techs are doing and, you know, whatever, there's these four or five different elements.

{% include content-embed.html
  url='https://gendal.me/2017/12/04/not-all-business-blockchain-platforms-are-alike-to-succeed-they-need-to-reimagine-business-computing/'
  img="/images/miro.medium.com/2026.01.05/1*EFNG4museflkdpWBW1yuzw.jpeg"
  title='Not all business blockchain platforms are alike – To succeed, they need to re-imagine business computing'
  author='Richard Gendal Brown'
  date='2017-12-04'
%}

And for our scenario, we need three of them, but we could do something else completely different. You know, a different kind of solution. I think that kind of happened with [Libra](https://en.wikipedia.org/wiki/Diem_(digital_currency)) as well.

It's like, let's get some brainiacs.

[[28:52]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1732s) **Victor:**
And it's sort of the same with [Fabric](https://github.com/hyperledger/fabric) too, right? Like, I mean, they were trying to do something.

[[28:59]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1739s) **Kieren:**
Yes, [Fabric](https://github.com/hyperledger/fabric) is a funny case too. I think in all of these cases, they correctly identified problems with [Ethereum](https://ethereum.org) and related tech. And in essentially none of them did they solve those problems.

They came at it with different approaches. Like, I really tried to, I always liked [Corda](https://corda.net/) too. It was clean.

I actually find the [UTXO](https://www.investopedia.com/terms/u/utxo.asp) stuff, especially enhanced [UTXO](https://www.investopedia.com/terms/u/utxo.asp), to be aesthetically pleasing. I think even [Avalanche](https://avax.network/) has one of those and no one uses it.

And when you really pressed, like the [Corda](https://corda.net/) people were like, we're compliant.

We've got privacy. You know, we've got, and what you had was like a central ordering thing and no privacy whatsoever if you wanted to double spend protection. And it was like, it was still cool and clean.

And I liked their state facts and this and that, but largely smoke and mirrors. [Fabric](https://github.com/hyperledger/fabric) was not good. You know, it was like a hack together.

Like if you think about what a system integrator would build, it's like, well, we've got a [Kafka](https://kafka.apache.org/) thing. We've got this other thing. We've got a little bit of inter-process communication.

We've got an API, like that's what it was. It was like, I don't think there was a real clean vision for [Fabric](https://github.com/hyperledger/fabric).

[[30:20]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1820s) **Bob:**
You mean like something [IBM](https://ibm.com/) might build?

[[30:24]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1824s) **Kieren:**
Yes. It's like, well, if you just kind of put this thing with that thing and there's a consensus, it's kind of like a blockchain.

[[30:35]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1835s) **Bob:**
You'll never get sacked for buying it either.

[[30:38]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1838s) **Kieren:**
Yeah. You won't get stuck. It's open source.

[[30:42]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1842s) **Victor:**
Yeah. And I think one of the common things was like all of those things had no token incentives, right? So like you kind of had to go down that route to a certain degree because how else do you make sure, how else do you get something blockchain like, I do think if you don't have token incentives, really, it all kinds of falls apart to a certain degree.

Yeah.

[[31:03]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1863s) **Bob:**
Well, I mean, you know, the model that you had, right, for all of these is, well, these are running within a consortium which already has legal agreements, you know, so we don't need to be permissionless because we know who's done the bad shit and we've got a contract and we'll sue you or whatever. And if you have got that situation, well, there's a whole lot of simplification that you can do, you know, if you look at [Proof of Work](https://en.wikipedia.org/wiki/Proof_of_work) in particular, you know, and what that overhead that you have on [Bitcoin](https://bitcoin.org) or [Ethereum](https://ethereum.org) at that time is incredibly expensive way of doing things, you know, versus the simpler approaches.

Like the stats I saw from a thing [Colin Platt](https://x.com/colingplatt) did in around 2018 was like, he worked out it was maybe as much as 100 million times more expensive to do stuff on the [EVM](https://ethereum.org/developers/docs/evm/) versus a single AWS node that you're running yourself where you've obviously got complete trust, but that's like the overhead, right?

{% include content-embed.html
  url='https://medium.com/@colin_/analysing-costs-benefits-of-public-blockchains-with-data-104ec5f7d7e0'
  title='Analysing Costs & Benefits of Public Blockchains with Data'
  img='/images/miro.medium.com/2026.01.05/v2/resize:fit:720/format:webp/0*0fMDCWlSczQe8M7c.'
  author='Colin Platt'
  date='2018-04-10'
%}

That's what you're paying.

[[32:07]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1927s) **Kieren:**
It's quite a bit of overhead.

<a id="first-era-failures"></a>

### Why the first era of corporate chains didn't work

[[32:08]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1928s) **Victor:**
So why do you guys, and you know, that's part of the answer, and I'm just kind of curious from you guys, I have my own view, is like, why do you think the first era of corpo chains didn't work?

[[32:19]](https://www.youtube.com/watch?v=2BR6nodzzos&t=1939s) **Kieren:**
I think the biggest factor is that the organizations were not ready to behave in a blockchainy way. And at the time that manifested in feature requests, like it's missing X. Can my competitors see my customers?

Like, what are the balances? What are the, you know, will they be able to see total trading volumes, sales volumes, you know? And that's still a problem on the public nets, et cetera.

But it's sort of just like, you kind of have to let it be, embrace it. Like they would have had to like, turn it on persistently at small volume and then like, kind of like let it grow and fix the problems as they went. And what they instead wanted was like a totally complete product that fits perfectly in their current workflow and existing regular, like one thing people really are using are seem to sincerely be using stables for like global internal clearing and settlement.

And we actually, you know, I won't say the names, but we competed for, didn't win a project for like a big, call them a utility that's global to do that. And the use case was actually really good. And they had such tremendous volumes that like dealing with the currency fluctuations was like a giant line item that they had to deal with.

And they wanted a permission chain for it. You could just do it with stables today. You know, that's why there'll always be a little bit of demand for non-USD stables.

But like, you may as well just use the public chains to move money around the world now, right. And then you could build from that into various other use cases. I believe [Stripe](https://stripe.com) even does this.

I think I've heard them say that.

[[34:33]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2073s) **Victor:**
And PayPal does it.

[[34:35]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2075s) **Kieren:**
And that's what they would have needed to do. And instead it was like, they had to like go very top down. There's budgeting, setting up legal entities, maybe investing in a consortium, you know, very tight rules about how did, you know, how the data could flow, which data, all that sort of thing.

And it sort of, it led to like a strangulation where you would kind of just need to like let it bloom a little bit. And that's what the public chains did. They also had the incentive mechanism and it's not like there's a ton of corporate usage of public chains now, although I guess there's like institutional style financial usage that's now quite large.

But even for like, I think you'll see some corporate operational stuff, which again, the like stablecoin, you know, global clearing remittance, settlement remittance stuff is starting to get there. I think that will happen the way I described, as opposed to, again, like these folks all have done extremely heavy IT implementations. Like I've heard that at least in the era when [Oracle](https://oracle.com) and [SAP](https://sap.com) were big at it, on average, an [ERP](https://en.wikipedia.org/wiki/Enterprise_resource_planning) implementation takes 5% of global revenue, no matter the size.

So like the bigger you are, just like, I think [Victor]({{ '/people/victor-wong/' | relative_url }}), maybe you mentioned to me once like working on one for like a full decade.

[[36:06]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2166s) **Victor:**
When I started at a company, they had already been working on an [SAP](https://sap.com) implementation. And when I left six years later, they were still working on it. So it was just like, yeah, the project.

[[36:22]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2182s) **Kieren:**
It's hard to do things incrementally in corporate, but in part, it's because it's super complicated and very regulated and whatever, but it's also mentality too. Like, just kind of like turn it on and then just start it. I mentioned this is what happened with the cloud.

Like they're like, all right, let me just do this one little thing. And it's easy. And you keep just putting more and more on there.

And now you have like, I think like [JP Morgan](https://jpmorgan.com/) turned almost all of its on-prem stuff off and it's all on [Amazon](https://aws.amazon.com) or all on, you know? So I think that was the problem. And the consortium model really means you gotta like pre-think and have like multi-party agreements with everybody.

And like, then it's, you know, the negotiation was endless. It's hard to do the data modeling. You know, I think that was the problem at its core.

But I think it came down, if the corporations like had this, like, let's just play with it mentality, you might've gotten where I'm describing.

[[37:22]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2242s) **Victor:**
Yeah, and [Bob]({{ '/people/bob-summerwill/' | relative_url }}), what do you think? Do you have any of you to add on?

[[37:25]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2245s) **Bob:**
Yeah, I mean, I think a lot of it is just technical maturity as well. You know, there wasn't really any ZK, so it's like, how do you do privacy? How does that work?

And, you know, and I mean, that's how [Quorum](https://consensys.net/quorum/) like came into existence was that, you know, [Amber](https://x.com/AmberBaldet) and the team at [JP Morgan](https://jpmorgan.com/) wanted to do something and without like a privacy story, it was never gonna get approved. Like they wouldn't be allowed to do anything. So it was like, okay, well, what's the thing we could do?

Okay, we can have a [private database](https://github.com/Consensys/constellation) and like that can be offered around the side and you just do hashes on the main net and, you know, the other bits are permissioned. So it's kind of like, you know, there's a workaround for it. But, you know, they did that with open eyes knowing like the ZK stuff is coming late, but it's not there.

*(Bob: So that private database was [Constellation](https://github.com/Consensys/constellation), which ran as a separate process in tandom with a Geth-fork - [GoQuorum](https://github.com/Consensys/Quorum))*

{% include content-embed.html
  url='https://fortune.com/2016/10/04/jp-morgan-chase-blockchain-ethereum-quorum/'
  title='JPMorgan Chase Reveals It\'s Developing a Blockchain Based on Ethereum'
  img='/images/www.ledgerinsights.com/2026.01.05/wp-content/uploads/2018/05/Depositphotos_169974804_m-2015-810x525.jpg'
  author='Jeff John Roberts'
  date='2016-10-04'
%}

We have to do some hacky thing. Otherwise, we're literally not gonna be allowed to do anything.

{% include twitter-embed.html url="https://x.com/pmylund/status/1598094336226656256" %}

I mean, there was also a story that ...

[[38:21]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2301s) **Victor:**
I think that's true too.

[[38:25]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2305s) **Kieren:**
While I agree with you, I still think everyone who found that deficiency none of them solved it better really than what exists in the public chains out there today. I keep asking the AIs and looking around the internet on the state of ZK, having still not really there, maybe a little bit, you know, and the enterprises all want the following permissioning model. Like, I should be able to send value to [Victor]({{ '/people/victor-wong/' | relative_url }}).

He should know that whatever I have really exists. You should be able- he should be able to send it on to you. You should be able to verify that [Victor]({{ '/people/victor-wong/' | relative_url }}) had it, but not know that it came from me or how much he has, total.

And the regulator should somehow be able to see all of this, at least in a financial services setting. And it mostly can't do that still. I kind of can't really tell.

Like, I think [ZCash](https://z.cash/) is the closest and then there are various ZK things both on, as like, a lot of the ZK is for efficiency, like throughput as compared for privacy at this time. But mostly that use case still can't really be done. There's some hints that there's like a [Cosmos](https://cosmos.network/), which you never hear about, project that kind of does that.

I have a summary, I think I've sent you before, but it's still not there, but they are using it, right? [Stripe](https://stripe.com) is moving money around the world. I also think it's like the rigidity of the mentality actually being a big factor.

[[40:06]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2406s) **Bob:**
Totally. I mean, the other thing is there is scaling though, right? Yes.

At that time, it was like, yeah, you've just got the [Ethereum](https://ethereum.org) mainnet and everything's got to go on it. So it's like useless. But we've really got way better L2 story now.

So that's...

[[40:23]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2423s) **Victor:**
Well, I kind of think the fundamental problem from my point of view is like they don't think of themselves like communities and they don't want to share, right? So like when I talk about tokenomics, I think tokenomics provides you a system where participants can get everything. So not to go into names of the projects, but we built some very large consortium chains.

And then at some point, every single one of those chains said, oh, well, we need data from this source that this group of people have. And then the question is like, well, why would that group - shippers or whatever - provide that data? And there are always answers like, oh, we'll just force them to do it.

But it never worked.

[[41:10]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2470s) **Kieren:**
This is a big reason. And I guess this is in part what I meant by mentality. But yes, the incentive alignment specifically was a huge problem where like a lot of the time, it's like either one of them wants the thing way more than the others and is willing to pay for it.

Yeah. Or like, this is like the [Walmart](https://walmart.com/), [IBM](https://ibm.com/) thing that didn't do anything.

{% include content-embed.html
  url='https://www.forbes.com/sites/astanley/2018/10/08/ready-to-rumble-ibm-launches-food-trust-blockchain-for-commercial-use/'
  title='Ready To Rumble: IBM Launches Food Trust Blockchain For Commercial Use'
  img='/images/specials-images.forbesimg.com/2026.01.05/dam/imageserve/1045633280/960x0.jpg'
  author='Andy Stanley'
  date='2018-10-08'
%}

[[41:34]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2494s) **Bob:**

[Maersk](https://maersk.com) as well ...

{% include content-embed.html
  url='https://www.forbes.com/sites/michaeldelcastillo/2018/08/09/ibm-maersk-blockchain-platform-adds-92-clients-as-part-of-global-launch-1/'
  title='IBM, Maersk Blockchain Platform Adds 92 Clients As Part Of Global Launch'
  img='/images/specials-images.forbesimg.com/2026.01.05/imageserve/176619985/960x0.jpg'
  author='Michael del Castillo'
  date='2018-08-09'
%}

[[41:36]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2496s) **Kieren:**
Or a bunch of parties have roughly equal interest in the thing, but then like no one really wants to pay for it.

It's like, it gets treated like a utility, like, well, let's pay cost recovery in, you know, and like, it's slow. There's not the urgency to get those sort of things done. And in both cases, you have big trouble attracting like the rest of the value chain, right?

And so we concluded you definitely just had to turn the thing on and let them come in as they're ready. And, you know, one way or another, and I think it's worked the best in public chains because there's sort of a common token, if you will, and people are excited about the value of that token rising. By the way, this goes back to like, other than technological deficiencies, like why do people decide to stick with [Ethereum](https://ethereum.org) or do something else?

And it's like, what's going to make the most money? Like, [Ethereum](https://ethereum.org)'s got a lot of assets on it. Maybe you can get some of them.

Maybe you should just sit there. But, you know, if there's something you're just bumping your head against and you can't quite figure out how to, you might have to, you know, go leave, which is, you know, plenty of people have experienced that, like ourselves.

[[42:52]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2572s) **Victor:**
Yeah, and it's true for any real platform, like the app stores, right? Everyone, you know, myself included, we built for [iOS](https://developer.apple.com/ios/) first because they figured out payment, they figured out micropayments really quickly so we could get paid for what we did, right? So, okay, here's a question that we'll close out on.

<a id="future-predictions"></a>

### Are corporate chains the future or DOA?

Are the new round of corpo chains the future or are they DOA based on similar problems? I'll start with [Bob]({{ '/people/bob-summerwill/' | relative_url }}) on this one.

[[43:21]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2601s) **Bob:**
They are not solving the same problems as truly permissionless ecosystems. However, it's not a winner-takes-all either. So I think maybe the losers here are gonna be the banks, that they can get their business eaten a lot easier than this can cannibalize [Bitcoin](https://bitcoin.org) or [Ethereum](https://ethereum.org), I think.

[[43:50]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2630s) **Victor:**
Okay. [Kieren]({{ '/people/kieren-james-lubin/' | relative_url }}), your verdict, DOA or are they the future?

[[43:55]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2635s) **Kieren:**
I think we'll get a couple long-lived corpo chains. I agree with that. I think they'll be semi-niche.

I mean, I think of [Swift](https://swift.com/) as a corpo chain. Yes. [DTCC](https://dtcc.com/) corpo chain.

They just happen to not be using a blockchain and both of them are sort of trying to, right? So we're not gonna completely get rid of that. I think they won't go huge.

And they might actually be enormous volume, but I both won't be allowed to do and probably will never run a validator on one. I agree also that they're not going to siphon that much value from public chains. I think the tech may be similar back-end pipes from your bank account or when [Stripe](https://stripe.com) launches bank accounts versus your [MetaMask](https://metamask.io/) account, but that they're not really gonna be that much intermingling to the two.

Like one will have bearer assets, one largely will not. And the uncensorability is really important at the end of the day. So yeah, so I don't think they'll go away.

I think it's very... So I think the most immediate failure mode on all of these is political. Like if we see a big flip around, they'll get killed again.

Where the permissionless chains will maybe suffer in price a little bit, but probably not. But I am surprised that the banks... I mean, they're already trying to rewrite the [Genius Act](https://www.congress.gov/bill/118th-congress/house-bill/4763) so that [Coinbase](https://coinbase.com/) can stop to prevent [Coinbase](https://coinbase.com/) from offering rewards.

And one way or another, the banks are finished either from the fintechs or crypto or both. The big ones around and are kind of tech companies anyway, but it is only regulatory capture protecting them at this point.

[[46:17]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2777s) **Bob:**
Yeah. I mean, I think it is both because payments is quite different from lots of other things happening on the blockchain side, right?

[[46:24]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2784s) **Victor:**
Yeah.

[[46:25]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2785s) **Bob:**
You know, savings, store of value, dApps. You're not gonna run dApps on [Tempo](https://tempo.xyz). Yeah.

You're not gonna save your money in [Tempo](https://tempo.xyz) coin.

[[46:37]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2797s) **Kieren:**
Right. I mean... I agree.

There will not be a lot of like DeFi on [Tempo](https://tempo.xyz), for instance, sort of because of the too closed of environment. You won't get the compositional aspect of things, probably because they won't allow it. Like I think in theory you could, but you won't.

[[46:56]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2816s) **Victor:**
Yeah. So my view is that the projects that might succeed in this space have to have two properties. One is they have to be driven by at least mostly one company.

I don't think this like idea of like the bigger names who have all together, like, you know, we've experienced this. That just slows everything down to your point.

[[47:19]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2839s) **Kieren:**
A lot of grandstanding. Legal departments.

[[47:21]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2841s) **Victor:**
It sounds good, but operationally it's terrible. But the other thing is that they have to have that sort of community mindset from the start. I think things like [Base](https://base.org/) and [Binance Chain](https://bnbchain.org/) have been able to do this because they brought a Web3 mentality, even though they drilled it at first.

And so I think the projects are likely to kind of evolve on those projects. That'd be my prediction.

[[47:50]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2870s) **Bob:**
And I guess also because, you know, their customer base are crypto-y people. You know, it's a similar kind of group.

[[47:57]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2879s) **Victor:**
And they understand those demands, right?

[[48:00]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2880s) **Bob:**
Yeah, like people will be going for retail.  It's going to be normal retail, you know, [Apple Pay](https://apple.com/apple-pay/), [Tempo](https://tempo.xyz) Pay.

[[48:06]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2886s) **Kieren:**
Yeah, you're not going to know you're using [Tempo](https://tempo.xyz), most likely. It could. Yeah, I guess the banks could really suffer or it could be the credit card networks that really suffer.

[[48:17]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2897s) **Victor:**
I mean, I think the first victim is [Swift](https://swift.com/). But yeah. So, well, on that note, I'll give a quick preview to everyone.

Let's wrap up today's conversation. Thank you for joining us. Quick preview for next week.

We have [Brian](https://x.com/BSmokes_), Founder of [PistachioFi](https://www.pistachio.fi/), joining us next week to talk about, you know, starting a new project. And his background, actually, he was previously an employee at [BlockApps](https://blockapps.net). So we know him very, very well.

*(So that is [Brian Smocovich](https://www.linkedin.com/in/brian-smocovich))*

So if you want to find us, we're always doing this every week. But if you want to find me, you can find me on X at [vic4wong](https://x.com/vic4wong). You can find out why it's, I have the four in my name.

*(Bob - Here's [the clip](https://www.youtube.com/watch?v=15MltoqMjZU&t=2531s) where I asked that)*

Bob has posted that on our Telegram.

> **Victor:** So four is a number that no Chinese person likes because it sounds suspiciously like death.
> So it's, you know, back in the world of eight character usernames, I could always get "vic4wong" having an
> Asian name with the number four in it, like pretty much guaranteed that I could get it.

Thanks. [Bob]({{ '/people/bob-summerwill/' | relative_url }}), where can people find you for if they want to hear more from you?

[[49:07]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2947s) **Bob:**
So yeah, again, X. So Bob, Summer Will. So Summer, like the season.  Will, like write your will. That's [me](https://x.com/bobsummerwill).

[[49:15]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2955s) **Victor:**
And [Kieren]({{ '/people/kieren-james-lubin/' | relative_url }}), where can people find you?

[[49:17]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2957s) **Kieren:**
Also X, [K James Lubin](https://x.com/kjameslubin). It's K James Lubin. L-U-B-I-N.  James, J-A-M-E-S.

[[49:24]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2964s) **Victor:**
Well, thank you everyone for joining us and have a great week. Talk to you soon.

[[49:30]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2970s) **Bob:**
Thanks, guys.

[[49:31]](https://www.youtube.com/watch?v=2BR6nodzzos&t=2971s) **Victor:**
Thanks.
