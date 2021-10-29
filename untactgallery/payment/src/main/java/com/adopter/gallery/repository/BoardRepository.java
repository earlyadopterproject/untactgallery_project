package com.adopter.gallery.repository;


import com.adopter.gallery.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {
}
