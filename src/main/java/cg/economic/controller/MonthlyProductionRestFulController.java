package cg.economic.controller;

import cg.economic.model.MonthlyProduction;
import cg.economic.model.Product;
import cg.economic.service.impl.DistrictService;
import cg.economic.service.impl.MonthlyProductionService;
import cg.economic.service.impl.ProductService;
import cg.economic.service.impl.TypeDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class MonthlyProductionRestFulController {
    @Autowired
    private MonthlyProductionService monthlyProductionService;
    @Autowired
    private ProductService productService;
    @Autowired
    private TypeDataService typeDataService;
    @Autowired
    private DistrictService districtService;

    @GetMapping("/monthly-production")
    public List<MonthlyProduction> monthlyProductionList(){
        return monthlyProductionService.findAll();
    }


    @GetMapping("/monthly-production/{id}")
    public MonthlyProduction monthlyProduction(@PathVariable long id){
        return monthlyProductionService.findById(id);
    }

    @PostMapping("/monthly-production")
    public ResponseEntity<MonthlyProduction[]> addMonthlyProduction(@RequestBody MonthlyProduction[] monthlyProduction){
        for(var mProduction:monthlyProduction){
            mProduction.setProducts(productService.findById(mProduction.getP_id()));
            mProduction.setTypeData(typeDataService.findById(mProduction.getT_d_id()));
            mProduction.setDistrict(districtService.findById(mProduction.getD_id()));
            monthlyProductionService.save(mProduction);
        }
        return new ResponseEntity<MonthlyProduction[]>(monthlyProduction,HttpStatus.CREATED);
    }

    @PatchMapping("/monthly-production")
    public ResponseEntity<MonthlyProduction> patchMonthlyProduction(@RequestBody MonthlyProduction monthlyProduction){
        monthlyProductionService.save(monthlyProduction);
        return new ResponseEntity<MonthlyProduction>(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/monthly-production/{id}")
    public void deleteMonthlyProduction(@PathVariable long id){
        monthlyProductionService.remove(id);
    }


    @DeleteMapping("/monthly-production-remove/{id}")
    public ResponseEntity<MonthlyProduction> deleteHttpStatusMonthlyProduction(@PathVariable long id){
        monthlyProductionService.remove(id);
        return new ResponseEntity<MonthlyProduction>(HttpStatus.OK);
    }
}
