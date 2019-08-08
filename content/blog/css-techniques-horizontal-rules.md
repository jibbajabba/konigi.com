+++
title = "CSS Techniques for Horizontal Rules"
description = ""
tags = []
date = "2011-07-02"
categories = ["tools"]
slug = "css-techniques-horizontal-rules"
+++



  <p>I like to use HR tags. I use the technique in the first example below, but occasionally want a nicer separator, and hate having to use a graphic to show that chiseled aqua-style divider or to created the faded line of a gradient. Examples 2 and 3 use background gradients in webkit and mozilla. All versions of IE just show the solid rule. </p>
<h3>Normal</h3>
<h4>Demo</h4>
<hr />
<h4>HTML &amp; CSS</h4>
<p>&lt;hr /&gt;</p>
<pre><code>
hr {
  background: #ddd; 
  clear: both; 
  float: none; 
  width: 100%; 
  height: 1px;
  margin: 0 0 1.4em;
  border: none; 
}
</code></pre><p>
</p>
<h3>With Faded Edges</h3>
<h4>Demo</h4>
<hr class="faded" />
<h4>HTML &amp; CSS</h4>
<p>&lt;hr class="faded" /&gt;</p>
<pre><code>
hr.faded {
  clear: both; 
  float: none; 
  width: 100%; 
  height: 1px;
  margin: 1.4em 0;
  border: none; 
  background: #ddd;
  background-image: -webkit-gradient(
      linear,
      left bottom,
      right bottom,
      color-stop(0, rgb(255,255,255)),
      color-stop(0.1, rgb(221,221,221)),
      color-stop(0.9, rgb(221,221,221)),
      color-stop(1, rgb(255,255,255))
  );
  background-image: -moz-linear-gradient(
      left center,
      rgb(255,255,255) 0%,
      rgb(221,221,221) 10%,
      rgb(221,221,221) 90%,
      rgb(255,255,255) 100%
  );
}
</code></pre><p>
</p>
<h3>Carved</h3>
<h4>Demo</h4>
<div style="background: #eee; padding: 20px 10px; margin-bottom: 1em;">
<hr class="carved" />
</div>
<h4>HTML &amp; CSS</h4>
<p>&lt;hr class="carved" /&gt;</p>
<pre><code>
hr.carved {
  clear: both; 
  float: none; 
  width: 100%; 
  height: 2px;
  margin: 1.4em 0;
  border: none; 
  background: #ddd;
  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0.5, rgb(221,221,221)),
      color-stop(0.5, rgb(255,255,255))
  );
  background-image: -moz-linear-gradient(
      center top,
      rgb(221,221,221) 50%,
      rgb(255,255,255) 50%
  );
}
</code></pre><style>
/* hr */
hr {
  background: #ddd; 
  clear: both; 
  float: none; 
  width: 100%; 
  height: 1px;
  margin: 0 0 1.4em;
  border: none; 
}
hr.faded {
  clear: both; 
  float: none; 
  width: 100%; 
  height: 1px;
  margin: 1.4em 0;
  border: none; 
  background: #ddd;
  background-image: -webkit-gradient(
      linear,
      left bottom,
      right bottom,
      color-stop(0, rgb(255,255,255)),
      color-stop(0.1, rgb(221,221,221)),
      color-stop(0.9, rgb(221,221,221)),
      color-stop(1, rgb(255,255,255))
  );
  background-image: -moz-linear-gradient(
      left center,
      rgb(255,255,255) 0%,
      rgb(221,221,221) 10%,
      rgb(221,221,221) 90%,
      rgb(255,255,255) 100%
  );

}
hr.carved {
  clear: both; 
  float: none; 
  width: 100%; 
  height: 2px;
  margin: 1.4em 0;
  border: none; 
  background: #ddd;
  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0.5, rgb(221,221,221)),
      color-stop(0.5, rgb(255,255,255))
  );
  background-image: -moz-linear-gradient(
      center top,
      rgb(221,221,221) 50%,
      rgb(255,255,255) 50%
  );
}
</style>
