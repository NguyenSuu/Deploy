package cg.economic.repository;

import cg.economic.model.Product;
import cg.economic.model.ProductLine;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Product,Long> {
    @Override
    @Modifying
    @Query("update Product p set p.deleted=1 where p.id=:id")
    void deleteById(@Param("id") Long id);

    @Override
    @Modifying
    @Query("SELECT p FROM Product p WHERE p.deleted=0")
    List<Product> findAll();
}
