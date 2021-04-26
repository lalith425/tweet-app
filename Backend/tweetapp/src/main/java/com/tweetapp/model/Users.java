package com.tweetapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "users")
public class Users {
    @Id
    String userId;
    String firstName;
    String lastName;
    String email;
    String loginId;
    String password;
    String contactNumber;

}
