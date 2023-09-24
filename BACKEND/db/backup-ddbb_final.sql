-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: newsdb
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `likes`
--
CREATE SCHEMA IF NOT EXISTS `newsdb` DEFAULT CHARACTER SET utf8 ;

USE `newsdb` ;
DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `new_id` int unsigned NOT NULL,
  `user_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_new_likes_idx` (`new_id`),
  KEY `fk_user_likes_idx` (`user_id`),
  CONSTRAINT `fk_new_likes` FOREIGN KEY (`new_id`) REFERENCES `news` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_likes` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (13,4,2),(25,10,3),(30,4,3),(31,4,9),(74,10,9),(75,5,9),(79,1,9);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `new_title` varchar(100) NOT NULL,
  `new_pic` varchar(100) DEFAULT NULL,
  `new_entrance` varchar(100) DEFAULT NULL,
  `new_text` varchar(1000) NOT NULL,
  `new_video` varchar(100) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime DEFAULT NULL,
  `users_user_id` int unsigned NOT NULL,
  `themes_themes_id` int NOT NULL,
  `new_likes` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`,`users_user_id`,`themes_themes_id`),
  UNIQUE KEY `id_new_UNIQUE` (`id`),
  KEY `fk_news_users_idx` (`users_user_id`),
  KEY `fk_news_themes1_idx` (`themes_themes_id`),
  CONSTRAINT `fk_news_themes1` FOREIGN KEY (`themes_themes_id`) REFERENCES `themes` (`themes_id`),
  CONSTRAINT `fk_news_users` FOREIGN KEY (`users_user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'Titanic',NULL,'Pelicla antigua','Une pelicula muy bonita',NULL,'2023-09-23 12:18:13',NULL,3,1,1),(3,'Megalodon17','fRXTzarPUb0VjhV4u4gVWWIDQEs4RO.jpg','Peli de tiburones','Es un truño de los buenos',NULL,'2023-09-23 12:18:54',NULL,3,2,0),(4,'Titanic',NULL,'Pelicla antigua','Une pelicula muy bonita',NULL,'2023-09-23 12:19:49',NULL,2,1,10),(5,'Ultima',NULL,'Pelicla antigua','Une pelicula muy bonita',NULL,'2023-09-23 12:20:05',NULL,2,1,4),(7,'Ultima',NULL,'Pelicla antigua','Une pelicula muy bonita',NULL,'2023-09-24 11:22:59',NULL,2,1,0),(8,'Ultima',NULL,'Pelicla antigua','Une pelicula muy bonita',NULL,'2023-09-24 11:23:05',NULL,2,1,0),(10,'The King\'s Man: La primera misión',NULL,'Título original: The King\'s Man','Las mentes criminales y los más grandes tiranos de la historia planean aniquilar a millones de personas. Un hombre luchará contra el tiempo para evitar lo peor. Nace así la primera agencia de inteligencia independiente del Reino Unido.',NULL,'2023-09-24 11:28:31',NULL,8,3,25),(11,'Loa Goonies','UuDBNuVwh71gs7vFfBvefMnbY4km1T.jpg','Peli de tiburones','Es un truño de los buenos',NULL,'2023-09-24 11:56:21',NULL,3,2,0);
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `themes`
--

DROP TABLE IF EXISTS `themes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `themes` (
  `themes_id` int NOT NULL AUTO_INCREMENT,
  `theme_name` varchar(45) NOT NULL,
  PRIMARY KEY (`themes_id`),
  UNIQUE KEY `theme_name_UNIQUE` (`theme_name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `themes`
--

LOCK TABLES `themes` WRITE;
/*!40000 ALTER TABLE `themes` DISABLE KEYS */;
INSERT INTO `themes` VALUES (1,'celebrities'),(6,'festivals'),(3,'oscars_2024'),(2,'premieres'),(5,'ranking'),(4,'reviews');
/*!40000 ALTER TABLE `themes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(200) NOT NULL,
  `user_avatar` varchar(100) DEFAULT 'null',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime DEFAULT NULL,
  `biography` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  UNIQUE KEY `user_name_UNIQUE` (`user_name`),
  UNIQUE KEY `user_email_UNIQUE` (`user_email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'pepe','borrasdoo@ad.com','$2b$10$cBRh./k.RVEOo6cNc5MPFONkX5r5Hj55NxMe2f4WYzb6zKY8Xjvb.','null','2023-09-23 12:15:57',NULL,NULL),(2,'alfonso','borrasdo@ad.com','$2b$10$DNrWdTlXBdTW6h.h.2u6.uph9t4yzlgOX2tVAUQYteYJn7Mgs.SA.','null','2023-09-23 12:16:26',NULL,NULL),(3,'julio','julioo@ad.com','$2b$10$8sDtGNbzE8LATTZcXJjxG.Cs6Dor9pQPu7t.iyg4HRRKXsJkn3F.u','null','2023-09-23 12:16:41',NULL,NULL),(6,'Nachete','nachocortesosuna@gmail.com','$2b$10$sbqfxJ9hCKSitPfphmaEweeyhVp4qAya9iuillQHFYQBD1l1Y9H/K','null','2023-09-24 11:01:28',NULL,NULL),(7,'alfonsox','alfonsocambio@ad.com','$2b$10$H30yi4eC1j2BLW1FX9lvTeTE9g4iaXldO929p1JGZBgSggndEThEO','null','2023-09-24 11:01:52',NULL,NULL),(8,'Nacheteeee','nachocortesosunaaaa@gmail.com','$2b$10$YtJly.KpXeHS.cokBaaQ6.k.dp9bvncC46dl/hf8OTY1ltR73fhlS','null','2023-09-24 11:16:13',NULL,NULL),(9,'hector','hector@ad.com','$2b$10$D1z6bFw5pN/WGKLhy0Wa1Oux5fu.AHhohffu4AK3Pm.kRLIo7Z242','null','2023-09-24 11:36:33',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-24 12:18:47
