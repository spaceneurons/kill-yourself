<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <fmt:setLocale value="${sessionScope.local}"/>
    <fmt:setBundle basename="locale.locale" var="locale"/>

    <fmt:message bundle="${locale}" key="locale.admin.text.editUser" var="editUser"/>
    <fmt:message bundle="${locale}" key="locale.admin.label.userId" var="userId"/>
    <fmt:message bundle="${locale}" key="locale.admin.label.login" var="login"/>
    <fmt:message bundle="${locale}" key="locale.admin.label.role" var="role"/>
    <fmt:message bundle="${locale}" key="locale.admin.label.transport" var="transport"/>
    <fmt:message bundle="${locale}" key="locale.admin.label.rating" var="rating"/>
    <fmt:message bundle="${locale}" key="locale.admin.text.admin" var="admin"/>
    <fmt:message bundle="${locale}" key="locale.admin.text.courier" var="courier"/>
    <fmt:message bundle="${locale}" key="locale.admin.text.customer" var="customer"/>
    <fmt:message bundle="${locale}" key="locale.admin.button.changeLogin" var="changeLogin"/>
    <fmt:message bundle="${locale}" key="locale.admin.button.changeRole" var="changeRole"/>
    <fmt:message bundle="${locale}" key="locale.admin.button.changeTransport" var="changeTransport"/>
    <fmt:message bundle="${locale}" key="locale.admin.button.changeRating" var="changeRating"/>
    <fmt:message bundle="${locale}" key="locale.user.text.english" var="truck"/>
    <fmt:message bundle="${locale}" key="locale.user.text.french" var="car"/>
    <fmt:message bundle="${locale}" key="locale.user.text.german" var="withoutTransport"/>
    <fmt:message bundle="${locale}" key="locale.user.button.back" var="back"/>
    <fmt:message bundle="${locale}" key="locale.user.title.loginRegex" var="loginRegex"/>
    <fmt:message bundle="${locale}" key="locale.message.userExist" var="userExist"/>

    <link rel="stylesheet" href="../../css/style.css">
    <link rel="SHORTCUT ICON" href="../../assets/favicon.png" type="image/png">
    <title>Edit user</title>
</head>
<body>
<header>
    <jsp:include page="/jsp/header.jsp"/>
