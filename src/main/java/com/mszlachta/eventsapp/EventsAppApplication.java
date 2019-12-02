package com.mszlachta.eventsapp;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@EnableEncryptableProperties
@SpringBootApplication
public class EventsAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(EventsAppApplication.class, args);
    }

}
