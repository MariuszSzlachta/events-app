package com.mszlachta.eventsapp.event.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Setter
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

//    @NotNull
//    private LocalDate dateStart;
//
//    @NotNull
//    private LocalDate dateTo;

}
