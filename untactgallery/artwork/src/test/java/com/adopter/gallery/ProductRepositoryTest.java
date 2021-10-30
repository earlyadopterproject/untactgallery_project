package com.adopter.gallery;

import com.adopter.gallery.model.Product;
import com.adopter.gallery.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class ProductRepositoryTest {
    @Autowired
    ProductRepository productRepository;

    @Test
    public void insert() {
        Product product = new Product();
        product.setId(2);
        product.setTitle("test title");
        product.setPrice(9999);
        product.setInfo("test info");

        productRepository.save(product);
    }
}
