---
title: Get on the Enterprise Service Bus
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
date: 2004-05-07T23:34:18+00:00
url: /2004/05/07/get-on-the-enterprise-service-bus/
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
Over the past couple of years the _Service Oriented Architecture_ (SOA) model of system architecture has become a popular way of getting management consultants and technology evangelists like me into enterprise application integration (EAI) projects. SOA is pretty high-level term that conjures up visions of a panacea where monolithic applications have gone the way of the dodo and loosely coupled, distributed, highly-specialized resuable services have taken over the world. Of couse reality is much less appealing than that fantasy world, but SOA and its variations have definitely started to make the IT world think less about applications and more about services. But, what _are_ services? Basically, a service is a focused resource (an agent, a tiny application, a specialized class) that has a defined set of inputs and outputs and performs a particular function. The idea behind an SOA is that businesses will have all sorts of _services_ and the applications simply use one or more services in a particular order along with the rules that govern the business processing and exception handling, and event management. The management of services within an SOA is often referred to as _service orchestration_. A little while after SOA was formulated as a marketing buzz word, ESB&#8217;s (enterprise service buses) were touted as the means by which SOA could be implemented and the real value of an SOA could be achieved.
  
<!--more-->

At this time, Sonic, BEA, IBM, Microsoft, and other major vendors of the EAI space are all scrambling to formulate an ESB strategy and tout their offerings. Sonic is undisputed leader at this time because they were out first but in the end both IBM and Microsoft will end up taking lead. I&#8217;ve been recommending for some now that my clients start to understand the SOA and ESB offerings to take a proactive strategy in developing services. Most of the ESB offerings today remain rudimentary and often-times buggy but it will take a long time for customers to move from application-focused architectures to an SOA and starting early will put them ahead of the learning curve.

Today&#8217;s ESBs already support multiple communication styles and protocols and the upcoming ones will do an even better job of taking EDI, XML, and other formats and orchestrate various activities over HTTP, JMS, e-Mail and other conduits. If you need a solid ESB today to put into product, you&#8217;re probably stuck with something like Sonic, Fiorano, Systinet, Cape Clear, or webMethods. However, by the end of the year BEA, IBM, and other app-server vendors will offer some sort of ESB on the Java Platform. Microsoft will ship Indigo in the Longhorn operating system by 2006 so it will be a while before the .NET camp can benefit from a pure ESB.

**What you should be doing right now**: choose an ESB vendor (almost any of the small ones are cheap and easy to get started with) and begin to train your developers on how to write services intead of applications. However, be very careful and make sure that any code you write is abstracted in the form of an Inversion of Control (IoC) injection-based layer or create your own isolation layer so that the services don&#8217;t depend on the ESB container. The last thing you want to do is pick a ESB and be stuck for years to come.

For more information on open-source middleware that may evolve into ESBs, check out [this site][1]. Of all the existing open-source technologies, [Mule][2] seems like one of the best candidates.

 [1]: http://www.manageability.org/blog/stuff/open-source-messaging-integration-transformation-routing-java
 [2]: http://www.muleumo.org/