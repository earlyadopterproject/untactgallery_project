package com.adopter.gallery.controller;

import java.util.List;

import com.adopter.gallery.model.Board;
import com.adopter.gallery.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:10001")
@RestController
public class BoardController {

	@Autowired
	private BoardService boardService;

	@GetMapping("/board")
	public List<Board> getAllBoards() {
		
		return boardService.getAllBoard();
	}
	
}