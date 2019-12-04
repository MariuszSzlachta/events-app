package com.mszlachta.eventsapp.config;

import ch.qos.logback.classic.spi.TurboFilterList;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
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

        resourceRegistrationList.add(registry.addResourceHandler("/images/**").addResourceLocations("classpath:/images/"));
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
    }

    @Override
    public void configurePathMatch(final PathMatchConfigurer matcher) {
        matcher.setUseSuffixPatternMatch(false);
    }
}
