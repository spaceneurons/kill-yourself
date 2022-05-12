$(document).ready(() => {
    jQuery.ajaxSetup({async: false});

    $("#subm").click((e) => {
        e.preventDefault();

        const password = $("input[name='password']").val();
        const repeatedPassword = $("input[name='repeatedPassword']").val();

        if (checkPasswords(password, repeatedPassword)) {

            let data = Object.fromEntries(new FormData(document.forms[String("form")]).entries());
            console.log(JSON.stringify(data));
            $.ajax( {
                url: serverURL + "auth/reset/password",
                method: "PUT",
                headers: {'Content-Type': 'application/json', 'X-XSRF-TOKEN': getCsrfTokenFromCookie()},
                data: JSON.stringify(data),
                success: (response) => {
                        window.location.href = serverURL + "auth/logIn?changed";
                },
                error: data => {
                    window.location.href = serverURL + "auth/logIn?unchanged";
                }
            })
        }
    })
})

function checkPasswords(password, repeatedPassword) {
    if (password.length === 0) {
        showAndHideAfterTime("#passwordHelpId", 3000, 'fast');
        return false;
    }
    if (repeatedPassword.length === 0) {
        showAndHideAfterTime("#repeatPasswordHelpId", 3000);
        return false;
    }
    if (password !== repeatedPassword) {
        showAndHideAfterTime("#mismatchLabelId", 3000);
        return false;
    }
    return true;
}