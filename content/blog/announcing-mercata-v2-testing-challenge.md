---
title: "Announcing the Mercata V2 'Trading and Testing Challenge'"
date: "2025-09-16"
description: "Our long-awaited Mercata V2 contest is starting tomorrow, Wednesday 17th September 2025. The contest will start at 5pm Eastern time, during our 17th September Twitter Spaces."
categories: "Community"
img: /images/strato.nexus/2025.10.13/Screenshot-2025-09-16-Dashboard.png
featured: false
author: "Bob Summerwill"
authorTitle: ""
---

## Introduction

Our long-awaited Mercata V2 contest is **starting tomorrow, Wednesday 17th September 2025**. The contest will start at 5pm Eastern time, during our [17th September Twitter Spaces](https://x.com/i/spaces/1dRKZapkNXVxB), and the winners will be announced on our 24th September Twitter Spaces exactly a week later.

As was the case for the [first competition back in July](/blog/announcing-the-mercata-v2-trading-competition/), there is a dual focus on trading and testing, but the scope for testing feedback is more limited this time. We are **only** looking for reports on critical exploits and for major improvement suggestions. Bridging functionality between Ethereum's Sepolia testnet and the Mercata testnet has been added and is within scope for exploit testing.

## Prizes

There are three main prizes and all competitors will receive a small number of CATA points too:

1. **Bridge and Trade:** The competitor with the highest total combined asset value. The winner must hold a non-zero-balance of every major Mercata asset (USDST, ETHST, WBTCST, GOLDST, SILVST) to qualify and will receive $500 USDC and CATA points
2. **Worst exploit:** The individual who reports the highest‑impact critical exploit that causes loss of funds will receive $1500 USDC and CATA points
3. **Best suggested improvement:** The best suggested improvement which we like the most, and which is implementable will receive $500 USDC and CATA points

## Sign up

Sign up now, so you are ready on the starting line as soon as the contest opens!

- Join our [Telegram channel](http://t.me/stratomercata)
- Create fresh STRATO Mercata testnet and Ethereum Sepolia testnet accounts (anybody with prior balances will be excluded)
- Create a STRATO Mercata mainnet account, if you do not already have one, to receive your CATA points
- Add METH and MUSDC tokens to your Sepolia MetaMask wallet (see below)
- Fill in the [Onboarding Form](https://docs.google.com/forms/d/e/1FAIpQLScmAkmQLhvojL3fQ4wwdxBKTQwOcQEAdjo4BO74H_GUpq4OCw/viewform) with the name you want to go by, those addresses and (optionally) your social handles
- The [Leaderboard](https://stratoscan.testnet.strato.nexus/leaderboard) will be continuously updated.

## Initial assets

Here is the **[link to the application](https://app.testnet.strato.nexus/)**.

When the competition starts, your accounts on both networks will be credited with some assets on both testnets and you can trade and bug-hunt away until **5pm Eastern on Tuesday 23rd September 2025**. Specifically, you will receive:

- 1,000 MUSDC on Sepolia (Mercata USDC) which can be "converted" to USDST on Mercata
- 0.5 METH (Mercata ETH) which can be "bridged" as ETHST on Mercata
- 0.01 Sepolia ETH to cover the gas fees for bridging from Sepolia
- 100 USDT on Mercata

To report exploits or suggested improvements, log an issue in the [Open Source repo](https://github.com/blockapps/strato-mercata-opensource/issues/new), tagging your new issue with either "Exploit" or "Improvement" as appropriate. Out of scope issues will be kindly closed.

## How to add these custom Mercata tokens to MetaMask

[Sepolia](https://ethereum.org/developers/docs/networks/#sepolia) is the preferred testnet for Ethereum which we will be using during the competition. Sepolia is being used as a proxy for the Ethereum mainnet, which the production Mercata V2 will use. Competitors will be bridging assets from Sepolia into the Mercata testnet.

We are using two custom tokens on Sepolia so competitors will have to add those tokens to their Sepolia wallet. Here we assume MetaMask, but any other Ethereum wallet which supports Sepolia will work just fine too.

- Change your network to Sepolia
- To import tokens, click the three dots in the top corner of the Tokens tab and select Import Tokens and then add:
  - **Mercata ETH (METH)**
    - Address: 0xE46550c8d3c4e5A04Da14a948543D918D69f3dF1
    - Token decimal: 18
  - **Mercata USDC (MUSDC)**
    - Address: 0x46e96acF148b019da71E41F36239833f550dFeB9
    - Token decimal: 18

![MetaMask Import Process](/images/stratoscan.testnet.strato.nexus/2026.01.05/_next/static/media/import2.c399facb.png)

![MetaMask Token Details](/images/stratoscan.testnet.strato.nexus/2026.01.05/_next/static/media/import1.578ea21c.png)

The token symbol and decimals should populate automatically.

## How to Bridge Tokens from Sepolia Ethereum

As part of the competition you will need to bridge over mUSDC and mETH.

{% include content-embed.html
  src="https://www.youtube.com/embed/xrv_fasbZtk"
  title="Bridging Tokens to Mercata V2"
  site="https://www.youtube.com/@stratomercata"
  author="STRATO Mercata"
  date="September 16, 2025"
%}

{% include content-embed.html
  src="https://www.youtube.com/embed/tO0b08JfEkM"
  title="Mercata V2 Bridge Tutorial"
  site="https://www.youtube.com/@stratomercata"
  author="STRATO Mercata"
  date="September 16, 2025"
%}
