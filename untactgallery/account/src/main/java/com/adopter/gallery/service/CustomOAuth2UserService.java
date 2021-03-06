package com.adopter.gallery.service;

import com.adopter.gallery.model.IntegrationEntity;
import com.adopter.gallery.dto.CustomIntegrationDto;
import com.adopter.gallery.dto.OAuthAttributes;
import com.adopter.gallery.repository.IntegrationRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Collections;


@RequiredArgsConstructor
@Service
public class CustomOAuth2UserService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    private final IntegrationRepository integrationRepository;


    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2UserService delegate = new DefaultOAuth2UserService();
        OAuth2User oAuth2User = delegate.loadUser(userRequest);

        //현재 진행중인 서비스를 구분하는 코드
        String registrationId = userRequest
                .getClientRegistration()
                .getRegistrationId();

        //로그인 진행시 키가되는 pk값을 의미
        String userNameAttributeName = userRequest.getClientRegistration()
                .getProviderDetails()
                .getUserInfoEndpoint()
                .getUserNameAttributeName();

        OAuthAttributes attributes = OAuthAttributes.of(registrationId, userNameAttributeName, oAuth2User.getAttributes());



        IntegrationEntity integrationEntity = saveOrUpdate(attributes);


        return new CustomIntegrationDto(integrationEntity
                , Collections.singleton(new SimpleGrantedAuthority(integrationEntity.getRoleKey()))
                , attributes.getAttributes()
                , attributes.getNameAttributeKey()
        );
    }

    private IntegrationEntity saveOrUpdate(OAuthAttributes attributes) {
        System.out.println(attributes);
        System.out.println(attributes.getName());
        IntegrationEntity Entity = integrationRepository.findByName(attributes.getName())
                .map(entity -> entity.update(attributes.getName(), attributes.getEmail()))
                .orElse(attributes.toEntity());

        return integrationRepository.save(Entity);
    }
}
