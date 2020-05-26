package cg.economic.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "type_data")
public class TypeData {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(columnDefinition = "bigserial")
    private Long id;
    private String code;
    private String name;
    public TypeData(){

    }
    @JsonIgnore
    @OneToMany
    private Set<MonthlyProduction> monthlyProductions;

    public Set<MonthlyProduction> getMonthlyProductions() {
        return monthlyProductions;
    }

    public void setMonthlyProductions(Set<MonthlyProduction> monthlyProductions) {
        this.monthlyProductions = monthlyProductions;
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
