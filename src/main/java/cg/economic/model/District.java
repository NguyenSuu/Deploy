package cg.economic.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "district")
public class District {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(columnDefinition = "bigserial")
    private Long id;
    private String code;
    private String name;

    @JsonIgnore
    @OneToMany
    private Set<MonthlyProduction> monthlyProduction;

    public Set<MonthlyProduction> getMonthlyProduction() {
        return monthlyProduction;
    }

    public void setMonthlyProduction(Set<MonthlyProduction> monthlyProduction) {
        this.monthlyProduction = monthlyProduction;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
