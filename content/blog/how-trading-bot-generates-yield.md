---
title: "How an Autonomous Trading Bot Generates Yield on STRATO"
date: "2026-02-09"
description: "You deposit into a vault, an autonomous bot trades on your behalf, and you withdraw whenever you want — with more than you put in. Here's how it actually works."
categories: "Guides"
img: "/images/strato.nexus/2026.02.09/trading-bot-cover.jpg"
featured: true
author: "Michael Tan"
authorTitle: ""
---

You deposit into a vault, an autonomous bot trades on your behalf, and you withdraw whenever you want — with more than you put in. Here's how it actually works.

## What the Bot Does

STRATO hosts AMM pools for on-chain assets — ETHST, BTCST, GOLDST, SILVST, wstETHST — all paired against USDST, our dollar-pegged stablecoin. These pools use constant-product pricing (x × y = k), and because prices are set by the ratio of reserves, they drift from real-world prices as trades happen.

The arbitrage bot watches seven of these pools simultaneously, comparing each pool's price against a live oracle feed every 60 seconds — Alchemy for crypto assets, on-chain oracles for metals. When the gap between pool price and market price exceeds the swap fee plus a minimum profit threshold, the bot trades.

The core problem it solves is keeping pool prices accurate. Without active arbitrage, AMM prices drift from reality and the pools become useless for real trading. The bot continuously corrects these mispricings, and the yield it earns is the reward for providing that service.

For example: if a pool prices ETHST at $3,400 while the market says $3,420, the bot buys ETHST cheap in the pool, pushing the price back toward reality while capturing the $20 spread minus the 0.3% swap fee. Everyone who trades after that gets a better quote.

## How Yield Flows to Depositors

Users deposit into a vault — USDST, ETHST, or any other supported asset — and the vault mints share tokens proportional to total equity. Those deposited assets are held by a bot executor address, which the arbitrage bot uses as its trading capital.

Every profitable trade increases total equity, and share values rise accordingly. There's no lockup and no staking period; you can withdraw your shares at any time and receive tokens proportional to the vault's current NAV.

The math is straightforward: if the vault holds $100K in equity with 100K shares outstanding, each share is worth $1. The bot captures $500 in arbitrage profits, and now the vault holds $100.5K — each share is worth $1.005. Yield accrues through NAV appreciation, not token emissions or inflationary rewards.

In practice, vault depositors have seen 5–10% monthly total returns, driven by a combination of arbitrage profit and underlying asset appreciation. The assets the bot trades — ETH, BTC, gold, silver — are volatile enough that mispricings appear continuously throughout the day, and the bot captures them around the clock. That same volatility means the assets themselves can move meaningfully in your favor.

These returns reflect early-stage conditions: the bot has limited competition and the pools are still growing. As more liquidity enters, arbitrage margins will naturally compress — which is exactly the point. High yields attract capital, capital deepens the pools, and deeper pools make the whole system more robust. If you're going to deposit, now is when the math is most favorable.

## The Trading Strategy

The bot uses a closed-form formula to calculate the exact optimal trade size for each opportunity:

**Optimal input = (√(k / P) − x) / (1 − f)**

Where k is the pool's constant product, P is the oracle price, x is the current reserve, and f is the fee. This isn't iterative guessing — it's a single calculation that maximizes profit per trade.

The bot also selects direction automatically — selling when the pool overprices an asset and buying when it underprices — so no manual intervention is needed.

## What Risk You're Underwriting

This is not risk-free yield, and it's worth understanding what can go wrong.

**Market exposure.** The vault holds volatile assets, so if ETH drops 30% between trades, the vault's equity drops with it — even if every individual trade was profitable. The bot doesn't hedge; it arbitrages. In a sustained downturn, returns could be offset by asset depreciation.

**Oracle risk.** The bot trusts its price feeds. If an oracle delivers a stale or incorrect price, the bot could trade in the wrong direction. Using both Alchemy and on-chain oracles mitigates this, but doesn't eliminate it entirely.

**Liquidity risk.** The bot can only trade as large as its balances and pool liquidity allow. In thin pools, optimal trade sizes shrink, and so does yield.

**Smart contract risk.** Funds sit in a bot executor address that interacts with AMM pool contracts. A bug in pool logic or the vault contract could result in loss of funds.

**Minimum reserves.** The vault maintains minimum reserve balances per asset to ensure withdrawals can be fulfilled. In extreme scenarios, some assets may be temporarily illiquid for withdrawal.

## What Makes This Different

**Real yield, not emissions.** Most DeFi yield comes from token emissions — you earn governance tokens that dilute over time. This bot generates yield from actual economic activity, buying low and selling high continuously, denominated in the assets you deposited rather than some separate reward token.

**Internalized profits.** Protocols like Hyperliquid pioneered the idea of internalizing market-making profits with HLP — instead of leaking value to external market makers, the protocol captures it and returns it to depositors. We're doing the same with arbitrage. Without the vault, external bots would extract this value from the system. With it, the profits stay in and flow back to depositors.

**HODL plus fees.** Think of it as being a "super LP." Traditional liquidity providers earn swap fees but bleed value through impermanent loss. Vault depositors hold assets — like you would anyway — while the bot generates fee income on top by trading directionally with cost basis protection, rather than passively quoting both sides of the book. You get the upside of LP fee income without the IL drag.

**Fully autonomous.** No human is picking trades or timing markets — the bot runs 24/7, scanning every minute, and executing whenever the math is in its favor.

## The Bottom Line

You deposit assets into a vault, an autonomous agent trades across seven pools capturing mispricings against real-world oracles, and profits flow back to you through increasing share value. You withdraw when you want.

The risks are real — volatile asset exposure, oracle dependence, smart contract trust — but so is the yield: actual trading profit, compounding around the clock, with the best margins available to those who get in early.

---

The arbitrage bot is open source at <a href="https://github.com/blockapps/arbitrage_bot" target="_blank">github.com/blockapps/arbitrage_bot</a>
