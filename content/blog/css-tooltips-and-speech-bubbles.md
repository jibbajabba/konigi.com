+++
title = "CSS Tooltips and Speech Bubbles"
description = ""
tags = []
date = "2010-10-29"
categories = ["tools"]
slug = "css-tooltips-and-speech-bubbles"
+++



  <p>I've been using some new CSS techniques lately, and thought it was time to start experimenting with ideas. One thing that I thought was really cool was that you could use the :before and :after pseudo-classes to create boxes before and after an element and position those. I did that on the little screenshot images <a href="http://balsamiq.com/products/mockups/mybalsamiq">on this product page</a>, to position the little + icons.</p>
<p>I was also interested in how I could replace some of the jQuery techniques I was using to make tooltips in myBalsamiq. One thing that bothered me about the technique in jQuery UI was that I had to use an image to create a triangle below the tool tip box. A quick search turned up a technique for creating a triangle with CSS on a <a href="http://jonrohan.me/guide/css/creating-triangles-in-css/">demo by Jon Rohan</a>. Jon's technique uses a few spans to create the awesome outlined bubble. I thought I'd go simpler and just put a box shadow on the main part of the bubble so I could get rid of the spans, and then I'd just use the :after pseudo-class to position a box that created the triangle below the bubble. The result is below. This has been tested in Webkit only.</p>
<hr />
<h3>Speech Bubble</h3>
<h4>Demo</h4>
<div class="bubble">Hi there. I like turtles.</div>
<p style="margin-left: 1em;">Mikey sez</p>
<h4>Code</h4>
<p><code>&lt;div class="bubble"&gt;Hi there. I like turtles.&lt;/div&gt;<br />
&lt;p style="margin-left: 1em;"&gt;Mikey sez&lt;/p&gt;</code></p>
<p><code></p>
<pre>
.bubble {
  position: relative;
  background-color:#eee;
  margin: 0;
  padding:10px;
  text-align:center;
  width:180px;
  -moz-border-radius:10px;
  -webkit-border-radius:10px;
  -webkit-box-shadow: 0px 0 3px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0 3px rgba(0,0,0,0.25);
  box-shadow: 0px 0 3px rgba(0,0,0,0.25); 
}
.bubble:after {
  position: absolute;
  display: block;
  content: "";  
  border-color: #eee transparent transparent transparent;
  border-style: solid;
  border-width: 10px;
  height:0;
  width:0;
  position:absolute;
  bottom:-19px;
  left:1em;
}</pre><p></code></p>
<hr />
<h3>Tool Tip Try 1</h3>
<p>This one is a little trickier, because the browser will display the yellow tooltip fro the anchor as well. You could hide the title attribute by using $("a.tip").removeAttr("title"); but that's where I'm getting the tip from. This is one case where using a hidden span nested in the link might be smarter.</p>
<h4>Demo</h4>
<p><a href="#" class="tip" title="Hi, There. I like turtles.">Hover over me!</a></p>
<h4>Code</h4>
<p><code>&lt;a href="#" class="tip" title="Hi, There. I like turtles."&gt;Hover over me!&lt;/a&gt;</code></p>
<p><code></p>
<pre>
a.tip {
  position: relative;
  text-decoration: none;
}
a.tip:hover:before {
  display: block;
  position: absolute; 
  padding: .5em;
  content: attr(title);
  min-width: 120px;
  text-align: center;
  width: auto;
  height: auto;
  white-space: nowrap;
  top: -32px;
  background: rgba(0,0,0,.8);
  -moz-border-radius:10px;
  -webkit-border-radius:10px;
  border-radius:10px;    
  color: #fff;
  font-size: .86em;
}
a.tip:hover:after {
  position: absolute;
  display: block;
  content: "";  
  border-color: rgba(0,0,0,.8) transparent transparent transparent;
  border-style: solid;
  border-width: 10px;
  height:0;
  width:0;
  position:absolute;
  top: -8px;
  left:1em;
}</pre><p></code></p>
<p><br  /></p>
<hr />
<h3>Tool Tip Try #2</h3>
<p>This time using a span without the pesky anchor tooltip.</p>
<h4>Demo</h4>
<p><a href="#" class="tip2">Hover over me!<span>Hi, There. I like turtles.</span></a></p>
<h4>Code</h4>
<p><code>&lt;a href="#" class="tip2"&gt;Hover over me!&lt;span&gt;Hi, There. I like turtles.&lt;/span&gt;&lt;/a&gt;</code></p>
<p><code></p>
<pre>a.tip2 {
  position: relative;
  text-decoration: none;
}
a.tip2 span {display: none;}
a.tip2:hover span {
  display: block;
  position: absolute; 
  padding: .5em;
  content: attr(title);
  min-width: 120px;
  text-align: center;
  width: auto;
  height: auto;
  white-space: nowrap;
  top: -32px;
  background: rgba(0,0,0,.8);
  -moz-border-radius:10px;
  -webkit-border-radius:10px;
  border-radius:10px;    
  color: #fff;
  font-size: .86em;
}
a.tip2:hover span:after {
  position: absolute;
  display: block;
  content: "";  
  border-color: rgba(0,0,0,.8) transparent transparent transparent;
  border-style: solid;
  border-width: 10px;
  height:0;
  width:0;
  position:absolute;
  bottom: -16px;
  left:1em;
}</pre><p></code></p>
<style type="text/css">
.bubble {
  position: relative;
  background-color:#eee;
  margin: 0 0 1em 0;
  padding:10px;
  text-align:center;
  width:180px;
  -moz-border-radius:10px;
  -webkit-border-radius:10px;
  border-radius:10px;  
  -webkit-box-shadow: 0px 0 3px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0 3px rgba(0,0,0,0.25);
  box-shadow: 0px 0 3px rgba(0,0,0,0.25); 
}
.bubble:after {
  position: absolute;
  display: block;
  content: "";  
  border-color: #eee transparent transparent transparent;
  border-style: solid;
  border-width: 10px;
  height:0;
  width:0;
  position:absolute;
  bottom:-19px;
  left:1em;
}
a.tip {
  position: relative;
  text-decoration: none;
}
a.tip:hover:before {
  display: block;
  position: absolute; 
  padding: .5em;
  content: attr(title);
  min-width: 120px;
  text-align: center;
  width: auto;
  height: auto;
  white-space: nowrap;
  top: -32px;
  background: rgba(0,0,0,.8);
  -moz-border-radius:10px;
  -webkit-border-radius:10px;
  border-radius:10px;    
  color: #fff;
  font-size: .86em;
}
a.tip:hover:after {
  position: absolute;
  display: block;
  content: "";  
  border-color: rgba(0,0,0,.8) transparent transparent transparent;
  border-style: solid;
  border-width: 10px;
  height:0;
  width:0;
  position:absolute;
  top: -4px;
  left:1em;
}

a.tip2 {
  position: relative;
  text-decoration: none;
}
a.tip2 span {display: none;}
a.tip2:hover span {
  display: block;
  position: absolute; 
  padding: .5em;
  content: attr(title);
  min-width: 120px;
  text-align: center;
  width: auto;
  height: auto;
  white-space: nowrap;
  top: -32px;
  background: rgba(0,0,0,.8);
  -moz-border-radius:10px;
  -webkit-border-radius:10px;
  border-radius:10px;    
  color: #fff;
  font-size: .86em;
}
a.tip2:hover span:after {
  position: absolute;
  display: block;
  content: "";  
  border-color: rgba(0,0,0,.8) transparent transparent transparent;
  border-style: solid;
  border-width: 10px;
  height:0;
  width:0;
  position:absolute;
  bottom: -20px;
  left:1.25em;
}
</style>
