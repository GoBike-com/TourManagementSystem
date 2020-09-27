package tms.gobike.repository;

import org.springframework.data.repository.CrudRepository;
import tms.gobike.model.Bike;

/**
 * @author jbhushan
 */
public interface BikeRepository extends CrudRepository<Bike, Long> {

}
