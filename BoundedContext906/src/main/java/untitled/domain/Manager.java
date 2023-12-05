package untitled.domain;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.Data;
import untitled.BoundedContext906Application;

@Entity
@Table(name = "Manager_table")
@Data
//<<< DDD / Aggregate Root
public class Manager {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    public static ManagerRepository repository() {
        ManagerRepository managerRepository = BoundedContext906Application.applicationContext.getBean(
            ManagerRepository.class
        );
        return managerRepository;
    }
}
//>>> DDD / Aggregate Root
