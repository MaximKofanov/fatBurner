$(function(){

	var heightHead = $(window).height();
	$('.maskHead').css('height', heightHead);
	$('header').css('height', heightHead);

	//lang

	var toggleLang = 0;
	$('#RU').css('opacity', '1');
	$('#RU').click(toggleLangf);
	$('#EN').click(toggleLangf);

	function toggleLangf(){
		if(toggleLang === 0){
			$('#RU').css('opacity', '0.7');
			$('#EN').css('opacity', '1');
			toggleLang++;
			console.log(toggleLang);
		}else if(toggleLang === 1){
			$('#RU').css('opacity', '1');
			$('#EN').css('opacity', '0.7');
			toggleLang--;
			console.log(toggleLang);
		}
	};

	//menu

	var heightMnuHead = ($('.mnuHead').css('height')).slice(0,3);
	var newHeightMnuHead = 230+(+heightMnuHead)+'px';

	$('#headMenu').click(function(){
		$('.mnuHead').slideToggle(400, function(){
			$('.mnuHead').css('display','block');
			$('.mnuHead').css('height', newHeightMnuHead)
			$('#headMenu').css('display','inline-block');
		});
	});

	$('#headMenuClose').click(function(){
		$('.mnuHead').slideToggle(400, function(){
			$('.mnuHead').css('display','none');
		});		
	});

	//slider

	var sliderName = ['Есть молоко','Второй заголовок','Третий заголовок','Четвертый заголовок','Пятый заголовок'];
	var sliderDescription = [
	'СОВРЕМЕННЫЙ СЕРВИС ДЛЯ ЖИТЕЛЕЙ ГОРОДОВ ПО ПРИОБРЕТЕНИЮ НАТУРАЛЬНЫХ МОЛОЧНЫХ ПРОДУКТОВ',
	'Второе описание второе описание второе описание второе описание второе описание второе описание',
	'Третье описание третье описание третье описание третье описание третье описание третье описание',
	'Четвертое описание четвертое описание четвертое описание четвертое описание четвертое',
	'Пятое описание пятое описание пятое описание пятое',
	];
	var sliderImg = [
	'url(../img/headFon.jpg)',
	'url(../img/headFon2.jpg)',
	'url(../img/headFon.jpg)',
	'url(../img/headFon2.jpg)',
	'url(../img/headFon.jpg)'
	];

	var currentSlid = 0;

	$('#nextSlid').click(SliderHeadNext);
	$('#preSlid').click(SliderHeadPre);

	SliderHeadPre();

	function SliderHeadNext(){
		$('.wrapperHeadCaption h2').show(function(){

			if(currentSlid < sliderName.length-1){
				currentSlid++;
			}

			var wordOne = [];

			for(var i = 0; i < sliderName[currentSlid].length; i++){
				if(sliderName[currentSlid][i] != ' '){
					wordOne.push(sliderName[currentSlid][i]);
				}else{
					break;
				}
			}
			$(this).html('<span>'+wordOne.join('')+'</span><br>'+sliderName[currentSlid].slice(wordOne.length));
			$('.textHead').html(sliderDescription[currentSlid]);
			$('header').css('background', ''+sliderImg[currentSlid]+'no-repeat center');
			$('.circleB').css('opacity','0.4');
			$('.circleB:nth-child('+(currentSlid+1)+')').css('opacity','1');
		});
	}

	function SliderHeadPre(){
		$('.wrapperHeadCaption h2').show(function(){

			if(currentSlid <= sliderName.length && currentSlid !== 0){
				currentSlid--;
			}

			var wordOne = [];

			for(var i = 0; i < sliderName[currentSlid].length; i++){
				if(sliderName[currentSlid][i] != ' '){
					wordOne.push(sliderName[currentSlid][i]);
				}else{
					break;
				}
			}
			$(this).html('<span>'+wordOne.join('')+'</span><br>'+sliderName[currentSlid].slice(wordOne.length));
			$('.textHead').html(sliderDescription[currentSlid]);
			$('header').css('background-image', sliderImg[currentSlid]);
			$('.circleB').css('opacity','0.4');
			$('.circleB:nth-child('+(currentSlid+1)+')').css('opacity','1');
		});
	}

	$('.cB1').click(cB1f);
	function cB1f(){
		currentSlid = 0;
		var wordOne = [];

		for(var i = 0; i < sliderName[currentSlid].length; i++){
			if(sliderName[currentSlid][i] != ' '){
				wordOne.push(sliderName[currentSlid][i]);
			}else{
				break;
			}
		}
		$('.wrapperHeadCaption h2').html('<span>'+wordOne.join('')+'</span><br>'+sliderName[currentSlid].slice(wordOne.length));
		$('.textHead').html(sliderDescription[currentSlid]);
		$('header').css('background', ''+sliderImg[currentSlid]+'no-repeat center');
		$('.circleB').css('opacity','0.4');
		$('.circleB:nth-child('+(currentSlid+1)+')').css('opacity','1');
	}

	$('.cB2').click(cB2f);
	function cB2f(){
		currentSlid = 1;
		var wordOne = [];

		for(var i = 0; i < sliderName[currentSlid].length; i++){
			if(sliderName[currentSlid][i] != ' '){
				wordOne.push(sliderName[currentSlid][i]);
			}else{
				break;
			}
		}
		$('.wrapperHeadCaption h2').html('<span>'+wordOne.join('')+'</span><br>'+sliderName[currentSlid].slice(wordOne.length));
		$('.textHead').html(sliderDescription[currentSlid]);
		$('header').css('background', ''+sliderImg[currentSlid]+'no-repeat center');
		$('.circleB').css('opacity','0.4');
		$('.circleB:nth-child('+(currentSlid+1)+')').css('opacity','1');
	}

	$('.cB3').click(cB3f);
	function cB3f(){
		currentSlid = 2;
		var wordOne = [];

		for(var i = 0; i < sliderName[currentSlid].length; i++){
			if(sliderName[currentSlid][i] != ' '){
				wordOne.push(sliderName[currentSlid][i]);
			}else{
				break;
			}
		}
		$('.wrapperHeadCaption h2').html('<span>'+wordOne.join('')+'</span><br>'+sliderName[currentSlid].slice(wordOne.length));
		$('.textHead').html(sliderDescription[currentSlid]);
		$('header').css('background', ''+sliderImg[currentSlid]+'no-repeat center');
		$('.circleB').css('opacity','0.4');
		$('.circleB:nth-child('+(currentSlid+1)+')').css('opacity','1');
	}

	$('.cB4').click(cB4f);
	function cB4f(){
		currentSlid = 3;
		var wordOne = [];

		for(var i = 0; i < sliderName[currentSlid].length; i++){
			if(sliderName[currentSlid][i] != ' '){
				wordOne.push(sliderName[currentSlid][i]);
			}else{
				break;
			}
		}
		$('.wrapperHeadCaption h2').html('<span>'+wordOne.join('')+'</span><br>'+sliderName[currentSlid].slice(wordOne.length));
		$('.textHead').html(sliderDescription[currentSlid]);
		$('header').css('background', ''+sliderImg[currentSlid]+'no-repeat center');
		$('.circleB').css('opacity','0.4');
		$('.circleB:nth-child('+(currentSlid+1)+')').css('opacity','1');
	}	

	$('.cB5').click(cB5f);
	function cB5f(){
		currentSlid = 4;
		var wordOne = [];

		for(var i = 0; i < sliderName[currentSlid].length; i++){
			if(sliderName[currentSlid][i] != ' '){
				wordOne.push(sliderName[currentSlid][i]);
			}else{
				break;
			}
		}
		$('.wrapperHeadCaption h2').html('<span>'+wordOne.join('')+'</span><br>'+sliderName[currentSlid].slice(wordOne.length));
		$('.textHead').html(sliderDescription[currentSlid]);
		$('header').css('background', ''+sliderImg[currentSlid]+'no-repeat center');
		$('.circleB').css('opacity','0.4');
		$('.circleB:nth-child('+(currentSlid+1)+')').css('opacity','1');
	}	

});