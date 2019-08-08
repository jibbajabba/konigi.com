+++
title = "What's broken about wireframes and how can we fix them?"
description = ""
tags = ["html prototyping", "wireframing"]
date = "2009-09-02"
categories = ["blog"]
slug = "whats-broken-about-wireframes-and-how-can-we-fix-them"
+++



  <p class="dek">Generally speaking I have 2 gripes with wireframes. One is that they're very limited and come with issues in terms of communicating design. Secondly, they're not fast and flexible enough as communication artifacts.</p>
<p>HTML wireframes and prototypes provide some relief from some of the issues, and I'd like to hear what other people are looking for when doing HTML wireframes in order to fix and overcome the limitations of wireframes made in graphics software. </p>
<p>First, here is my gripe list. And for clarity, I use OmniGraffle primarily to create wireframes now.</p>
<h2>Limitations for communicating design</h2>
<p><strong>1) People have to learn to read low fidelity schematics</strong></p>
<p>You end up with clumsy disclaimers about design, people focus on their rough aesthetics rather than on functionality, etc.  This is why so many people find sketch-style artifacts useful. The "unfinished" quality allows people to get past the surface qualities because the final product obviously won't look like that.</p>
<p><strong>2) People sometimes expect them to demonstrate final visual design</strong></p>
<p>This is the other end of the fidelity spectrum. People just have a hard time with both gray box diagrams and with detailed wireframes. Some repeated education and introduction to the wireframe is needed to summarize the purpose it serves.</p>
<h2>Limitations when producing wireframes</h2>
<p><strong>1) Components are not reusable as updatable instances</strong></p>
<p>Some applications allow you to use stencils and external files imported into a document. But they don't have the behavior of instances, as Flash does, where updating the master object updates instances. You can fake this in some tools, and other tools provide real libraries, e.g. Fireworks. Flex's UI Component Library may come closest to what I'm looking for--library items that can be instantiated and properties customized. The extension of this is to allow the component to be saved and extended so it can be re-used, i.e. a private library.</p>
<p><strong>2) Common behaviors have to be represented multiple times--CRUD, design pattern</strong></p>
<p>A lot of these behaviors can be represented in a design pattern library perhaps. What I've done in the past is to create storyboards for common behaviors across a document, so that their behaviors need only be represented once. Something like this is useful if it can be used with the local library ideas mentioned above. Create a local library of components and they only need to be designed once. Insert where needed in the prototype and the behavior is identical. A separate document can be created to demonstrate all of these and perhaps organize them for developers to view.</p>
<p><strong>3) Some people expect them to be updated constantly, which is hard given the re-use issues</strong></p>
<p>The goal is to both make these easier to update globally and to make small changes. Issues related to this include version control and rolling back changes. This also would be an issue for library components. Documents and libraries can be backed up for brute force versioning, but use of version control systems would be ideal.</p>
<p><strong>4) They're time consuming and therefore costly to make, as opposed to sketching.</strong>  </p>
<p>I'm still not sure if HTML wireframes will come with time savings, but I am hopeful that their ability to demonstrate ideas more clearly and effectively wipes out those costs by allowing shorter iterations.</p>
<h2>What are your gripes?</h2>
<p>Do you have any other ideas about what needs to be fixed about wireframes? This is an effort at a "Pony" brainstorming meeting (as in "I want a pony!") to see what other people want to solve with html wireframes that graphic wireframes fail at.</p>
<p>If you want to participate in our project to assemble an HTML prototyping kit, please <a href="../book/prototyping-framework.html">read our mission statement</a> and find out how to get involved.</p>
    
  
