package cg.economic.repository;

import cg.economic.model.MonthlyProduction;
import cg.economic.model.ProductLine;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface  MonthlyProductionRepository extends CrudRepository<MonthlyProduction,Long> {
    @Query("SELECT m " +
            "FROM MonthlyProduction m " +
            "WHERE m.month=:month AND m.year=:year")
    MonthlyProduction resultEveryMonth(@Param("month")int month, @Param("year")int year);

    @Override
    @Modifying
    @Query("update MonthlyProduction m set m.deleted=1 where m.id=:id")
    void deleteById(@Param("id") Long id);

    @Override
    @Modifying
    @Query("SELECT m FROM MonthlyProduction m WHERE m.deleted=0")
    List<MonthlyProduction> findAll();
}
