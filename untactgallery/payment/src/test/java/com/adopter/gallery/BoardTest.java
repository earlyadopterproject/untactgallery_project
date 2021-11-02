package com.adopter.gallery;

import com.adopter.gallery.model.Basket;
import com.adopter.gallery.repository.BasketRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class BoardTest {
    @Autowired
    BasketRepository basketRepository;

    @Test
    void contextLoads(){
        Basket basket = new Basket();
        basket.setCost(3000);
        basket.setProduct("풍경화");

        basketRepository.save(basket);
    }
}
