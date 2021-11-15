package com.adopter.gallery.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class LoginController {
    @GetMapping("/login-detail")
    public Map<String, Object> login(String email, String password){
        System.out.println(email);
        System.out.println(password);
        Map<String, Object> result = new HashMap<>();
        result.put("msg", "ok");
        return result;
    }

//    @GetMapping("/Signup")
//    public Map<String, Object> signup(String name, String email, String password, String habitation, String tel, String sex){
//        System.out.println(name);
//        System.out.println(email);
//        System.out.println(password);
//        System.out.println(habitation);
//        System.out.println(tel);
//        System.out.println(sex);
//        Map<String, Object> result = new HashMap<>();
//        result.put("msg", "ok");
//        return result;
//    }
}
