package codingTest.test.one;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CreateOrderDto {
    private String order_id;
    private String product_name;
    private String options;
    private int table_no;
    private int quantity;
    private String order_date;
    private String order_time;
    private String date_time;
    private String robot_status;
    private String dong;
    private String ho;
    private String seq;
    private String order_name;

    public Order toEntity() {
        return Order.builder()
                .order_id(order_id)
                .product_name(product_name)
                .options(options)
                .table_no(table_no)
                .quantity(quantity)
                .order_date(order_date)
                .order_time(order_time)
                .date_time(date_time)
                .robot_status(robot_status)
                .dong(dong)
                .ho(ho)
                .seq(seq)
                .order_name(order_name)
                .createDate(LocalDateTime.now())
                .modifyDate(LocalDateTime.now())
                .build();
    }
}
