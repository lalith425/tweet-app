package com.tweetapp.repository;

import java.util.List;

import com.tweetapp.model.Tweet;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TweetRepository extends MongoRepository<Tweet, String> {

    public List<Tweet> findByUserId(String userId);

    public Tweet findByTweetId(String tweetId);
}
