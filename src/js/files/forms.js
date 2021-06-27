let forms = document.querySelectorAll('form');
if (forms.length > 0) {
	for (let index = 0; index < forms.length; index++) {
		const el = forms[index];
		el.addEventListener('submit', form_submit);
	}
}


async function form_submit(e) {
	let btn = e.target;
	let form = btn.closest('form');
	let error = form_validate(form);
	if (error == 0) {
		e.preventDefault();
		let form_action = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
		let form_method = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
		const ajax = form.getAttribute('data-ajax');

		//SendForm
		if (ajax) {
			let form_data = new FormData(form);
			console.log(form_action);
			console.log(form_method);
			document.querySelector('.feedback-form').classList.add('vs-sending');
			let response = await fetch(form_action, {
				method: form_method,
				body: form_data
			});
			if (response.ok) {
				console.log(response);
				console.log(response.json);
				console.log('Успешная отправка!');
				//let result = await response.json();
				document.querySelector('.feedback-form').classList.remove('vs-sending');
				popup_open('success');			
				form_clean(form);
			} else {
				document.querySelector('.feedback-form').classList.remove('vs-sending');
				console.log('Ошибка отправки!');
				popup_open('error');
			}
		}
	} else {
		let form_error = form.querySelectorAll('.vs-error');
		if (form_error && form.classList.contains('_goto-error')) {
			_goto(form_error[0], 1000, 50);
		}
		e.preventDefault();
	}
}



/* Функция form_validate */
function form_validate(form) {
	let error = 0;
	let form_req = form.querySelectorAll('.vs-req');
	if (form_req.length > 0) {
		for (let index = 0; index < form_req.length; index++) {
			const el = form_req[index];
			if (!_is_hidden(el)) {
				error += form_validate_input(el);
			}
		}
	}
	return error;
}

/* Функция form_validate_input */
function form_validate_input(input) {
	let error = 0;
	let input_g_value = input.getAttribute('data-value');

	if (input.getAttribute("name") == "email" || input.classList.contains("vs-email")) {
		if (input.value != input_g_value) {
			let em = input.value.replace(" ", "");
			input.value = em;
		}
		if (email_test(input) || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
		form_add_error(input);
		error++;
	} else {
		if (input.value == '' || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	}
	return error;
}

/* Функция form_add_error */
function form_add_error(input) {
	input.classList.add('vs-error');
	input.parentElement.classList.add('vs-error');

	let input_error = input.parentElement.querySelector('.vs-error-msg');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
	let input_error_text = input.getAttribute('data-error');
	if (input_error_text && input_error_text != '') {
		input.parentElement.insertAdjacentHTML('afterbegin', '<div class="vs-error-msg">' + input_error_text + '</div>');
	}
}

/* Функция form_remove_error */
function form_remove_error(input) {
	input.classList.remove('vs-error');
	input.parentElement.classList.remove('vs-error');

	let input_error = input.parentElement.querySelector('.vs-error-msg');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
}

/* Функция form_clean */
function form_clean(form) {
	let inputs = form.querySelectorAll('input,textarea');
	for (let index = 0; index < inputs.length; index++) {
		const el = inputs[index];
		el.parentElement.classList.remove('vs-focus');
		el.classList.remove('vs-foocus');
		el.value = el.getAttribute('data-value');
	}
	let checkboxes = form.querySelectorAll('.checkbox__input');
	if (checkboxes.length > 0) {
		for (let index = 0; index < checkboxes.length; index++) {
			const checkbox = checkboxes[index];
			checkbox.checked = false;
		}
	}
	let selects = form.querySelectorAll('select');
	if (selects.length > 0) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_default_value = select.getAttribute('data-default');
			select.value = select_default_value;
			select_item(select);
		}
	}
}


/* Placeholers */
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];
			const input_g_value = input.getAttribute('data-value');
			input_placeholder_add(input);
			if (input.value != '' && input.value != input_g_value) {
				input_focus_add(input);
			}
			input.addEventListener('focus', function (e) {
				if (input.value == input_g_value) {
					input_focus_add(input);
					input.value = '';
				}
				if (input.getAttribute('data-type') === "pass") {
					input.setAttribute('type', 'password');
				}
				if (input.classList.contains('vs-date')) {
					
					// input.classList.add('vs-mask');
					// Inputmask("99.99.9999", {
					// 	//"placeholder": '',
					// 	clearIncomplete: true,
					// 	clearMaskOnLostFocus: true,
					// 	onincomplete: function () {
					// 		input_clear_mask(input, input_g_value);
					// 	}
					// }).mask(input);
					
				}
				if (input.classList.contains('vs-phone')) {
					//'+7(999) 999 9999'
					//'+38(999) 999 9999'
					//'+375(99)999-99-99'
					input.classList.add('vs-mask');
					Inputmask("+7(999) 999-99-99", {
						//"placeholder": '',
						clearIncomplete: false,
						clearMaskOnLostFocus: false,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				if (input.classList.contains('vs-digital')) {
					input.classList.add('vs-mask');
					Inputmask("9{1,}", {
						"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				form_remove_error(input);
			});
			input.addEventListener('blur', function (e) {
				if (input.value == '') {
					input.value = input_g_value;
					input_focus_remove(input);
					if (input.classList.contains('vs-mask')) {
						input_clear_mask(input, input_g_value);
					}
					if (input.getAttribute('data-type') === "pass") {
						input.setAttribute('type', 'text');
					}
				}
			});
			if (input.classList.contains('vs-date')) {
				datepicker(input, {
					customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
					customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
			}
		}
	}
}

function input_placeholder_add(input) {
	const input_g_value = input.getAttribute('data-value');
	if (input.value == '' && input_g_value != '') {
		input.value = input_g_value;
	}
}
function input_focus_add(input) {
	input.classList.add('vs-focus');
	input.parentElement.classList.add('vs-focus');
}
function input_focus_remove(input) {
	input.classList.remove('vs-focus');
	input.parentElement.classList.remove('vs-focus');
}
function input_clear_mask(input, input_g_value) {
	input.inputmask.remove();
	input.value = input_g_value;
	input_focus_remove(input);
}



/* QUANTITY 
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}
*/

/* RANGE
const priceSlider = document.querySelector('.price-filter__slider');
if (priceSlider) {
	noUiSlider.create(priceSlider, {
		start: [0, 200000],
		connect: true,
		tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
		range: {
			'min': [0],
			'max': [200000]
		}
	});

	const priceStart = document.getElementById('price-start');
	const priceEnd = document.getElementById('price-end');
	priceStart.addEventListener('change', setPriceValues);
	priceEnd.addEventListener('change', setPriceValues);

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if (priceStart.value != '') {
			priceStartValue = priceStart.value;
		}
		if (priceEnd.value != '') {
			priceEndValue = priceEnd.value;
		}
		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
	}
}
*/