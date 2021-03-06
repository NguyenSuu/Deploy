package cg.economic.repository;

import cg.economic.model.Field;
import cg.economic.model.ProductLine;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FieldRepository extends CrudRepository<Field,Long> {
    @Override
    @Modifying
    @Query("update Field f set f.deleted=1 where f.id=:id")
    void deleteById(@Param("id") Long id);

    @Override
    @Modifying
    @Query("SELECT f FROM Field f WHERE f.deleted=0")
    List<Field> findAll();
}
