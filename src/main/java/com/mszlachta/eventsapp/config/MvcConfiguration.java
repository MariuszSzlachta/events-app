package com.mszlachta.eventsapp.config;

import ch.qos.logback.classic.spi.TurboFilterList;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.web.servlet.config.annotation.*;
import org.springframework.web.servlet.resource.AppCacheManifestTransformer;
import org.springframework.web.servlet.resource.EncodedResourceResolver;
import org.springframework.web.servlet.resource.VersionResourceResolver;

import java.util.ArrayList;
import java.util.List;

@Configuration
@EnableWebMvc
public class MvcConfiguration implements WebMvcConfigurer {

    private static final String MAIN_VIEW = "baseTemplate";

    private static final int RESOURCE_CACHE_PERIOD = 31536000;

    @Override
    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
        List<ResourceHandlerRegistration> resourceRegistrationList = new ArrayList<>();

        resourceRegistrationList.add(registry.addResourceHandler("/assets/**").addResourceLocations("classpath:/assets/"));
        resourceRegistrationList.add(registry.addResourceHandler("/css/**").addResourceLocations("classpath:/css/"));
        resourceRegistrationList.add(registry.addResourceHandler("/js/**").addResourceLocations("classpath:/js/"));
        resourceRegistrationList.add(registry.addResourceHandler("/**").addResourceLocations("classpath:/**"));

        resourceRegistrationList.forEach(resource ->
            resource.setCachePeriod(RESOURCE_CACHE_PERIOD)
                .resourceChain(true)
                .addResolver(new EncodedResourceResolver())
                .addResolver(new VersionResourceResolver().addContentVersionStrategy("/**"))
                .addTransformer(new AppCacheManifestTransformer()));
    }

    @Override
    public void addViewControllers(final ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName(MAIN_VIEW);
        registry.addViewController("/dashboard").setViewName(MAIN_VIEW);
        registry.addViewController("/events/{id}").setViewName(MAIN_VIEW);
    }

    @Override
    public void configurePathMatch(final PathMatchConfigurer matcher) {
        matcher.setUseSuffixPatternMatch(false);
    }

    @Bean
    @Primary
    public ObjectMapper getObjectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
        mapper.configure(SerializationFeature.WRITE_DATE_TIMESTAMPS_AS_NANOSECONDS, false);
        mapper.registerModule(new JavaTimeModule());
        return mapper;
    }
}
