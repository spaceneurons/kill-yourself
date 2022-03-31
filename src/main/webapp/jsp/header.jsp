<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <fmt:setLocale value="${sessionScope.local}"/>
    <fmt:setBundle basename="locale.locale" var="locale"/>

    <fmt:message bundle="${locale}" key="locale.user.text.online" var="online"/>
    <fmt:message bundle="${locale}" key="locale.user.button.signIn" var="signIn"/>
    <fmt:message bundle="${locale}" key="locale.user.button.logout" var="logout"/>

    <link rel="stylesheet" href="../css/style.css">
    <title>Header</title>
</head>
<body>
<div class=header>
    <form action="controller">
        <input type="hidden" name="command" value="home"/>
        <div class="logo">
            <input type="image" src="../assets/logo.png" alt="#" width="380" height="130`">
        </div>
    </form>
    <div class="sign-box">
        <c:choose>
            <c:when test="${empty sessionScope.user}">
                <br>
                <form action="login">
                    <input class="signIn-button" type="submit" value="${signIn}">
                </form>
            </c:when>
            <c:otherwise>
                <span class="header-text">${sessionScope.user.login} ${online}</span>
                <form action="controller" method="post">
                    <input type="hidden" name="command" value="logout">
                    <input class="signIn-button" type="submit" value="${logout}">
                </form>
            </c:otherwise>
        </c:choose>
    </div>
</div>
</body>
</html>
