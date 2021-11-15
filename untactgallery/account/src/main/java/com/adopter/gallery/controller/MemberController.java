package com.adopter.gallery.controller;

import com.adopter.gallery.dto.IntegrationDto;
import com.adopter.gallery.service.MemberService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@AllArgsConstructor
public class MemberController {

    private MemberService memberService;

    @GetMapping("/")
    public String mainPage(){
        return "main";
    }

    //로그인 페이지
    @GetMapping("/user/login_page")
    public String login() {

        return "gallery_login_page";
    }

    //회원가입 페이지
    @GetMapping("/user/signup_page")
    public String signup() {

        return "gallery_signup_page";
    }

    //회원가입 처리
    @PostMapping("/user/signup")
    public String execSignup(IntegrationDto memberDto) {
        memberService.joinUser(memberDto);
        return "redirect:/user/login_page";
    }
}
