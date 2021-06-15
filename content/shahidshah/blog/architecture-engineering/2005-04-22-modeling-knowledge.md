---
title: Modeling knowledge
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
date: 2005-04-22T21:23:56+00:00
url: /2005/04/22/modeling-knowledge/
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
These days I&#8217;ve been acting as a consulting architect for several federal government and commercial organizations where the problem of _knowledge modeling_ has come up over and over again. It seems that the underlying issue at almost all of my clients is that there&#8217;s no easy way of understanding or documenting the business process, conceptual models, etc. I have been spending a good deal of time talking to my clients about ontologies, common vocabularies, and other related techniques for communicating business and domain concepts. Since I&#8217;m a big fan of open source I began searching for free but useful solutions because I was sure I wasn&#8217;t the only one with this problem of knowledge modeling. First I started with [this article][1] that does a good job framing the available landscape. There were dozens of options but not very many good open source ones. The one I was most impressed with is called [Protégé][2] which can be used for modeling classes (domain concepts) and automatically processing those models in a simple way. Protégé is not applicable for all knowlege modeling but it is pretty useful for common cases. According to the auhors, &#8220;Protégé is a free, open source ontology editor and knowledge-base framework&#8221; but they&#8217;re being modest because it&#8217;s actually quite useful as a class and entity modeling tool. And since you&#8217;ve the source you can take the knowledge-base and use MDA (model driven architecture) techniques to create some interesting applications. Another great feature of is that there is a good [library of ontologies][3] to view and learn from. For those of you who are into the semantic web world, there&#8217;s [an OWL plugin][4] that will allow you to edit standards-compliant ontologies. Although it&#8217;s a little old, there is [a JavaWorld article][5] that provides a good review of Protégé. There are other open source ontology editors like [KAON][6] and [WebOnto][7] but they don&#8217;t seem as feature rich or mature. See [this page][8] and [this website][9] for more detailed information on other tools.

 [1]: http://www.xml.com/pub/a/2004/07/14/onto.html
 [2]: http://protege.stanford.edu/
 [3]: http://protege.cim3.net/cgi-bin/wiki.pl?ProtegeOntologiesLibrary
 [4]: http://protege.stanford.edu/plugins/owl/
 [5]: http://www.javaworld.com/javaworld/jw-06-2003/jw-0620-protege.html
 [6]: http://kaon.semanticweb.org/
 [7]: http://kmi.open.ac.uk/projects/webonto/
 [8]: http://www.manageability.org/blog/stuff/knowledge-management-open-source-java/view
 [9]: http://www.insead.fr/CALT/Encyclopedia/ComputerSciences/System/modeling.htm