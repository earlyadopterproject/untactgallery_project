package com.adopter.gallery;

import com.adopter.gallery.model.Board;
import com.adopter.gallery.repository.BoardRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class BoardTest {
    @Autowired
    BoardRepository boardRepository;

    @Test
    void contextLoads(){
        Board board = new Board();
        board.setProduct("풍경화");
        board.setCost(15000);

        boardRepository.save(board);
    }
}
