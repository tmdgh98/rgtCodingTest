package codingTest.test.one;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Builder
@Getter
public class Order {
    private final String order_id;
    private final String product_name;
    private final String options;
    private final int table_no;
    private final int quantity;
    private final String order_date;
    private final String order_time;
    private final String date_time;
    private final String robot_status;
    private final String dong;
    private final String ho;
    private final String seq;
    private final String order_name;
    private final LocalDateTime createDate;
    private final LocalDateTime modifyDate;
}
