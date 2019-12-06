package com.mszlachta.eventsapp.event.service.impl;

import com.mszlachta.eventsapp.event.model.Event;
import com.mszlachta.eventsapp.event.model.EventDto;
import com.mszlachta.eventsapp.event.model.EventParameters;
import com.mszlachta.eventsapp.event.repository.EventRepository;
import com.mszlachta.eventsapp.event.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EventServiceImpl implements EventService {

    private final EventRepository eventRepository;

    @Autowired
    public EventServiceImpl(final EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Override
    public EventDto getByName(final String eventName) {
        return eventRepository.findByName(eventName).toDto();
    }

    @Override
    public List<EventDto> findAll() {
        return eventRepository
            .findAll()
            .stream()
            .map(Event::toDto)
            .collect(Collectors.toList());
    }

    @Override
    public Event createEvent(EventParameters parameters) {
        EventDto eventDto = EventDto.builder()
            .name(parameters.getName())
            .description(parameters.getDescription())
            .city(parameters.getCity())
            .street(parameters.getStreet())
            .buildingNumber(parameters.getBuildingNumber())
            .localNumber(parameters.getLocalNumber())
            .build();

        return eventRepository.save(eventDto.toEntity());
    }
}
