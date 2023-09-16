package codingTest.test.one;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    private OrderMapper orderMapper;

    public int save(CreateOrderDto orderDto) {
        Order order = orderDto.toEntity();

        int result = orderMapper.insert(order);
        if (result == 0) {
            throw new RuntimeException("Order save Failed");
        }
        return result;
    }
}
