$(document).ready(function() {

  // fancybox
  /* This is basic - uses default settings */
  $("a.fb").fancybox();
  $("a#single_image").fancybox();
  $("a#inline").fancybox({
    'zoomSpeedIn':    300, 
    'zoomSpeedOut':   300, 
    'hideOnContentClick': true
  }); 
  /* Using custom settings */
  $("a.group").fancybox({
    'zoomSpeedIn':    300, 
    'zoomSpeedOut':   300, 
    'overlayShow':    true
  });
  $("a.iframe").fancybox({
    'width': '75%',
    'height': '75%',
    'autoScale': true,
    'transitionIn': 'fade',
    'transitionOut': 'fade',
    'type': 'iframe',
    'hideOnContentClick': false
  });
  
  // system messages
  $("#message").animate({opacity: 1.0}, 8000).animate({ opacity: 'hide' }, "slow");

  // responsive nav
  /*
  $('#menu').on('click',function() {
    $('#nav').slideToggle('fast');
    return false;    
  }); 
*/
  
  /* tabs for login */
  // toggles #tools and #login
  $('#umenu').click(function() {
    $('#menu-login').slideToggle("fast");
    $('#menu-search').hide();
    $('#smenu').removeClass('selected');
    $(this).toggleClass('selected');
    $('html, body').animate({scrollTop:0}, 'fast');
    return false;
  });
  $('#smenu').click(function() {
    $('#menu-search').slideToggle("fast");
    $('#menu-login').hide();
    $('#umenu').removeClass('selected');
    $(this).toggleClass('selected');
    $('html, body').animate({scrollTop:0}, 'fast');    
    return false;
  });

  $('#metalink').click(function() {
    $('#metapanel').toggleClass('hidden-xs');
    return false;
  });  
  
  /* links for tagadelic */
  // switch all links in .tagadelic classes to inline view from block/list
  $('a#tag-list').click(function () {
    $('a.tagadelic').addClass('list');
    $(this).addClass('selected');
    $('a#tag-cloud').removeClass('selected');
  });
  // switch all links in .tagadelic classes to block/list view from inline
  $('a#tag-cloud').click(function () {
    $('a.tagadelic').removeClass('list');
    $(this).addClass('selected');
    $('a#tag-list').removeClass('selected');
  });
  
  /* links for views */
  // switch all links inline view from block/list
  $('a#view-list').click(function () {
    $('li').addClass('list');
    $(this).addClass('selected');
    $('a#view-thumb').removeClass('selected');
  });
  // switch all links in .tagadelic classes to block/list view from inline
  $('a#tag-cloud').click(function () {
    $('li').removeClass('list');
    $(this).addClass('selected');
    $('a#tag-list').removeClass('selected');
  });  
  
  /* generic toggle for next element */
  $(".toggle").click(function () {
    $(this).parent().next('div.toggle-content').slideToggle(); 
    $(this).hide(); 
  });
  $(".togglenormal").click(function () {
    $(this).parent().next('div.toggle-content').slideToggle(); 
  });  
  /* store */
  $("#agreeLicense").click(function () {
    $(this).parent().next('div.toggle-content').show(); 
    $(this).hide(); 
  });
  
  // generic select content
  $("textarea.selectall").click(function() {
   $(this).select();
  });

  // filters
  $('#filterlist tbody tr').addClass('hidden');
  $('#filterlist tbody tr.ux').removeClass('hidden');
  $('ul#filter a').click(function() {
    $(this).css('outline','none');
    $('ul#filter .current').removeClass('current');
    $(this).parent().addClass('current');
    
    var filterVal = $(this).text().toLowerCase().replace(' ','-');
        
    if(filterVal == 'all') {
      $('#filterlist tbody tr.hidden').removeClass('hidden');
    } else {
      $('#filterlist tbody tr').each(function() {
        if(!$(this).hasClass(filterVal)) {
          $(this).addClass('hidden');
        } else {
          $(this).removeClass('hidden');
        }
      });
    }
    return false;
  });

  // affix
  $('#header-affix').affix({
    offset: {
      // top: 102
      top: 0
    //, bottom: function () {
    //    return (this.bottom = $('#footer-wrapper').outerHeight(true));
    //  }
    }
  })  

  // dimension ajustments to bootstrap
  /*
  * Clamped-width. 
  * Usage:
  *  <div data-clampedwidth=".myParent">This long content will force clamped width</div>
  *
  * Author: LV
  */
  $('[data-clampedwidth]').each(function () {
      var elem = $(this);
      var parentPanel = elem.data('clampedwidth');
      var resizeFn = function () {
          var sideBarNavWidth = $(parentPanel).width() - parseInt(elem.css('paddingLeft')) - parseInt(elem.css('paddingRight')) - parseInt(elem.css('marginLeft')) - parseInt(elem.css('marginRight')) - parseInt(elem.css('borderLeftWidth')) - parseInt(elem.css('borderRightWidth'));
          elem.css('width', sideBarNavWidth);
      };

      resizeFn();
      $(window).resize(resizeFn);
  });  
  
  // preload images
  // $.preloadCssImages();
    
  /* konami */
  (function() {
  $.fn.extend({
    showMe: $.fn.addClass
    });
    var a = 0;
    var kkeys = '';
    var konami = '38,38,40,40,37,39,37,39,66,65';
    $(window).keydown(function(e) {
    kkeys += ',' + e.keyCode;
    if(kkeys.indexOf(konami)>=0 && a<=1) {
    a += 1;
    // DO KONAMI THING
    if(a==1) {
      $('#wrapper').showMe('unicorns');
      $('body').showMe('unibg');
      kkeys = '';
    }
    else {
      $('#wrapper').showMe('evil');
    }
    }
    });
  })(); 

});