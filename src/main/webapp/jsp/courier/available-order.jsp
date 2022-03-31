<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <fmt:setLocale value="${sessionScope.local}"/>
    <fmt:setBundle basename="locale.locale" var="locale"/>

    <fmt:message bundle="${locale}" key="locale.courier.text.availableOrders" var="availableOrders"/>
    <fmt:message bundle="${locale}" key="locale.customer.table.orderId" var="orderId"/>
    <fmt:message bundle="${locale}" key="locale.customer.table.courierName" var="courierName"/>
    <fmt:message bundle="${locale}" key="locale.customer.table.customerName" var="customerName"/>
    <fmt:message bundle="${locale}" key="locale.customer.table.price" var="price"/>
    <fmt:message bundle="${locale}" key="locale.customer.table.status" var="status"/>
    <fmt:message bundle="${locale}" key="locale.customer.label.subject" var="subject"/>
    <fmt:message bundle="${locale}" key="locale.customer.table.rating" var="rating"/>
    <fmt:message bundle="${locale}" key="locale.customer.label.take" var="take"/>
    <fmt:message bundle="${locale}" key="locale.user.label.distance" var="distance"/>
    <fmt:message bundle="${locale}" key="locale.user.button.back" var="back"/>
    <fmt:message bundle="${locale}" key="locale.customer.text.express" var="express"/>
    <fmt:message bundle="${locale}" key="locale.customer.text.regular" var="regular"/>

    <link rel="stylesheet" href="../../css/style.css">
    <link rel="SHORTCUT ICON" href="../../assets/favicon.png" type="image/png">
    <title>Available orders</title>
</head>
<body>
<header>
    <jsp:include page="/jsp/header.jsp"/>
</header>
<main class="main-form">
    <br>
    <h2>${availableOrders}</h2>
    <div class="table-container-head">
        <table class="head-table">
            <tr>
                <th>${orderId}</th>
                <th>${subject}</th>
                <th>${customerName}</th>
                <th>${distance}</th>
                <th>${price}, BYN</th>
                <th>${rating}</th>
                <th>${take}</th>
            </tr>
        </table>
    </div>
    <div class="table-container-body">
        <table class="body-table">
            <c:forEach var="order" items="${sessionScope.orders}" varStatus="status">
                <tr>
                    <td>${order.orderId}</td>
                    <td>${order.subject}</td>
                    <td>${order.user.login}</td>
                    <td>${order.distance}</td>
                    <td>${order.totalPrice}</td>
                    <c:if test="${order.rate == true}">
                        <td>${express}</td>
                    </c:if>
                    <c:if test="${order.rate == false}">
                        <td>${regular}</td>
                    </c:if>
                    <td>
                        <form action="controller" method="POST">
                            <input type="hidden" name="command" value="take_order_command">
                            <input type="hidden" name="orderId" value="${order.orderId}">
                            <input type="submit" value="V" class="lang-button">
                        </form>
                    </td>
                </tr>
            </c:forEach>
        </table>
    </div>
    <form class="center-button-container">
        <input type="button" value="${back}" class="join-us-button" onclick="history.back()">
    </form>
    <c:if test="${sessionScope.user.role != 'COURIER'}">
        <jsp:forward page="/jsp/error/illegal-access-error.jsp"/>
    </c:if>
</main>
<footer>
    <jsp:include page="/jsp/footer.jsp"/>
</footer>
</body>
</html>
