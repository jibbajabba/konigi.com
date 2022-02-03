+++
title = "Experiments in Password Masking"
description = ""
tags = ["interface", "masking", "passwords"]
date = "2009-07-13"
categories = ["blog"]
slug = "experiments-password-masking"
+++



  <div class="notebook-screenshot"><a href="http://lab.arc90.com/2009/07/halfmask.php"><img src="//konigi.com/media/notebook/halfmask.jpg" class="notebook-image" /></a></div><p>Jakob Nielsen recently <a href="http://www.useit.com/alertbox/passwords.html">called for an end to</a> password masking, and a few people have come up with interesting approaches that try to find a middle ground between the typical prractice of masking passwords with asterisks. </p>
<p>arc90 are <a href="http://lab.arc90.com/2009/07/halfmask.php">experimenting with a half-masking technique</a>. The method partially obscures the password by placing a few blurred characters in the background so that the characters are not easily read by someone looking over the user's shoulder. This seems like an interesting idea. The problem for me is that I can't say that the characters are easily read by me either. Can you make out the password in the screenshot above? It's hard to, I would argue. But, I'm one of those people who has trouble with the more twisted captchas or those with too much background noise. My eyesight is not bad, mind you, I just interpret some of the characters more creatively I guess. </p>
<p>Another interesting idea uses a behavior that is typical in mobile phones, which masks the typed character after it is displayed briefly in the input for a specified time, or after the user enters a subsequent character. This is a terrific behavior in phones because the character is completely visible to the user. I guess it could argued that it could still be read over the user's shoulder, however. You can try that solution in the <a href="http://blog.decaf.de/2009/07/iphone-like-password-fields-using-jquery/">iPhone-like passwords using jquery</a> post on the Decaf blog.</p>
<p>Both are interesting solutions to a problem that might be a minor nuisance to some users (although I would argue that captcha is a much bigger one to me). But my opinion is that simply having a toggle to hide/show the password clearly might be an even simpler approach. For users in public places, the input might be masked, but when they're alone they can keep it in the clear.</p>
<p>UPDATE: Chris Dary also pointed to his <a href="http://lab.arc90.com/2009/07/hashmask.php">HashMask</a> experiment at arc90, which we discuss below.</p>
    
  <a href="http://lab.arc90.com/2009/07/halfmask.php">http://lab.arc90.com/2009/07/halfmask.php</a>
