package com.mszlachta.eventsapp.messages.impl;

import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

@Component
public class MessageSourceImpl extends ResourceBundleMessageSource {

    public Map<String, String> getMessages(final Locale locale) {
        final ResourceBundle resourceBundle = getResourceBundle("i18n.messages", locale);
        final Stream<String> keys = StreamSupport
            .stream(Spliterators.spliteratorUnknownSize(resourceBundle.getKeys().asIterator(), Spliterator.ORDERED), false);

        return keys.collect(Collectors.toUnmodifiableMap(key -> key, resourceBundle::getString));
    }
}
