+++
title = "Hello Hugo: Konigi is now a Static Site"
description = ""
tags = ["static sites", "hugo", "front end development", "development"]
date = "2015-04-01"
categories = ["blog"]
slug = "hello-hugo"
+++


After many years of being a Drupal user, from version 2 when I started iaslash.org to version 6 on this site, I've made the move from PHP/MySQL blog to full on static site. Here's why and how I did it.

### Choosing Static Site Generators
In the past few years, I've taken a few sites backwards from Drupal and WordPress into the age of static sites. In many ways, it feels like going back to the beginning of my career, when I used Perl and Shell scripts to generate sites in my first job, and later to more sophisticated site generation using MovableType as a middle man.

As each of the small personal projects I've worked on became bigger, I started to miss how simple things used to be, and loathe how much I had to babysit my site or pay a lot for better cloud MySQL instances. In my day job, we also had to deal with the regular security patches on WP and Drupal, and it became a drag.

I started our first experiment by moving a site to Hammer, then shortly after moved it to become a grunt generated site. Those sites are happily chugging along, maintained by a team that generates the pages with grunt. Our main site at [balsamiq.com](http://balsamiq.com) is one of them.

After that year or so of being happy with how simple those site are to maintain, I started looking at more powerful [static site generators](/tools/submissions/static-site-generator-directories/) and finally migrated this site content off of Drupal so it can be used by a static generator. I now use [Hugo](http://gohugo.io/) to generate the few thousand pages of this site in a few seconds and sync it to AWS S3 using their static site hosting options.

[Hugo](http://gohugo.io/) is a generator written in the [Go](https://golang.org/) programming language. I chose Hugo over a few of the other great options out there like Jekkyl and Octopress because of its speed, support for taxonomies, and markdown support. I'm no programmer, so my implementation of Hugo is very simple and I put together my theme using only the examples in the docs, and a couple of questions to the discussion forum.

I still haven't gotten my head around how to do more complex things yet, and I don't want to be the newb that inundates the forum with dense questions. If you happen to find yourself in that forum you'll see how little I understand, despite reading docs. But for now, after a few weeks of work with only a few days of template building, it's doing nearly everything I did in Drupal, with none of the overhead.

### Migrating Content Off Drupal
To get started, I created a modified version of my Drupal theme that exports all of my content to text files. I removed all the views and only exported the actual node contents. Each node includes Hugo's "front matter" at the top of each page. This is the metadata that describes title, tags, permalink slug, and publish date. I pared down my taxonomy use on this site to one tag taxonomy for the time being to simplify things. I had taxonomies for people, company, color, etc.

After testing to see that what I output was formatted to properly get read by Hugo, I then used [httrack](http://www.httrack.com/) to download all of the nodes of content to my machine. Each file was downloaded into a subfolder for the corresponding sections used by the global nav and the url paths on the site. I ran the files all through a file renamer to add .md (markdown) extensions. I use [Name Mangler](http://manytricks.com/namemangler/) on the Mac for renaming.

These articles helped with figuring out the export part of the process.

* [Sending a Drupal Site Into Retirement](https://www.lullabot.com/blog/article/sending-drupal-site-retirement)
* [Creating a static archive of a Drupal site](https://www.drupal.org/node/27882)

### Building it in Hugo

Next step was to install Hugo and generate a basic Hugo site with the .md files I downloaded. The [Hugo docs](http://gohugo.io/overview/introduction/) show you how to create a Hugo site and install a theme. I did this first to test out the content. Then I started learning how templates work and built my own straight from the docs, looking at a few examples to figure out how to create taxonomy views. I started with a skeleton template that just spits out a nav and bodies, then made some section views.

Next was CSS/JS asset management. I copied over my SASS files and JS. I also decided to switch from the Bootstrap grid to Foundation, so I stripped down a lot of styles and the layout. After years of changing layout ideas, it's nice to trim the SASS layout files down to nothing.

To manage the pre-processing, minifying and building of JS and SASS/CSS I had to set up a task manager. I decided to learn how Gulp handles this compared to Grunt, and I like how simple and clean my Gulpfile.js is. It works about the same as Grunt, so there was little to learn there. [This post on getting started with gulp](http://markgoodyear.com/2014/01/getting-started-with-gulp/) is good if all you're interested in is processing Sass. There's plenty of StackOverflow articles on processing JS. I only run gulp whenever I make a change to JS or SASS which is rare, and the minified files get included with the Hugo build command.

My process for writing new content now is to start up Atom, create a new .md file in the appropriate directory, then run "hugo server --watch" to test it. When I'm happy with my writing, I run "hugo" to build files into my /public directory and I'm ready to deploy.

The last step is a command that uses [s3cmd](http://s3tools.org/s3cmd) to sync only the changed pages to the generated public directory, removing deletions. See the options in the docs for doing this. There are many blog posts with different suggestions for how to deploy, but I found all I needed [in this one on Programblings](http://www.programblings.com/2013/07/12/hosting-a-website-on-s3/).

That's what I've done to date and it's working well. My next steps are to get my content, which is on Git, hooked up to a middleman that will automate the deploy part of the process. If you're interested in seeing how I created this site, you can look at my theme templates. The entire site is publicly [viewable on Github](https://github.com/jibbajabba/konigi.com/tree/master/themes/konigi).

So far I'm very happy, and after a few years of trying different tools, this set feels right... until the next change. The older I get, however, the less I want to waste time on stuff like this, so it feels like a keeper. Huge thanks to <a href="http://spf13.com/">Steve Francia</a> for creating Hugo and to everyone who contribute to it. If a simple-minded UX designer like me can use it, that's saying a lot.
