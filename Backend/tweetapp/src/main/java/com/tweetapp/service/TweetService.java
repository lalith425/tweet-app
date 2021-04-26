package com.tweetapp.service;

import java.util.ArrayList;
import java.util.List;

import com.tweetapp.model.Comments;
import com.tweetapp.model.Tweet;
import com.tweetapp.repository.TweetRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class TweetService {

    @Autowired
    TweetRepository tweetRepository;

    @Autowired
    KafkaTemplate<String, Tweet> kafkaTemplate;

    public static final String TOPIC = "tweet";

    public Tweet addUserTweet(String loginId, String tweet) {
        Tweet tweetObj = new Tweet();
        tweetObj.setTweetPost(tweet);
        tweetObj.setUserId(loginId);
        tweetObj.setLikedUsers(new ArrayList<>());
        tweetObj.setCommentsPosted(new ArrayList<>());
        // kafkaTemplate.send(TOPIC, tweetObj);
        return tweetRepository.save(tweetObj);
    }

    public List<Tweet> getAllTweets() {
        return tweetRepository.findAll();
    }

    public List<Tweet> getTweetsOfUser(String loginId) {
        return tweetRepository.findByUserId(loginId);
    }

    public Tweet updateTweet(String tweetId, String tweetMsg) {
        Tweet tweetToUpdate = tweetRepository.findByTweetId(tweetId);
        tweetToUpdate.setTweetPost(tweetMsg);
        return tweetRepository.save(tweetToUpdate);

    }

    public void deleteTweet(String tweetId) {
        tweetRepository.deleteById(tweetId);

    }

    public Tweet likeTweet(String loginId, String tweetId) {
        Tweet tweetToUpdate = tweetRepository.findByTweetId(tweetId);
        List<String> likedList = tweetToUpdate.getLikedUsers();
        if (likedList.contains(loginId)) {
            likedList.remove(loginId);
        } else {
            likedList.add(loginId);
        }
        tweetToUpdate.setLikedUsers(likedList);
        return tweetRepository.save(tweetToUpdate);
    }

    public Tweet replyTweet(String loginId, String tweetId, Comments comment) {
        Tweet tweetToUpdate = tweetRepository.findByTweetId(tweetId);
        List<Comments> replyCommentLists = tweetToUpdate.getCommentsPosted();
        comment.setUserId(loginId);
        replyCommentLists.add(comment);
        tweetToUpdate.setCommentsPosted(replyCommentLists);
        return tweetRepository.save(tweetToUpdate);

    }

}
