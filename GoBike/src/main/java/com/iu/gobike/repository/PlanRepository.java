package com.iu.gobike.repository;

import com.iu.gobike.model.Plan;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author jbhushan
 */
@Repository
public interface PlanRepository extends CrudRepository<Plan, Long> {

}
