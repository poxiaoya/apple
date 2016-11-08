$(function(){
    var close=$('.close');
    var open=$('.searcher');
    // 大屏
    $(open).click(function(){
        $('.search-box').css({
            display:'block'
        })
        setTimeout(function(){
            $('.sy a:nth-child(1)').addClass('hot')
            $('.sy a:nth-child(2)').addClass('hot')
            $('.sy a:nth-child(3)').addClass('hot')
            $('.sy a:nth-child(4)').addClass('hot')
        })
        $('.nav li').not($('.logo')).css({
            display:'none'
        })
        $(close).css({
            display:'block'
        })
        $(document.body).css({
            background:'#eee'
        })
    })
    $(close).click(function(){
        $('.search-box').css({
            display:'none'
        })
        $('.nav li').css({
            display:'inline-block'
        })
        $(this).css({
            display:'none'
        })
        $('.sy a:nth-child(1)').removeClass('hot')
        $('.sy a:nth-child(2)').removeClass('hot')
        $('.sy a:nth-child(3)').removeClass('hot')
        $('.sy a:nth-child(4)').removeClass('hot')
    })

    // 小屏
    $('.mini').click(function(){
        var ht=$(window).height();
        $(".mini span:nth-child(1)").toggleClass('active')
        $(".mini span:nth-child(2)").toggleClass('active1')
        $('.min-nav .goshop').toggleClass('nav-syn')
        setTimeout(function(){
            var h=$(window).height();

            $('.nav-sy').toggleClass('nav-syh')
            $('.nav-sy').height(h)
            $('body').height(h).css('overflow','hiddenx')
            setTimeout(function(){
                $('.nav-sy li:nth-child(1)').toggleClass('hot')
                $('.nav-sy li:nth-child(2)').toggleClass('hot')
                $('.nav-sy li:nth-child(3)').toggleClass('hot')
                $('.nav-sy li:nth-child(4)').toggleClass('hot')
                $('.nav-sy li:nth-child(5)').toggleClass('hot')
                $('.nav-sy li:nth-child(6)').toggleClass('hot')
                $('.nav-sy li:nth-child(7)').toggleClass('hot')
            })
        })
    })



    //banner
    var tu=$('.banner-box li');
    var btns=$('.btns a');




    // footer
    var tit=$('.tit');
    var xx=$('.xx1');
   tit.click(function(){
        var i=tit.index(this);
       xx.eq(i).toggleClass('has');

    })


   // banner
   $(".btns div").mouseover(function(event){
			var index=$(this).index(); //获取当前的索引值
			i=index;
			$(".banner-box ul li").eq(index).show().siblings().hide();
			$(this).addClass('btnns').siblings().removeClass('btnns');
		})


	var i=0;
		var t=setInterval(move,2000);
		function move(){
			i++;
			if(i==5){
				i=0;
			}
			$(".btns div").eq(i).addClass("btnns").siblings().removeClass();
			$(".banner-box ul li").eq(i).fadeIn().siblings().fadeOut();
		}

		function move1(){
			i--;
			if(i==-1){
				i=4;
			}
			$(".btns div").eq(i).addClass("btnns").siblings().removeClass();
			$(".banner-box ul li").eq(i).fadeIn().siblings().fadeOut();
		}

		$(".banner-box").hover(function(){
			clearInterval(t);
		},function(){
			t=setInterval(move,2000);
		})

		//左右点击
		$(".rightss").click(function(){
			move();
		})
		$(".leftss").click(function(){
			move1();
		})

	})