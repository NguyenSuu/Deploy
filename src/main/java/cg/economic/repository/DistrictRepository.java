package cg.economic.repository;

import cg.economic.model.District;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface DistrictRepository extends CrudRepository<District,Long> {
    @Override
    @Modifying
    @Query("update District d set d.deleted=1 where d.id=:id")
    void deleteById(@Param("id") Long id);
}
