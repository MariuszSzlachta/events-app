package com.mszlachta.eventsapp;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.vladmihalcea.hibernate.type.json.JsonBinaryType;
import com.vladmihalcea.hibernate.type.json.JsonStringType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;

import javax.persistence.MappedSuperclass;

@TypeDefs({
    @TypeDef(name = "json", typeClass = JsonStringType.class),
    @TypeDef(name = "jsonb", typeClass = JsonBinaryType.class)
})
@MappedSuperclass
@Getter
@ToString
public class Cords {

    private final Double lat;

    private final Double lng;

    @JsonCreator
    public Cords(@JsonProperty(value = "lat") final Double lat, @JsonProperty(value = "lng") final Double lng) {
        this.lat = lat;
        this.lng = lng;
    }
}
