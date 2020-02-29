package com.mszlachta.eventsapp.event.controller.request;

import com.mszlachta.eventsapp.event.model.EventParameters;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
public class EventRequest implements EventParameters {

    @NotNull
    private String name;

    @NotNull
    private String description;

    @NotNull
    private String city;

    @NotNull
    private String street;

    @NotNull
    private int buildingNumber;

    private int localNumber;

    @NotNull
    private LocalDateTime dateFrom;

    @NotNull
    private LocalDateTime dateTo;
}
