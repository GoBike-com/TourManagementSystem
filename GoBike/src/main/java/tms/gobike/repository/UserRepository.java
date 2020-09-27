package tms.gobike.repository;

import org.springframework.data.repository.CrudRepository;
import tms.gobike.model.User;

/**
 * @author jbhushan
 */
public interface UserRepository extends CrudRepository<User, Long> {

    User findByUserName(String userName);

    User findByUserNameAndPassword(String userName, String password);
}
