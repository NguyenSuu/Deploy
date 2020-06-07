package cg.economic.repository;

import cg.economic.model.ProductLine;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductLineRepository extends CrudRepository<ProductLine,Long> {
    @Override
    @Modifying
    @Query("update ProductLine p set p.deleted=1 where p.id=:id")
    void deleteById(@Param("id") Long id);

    @Override
    @Modifying
    @Query("SELECT pL FROM ProductLine pL WHERE pL.deleted=0")
    List<ProductLine> findAll();
}
