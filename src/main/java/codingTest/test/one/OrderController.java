package codingTest.test.one;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;

@RestController
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    /**
     * restApi
     *
     * @return 작성된 order 에 대한 id 반환
     * @author lob
     */
    @PostMapping("/codingTest/post")
    public ResponseEntity<OrderInfo> createOrder(@Valid @RequestBody CreateOrderDto orderDto) {

        int result = orderService.save(orderDto);
        return ResponseEntity.status(HttpStatus.OK).body(new OrderInfo(result, "order created"));
    }

    @Getter
    @AllArgsConstructor
    private static class OrderInfo {
        private final int NoticeId;
        private final String message;
    }
}
