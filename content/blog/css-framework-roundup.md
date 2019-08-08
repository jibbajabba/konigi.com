+++
title = "CSS Framework Roundup"
description = ""
tags = ["css", "front end development", "grids"]
date = "2008-08-03"
categories = ["blog"]
slug = "css-framework-roundup"
+++



  <p class="dek">Hidden Pixels recently <a href="http://hiddenpixels.com/css-stuffs/css-frameworks/">rounded up the available CSS frameworks</a> into a list. I happen to be evaluating CSS frameworks as well to find a flexible system to provide on a CMS I'm working on. The Hidden Pixels list isn't very descriptive of the specific usage or value each framework has to offer, so I've provided a summary of each to make this a useful reference when evaluating the list.</p>
<p>The CSS presentation frameworks listed below provide the underlying CSS structure for typical web site needs. The idea behind most of these is that they provide rules for the kinds of markup and layout web designers do repeatedly. They may supply grid systems and typography support, but not all of these provide both. Most provide at minimum an Eric Meyer style CSS reset. I've divided the lists into separate the frameworks providing support for grid-based customizable layouts from the other types of systems.</p>
<p><strong>Frameworks supporting grid-based customizable layout</strong></p>
<ul>
<li><a href="http://960.gs/">960 Grid System</a><br />
Similar to Blueprint, but provides 12 and 16 column grids at 960px wide. 12 column grid is divided into portions that are 60 pixels wide. The 16 column grid consists of 40 pixel increments. Each column has 10 pixels of margin on the left and right, which create 20 pixel wide gutters between columns.</li>
<li><a href="http://code.google.com/p/blueprintcss/">Blueprint</a><br />
Provides a 950px wide grid, with 24 columns spanning 30px, and a 10px margin between columns. Also provides a typography stylesheet with a baseline of 18px, allowing for alignment if every element uses a multiple of 18px.</li>
<li><a href="http://capsizedesigns.com/blog/2008/04/bluetripcss-a-fusion-of-blueprint-and-tripoli/">BlueTrip</a><br />
Combines the grid system from Blueprint with the typography from Tripoli.</li>
<li><a href="http://sandbox.pocoo.org/clevercss/">CleverCSS</a><br />
A Python script that allows you to use a sort of CSS shorthand to write your rules quickly without all of the characters required by CSS syntax. The script then converts your shorthand into valid CSS.</li>
<li><a href="http://code.google.com/p/emastic/">Emastic</a><br />
A flexible framework, similar in concept to Blueprint, that uses ems for elastic layout. Allows you to achieve fixed pixel or fluid grids using ems, pixels, or percentages for column widths.</li>
<li><a href="http://eswat.ca/">ESWAT</a><br />
File system framework for a simple site, including directories for the types of files you might want to use. Does not include grid or typography systems.</li>
<li><a href="http://code.google.com/p/logicss/">Logic</a><br />
A collection of CSS files and PHP utilities to generate layouts. Flexible framework providing support for elastic, em-based typography, and grids with ems, pixels, or percentages.</li>
<li><a href="http://www.thatstandardsguy.co.uk/blog/2006/11/23/my-css-framework/">That Standards Guy</a><br />
Starts out as an apporach to call single style sheet within a Microsoft CMS. Pulls together various CSS libraries and hacks including YUI Grids.</li>
<li><a href="http://csswizardry.com/typogridphy/">Typogridphy</a><br />
Framework that uses the 960 Grid System for fixed or fluid layout, and provides typographic style rules for ‘creating vertical rhythm’, whereby all adjacent lines of text line up horizontally, regardless of line breaks and new paragraphs.</li>
<li><a href="http://developer.yahoo.com/yui/grids/">YUI Grids</a><br />
Yahoo's CSS Grids framework provides fixed and fluid layouts. Layouts are source-order independent, so your columns can be output in any order, regardless of the order in presentation. Grid accommodates IAB Ad Unit guidelines.</li>
</ul>
<p><strong>Related frameworks</strong><br />
These frameworks may provide either element support without layout rules or pre-configured layout options.  </p>
<ul>
<li><a href="http://code.google.com/p/css-boilerplate/">Boilerplate</a><br />
Based on Blueprint, but strips out Grid framework, so you'll have to write your own rules for columns.</li>
<li><a href="http://www.contentwithstyle.co.uk/Articles/17/a-css-framework/">Content With Style</a><br />
A quick-start framework, providing common names for div elements (e.g. header, content, main, sub, local, nav) and provides 6 different layouts.</li>
<li><a href="http://elements.projectdesigns.org/">Elements</a><br />
File system framework for a simple site, including directories for the types of files you might want to use. Includes specific prototype/scriptaculous and lightbox. Does not include grid or typography systems.</li>
<li><a href="http://www.davidgoldingdesign.com/schema.html">Schema</a><br />
Provides support for a 2 column layout with right sidebar. Layout options are minimal, but provides styles for standard HTML elements.</li>
<li><a href="http://devkick.com/lab/tripoli/">Tripoli</a><br />
Provides a base for creating dynamic layouts without interfering with typographic measurements. Includes rules for most commonly used HTML elements, and via a Layout plugin provides canned layout options.</li>
<li><a href="http://www.wymstyle.org/en/">WYMstyle</a><br />
Framework using layout modules. You import modules into a main stylesheet to achieve one of the core layouts provided in the library.</li>
<li><a href="http://www.yaml.de/en/home.html">Yet Another Multicolumn Layout (YAML)</a><br />
Provides a fixed width and several multi-column layout options.</li>
</ul>
    
  
