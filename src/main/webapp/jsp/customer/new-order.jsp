<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <fmt:setLocale value="${sessionScope.local}"/>
    <fmt:setBundle basename="locale.locale" var="locale"/>

    <fmt:message bundle="${locale}" key="locale.user.text.english" var="truck"/>
    <fmt:message bundle="${locale}" key="locale.user.text.french" var="car"/>
    <fmt:message bundle="${locale}" key="locale.user.text.german" var="withoutTransport"/>
    <fmt:message bundle="${locale}" key="locale.user.label.distance" var="distance"/>
    <fmt:message bundle="${locale}" key="locale.user.button.personalRoom" var="personalRoom"/>
    <fmt:message bundle="${locale}" key="locale.customer.text.newOrder" var="newOrder"/>
    <fmt:message bundle="${locale}" key="locale.customer.text.express" var="express"/>
    <fmt:message bundle="${locale}" key="locale.customer.text.regular" var="regular"/>
    <fmt:message bundle="${locale}" key="locale.customer.label.subjectOfTransportation" var="subjectOfTransportation"/>
    <fmt:message bundle="${locale}" key="locale.customer.label.transportForCargo" var="transportForCargo"/>
    <fmt:message bundle="${locale}" key="locale.customer.label.rate" var="rate"/>
    <fmt:message bundle="${locale}" key="locale.customer.button.next" var="next"/>

    <link rel="stylesheet" href="../../css/style.css">
    <link rel="SHORTCUT ICON" href="../../assets/favicon.png" type="image/png">
    <title>New Order</title>
</head>
<body>
<header>
    <jsp:include page="/jsp/header.jsp"/>
</header>
<main class="main-form">
    <br>
    <h2>${newOrder}</h2>
    <div class="logIn-form-box">
        <form action="controller" name="newOrder" method="POST">
            <div class="logIn-form-box-2">
                <span class="form-label">${subjectOfTransportation}</span>
                <input class="login-form-text"
                       type="text"
                       name="subject">
                <span class="form-label">${transportForCargo}</span>
                <select class=form-dropdown name="transport">
                    <option class="form-option" value="Truck">${truck}</option>
                    <option class="form-option" value="Car">${car}</option>
                    <option class="form-option" value="None">${withoutTransport}</option>
                </select>
                <br>
                <label class="form-label">
                    <input type="checkbox" name="rate" value="true">${rate}
                </label>
                <br>
                <span class="form-label">${distance} *</span>
                <input class="login-form-text"
                       type="number"
                       name="distance"
                       value=""
                       placeholder="Введите уровень владения языком (1-6)"
                       min="1"
                       max="6"
                       required>
                <input type="hidden" name="command" value="confirm_order_command"/>
                <input type="submit" value="${next}" class="login-form-button">
            </div>
        </form>
        <form action="customer-main" class="adv-button-box">
            <input type="submit" value="${personalRoom}" class="login-form-button">
        </form>
    </div>
    <c:if test="${sessionScope.user.role != 'CUSTOMER'}">
        <jsp:forward page="/jsp/error/illegal-access-error.jsp"/>
    </c:if>
</main>
<footer>
    <jsp:include page="/jsp/footer.jsp"/>
</footer>
</body>
</html>
