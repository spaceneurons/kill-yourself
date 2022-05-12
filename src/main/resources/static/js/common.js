const serverURL = "http://localhost:8080/";

function hideLabel(label, speed) {
    $(String(label)).hide(String(speed));
}

function hideElementAfterTime(elem, time, velocity='slow') {
    setTimeout(() => {
        $(String(elem)).hide(String(velocity));
    }, time)
}

function showElement(name, message) {
    $(name).show('slow').html(message);
}

function textAlert(name, message, time) {
    showElement(name, message);
    hideElementAfterTime(name, time);
}

function getHtmlValByName(elemName) {
    return $('[name=' + elemName + ']').val();
}

function showAndHideAfterTime(elem, time = 2000, velocity = 'slow') {
    $(elem).show(velocity)
    hideElementAfterTime(elem, time, velocity);
}

function getCsrfTokenFromCookie() {
    return document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');
}