</header>
<main class="main-form">
    <br>
    <h2>${editUser}</h2>
    <br>
    <div class="logIn-form-box">
        <form action="controller" name="changeLogin" method="POST" style="width: 100%">
            <input type="hidden" name="command" value="change_login_command"/>
            <input type="hidden" name="userId" value="${sessionScope.currentUser.id}">
            <span class="form-label">${login}: </span>
            <input class="login-form-text" style="width: 250px"
                   name="currentLogin"
                   value="${sessionScope.currentUser.login}"
                   maxlength="16"
                   pattern="^[\w_]{4,16}$"
                   title="${loginRegex}"
                   value=""
                   placeholder="${myUserNameIs}"
                   required/>
            <input type="submit" value="${changeLogin}" class="join-us-button" style="width: 170px;">
        </form>
        <form action="controller" name="changeRole" method="POST" style="width: 100%">
            <input type="hidden" name="command" value="change_role_command"/>
            <input type="hidden" name="userId" value="${sessionScope.currentUser.id}">
            <span class="form-label">${role}: </span>
            <c:choose>
                <c:when test="${sessionScope.currentUser.role == 'COURIER'}">
                    <select class=form-dropdown style="width: 250px" name="role">
                        <option class="form-option" style="width: 250px" value="Courier" selected>${courier}</option>
                        <option class="form-option" style="width: 250px" value="Customer">${customer}</option>
                    </select>
                    <input type="submit" value="${changeRole}" class="join-us-button" style="width: 170px;">
                </c:when>
                <c:otherwise>
                    <select class=form-dropdown style="width: 250px" name="role">
                        <option class="form-option" style="width: 250px" value="Courier">${courier}</option>
                        <option class="form-option" style="width: 250px" value="Customer" selected>${customer}</option>
                    </select>
                    <input type="submit" value="${changeRole}" class="join-us-button" style="width: 170px;">
                </c:otherwise>
            </c:choose>
        </form>
        <form action="controller" name="changeTransport" method="POST" style="width: 100%">
            <input type="hidden" name="command" value="change_transport_command"/>
            <input type="hidden" name="userId" value="${sessionScope.currentUser.id}">
            <c:choose>
                <c:when test="${sessionScope.currentUser.role == 'COURIER'}">
                    <c:choose>
                        <c:when test="${sessionScope.currentUser.transport == 'TRUCK'}">
                            <span class="form-label">${transport}: </span>
                            <select class=form-dropdown style="width: 250px" name="transport">
                                <option class="form-option" style="width: 250px" value="Truck"
                                        selected>${truck}</option>
                                <option class="form-option" style="width: 250px" value="Car">${car}</option>
                                <option class="form-option" style="width: 250px"
                                        value="None">${withoutTransport}</option>
                            </select>
                            <input type="submit" value="${changeTransport}" class="join-us-button"
                                   style="width: 170px;">
                        </c:when>
                        <c:when test="${sessionScope.currentUser.transport == 'CAR'}">
                            <span class="form-label">${transport}: </span>
                            <select class=form-dropdown style="width: 250px" name="transport">
                                <option class="form-option" style="width: 250px" value="Truck">${truck}</option>
                                <option class="form-option" style="width: 250px" value="Car" selected>${car}</option>
                                <option class="form-option" style="width: 250px"
                                        value="None">${withoutTransport}</option>
                            </select>
                            <input type="submit" value="${changeTransport}" class="join-us-button"
                                   style="width: 170px;">
                        </c:when>
                        <c:otherwise>
                            <span class="form-label">${transport}: </span>
                            <select class=form-dropdown style="width: 250px" name="transport">
                                <option class="form-option" style="width: 250px" value="Truck">${truck}</option>
                                <option class="form-option" style="width: 250px" value="Car">${car}</option>
                                <option class="form-option" style="width: 250px" value="None"
                                        selected>${withoutTransport}</option>
                            </select>
                            <input type="submit" value="${changeTransport}" class="join-us-button"
                                   style="width: 170px;">
                        </c:otherwise>
                    </c:choose>
                </c:when>
            </c:choose>
        </form>
        <form action="controller" name="changeRating" method="POST" style="width: 100%">
            <input type="hidden" name="command" value="change_rating_command"/>
            <input type="hidden" name="userId" value="${sessionScope.currentUser.id}">
            <c:choose>
                <c:when test="${sessionScope.currentUser.role == 'COURIER'}">
                    <label class="form-label">${rating}: </label>
                    <input class="login-form-text" style="width: 250px"
                           name="rating"
                           pattern="^[0-5][.][0-9]+$"
                           title="0.0 - 5.0"
                           value="${sessionScope.currentUser.rating}">
                    <input type="submit" value="${changeRating}" class="join-us-button" style="width: 170px;">
                </c:when>
            </c:choose>
        </form>
        <br>
        <div class="horizontal-button-container">
            <form>
                <input type="button" value="${back}" class="join-us-button" onclick="history.back()">
            </form>
        </div>
        <div class="login-form-message">
            <c:choose>
                <c:when test="${not empty sessionScope.userExist}">
                    ${userExist}
                    <c:remove var="userExist" scope="session"/>
                </c:when>
            </c:choose>
        </div>
    </div>
    <c:if test="${sessionScope.user.role != 'ADMIN'}">
        <jsp:forward page="/jsp/error/illegal-access-error.jsp"/>
    </c:if>
</main>
<footer>
    <jsp:include page="/jsp/footer.jsp"/>
</footer>
</body>
</html>
