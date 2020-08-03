
export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function validatePhone(phone) {
  const re = /^(\+7)[\s\-]\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  return re.test(phone);
}


function validateField(element, event) {
  const isRequired = element.attr('required');
  const value = event.target.value;
  const tmpval = element.val();

  if (tmpval == '') {
    element.closest('.input').removeClass('input--filled');
  } else {
    element.closest('.input').addClass('input--filled');
  }

  if (value) {
    if (element.prop('type') === 'email') {
      if (validateEmail(value)) {
        element.closest('.input').removeClass('error');
        element.closest('.input').find('.error-content').text('');
      } else {
        element.closest('.input').addClass('error');
        element.closest('.input').find('.error-content').text('Поле заполнено некорректно');
      }
    } else if (element.prop('name') === 'phone') {
      if (validatePhone(value)) {
        element.closest('.input').removeClass('error');
        element.closest('.input').find('.error-content').text('');
      } else {
        element.closest('.input').addClass('error');
        element.closest('.input').find('.error-content').text('Поле заполнено некорректно');
      }
    } else {
      element.closest('.input').removeClass('error');
      element.closest('.input').find('.error-content').text('');
    }
  }
  if (!value && isRequired) {
    element.closest('.input').addClass('error');
    element.closest('.input').find('.error-content').text('Пожалуйста, заполните поле');
  }
}

$(document).on("blur", '.input input, .textarea textarea', function (event) {
  validateField($(this), event);
});
