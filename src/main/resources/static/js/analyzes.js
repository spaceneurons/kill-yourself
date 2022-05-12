$('#bio_btn_close').click(() => {
    $('#biochemical_blood_modal').modal('hide');
    hideLabel(".fail", 'slow');
})
$('#general_btn_close').click(() => {
    $('#general_blood_modal').modal('hide');
    hideLabel(".fail", 'slow');
})

$(document).ready(() => {
    $("#bio_btn_add").click((e) => {
        e.preventDefault();
        hideLabel(".fail", 'slow');

        const csrfToken = getCsrfTokenFromCookie();
        const bioTestDto = getDataFromFormById('add_biochemical_blood_form');
        bioTestDto['username'] = $('#username').val();
        const url = "/user/analyzes/add/bioBlood/" + bioTestDto.username;
        generalFormAjax("POST", url, csrfToken, bioTestDto);
    })
})

$(document).ready(() => {
    $("#general_btn_add").click((e) => {
        e.preventDefault();
        hideLabel(".fail", 'slow');

        const csrfToken = getCsrfTokenFromCookie();
        const generalTestDto = getDataFromFormById('add_general_blood_form');
        generalTestDto['username'] = $('#username').val();
        const url = "/user/analyzes/add/generalBlood/" + generalTestDto.username;
        generalFormAjax("POST", url, csrfToken, generalTestDto);
    })
})