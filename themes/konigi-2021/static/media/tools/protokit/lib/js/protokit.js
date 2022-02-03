$(document).ready(function() {
  
  // PAGE VARS
  var currentURL = document.location.pathname;
  var activePageArray = currentURL.split('/');
  var activeFile = activePageArray[activePageArray.length-1];
  var activePage = activeFile.replace(/.html/g,'');
  var pkVers = '<p id="pkv">Protokit Version 0.1</p>';

  // LOAD
  $('#wrapper').addClass("notes");
  
  // BODY TEMPLATES
  if(notes=='true') {
    notesHtml = '<div id="notes"><div class="content"><div id="notesreplace"></div></div></div>';
    notesIcon = '<li><a href="javascript:void(0)" id="note-toggle"><span class="ui-icon ui-icon-document-b"></span> Notes</a></li>';
    $('#wrapper').removeClass("notes");
    $.cookie('wrapper', 'notesoff');
  } else { 
    notesHtml = ''; notesIcon = '';
  } 
  if(spec=='true') {  
    specHtml = '<div id="spec"><h2>Specifications</h2><div id="specreplace"></div></div>';
    specIcon = '<li><a href="javascript:void(0)" id="spec-toggle"><span class="ui-icon ui-icon-document-b"></span> Spec</a></li>';    
  } else { 
    specHtml = ''; specIcon = '';
  }
  
  $("#protokit").render({
    'title':document.title,
    'index':'<div id="wrapper" class="index clear"><div id="canvas" class="container clear"><div class="pad">',
    '/index':'</div></div>'+ pkVers +'</div>',    
    'proto':'<div id="pkmenu" class="clear"><ul><li><a href="index.html"><span class="ui-icon ui-icon-document"></span> Index</a></li>'+ notesIcon + specIcon +'<li><a href="javascript:void(0)" id="pkmenu-toggle-off"><span class="ui-icon ui-icon-triangle-1-n"></span> Hide Menu</a></li></ul></div><div id="pkmenuoff" class="clear"><ul><li><a href="javascript:void(0)" id="pkmenu-toggle-on"><span class="ui-icon ui-icon-triangle-1-s"></span></a></li></ul></div><div id="wrapper" class="notes clear"><div id="canvas" class="container clear">',
    '/proto':'</div>'+ notesHtml +'<br clear="both" />'+ specHtml + pkVers + '</div>'
  });

  $("div#wrapper").render({
    'cols':'<div class="container">',
    '/cols':'</div>',
    'col1':'<div class="span-1">',
    'col2':'<div class="span-2">',
    'col3':'<div class="span-3">',
    'col4':'<div class="span-4">',
    'col5':'<div class="span-5">',
    'col6':'<div class="span-6">',
    'col7':'<div class="span-7">',
    'col8':'<div class="span-8">',
    'col9':'<div class="span-9">',
    'col10':'<div class="span-10">',
    'col11':'<div class="span-11">',
    'col12':'<div class="span-12">',
    'col13':'<div class="span-13">',
    'col14':'<div class="span-14">',
    'col15':'<div class="span-15">',
    'col16':'<div class="span-16">',
    'col17':'<div class="span-17">',
    'col18':'<div class="span-18">',
    'col19':'<div class="span-19">',
    'col20':'<div class="span-20">',
    'col21':'<div class="span-21">',
    'col22':'<div class="span-22">',
    'col23':'<div class="span-23">',
    'col24':'<div class="span-24">',
    'col1last':'<div class="span-1 last">',
    'col2last':'<div class="span-2 last">',
    'col3last':'<div class="span-3 last">',
    'col4last':'<div class="span-4 last">',
    'col5last':'<div class="span-5 last">',
    'col6last':'<div class="span-6 last">',
    'col7last':'<div class="span-7 last">',
    'col8last':'<div class="span-8 last">',
    'col9last':'<div class="span-9 last">',
    'col10last':'<div class="span-10 last">',
    'col11last':'<div class="span-11 last">',
    'col12last':'<div class="span-12 last">',
    'col13last':'<div class="span-13 last">',
    'col14last':'<div class="span-14 last">',
    'col15last':'<div class="span-15 last">',
    'col16last':'<div class="span-16 last">',
    'col17last':'<div class="span-17 last">',
    'col18last':'<div class="span-18 last">',
    'col19last':'<div class="span-19 last">',
    'col20last':'<div class="span-20 last">',
    'col21last':'<div class="span-21 last">',
    'col22last':'<div class="span-22 last">',
    'col23last':'<div class="span-23 last">',
    'col24last':'<div class="span-24 last">',    
    '/col':'</div>',
    'pcol1':'<div class="span-1"><div class="padlr">',
    'pcol2':'<div class="span-2"><div class="padlr">',
    'pcol3':'<div class="span-3"><div class="padlr">',
    'pcol4':'<div class="span-4"><div class="padlr">',
    'pcol5':'<div class="span-5"><div class="padlr">',
    'pcol6':'<div class="span-6"><div class="padlr">',
    'pcol7':'<div class="span-7"><div class="padlr">',
    'pcol8':'<div class="span-8"><div class="padlr">',
    'pcol9':'<div class="span-9"><div class="padlr">',
    'pcol10':'<div class="span-10"><div class="padlr">',
    'pcol11':'<div class="span-11"><div class="padlr">',
    'pcol12':'<div class="span-12"><div class="padlr">',
    'pcol13':'<div class="span-13"><div class="padlr">',
    'pcol14':'<div class="span-14"><div class="padlr">',
    'pcol15':'<div class="span-15"><div class="padlr">',
    'pcol16':'<div class="span-16"><div class="padlr">',
    'pcol17':'<div class="span-17"><div class="padlr">',
    'pcol18':'<div class="span-18"><div class="padlr">',
    'pcol19':'<div class="span-19"><div class="padlr">',
    'pcol20':'<div class="span-20"><div class="padlr">',
    'pcol21':'<div class="span-21"><div class="padlr">',
    'pcol22':'<div class="span-22"><div class="padlr">',
    'pcol23':'<div class="span-23"><div class="padlr">',
    'pcol24':'<div class="span-24"><div class="padlr">',
    'pcol1last':'<div class="span-1 last"><div class="padlr">',
    'pcol2last':'<div class="span-2 last"><div class="padlr">',
    'pcol3last':'<div class="span-3 last"><div class="padlr">',
    'pcol4last':'<div class="span-4 last"><div class="padlr">',
    'pcol5last':'<div class="span-5 last"><div class="padlr">',
    'pcol6last':'<div class="span-6 last"><div class="padlr">',
    'pcol7last':'<div class="span-7 last"><div class="padlr">',
    'pcol8last':'<div class="span-8 last"><div class="padlr">',
    'pcol9last':'<div class="span-9 last"><div class="padlr">',
    'pcol10last':'<div class="span-10 last"><div class="padlr">',
    'pcol11last':'<div class="span-11 last"><div class="padlr">',
    'pcol12last':'<div class="span-12 last"><div class="padlr">',
    'pcol13last':'<div class="span-13 last"><div class="padlr">',
    'pcol14last':'<div class="span-14 last"><div class="padlr">',
    'pcol15last':'<div class="span-15 last"><div class="padlr">',
    'pcol16last':'<div class="span-16 last"><div class="padlr">',
    'pcol17last':'<div class="span-17 last"><div class="padlr">',
    'pcol18last':'<div class="span-18 last"><div class="padlr">',
    'pcol19last':'<div class="span-19 last"><div class="padlr">',
    'pcol20last':'<div class="span-20 last"><div class="padlr">',
    'pcol21last':'<div class="span-21 last"><div class="padlr">',
    'pcol22last':'<div class="span-22 last"><div class="padlr">',
    'pcol23last':'<div class="span-23 last"><div class="padlr">',
    'pcol24last':'<div class="span-24 last"><div class="padlr">',
    '/pcol':'</div></div>',    
    'pad':'<div class="pad">',
    'padtb':'<div class="padtb">',
    'padlr':'<div class="padlr">',
    '/pad':'</div>',
    'right':'<div class="right">',
    '/right':'</div>',
    'icon12':'<div class="img" style="width:12px;height:12px"></div>',
    'icon16':'<div class="img" style="width:16px;height:16px"></div>',
    'icon32':'<div class="img" style="width:32px;height:32px"></div>',
    'lipsum':'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet scelerisque felis. Integer mollis urna vitae risus commodo fermentum. In ac erat est, vel iaculis nibh. In hac habitasse platea dictumst. Curabitur quis libero eget elit vestibulum semper quis a eros. Duis ac malesuada ante. In viverra congue imperdiet. Pellentesque sit amet faucibus tellus. Sed eget urna elit. Nullam at mi facilisis mauris aliquet posuere. Sed ac accumsan augue. In tincidunt tempus odio sed commodo. Integer vitae nisl sed justo adipiscing euismod. Aliquam erat volutpat. Aliquam a leo non velit mollis sagittis malesuada luctus nisl. Sed pretium feugiat egestas. Vivamus leo urna, dapibus quis elementum id, vulputate faucibus purus.</p>',
    'lipsum1':'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet scelerisque felis. Integer mollis urna vitae risus commodo fermentum. In ac erat est, vel iaculis nibh.</p>',
    'lipsum2':'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet scelerisque felis. Integer mollis urna vitae risus commodo fermentum. In ac erat est, vel iaculis nibh.</p><p>In hac habitasse platea dictumst. Curabitur quis libero eget elit vestibulum semper quis a eros. Duis ac malesuada ante. In viverra congue imperdiet. Pellentesque sit amet faucibus tellus. Sed eget urna elit. Nullam at mi facilisis mauris aliquet posuere. Sed ac accumsan augue. In tincidunt tempus odio sed commodo. Integer vitae nisl sed justo adipiscing euismod.</p>', 
    'lipsum3':'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet scelerisque felis. Integer mollis urna vitae risus commodo fermentum. In ac erat est, vel iaculis nibh.</p><p>In hac habitasse platea dictumst. Curabitur quis libero eget elit vestibulum semper quis a eros. Duis ac malesuada ante. In viverra congue imperdiet. Pellentesque sit amet faucibus tellus. Sed eget urna elit. Nullam at mi facilisis mauris aliquet posuere. Sed ac accumsan augue. In tincidunt tempus odio sed commodo. Integer vitae nisl sed justo adipiscing euismod.</p><p>Aliquam erat volutpat. Aliquam a leo non velit mollis sagittis malesuada luctus nisl. Sed pretium feugiat egestas. Vivamus leo urna, dapibus quis elementum id, vulputate faucibus purus.</p>',           
    'tps':'<p>Quickly maintain scalable niche markets for excellent value. Dramatically transition web-enabled core competencies whereas interdependent customer service. Intrinsicly revolutionize efficient communities vis-a-vis goal-oriented strategic theme areas.</p><p>Phosfluorescently synergize world-class web-readiness via unique imperatives. Intrinsicly conceptualize professional scenarios and team driven methodologies. Seamlessly mesh vertical core competencies for premier "outside the box" thinking.</p><p>Collaboratively disseminate progressive data vis-a-vis mission-critical e-business. Seamlessly procrastinate top-line materials after e-business customer service. Completely streamline premier internal or "organic" sources before low-risk high-yield e-business.</p><p>Collaboratively deliver empowered alignments rather than magnetic core competencies.</p>'  
  });

  $('div.img').render({
    'fill':'<img src="../../lib/img/img.png" style="width:100%;height:100%" />'
  });
  // END TEMPLATES
  
  // PK MENU TOGGLE
  $('#note-toggle').toggle(function(){
		$('#wrapper').removeClass("notes");
    $.cookie('notes', 'notesoff');
		}, function () {
		$('#wrapper').addClass("notes");
    $.cookie('notes', 'noteson');	
  });
  $('#spec-toggle').toggle(function(){
		$('#spec').css('display', 'none');
    $.cookie('spec', 'specoff');
		}, function () {
		$('#spec').css('display', 'block');
    $.cookie('spec', 'specon');	
  });  
  $('#pkmenu-toggle-off').click(function(){
		$('#pkmenu').hide();
		$('#pkmenuoff').show();
    $.cookie('pkmenuc', 'pkmenuoff');
  });
  $('#pkmenu-toggle-on').click(function(){
		$('#pkmenu').show();
		$('#pkmenuoff').hide();		
    $.cookie('pkmenuc', 'pkmenuon');
  });   
  
  // PKMENU COOKIES
  var notesstat = $.cookie('notes');
  var specstat = $.cookie('spec');
  var pkmenustat = $.cookie('pkmenuc');
  // Set the user's selection
  if (notesstat == 'notesoff') {
		$('#wrapper').removeClass("notes");
  } else {
		$('#wrapper').addClass("notes");
  };
  if (specstat == 'specoff') {
		$('#spec').css('display', 'none');
  } else {
		$('#spec').css('display', 'block');
  };
  if (pkmenustat == 'pkmenuoff') {
		$('#pkmenu').css('display', 'none');
		$('#pkmenuoff').css('display', 'block');
  } else {
		$('#pkmenu').css('display', 'block');
		$('#pkmenuoff').css('display', 'none');
  };  
  
  // LOAD NOTES & SPEC
  if(spec=='true'){  
    $('#specreplace').load(activePage + '.spec'); 
  }
  if(notes=='true'){  
    $('#notesreplace').load(activePage +'.notes'); 
  }
  
  // UI COMPONENTS
  
  // GENERIC TOGGLE FOR NEXT ELEMENT
  $("a.toggle").click(function(){
    $('div.toggle-content').slideToggle("fast");
  });
  
  // HIDE TOGGLED CONTENT
  $(".toggle-close").click(function(){
    $('div.toggle-content').slideToggle("fast");
  });

  // FLASH SYSTEM MESSAGES
  $("div.flash").animate({opacity: 1.0}, 3000).animate({ opacity: 'hide' }, "slow");

  // EDIT IN PLACE
  $(".editable").each(function(i){
    setClickable(this, i);
  });   
  
  // DEBUG
  // alert();
});

// EDIT IN PLACE
function setClickable(obj, i) {
  $(obj).click(function() {
    var textarea = '<div><textarea rows="4">'+$(this).html()+'</textarea>';
    var button	 = '<div style="margin-bottom: 1em;"><input type="button" value="Save" class="saveButton" /> or <a class="cancelButton">Cancel</a></div></div>';
    var revert = $(obj).html();
    $(obj).after(textarea+button).remove();
    $('.saveButton').click(function(){saveChanges(this, false, i);});
    $('.cancelButton').click(function(){saveChanges(this, revert, i);});
  })
  .mouseover(function() {
    $(obj).addClass("edit-highlight");
  })
  .mouseout(function() {
    $(obj).removeClass("edit-highlight");
    });
} //end of function setClickable

function saveChanges(obj, cancel, n) {
  if(!cancel) {
    var t = $(obj).parent().siblings(0).val();
    $.post($(this).html,{
      content: t,
      n: n
    },function(txt){
    });
  }
  else {
    var t = cancel;
  }
  if(t=='') t='(click to add text)';
  $(obj).parent().parent().after('<p>'+t+'</p>').remove();
  setClickable($("p").get(n), n);
}	// end function saveChanges