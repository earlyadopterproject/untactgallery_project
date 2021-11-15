package com.adopter.gallery.service;

import com.adopter.gallery.model.IntegrationEntity;
import com.adopter.gallery.dto.CustomIntegrationDto;
import com.adopter.gallery.dto.IntegrationDto;
import com.adopter.gallery.repository.IntegrationRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class MemberService implements UserDetailsService {

    private IntegrationRepository integrationRepository;

    public IntegrationEntity joinUser(IntegrationDto integrationDto) {
        // 비밀번호 암호화
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        integrationDto.setUpwd(passwordEncoder.encode(integrationDto.getUpwd()));

        return integrationRepository.save(integrationDto.toEntity());
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<IntegrationEntity> integrationEntityOptional = integrationRepository.findByName(username);
        IntegrationEntity integrationEntity = integrationEntityOptional.orElse(null);

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(integrationEntity.getRoleKey()));

        return new CustomIntegrationDto(integrationEntity, integrationEntity.getName(), integrationEntity.getUpwd(), authorities);
    }
}
