function loadData(url) {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            showDataOnPage(data.page.object[0]);
            loadPagination(data);
        });
}

function showDataOnPage(page) {
    Object.keys(page).forEach(key => {
        const generatedValueId = "#" + key + "_value";
        const element = $(generatedValueId);
        if (element.length) {
            element.html(page[key]);
            if (element[0].classList.contains("state_value")) {
                element[0].classList.add("active");
            }
        }
    })

}



function generatePaginationList(totalPages, currentPage) {
    let html = '<ul class="pagination justify-content-center">';
    for (let i = 1; i <= totalPages; i++) {
        if (currentPage === i) {
            html += '<li class="page-link active_page">' + i + '</li>';
        } else {
            html += '<li class="page-link">' + i + '</li>';
        }
    }
    html += '</ul>';
    return html;
}

function loadPagination(inputData) {
    const totalPages = inputData.paging.items.length;
    const currentPage = inputData.paging.pageNumber;
    $('#pagination-bar').html(generatePaginationList(totalPages, currentPage));
    const pageLinks =  $('.page-link');

    for (let i = 0; i < pageLinks.length; i++) {
        pageLinks[i].addEventListener("click", (e) =>{
            loadData(url_global + "?pageNumber=" + (i+1) + "&size=1")
        })
    }
}

function activateElem(elemName) {
    $('')[0].classList.add('active');
}

const menuItems = $('#menu .menu__item');

$('#menu').click((e) => {
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove('active');
        if (menuItems[i] === e.target) {
            openTab(i);
        }
    }
    e.target.classList.add('active')
})

let url_global;

function openTab(i) {
    let username = $('#username').val();

    switch (i + 1) {
        case 1: {
            changeVisible('#general_blood', '#bio_blood')
            url_global = "http://localhost:8080/user/analyzes/generalBlood/" + username;
            loadData(url_global + "?pageNumber=1&size=1");
            $('#leukocytes').html("11");
            break;
        }
        case 2: {
            changeVisible('#bio_blood', '#general_blood')
            url_global = "http://localhost:8080/user/analyzes/bioBlood/" + username;
            loadData(url_global + "?pageNumber=1&size=1");
            $('#protein').html("22");
        }
    }
}

function changeVisible(newActive, oldActive) {
    $(String(oldActive))[0].style.display = 'none';
    $(String(newActive))[0].style.display = 'block';
}

