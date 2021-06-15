---
title: Comprehending Java application structures
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
date: 2004-03-16T23:01:45+00:00
url: /2004/03/16/comprehending-java-application-structures/
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
I&#8217;m regularly brought in to a client site when their applications are nearing completion. Usually, it&#8217;s for taking a look at performance problems or for completing some features that the existing staff couldn&#8217;t get to in time. In either case, understanding a Java program&#8217;s structure becomes very important. Today&#8217;s modern IDEs (my favorite is [Intellij IDEA][1]) do a great job of showing class structures and letting us browse through existing classes, interfaces, and packages with the ease of simple mouse clicks. However, I&#8217;ve found a nice tool by IBM that helps to truly comprehend structural information for discovery of complexity, potential side affects created by changes, and other facts necessary for maintenance of existing code as opposed to the creation of new code. If you need to understand someone else&#8217;s code and the relationships of packages, classes, and interfaces, I&#8217;d recommend taking a look at the IBM [Structural Analysis for Java][2] (S4J) toolkit.
  
<!--more-->

From the IBM website: &#8220;S4J detects structural &#8220;anti-patterns&#8221; (suspicious design elements) and provides dependency web browsing for detailed exploration of anti-patterns in the dependency web. SA4J also enables &#8216;what if&#8217; analysis in order to assess the impact of change on the functionality of the application; and it offers guidelines for package re-factoring.&#8221;

 [1]: http://www.intellij.com
 [2]: http://www.alphaworks.ibm.com/tech/sa4j