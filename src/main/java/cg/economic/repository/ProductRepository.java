package cg.economic.repository;

import cg.economic.model.Product;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product,Long> {
    @Override
    @Modifying
    @Query("update Product p set p.deleted=1 where p.id=:id")
    void deleteById(@Param("id") Long id);
}
