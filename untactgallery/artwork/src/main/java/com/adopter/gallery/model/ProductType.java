package com.adopter.gallery.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ProductType {
    ASIAN("ASIAN_PAINTING", "동양화"),
    WESTERN("WESTERN_PAINTING", "서양화");
    private final String key;
    private final String title;
}
