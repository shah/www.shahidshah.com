---
title: Java + Perl + Ruby + Python + JVM = Groovy
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
date: 2004-03-22T21:52:32+00:00
url: /2004/03/22/java-perl-ruby-python-jvm-groovy/
dsq_thread_id:
  - 4349992541
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
My goal is to learn a new language or two every year and this year i&#8217;ve focused on scripting languages. Being an expert in Perl and having used Ruby and Python off and on for a while, I was very intrigued when I saw an introduction to the [Groovy][1] scripting language. It&#8217;s one of the first scripting languages to target the Java Virtual Machine (JVM) for portability instead of defining its own pcode interpreter (which is what Perl, Ruby, and Python do). Basically, Groovy is just another language for the JVM and Groovy code compiles to Java bytecodes just like Java source does. From what I&#8217;ve seen while playing with it, it&#8217;s a wonderful combination of my favorite scripting languages yet feels like my favorite systems language: Java. It has all the basics of a modern system language but includes features like here-docs, regular expression statements, closures, and dynamic typing taken from languages like Perl and Python. But, unlike Perl, Ruby, or Python, learning Groovy is a cinch for Java programmers: it just feels like home. If you&#8217;re a Java programmer who has been staying away from other scripting languages because of their syntax, take a look at Groovy. The power of the language along with the fact that it runs on a standard 1.4 JVM make this a very cool scripting language, indeed. Especially for us Java folks.
  
<!--more-->

Now, with all that being said lets all realize that Groovy is brand-new so it hasn&#8217;t been given the shake-out that sophisticated and mature scripting languages like Perl have already been through (and Perl remains my favorite scripting language because _it works_). Although it has a silly name, Groovy will probably be used in some important projects over the coming years so it&#8217;s a good idea to keep track of what&#8217;s going on with its development cycle. 

What bothers me about Groovy though, from a non-technical viewpoint, is that the authors have submitted a JSR to the JCP to standardize it. To me, this seems quite unncessary at this point and the language should be given a chance to mature and be used for a while before the community blesses it as &#8220;_the_ scripting language&#8221;. Regardless of how nice its syntax might be or how many features they&#8217;ve already added, the only way to tell whether a technology is useful is by it&#8217;s _use_: use by thousands on hundreds of projects over many years. That&#8217;s what Perl and Python have gone through for many years and it&#8217;s what Groovy needs to do before going into the JCP. However, several of Groovy&#8217;s creators and friends of Groovy language sit on the Executive Committee so the JSR will definitely continue on its way.

 [1]: http://groovy.codehaus.org/