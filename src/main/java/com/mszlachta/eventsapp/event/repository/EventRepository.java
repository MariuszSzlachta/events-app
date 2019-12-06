package com.mszlachta.eventsapp.event.repository;

import com.mszlachta.eventsapp.event.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

    Event findByName(String eventName);

    List<Event> findAll();
}
