package com.tweetapp.controller;

import java.util.List;

import com.tweetapp.model.Comments;
import com.tweetapp.model.Tweet;
import com.tweetapp.model.TweetMsg;
import com.tweetapp.service.TweetService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tweets")
public class TweetController {

    @Autowired
    TweetService tweetSercice;

    @PostMapping("{loginId}/add")
    public Boolean addUserTweet(@PathVariable("loginId") String loginId, @RequestBody TweetMsg tweet) {

        tweetSercice.addUserTweet(loginId, tweet.getTweetMsg());

        return true;
    }

    @GetMapping("/all")
    public List<Tweet> getAllUsers() {
        List<Tweet> tweetList = tweetSercice.getAllTweets();
        return tweetList;
    }

    @GetMapping("/all/{loginId}")
    public List<Tweet> getTweetsOfUser(@PathVariable("loginId") String loginId) {
        List<Tweet> tweetList = tweetSercice.getTweetsOfUser(loginId);
        return tweetList;
    }

    @PutMapping("/{loginId}/update/{tweetId}")
    public Tweet updateTweet(@PathVariable("loginId") String loginId, @PathVariable("tweetId") String tweetId,
            @RequestBody TweetMsg tweet) {
        Tweet tweetList = tweetSercice.updateTweet(tweetId, tweet.getTweetMsg());
        return tweetList;
    }

    @DeleteMapping("/{loginId}/delete/{tweetId}")
    public Boolean deleteTweet(@PathVariable("loginId") String loginId, @PathVariable("tweetId") String tweetId) {
        tweetSercice.deleteTweet(tweetId);
        return true;
    }

    @PutMapping("/{loginId}/like/{tweetId}")
    public Tweet likeTweet(@PathVariable("loginId") String loginId, @PathVariable("tweetId") String tweetId) {
        System.out.println("inside tweet");
        Tweet tweetList = tweetSercice.likeTweet(loginId, tweetId);
        return tweetList;
    }

    @PutMapping("/{loginId}/reply/{tweetId}")
    public Tweet replyTweet(@PathVariable("loginId") String loginId, @PathVariable("tweetId") String tweetId,
            @RequestBody Comments comment) {
        Tweet tweetList = tweetSercice.replyTweet(loginId, tweetId, comment);
        return tweetList;
    }

}
