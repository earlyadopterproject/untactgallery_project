package com.adopter.gallery.service;
import java.util.List;

import com.adopter.gallery.model.Board;
import com.adopter.gallery.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    // get boards data
    public List<Board> getAllBoard() {
        return boardRepository.findAll();
    }

    // create board
    public Board createBoard(Board board) {
        return boardRepository.save(board);
    }

}