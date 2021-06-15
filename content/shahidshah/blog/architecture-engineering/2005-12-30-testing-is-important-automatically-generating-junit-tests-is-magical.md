---
title: Testing is important, automatically generating JUnit tests is magical
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
date: 2005-12-30T17:06:48+00:00
url: /2005/12/30/testing-is-important-automatically-generating-junit-tests-is-magical/
dsq_thread_id:
  - 4572855035
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
A couple of months ago I was introduced to Joe Ponczak, CEO of [Codign Software][1], by my friend [Andrew Glover][2]. We had a great meeting where we discussed the current state of software quality management, test driven development, how hard it is to really test software well, and JUnit. 

We all came to the conclusion that it would be great to have very high code coverage but that it&#8217;s a manual process fraught with difficulty and hassles as we go from 0% to even 50% or 60% test autmation and code coverage. 

Then, Joe showed us CoView, his company&#8217;s new test automation tool. Andy and I were impressed. Really impressed. CoView is an Eclipse plug-in that automatically creates JUnit tests. These JUnit tests focus on executing code logic, &#8220;what-if&#8221; scenarios, and exception paths. 

After going through the plug-in we could see that on average, it took a Java developer approximately 20 minutes to create a JUnit test case without knowing the level of coverage. It took CoView about 1.5 minutes to create a JUnit test case. Not only did the CoView-generated test cases execute as many &#8220;what if&#8221; scenarios as desired by the developer, they also resulted in 100% branch and basis path coverage. _Very nice._

If you&#8217;re already doing JUnit testing, you owe it to yourself to check out CoView. If you&#8217;re not doing any test automation CoView could be your ticket into the test driven world without requiring hours and hours of manual test creation.

While I highly recommend it, the only drawbacks of CoView right now are: 

  * It&#8217;s an Eclipse plug-in. IntelliJ and other IDE users like me have to use Eclipse for the generator but once the test cases are generated they can be used in any IDE.
  * Test frameworks other than JUnit are not yet supported. Perhaps Joe can comment and let us know what their plans are for some of the newer frameworks like TestNG.
  * The generated test cases do have instrumentation code injected to track coverage and statistics. Joe and I talked about an option to generate code without instrumentation and he said they&#8217;re considering it but it will be difficult.

Head over to Codign and check out their [free trial version][3].

 [1]: http://www.codign.com/
 [2]: http://www.vanwardtechnologies.com
 [3]: http://www.codign.com/coviewtrial.html