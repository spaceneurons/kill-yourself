$(document).ready(() => {
    jQuery.ajaxSetup({async: false});
    let dataTable = $('#bio_blood_table');
    let bloodTestId;

    initializeDataTable();
    function initializeDataTable() {
        let number = 1;
        dataTable.DataTable({
            "destroy": true,
            "processing": true,
            // "serverSide": true,
            "ajax": {
                "url": "/doctor/patients/bioBlood",
                'dataSrc': '',
            },
            "columns": [
                {
                    data: null, "render": () => {
                        return '<span>' + number++ + '</span>'
                    },
                    width: "5%"
                },
                {data: "cholesterol", width: "15%"},
                {data: "glucose", width: "15%"},
                {data: "protein", width: "15%"},
                {data: "createdOn", width: "15%"},
                {
                    data: null,
                    width: "35%",
                    render: (data, type, row) => {
                        if (data.result === null || data.result.length === 0) {
                            return '<div class="modalOpen" data-bs-toggle="modal" data-bs-target="#addRecommendation">' +
                                '<img data-id="' + data.id + '" class="w-24 me-3 img_link bio" src="/static/images/edit.png"' +
                                '  alt="setRecommendation"></div>';
                        } else {
                            return data.result;
                        }
                    }
                },
            ],
        });
    }

    document.querySelectorAll(".modalOpen").forEach(item => {
        item.addEventListener("click", e => {
            bloodTestId = e.target.dataset.id;
        })
    })

    $("#send").on("click", e => {
        e.preventDefault();
        let recom = $("#recom").val();
        let userId = $("#userId").val();

        if (isRecomValid(recom)) {
            console.log(bloodTestId);

            let map = new Map();
        map.set("recom", recom);
        map.set("userId", userId);
        map.set("bloodTestId", bloodTestId);

        let json = Object.fromEntries(map);
            fetch(`/doctor/patients/bioBlood/${bloodTestId}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json', 'X-XSRF-TOKEN': getCsrfTokenFromCookie()},
                body: JSON.stringify(json),
            }).then(resp => {
                if (resp.status === 200) {
                    $("#recom")[0].value = "";
                    showAndHideAfterTime("#success");
                    dataTable.DataTable().clear().destroy();
                    initializeDataTable();
                } else {
                    showAndHideAfterTime("#fail");
                }
            }).catch(er => {
                showAndHideAfterTime("#fail");
            })
        }
    })

    function isRecomValid(str) {
        if (str < 2) {
            showAndHideAfterTime("#invalidMin")
            return false;
        }
        if (str > 50) {
            showAndHideAfterTime("#invalidMax")
            return false;
        }
        return true;
    }
});


function getCsrfTokenFromCookie() {
    return document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');
}