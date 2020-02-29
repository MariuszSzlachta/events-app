package com.mszlachta.eventsapp.event.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Builder
@Getter
public class EventDto {

    private final long id;

    private final String name;

    private final String description;

    private final String city;

    private final String street;

    private final String externalUrl;

    private final int buildingNumber;

    private final int localNumber;

    @JsonFormat(pattern = "dd.MM.yyyy HH:mm")
    private final LocalDateTime dateFrom;

    @JsonFormat(pattern = "dd.MM.yyyy HH:mm")
    private final LocalDateTime dateTo;

    public final Event toEntity() {
        return Event.builder()
            .name(getName())
            .description(getDescription())
            .city(getCity())
            .street(getStreet())
            .externalUrl(getExternalUrl())
            .buildingNumber(getBuildingNumber())
            .localNumber(getLocalNumber())
            .dateFrom(getDateFrom())
            .dateTo(getDateTo())
            .build();
    }
}
