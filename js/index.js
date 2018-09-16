/*
* @Author: 我的文档
* @Date:   2018-09-15 11:14:48
* @Last Modified by:   我的文档
* @Last Modified time: 2018-09-15 13:48:26
*/
$(function(){
	// 顶部
	let sh=$("header .list");
	let cha=$("header span");
	sh.click(function() {
		sh.css("display","none");
		cha.css("display","block");
		$(".xiala").slideDown('slow');
		$("body").css("overflow","hidden");
		$(".gouwu").css("color","#333333");
	});
	cha.click(function() {
		sh.css("display","block");
		cha.css("display","none");
		$(".xiala").slideUp('slow');
		$("body").css("overflow","scroll");
		$(".gouwu").css("color","#fff");
	});

	// 底部
	let jia=$(".tt .yi a");
	console.log(jia);
	jia.click(function(){
		let i=$(this).parent().parent().index();
		console.log(i);
		jia.eq(i).toggleClass('hot');
		$(".tt .son").eq(i).slideToggle('slow');
	})


})