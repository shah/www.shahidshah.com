---
title: Don’t forget to do network simulation in all your testing efforts
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
date: 2006-07-27T16:11:59+00:00
url: /2006/07/27/dont-forget-to-do-network-simulation-in-all-your-testing-efforts/
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
I&#8217;ve noticed that most of my clients have finally been convinced that unit testing and regular automated acceptance testing is a &#8220;good thing.&#8221; However, I&#8217;ve noticed that load/stress testing, while moving up in importance, still has a long way to go. Even those doing load testing, though, forget to do proper network simulation to make sure that their tests will valid with &#8220;real world&#8221; network traffic.

So, the simple advice is to be sure to use network traffic generators and network load simulators when testing your software. A good option is something like [Simena][1]. It&#8217;s not expensive and works well.

 [1]: http://www.simena.net/