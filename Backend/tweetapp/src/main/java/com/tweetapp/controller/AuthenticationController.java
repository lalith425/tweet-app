package com.tweetapp.controller;

import com.tweetapp.model.AuthenticateRequest;
import com.tweetapp.model.AuthenticateResponse;
import com.tweetapp.service.MyUserDetailsService;
import com.tweetapp.util.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin("*")
@Slf4j
public class AuthenticationController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtUtil jwtUtil;

    @Autowired
    MyUserDetailsService userDetailService;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public AuthenticateResponse getUserById(@RequestBody AuthenticateRequest aReq) throws Exception {
        try {
         log.info("Authentication Strated");
            authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(aReq.getLoginId(), aReq.getPassword()));
        } catch (BadCredentialsException e) {
            log.info("Invalid UserName Password");
            throw new Exception("Invalid UserName or Password", e);
        }

        final UserDetails userDetails = userDetailService.loadUserByUsername(aReq.getLoginId());
        final String jwt = jwtUtil.generateToken(userDetails);
        AuthenticateResponse response = new AuthenticateResponse();

        response.setJwt(jwt);
        response.setUserId(userDetails.getUsername());
        return response;

    }

}
