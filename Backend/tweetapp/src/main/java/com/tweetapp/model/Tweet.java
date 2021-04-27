package com.tweetapp.model;

import java.time.LocalDate;
import java.util.Date;


import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "tweet")
public class Tweet {
    @Id
    String tweetId;
    String userId;
    String tweetPost;
    List<String> likedUsers;
    List<Comments> commentsPosted;

    @CreatedDate
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    LocalDate createdDate;

    @LastModifiedDate
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    LocalDate updatedDate;

}
