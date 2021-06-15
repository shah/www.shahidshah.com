---
title: If engineers or database administrators can access your data, it’s not secure
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
date: 2006-01-06T02:07:40+00:00
url: /2006/01/05/if-engineers-or-database-administrators-can-access-your-data-its-not-secure/
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
There is a general misconception in the IT community that their database servers are somehow their most secure systems and that _because_ they are secure their customers data and their own financial information is safe. Let me clue you in on this is a dirty little secret: many databases are neither secure nor safe from data tampering or theft. Although lots of data may be stolen by hackers for identity theft, a great deal of other data theft occurs from insiders who could benefit from sale of such data. And, when insiders do it there's almost no way to trace their movements if they're smart.

In most organizations database administrators are trusted with enormous amounts of responsibility, only one of which happens to be data protection. In many organizations software engineers and other IT consultants have direct access to databases as well. In a complex environment there could be literally dozens or hundreds of technical people that have direct access to healthcare, financial, and other private information with little or supervision. 

Shared (application) accounts on databases are painfully (and sometimes negligently) common. Shared (application) passwords are very common in thin-client or web based applications because it's a design pattern followed over an over again: many web users connect to a single web application and all those web users connect through a single, pooled, database connection. Is this a bad thing? Not if you do follow some common sense rules and practices. If someone did access the database with a shared/application account and made changes, performed queries, etc there would be no way to know who it was or how it was done. 

If that weren't bad enough, production databases are often copied and used for debugging, performance testing, integration testing, or other QA activities. This means there are tapes, ZIP/TAR files, and other files with lots of private, privileged, patient data sitting around in people's drawers or cabinets. Backup copies of production databases are necessary for debugging and QA. None of the uses seems out of line or improper  but, we need to be careful.

In this article I will present some questions that you should ask your engineers and database administrators. I won't be supplying any answers just yet (this is a teaser article). So, start by asking:

  * Does your database use shared accounts to allow multiple individuals to connect to the database using a single account?
  * Does your database use a single account to allow unfettered access by a single application or do various functions (read/write/admin) of the apps have their own accounts?
  * How are you protecting the data that is duplicated for use in QA or by engineers? How about for debugging?
  * When you copy data for use internally Is it being deidentified and cleaned first? 
  * Are backup tapes logged in and logged out of secure compartments or can just anyone get access to them?
  * Does your database have all information (passwords, SSNs, test results, salary records, etc) in plain text or is it encrypted?
  * Are you using one-way or two-way encryption in those cases where it is encrypted? How do you manage public/private keys?
  * Is your database server on virtual (private, non-routed) LAN segment with limited access from all other systems? 
  * Who can ping your database servers? Anyone or just particular servers?

These are stimulation questions, not to be seen as a comprehensive checklist. After you've stimulated some thought, check back later for the next article in this series that will guide you in how to take those answers and create a stronger data fortress. In the next article I will present some solutions (some easy, some hard) for how to better protect data, especially from insiders who can do the most damage.