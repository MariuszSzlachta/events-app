package com.mszlachta.eventsapp.event.repository.mapper;

import com.mszlachta.eventsapp.event.model.Event;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class EventMapper implements RowMapper {

    @Override
    public Event mapRow(final ResultSet resultSet, final int i) throws SQLException {
        return Event.builder()
            .name(resultSet.getString("name"))
            .description(resultSet.getString("description"))
            .city(resultSet.getString("city"))
            .street(resultSet.getString("street"))
            .buildingNumber(resultSet.getInt("buildingNumber"))
            .localNumber(resultSet.getInt("localNumber"))
            .build();
    }
}
