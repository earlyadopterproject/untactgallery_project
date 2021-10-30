package com.adopter.gallery.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@NoArgsConstructor
@Data
@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "price")
    private long price;

    @Column(name = "info")
    private String info;

    @Builder
    public Product(String title, long price, String info) {
        this.title = title;
        this.price = price;
        this.info = info;
    }
}
