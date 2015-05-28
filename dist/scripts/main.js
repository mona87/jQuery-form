$(document).ready(function(){

$btn = $('button');
$name = $('#name');
$email = $('#email');
$website = $('#website');
$message = $('#message');
$nameEr = $('.nameEr');
$emailEr = $('.emailEr');
$webEr = $('.webEr');
$msgEr = $('.msgEr');


errorMsg = [$nameEr, $emailEr, $webEr, $msgEr];
input = [$name,$email,$website,$message];

$btn.on('click', check);

function check(e){
	clearErrors();
	console.log(input[0].val());

	for(var i = 0; i < input.length; i++){

		if(validator.isNull(input[i].val())){
			console.log('true');
			e.preventDefault();
			errorMsg[i].show();
			input[i].css('border-left', '3px solid red');
		}
	}

	
	if(checkEmail(e) && checkSite(e)){
		showMsg(e);
	}

}

function checkEmail(e){

	if(!validator.isEmail($email.val())){
		
		$emailEr.show();
		$email.css('border-left', '3px solid red');
		e.preventDefault();
	
	}
	else{

		return true
	}
}

function checkSite(e){

	if(!validator.isURL($website.val())){
		
		$webEr.show();
		$website.css('border-left', '3px solid red');
		e.preventDefault();
	}
	else {

		console.log('web');
		return true
	}
}

function showMsg(e){

	e.preventDefault();
	$('form').find('*').hide();
	$('#empty').html('<p>Thanks for contacting us ' +$name.val()+ '. We have recieved your message and will be in touch with you shortly. </p>');
	$('#empty').show();

	
}
	

function clearErrors () {

	for(var i =0; i <errorMsg.length; i++){

		errorMsg[i].hide();
		input[i].css('border-left', '3px solid #18191F');
	}
}






});