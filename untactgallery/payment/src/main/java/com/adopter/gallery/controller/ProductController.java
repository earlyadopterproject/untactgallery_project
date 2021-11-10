package com.adopter.gallery.controller;

import com.adopter.gallery.exception.ResourceNotFoundException;
import com.adopter.gallery.model.Product;
import com.adopter.gallery.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;


@CrossOrigin(origins = "http://localhost:10001")
@RestController
@RequestMapping("api/product")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    @PostMapping
    public Product createProduct(
        @ModelAttribute Product product
        ) {
//        String path = "D:/untactgallery_project/untactgallery/payment/src/main/resources/static/";
        String path = this.getClass().getResource("").getPath();
        path = path.substring(0, path.indexOf("/com"));
        path = path + "/static/";

        System.out.println(product);
        MultipartFile file = product.getFile();
        System.out.println(path);

        File dir = new File(path);
        if(!dir.isDirectory()) {
            dir.mkdirs();
        }

        try {
            file.transferTo(new File(path + file.getOriginalFilename()));
        } catch (IOException e) {
            e.printStackTrace();
        }
        product.setFileinfo(file.getOriginalFilename());
        product.setCreatetime(new Date());
        return productRepository.save(product);
    }

    @GetMapping("{id}")
    public ResponseEntity<Product> getProductId(@PathVariable long id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not exist with id" + id));
        return ResponseEntity.ok(product);
    }

    @PutMapping("{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable long id, @RequestBody Product product) {
        Product updateProduct = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

        updateProduct.setName(product.getName());
        updateProduct.setProduct_type(product.getProduct_type());
        updateProduct.setInfo(product.getInfo());
        updateProduct.setSize_width(product.getSize_width());
        updateProduct.setSize_hight(product.getSize_hight());
        updateProduct.setPrice(product.getPrice());
        productRepository.save(updateProduct);

        return ResponseEntity.ok(updateProduct);
    }


    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id) {

        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

        productRepository.delete(product);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

}