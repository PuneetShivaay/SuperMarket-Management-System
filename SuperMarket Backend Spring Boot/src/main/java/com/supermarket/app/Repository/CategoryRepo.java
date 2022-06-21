package com.supermarket.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.supermarket.app.model.Category;

public interface CategoryRepo  extends JpaRepository<Category, Long> {

}
