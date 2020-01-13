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
@RequestMapping("/api/events")
public class EventController {

    private final EventService eventService;

    @Autowired
    public EventController(final EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("")
    List<EventDto> findAll() {
        return eventService.findAll();
    }

    @GetMapping("/{eventId}")
    EventDto getEventById(@PathVariable final long eventId) {
        return eventService.getById(eventId);
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
        void createEvent(@RequestBody EventRequest request) {
            eventService.createEvent(request);
    }
}
