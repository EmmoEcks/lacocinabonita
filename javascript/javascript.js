/***** 
 * 
 *  Web Project
 *  Name: Ariel Ardiles
 *  Date: June 16 2020
 *  Description: javascript page for Web Project
 *
 *****/

document.addEventListener("DOMContentLoaded", load);

/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors() 
{
	let errorFlag = false;

	/* General Information validatoion */
	let requiredFields = ["nameOfEvent", "hostName", "dateOfEvent", "startTime", "approximateGuests", "kids"];

	// general information validation
	// for (let i = 0; i < requiredFields.length; i++) {
	// 	let textField = document.getElementById(requiredFields[i]);

	// 	console.log(i);

	// 	if(!formFieldHasInput(textField)) {
	// 		// display appropriate error message
	// 		document.getElementById(requiredFields[i] + "_error").style.display = "block";
			
	// 		if (!errorFlag) {
	// 			textField.focus();
	// 			textField.select();
	// 		}

	// 		errorFlag = true;
	// 	}

	// 	// date of event validation
	// 	if (requiredFields[i] == "dateOfEvent") {
	// 		 	let eventDate = new Date(textField.value);
	// 		 	let today = new Date();
	// 		 	console.log(eventDate);
	// 		 	console.log(today);
			 	
	// 		 	if (eventDate.getTime() < today.getTime()) {
	// 		 		document.getElementById("dateOfEvent_error").style.display = "block";
	// 		 		errorFlag ="true";
	// 		 	}
	// 	}

	// 	// guest number validatioon
	// 	if (requiredFields[i] == "approximateGuests" || requiredFields[i] == "kids") {
	// 		if (!isNaN(textField.value)) {
	// 			if (textField.value < 0) {
	// 				document.getElementById(requiredFields[i] + "_error").style.display = "block";
	// 				if (!errorFlag) {
	// 					textField.focus();
	// 					textField.select();
	// 				}

	// 				errorFlag = true;
	// 			}
	// 		}
	// 	}
	// }

	// Contact Information validation
	// requiredFields = ["companyName", "contactName", "contactEmail", "contactPhone"];

	// for (let i = 0; i < requiredFields.length; i++) {
	// 	let textField = document.getElementById(requiredFields[i]);
	// 	console.log(i);

	// 	if(!formFieldHasInput(textField)) {
	// 		document.getElementById(requiredFields[i] + "_error").style.display = "block";
			
	// 		if (!errorFlag) {
	// 			textField.focus();
	// 			textField.select();
	// 		}

	// 		errorFlag = true;
	// 	}

	// 	/* email validation */
	// 	if (requiredFields[i] == "contactEmail") {
	// 		let regexEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	
	// 		if(!regexEmail.test(textField.value))	{
	// 			document.getElementById(requiredFields[i] + "_error").style.display = "block";
	// 			if (!errorFlag){
	// 				textField.focus();
	// 				textField.select();
	// 			}
	// 		errorFlag = true;

	// 		}
	// 	}
	
	// 	/*phone number validation */
	// 	if (requiredFields[i] == "contactPhone") {
	// 		if (!isNaN(textField.value)) {
	// 			if (textField.value.length != 10) {
	// 				document.getElementById(requiredFields[i] + "_error").style.display = "block";
	// 				if (!errorFlag) {
	// 					textField.focus();
	// 					textField.select();
	// 				}
	// 				errorFlag = true;
	// 			}
	// 		} else {
	// 			document.getElementById(requiredFields[i] + "_error").style.display = "block";
	// 			if (!errorFlag) {
	// 				textField.focus();
	// 				textField.select();
	// 			}
	// 			errorFlag = true;
	// 		}
	// 	}	
	// }


	// Payment information validation
	requiredFields = ["depositAmount", "cardType", "nameOnCard", "cardNumber", "cvc", "expiryDate"];
	for (let i = 0; i < requiredFields.length; i++) {
		console.log(i);
		
		// deposit amount validation
		if (requiredFields[i] == "depositAmount") {
			let textField = document.getElementById(requiredFields[i]);
			if (!formFieldHasInput(textField)) {
				document.getElementById(requiredFields[i] + "_error").style.display = "block";
				if (!errorFlag) {
					textField.focus();
					textField.select();
				}
				errorFlag = true;
			}

			// test for is number amount
			if (!isNaN(textField.value)) {
				let guests = parseInt(document.getElementById("approximateGuests").value);
				let kids = parseInt(document.getElementById("kids").value);

				if (! ( (guests + kids) * 6 != parseInt(textField.value) * 6 ) ) {
					document.getElementById(requiredFields[i] + "_error").style.display = "block";

					if (!errorFlag) {
						textField.focus();
						textField.select();
					}

					errorFlag = true;
				}
			}
		}

		//card selected check
		if (requiredFields[i] == "cardType") {			
			let cardType = ["visa", "amex", "mastercard"];
			let cardSelected = false;

			for (let i = 0; i < cardType.length; i++) {
				if (document.getElementById(cardType[i]).checked) {
					cardSelected = true;
				}
			}

			if (!cardSelected) {
				document.getElementById(requiredFields[i] + "_error").style.display = "block";
				errorFlag = true;
			}
		}
		
		/* Name on card check */
		if (requiredFields[i] == "nameOnCard") {
			let textField = document.getElementById(requiredFields[i]);

			if (!formFieldHasInput(textField)) {
				document.getElementById(requiredFields[i] + "_error").style.display = "block";

				if (!errorFlag) {
					textField.focus();
					textField.select();
				}
				errorFlag = true;
			}
		}
		
		/* Card Number check */
		if (requiredFields[i] == "cardNumber") {
			let textField = document.getElementById(requiredFields[i]);

			// has input
			if (!formFieldHasInput(textField)) {
				document.getElementById(requiredFields[i] + "_error").style.display = "block";	
				errorFlag = true;
			}

			// is 16 digits, and is a number
			if (textField.value.length != 16 || isNaN(textField.value)) {
				document.getElementById(requiredFields[i] + "_error").style.display = "block";
				
				if (!errorFlag) {
					textField.focus();
					textField.select();
				}
				
				errorFlag = true;
			} else {
				// starts with 4510 or not
				let cardString = textField.value.toString();
				if (!(cardString.includes("4510"))) {
					document.getElementById(requiredFields[i] + "_error").style.display = "block";
					if (!errorFlag) {
							textField.focus();
							textField.seleect();
					}
					errorFlag = true;
				}
			}
		}		

		/* Expiry Date check */
		if (requiredFields[i] == "expiryDate") {
			let cardMonth = document.getElementById("expiryMonth").value;
			let cardYear = document.getElementById("expiryYear").value;
			console.log(expiryMonth + ' ' + expiryYear);

			if(isNaN(cardMonth)) {
				document.getElementById(requiredFields[i] + "_error").style.display = "block";
				errorFlag = true; 
			} else { 
				let today = new Date();
				let expiryDate = new Date(cardYear, cardMonth - 1)
			
				if (expiryDate.getTime() < today.getTime()) {
					document.getElementById(requiredFields[i] + "_error").style.display = "block";
					errorFlag ="true";
				}
			}
		}

		/* cvc validation */
		/* last digit of the last 3 4-digit blocks from credit card number */
		if (requiredFields[i] == "cvc") {
			console.log(requiredFields[i]);
			let textField = document.getElementById(requiredFields[i]);
			// is 3 digits and a number
			if (textField.value.length != 3 || isNaN(textField.value)) {
				document.getElementById(requiredFields[i] + "_error").style.display = "block";

				if (!errorFlag) {
					textField.focus();
					textField.select();
				}
				errorFlag = true;
			} else {
				let cardString = document.getElementById("cardNumber").value.toString();
				console.log(cardString);
				let cvcValidator = cardString.substring(7, 8);
				console.log(cvcValidator);
				cvcValidator += cardString.substring(11, 12);
				console.log(cvcValidator);
				cvcValidator += cardString.substring(15);
				console.log(cvcValidator);
				console.log(textField.value.toString());

				if (cvcValidator != textField.value.toString()) {
					document.getElementById(requiredFields[i] + "_error").style.display = "block";
					if (!errorFlag) {
						textField.focus();
						textField.select();
					}
					errorFlag = true;
				}
			}
		}	
	}
	return errorFlag;
}

