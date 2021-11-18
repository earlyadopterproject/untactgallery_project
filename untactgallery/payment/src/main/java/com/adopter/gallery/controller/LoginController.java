package com.adopter.gallery.controller;

import com.adopter.gallery.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class LoginController {

    @Autowired
    MemberRepository memberRepository;

    @GetMapping("/login-detail")
    public Map<String, Object> login(String email, String password){
        System.out.println(email);
        System.out.println(password);
        Map<String, Object> result = new HashMap<>();
        result.put("msg", "ok");
        return result;
    }

    @GetMapping("/signup")
    public Map<String, Object> signup(Long id, String name, String email, String password, String country, String p_number){
        System.out.println(id);
        System.out.println(name);
        System.out.println(email);
        System.out.println(password);
        System.out.println(country);
        System.out.println(p_number);
        Map<String, Object> result = new HashMap<>();
        result.put("msg", "ok");



        return result;
    }
}
