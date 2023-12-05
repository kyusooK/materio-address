package untitled.common;

import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import untitled.BoundedContext906Application;

@CucumberContextConfiguration
@SpringBootTest(classes = { BoundedContext906Application.class })
public class CucumberSpingConfiguration {}
