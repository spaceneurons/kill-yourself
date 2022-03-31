<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <fmt:setLocale value="${sessionScope.local}"/>
    <fmt:setBundle basename="locale.locale" var="locale"/>

    <fmt:message bundle="${locale}" key="locale.message.welcome" var="welcome"/>
    <fmt:message bundle="${locale}" key="locale.customer.button.personalArea" var="personalArea"/>
    <fmt:message bundle="${locale}" key="locale.user.button.showUserList" var="showUserList"/>

    <link rel="stylesheet" href="../../css/style.css">
    <link rel="SHORTCUT ICON" href="../../assets/favicon.png" type="image/png">
    <title>Hi daddy!</title>
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
        <form action="admin-area">
            <input type="submit" value="${personalArea}" class="common-button">
        </form>
        <form action="controller" method="GET" name="showUserList">
            <input type="hidden" name="command" value="show_user_list_command">
            <input type="submit" value="${showUserList}" class="common-button">
        </form>
    </div>
    <div class="image-box-admin">
        <img src="../../assets/home-background.png" alt="#" width="850" height="400">
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
