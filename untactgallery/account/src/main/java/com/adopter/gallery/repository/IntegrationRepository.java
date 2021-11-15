package com.adopter.gallery.repository;

import com.adopter.gallery.model.IntegrationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IntegrationRepository extends JpaRepository<IntegrationEntity, Long>{

    Optional<IntegrationEntity> findByName(String userEmail);
}
