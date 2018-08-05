var hdHeight = $('.tpTopHdr').innerHeight();
var nvHeight = $('.tpTopNav').innerHeight();
$('.tpTopNav').attr('data-offset-top',hdHeight);

$('.tpLeftPart').css({'height':'calc(100% - ' + (hdHeight + nvHeight) + 'px)', top: hdHeight + nvHeight});

$(window).scroll(function(){
	var winTop = $(window).scrollTop();
	if(winTop<=hdHeight){
		$('.tpLeftPart').css({'height':'calc(100% - ' + ((hdHeight + nvHeight) - winTop) + 'px)', top: (hdHeight + nvHeight) - winTop});
	}else{
		$('.tpLeftPart').css({'height':'calc(100% - ' + nvHeight + 'px)', top: nvHeight});
	}
});