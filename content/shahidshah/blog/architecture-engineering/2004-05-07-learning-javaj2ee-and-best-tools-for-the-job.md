---
title: Learning Java/J2EE and best tools for the job
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
date: 2004-05-07T17:43:10+00:00
url: /2004/05/07/learning-javaj2ee-and-best-tools-for-the-job/
ratings_users:
  - 1
ratings_score:
  - 3
ratings_average:
  - 3
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
A friend of mine who was recently put in charge of a decent size programming team talked with me about the best way to consolidate multiple development tools and paradigms (such as PowerBuilder, VB, C/C++, etc) into a single set of tools and processes centered around the Java platform. He mentioned their work centers mainly around data-centric web-based applications and wanted to mentor his programmers in best approaches to learning Java and J2EE. It seemed like a simple question but as we began to talk about it I thought back on my own learning curve with Java/J2EE and how I could best help my friend answer his question about training. So, after talking through it with him, I came up with the following basic plan.
  
<!--more-->

If the need is to standardize on J2EE for consolidating the creation of database-driven web-based applications, the following seems like a minimal set of steps:

</p> 

  1. Learn the essentials of Java. Since I had many years of object-oriented programming experience, I just picked up a copy of [Java in a Nutshell][1] and it was perfect. For people will less experience a good reference book might be [Head First Java][2]. Once you&#8217;ve learned the basics of the language, grab a copy of [Java Cookbook][3] and [Java Examples in a Nutshell][4]. These last two books are more solution-oriented than education-oriented. Lastly, get an _intelligent_ IDE like [JetBrains IDEA][5]. IDEA is a great IDE to learn Java on because it has code analysis and automatic suggestions, interactive compiling and error detection while you&#8217;re typing, and full refactoring support. It&#8217;s an invaluable aid for those new to Java.


  2. Learn the essentials of J2EE. This one is a bit tougher but I think that if you&#8217;re centering development around web applications then starting with Jason Hunter&#8217;s [Java Servlet Programming][6] and [JDBC API Tutorial and Reference][7] are the best bets. Of course, J2EE is much more than just Servlets and databases but for most programmers, that&#8217;s going to be their initial foray into J2EE.


  3. Learn the fundamentals of XML by reading [XML in a Nutshell][8] or [Java & XML: Solutions to Real-World Problems][9].


  4. Gain better understanding of solid software engineering practices by reading [Code Complete][10], [Agile Software Development, Principles, Patterns, and Practices][11] and [Test Driven Development][12].


  5. Become a better architect by absorbing the material presented in [The Pragmatic Programmer: From Journeyman to Master][13] and [Patterns of Enterprise Application Architecture][14]


  6. Start going through the libraries and open source projects available at [Apache&#8217;s Jakara Site][15] and start looking at application development frameworks like [NEFS][16].


  7. Review the [Learning J2EE][17] page.
</ol> 

If you&#8217;re just getting into web development using Java, you may be interested in using the following tools:

</p> 

  * Java Developers Kit (JDK): First, go and get the [latest JDK][18]. Be sure to pick the Java SDK links, not the JRE. The SDK includes the software developers kit which contains compilers and libraries. To stay on the bleeding edge, get the latest beta. To do productive business work, get only the latest stable version.


  * Web Browser: [Mozilla Firefox][19] &#8211; IE doesn&#8217;t include all the features that this browser does, especially for development of web applications.


  * Java IDE: [JetBrains IDEA][5] &#8211; none of the other open source or commercial IDEs come close to the &#8220;intelligence&#8221; built-into IDEA. Eclipse and others are nice, but IDEA still reigns supreme.


  * Text Editor: [TextPad][20] &#8211; when an IDE is overkill for editing text files, TextPad is perfect.


  * Revision Control: [CVS][21] &#8211; don&#8217;t be one of the 60% of projects that are doing manual revision control of source files. Use CVS to manage all your code on Windows, UNIX, MacOS, or Linux servers.


  * Build Management: Don&#8217;t use batch files or scripts and instead standardize on [Ant][22]. Take a look at Ant automation tools like AntHill, Maven, and CruiseControl. Either way, setup a nightly build process that can build and test your code everyday.


  * Revision Control Client: [WinCVS][23] &#8211; if you&#8217;re not a command-line guru, WinCVS is a great free CVS client. If you want even more features and easy of use but are willing to pay a few bucks, check out [SmartCVS][24]. Most modern IDEs already include a CVS client built into the IDE too. JetBrains IDEA 4.0 is already integrated with SmartCVS so you don&#8217;t have to do anything extra. You may also want to try CVSWeb, ViewCVS, QueryCVS for accessing your CVS repository using a web browser.


  * Defect Tracking: If you&#8217;ve brave with good system admin skills like me, install and use [Bugzilla][25]. If you want something easier to use, prettier, and easier to administer, install [JIRA][26].


  * Programmer/Team Communication: You&#8217;ll want to install one the dozens different Wiki products available. My suggestion is to get [Confluence][27] because it&#8217;s easy to install and works well.


  * Unit Testing: You&#8217;ll want to be sure that you have fully automated unit tests for all the great code you&#8217;re writing (to make sure it&#8217;s really as good as you think it is). To keep your code honest, use the [JUnit][28] and HttpUnit testing frameworks. JUnit support is already built into most modern IDEs so you have no excuses for no automating your unit tests.


  * Code Coverage: As you&#8217;re developing your code and you&#8217;re testing it you need to know what percentage of code is not being tested. This is called _code coverage_ &#8211; discovering what code you&#8217;re covering in your test cases (whether manual or automated). One of the best tools for code coverage is [Clover][29] and you should definitely use it or something like it.


  * Servlet Engines: If all you need is web application support without all the bells and whistles provided by a J2EE compliant app server, get [Resin][30]. It installs in less than 5 minutes, is rock-solid, and outperforms even the most expensive app servers.


  * Application Servers: If you need full support for the J2EE spec (including EJBs, JMS, etc.) you&#8217;ll need to get [JBoss][31], BEA WebLogic, or IBM WebSphere. There are other providers out there, but these three are the kings of the open source and commercial industries (respectively). Don&#8217;t go for anything more than a Servlet Engine until your architecture leads you to one. Please don&#8217;t make the mistake of thinking your app needs WebLogic before your app is completed. Pick a Servlet engine like Resin and stick with it until you need to grow into something like WebSphere or WebLogic (or even JBoss). Simplicity rules and there&#8217;s nothing simple about J2EE Application Servers, even for experienced folks like me.


  * Web Frameworks: While Struts is a viable option, it&#8217;s too complex and difficult to use. Grab a copy of the [NEFS][32] because it&#8217;s much easier to, provides far greater functionality, and includes many more features missing from most other frameworks. Using NEFS you don&#8217;t need separate persistence frameworks, separate presentation framework, separate reporting reporting framework, separate portal framework, separate libraries, etc. NEFS includes and fully integrates all the common libraries like Ant, JUnit, HttpUnit, Log4J, Jakarta Commons into a conslidated framework that can be used by neophytes and experienced engineers alike.


  * Web Debugging: Many web-based application problems can only be solved by looking at web-based debuggers that allow viewing HTTP traffic, cookies, and related issues. For this, the [Charles Web Debugging][33] tool is very nice.


  * Reporting: If the reporting features in NEFS aren&#8217;t sufficient, use JasperReports, JFreeReport, JFreeChart, DataVision, iText, or POI (for creating Excel files). You&#8217;ll need to stick with Crystal Reports or something like Actuate if you lots of ad-hoc and sophisticated reporting needs.


  * Virtual Machine Software: To help you run multiple virtual machines (one for development, one for testing, one to run a VPN, etc.) you should use [VMware][34].


  * Scheduling Jobs: If you need timing and job scheduling, take a look at JCronTab (easy to use), Cron, and Quartz (complex but powerful).


  * Database Browsers: Since connecting to databases is such a common task, you&#8217;ll want some good tools to connect to databases. Try SQuirrel, TORA, or DBVisualizer. None of these provide database-specific functionality and are limited to the functionality provided by JDBC but they are definitely useful.


  * Documentation: Try and standardize on something like [DocBook][35] instead of Microsoft Word. While MS-Word is easier to use, it&#8217;s too difficult to get content out of it for sharing across products and libraries. DocBook uses XML for its format and it&#8217;s pretty complex for technical writers (and even developers) but you should use the [XMLMind XML Editor (XXE)][36] to give you a WYSIWYG view of DocBook. The nice thing about XXE is that anyone can use it (tech writers, developers, etc) and once your information is in DocBook format, it can be converted to PDF, HTML, RTF, etc and made searchable with the click of a button. Also, text-based format (not .doc) is much better for version control and you can configure CVS to rebuild browsable documentation on every check-in. Also, developers can edit docs from within their favorite IDE or text editor. Stick with the XML, not SGML, variant of DocBook.


  * Instant Messaging: All developers should be using one more IM tools like MSN Messenger, AOL Instant Messenger, or Jabber. Quick communiations should be done via IM, not e-mail.


  * Modeling/Design: [MagicDraw][37] is a really good choice. There are community and profession/enterprise editions. Another good tool (commercial but cheap) is [Enterprise Architect][38] by Sparx Systems in Australia. It can arguably do more than Rational Rose at a fraction of the price. I recommend it for a variety of architecting tasks (not just UML).
</ul>

 [1]: http://www.amazon.com/exec/obidos/tg/detail/-/0596002831/qid=1083946941/sr=8-1/ref=pd_ka_1/102-7749010-0336160?v=glance&s=books&n=507846
 [2]: http://www.amazon.com/exec/obidos/ASIN/0596004656/qid=1083947004/sr=2-1/ref=sr_2_1/102-7749010-0336160
 [3]: http://www.amazon.com/exec/obidos/tg/detail/-/0596001703/ref=cm_bg_d_7/102-7749010-0336160?v=glance
 [4]: http://www.amazon.com/exec/obidos/tg/detail/-/0596006209/qid=1083946941/sr=8-2/ref=pd_ka_2/102-7749010-0336160?v=glance&s=books&n=507846
 [5]: http://www.jetbrains.com
 [6]: http://www.amazon.com/exec/obidos/tg/detail/-/0596000405/qid=1083947113/sr=1-1/ref=sr_1_1/102-7749010-0336160?v=glance&s=books
 [7]: http://www.amazon.com/exec/obidos/tg/detail/-/0321173848/qid=1083947411/sr=5-1/ref=cm_lm_asin/102-7749010-0336160?v=glance
 [8]: http://www.amazon.com/exec/obidos/tg/detail/-/0596002920/qid=1083947597/sr=1-1/ref=sr_1_1/102-7749010-0336160?v=glance&s=books
 [9]: http://www.amazon.com/exec/obidos/tg/detail/-/0596001975/ref=pd_bxgy_text_1/102-7749010-0336160?v=glance&s=books&st=*
 [10]: http://www.amazon.com/exec/obidos/ASIN/1556154844/qid=1083947924/sr=2-1/ref=sr_2_1/102-7749010-0336160
 [11]: http://www.amazon.com/exec/obidos/tg/detail/-/0135974445/qid=1083947724/sr=5-3/ref=cm_lm_asin/102-7749010-0336160?v=glance
 [12]: http://www.amazon.com/exec/obidos/tg/detail/-/0321146530/ref=pd_bxgy_text_1/102-7749010-0336160?v=glance&s=books&st=*
 [13]: http://www.amazon.com/exec/obidos/tg/detail/-/020161622X/qid=1083947724/sr=5-1/ref=cm_lm_asin/102-7749010-0336160?v=glance
 [14]: http://www.amazon.com/exec/obidos/tg/detail/-/0321127420/qid=1083947724/sr=5-3/ref=cm_lm_asin/102-7749010-0336160?v=glance
 [15]: http://jakarta.apache.org
 [16]: http://www.netspective.com
 [17]: http://searchwebservices.techtarget.com/originalContent/0,289142,sid26_gci953492,00.html
 [18]: http://java.sun.com/j2se/
 [19]: http://www.mozilla.org
 [20]: http://www.textpad.com
 [21]: http://http://www.cvshome.org/
 [22]: http://ant.apache.org
 [23]: http://http://www.wincvs.org/
 [24]: http://www.smartcvs.com/
 [25]: http://www.bugzilla.org/
 [26]: http://www.atlassian.com/software/jira/
 [27]: http://www.atlassian.com/software/confluence/
 [28]: http://www.junit.org/
 [29]: http://www.thecortex.net/clover/index.html
 [30]: http://www.caucho.com
 [31]: http://www.jboss.org
 [32]: http://www.netspective.com/
 [33]: http://freshmeat.net/projects/charles/
 [34]: http://www.vmware.com
 [35]: http://www.docbook.org
 [36]: http://www.xmlmind.com/
 [37]: http://www.magicdraw.com/
 [38]: http://www.sparxsystems.com.au/