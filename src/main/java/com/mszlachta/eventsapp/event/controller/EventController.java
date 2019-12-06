package com.mszlachta.eventsapp.event.controller;

import com.mszlachta.eventsapp.event.model.EventDto;
import com.mszlachta.eventsapp.event.controller.request.EventRequest;
import com.mszlachta.eventsapp.event.model.EventParameters;
import com.mszlachta.eventsapp.event.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/search/event")
public class EventController {

    private final EventService eventService;

    @Autowired
    public EventController(final EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/events")
    List<EventDto> findAll() {
        return eventService.findAll();
    }

    @GetMapping("/{eventName}")
    EventDto getEventByName(@PathVariable final String eventName) {
        return eventService.getByName(eventName);
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
        void saveEvent(@RequestBody EventRequest request) {
            eventService.createEvent(request);
    }
}
