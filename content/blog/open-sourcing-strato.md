---
title: "Open sourcing STRATO"
date: "2026-03-04"
description: "Complete open-sourcing of the STRATO platform, applications and tools."
categories: "Updates"
img: /images/youtube.com/2025.12.09/epicenterbtc/-aSBcAlHREI/victor-and-kieren.png
featured: false
author: "Bob Summerwill"
authorTitle: ""
---

Last year we [took our first step](/blog/open-sourcing-strato-mercata) in the open sourcing of the STRATO platform with a snapshot of the main repository.

**Today we complete that journey with the full release of the repository - all 30,000+ commits and eleven years of development!**

Today's release is the complete STRATO platform monorepo. It brings the full stack into one codebase: the Haskell blockchain core and node services (`strato/`), the application layer with smart contracts, backend services, and UI, and the operational tooling around them (Docker/bootstrap scripts, packaging, CI pipelines, and technical docs). Keeping these components together lets protocol, APIs, contracts, and operations evolve in lockstep, enables end-to-end testing of real workflows, and gives contributors a single source of truth for building and improving the platform:

{% include content-embed.html
  url="https://github.com/strato-net/strato-platform"
  title="strato-net/strato-platform"
  description="The complete STRATO platform monorepo is now public on GitHub, including the Haskell node and blockchain core, application services, tooling, and docs from over a decade of development."
  img="/images/app.strato.nexus/assets/strato-DMDUTOsw.png"
  site="https://github.com"
%}

See [Setup Guide](https://docs.strato.nexus/contribute/setup/),  [Contribution Guide](https://github.com/strato-net/strato-platform/blob/develop/CONTRIBUTING.md) and [Security policy](https://github.com/strato-net/strato-platform/blob/develop/SECURITY.md)

The core of STRATO is the Haskell Ethereum client software which was built in 2014, during the very early days of Ethereum, prior even to the Ethereum mainnet launch. This codebase was instrumental to the very first Blockchain-as-a-Service (BaaS) offering announced at DEVCON1 in London in 2015 in collaboration with Microsoft, bringing blockchain nodes to Azure.

The timeline is documented clearly in video transcripts from both this site and the [Early Days of Ethereum](https://www.earlydaysofeth.org/) archive:

- In *Are Corporate Chains Back?*, [Kieren says at 11:20](https://www.youtube.com/watch?v=2BR6nodzzos&t=680s): "late 2014 ... Jim and I ... started working on the Haskell implementation of Ethereum."
- In the same episode, [Bob adds at 11:53](https://www.youtube.com/watch?v=2BR6nodzzos&t=713s): "Jim's first commit was mid-September 2014," linking to [commit `60d4cad`](https://github.com/jamshidh/ethereum-client-haskell/commit/60d4cadb9ebde7b126b80079dede5ca0d5604a99).
- In *Early Days of Ethereum - Episode 1*, [Jim says at 48:21](https://www.youtube.com/watch?v=V2BJX9OkDNo&t=2901s) that he started from the Yellow Paper and implemented it in Haskell, then [at 48:35](https://www.youtube.com/watch?v=V2BJX9OkDNo&t=2915s): "bit by bit putting the whole EVM in Haskell code."
- In the same episode, [Jim says at 49:06](https://www.youtube.com/watch?v=V2BJX9OkDNo&t=2946s) they already "had a working client" and were tracking fast-changing pre-mainnet testnet behavior.
- In the DEVCON1 STRATO talk, [Victor says at 00:19](https://www.youtube.com/watch?v=x8jIUg5jXjg&t=19s): "We're the team behind the Ethereum Haskell implementation."
- In the DEVCON1 Microsoft Azure talk, [Marley Gray says at 08:47](https://www.youtube.com/watch?v=ExsTb0iglcs&t=527s): "I remember July 31st when Frontier came out ... [it took] two days ... to get the damn thing up and running," highlighting exactly why easier deployment mattered.

{% include content-embed.html
  src="https://www.youtube.com/embed/ExsTb0iglcs"
  title="DEVCON1: Microsoft Announcing Ethereum Blockchain as a Service (ETH BaaS) on Azure Cloud"
  site="https://www.youtube.com/@EthereumProtocol"
  author="Ethereum"
  date="November 10, 2015"
%}

{% include content-embed.html
  src="https://www.youtube.com/embed/x8jIUg5jXjg"
  title="DEVCON 1: BlockApps STRATO - Victor Wong, Kieren James-Lubin, Jim Hormuzdiar"
  site="https://www.youtube.com/@EthereumProtocol"
  author="Ethereum"
  date="November 10, 2015"
%}

The codebase was considered for contribution into [Hyperledger](https://hyperledger.org) back in 2016, but that did not come to fruition, with [Hyperledger Burrow](https://github.com/hyperledger-archives/burrow) and later [Hyperledger Besu](https://github.com/hyperledger/besu) being the first Ethereum codebases to make it into the Linux Foundation's open source blockchain collaboration project. BlockApps were founding members of the [Enterprise Ethereum Alliance](https://entethalliance.org) (EEA).

This open sourcing process was a primary motivation for me to join the STRATO team last year. There is magical empowerment in decentralization and I had a front-row seat to the early stages of the birth of [Ethereum](https://ethereum.org), of the [Enterprise Ethereum Alliance](https://entethalliance.org) and of [Hyperledger](https://hyperledger.org) as that landscape formed.

BlockApps had a big hand in that history and we have been fellow-travelers for all of these years. For me personally, overseeing and driving the open sourcing of STRATO is a delightful next phase to that collaborative story.
