package com.adopter.gallery.dto;

import org.springframework.security.core.CredentialsContainer;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.io.Serializable;

public interface IntegrationSocialAndMember extends OAuth2User, Serializable, UserDetails, CredentialsContainer {
}
