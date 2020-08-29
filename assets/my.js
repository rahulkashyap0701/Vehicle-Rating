function changeimg(url,e) {
document.getElementById("img").src = url;
var nodes = document.getElementById("thumb_img");
var img_child = nodes.children;
for (i = 0; i < img_child.length; i++) {
img_child[i].classList.remove('active')
}
e.classList.add('active');
}
$(document).ready(function() {
$('#example-2').progress_fnc();
$('.progressStart').on('click', function() {
var perent = $(this).closest("div").attr("id");
$('#' + perent).progress_fnc({ type: 'start' });
});
$('.progressReset').on('click', function() {
var perent = $(this).closest("div").attr("id");
$('#' + perent).progress_fnc({ type: 'reset' });
});
});
(function($) {
$.fn.progress_fnc = function(options) {
var settings = $.extend({
type: 'start'
}, options);
var div = $(this);
var progress = div.find('.ProgressBarBg');
progress.each(function() {
var self = $(this);
var progress_bar = self.find('.ProgressBarBg-bar');
var progress_label = self.find('.ProgressBarBg-label, .ProgressBarBg-label2');
var progress_value = progress_bar.data('percent');
var percentage = parseInt(progress_value, 10) + '%';
progress_bar.css({'width': '0%', 'transition': 'none', '-webkit-transition': 'none', '-moz-transition': 'none'});
if(settings.type == 'start') {
progress_bar.animate({
width: percentage
}, {
duration: 2000,
step: function(x) {
progress_label.text(Math.round(x) + '%');
}
});
} else if(settings.type == 'reset') {
progress_bar.css('width', '0%');
progress_label.text('0%');
}
});
}
}(jQuery));
$(".progress-bar").each(function(){
var bar = $(this).find(".bar");
var val = $(this).find("span");
var per = parseInt( val.text(), 10);
var $right = $('.right');
var $back = $('.back');
$({p:0}).animate({p:per}, {
duration: 3000,
step: function(p) {
bar.css({
transform: "rotate("+ (45+(p*1.8)) +"deg)"
});
val.text(p|0);
}
}).delay( 200 );
if (per == 100) {
$back.delay( 2600 ).animate({'top': '18px'}, 200 );
}
if (per == 0) {
$('.left').css('background', 'gray');
}
});