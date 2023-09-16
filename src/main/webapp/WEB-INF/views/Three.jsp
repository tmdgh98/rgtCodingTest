<%--
  Created by IntelliJ IDEA.
  User: owner
  Date: 2023-09-16
  Time: 오후 6:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Three</title>
    <style>
        .table {
            width: 320px;
            height: 480px;
            font-size: 36px;
            border: solid;
        }

        .title {
            height: 130px;
            text-align: center;
        }

        .main {
            height: 45px;
        }

        .main th {
            text-align: left;
            font-size: 20px;
        }

        .main td {
            padding-left: 20px;
            height: 40px;
            font-size: 20px;
            font-weight: 550;
        }

        .buttonTr td {
            text-align: center;
        }

        .buttonTr button {
            height: 95px;
            width: 130px;
            font-size: 20px;
            border: 5px solid;
            border-radius: 20px;
            font-weight: bold;
        }

        .red-btn {
            background-color: #FFFFFFFF;
            border: #FF0000FF;
            color: #FF0000FF;
        }

        .blue-btn {
            background-color: #FFFFFFFF;
            border: #0000FFFF;
            color: #0000FFFF;
        }
    </style>
</head>
<body>
<table class="table">
    <tr class="title">
        <th colspan="2">
            테스트매장
            <br>
            테스트
        </th>
    </tr>
    <tr class="main">
        <td>주문일</td>
        <th>2023-09-16</th>
    </tr>
    <tr class="main">
        <td>주문자</td>
        <th>홍길동</th>
    </tr>
    <tr class="main">
        <td>테이블번호</td>
        <th>5</th>
    </tr>
    <tr class="main">
        <td>주분번호</td>
        <th>0007</th>
    </tr>
    <tr class="buttonTr">
        <td colspan="2">
            <button class="red-btn">이전화면</button>
            <button class="blue-btn">확인</button>
        </td>
    </tr>

</table>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="/js/Three.js"></script>
</html>
