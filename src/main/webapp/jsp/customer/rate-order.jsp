<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <fmt:setLocale value="${sessionScope.local}"/>
    <fmt:setBundle basename="locale.locale" var="locale"/>

    <fmt:message bundle="${locale}" key="locale.customer.text.rateDelivery" var="rateDelivery"/>
    <fmt:message bundle="${locale}" key="locale.customer.table.orderId" var="orderId"/>
    <fmt:message bundle="${locale}" key="locale.customer.table.courierName" var="courierName"/>
    <fmt:message bundle="${locale}" key="locale.customer.table.price" var="price"/>
    <fmt:message bundle="${locale}" key="locale.customer.table.status" var="status"/>
    <fmt:message bundle="${locale}" key="locale.customer.table.distance" var="distance"/>
    <fmt:message bundle="${locale}" key="locale.customer.table.rating" var="rating"/>
    <fmt:message bundle="${locale}" key="locale.customer.table.transport" var="transport"/>
    <fmt:message bundle="${locale}" key="locale.customer.label.subject" var="subject"/>
    <fmt:message bundle="${locale}" key="locale.user.button.personalRoom" var="personalRoom"/>
    <fmt:message bundle="${locale}" key="locale.user.text.done" var="doneStatus"/>
    <fmt:message bundle="${locale}" key="locale.customer.text.express" var="express"/>
    <fmt:message bundle="${locale}" key="locale.customer.text.regular" var="regular"/>
    <fmt:message bundle="${locale}" key="locale.customer.button.refresh" var="refresh"/>

    <link rel="stylesheet" href="../../css/style.css">
    <link rel="SHORTCUT ICON" href="../../assets/favicon.png" type="image/png">
    <title>Rate delivery</title>
</head>
<body>
<header>
    <jsp:include page="/jsp/header.jsp"/>
</header>
<main class="main-form">
    <br>
    <h2>${rateDelivery}</h2>
    <div>
        <div class="table-container-head">
            <table class="head-table">
                <tr>
                    <th>${orderId}</th>
                    <th>${subject}</th>
                    <th>${courierName}</th>
                    <th>${price}, BYN</th>
                    <th>${distance}</th>
                    <th>${rating}</th>
                    <th>${status}</th>
                </tr>
            </table>
        </div>
        <div class="table-current-container-body">
            <table class="body-table">
                <tr>
                    <td>${sessionScope.order.orderId}</td>
                    <td>${sessionScope.order.subject}</td>
                    <td>${sessionScope.order.user.login}</td>
                    <td>${sessionScope.order.totalPrice}</td>
                    <td>${sessionScope.order.distance}</td>
                    <c:choose>
                        <c:when test="${sessionScope.order.rate = true}">
                            <td>${express}</td>
                        </c:when>
                        <c:otherwise>
                            <td>${regular}</td>
                        </c:otherwise>
                    </c:choose>
                    <c:choose>
                        <c:when test="${sessionScope.order.status == 'DONE'}">
                            <td>${doneStatus}</td>
                        </c:when>
                    </c:choose>
                </tr>
            </table>
        </div>
    </div>
    <div class="logIn-form-box-3">
        <form action="controller" name="refreshOrder" method="POST" class="login-form">
            <span class="form-label">${rating}:</span>
            <select class=form-dropdown name="rate">
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </select>
            <input type="hidden" name="command" value="confirm_rate_command">
            <input type="submit" value="${rateDelivery}" class="login-form-button">
        </form>
        <form action="customer-main" class="adv-button-box">
            <input class="login-form-button" type="submit" value="${personalRoom}">
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
