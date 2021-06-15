---
title: Authenticating Java users using underlying operating system
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
date: 2005-04-21T12:58:29+00:00
url: /2005/04/21/authenticating-java-users-using-underlying-operating-system/
dsq_thread_id:
  - 3279661877
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
We all need the ability to have our Java programs talk to the underlying operating system for many aspects just as file system management and user interface population. Java abstracts those pretty well but one thing that&#8217;s been missing is the ability to authenticate a Java application&#8217;s user/group with the underlying Win32 or UNIX/Linux users database (like /etc/passwd). [Cenqua&#8217;s Shaj][1] (Simple Host Authentication for Java) is a JNI library with a simple interface that allows your Java app to verify users and check group membership with the underlying operating system. According to the author, &#8220;Shaj is not a competitor for full featured authentication API&#8217;s but rather a complimentary way to piggyback on system accounts on any platforms.&#8221;

 [1]: http://opensource.cenqua.com/shaj/