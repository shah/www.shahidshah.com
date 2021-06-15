---
title: What is a Service?
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
date: 2004-11-03T11:31:22+00:00
url: /2004/11/03/what-is-a-service/
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
Recently I&#8217;ve been conducting architecture assessments for a couple of clients (mostly in .NET shops but this topic is equally applicable in J2EE enivronments). I was asked to conduct reviews of newer architectures in which the architects and senior engineers wanted to apply SOA (service oriented architecture) principles. A major discussion point in each of the reviews always centered around question of &#8220;what exactly is a service?&#8221; Attempting to answer that question has proven quite difficult but we almost always talked about the term &#8220;stateless services&#8221; so that&#8217;s probably a good place to start. Creating a stateless service is simple for many business cases but non-trivial for database-oriented applications that must support transactions that may potentially span multiple services. This becomes a problem when architects want to create fine-grained services where each service does only a small part of a transaction and leaves other parts of a transaction up to other services. When fine grained doesn&#8217;t work, we end up creating coarse-grained services to alleviate the transaction management issues.
  
<!--more-->

The consensus that I think we reached in each of those reviews was

  * **Services should be stateless**. This means that a service should no state information should be held between the service consumer (the caller) and the service provider. There is very little disagreement among most architects about the stateless desire; the problems come in defining what _stateless_ means. My point of view is that the service itself should not contain state within it&#8217;s own process but it should be able to store information into a database at the end of its process (or other storage). Then, at the next invocation it should read it back from the database. This sounds very easy but if a service is designed to work alone (as far as it knows) but it&#8217;s really part of a larger transaction in a business sense then we must work out the commit/rollback issues. A distributed transaction manager would be necessary or we bend the rules and create a service that is passed a session instance that can be used to receive a database connection handle if it&#8217;s a database-backed service. There&#8217;s no really elegant solution but it&#8217;s a real issue for most of my clients.
  * **Services must be able to run in process or remotely**. There&#8217;s very little disagreement on this attribute of a service but I&#8217;m of the opinion it&#8217;s a good idea to create a services implementing interfaces and not worry about remoting until the need for distributing a service presents itself. _Developing_ a remotable service might be easy but setting up an adequate environment to _test_ it regularly and ensure that&#8217;s it reliable and scalable is a whole different matter. Managers need to take great care and thoroughly question engineers who say &#8220;it&#8217;s easy to make my service remotable&#8221; because that&#8217;s only true to an extent.
  * **All services should be able to be invoked asynchronously**. This matter is somewhat controversial but it seems like a good goal. Take for example the scenario of fine-grained services that write to a database but might need to know the concept of a transaction for rollback purposes. We want our services to be stateless which means they can be called asynchronously but perhaps there&#8217;s no point in calling asynchronously if multiple services need to be aggregate to do a particular job (this happens in non-trivial database applications).
  * **A service should be discoverable**. Another good goal is that a service client should not know where a service may be located or what it might be called. It should call a creational pattern (a factory) for _what_ it needs to do and what interface it requires and then the factory (which might use UDDI or other simpler rule to find a service) does the job of locating the service and providing either an in process or remote service implementation. This discovery goal is quite nice on paper and it&#8217;s not necessarily hard to implement but it&#8217;s one of the harder things to test in complex environments that need to consume services into applications that must meet specific acceptance tests. 
</ul> 

The main idea behind SOA is to provide indepenent services that have no coupling and no state. If that can be achieved, brittle code can be reduced and scalability and reliability can be improved dramatically.