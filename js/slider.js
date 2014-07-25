	$(document).ready(function() {

		//bullets
		$('a[data-id]').click(function() {

			var id = parseInt($(this).attr('data-id'));
			slider.show(id);
		})

		//arrows
		$('.left').click(function() {

			slider.prev();

		});

		$('.right').click(function() {

			slider.next();

		});



	var slider = {

		obj: $('.container'),
		imgs: ['images/img1.jpg',	'images/img2.jpg',	'images/img3.jpg'],
		selected: 0,

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
			//bullets
			$('a[data-id]').removeClass('selected');
			$('a[data-id="'+e+'"]').removeClass('released').addClass('selected');

			//bg
			$(this.obj).animate({

				opacity: 0,

				}, 500, function() {

				$(this).css('background', 'url('+slider.imgs[e]+') 50%');
				$(this).css('backgroundSize', 'cover');

			}).animate({opacity: 1}, 500);

			//refresh selected
			this.selected = e;
		}
	}

	//preload images
	slider.load();

});