package com.adopter.gallery.service;

import com.adopter.gallery.model.Board;
import com.adopter.gallery.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
    @Autowired
    private BoardRepository boardRepository;

    public List<Board> getAllBoard(){
        return boardRepository.findAll();
    }
}
