$(function(){
	function setContentSize() {
		$('.swiper-content').css({
			height: $(window).height()-$('.swiper-nav').height()
		})
	}
	setContentSize()
	$(window).resize(function(){
		setContentSize()
	})

	//Nav
	var navSwiper = $('.swiper-nav').swiper({
		visibilityFullFit: true,
		slidesPerView:'auto',
		onSlideClick: function(swiper){
			var index=navSwiper.clickedSlideIndex;
			$(".swiper-wrapper .selected").hide();
			$(".active-nav").each(function(i,n){
				if(i != index){
					$(n).data('selected',false);
				}
			});
			if($(".active-nav").eq(index).data('selected') == true){
				$('input[name=couponId]').val(0);
				$('input[name=couponMoney]').val(0);
				$('input[name=couponType]').val(0);
				$(".active-nav").eq(index).find(".selected").hide();
				$(".active-nav").eq(index).data('selected',false);
			}else{
				$('input[name=couponId]').val($(".active-nav").eq(index).data('id'));
				$('input[name=couponMoney]').val($(".active-nav").eq(index).data('value'));
				$('input[name=couponType]').val($('#quan-type').val());
				$(".active-nav").eq(index).find(".selected").show();
				$(".active-nav").eq(index).data('selected',true);
			}
			
			//$(".swiper-wrapper .selected").hide();
			//$(".active-nav").eq(index).find(".selected").show();
		}
	})
})
