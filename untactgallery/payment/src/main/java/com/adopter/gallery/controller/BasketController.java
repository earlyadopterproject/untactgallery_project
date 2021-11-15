package com.adopter.gallery.controller;

import com.adopter.gallery.model.Basket;
import com.adopter.gallery.service.BasketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:10001")
public class BasketController {
    @Autowired
    private BasketService basketService;

    @GetMapping("/basket")
    public List<Basket> getAllBasket() {

        return basketService.getAllBasket();
    }

}
