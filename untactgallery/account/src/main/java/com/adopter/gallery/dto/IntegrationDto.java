package com.adopter.gallery.dto;

import com.adopter.gallery.model.IntegrationEntity;
import com.adopter.gallery.model.Role;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class IntegrationDto {
    //가제

    private Long id;
    private String name;
    private String email;
    private String upwd;
    private Role role;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;

    public IntegrationEntity toEntity() {
        return IntegrationEntity.builder()
                .id(id)
                .name(name)
                .email(email)
                .upwd(upwd)
                .role(Role.MEMBER)
                .build();
    }


    @Builder
    public IntegrationDto(Long id, String name, String email, String upwd, Role role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.upwd = upwd;
        this.role = role;
    }
}
