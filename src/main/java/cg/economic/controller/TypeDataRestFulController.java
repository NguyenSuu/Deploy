package cg.economic.controller;

import cg.economic.model.TypeData;
import cg.economic.service.impl.TypeDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class TypeDataRestFulController {
    @Autowired
    private TypeDataService typeDataService;

    @GetMapping("/type-data")
    public List<TypeData> typeDataList(){
        return typeDataService.findAll();
    }


    @GetMapping("/type-data/{id}")
    public TypeData typeData(@PathVariable long id){
        return typeDataService.findById(id);
    }

    @PostMapping("/type-data")
    public ResponseEntity<TypeData[]> addTypeData(@RequestBody TypeData[] typeData){
        for(var type :typeData) {
            typeDataService.save(type);
        }
        return new ResponseEntity<TypeData[]>(typeData,HttpStatus.CREATED);
    }

    @PatchMapping("/type-data")
    public ResponseEntity<TypeData> patchTypeData(@RequestBody TypeData typeData){
        typeDataService.save(typeData);
        return new ResponseEntity<TypeData>(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/type-data/{id}")
    public void deleteTypeData(@PathVariable long id){
        typeDataService.remove(id);
    }


    @DeleteMapping("/type-data-remove/{id}")
    public ResponseEntity<TypeData> deleteHttpStatusTypeData(@PathVariable long id){
        typeDataService.remove(id);
        return new ResponseEntity<TypeData>(HttpStatus.OK);
    }
}
