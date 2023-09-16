let amountId = null;

$(init)

function init() {
    makeEvent();
    makeMenu();
}

//이벤트 추가 여기다가 하기
function makeEvent() { //onclick이랑 같은 기능
    $('#down').on('click', downCount); //수량 down 버튼
    $('#up').on('click', upCount); //수량 up
    $('#orderBtn').on('click', save); //주문하기
    $('#cartTable').on('click', 'tr', amountID); //메뉴 눌러야 수량 선택 가능
}

//메뉴 화면에 띄우기
function makeMenu() {
    let menuList = {
        cafe     : [
            {no: 'no11', product_name: "아메리카노(HOT)", price: "2,000"}
            , {no: 'no12', product_name: "아메리카노(ICE)", price: "2,300"}
            , {no: 'no13', product_name: "카페라떼(HOT)", price: "3,400"}
            , {no: 'no14', product_name: "카푸치노", price: "4,000"}
        ]
        , tea    : [
            {no: 'no21', product_name: "레몬 에이드", price: "3,500"}
            , {no: 'no22', product_name: "밀크쉐이크", price: "4,500"}
            , {no: 'no23', product_name: "말차라떼", price: "4,500"}
            , {no: 'no24', product_name: "초코라떼", price: "5,000"}
        ]
        , dessert: [
            {no: 'no31', product_name: "초코 쿠키", price: "2,500"}
            , {no: 'no32', product_name: "아몬드 쿠키", price: "3,000"}
            , {no: 'no33', product_name: "초코 케익", price: "4,000"}
            , {no: 'no34', product_name: "딸기 케익", price: "4,500"}
        ]
        , etc    : [
            {no: 'no41', product_name: "생수", price: "2,000"}
            , {no: 'no42', product_name: "콜라", price: "2,500"}
            , {no: 'no43', product_name: "사이다", price: "2,500"}
            , {no: 'no44', product_name: "페리에", price: "4,000"}
        ]
    }

    for (let key in menuList) {
        let pdiv = document.querySelector("#" + key);
        for (let menuItem of menuList[key]) {
            let no = menuItem.no;
            let prductName = menuItem.product_name;
            let price = menuItem.price.replace(",", "");
            let html = "";
            html += `<div class="info" id="${no}" data-product-name="${prductName}" data-price="${price}" onclick="makeTable('${no}');">`;
            html += `<div class="img"><img src="https://image-proxy.sta1.com/_up/shop/logo/2019/06/1559710017170_mi.jpg"></div>`;
            html += `<h2 class="shop-name">${prductName}</h2>`;
            html += `<p>${price}</p>`;
            html += `</div>`;

            pdiv.innerHTML += html;
        }
    }


}

//메뉴클릭시 테이블에 추가
let number = 1;

function makeTable(no) {
    let totalPrice;
    let menuDiv = document.querySelector("#" + no);
    if ($('#cartTable').find('#' + no).length == 0) { //누른애가 없으면 넣는다
        let tr = $('<tr />').attr({id: no});
        tr.append($('<td />').html(number++)) //넘버 수정;
        tr.append($('<td />').html($(menuDiv).data('productName')));
        tr.append($('<td />').html($(menuDiv).data('price')));
        tr.append($('<td />').html(1)); //수량 수정
        tr.append($('<td />').html($(menuDiv).data('price')));
        $('#cartTable').append(tr);
        totalPrice = $(menuDiv).data('price');
    } else {
        //row.cells[2];
        let price = $('#cartTable').find('#' + no).find('td').eq(2).html();
        let count = $('#cartTable').find('#' + no).find('td').eq(3);
        let total = $('#cartTable').find('#' + no).find('td').eq(4);
        count.html(Number(count.html()) + 1);
        totalPrice = Number(price);
        total.html(Number(price) * Number(count.html()));
    }
    makeAmountId(no);
    total(totalPrice);
}

//총금액계산
let totaln = 0

function total(price) {
    totaln += Number(price);
    $('#totalPriceInput').val(totaln);
}

//수량 down
function downCount() {
    if ($('#' + amountId).val() == null) return;
    row = document.getElementById(amountId);
    let amountN = Number(row.cells[3].innerHTML) - 1; //cells[3] : 수량
    if (amountN <= 0) {
        row.remove();
        numbering();
    } else {
        row.cells[3].innerHTML = amountN;
    }
    if (amountN >= 0) {
        total(Number(row.cells[2].innerHTML) * (-1)); //cells[2] : 가격
        row.cells[4].innerHTML = Number(row.cells[3].innerHTML) * Number(row.cells[2].innerHTML);
    }
}

//수량 up
function upCount() {
    if ($('#' + amountId).val() == null) return;
    row = document.getElementById(amountId);
    row.cells[3].innerHTML = Number(row.cells[3].innerHTML) + 1;
    row.cells[4].innerHTML = Number(row.cells[3].innerHTML) * Number(row.cells[2].innerHTML);
    total(Number(row.cells[2].innerHTML));
}

//계산서테이블 클릭시 작동
function amountID() {
    makeAmountId($(this).attr('id'));
}

//계산서테이블 선택정보 + 선택된 테이블 배경색 처리
function makeAmountId(aid) {
    $('#' + amountId).css("background-color", "");
    amountId = aid;
    $('#' + amountId).css("background-color", "skyblue"); //색깔 없어지게 해야함 ㅠㅠ re:내가 해씀
}

//계산서테이블에서 수량0되서 삭제시 번호 재설정
function numbering() {
    let table = document.getElementById('cartTable');
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = i + 1;
    }
}

function numberPad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

//주문하기
function save() {
    let table = document.getElementById('cartTable');

    let rows = table.rows;
    let saveData = new Array();
    if (rows.length > 0) {
        let orderId = '0007';
        let tableNo = '5';
        let now = new Date();
        let orderDate = now.getFullYear() + '-' + numberPad(now.getMonth()+1,2) + '-' + numberPad(now.getDate(),2);
        let orderTime = numberPad(now.getHours(),2) + ':' + numberPad(now.getMinutes(),2) + ':' + numberPad(now.getSeconds(),2);
        for (let i = 0; i < table.rows.length; i++) {
            let cells = table.rows[i].cells;
            let data = {
                "order_id": orderId
                , "product_name": cells[1].innerHTML
                , "options" : ""
                , "table_no" : tableNo
                , "quantity" : cells[3].innerHTML
                , "order_date" : orderDate
                , "order_time" : orderTime
                , "date_time" : orderDate + ' ' + orderTime
            }

            saveData.push(data);
        }

        $.ajax({
            type: "POST",
            url : "/cartSave",
            data       : JSON.stringify(saveData),
            contentType: 'application/json; charset=UTF-8',
            error      : function (xhr, status, error) {
                console.log(error);
            },
            success    : function (data) {
                result = JSON.parse(data);
                alert('주문되었습니다.');
            }
        })

    } else {
        return false;
    }
}