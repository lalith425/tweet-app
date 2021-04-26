package com.tweetapp.model;

import java.util.List;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Tweet {
    @Id
    String tweetId;
    String userId;
    String tweetPost;
    List<String> likedUsers;
    List<Comments> commentsPosted;

}
