package cg.economic.repository;

import cg.economic.model.ProductLine;
import cg.economic.model.Units;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UnitsRepository extends CrudRepository<Units,Long> {
    @Override
    @Modifying
    @Query("update Units u set u.deleted=1 where u.id=:id")
    void deleteById(@Param("id") Long id);

    @Override
    @Modifying
    @Query("SELECT u FROM Units u WHERE u.deleted=0")
    List<Units> findAll();
}
