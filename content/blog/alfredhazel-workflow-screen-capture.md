+++
title = "Alfred/Hazel Workflow for Screen Capture"
description = ""
tags = ["mac", "screen capture", "tips"]
date = "2013-08-13"
categories = ["blog"]
slug = "alfredhazel-workflow-screen-capture"
+++



<p>If you take a lot of screenshots on a Mac like me, you probably have a good workflow for doing it using something like <a href="http://realmacsoftware.com/ember">LittleSnapper/Ember</a>, <a href="https://chrome.google.com/webstore/detail/awesome-screenshot-captur/alelhddbbhepgpmgidjdcjakblofbmce?hl=en">Awesome Screenshot</a> or <a href="http://evernote.com/skitch/">Skitch</a>. The biggest problem I've had is that after I take a screenshot, I often want to do something with it. I can do this by just getting <a href="http://getcloudapp.com/">Cloud</a> to watch and upload files passively, but I've always wanted to save to my own server after just issuing one command to capture the page. </p>
<p>I love Alfred. Launchers like Quicksilver and Alfred are what I think of as the best minimal UI apps that I use on the Mac. I finally got around to searching for a way to capture a full scrolling screen from it and do something with the output. </p>
<p>I found an <a href="http://www.alfredforum.com/topic/2062-scrennshot-of-web-pages/">excellent Alfred workflow</a> by user moom on the Alfred Forum that uses a shell script to run <a href="http://www.paulhammond.org/webkit2png/">Webkit2Png</a> in the background. It's awesome. I just copy the URL of the page I'm on, summon Alfred with a few keystrokes, and then it gets captured, optimized, and uploaded to my server in the background. I made a video of the workflow showing <a href="http://www.alfredapp.com/">Alfred</a>, <a href="http://www.noodlesoft.com/hazel.php">Hazel</a>, <a href="http://imageoptim.com/">ImageOptim</a>, and <a href="http://panic.com/transmit/">Transmit</a> working together with lots of spit and chewing gum in case anyone else has this need. </p>
<div class="video"><iframe src="http://player.vimeo.com/video/72290954?title=0&amp;byline=0&amp;portrait=0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>
<p>It's a lot of steps to set up, but if you have this need, you'll appreciate it. ;) You can modify the steps for your workflow to move it to note in Evernote, to Cloud, or wherever your heart desires. <a href="http://www.alfredforum.com/topic/2062-scrennshot-of-web-pages/">Download the workflow here.</a></p>
<p>If you're interested to know how I modified the workflow, these are the options I used:</p>
<blockquote style="font-style: normal"><p><code>python webkit2png -F -W 980 --delay=5 "$(pbpaste)"<br />
ls *.png | grep -v icon.png |<br />
xargs -I {} mv {} ${HOME}/Sites/media.konigi.com/snaps/2013/</code></p></blockquote>
<p>-F -W 980 outputs a full scrolling screen at 980px wide. You can see what the options are by running this command in the terminal: webkit2png --help.</p>

  <a href="https://vimeo.com/72290954">https://vimeo.com/72290954</a>
