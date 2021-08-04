/**
 * @Project        Dandy
 * @Author         Mahmoud Wageeh <m.wageeh25@gmail.com>
 * @Job Title      Frontend Developer
 * @Build          Wed, Aug 4, 2021 11:37 PM ET
 **/
"use strict";jQuery(document).ready(function(){$(".getdate").each(function(){$(this).datepicker()});var t=document.getElementsByTagName("html")[0].getAttribute("dir");$("#openMenu").click(function(){"ltr"===t?$(".side-menu").css({left:"0px"}):$(".side-menu").css({right:"0px"})}),$("#closeMenu").click(function(){"ltr"===t?$(".side-menu").css({left:"-300px"}):$(".side-menu").css({right:"-300px"})}),$(document).mouseup(function(e){0===$(e.target).closest(".side-menu").length&&("ltr"===t?$(".side-menu").css({left:"-300px"}):$(".side-menu").css({right:"-300px"}))}),$(".scroll-me").niceScroll({railalign:"rtl"===document.dir?"left":"right",rtlmode:"rtl"===document.dir,hwacceleration:"rtl"===document.dir,cursoropacitymax:.5,cursorwidth:"4px"})});