---
title: Simulaneously running Linux and Windows
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
date: 2004-05-03T01:44:16+00:00
url: /2004/05/02/simulaneously-running-linux-and-windows/
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
Over the past few years I&#8217;ve been using PC virtualization software such as [VMware][1] and [Virtual PC][2] to run multiple operating systems simulatneously (I&#8217;ve got a dual-CPU AMD with 2GB RAM and about 400GB disk space so computing power is not a problem). For example, to connect to my a client&#8217;s office network using a VPN I created a separate virtual workstation and run Cisco&#8217;s VPN software in the virtual workstation. That way, I can connect via both the VPN and my local network connection at the same time. It works like a charm. Also, I&#8217;ve created some &#8220;play workstations&#8221; that I can install new software in without affecting my &#8220;real&#8221; workstation. I run Debian Linux as a virtual workstation too. So all this works great, but sometimes I want to be able to run Linux software in the same address space (instead of a separate PC) and have to use something like Cygwin. However, a few weeks ago I ran across a new Linux distribution called [coLinux][3] that allows you to run Linux software under Windows (allowing Linux to _cohabitate_ with Windows). Although the software is pretty new and not quite bug-free, it&#8217;s worth taking a look at if you want run Linux software and your Windows applications side by side.

 [1]: http://www.vmware.com
 [2]: http://www.microsoft.com/virtualpc
 [3]: http://www.colinux.org