$(document).ready(() => {
    $('#recoverPassword').click((e) => {
        e.preventDefault()
        hideLabel('#recoverPassword', "normal");

        const email = $("#email").val();
        if (email.length === 0 || !regex.test(email)) {
            $('#emailHelpId').show("slow")
        } else {

            $('#sending').show('fast');
            fetch(serverURL + "auth/reset/password", {
                method: 'POST',
                headers: {'Content-Type': 'application/json','X-XSRF-TOKEN': getCsrfTokenFromCookie()},
                body: JSON.stringify(email),
            })
                .then(response => {
                    $('#sending').hide('slow');
                    hideLabel('#emailHelpId', 'normal');
                    if (response.status === 200) {
                        $('#successSendEmailForRecoveryLabel').show('slow');
                    } else if (response.status === 409 ) {
                        showAndHideAfterTime('#emailHelpFail', 3000,'normal')
                        $('#recoverPassword').show('fast');
                    }
                    return response.json();
                })
                .then(data => {});
        }
    })
})

let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
