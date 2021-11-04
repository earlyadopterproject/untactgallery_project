package com.adopter.gallery.model;

import lombok.Builder;
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
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private Integer price;

    @Column(name = "info")
    private String info;

    @Column(name = "sizeWidth")
    private String sizeWidth;

    @Column(name = "sizeHight")
    private String sizeHight;

    @Enumerated(EnumType.STRING)
    private ProductType productType;

    @Enumerated(EnumType.STRING)
    private ProductStatus productStatus;

    @Builder
    public Product(String name, int price, String info, String sizeWidth, String sizeHight,
                   ProductType productType, ProductStatus productStatus) {
        this.name = name;
        this.price = price;
        this.info = info;
        this.sizeWidth = sizeWidth;
        this.sizeHight = sizeHight;
        this.productType = productType;
        this.productStatus = productStatus;
    }
}
