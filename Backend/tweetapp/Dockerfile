FROM openjdk:11-jdk
RUN mkdir app
COPY target/tweetapp-*.jar app/app.jar
CMD ["java","-jar","/app/app.jar"]
