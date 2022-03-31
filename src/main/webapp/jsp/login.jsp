<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<html>
<head>
    <fmt:setLocale value="${sessionScope.local}"/>
    <fmt:setBundle basename="locale.locale" var="locale"/>

    <fmt:message bundle="${locale}" key="locale.user.text.enter" var="enter"/>
    <fmt:message bundle="${locale}" key="locale.message.wrongCredentials" var="wrongCredentials"/>
    <fmt:message bundle="${locale}" key="locale.message.requiredFields" var="requiredFields"/>
    <fmt:message bundle="${locale}" key="locale.user.label.login" var="login"/>
    <fmt:message bundle="${locale}" key="locale.user.label.password" var="password"/>
    <fmt:message bundle="${locale}" key="locale.user.label.signUp" var="signUp"/>
    <fmt:message bundle="${locale}" key="locale.user.button.log_in" var="log_in"/>
    <fmt:message bundle="${locale}" key="locale.user.placeholder.myUserNameIs" var="myUserNameIs"/>
    <fmt:message bundle="${locale}" key="locale.user.placeholder.enterYourPassword" var="enterYourPassword"/>
    <fmt:message bundle="${locale}" key="locale.user.title.loginRegex" var="loginRegex"/>
    <fmt:message bundle="${locale}" key="locale.user.title.passwordRegex" var="passwordRegex"/>

    <link rel="stylesheet" href="../css/style.css">
    <link rel="SHORTCUT ICON" href="../assets/favicon.png" type="image/png">
    <title>Login</title>
</head>
<body>
<header>
    <jsp:include page="/jsp/header.jsp"/>
</header>
<main class="main-form">
    <br/>
    <h2 style="margin-bottom: 35px">${enter}</h2>
    <div class="logIn-form-box">
        <form name="LoginForm" method="POST" action="controller" class="login-form">
            <input type="hidden" name="command" value="login"/>
            <span class="form-label">${login} *</span>
            <input class="login-form-text"
                   type="text"
                   name="login"
                   maxlength="32"
                   pattern="^[\w_]{4,16}$"
                   title="${loginRegex}"
                   value=""
                   placeholder="${myUserNameIs}"
                   required/>
            <span class="form-label">${password} *</span>
            <input class="login-form-password"
                   type="password"
                   name="password"
                   maxlength="32"
                   pattern="^[\w_]{4,32}$"
                   title="${passwordRegex}"
                   value=""
                   placeholder="${enterYourPassword}"
                   required/>
            <input type="submit" value="${log_in}" class="login-form-button"/>
            <div class="login-form-message">
                <c:choose>
                    <c:when test="${not empty sessionScope.wrongData}">
                        ${wrongCredentials}
                        <c:remove var="wrongData" scope="session"/>
                    </c:when>
                </c:choose>
                <c:choose>
                    <c:when test="${not empty sessionScope.emptyFields}">
                        ${requiredFields}
                        <c:remove var="emptyFields" scope="session"/>
                    </c:when>
                </c:choose>
            </div>
        </form>
        <form action="register-as" class="adv-button-box">
            <input type="submit" value="${signUp}" class="login-form-button"/>
        </form>
    </div>
    <c:if test="${not empty sessionScope.user.role}">
        <jsp:forward page="/jsp/error/illegal-access-error.jsp"/>
    </c:if>
</main>
<footer>
    <jsp:include page="/jsp/footer.jsp"/>
</footer>
</body>
</html>
