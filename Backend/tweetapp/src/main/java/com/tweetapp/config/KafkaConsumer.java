package com.tweetapp.config;

import com.tweetapp.model.Tweet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumer {

    @Autowired
    SimpMessagingTemplate template;

    // @KafkaListener(topics = "tweet", groupId = "group_id")
    // public void consumeTweet(Tweet tweet) {
    // template.convertAndSend("topic/tweets");
    // }

}
