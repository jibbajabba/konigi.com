+++
title = "Meet the super-light HTML prototyping toolkit in under 3 minutes"
description = ""
tags = ["html prototyping", "wireframing"]
date = "2009-11-17"
categories = ["blog"]
slug = "meet-super-light-html-prototyping-toolkit-under-3-minutes"
+++



  <div class="video">
<object classcodebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,115,0' width='560' height='345'><param name='movie' value='http://screenr.com/Content/assets/screenr_0817090731.swf' ></param><param name='flashvars' value='i=26677' ></param><param name='allowFullScreen' value='true' ></param><embed src="http://screenr.com/Content/assets/screenr_0817090731.swf' flashvars='i=26677' allowFullScreen='true' width='560' height='345' pluginspage='http://www.macromedia.com/go/getflashplayer' ></embed></object></div>
<p>This is a demo of an HTML Prototyping Toolkit that I've assembled from a few open source libraries. The idea is to create something super light so you can sketch your wireframes in HTML.</p>
<h2>Using Templates</h2>
<p>I'm using a jQuery template for creating columns in a grid. </p>
<p>Columns look like this:</p>
<p><code></p>
<pre>
{cols}  <-- grid layout container
  {col12} <-- 12 unit column
  {/col}  <-- closed column
  {col12last}  <-- 12 unit column
                   last in container
  {/col}
{/cols}  <-- end of container
</code></pre><p>
You can try out the prototypes I'm playing with here:</p>
<p><a href="http://www.konigi.com/protokit/projects/tsi-proteus/index.html" title="http://www.konigi.com/protokit/projects/tsi-proteus/index.html">http://www.konigi.com/protokit/projects/tsi-proteus/index.html</a></p>
<p>If you have Firebug, inspect the page to see what the templates are building.</p>
<h2>Works with ixEdit</h2>
<div class="video">
<object classcodebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,115,0' width='560' height='345'><param name='movie' value='http://screenr.com/Content/assets/screenr_1116090935.swf' /><param name='flashvars' value='i=27619' /><param name='allowFullScreen' value='true' /><embed src="http://screenr.com/Content/assets/screenr_1116090935.swf' flashvars='i=27619' allowFullScreen='true' width='560' height='345' pluginspage='http://www.macromedia.com/go/getflashplayer'></embed></object></div>
<p>As I said above, this is meant to be super light and uses existing libraries. I'll start posting the code when it's cleaner.</p>
    
  <a href="http://screenr.com/CVB">http://screenr.com/CVB</a>
