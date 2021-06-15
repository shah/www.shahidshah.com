---
title: Documenting your databases
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
date: 2005-09-05T17:23:26+00:00
url: /2005/09/05/documenting-your-databases/
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
As we all know, one of the most important aspects of our complex systems architecting and design phases is documentation. But, given the challenges created by high-speed development where code (both application and database side) are constructed so quickly it&#8217;s hard to keep up. There are many tools for better comprehension of Java code (like superb IDEs) but the database comprehension tools are still fairly weak. In my own projects I almost always create automated DBDD (database design documentation) tools to make sure that as my databases grow in complexity their designs are still comprehensible without requiring manual steps to keep them up to date. My DBDD tools are integrated with my CI (continuous integration) tools so database documents are built quite regularly. They&#8217;re far from perfect but they&#8217;re certainly useful. An open source tool that I have been tracking for a little while, called [SchemaSpy][1], is not quite up to the standards of my own tools but if you don&#8217;t have a database documentation tool as part of your CI builds, definitely give SchemaSpy a shot. SchemaSpy doesn&#8217;t replace things like Embarcadero or ERwin or DB Visualizer but for pure comprehension and documentation it&#8217;s very nice.

 [1]: http://schemaspy.sourceforge.net/