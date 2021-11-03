package com.adopter.gallery.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.adopter.gallery.exception.ResourceNotFoundException;
import com.adopter.gallery.model.Product;
import com.adopter.gallery.repository.ProductRepository;
import com.adopter.gallery.util.PagingUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class ProductService {

	@Autowired
	private ProductRepository boardRepository;
	
	public int findAllCount() {
		return (int) boardRepository.count();
	}
	
	// get paging boards data
	public ResponseEntity<Map> getPagingBoard(Integer p_num) {
		Map result = null;
		
		PagingUtil pu = new PagingUtil(p_num, 5, 5); // ($1:표시할 현재 페이지, $2:한페이지에 표시할 글 수, $3:한 페이지에 표시할 페이지 버튼의 수 )
		List<Product> list = boardRepository.findFromTo(pu.getObjectStartNum(), pu.getObjectCountPerPage());
		pu.setObjectCountTotal(findAllCount());
		pu.setCalcForPaging();
		
		System.out.println("p_num : "+p_num);
		System.out.println(pu.toString());
		
		if (list == null || list.size() == 0) {
			return null;
		}
		
		result = new HashMap<>();
		result.put("pagingData", pu);
		result.put("list", list);
		
		return ResponseEntity.ok(result);
	}	
	
	// get boards data
	public List<Product> getAllBoard() {
		return boardRepository.findAll();
	}
	
	// create board
	public Product createBoard(Product board) {
		return boardRepository.save(board);
	}
	
	// get board one by id
	public ResponseEntity<Product> getBoard(Integer no) {
		Product board = boardRepository.findById(no)
				.orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : ["+no+"]"));
		
		return ResponseEntity.ok(board);
	}
	
	// update board 
	public ResponseEntity<Product> updateBoard(
			Integer no, Product updatedBoard) {
		Product board = boardRepository.findById(no)
				.orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : ["+no+"]"));
		board.setType(updatedBoard.getType());
		board.setTitle(updatedBoard.getTitle());
		board.setContents(updatedBoard.getContents());
		board.setUpdatedTime(new Date());
		
		Product endUpdatedBoard = boardRepository.save(board);
		return ResponseEntity.ok(endUpdatedBoard);
	}
	
	// delete board
	public ResponseEntity<Map<String, Boolean>> deleteBoard(
			Integer no) {
		Product board = boardRepository.findById(no)
				.orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : ["+no+"]"));
		
		boardRepository.delete(board);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted Board Data by id : ["+no+"]", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}