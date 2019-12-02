package com.mszlachta.eventsapp.event.service.impl;

import com.mszlachta.eventsapp.event.model.Event;
import com.mszlachta.eventsapp.event.repository.EventRepository;
import com.mszlachta.eventsapp.event.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    private final EventRepository eventRepository;

    @Autowired
    public EventServiceImpl(final EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Override
    public Event getByName(final String eventName) {
        return eventRepository.findByName(eventName);
    }

    @Override
    public List<Event> findAll() {
        return eventRepository.findAll();
    }

    @Override
    public Event createEvent(final Event newEvent) {
        return eventRepository.save(newEvent);
    }
}
