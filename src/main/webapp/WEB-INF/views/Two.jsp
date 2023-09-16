<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>pos화면</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <!-- iamport.payment.js -->
    <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>

    <style>
        @font-face {
            font-family: "juaFont";
            src: url("fonts/BMJUA_ttf.ttf");
        }

        * {
            font-family: "juaFont";
        }

        h1 {
            display: inline;
            font-size: 30px;
        }

        .pos1 {
            height: 650px;
            font-size: 30px;
            overflow: auto;
        }

        .pos2 {
            height: 160px;
        }

        .input-group-addon,
        .form-control,
        .allB {
            font-size: 30px;
        }

        .mar {
            margin: 25px;
        }

        div.col4,
        div.col8 {
            border: 1px azure;
            box-shadow: 0px 0px 10px 10px skyblue;
        }

        .info {
            position: relative;
            width: 230px;
            margin: 0 3px 6px;
            float: left;
            height: 300px;
            background-color: #fff;
            box-shadow: 0 1px 0 0 rgba(0, 0, 0, .08);
            cursor: pointer;
            text-align: center;
        }
    </style>
</head>

<body>
<div class="container-fluid">
    <div class="row mar">
        <div class="col-lg-4 col4">
            <div class="pos1">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>메뉴명</th>
                        <th>가격</th>
                        <th>수량</th>
                        <th>소계</th>
                    </tr>
                    </thead>
                    <tbody id="cartTable" class="cartTable">
                    </tbody>
                </table>
                <h4 id='total'></h4>
            </div>

            <div class="pos2">
                <div style="padding-top: 30px;">
                    <div class="input-group">
                        <span class="input-group-addon" id="totalPrice" style="height: 45px;">총 금액</span>
                        <input id="totalPriceInput" type="text" class="form-control" name="totalPriceInput" placeholder="0"
                               style="height: 45px;">
                    </div>
                    <button type="button" class="btn btn-primary btn-block allB" id="orderBtn">주문하기<i class="fas fa-comment-dollar"></i></button>
                </div>
            </div>
        </div>

        <div class="col-lg-8 col8">
            <div class="p pos1">
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#cafe">커피</a>
                    </li>
                    <li><a data-toggle="tab" href="#tea">차/음료</a></li>
                    <li><a data-toggle="tab" href="#dessert">디저트</a></li>
                    <li><a data-toggle="tab" href="#etc">기타</a></li>
                </ul>

                <div class="tab-content">
                    <div id="cafe" class="tab-pane fade in active">
                    </div>
                    <div id="tea" class="tab-pane fade">
                    </div>
                    <div id="dessert" class="tab-pane fade">
                    </div>
                    <div id="etc" class="tab-pane fade">
                    </div>
                </div>
            </div>
            <div class="p pos2" style="text-align: center; margin: 0;">
                <div style="padding-top: 65px;">
                    <i a href="#" class="far fa-caret-square-down" style="font-size:45px; color:skyblue;" id="down"></i>
                    <h1 style="color:skyblue;"> 수량 </h1>
                    <i a href="#" class="far fa-caret-square-up" style="font-size:45px; color:skyblue;" id="up"></i>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
<script src="/js/Two.js"></script>
</html>