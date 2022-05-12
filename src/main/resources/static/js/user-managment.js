$(document).ready(() => {
    document.querySelectorAll(".blocking_button").forEach((elem) => {
        elem.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log(e);
            const formImg = e.target[1].children[0];

            console.log();
            const username = e.target[0].value;
            fetch(`/admin/management/blocking/${username}`, {
                method: "POST",
                headers: {'Content-Type': 'application/json', 'X-XSRF-TOKEN': getCsrfTokenFromCookie()},
                body: JSON.stringify({}),
            }).then(r => {
                formImg.src = formImg.src === `${serverURL}static/images/disabled.png` ? "/static/images/active.png" : "/static/images/disabled.png";
            }).catch((error) => {

            });
    })

    })

});
