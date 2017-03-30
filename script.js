$(document).ready(function(){

	$('.easy').on('click', function(){
		makeboxes(10)
		$('.win').remove()
		$('button').hide()
	})

	$('.med').on('click', function(){
		makeboxes(50)
		$('.win').remove()
		$('button').hide()
	})

	$('.hard').on('click', function(){
		makeboxes(100)
		$('.win').remove()
		$('button').hide()
	})

	let makeboxes = function(num){
		rand = Math.floor(Math.random()*num)
		console.log(rand)
		for (var i = num - 1; i >= 0; i--) {

			let box = $('<div>');
			box.attr("id", i)

			if(i===rand){
				box.addClass("hvr-bounce-out box odd")
			}
			else{
				box.addClass("hvr-pulse-grow  box");
			}
			$('.boxcontainer').append(box);
		}

		$('.odd').on('click', function(){
			$('.wincontainer').append("<div class='win'>You win!</div>")
			$('.box').remove()
			$('button').show()
			
		})
	}
})