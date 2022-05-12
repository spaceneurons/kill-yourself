function    generalFormAjax(method, url, csrfToken, data) {
    $.ajax({
        type: method,
        url: url,
        headers: {
            'X-XSRF-TOKEN': csrfToken,
        },
        contentType: "application/json",
        data: JSON.stringify(data),
        success: (response) => {
            $(".success").show('slow');
            hideElementAfterTime(".success", 2000, 'slow');
        },
        error: (errors) => {
            $(".fail").show('slow');
            hideElementAfterTime(".fail", 2000, 'slow');
            let errorMap = errors['responseJSON'];
            Object.keys(errorMap).forEach(
                error => {
                    console.log(error)
                    const generatedElementClassName = "." + error + "_error";
                    $(generatedElementClassName).html(errorMap[error]).show('slow')
                    hideElementAfterTime(generatedElementClassName, 3000, 'slow');
                }
            )
        }
    })
}

function hideElementAfterTime(elem, time, velocity) {
    setTimeout(() => {
        $(String(elem)).hide(String(velocity));
    }, time)
}

function getCsrfTokenFromCookie() {
    return document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');
}

function getDataFromFormById(formId) {
    return Object.fromEntries(new FormData(document.forms[String(formId)]).entries());
}