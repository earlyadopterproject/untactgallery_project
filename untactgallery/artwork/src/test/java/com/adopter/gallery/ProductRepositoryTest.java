package com.adopter.gallery;

import com.adopter.gallery.model.Product;
import com.adopter.gallery.model.ProductStatus;
import com.adopter.gallery.model.ProductType;
import com.adopter.gallery.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ProductRepositoryTest {
    @Autowired
    ProductRepository productRepository;

    @Test
    public void insert() {
        productRepository.save(
                Product.builder().name("aaa").price(999).info("bbb").sizeWidth("100").sizeHight("200")
                        .productType(ProductType.WESTERN).productStatus(ProductStatus.SOLDOUT).build());
    }
}
