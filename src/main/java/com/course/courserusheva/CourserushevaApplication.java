package com.course.courserusheva;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController

public class CourserushevaApplication {
 @GetMapping(value="/hello")
 public String getMenthodName(){
	 return "Hello";
 }
	public static void main(String[] args) {
		SpringApplication.run(CourserushevaApplication.class, args);
	}

}
