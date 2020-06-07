package cg.economic.repository;

import cg.economic.model.ProductLine;
import cg.economic.model.TypeData;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TypeDataRepository extends CrudRepository<TypeData,Long> {
    @Override
    @Modifying
    @Query("update TypeData t set t.deleted=1 where t.id=:id")
    void deleteById(@Param("id") Long id);

    @Override
    @Modifying
    @Query("SELECT t FROM TypeData t WHERE t.deleted=0")
    List<TypeData> findAll();
}
