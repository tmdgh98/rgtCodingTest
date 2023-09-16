package codingTest.test.one;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface OrderMapper {

    public int insert(Order order);
}
