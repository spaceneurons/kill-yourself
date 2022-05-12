$(document).ready(() => {
    $("#submit_edit").click((e) => {
        e.preventDefault();
        $(".error").hide('slow')

        const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');
        const cardDto = Object.fromEntries(new FormData(document.forms['userPersonalForm']).entries());
        const url = "/user/personal/edit/" + cardDto.username;
        generalFormAjax("POST", url, csrfToken, cardDto);
    })

    $("#submit_edit_role").click((e) => {
        e.preventDefault();

        let elem = $('#role')[0];

        const old = elem.options[0].value;
        const newRole = elem.options[elem.selectedIndex].value;
        const username = $('#username').val();

        console.log(old);
        console.log(newRole);
        if (old !== newRole) {
            fetch(serverURL + "user/personal/edit/" + username + "/role", {
                method: "PUT",
                headers: {'Content-Type': 'application/json','X-XSRF-TOKEN': getCsrfTokenFromCookie()},
                body: JSON.stringify(newRole),
            }).then(response => {
                console.log(response.status)
                if (response.status === 201) {
                    showAndHideAfterTime(".success", 2000);
                } else {
                    showAndHideAfterTime("#failRole", 2000);
                }
            });
        }
    })
})