package cg.economic.repository;

import cg.economic.model.Field;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FieldRepository extends CrudRepository<Field,Long> {
    @Override
    @Modifying
    @Query("update Field f set f.deleted=1 where f.id=:id")
    void deleteById(@Param("id") Long id);
}
