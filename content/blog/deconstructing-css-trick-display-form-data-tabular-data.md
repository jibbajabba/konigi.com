+++
title = "Deconstructing a CSS trick to display form data as tabular data"
description = ""
tags = ["css", "forms"]
date = "2009-12-22"
categories = ["blog"]
slug = "deconstructing-css-trick-display-form-data-tabular-data"
+++



  <div class="notebook-screenshot"><a href="http://cssglobe.com/articles/editable_fields/"><img src="//media.konigi.com/bluga/wt4b30e6fa5e314_large.jpg"/></a></div><p>CSS and Javascript experiments are fun to play around with. I tend to talk about them here because of the questions they raise about whether a technique is worth implementing or if it does more harm than help. Straight forward and familiar are the safe route. Sometimes experiments lead to better ways of doing things, other times they seem like they're gratuitous.</p>

<p>I came across an <a href="http://cssglobe.com/post/6984/ux-trick-display-form-data-as-tabular-data">interesting, if problematic experiment</a> to convert form fields into editable fields that are masked table cells until each input is in focus. I don't think this would be particularly familiar to a user if they're editing a form for the first time. However, it does provide a nice problem to deconstruct and review.</p>

<p>I'm sure there is a specific application they have in mind here, e.g. displaying a view of tabular data as a masked form to a user that has permission to edit it. But I think that could just be accomplished using javascript to transform individual fields and submit via AJAX. One of the problems with transforming the text to input and back to system text again is that the user might believe that the transition implies a submission, when nothing is submitted in this form, I presume, until the Edit button is clicked. If the case was that editing each input submitted the data, however, this feels like it could be an appropriate concept.</p>

<p>As far as the concept of masking input fields here, I think the issue I have has to do with familiarity, usability, and efficiency. But to make it more usable, the form could give the user a cue as to how to start using this form. The first input might be put in focus so you know that you're able to edit form fields. Clicking an edit icon to start seems inefficient, although tabbing is also possible.</p>

<p>Some tricks run the risk of turning a simple function into what might be perceived as a gimmick, or worse, might fail to perform its primary function of getting the user's data input. Form fields feel like a dangerous place for me to confuse.</p>

    
  <a href="http://cssglobe.com/articles/editable_fields/">http://cssglobe.com/articles/editable_fields/</a>
