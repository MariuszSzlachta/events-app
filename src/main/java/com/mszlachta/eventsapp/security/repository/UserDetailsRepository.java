package com.mszlachta.eventsapp.security.repository;

import com.mszlachta.eventsapp.security.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailsRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

}
