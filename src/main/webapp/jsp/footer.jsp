<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="ctg" uri="exchangeTags" %>

<html>
<head>
    <fmt:setLocale value="${sessionScope.local}"/>
    <fmt:setBundle basename="locale.locale" var="locale"/>

    <fmt:message bundle="${locale}" key="locale.tag.info.allRightsReserved" var="allRightsReserved"/>
    <title>Footer</title>
</head>
<body>
<div class="footer">
    <span class="footer-text">
        ${allRightsReserved} <ctg:footMessage/>
    </span>
</div>
</body>
</html>
