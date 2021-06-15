---
title: Real-time data/app state replication
author: Shahid Shah
type: post
layout: single-shahidshah
mastHead: "Influencer"
breadcrumbs:
- Home
- profiles
- Individuals
- Influencer
- Shahidshah
- Blog
- Architecture and Engineering
breadcrumbLinks:
- "/"
- "/profiles/individuals/influencer/shahidshah/"
- "/profiles/individuals/influencer/shahidshah/"
- "/profiles/individuals/influencer/shahidshah/"
- "/profiles/individuals/influencer/shahidshah/"
- "/profiles/individuals/influencer/shahidshah/blog/architecture-engineering/"
- "/profiles/individuals/influencer/shahidshah/blog/architecture-engineering/"
date: 2005-10-07T16:32:03+00:00
url: /2005/10/07/real-time-dataapp-state-replication/
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
Several of my clients need the ability to write thin-client applications that need to work consistently even when momentarily disconnected. I ran across an interesting technology at IBM called [FluidSync][1]. It seems to be helpful in those situations when a user needs to use an application across several devices and be able to maintain the application state across the devices seamlessly. For example, if a nurse is moving between several rooms across several computers she would be able to run the same application across the machines and see the same data across the machines while she moves. Seems very nice for data replication.

 [1]: http://www.alphaworks.ibm.com/tech/fluid?open&S_TACT=105AGX59&S_CMP=GR&ca=dgr-jw17awfluid