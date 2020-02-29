package com.mszlachta.eventsapp.commons.locale;

import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

import java.util.Locale;

@Component
@RequestScope
public class CurrentLocale {

    public Locale getLocale() {
        return LocaleContextHolder.getLocale();
    }

    public String getLang() {
        return getLocale().getLanguage();
    }
}
