package com.iu.gobike.repository;

import com.iu.gobike.model.User;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.LockModeType;

/**
 * @author jbhushan
 */
@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    @Lock(LockModeType.NONE)
    User findByUserName(String userName);

    @Lock(LockModeType.NONE)
    User findByUserNameAndPassword(String userName, String password);

    @Lock(LockModeType.NONE)
    User findByUserNameOrEmailOrPhone(String userName, String email,Long phone);

}
