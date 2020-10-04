package com.iu.gobike.repository;

import com.iu.gobike.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author jbhushan
 */
@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    User findByUserName(String userName);

    User findByUserNameAndPassword(String userName, String password);
}
