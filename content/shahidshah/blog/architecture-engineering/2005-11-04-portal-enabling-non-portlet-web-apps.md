---
title: Portal-enabling non-portlet web apps
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
date: 2005-11-04T14:39:58+00:00
url: /2005/11/04/portal-enabling-non-portlet-web-apps/
categories:
  - 'Shahid Shah Architecture &amp; Engineering Blog'

---
I&#8217;ve been involved in number of portal projects this year and one of the problems that all my customers complain about is the inability to integrate non-portlet based webapps into their portals. I just ran across this open source [PortletBridge]() project which promises to fix that problem. Their description of the project is

> The PortletBridge Portlet project creates a JSR-168 Portlet that can proxy and rewrite content from a downstream web site. Currently, the portlet supports:
> 
> * Getting content from a downstream site
      
> * Proxy configuration (including NTLM and Basic authentication)
      
> * NTLM and Basic authentication as preferences
      
> * Using an xsl stylesheet to rewrite the content from the downstream site
      
> * Proxying of remote resources (e.g. images, flash etc.)