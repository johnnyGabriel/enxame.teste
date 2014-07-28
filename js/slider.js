	$(document).ready(function() {

		//bullets
		$('a[data-id]').click(function(e) {

			e.preventDefault();
			var id = parseInt($(this).attr('data-id'));
			slider.show(id);
		})

		//arrows
		$('.left').click(function(e) {

			e.preventDefault();
			slider.prev();

		});

		$('.right').click(function(e) {

			e.preventDefault();
			slider.next();

		});



	var slider = {

		obj: $('.bg'),
		imgs: ['images/img1.jpg',	'images/img2.jpg',	'images/img3.jpg'],
		selected: 0,
		speed: 350,

		load:function() 
		{
			var i = 0;
			var load = new Array();
			for(i=0; i < this.imgs.length; i++)
			{
				load[i] = new Image();
				load[i].src = this.imgs[i];
			}
		},

		prev:function()
		{
			var new_selected = 0;
			if(this.selected == 0)
			{
				new_selected = this.imgs.length-1;
			} else
			{
				new_selected = this.selected - 1;
			}
			return this.show(new_selected);
		},

		next:function()
		{
			var new_selected = 0;
			if(this.selected == this.imgs.length-1)
			{
				new_selected = 0;
			} else
			{
				new_selected = this.selected + 1;
			}
			return slider.show(new_selected);
		},

		show:function(e)
		{
			//bg
			$(this.obj).animate({

				opacity: 0,

				}, this.speed, function() {

					$(this).css('background', 'url('+slider.imgs[e]+') no-repeat 50% 35px / cover');

			}).animate({opacity: 1}, this.speed);

			//bullets
			$('a[data-id="'+this.selected+'"]').animate({

				opacity: 0.5,

				}, this.speed, function() {

					$(this).removeClass('selected');
					$('a[data-id="'+e+'"]').removeClass('released').addClass('selected');
				
			}).animate({opacity: 1}, this.speed);

			//refresh selected
			this.selected = e;
		}
	}

	//preload images
	slider.load();

});