<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <fmt:setLocale value="${sessionScope.local}"/>
    <fmt:setBundle basename="locale.locale" var="locale"/>

    <fmt:message bundle="${locale}" key="locale.message.welcome" var="welcome"/>
    <fmt:message bundle="${locale}" key="locale.customer.button.personalArea" var="personalArea"/>
    <fmt:message bundle="${locale}" key="locale.courier.button.takeOrder" var="takeOrder"/>
    <fmt:message bundle="${locale}" key="locale.courier.button.completeOrder" var="completeOrder"/>
    <fmt:message bundle="${locale}" key="locale.courier.button.completedOrder" var="completedOrder"/>
    <fmt:message bundle="${locale}" key="locale.customer.button.newOrder" var="newOrder"/>
    <fmt:message bundle="${locale}" key="locale.customer.button.rates" var="rates"/>
    <fmt:message bundle="${locale}" key="locale.customer.button.myDelivery" var="myDelivery"/>

    <link rel="stylesheet" href="../../css/style.css">
    <link rel="SHORTCUT ICON" href="../../assets/favicon.png" type="image/png">
    <title>Welcome</title>
</head>
<body>
<header>
    <jsp:include page="/jsp/header.jsp"/>
</header>
<main class="main-form">
    <div>
        <br>
        <p>${welcome}, ${sessionScope.user.login}</p>
    </div>
    <div class="navigation-bar">
        <form action="courier-area">
            <input type="submit" value="${personalArea}" class="common-button">
        </form>
        <form action="controller" method="GET">
            <input type="hidden" name="command" value="show_available_order_command">
            <input type="submit" value="${takeOrder}" class="common-button">
        </form>
        <form action="controller" method="GET">
            <input type="hidden" name="command" value="show_processing_order_command">
            <input type="submit" value="${completeOrder}" class="common-button">
        </form>
        <form action="controller" method="GET">
            <input type="hidden" name="command" value="show_completed_order_command">
            <input type="submit" value="${completedOrder}" class="common-button">
        </form>
    </div>
    <div class="image-box">
        <img src="../../assets/home-background.png" alt="#" width="850" height="400">
    </div>
    <c:if test="${sessionScope.user.role != 'COURIER'}">
        <jsp:forward page="/jsp/error/illegal-access-error.jsp"/>
    </c:if>
</main>
<footer>
    <jsp:include page="/jsp/footer.jsp"/>
</footer>
</body>
</html>
