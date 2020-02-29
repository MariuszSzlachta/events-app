package com.mszlachta.eventsapp.event.model;

import com.mszlachta.eventsapp.commons.results.ResultSetUtils;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

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

    @Column(columnDefinition = "MEDIUMTEXT")
    @NotEmpty(message = "Description cannot be empty")
    private String description;

    @NotEmpty(message = "You must provide city of event")
    private String city;

    @NotEmpty(message = "Street is required")
    private String street;

    private String externalUrl;

    @NotNull
    private int buildingNumber;

    private int localNumber;

    @NotNull
    private LocalDateTime dateFrom;

    @NotNull
    private LocalDateTime dateTo;

    public final EventDto toDto() {
        return EventDto.builder()
            .id(getId())
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
