package com.mszlachta.eventsapp.event.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Builder
@Getter
public class EventDto {

    private final String name;

    private final String description;

    private final String city;

    private final String street;

    private final int buildingNumber;

    private final int localNumber;

    public final Event toEntity() {
        return Event.builder()
            .name(getName())
            .description(getDescription())
            .city(getCity())
            .street(getStreet())
            .buildingNumber(getBuildingNumber())
            .localNumber(getLocalNumber())
            .build();
    }
}
