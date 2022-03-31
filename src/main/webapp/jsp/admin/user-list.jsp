<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <fmt:setLocale value="${sessionScope.local}"/>
    <fmt:setBundle basename="locale.locale" var="locale"/>

    <fmt:message bundle="${locale}" key="locale.user.text.listOfUsers" var="listOfUsers"/>
    <fmt:message bundle="${locale}" key="locale.user.text.english" var="truck"/>
    <fmt:message bundle="${locale}" key="locale.user.text.french" var="car"/>
    <fmt:message bundle="${locale}" key="locale.user.text.german" var="withoutTransport"/>
    <fmt:message bundle="${locale}" key="locale.user.button.personalRoom" var="personalRoom"/>
    <fmt:message bundle="${locale}" key="locale.admin.label.userId" var="userId"/>
    <fmt:message bundle="${locale}" key="locale.admin.label.login" var="userLogin"/>
    <fmt:message bundle="${locale}" key="locale.admin.label.userRole" var="userRole"/>
    <fmt:message bundle="${locale}" key="locale.admin.label.transport" var="userTransport"/>
    <fmt:message bundle="${locale}" key="locale.admin.label.rating" var="userRating"/>
    <fmt:message bundle="${locale}" key="locale.admin.text.courier" var="courier"/>
    <fmt:message bundle="${locale}" key="locale.admin.text.customer" var="customer"/>
    <fmt:message bundle="${locale}" key="locale.admin.button.edit" var="edit"/>

    <link rel="stylesheet" href="../../css/style.css">
    <link rel="SHORTCUT ICON" href="../../assets/favicon.png" type="image/png">
    <title>List of users</title>
</head>
<body>
<header>
    <jsp:include page="/jsp/header.jsp"/>
</header>
<main class="main-form">
    <br>
    <h2>${listOfUsers}</h2>
    <c:choose>
        <c:when test="${sessionScope.user.role != 'ADMIN'}">
            <div class="table-container-head">
                <table class="head-table">
                    <tr>
                        <th>${userLogin}</th>
                        <th>${userRole}</th>
                        <th>${userTransport}</th>
                        <th>${userRating}</th>
                    </tr>
                </table>
            </div>
            <div class="table-container-body">
                <table class="body-table">
                    <c:forEach var="user" items="${sessionScope.users}" varStatus="status">
                        <c:if test="${user.role == 'COURIER'}">
                            <tr>
                                <td>${user.login}</td>
                                <c:choose>
                                    <c:when test="${user.role == 'COURIER'}">
                                        <td>${courier}</td>
                                    </c:when>
                                    <c:otherwise>
                                        <td>${customer}</td>
                                    </c:otherwise>
                                </c:choose>
                                <c:choose>
                                    <c:when test="${user.transport == 'CAR'}">
                                        <td>${car}</td>
                                    </c:when>
                                    <c:when test="${user.transport == 'TRUCK'}">
                                        <td>${truck}</td>
                                    </c:when>
                                    <c:when test="${user.transport == 'NONE'}">
                                        <td>${withoutTransport}</td>
                                    </c:when>
                                    <c:otherwise>
                                        <td></td>
                                    </c:otherwise>
                                </c:choose>
                                <td>${user.rating}</td>
                            </tr>
                        </c:if>
                    </c:forEach>
                </table>
            </div>
            <form action="customer-main" class="center-button-container">
                <input class="join-us-button" type="submit" value="${personalRoom}">
            </form>
        </c:when>
        <c:otherwise>
            <div class="table-container-head">
                <table class="head-table">
                    <tr>
                        <th>${userId}</th>
                        <th>${userLogin}</th>
                        <th>${userRole}</th>
                        <th>${userTransport}</th>
                        <th>${userRating}</th>
                        <th>${edit}</th>
                    </tr>
                </table>
            </div>
            <div class="table-container-body">
                <table class="body-table">
                    <c:forEach var="user" items="${sessionScope.users}" varStatus="status">
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.login}</td>
                            <c:choose>
                                <c:when test="${user.role == 'COURIER'}">
                                    <td>${courier}</td>
                                </c:when>
                                <c:otherwise>
                                    <td>${customer}</td>
                                </c:otherwise>
                            </c:choose>
                            <c:choose>
                                <c:when test="${user.transport == 'CAR'}">
                                    <td>${car}</td>
                                </c:when>
                                <c:when test="${user.transport == 'TRUCK'}">
                                    <td>${truck}</td>
                                </c:when>
                                <c:when test="${user.transport == 'NONE'}">
                                    <td>${withoutTransport}</td>
                                </c:when>
                                <c:otherwise>
                                    <td></td>
                                </c:otherwise>
                            </c:choose>
                            <td>${user.rating}</td>
                            <td>
                                <form action="controller" method="POST">
                                    <input type="hidden" name="command" value="edit_user_command">
                                    <input type="hidden" name="userId" value="${user.id}">
                                    <input type="submit" value="V" class="lang-button">
                                </form>
                            </td>
                        </tr>
                    </c:forEach>
                </table>
            </div>
            <form action="admin-main" class="center-button-container">
                <input class="join-us-button" type="submit" value="${personalRoom}">
            </form>
        </c:otherwise>
    </c:choose>
</main>
<footer>
    <jsp:include page="/jsp/footer.jsp"/>
</footer>
</body>
</html>
