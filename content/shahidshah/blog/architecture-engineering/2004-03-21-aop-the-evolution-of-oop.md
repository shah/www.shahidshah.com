---
title: AOP, the evolution of OOP
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
date: 2004-03-21T16:22:06+00:00
url: /2004/03/21/aop-the-evolution-of-oop/
dsq_thread_id:
  - 4676092326
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
Over the past couple of years I&#8217;ve been teaching courses on Aspect-oriented Programming (AOP) and find that developers have a hard time grasping the concepts (as did I when I first encountered it). If we use an analogy, AOP is to Object-oriented Programming (OOP) what OOP was to top-down programming. OOP took the concepts of modularity and encapsulation to new levels, but it&#8217;s clear that OOP alone will _not_ be able to tackle the complex software systems that we&#8217;re trying manage today. For sure OOP helps _build_ complex systems but maintaining, ehnancing, and managing them is another matter. One of the main problems that AOP hopes to solve is _separation of concerns_ &#8212; that is the idea that even across objects there is a set of functionality that is shared but can not be inherited or delegated easily. AOP and OOP are not competitors (just like OOP was not a competitor to top-down programming). Just as OOP extended functions into methods and structures into objects, AOP extends OOP concepts to help manage concerns.
  
<!--more-->

For example, the Object.toString() method, which is built into the base Object class is a good _concern_ &#8212; one that says that all objects should be able to represent themselves as strings. Just like to toString() method at the micro level, at the macro level all applications are composed of multiple systemic and functional concerns. A system concern may comprise security, logging, auditing, and other generic concerns while a functional concern is specific to an application&#8217;s domain such as record management or other specific features. As OOP programmers we think that by properly designing our objects we&#8217;ll be able to appropriate model the application with clean separation of system and functional concerns. However, regardless of the best-of-breed programming methodologies you use, you will eventually end up with systemic and functional concerns being mangled together because OOP techniques do not allow anything more than delegation or inheritance to help with modularity and encapsulation.

The idea that all objects, regardless of what they are, should have the ability to secure themselves, log their actions, and be auditable seems straightforward. We should be able to put all that functionality into a base class and extend it right? Wrong. Because good OOP practice means that delegation should be chosen over inheritance to reduce coupling, we end up with lots of duplicated code. What is needed is an _automated_ way of delegating based on rules. That&#8217;s exactly what AOP provides: event-based triggers on any code that we write where the rules for the triggers that delegate the work are done outside of the code being affected. Sound intriguing? [Give AOP a try][1]: sooner or later if you don&#8217;t know AOP you&#8217;ll end up being left behind.

 [1]: http://aosd.net/