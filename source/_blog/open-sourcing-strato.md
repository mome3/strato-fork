---
title: "Open sourcing STRATO"
date: 2026-03-04
author: "Bob Summerwill"
img: /images/youtube.com/2025.12.09/epicenterbtc/-aSBcAlHREI/victor-and-kieren.png
description: "Complete open-sourcing of the STRATO platform, applications and tools."
categories: ["Press Release"]
---

Last year we [took out first step](/blogs/open-sourcing-strato-mercata) in the open sourcing of the STRATO platform with a snapshot of the main repository.

Today we complete that journey with the full release of the repository - all 30,000+ commits and eleven years of development!

[https://github.com/strato-net/strato-platform](https://github.com/strato-net/strato-platform)

The core of STRATO is the Haskell Ethereum client software which was built in 2014, during the very early days of Ethereum, prior even to the Ethereum mainnet launch. This codebase was instrumental to the very first Blockchain-as-a-Service (BaaS) offering announced at DEVCON1 in London in 2015 in collaboration with Microsoft, bringing blockchain nodes to Azure.

{% include content-embed.html
  src="https://www.youtube.com/embed/x8jIUg5jXjg"
  title="DEVCON1: Microsoft Announcing Ethereum Blockchain as a Service (ETH BaaS) on Azure Cloud"
  site="https://www.youtube.com/@EthereumProtocol"
  author="Ethereum"
  date="November 10, 2015"
%}

{% include content-embed.html
  src="https://www.youtube.com/embed/ExsTb0iglcs"
  title="DEVCON 1: BlockApps STRATO - Victor Wong, Kieren James-Lubin, Jim Hormuzdiar"
  site="https://www.youtube.com/@EthereumProtocol"
  author="Ethereum"
  date="November 10, 2015"
%}

The codebase was considered for contribution into [Hyperledger](https://hyperledger.org) back in 2015, but that did not come to fruition, with [Hyperledger Burrow](https://github.com/hyperledger-archives/burrow) and later [Hyperledger Besu](https://github.com/hyperledger/besu) being the first Ethereum codebases to make it into the Linux Foundation's open source blockchain collaboration project. BlockApps were founding members of the [Enterprise Ethereum Alliance](https://entethalliance.org) (EEA).

There have been public repositories in the [BlockApps Github](https://github.com/blockapps) organization for many years, but the core platform itself has always been closed source with commercial licensing. That changes today.

Our initial release is a rough-and-ready snapshot of the STRATO Mercata platform monorepo, so that we have a starting point for iteration:

[https://github.com/blockapps/strato-mercata-opensource](https://github.com/blockapps/strato-mercata-opensource)

Having being developed behind closed doors for a decade, we come into the sunlight blinking our eyes and squinting. There will be technical debt and many rough edges. None of that negates the huge value in battle-tested and mature code which has been load-bearing in serious enterprise scenarios for close to a decade. The [technical documentation](https://docs.blockapps.net/) is also in need of an overhaul.

See [Contribution Guide](https://github.com/blockapps/strato-mercata-opensource/blob/main/CONTRIBUTING.md) and [Readme](https://github.com/blockapps/strato-mercata-opensource/blob/main/README.md).

Future steps will see the decoupling of STRATO Mercata as a platform and ecosystem from [BlockApps](https://blockapps.net/company/about-us/) as a corporate entity. This will be reflected in branding, websites, social media channels and in Github, where a new organization will be created. Code will be migrated across as the open sourcing and rebranding progresses.

This open sourcing process will be a major part of my initial [work as Head of Ecosystem](https://blockapps.net/blog/bob-summerwill-joins-blockapps-as-key-industry-leader/), and it was a primary motivation for me to take on this role in the first place. There is magical empowerment in decentralization and I had a front-row seat to the early stages of the birth of [Ethereum](https://ethereum.org), of the [Enterprise Ethereum Alliance](https://entethalliance.org) and of [Hyperledger](https://hyperledger.org) as that landscape formed. BlockApps had a big hand in that history and we have been fellow-travelers for all of these years. For me personally, overseeing and driving the open sourcing of STRATO Mercata is a delightful next phase to that collaborative story.

_– Best wishes, Bob_
