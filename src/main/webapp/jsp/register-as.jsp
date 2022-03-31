<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <fmt:setLocale value="${sessionScope.local}"/>
    <fmt:setBundle basename="locale.locale" var="locale"/>

    <fmt:message bundle="${locale}" key="locale.user.text.howWantRegister" var="howWantRegister"/>
    <fmt:message bundle="${locale}" key="locale.user.button.asCustomer" var="asCustomer"/>
    <fmt:message bundle="${locale}" key="locale.user.button.asCourier" var="asCourier"/>

    <link rel="stylesheet" href="../css/style.css">
    <link rel="SHORTCUT ICON" href="../assets/favicon.png" type="image/png">
    <title>Register As</title>
</head>
<body>
<header>
    <jsp:include page="/jsp/header.jsp"/>
</header>
<main class="main-form">
    <div>
        <br/>
        <h2>${howWantRegister}</h2>
    </div>
    <div class="logIn-form-box horizontal-button-container">
        <form action="customer-register">
            <input class="join-us-button" type="submit" value="${asCustomer}">
        </form>
        <form action="courier-register">
            <input class="join-us-button" type="submit" value="${asCourier}">
        </form>
    </div>
</main>
<footer>
    <jsp:include page="/jsp/footer.jsp"/>
</footer>
</body>
</html>
