package codingTest.test.Three;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ThreeController {
    @RequestMapping(value = "/three")
    public String test() throws Exception{
        return "Three";
    }
}
