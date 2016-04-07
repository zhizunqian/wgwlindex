$(function(){
	$(".xq").css({"display":"none"});
	$(".xq1").css({"display":"block"});
	$("#view").find(".view:first").hover(function(){
		$(".xqbox").find(".xq1").css({"display":"block"});
	},function(){
		$(".xqbox").find(".xq1").css({"display":"none"});
		$(".xq1").css({"display":"block"});
	})
	$("#view").find(".view2").hover(function(){
		$(".xq1").css({"display":"none"});
		$(".xqbox").find(".xq2").css({"display":"block"});
	},function(){
		$(".xqbox").find(".xq2").css({"display":"none"});
		$(".xq1").css({"display":"block"});
	})
	$("#view").find(".view3").hover(function(){
		$(".xq1").css({"display":"none"});
		$(".xqbox").find(".xq3").css({"display":"block"});
	},function(){
		$(".xqbox").find(".xq3").css({"display":"none"});
		$(".xq1").css({"display":"block"});
	})
	$("#view").find(".view:last").hover(function(){
		$(".xq1").css({"display":"none"});
		$(".xqbox").find(".xq4").css({"display":"block"});
	},function(){
		$(".xqbox").find(".xq4").css({"display":"none"});
		$(".xq1").css({"display":"block"});
	})

	$(".navchanpin").hover(function(){
		$(this).find(".xiala").stop();
		$(this).find(".xiala").slideDown(200,"linear");
	},function(){
		$(this).find(".xiala").stop();
		$(this).find(".xiala").slideUp(200,"linear");
	})

	$(".asimg").hover(function(){
		$(this).find(".a1").animate({left:"0%",width:"100%"},100);
		$(this).find(".a2").animate({height:"100%"},100);
		$(this).find(".a3").animate({height:"100%"},100);
		$(this).find(".a4").animate({width:"50%"},300);
		$(this).find(".a5").animate({width:"50%"},300);
		$(this).next().find(".asplay").animate({height:"100%"});
	},function(){
		$(this).find(".a1").animate({left:"50%",width:"0%"},100);
		$(this).find(".a2").animate({height:"0%"},100);
		$(this).find(".a3").animate({height:"0%"},100);
		$(this).find(".a4").animate({width:"0%"},100);
		$(this).find(".a5").animate({width:"0%"},100);
		$(this).next().find(".asplay").animate({height:"0%"},100);
	})
	var diyi=function(index){
		move(".section:nth-child(1) .contentzuo").duration("0.15s").set("transform","translate3d(20px,0,0)").then().set("transform","translate3d(-20px,0,0)").pop().then().set("transform","translate3d(0px,0,0)").pop().end();
		move(".section:nth-child(1) .contentyou").duration("0.15s").set("transform","translate3d(-20px,0,0)").then().set("transform","translate3d(20px,0,0)").pop().then().set("transform","translate3d(0px,0,0)").pop().end();
	}
	var diyilikai=function(index){
		move(".section:nth-child(1) .contentzuo").duration("0.5s").set("transform","translate3d(-1000px,0,0)").end();
		move(".section:nth-child(1) .contentyou").duration("0.5s").set("transform","translate3d(1000px,0,0)").end();
	}
	var dier=function(index){
		move(".section:nth-child(2) .contentzuo").duration("0.15s").set("transform","translate3d(20px,0,0)").then().set("transform","translate3d(-20px,0,0)").pop().then().set("transform","translate3d(0px,0,0)").pop().end();
		move(".section:nth-child(2) .contentyou").duration("0.15s").set("transform","translate3d(-20px,0,0)").then().set("transform","translate3d(20px,0,0)").pop().then().set("transform","translate3d(0px,0,0)").pop().end();
	}
	var dierlikai=function(index){
		move(".section:nth-child(2) .contentzuo").duration("0.5s").set("transform","translate3d(-1000px,0,0)").end();
		move(".section:nth-child(2) .contentyou").duration("0.5s").set("transform","translate3d(1000px,0,0)").end();
	}
	var disan=function(index){
		move(".section:nth-child(3) .contentzuo").duration("0.15s").set("transform","translate3d(20px,0,0)").then().set("transform","translate3d(-20px,0,0)").pop().then().set("transform","translate3d(0px,0,0)").pop().end();
		move(".section:nth-child(3) .contentyou").duration("0.15s").set("transform","translate3d(-20px,0,0)").then().set("transform","translate3d(20px,0,0)").pop().then().set("transform","translate3d(0px,0,0)").pop().end();
	}
	var disanlikai=function(index){
		move(".section:nth-child(3) .contentzuo").duration("0.5s").set("transform","translate3d(-1000px,0,0)").end();
		move(".section:nth-child(3) .contentyou").duration("0.5s").set("transform","translate3d(1000px,0,0)").end();
	}
	$("#fp").fullpage({
		controlArrows:true,
		verticalCentered:true,
		scrollOverflow:true,
		anchors:["s1","s2","s3","s4","s5","s6"],
		easing:"linear",
		scrollingSpeed:1000,
		paddingTop:60,
		fixedElements:".daohang",
		navigation:true,
		navigationPosition:"right",
		afterLoad:function(link,index){
			switch(link){
				case "s1":diyi(index);break;
				case "s2":dier(index);break;
				case "s3":disan(index);break;
			}
		},
		onLeave:function(index,toindex){
			if(index==1){
				diyilikai(index);
			}
			if(index==2){
				dierlikai(index);
			}
			if(index==3){
				disanlikai(index);
			}
		}
	})
	$(".button-collapse").bind("tap",function(e){
		e.stopPropagation();
		$(".side-nav").css({left:"0%"});
	})
	$(".side-nav").bind("tap",function(e){
		e.stopPropagation();
	})
	$(document).bind("tap swipeLeft",function(e){
		e.stopPropagation();
		$(".side-nav").css({left:"-105%"});
	})
	$(document).bind("swipeRight",function(e){
		e.stopPropagation();
		$(".side-nav").css({left:"0%"});
	})
})