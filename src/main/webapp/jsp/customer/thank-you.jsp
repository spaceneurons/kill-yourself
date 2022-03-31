<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <fmt:setLocale value="${sessionScope.local}"/>
    <fmt:setBundle basename="locale.locale" var="locale"/>

    <fmt:message bundle="${locale}" key="locale.user.button.personalRoom" var="personalRoom"/>
    <fmt:message bundle="${locale}" key="locale.user.text.courierRating" var="courierRating"/>
    <fmt:message bundle="${locale}" key="locale.user.text.voteCounted" var="voteCounted"/>

    <link rel="stylesheet" href="../../css/style.css">
    <link rel="SHORTCUT ICON" href="../../assets/favicon.png" type="image/png">
    <title>Rating</title>
</head>
<body>
<header>
    <jsp:include page="/jsp/header.jsp"/>
</header>
<main class="main-form">
    <div class="logIn-form-box">
        <br>
        <h2>${voteCounted}</h2>
        <br>
        <h2>${courierRating} ${sessionScope.login}: ${sessionScope.userRating}</h2>
        <br>
        <br>
        <form action="customer-main" class="logIn-form-box-2">
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
