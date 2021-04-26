package com.tweetapp.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

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
    Date createdDate;

    @LastModifiedDate
    Date updatedDate;

}
