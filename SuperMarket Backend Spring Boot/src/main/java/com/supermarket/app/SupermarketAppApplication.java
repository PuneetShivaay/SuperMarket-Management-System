package com.supermarket.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;


@SpringBootApplication
public class SupermarketAppApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(SupermarketAppApplication.class, args);
	}
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(SupermarketAppApplication.class);
	}

}
