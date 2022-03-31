<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <fmt:setLocale value="${sessionScope.local}"/>
    <fmt:setBundle basename="locale.locale" var="locale"/>

    <fmt:message bundle="${locale}" key="locale.customer.text.myDelivery" var="myDelivery"/>
    <fmt:message bundle="${locale}" key="locale.customer.table.orderId" var="orderId"/>
    <fmt:message bundle="${locale}" key="locale.customer.table.courierName" var="courierName"/>
    <fmt:message bundle="${locale}" key="locale.customer.table.price" var="price"/>
    <fmt:message bundle="${locale}" key="locale.customer.table.status" var="status"/>
    <fmt:message bundle="${locale}" key="locale.customer.label.subject" var="subject"/>
    <fmt:message bundle="${locale}" key="locale.user.button.personalRoom" var="personalRoom"/>
    <fmt:message bundle="${locale}" key="locale.user.text.new" var="newStatus"/>
    <fmt:message bundle="${locale}" key="locale.user.text.rated" var="rated"/>
    <fmt:message bundle="${locale}" key="locale.user.text.noDeliveryYet" var="noDeliveryYet"/>
    <fmt:message bundle="${locale}" key="locale.user.text.processing" var="processing"/>
    <fmt:message bundle="${locale}" key="locale.customer.button.refresh" var="refresh"/>
    <fmt:message bundle="${locale}" key="locale.customer.button.rateCompletedOrders" var="rateCompletedOrders"/>
    <fmt:message bundle="${locale}" key="locale.customer.button.newOrder" var="newOrder"/>

    <link rel="stylesheet" href="../../css/style.css">
    <link rel="SHORTCUT ICON" href="../../assets/favicon.png" type="image/png">
    <title>My delivery</title>
</head>
<body>
<header>
    <jsp:include page="/jsp/header.jsp"/>
</header>
<main class="main-form">
    <br>
    <h2>${myDelivery}</h2>
    <c:choose>
        <c:when test="${not empty sessionScope.orders}">
            <div class="table-container-head">
                <table class="head-table">
                    <tr>
                        <th>${orderId}</th>
                        <th>${subject}</th>
                        <th>${courierName}</th>
                        <th>${price}, BYN</th>
                        <th>${status}</th>
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
                            <td>${order.totalPrice}</td>
                            <c:choose>
                                <c:when test="${order.status == 'NEW'}">
                                    <td>${newStatus}</td>
                                </c:when>
                                <c:when test="${order.status == 'RATED'}">
                                    <td>${rated}</td>
                                </c:when>
                                <c:otherwise>
                                    <td>${processing}</td>
                                </c:otherwise>
                            </c:choose>
                        </tr>
                    </c:forEach>
                </table>
            </div>
            <div class="horizontal-button-container">
                <div>
                    <form action="controller" name="refreshOrder" method="GET">
                        <input type="hidden" name="command" value="show_active_order_command">
                        <input type="submit" value="${refresh}" class="join-us-button">
                    </form>
                </div>
                <div>
                    <form action="customer-main">
                        <input class="join-us-button" type="submit" value="${personalRoom}">
                    </form>
                </div>
                <div>
                    <form action="controller" name="doneOrder" method="GET">
                        <input type="hidden" name="command" value="show_done_order_command">
                        <input type="submit" value="${rateCompletedOrders}" class="join-us-button">
                    </form>
                </div>
            </div>
        </c:when>
        <c:otherwise>
            <div class="empty-delivery-text">
                <div style="text-align: center; color: #ffebcd;font-size: 23px; margin: 120px 0 200px;">
                        ${noDeliveryYet}</div>
            </div>
            <div class="horizontal-button-container">
                <form action="customer-main">
                    <input class="join-us-button" type="submit" value="${personalRoom}">
                </form>
                <form action="new-order">
                    <input class="join-us-button" type="submit" value="${newOrder}">
                </form>
                <form action="controller" name="doneOrder" method="GET">
                    <input type="hidden" name="command" value="show_done_order_command">
                    <input type="submit" value="${rateCompletedOrders}" class="join-us-button">
                </form>
            </div>
        </c:otherwise>
    </c:choose>
    <c:if test="${sessionScope.user.role != 'CUSTOMER'}">
        <jsp:forward page="/jsp/error/illegal-access-error.jsp"/>
    </c:if>
</main>
<footer>
    <jsp:include page="/jsp/footer.jsp"/>
</footer>
</body>
</html>
