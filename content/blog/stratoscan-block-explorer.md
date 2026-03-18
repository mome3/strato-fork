---
title: "STRATOSCAN: New Public Block Explorer for STRATO Mercata"
date: "2025-07-07"
description: "We are delighted to unveil the first iteration of STRATOSCAN, our public block explorer!"
categories: "Updates"
img: "/images/strato.nexus/2025.10.13/stratoscan-screenshot.png"
featured: false
author: "Bob Summerwill"
authorTitle: ""
---

We are delighted to unveil the first iteration of STRATOSCAN, our public block explorer!

Check it out at **[https://stratoscan.strato.nexus](https://stratoscan.strato.nexus)**.

It features pages for:

- blocks by height
- transactions by hash
- accounts by address

These follow the URL patterns popularized by [Etherscan](https://etherscan.io). There was a stalled attempt at standardizing those URLs with [EIP-3091: Block Explorer API Routes](https://eips.ethereum.org/EIPS/eip-3091), but while the EIP was not finalized, the pattern appears to have been set in practice anyway.

STRATOSCAN currently supports the following routes, with plans to expand:

```
<BLOCK_EXPLORER_URL>/block/<BLOCK_HASH_OR_HEIGHT>
<BLOCK_EXPLORER_URL>/tx/<TX_HASH>
<BLOCK_EXPLORER_URL>/address/<ACCOUNT_ADDRESS>
<BLOCK_EXPLORER_URL>/token/<TOKEN_ADDRESS>  (coming soon)
```

Token support is on the horizon, following a major refactoring to transition most STRATO Mercata on-chain assets to the ERC20 standard.

By adopting these standard block explorer patterns, STRATOSCAN simplifies integration with wallets, exchanges, and other service providers for the STRATO Mercata ecosystem.

This is an early release, and we'd love your feedback to help us improve!
