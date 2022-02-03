+++
title = "Mac Tip: Mounting a Server Automatically"
description = ""
tags = ["document management", "mac", "tips", "tutorials"]
date = "2009-01-02"
categories = ["blog"]
slug = "mac-tip-mounting-server-automatically"
+++



  <div class="notebook-screenshot"><img src="//konigi.com/media/notebook/mounting-mac-server.jpg" class="notebook-image" /></div><p>One of the things I've always found a chore, being a producer of graphic documents, is versioning and organizing the docs for a team. I've had to use different tools like Source Safe, Sharepoint, Basecamp, and just shared drives to this. One nice thing I like about working with our Traction server is that it does Webdav for document management and file versioning. That's one of the projects I'm working on a preview release of to make the web-based interface a bit more friendly.  </p>
<p>The thing with Webdav is that I can mount the shared folders in my Mac Finder and drag and drop tons of documents in there without going to the web site. But I don't want to have to manually connect to the shared folder. Luckily it's easy to have the Mac OS automatically connect to servers when you log in. Someone tweeted today wondering how you do that, so I posted a screenshot showing how I've set up my Mac. You can do the same thing with whatever share point or server you use.</p>
<p>Here's the steps:</p>
<ol>
<li>Make sure you're in the Finder. Connect to the server using menu Go > Connect to Server, or keyboard shortcut Command-K.</li>
<li>With the volume mounted, open System Preferences > Accounts, and select your user account. Click the Login Items tab (you may need to click the lock icon in the lower left to edit login items).</li>
<li>Now just drag the mounted volume from the Finder in to your System Preferences > Login Items list.</li>
</ol>
<p>That's it. Now your Mac should automatically try to connect to your server volume whenever you log in, and it will show up in your Finder.</p>
