/*!
 * Copied from Ava Pun - Ava Pun Website v1.0.0
 * Copyright 2018-2018 Ava Pun
 */

!function(r){"use strict";r("#basicExample").justifiedGallery({rowHeight:125,margins:5,lastRow:'nojustify'}),r(".image-gallery").magnificPopup({delegate:"a",type:"image",tClose:"Close (Esc)",tLoading:"Loading image #%curr%...",mainClass:"mfp-fade",removalDelay:150,gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1],tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},image:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',titleSrc:function(e){var a=r(e.el).children().eq(0);return a.attr("alt")+"<small>"+a.attr("exif")+"</small>"},tError:'<a href="%url%">The image</a> could not be loaded.',cursor:"mfp-zoom-out-cur"}})}(jQuery);