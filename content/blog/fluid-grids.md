+++
title = "Fluid Grids"
description = ""
tags = ["css", "fluid layouts", "front end development"]
date = "2009-03-20"
categories = ["blog"]
slug = "fluid-grids"
+++



  <div class="notebook-screenshot"><a href="http://alistapart.com/articles/fluidgrids"><img src="/media/bluga/wt49c3e04302ff6.jpg"/></a></div><p>In the latest A List Apart, Airbag Industries' Ethan Marcotte writes about <a href="http://alistapart.com/articles/fluidgrids">designing fluid grids</a>, rather than using the fixed pixel methods provided by most CSS layout frameworks. Marcotte describes that the technique of calculating percentages for column widths is the same method we use for calculating font sizes in ems. </p>
<p>To calculate fluid grid dimensions, we first take a base font size of 100%, which is usually 16px in the majority of browsers when not altered by the user. This becomes our context variable. Then we take the fixed pixel size we want to make fluid, e.g. a width in our fixed pixel design, and divide by the context variable, which gives us a relative value for our fluid grid.</p>
<p>Fluid grid equation</p>
<blockquote><p>target ÷ context = result</p></blockquote>
<p>For example a 700px column is calculated to be 43.75em.</p>
<blockquote><p>700 ÷ 16 = 43.75</p></blockquote>
<p>The one minor exception to the above is that you might have to shave a pixel off your target if you experience problems with your widths in IE because of that browser's rounding behavior. </p>
<p>Users of 960gs may be interested in using <a href="http://www.designinfluences.com/fluid960gs/">the fluid port</a> of that framework.</p>
    
  <a href="http://alistapart.com/articles/fluidgrids">http://alistapart.com/articles/fluidgrids</a>
