package com.mszlachta.eventsapp.event.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
public class Event {

    @Id
    @GeneratedValue
    private Long id;

    @NotEmpty(message = "Name cannot be empty")
    private String name;

    @NotEmpty(message = "Description cannot be empty")
    private String description;

    @NotEmpty(message = "You must provide city of event")
    private String city;

    @NotEmpty(message = "Street is required")
    private String street;

    @NotNull
    private int buildingNumber;

    private int localNumber;

    public final EventDto toDto() {
        return EventDto.builder()
            .name(getName())
            .description(getDescription())
            .city(getCity())
            .street(getStreet())
            .buildingNumber(getBuildingNumber())
            .localNumber(getLocalNumber())
            .build();
    }
}
