package com.adopter.gallery.controller;

import java.util.Date;
import java.util.Map;

import com.adopter.gallery.model.Product;
import com.adopter.gallery.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:10001")
@RestController
public class ProductController {
	
	@Autowired
	private ProductService boardService;
	
	// get paging board 
	@GetMapping("/board")
	public ResponseEntity<Map> getAllBoards(@RequestParam(value = "p_num", required=false) Integer p_num) {
		if (p_num == null || p_num <= 0) p_num = 1;
		
		return boardService.getPagingBoard(p_num);
	}
	
	// get all board 
//	@GetMapping("/board")
//	public List<Board> getAllBoards() {
//		
//		return boardService.getAllBoard();
//	}

	// create board
	@PostMapping("/board")
	public Product createBoard(@RequestBody Product board) {
		board.setCreatedTime(new Date());
		System.out.println("@PostMapping(\"/board\")");
		System.out.println(board.toString());
		return boardService.createBoard(board);
	}
	
	// get board
	@GetMapping("/board/{no}")
	public ResponseEntity<Product> getBoardByNo(
			@PathVariable Integer no) {
		
		return boardService.getBoard(no);
	}
	
	// update board
	@PutMapping("/board/{no}")
	public ResponseEntity<Product> updateBoardByNo(
			@PathVariable Integer no, @RequestBody Product board){
		
		return boardService.updateBoard(no, board);
	}
	
	// delete board
	@DeleteMapping("/board/{no}")
	public ResponseEntity<Map<String, Boolean>> deleteBoardByNo(
			@PathVariable Integer no) {
		
		return boardService.deleteBoard(no);
	}
	
	
}