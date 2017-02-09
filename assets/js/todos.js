//check off specific to dos by striking
$(document).ready(function(){
	$('ul').on('click','li',function () {
		$(this).toggleClass('completed');
	})
//click on x to delete to do

	$('ul').on('click','span',function(event){
		//alert('span clicked')
		$(this).parent().fadeOut(500,function(){
			$(this).remove()
		});
		event.stopPropagation();

	})

	$("input[type='text']").keypress(function(event){
		//check if the user presses enter key(13)
		if(event.which === 13)
			//grabbing new to-do text from input
			{
				var todoText = $(this).val();
				//set input to empty
				$(this).val('')
			//create a new li and add to ul
				$('ul').append("<li> <span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
			}

	})
	$(".fa-plus").click(function(){
		$("input[type='text'").fadeToggle()
	});
})


