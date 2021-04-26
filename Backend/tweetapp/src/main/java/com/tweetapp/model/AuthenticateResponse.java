package com.tweetapp.model;

import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class AuthenticateResponse {
    String userId;
    String jwt;
}
