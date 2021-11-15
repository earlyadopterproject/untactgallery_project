package com.adopter.gallery.dto;

import com.adopter.gallery.model.IntegrationEntity;
import com.adopter.gallery.model.Role;
import lombok.Builder;
import lombok.Getter;

import java.util.Map;

@Getter
public class OAuthAttributes {
    private Map<String, Object> attributes;
    private String registrationId;
    private String nameAttributeKey;
    private String name;
    private String email;

    @Builder
    public OAuthAttributes(Map<String, Object> attributes, String nameAttributeKey, String name, String email, String registrationId) {
        this.attributes = attributes;
        this.registrationId = registrationId;
        this.nameAttributeKey = nameAttributeKey;
        this.name = name;
        this.email = email;
    }

    public static OAuthAttributes of(String registrationId, String userNameAttributeName, Map<String, Object> attributes) {
        if("kakao".equals(registrationId)) {
            return ofKakao(registrationId, "id", attributes);
        }else if("naver".equals(registrationId)){
            return ofNaver(registrationId, "id", attributes);
        }else
            return ofGoogle(registrationId, userNameAttributeName, attributes);

    }

    private static OAuthAttributes ofKakao(String registrationId, String userNameAttributeName, Map<String, Object> attributes) {
        Map<String, Object> kakaoAccount = (Map<String, Object>) attributes.get("kakao_account");
        Map<String, Object> profile = (Map<String, Object>) kakaoAccount.get("profile");
        profile.put("email", kakaoAccount.get("email"));
        profile.put("username", profile.get("nickname"));

        profile.put("id", attributes.get("id"));


        return OAuthAttributes.builder().name((String) profile.get("username"))
                .email((String) profile.get("email"))
                .attributes(profile)
                .nameAttributeKey(userNameAttributeName)
                .registrationId(registrationId)
                .build();
    }

    private static OAuthAttributes ofNaver(String registrationId, String userNameAttributeName, Map<String, Object> attributes) {


        Map<String, Object> response = (Map<String, Object>) attributes.get("response");

//        Map<String, Object> naverAccount = (Map<String, Object>) attributes.get("response");
//        Map<String, Object> profile = (Map<String, Object>) naverAccount.get("profile");
//        if(profile == null) profile = new HashMap<>();
//        profile.put("email", naverAccount.get("email"));
//        profile.put("username", profile.get("nickname"));
//
//        profile.put("id", attributes.get("id"));

//        OAuthAttributes oAuthAttributes = new OAuthAttributes(
//                profile, userNameAttributeName, (String)naverAccount.get("name"), (String)naverAccount.get("email"),
//                registrationId);
//        return oAuthAttributes;
        return OAuthAttributes.builder()
                .name((String) response.get("name"))
                .email((String) response.get("email"))
                .attributes(response)
                .nameAttributeKey(userNameAttributeName)
                .registrationId(registrationId)
                .build();
    }

    private static OAuthAttributes ofGoogle(String registrationId, String userNameAttributeName, Map<String, Object> attributes) {

//        Map<String, Object> googleAccount = (Map<String, Object>) attributes.get("google");
//        Map<String, Object> profile = (Map<String, Object>) googleAccount.get("profile");
//        if(profile == null) profile = new HashMap<>();
//        profile.put("email", googleAccount.get("email"));
//        profile.put("username", profile.get("name"));
//
//        profile.put("id", attributes.get("sub"));
//
//        OAuthAttributes oAuthAttributes = new OAuthAttributes(
//                profile, userNameAttributeName, (String)googleAccount.get("name"), (String)googleAccount.get("email"),
//                registrationId);
//        return oAuthAttributes;


        return OAuthAttributes.builder()
                .name((String) attributes.get("name"))
                .email((String) attributes.get("email"))
                .attributes((attributes))
                .nameAttributeKey(userNameAttributeName)
                .registrationId(registrationId)
                .build();
    }



    public IntegrationEntity toEntity() {
        return IntegrationEntity.builder()
                .name(name)
                .email(email)
                .role(Role.MEMBER)
                .build();
    }

    @Override
    public String toString() {
        return "OAuthAttributes{" +
                "attributes=" + attributes +
                ", registrationId='" + registrationId + '\'' +
                ", nameAttributeKey='" + nameAttributeKey + '\'' +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}