$(document).ready(function () {
    $('form').submit(function (event) {
        register(event);
    });

    function register(event) {
        event.preventDefault();
        $(".alert").html("").hide();

        if (checkPasswords()) {

            if (!grecaptcha.getResponse()) {
                textAlert("#captchaError", "Please verify that you are not a robot.", 2000);
                return false;
            }
            hideLabel('#captcha', "normal");
            hideLabel('#reg_button', 'normal');
            $('#sending').show('slow');

            let formData = getDataFromFormById('form');
            fetch('/auth/registration', {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'X-XSRF-TOKEN': getCsrfTokenFromCookie()},
                body: JSON.stringify(formData),
            })
                .then(response => {
                    if (response.status === 200) {
                        $('#sending').hide('slow');
                        $('#successRegistrationLabel').show('slow');
                    } else {
                        grecaptcha.reset();
                        $("#captcha").show("slow");
                        $("#reg_button").show("slow");
                        $('#sending').hide('slow');
                    }
                    return response.json();
                })
                .then(data => {
                    Object.keys(data).forEach((key) => {
                        textAlert("#" + key + "_error_text", data[key], 5000);
                    })
                });
        }
    }

    function checkPasswords() {
        if (getHtmlValByName("matchingPassword") !== getHtmlValByName("password")) {
            showAndHideAfterTime("#repeat_pass_error_text", 4000);
            return false;
        }
        return true;
    }

});

