package com.mszlachta.eventsapp.event.service;

import com.mszlachta.eventsapp.event.model.Event;

import java.util.List;

public interface EventService {
    Event getByName(final String eventName);

    List<Event> findAll();

    Event createEvent(Event newEvent);
}
