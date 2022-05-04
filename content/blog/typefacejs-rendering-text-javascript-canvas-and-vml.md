+++
title = "typeface.js: Rendering text with Javascript, canvas, and VML"
description = ""
tags = ["interface", "javascript", "typography"]
date = "2009-01-01"
categories = ["blog"]
slug = "typefacejs-rendering-text-javascript-canvas-and-vml"
+++



  <div class="notebook-screenshot"><a href="http://typeface.neocracy.org/"><img src="/media/bluga/wt495cc52f28966.jpg"/></a></div><p>I just came across <a href="http://typeface.neocracy.org/">typeface.js</a>, a type face replacement method like <a href="http://wiki.novemberborn.net/sifr/">SIFR</a> and <a href="http://facelift.mawhorter.net/">FLIR</a>, that lets you embed custom fonts in your pages using CSS. On the backend, javscript is used with <canvas> or VML to draw the glyphs for your fonts. </p>
<p>Compared with SIFR, this suffers from some issues. Biggest one perhaps is that you can't select text since it's rendered as an image. Not so with SIFR. I wouldn't go using this method for body text, but if you're already considering doing image replacement for elements like headings, this would be a library to watch. There's bound to be accessibility improvements in the future using methods that put invisible text over the image, or something like that.</p>
    
  <a href="http://typeface.neocracy.org/">http://typeface.neocracy.org/</a>
