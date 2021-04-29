// package com.tweetapp.config;

// import java.util.HashMap;
// import java.util.Map;

// import com.tweetapp.model.Tweet;

// import org.apache.kafka.clients.consumer.ConsumerConfig;
// import org.apache.kafka.clients.producer.ProducerConfig;
// import org.apache.kafka.common.serialization.StringDeserializer;
// import org.apache.kafka.common.serialization.StringSerializer;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.kafka.annotation.EnableKafka;
// import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
// import org.springframework.kafka.core.ConsumerFactory;
// import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
// import org.springframework.kafka.core.DefaultKafkaProducerFactory;
// import org.springframework.kafka.core.KafkaTemplate;
// import org.springframework.kafka.core.ProducerFactory;
// import org.springframework.kafka.support.serializer.JsonDeserializer;
// import org.springframework.kafka.support.serializer.JsonSerializer;

// @Configuration
// // @EnableKafka
// public class KafkaConfiguration {

//     @Bean
//     public ProducerFactory producerFactory() {

//         Map<String, Object> config = new HashMap<>();
//         config.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "127.0.0.1:9092");
//         config.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
//         config.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
//         return new DefaultKafkaProducerFactory<>(config);
//     }

//     @Bean
//     public KafkaTemplate<String, Tweet> kafkaTemplate() {
//         return new KafkaTemplate<>(producerFactory());
//     }

//     @Bean
//     public ConsumerFactory<String, Tweet> consumerFactory() {
//         Map<String, Object> config = new HashMap<>();
//         config.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "127.0.0.1:9092");
//         config.put(ConsumerConfig.GROUP_ID_CONFIG, "group_Id");
//         config.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
//         config.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);

//         return new DefaultKafkaConsumerFactory<String, Tweet>(config, new StringDeserializer(),
//                 new JsonDeserializer<>(Tweet.class));
//     }

//     @Bean
//     public ConcurrentKafkaListenerContainerFactory<String, Tweet> kafkaListenerContainerFactory() {

//         ConcurrentKafkaListenerContainerFactory<String, Tweet> factory = new ConcurrentKafkaListenerContainerFactory();
//         factory.setConsumerFactory(consumerFactory());
//         return factory;
//     }

// }
