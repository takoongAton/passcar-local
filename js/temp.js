/* 상단 메뉴 샘플 */
let topNavBtns = document.querySelectorAll(".navi li");
topNavBtns.forEach(function(item) {
	item.addEventListener("click", function(){
		topNavBtns.forEach(function(item){
			item.classList.remove("on");
		})
		this.classList.add("on");
	})
});
/* // 상단 메뉴 샘플 */



/* 차량 검색 탭 (047) */
let searchListTab = document.querySelectorAll(".search-list .tab div");
searchListTab.forEach(function(item) {
	item.addEventListener("click", function(){
		searchListTab.forEach(function(item){
			item.classList.remove("on");
		})
		this.classList.add("on");
	})
});
/* // 차량 검색 탭 (047) */



/* 하단 GNB 효과구현 샘플 */
let cpPassNavWrap,
	cpPassNavBtns,
	cpPassNavHeight,
	layerSlideUp,
	btnCloseLayer,
	settingflag;

function cpPassInt(){
	cpPassNavBtns = cpPassNavWrap.querySelectorAll(".nav_wrap .item.nav button"); // 네비 버튼s
	cpPassNavHeight = cpPassNavWrap.clientHeight; // 네비 영역 높이값
	layerSlideUp = document.querySelector(".layer.slideUp");
	
	/* 레이어 닫기 버튼 눌렀을때  */
	btnCloseLayer = layerSlideUp.querySelector("button.btn_close");
	btnCloseLayer.addEventListener("click", function(){
		document.querySelector("div.dim").style.display = "none";
		layerSlideUp.classList.remove("active");
		document.querySelector(".btn_setting").classList.remove("active");
		settingflag = false;
	})
	/* // 레이어 닫기 버튼 눌렀을때  */

	fnCpPassNav();
}

// 하단 네비가 있는 경우 네비 높이값 만큼 paddingBottom 추가
function fnPaddingBtmNav() {
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

// 하단 네비 메뉴 클릭시
function fnCpPassNav(){
	for(let i=0; i<cpPassNavBtns.length; i++) {
		let btnItem = cpPassNavBtns[i];
		btnItem.addEventListener("click", function(e){
			// 설정 버튼에 active가 아닌 경우, 설정 레이어 열기
			if(btnItem.classList.contains("btn_setting") && !btnItem.classList.contains("active")){
				fnSettingShow(btnItem);
				btnItem.classList.add("active");
				settingflag = true;
			} else {
				if(settingflag) {
					fnSettingHide(btnItem);
				}
				if(btnItem.classList.contains("btn_setting")) {
					btnItem.classList.remove("active");
				} else {
					for(let j=0; j<cpPassNavBtns.length; j++) {
						cpPassNavBtns[j].classList.remove("active");
					}
					btnItem.classList.add("active");
					setTimeout(() => {
						btnItem.classList.remove("active");
					}, 250);
				}
			}
		})
	}
}

function fnSettingShow(item){
	document.querySelector("div.dim").style.display = "block";
	layerSlideUp.classList.add("active");
	layerSlideUp.style.bottom = cpPassNavHeight + "px";
}

function fnSettingHide(item){
	document.querySelector("div.dim").style.display = "none";
	layerSlideUp.classList.remove("active");
	item.classList.remove("active");
	settingflag = false;
}

window.addEventListener("load", function(){
	cpPassNavWrap = document.querySelector(".cp_pass_nav_wrap");
	if(cpPassNavWrap) {
		cpPassInt();
		fnPaddingBtmNav();
	}
})
/* // 하단 GNB 효과구현 샘플 */