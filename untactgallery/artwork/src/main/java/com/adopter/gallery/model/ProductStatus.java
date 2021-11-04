package com.adopter.gallery.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ProductStatus {
    ONSALE("ON_SALE", "판매 중"),
    SOLDOUT("SOLD_OUT", "판매 완료");
    private final String key;
    private final String title;
}
