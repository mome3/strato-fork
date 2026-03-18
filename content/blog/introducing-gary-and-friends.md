---
title: "Introducing Gary and Friends: AI Coding Projects from STRATO Mercata"
date: "2025-05-23"
description: "During the STRATO Mercata quarterly offsite last month, each team member worked on AI-assisted coding projects. The AI assisted coding tools are progressing at breakneck speed, and the utility and productivity gains are frankly stunning."
categories: "Community"
img: /images/chatgpt.com/2025.10.27/gary-and-friends.png
featured: false
author: "Bob Summerwill"
authorTitle: ""
---

During the STRATO Mercata quarterly offsite last month each of the team members worked on AI-assisted coding projects for the week that we were together in Brooklyn. I **[tweeted about my own project](https://x.com/BobSummerwill/status/1913281826736771457)** at the time, but in this blog post I will start to introduce some of the other projects.

The AI assisted coding tools are progressing at breakneck speed, and the utility and productivity gains are frankly stunning.

## Table of Contents

- [A Brief History of AI Development Tools](#a-brief-history-of-ai-development-tools)
- [The Evolving Landscape of AI Development Tools](#the-evolving-landscape-of-ai-development-tools)
- [Gary: Your Surprisingly Helpful Terminal Assistant](#gary-your-surprisingly-helpful-terminal-assistant)
- [Gripbook: Claude MCP Integration with Mercata Marketplace](#gripbook-claude-mcp-integration-with-mercata-marketplace)
- [Mercata Multi-Hop RAG LLM: Advanced Codebase Intelligence](#mercata-multi-hop-rag-llm-advanced-codebase-intelligence)

## A Brief History of AI Development Tools

Way back in the mists of time of the mid '90s, I was an Undergraduate at the University of Leeds studying Computer Science with AI. In the decades since that time, practical progress on AI was glacial (see "[AI Winter](https://en.wikipedia.org/wiki/AI_winter)"). Within the last few years, though, we have seen huge advances, with the debut of ChatGPT in late 2022 perhaps being the most obvious inflection point in the public's awareness of this shift. GitHub Copilot also hit general release that same year. Some of the other AI coding assistance products have only hit the market in 2024 or even as late as just the last few months.

## The Evolving Landscape of AI Development Tools

A variety of different tools were used by our team members, including [Claude](https://claude.ai/), [Cursor](https://www.cursor.com/), [Cline](https://cline.bot/), [ChatGPT](https://chatgpt.com/), [Loveable](https://lovable.dev), [OpenAI](https://openai.com/index/openai-api/) and [Weaviate](https://weaviate.io/). It's a rapidly evolving landscape, and jumping between different tooling should be an expectation for anybody experimenting with their own workflow.

### Project Overview

Today I'll be introducing three of the projects we built, starting with the titular Gary.

## Gary: Your Surprisingly Helpful Terminal Assistant

![Gary AI assistant]({{ site.baseurl }}/images/strato.nexus/2025.10.13/gary-chatgpt-image.jpg)

_(thanks for the photo, ChatGPT!)_

### Technical Implementation

[Gary](https://github.com/blockapps/gary) was written by Jim Hormuzdiar, and is an surprisingly terse Haskell command-line application which really packs a punch. The application uses the OpenAI GPT-4.1 API and persists previous queries in a simple history text file. Gary wraps your command-line shell in "Gary-ness", and can generate and run shell commands on your behalf. Gary is like a command-line equivalent of the more common IDE-hosted coding assistants.

### Gary in Action: Command-Line AI Assistant Demonstrations

It's easier to demonstrate than to describe. Here are some screenshots of Gary in action:

![Gary demo 1]({{ site.baseurl }}/images/strato.nexus/2025.10.13/Screenshot-from-2025-05-15-14-59-08.png)

![Gary demo 2]({{ site.baseurl }}/images/strato.nexus/2025.10.13/Screenshot-from-2025-05-15-15-03-20.png)

![Gary demo 3]({{ site.baseurl }}/images/strato.nexus/2025.10.13/Screenshot-from-2025-05-15-15-05-48.png)

Of course, you're not constrained to asking Gary for help with coding:

![Gary general questions]({{ site.baseurl }}/images/strato.nexus/2025.10.13/Screenshot-from-2025-05-15-15-14-38.png)

## Gripbook: Claude MCP Integration with Mercata Marketplace

The second project which I'm going to introduce here was written by [Ariya Amarjargal](https://github.com/aariya50) and uses Anthropic's Model Context Protocol (MCP) to implement a Mercata MCP server, enabling [Claude](https://claude.ai) to interact with the Mercata marketplace. Claude is Anthropic's flagship product – a conversational AI similar to ChatGPT. Beyond Claude, both OpenAI and Microsoft have also recently announced support for MCP, so it's becoming a standard.

Meet [Griphook](https://github.com/blockapps/griphook), with the cultural reference left as an exercise to the reader!

Here we are using the Claude desktop client, which is available in official releases for Windows and macOS.

![Claude desktop]({{ site.baseurl }}/images/strato.nexus/2025.10.13/Screenshot-from-2025-05-16-14-45-49.png)

### How Model Context Protocol (MCP) Powers Marketplace Integration

So how does this work? Our MCP server is a straightforward nodejs application containing a number of "tools" whose functionality is then available within the Claude desktop. The real magic here is that Claude just works out what these tools are and how to use them based purely on the text they are returning and its own intuition and training set.

![MCP tools]({{ site.baseurl }}/images/strato.nexus/2025.10.13/Screenshot-from-2025-05-16-14-50-15.png)

Within Claude's Developer settings you point to the server's build directory and also need to specify a few environment variables to configure the server appropriately for your own username/password and client ID/secret.

### Conversational AI Interface for Complex Platform Operations

Then Claude has been "taught" about STRATO Mercata and you can ask it questions about reserves, about your own balance and details, and can ask it to borrow, purchase or stake assets:

![Claude interacting with Mercata]({{ site.baseurl }}/images/strato.nexus/2025.10.13/Screenshot-from-2025-05-16-14-26-58.png)

At the time of writing there is some bug related to the user login in my own use of it, but funnily enough, the way that plays out is even more impressive, because the AI is able to find its own workaround to the problem!

### The Future of AI-Friendly Platform Development

Having this kind of conversational interface wrapping a platform is really powerful. You are blending the LLM's general understanding of the world from its training set in with specific integration with STRATO Mercata platform. It is easy enough to imagine these kind of systems being composed and layered such that the lower level systems are completely abstracted away. Rafts of manual engineering work can be eliminated. Rather than exposing APIs and then third-party developers having to use those APIs to implement their own web or mobile applications you can just make your platform AI friendly and then AI assisted tools can do the rest. Even just in these brief examples above you can see that Claude is correctly inferring a raft of contextual understanding which is way richer than the raw REST APIs.

## Mercata Multi-Hop RAG LLM: Advanced Codebase Intelligence

The final project was written by David Nallapu and has a mouthful of a name – [mercata-multi-hop-rag-llm](https://github.com/blockapps/mercata-multi-hop-rag-llm) 🙂

![RAG LLM interface]({{ site.baseurl }}/images/strato.nexus/2025.10.13/Screenshot-from-2025-05-16-15-04-34.png)

Again, like Gary and Griphook, this project is making contextual information available to an LLM so that you can interact with it in a conversational form. In this instance the information about STRATO Mercata being incorporated is detailed information about the codebase itself to assist developers to work on the platform.

### Vector Database Integration for Comprehensive Code Analysis

The repository uses git submodules to "import" multiple STRATO git repos into a subdirectory and then Weaviate, a Vector DB, is populated using key elements of the codebase.

As you can see in the output, we're indexing Haskell files, Solidity and DOCX documentation, all to build context on the platform.

This step of the process takes several minutes. Then we launch the frontend:

![RAG LLM frontend]({{ site.baseurl }}/images/strato.nexus/2025.10.13/Screenshot-from-2025-05-16-15-42-23.jpg)

### RAG vs Traditional IDE: Superior Results for Large Codebases

Coding questions about well known projects and codebases can work quite well within general LLMs (ChatGPT, Grok, etc) but they don't really work for STRATO Mercata. Here we are augmenting the LLM with a retrieval system which has already parsed and indexed a raft of information about the STRATO Mercata codebase. This approach yields better results than IDE environments like Cursor or Cline, where they are having to "learn about" the codebase as you work, often overflowing their available context space for large codebases.

### Interactive Documentation: Beyond Static Technical Content

The results from this approach are very impressive, showing deep understanding of the codebase and generating documentation of comparable quality to a good technical, but with the huge advantage of not just being static content. You can ask it whatever you like, and dig into deeper detail as you go. If we can find a good means of hosting a public instance of this project then we should certainly do so. In the meantime, you can follow the instructions on the repository to run your own instance.

![RAG query example 1]({{ site.baseurl }}/images/strato.nexus/2025.10.13/Screenshot-from-2025-05-21-14-31-09.jpg)

![RAG query example 2]({{ site.baseurl }}/images/strato.nexus/2025.10.13/Screenshot-from-2025-05-21-14-36-58.jpg)

![RAG query example 3]({{ site.baseurl }}/images/strato.nexus/2025.10.13/Screenshot-from-2025-05-21-14-41-08.jpg)

## Key Insights: Common Themes and Experimental Success

These three projects had common themes and provided a lot of utility for a few days of experimental effort.

I hope you enjoyed meeting Gary and friends! Until next time …
