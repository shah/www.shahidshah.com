---
title: Automated testing of GUIs
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
date: 2004-03-21T03:14:03+00:00
url: /2004/03/20/automated-testing-of-guis/
dsq_thread_id:
  - 3163182558
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
On Friday I attended the annual [University of Maryland Technology Fair][1]. Most of the presentations were academic and didn&#8217;t seem immediately applicable (due to the fact that I&#8217;m a software guy and the presentations were hardware-related). However, one of the presentations, entitled &#8220;Techniques and Tools for Testing Event-Driven Software&#8221;, caught my I and I sat through the entire talk. I found it to be both enlightening and applicable to many of the problems that I try to solve on a daily basis. One of my clients, who is working on a desktop-based GUI application using .NET, is using test-driven development techniques and good unit testing processes to help maintain quality at the algorithm and class levels. However, once they&#8217;ve integrated their classes and put them to use via GUI it becomes very difficult to test. Here&#8217;s where the &#8220;Techniques and Tools for Testing Event-Driven Software&#8221; became applicable.
  
<!--more-->

Atif Memon, the author of the paper and the presenter, talked about ways of automating GUI apps through an discovery process which, when given an application&#8217;s executable, will map out all the events that the GUI will generate and product test case scenarios that a tester can then use to produce test cases. I thought this was quite helpful and seemingly much better than the &#8220;record and replay&#8221; method of conducting normal GUI-based tests. If you have a need for GUI testing you should check out the materials Atif has made available at [his site][2].

The following was the abstract to his talk: &#8220;The importance of testing has been highlighted in a recent article on CNN.com, which says that the US loses $60 billion annually due to software defects. I will discuss techniques developed by us for automated testing of an important class of software, namely event-driven software. Examples of such software include web applications, graphical user interfaces, device drivers, embedded systems, and network protocols. I will discuss formal models for testing an important subclass of event-driven software, namely graphical-user interfaces (GUIs) and a new algorithm called &#8220;GUI ripping&#8221; that automatically extracts the architecture of the software from its object file. These models have now been implemented in a general-purpose software package called GUITAR (guitar.cs.umd.edu), which has been downloaded by more than 500 testers. I am currently using GUITAR to test COTS products. The GUI models are also being extended to web applications, including automation of their testing, and observing how web applications differ when viewed from different browsers/platforms.&#8221;

I stopped by to speak to the students working with him at University of Maryland and they mentioned that while they had made good progress on GUIs they had not been able to get the web application testing going just yet. I think that once the web app utilities are created in such a ways as to automatically generate integration test cases for web apps that will start to become even more applicable in today&#8217;s internet-era apps.

 [1]: http://www.tech2004.umd.edu/
 [2]: http://guitar.cs.umd.edu