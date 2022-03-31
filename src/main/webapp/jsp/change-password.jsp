<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <fmt:setLocale value="${sessionScope.local}"/>
    <fmt:setBundle basename="locale.locale" var="locale"/>

    <fmt:message bundle="${locale}" key="locale.customer.label.ifYouWantChangePass" var="ifYouWantChangePass"/>
    <fmt:message bundle="${locale}" key="locale.customer.label.oldPass" var="oldPass"/>
    <fmt:message bundle="${locale}" key="locale.customer.label.newPass" var="newPass"/>
    <fmt:message bundle="${locale}" key="locale.customer.label.newPassAgain" var="newPassAgain"/>
    <fmt:message bundle="${locale}" key="locale.customer.button.changePass" var="changePass"/>
    <fmt:message bundle="${locale}" key="locale.message.wrongOldPassword" var="wrongOldPassword"/>
    <fmt:message bundle="${locale}" key="locale.message.changedPassword" var="changedPassword"/>
    <fmt:message bundle="${locale}" key="locale.message.passwordsMustNotMatch" var="passwordsMustNotMatch"/>
    <fmt:message bundle="${locale}" key="locale.message.passwordDoesNotMatch" var="passwordDoesNotMatch"/>
    <fmt:message bundle="${locale}" key="locale.user.placeholder.enterYourPassword" var="enterYourPassword"/>
    <fmt:message bundle="${locale}" key="locale.user.placeholder.confirmYourPassword" var="confirmYourPassword"/>
    <fmt:message bundle="${locale}" key="locale.user.title.loginRegex" var="loginRegex"/>
    <fmt:message bundle="${locale}" key="locale.user.title.passwordRegex" var="passwordRegex"/>
    <fmt:message bundle="${locale}" key="locale.user.button.personalRoom" var="personalRoom"/>

    <link rel="stylesheet" href="../css/style.css">
    <link rel="SHORTCUT ICON" href="../assets/favicon.png" type="image/png">
    <script src="../js/main.js"></script>
    <title>Change password</title>
</head>
<body>
<header>
    <jsp:include page="/jsp/header.jsp"/>
</header>
<main class="main-form">
    <div class="change-password-form-box">
        <form action="controller" name="changePasswordForm" method="POST">
            <input type="hidden" name="command" value="change_password"/>
            <div>
                <br>
                <h2>${ifYouWantChangePass}</h2>
                <br>
            </div>
            <div class="change-password-form-box">
                <span class="user-area-label">${oldPass} *</span>
                <input class="login-form-password"
                       type="password"
                       name="oldPassword"
                       maxlength="32"
                       pattern="^[\w_]{4,32}$"
                       title="${passwordRegex}"
                       value=""
                       placeholder="${enterYourPassword}"
                       required/>
                <span class="user-area-label">${newPass} *</span>
                <input class="login-form-password"
                       id="pass1"
                       type="password"
                       name="newPassword"
                       maxlength="32"
                       pattern="^[\w_]{4,32}$"
                       title="${passwordRegex}"
                       value=""
                       placeholder="${enterYourPassword}"
                       required/>
                <span class="user-area-label">${newPassAgain} *</span>
                <input class="login-form-password"
                       id="pass2"
                       type="password"
                       name="confirmPassword"
                       maxlength="32"
                       pattern="^[\w_]{4,32}$"
                       title="${passwordRegex}"
                       value=""
                       onkeyup="checkPass()"
                       placeholder="${confirmYourPassword}"
                       required/>
                <input type="submit" value="${changePass}" class="login-form-button">
            </div>
        </form>
        <div class="change-password-form-box">
            <c:choose>
                <c:when test="${sessionScope.user.role == 'CUSTOMER'}">
                    <form action="customer-main">
                        <input type="submit" value="${personalRoom}" class="common-button">
                    </form>
                </c:when>
                <c:when test="${sessionScope.user.role == 'COURIER'}">
                    <form action="courier-main">
                        <input type="submit" value="${personalRoom}" class="common-button">
                    </form>
                </c:when>
                <c:otherwise>
                    <form action="admin-main">
                        <input type="submit" value="${personalRoom}" class="common-button">
                    </form>
                </c:otherwise>
            </c:choose>
        </div>
        <div class="login-form-message">
            <c:choose>
                <c:when test="${not empty sessionScope.wrongData}">
                    ${wrongOldPassword}
                    <c:remove var="wrongData" scope="session"/>
                </c:when>
            </c:choose>
            <c:choose>
                <c:when test="${not empty sessionScope.message}">
                    ${changedPassword}
                    <c:remove var="message" scope="session"/>
                </c:when>
            </c:choose>
            <c:choose>
                <c:when test="${not empty sessionScope.passwordDoesNotMatch}">
                    ${passwordDoesNotMatch}
                    <c:remove var="passwordDoesNotMatch" scope="session"/>
                </c:when>
            </c:choose>
            <c:choose>
                <c:when test="${not empty sessionScope.passwordsEquals}">
                    ${passwordsMustNotMatch}
                    <c:remove var="passwordsEquals" scope="session"/>
                </c:when>
            </c:choose>
        </div>
    </div>
    <c:if test="${empty sessionScope.user.role}">
        <jsp:forward page="/jsp/error/illegal-access-error.jsp"/>
    </c:if>
</main>
<footer>
    <jsp:include page="/jsp/footer.jsp"/>
</footer>
</body>
</html>
