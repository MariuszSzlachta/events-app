package com.mszlachta.eventsapp.event.model;

import com.mszlachta.eventsapp.Cords;
import com.vladmihalcea.hibernate.type.json.JsonBinaryType;
import com.vladmihalcea.hibernate.type.json.JsonStringType;
import lombok.*;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;

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

    @Type(type = "json")
    @Column(columnDefinition = "json")
    private Cords cords;

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
            .cords(getCords())
            .build();
    }
}
