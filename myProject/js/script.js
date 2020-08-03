function validateEmail (email){
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
	var form = document.getElementById('form')
	const $result = $("#result");
	const email = $("#email").val();
	$result.text("");
	if(validateEmail(email) == false){
		$result.text("Please provide a valid email");
		form.classList.add("invalid");
		return false
	}
	else {
		form.classList.remove("invalid");
		form.classList.add("valid");
		return true;
	}
}

$("#validate").on("click", validate);
