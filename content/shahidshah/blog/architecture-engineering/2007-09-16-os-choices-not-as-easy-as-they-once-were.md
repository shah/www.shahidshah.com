---
title: OS choices not as easy as they once were
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
date: 2007-09-16T14:14:29+00:00
url: /2007/09/16/os-choices-not-as-easy-as-they-once-were/
ratings_users:
  - 2
ratings_score:
  - 6
ratings_average:
  - 3
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
As most of us probably know, Windows Server is currently the most popular choice for most &#8220;mission critical&#8221; packaged applications for office automation  but, that&#8217;s changing. According to Forrester Research, &#8220;firms name a wide variety of operating systems (OSes) that they use for critical apps, and 29% name two or more. More than half of North American enterprises would consider switching OSes, and among them, Linux is the top choice, with 37% of switchers.&#8221; 

What does this mean? For one, don&#8217;t just assume Windows is the only game in town. It also means that your customers are going to want more control over their OS decision. My own work in the government consulting arena has shown that non-Windows server are gaining popularity as well (anecdotally).

The best way to &#8220;future proof&#8221; yourself is to choose an operating system that you can easily deploy as a virtual appliance. I&#8217;ve been recommending this to most of my clients for the past few years but it&#8217;s even more important now. What this means is that instead of shipping package software with an installer, just ship a completely stripped down virtual appliance running either Linux or or free operating system and include your database, OS, app, and everything together in one &#8220;system&#8221;. Later, if users want to move to a different database they simply switch configurations.

To help with your virtual appliance building, installation, and maintenance check out [rPath][1]. They&#8217;ve got some nice solutions when you&#8217;re building either physical or virtual appliances.

 [1]: http://www.rpath.com