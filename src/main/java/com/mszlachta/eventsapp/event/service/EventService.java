package com.mszlachta.eventsapp.event.service;

import com.mszlachta.eventsapp.event.model.Event;
import com.mszlachta.eventsapp.event.model.EventDto;
import com.mszlachta.eventsapp.event.model.EventParameters;

import java.util.List;

public interface EventService {
    EventDto getByName(final String eventName);

    List<EventDto> findAll();

    Event createEvent(EventParameters parameters);
}
