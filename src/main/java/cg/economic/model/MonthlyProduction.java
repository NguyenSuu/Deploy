package cg.economic.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "monthly_production")
public class MonthlyProduction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(columnDefinition = "bigserial")
    private Long id;
    private int month;
    private int year;
    private String data;
    private Long p_id;
    private Long t_d_id;

    public MonthlyProduction(){

    }
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product products;

    public Product getProducts() {
        return products;
    }

    public void setProducts(Product products) {
        this.products = products;
    }


    @ManyToOne
    @JoinColumn(name="typeData_id")
    //@OneToMany(targetEntity = TypeData.class)
    private TypeData typeData;

    public TypeData getTypeData() {
        return typeData;
    }

    public void setTypeData(TypeData typeData) {
        this.typeData = typeData;
    }

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "quarter_production_id")
    private QuarterProduction quarterProduction;

    public QuarterProduction getQuarterProduction() {
        return quarterProduction;
    }

    public void setQuarterProduction(QuarterProduction quarterProduction) {
        this.quarterProduction = quarterProduction;
    }


    public Long getP_id() {
        return p_id;
    }

    public void setP_id(Long p_id) {
        this.p_id = p_id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public Long getT_d_id() {
        return t_d_id;
    }

    public void setT_d_id(Long t_d_id) {
        this.t_d_id = t_d_id;
    }
}
