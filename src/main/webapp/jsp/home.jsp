<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <fmt:setLocale value="${sessionScope.local}"/>
    <fmt:setBundle basename="locale.locale" var="locale"/>

    <fmt:message bundle="${locale}" key="locale.user.label.welcomeText" var="welcomeText"/>
    <fmt:message bundle="${locale}" key="locale.user.button.joinAsCourier" var="joinAsCourier"/>
    <fmt:message bundle="${locale}" key="locale.user.button.joinAsCustomer" var="joinAsCustomer"/>
    <fmt:message bundle="${locale}" key="locale.user.button.personalRoom" var="personalRoom"/>

    <link rel="stylesheet" href="/css/style.css">
    <link rel="SHORTCUT ICON" href="../assets/favicon.png" type="image/png">
    <title>Preply</title>
</head>
<body>
<header>
    <jsp:include page="/jsp/header-home.jsp"/>
</header>
<main class="main-form">
    <div class="welcome-box">
        <span class="welcome-text">${welcomeText}</span>
        <br/>
        <br/>
        <c:choose>
            <c:when test="${empty sessionScope.user.role}">
                <div class="horizontal-button-container">
                    <form action="customer-register">
                        <input class="join-us-button" type="submit" value="${joinAsCustomer}">
                    </form>
                    <form action="courier-register">
                        <input class="join-us-button" type="submit" value="${joinAsCourier}">
                    </form>
                </div>
            </c:when>
            <c:when test="${sessionScope.user.role == 'CUSTOMER'}">
                <form action="customer-main">
                    <input class="join-us-button" type="submit" value="${personalRoom}">
                </form>
            </c:when>
            <c:when test="${sessionScope.user.role == 'COURIER'}">
                <form action="courier-main">
                    <input class="join-us-button" type="submit" value="${personalRoom}">
                </form>
            </c:when>
            <c:otherwise>
                <form action="admin-main">
                    <input class="join-us-button" type="submit" value="${personalRoom}">
                </form>
            </c:otherwise>
        </c:choose>
    </div>
</main>
<footer>
    <jsp:include page="/jsp/footer.jsp"/>
</footer>
</body>
</html>
