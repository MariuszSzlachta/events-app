package com.mszlachta.eventsapp.event.model;

import com.mszlachta.eventsapp.Cords;

import java.time.LocalDateTime;

public interface EventParameters {

    String getName();

    String getDescription();

    String getCity();

    String getStreet();

    int getBuildingNumber();

    int getLocalNumber();

    LocalDateTime getDateFrom();

    LocalDateTime getDateTo();

    Cords getCords();
}
