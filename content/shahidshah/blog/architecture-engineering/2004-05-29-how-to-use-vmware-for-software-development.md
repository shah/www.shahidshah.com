---
title: How to use VMWare for Software Development
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
date: 2004-05-30T02:01:15+00:00
url: /2004/05/29/how-to-use-vmware-for-software-development/
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
Most CIOs and technical managers think of virtual machine (VM) software like [VMware][1] as a server consolidation tool. While it&#8217;s great for server consolidation, I&#8217;ve been advising many clients to start putting VMware on every software engineer&#8217;s and quality assurance engineer&#8217;s workstation as well. Having used it for many years, I find that I can&#8217;t live witout the ability to run multiple virtual machines within my single workstation. My Windows XP workstation has 2GB of RAM, dual monitors, about 400GB of disk space, and dual CPUs so that dealing with VMs is a piece of cake. I have differerent virtual machines for the following purposes: 

</p> 

  1. I keep a VM per customer so that if a customer requires a special desktop or VPN connection I can keep the VPN connection going while continuing to do my normal work on other networks. Each customer provides me special VPN software and that VPN software often restricts network connectivity to my default network so using a VM for each client allows me to isolate their work.


  2. I keep a separate VM for trying out new software. This way, if something breaks, I simply &#8220;rollback&#8221; the VM to the previous state by using VMware&#8217;s snapshot mechanism. It&#8217;s much safer than just installing it on my physical machine and easier to undo anything that breaks.


  3. I keep a VM for testing software that I write. This keeps a &#8220;pristine&#8221; machine so that if anything breaks, it&#8217;s unlikely to be some rogue DLL. I keep a fresh machine with no other software other than what I am testing for QA purposes and it allows me to test in a much more controlled manner.


  4. Even though I spend most of my time on my Windows XP box, some of my clients expect me to use Linux so I&#8217;ve installed a virtual machine for RedHat, Mandrake, and Debian. Works like a charm!
</ol>

 [1]: http://www.vmware.com