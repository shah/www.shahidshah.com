---
title: Easier Java Generics object construction
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
date: 2005-01-24T07:42:52+00:00
url: /2005/01/24/easier-java-generics-object-construction/
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
I&#8217;ve been programming with JDK 5.0 for a bit now and just love the generics features. However, I find that I keep repeating myself when constructing collection instances. 

For example:
  
`<br />
  Map<String, Collection<File>> files = <br />
&nbsp;&nbsp;new HashMap<String, Collection<File>>();<br />
` 

I recently discovered [in this blog posting][1] that a simple static method would allow:

`<br />
  Map<String, Collection<File>> files = Util.newMap();<br />
` 

The code for the utility (excerpted from the blog entry referenced above) looks like this:

`<br />
public static <K,V> Map<K,V> newMap() <br />
{<br />
&nbsp;&nbsp;return new HashMap<K,V>();<br />
}<br />
` 

Clearly, saves a bunch of typing and is easy to implement. The author of the posting mentioned he&#8217;s added it as an RFE as well.

 [1]: http://www.artima.com/weblogs/viewpost.jsp?thread=79394