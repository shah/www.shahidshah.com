---
title: Caching expensive content
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
date: 2005-11-11T13:55:40+00:00
url: /2005/11/11/caching-expensive-content/
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
A friend of mine asked me for some suggestions for tools that allow caching content that was generated through some expensive process. I&#8217;ve had good success with OSCache but offered him this list of open source projects to check out:

  * [SwarmCache (cluster-aware caching)][1]
  * [OSCache][2]
  * [EHCache (used in Spring, too)][3]
  * [JBossCache][3]
  * [JCS (Java Caching System)][4]
  * [WhirlyCache][5]

Also look at at [Cache Providers][6], it summarize _some_ of the differences between these cache providers.

 [1]: http://swarmcache.sourceforge.net/
 [2]: http://www.opensymphony.com/oscache/
 [3]: http://ehcache.sourceforge.net/
 [4]: http://jakarta.apache.org/jcs/
 [5]: https://whirlycache.dev.java.net/
 [6]: http://www.hibernate.org/hib_docs/reference/en/html/performance.html#performance-cache