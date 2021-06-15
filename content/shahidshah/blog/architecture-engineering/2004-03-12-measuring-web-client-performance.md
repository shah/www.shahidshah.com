---
title: Measuring web client performance
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
date: 2004-03-12T21:34:15+00:00
url: /2004/03/12/measuring-web-client-performance/
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
Today I was asked about the best way to measure client-side performance for heavily-used web applications. Since I spend more of my time in Java/J2EE I pretty much end up using tools written for Java. I have found and use two primary tools for client-side performance measurement: IBM&#8217;s Page Detailer (available at AlphaWorks) and the Charles Web Debugging Toolkit (available at SourceForge). Of the two, I&#8217;ve found IBM&#8217;s page detailer to do what almost no other tool does &#8212; provide accurate samples of &#8220;page weights&#8221; or how heavy a page is with respect to the number of resources it contains. For example, if you look at any web page it will consist of HTML (one object) plus numerous other objects like JavaScript, CSS, and other related &#8220;external resources&#8221;. Everyone of the external resources will require a connection to the webserver and if you count up those extra &#8220;hits&#8221; it will end up slowing your pages down. The IBM Page Detailer utility, which works as a proxy server, is an excellent tool to help you measure and therefore reduce the size of your pages&#8217; external resources. The Charles Web Debugger is a great way to simulate, using software-based throttling, how your end user&#8217;s will perceive your application&#8217;s performance. It works as a proxy server to intercept your calls and provide you all kinds of statistics about page size, number of connections, speed, etc. If you need to measure client-side performance (and who doesn&#8217;t!) you should definitely give both the IBM Page Detailer and the Charles Web Debugger a spin.