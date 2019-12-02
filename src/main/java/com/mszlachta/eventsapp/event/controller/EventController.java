package com.mszlachta.eventsapp.event.controller;

import com.mszlachta.eventsapp.event.model.Event;
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
    List<Event> findAll() {
        return eventService.findAll();
    }

    @GetMapping("/{eventName}")
    Event getEventByName(@PathVariable final String eventName) {
        return eventService.getByName(eventName);
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    Event newEvent(@RequestBody Event newEvent) {
            return eventService.createEvent(newEvent);
    }
}
