---
title: Centralize Interoperability, Decentralize Implementations
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
date: 2006-08-04T13:43:25+00:00
draft: true
url: '/?p=795&preview=true&preview_id=795'
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
A Better Path to Enterprise Architectures Roger Sessions Page 24

Many organizations build enterprise architectures that are overly centralized. Frequently, they create
  
an office of enterprise architecture and give this office authority over a wide range of decisions. This
  
excessive centralization can result in a stifling bureaucracy and project gridlock.
  
A centralized enterprise architectural organization is necessary. But the central organization needs to
  
focus on the right issues and not get bogged down on issues that are irrelevant.
  
The general rule of thumb is that decisions that impact interoperability should be centralized.
  
Decisions that impact implementations should be decentralized. Not knowing which decision is which
  
is a common error in enterprise architectural departments.
  
Let's look at some typical errors that come up in enterprise architectures.
  
?? Platform: Many organizations attempt to define a standard software platform, often debating
  
endlessly between, say, Microsoft's .NET, IBM's WebSphere, or BEA's WebLogic. This effort is
  
misplaced. Platform is an implementation decision and has no bearing on how the applications
  
on those platforms will work together. As long as the platform meets the organization's
  
interoperability requirements, the application team should be given latitude to choose the
  
best platform for their application's needs.
  
?? Data: Many organizations attempt to define a single data layer that will be shared by all
  
applications in the organizations. This effort is often expensive and rarely successful. How data
  
is stored should be treated as an implementation detail of an application.
  
?? Business Intelligence: Most organizations treat data and business intelligence
  
interchangeability. Whereas data (such as how a customer is stored in a database) is an
  
implementation detail, intelligence (such as what business we have conducted with a given
  
customer) is an organizational asset. It is appropriate to decide how such intelligence will be
  
shared. It is not appropriate to decide (at the enterprise level) how applications will keep
  
track of the data that feeds this intelligence.
  
?? Code Sharing: Many organizations believe that reuse is achieved through code sharing. It is
  
somewhat amazing that this belief persists despite decades of failure to achieve this result.
  
The best way to reduce the amount of code that a given project needs is through delegation of
  
functionality (a là Web services), not through code sharing.
  
?? Web Service APIs: Many organizations believe, correctly, that the use of Web services is
  
critical to achieving interoperability. Many organizations think this means that the way
  
applications use the Web service APIs should be standardized. In reality, the Web service APIs
  
are far below the level of concern of applications. Applications typically make use of a
  
buffering layer that is vendor specific, for example, the Windows Communications Framework
  
layer provided by Microsoft's .NET platform. The purpose of this layer is to insulate
  
applications from needing to understand the intricacies of the Web service APIs. This buffering
  
layer is specific to the platform, and is therefore part of the implementation details of the
  
application.
  
The bottom line is that enterprise architecture is not the same thing as application architecture.
  
Application architecture is about the design of applications. These designs should be the responsibility
  
of the group owning the applications. This is one of the ways we achieve economies of small-scale
  
(see rule 2: Leverage Economy of Small-scale). Enterprise architects should worry about how those
  
applications work together, and thereby provide better value to the organization.