package com.supermarket.app.controller;

import java.util.HashMap;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.supermarket.app.UserServices.UserService;
import com.supermarket.app.controller.RequestPojo.ApiResponse;
import com.supermarket.app.model.User;

@RestController
@RequestMapping("api/signup")
public class SignUpController {
	@Autowired
	  UserService userservice;
	@RequestMapping("user")
	public ResponseEntity<?> userLogin(@RequestBody HashMap<String,String> signupRequest) {
		try {
			//TODO validation has to add for client request
			User user = userservice.signUpUser(signupRequest);
			return  ResponseEntity.ok(user);
		}catch(Exception e ) {
			return ResponseEntity.badRequest().body(new ApiResponse(e.getMessage(), ""));
		}
	}
}
