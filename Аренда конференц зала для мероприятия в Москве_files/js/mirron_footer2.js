var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$j('a').focus(function(){
	if($(this).blur()) {$(this).blur();}
	});


$j('.rowOver').mouseenter(function() {
	if ($j(this).find('a').attr('href') != null) {
		$j(this).css('cursor','pointer');
		$j(this).css('background-color','#847d6b');
		$j(this).find('a').css('color','#FFFFFF');
		}
	});
$j('.rowOver').mouseleave(function() {
	if ($j(this).find('a').attr('href') != null) {
		$j(this).css('cursor','default');
		$j(this).css('background-color','');
		$j(this).find('a').css('color','');
		}
	});
$j('.rowOver').click(function() {
	if ($j(this).find('a').attr('href') != null) {
		document.location = $j(this).find('a').attr('href');
		}
	return false;
	});


$j('.rowOverNoclick').mouseenter(function() {
		$j(this).css('cursor','default');
		$j(this).css('background-color','#847d6b');
	});
$j('.rowOverNoclick').mouseleave(function() {
		$j(this).css('cursor','default');
		$j(this).css('background-color','');
	});




}
/*
     FILE ARCHIVED ON 15:26:07 Feb 07, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:52:13 Nov 03, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 20.118
  exclusion.robots: 0.253
  captures_list: 378.608
  esindex: 0.016
  LoadShardBlock: 326.591 (3)
  exclusion.robots.policy: 0.222
  load_resource: 2469.233 (2)
  CDXLines.iter: 27.031 (3)
  PetaboxLoader3.resolve: 186.838 (3)
  PetaboxLoader3.datanode: 2515.401 (5)
*/