// $("button, a").click(function(){
// 	var $this = $(this);
// 	console.log($this, $this.context);
// })


/*
test1234();
function test1234(){
	var $ui_header_page = $(".ui_page .ui_header");
	var $btn_fixed_page = $(".ui_page .btn_fixed");
	var $btn_fixed_page_list = $(".ui_page .btn_fixed > span");

	if($btn_fixed_page_list.length > 1) {
		$btn_fixed_page.css("padding-bottom", "10px")
	}

	if($ui_header_page.length > 0 || $btn_fixed_page.length > 0 ){
		$(".ui_page .section").css({
			"top" : $ui_header_page.outerHeight(),
			"bottom" : $btn_fixed_page.outerHeight()
		});
	}


	var $ui_header_popup = $(".ui_popup .ui_header");
	var $btn_fixed_popup = $(".ui_popup .btn_fixed");
	var $btn_fixed_popup_list = $(".ui_popup .btn_fixed > span");

	if($btn_fixed_popup_list.length > 1) {
		$btn_fixed_popup.css("padding-bottom", "10px")
	}

	if($ui_header_popup.length > 0 || $btn_fixed_popup.length > 0 ){
		$(".ui_popup .section").css({
			"top" : $ui_header_popup.outerHeight(),
			"bottom" : $btn_fixed_popup.outerHeight()
		});
	}
}
*/


$(".navi ul li").click(function(){
	$(".navi ul li").each(function(){
		$(this).removeClass("on");
	})
	$(this).addClass("on");
})

$(".search-list .tab div").click(function(){
	$(".search-list .tab div").each(function(){
		$(this).removeClass("on");
	})
	$(this).addClass("on");
})

test1234();
function test1234(){
	console.log()
	var $btn_fixed_page = $(".ui_page .btn_fixed");
	var $btn_fixed_page_list = $(".ui_page .btn_fixed > span");
	var $ui_page_section = $(".ui_page .section");
	var $body = $("body");
	var $ui_header = $(".ui_header");


	if($btn_fixed_page_list.length > 1) {
		$btn_fixed_page.css("padding-bottom", "10px")
	}

	if($btn_fixed_page.length > 0 ){
		$(".ui_page .section").css({
			"padding-bottom" : $btn_fixed_page.outerHeight() + 20
		});
	}

	/*
	if($btn_fixed_page.length > 0 ){
		if($ui_page_section.outerHeight() > xxx){		
			$(".ui_page .section").css({
				"padding-bottom" : $ui_page_section.outerHeight() - xxx
			});
		}
	}
	*/


	var $btn_fixed_popup = $(".ui_popup .btn_fixed");
	var $btn_fixed_popup_list = $(".ui_popup .btn_fixed > span");

	if($btn_fixed_popup_list.length > 1) {
		$btn_fixed_popup.css("padding-bottom", "10px")
	}

	if($btn_fixed_popup.length > 0 ){
		$(".ui_popup .section").css({
			"padding-bottom" : $btn_fixed_popup.outerHeight() + 20
		});
	}
}


/*
var hh = $(".btn_fixed2 .inner").outerHeight();
$(".btn_fixed2").css({
	"height" : hh
})


$("input, textarea").focus(function(){
  console.log("focus");
});

function compare(){
	var body_h_d = $("body").outerHeight();
	var body_h_n;
	$(window).resize(function() {
		body_h_n = $("body").outerHeight();
		if(body_h_d > body_h_n){
			$(".txt111").html("키보드 나왔다. 또는 틀이 나왔다.")
			$(".btn_fixed2 .inner").addClass("off");
		} else if(body_h_d <= body_h_n){
			$(".txt111").html("키보드 들어갔다. 또는 틀이 들어갔다.")
			$(".btn_fixed2 .inner").removeClass("off");
		}
	});
}
compare();
*/





/* 하단 GNB 효과구현 샘플 */
let cpPassNavWrap = document.querySelector(".cp_pass_nav_wrap");
let cpPassNavBtns = cpPassNavWrap.querySelectorAll(".nav_wrap .item.nav button");

let cpPassNavHeight = cpPassNavWrap.clientHeight;
let layerSlideUp = document.querySelector(".layer.slideUp");
let btnCloseLayer = layerSlideUp.querySelector("button.btn_close");


window.addEventListener("load", function(){
	if(cpPassNavWrap) {
		cpPassNavHeight = cpPassNavWrap.clientHeight;
		
		if(document.querySelector(".wrap")) {
			document.querySelector(".wrap").style.paddingBottom = cpPassNavHeight +"px";
		}

		if(document.querySelector(".ui_popup")) {
			document.querySelector(".ui_popup").style.paddingBottom = cpPassNavHeight + "px";
		}

		if(document.querySelector(".ui_page")) {
			document.querySelector(".ui_page").style.paddingBottom = cpPassNavHeight + "px";
		}
	}
})

if(cpPassNavBtns.length > 0) {
	cpPassNavBtns.forEach(function(item){
		item.addEventListener("click", function(e){
			cpPassNavBtns.forEach(function(item){
				item.classList.remove("active");
			})
			item.classList.add("active");

			if(item.classList.contains("btn_setting")) {
				fnSettingShow(item, true);
			} else {
				document.querySelector("div.dim").style.display = "none";
				layerSlideUp.classList.remove("active");
				setTimeout(() => {
					this.classList.remove("active");
				}, 250);
			}

		})
	})
}

function fnSettingShow(item, state){
	if(state) {
		document.querySelector("div.dim").style.display = "block";

		layerSlideUp.classList.add("active");
		layerSlideUp.style.bottom = cpPassNavHeight + "px";

		btnCloseLayer.addEventListener("click", function(){
			document.querySelector("div.dim").style.display = "none";
			layerSlideUp.classList.remove("active");
			item.classList.remove("active");
		})
	} else {
		document.querySelector("div.dim").style.display = "none";
		layerSlideUp.classList.remove("active");
		item.classList.remove("active");
	}
}