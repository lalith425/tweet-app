package com.tweetapp.model;

import lombok.Data;

@Data
public class AuthenticateRequest {
    String loginId;
    String password;

}
