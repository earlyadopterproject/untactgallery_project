package com.adopter.gallery.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "board")
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product")
    private String product;

    @Column(name = "cost")
    private Integer cost;


}