/*
 * Determines if a text field element has input
 *
 * param   fieldElement A text field input element object
 * return  True if the field contains input; False if nothing entered
 */
function formFieldHasInput(fieldElement)
{
	// Check if the text field has a value
	if (fieldElement.value == null)
	{
		// Invalid entry
		return false;
	} else if (trim(fieldElement.value) == "" ) {
		// Invalid entry
		return false;
	}

	// Valid entry
	return true;
}

/*
 * Removes white space from a string value.
 *
 * return  A string with leading and trailing white-space removed.
 */
function trim(str) 
{
	// Uses a regex to remove spaces from a string.
	return str.replace(/^\s+|\s+$/g,"");
}

/*
 * Handles the submit event of the survey form
 *
 * param e  A reference to the event object
 * return   True if no validation errors; False if the form has
 *          validation errors
 */

function validate(e) 
{
	hideErrors();
	//	Determine if the form has errors
	if (formHasErrors()) {
		// 	Prevents the form from submitting
		e.preventDefault();
		// 	Returning false prevents the form from submitting
		return false;
	}
	e.preventDefault();
	return true;
}

/*
 * Handles the reset event for the form.
 *
 * param e  A reference to the event object
 * return   True allows the reset to happen; False prevents
 *          the browser from resetting the form.
 */
function resetForm(e) 
{
	// Confirm that the user wants to reset the form.
	if ( confirm('Clear Event Details?') )
	{
		// Ensure all error fields are hidden
		hideErrors();
		
		// Set focus to the first text field on the page
		document.getElementById("nameOfEvent").focus();
		
		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();
	
	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;	
}

/*
 * Hides all of the error elements.
 */
function hideErrors() 
{
	// Get an array of error elements
	let error = document.getElementsByClassName("error");

	// Loop through each element in the error array
	for ( let i = 0; i < error.length; i++ )
	{
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
	}
}

/*
 * Handles the load event of the document.
 */
function load() 
{
	console.log("DOM Content loaded");

	document.getElementById("submit").addEventListener("click", validate);
	document.getElementById("resetButton").addEventListener("click", resetForm);
	document.getElementById("bookForm").reset();
}