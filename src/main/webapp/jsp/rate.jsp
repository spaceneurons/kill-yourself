<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <fmt:setLocale value="${sessionScope.local}"/>
    <fmt:setBundle basename="locale.locale" var="locale"/>

    <fmt:message bundle="${locale}" key="locale.admin.label.transport" var="transport"/>
    <fmt:message bundle="${locale}" key="locale.customer.text.express" var="express"/>
    <fmt:message bundle="${locale}" key="locale.customer.text.regular" var="regular"/>
    <fmt:message bundle="${locale}" key="locale.user.text.english" var="truck"/>
    <fmt:message bundle="${locale}" key="locale.user.text.french" var="car"/>
    <fmt:message bundle="${locale}" key="locale.user.text.german" var="withoutTransport"/>
    <fmt:message bundle="${locale}" key="locale.user.button.personalRoom" var="personalRoom"/>
    <fmt:message bundle="${locale}" key="locale.customer.button.rates" var="rates"/>

    <link rel="stylesheet" href="../css/style.css">
    <link rel="SHORTCUT ICON" href="../assets/favicon.png" type="image/png">
    <title>Rates</title>
</head>
<body>
<header>
    <jsp:include page="/jsp/header.jsp"/>
</header>
<main class="main-form">
    <br>
    <h2>${rates}</h2>
    <div class="table-container-head">
        <table class="head-table">
            <tr>
                <th>${transport}</th>
                <th>${regular}</th>
                <th>${express}</th>
            </tr>
        </table>
    </div>
    <div class="table-container-body">
        <table class="body-table">
            <tr>
                <td>${truck}</td>
                <td>30 BYN</td>
                <td>45 BYN</td>
            </tr>
            <tr>
                <td>${car}</td>
                <td>40 BYN</td>
                <td>60 BYN</td>
            </tr>
            <tr>
                <td>${withoutTransport}</td>
                <td>50 BYN</td>
                <td>75 BYN</td>
            </tr>
        </table>
    </div>
    <div class="horizontal-button-container">
        <form action="customer-main">
            <input class="join-us-button" type="submit" value="${personalRoom}">
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
