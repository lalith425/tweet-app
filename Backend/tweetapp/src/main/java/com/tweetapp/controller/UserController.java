package com.tweetapp.controller;

import java.util.List;
import java.util.Optional;

import com.tweetapp.exception.UserAlreadyExistException;
import com.tweetapp.model.AuthenticateRequest;
import com.tweetapp.model.Users;
import com.tweetapp.service.MyUserDetailsService;
import com.tweetapp.service.UserService;
import com.tweetapp.util.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/tweetapp")
@Slf4j
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    MyUserDetailsService userDetailService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtUtil jwtUtil;

    @PostMapping("/signup")
    public Boolean signUpUser(@RequestBody Users user) throws UserAlreadyExistException {
        try {
            log.info("add a user");
            userService.signUpUser(user);
        } catch (UserAlreadyExistException e) {
            return false;
        }
        return true;
    }

    @GetMapping("/user/all")
    public List<Users> getAllUsers() {
        log.info("get all user");
        System.out.println("LLLLLLLLLL ");
        List<Users> userList = userService.getAllUsers();
        return userList;
    }

    @GetMapping("/user/{userName}")
    public List<Users> getUserById(@PathVariable("userName") String userName) {
        log.info("get user");
        return userService.getUserById(userName);
    }

    @PutMapping("/user/forgetpassword")
    public ResponseEntity<?> getUserById(@RequestBody AuthenticateRequest aReq) throws Exception {
        try {
            log.info("changing password");
            userService.forgetPassword(aReq);
        } catch (UsernameNotFoundException e) {
            throw e;

        }

        return ResponseEntity.ok("PASSWORD UPDATED SUCCESSFULLY");
    }

}
