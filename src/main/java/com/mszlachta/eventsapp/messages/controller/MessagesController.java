package com.mszlachta.eventsapp.messages.controller;

import com.mszlachta.eventsapp.messages.impl.MessageSourceImpl;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Locale;
import java.util.Map;

@RestController
@RequestMapping(value = { "/i18n/" })
public class MessagesController {

    private final MessageSourceImpl messageSource;

    public MessagesController(final MessageSourceImpl messageSource) {
        this.messageSource = messageSource;
    }

    @GetMapping(value = "messages/{lang}")
    public Map<String, String> getMessages(@PathVariable final String lang) {
        final Locale locale = LocaleContextHolder.getLocale();

        return messageSource.getMessages(locale);
    }
}