-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (x86_64)

--

-- Host: localhost    Database: newsdb

-- ------------------------------------------------------

-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */

;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */

;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */

;

/*!50503 SET NAMES utf8 */

;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */

;

/*!40103 SET TIME_ZONE='+00:00' */

;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */

;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */

;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */

;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */

;

--

-- Table structure for table `likes`

--

DROP TABLE IF EXISTS `likes`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `likes` (
        `id` int NOT NULL AUTO_INCREMENT,
        `new_id` int unsigned NOT NULL,
        `user_id` int unsigned NOT NULL,
        PRIMARY KEY (`id`),
        KEY `fk_new_likes_idx` (`new_id`),
        KEY `fk_user_likes_idx` (`user_id`),
        CONSTRAINT `fk_new_likes` FOREIGN KEY (`new_id`) REFERENCES `news` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
        CONSTRAINT `fk_user_likes` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb3;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `likes`

--

LOCK TABLES `likes` WRITE;

/*!40000 ALTER TABLE `likes` DISABLE KEYS */

;

INSERT INTO `likes` VALUES (2,68,7);

/*!40000 ALTER TABLE `likes` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `news`

--

DROP TABLE IF EXISTS `news`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `news` (
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
        PRIMARY KEY (
            `id`,
            `users_user_id`,
            `themes_themes_id`
        ),
        UNIQUE KEY `id_new_UNIQUE` (`id`),
        KEY `fk_news_users_idx` (`users_user_id`),
        KEY `fk_news_themes1_idx` (`themes_themes_id`),
        CONSTRAINT `fk_news_themes1` FOREIGN KEY (`themes_themes_id`) REFERENCES `themes` (`themes_id`),
        CONSTRAINT `fk_news_users` FOREIGN KEY (`users_user_id`) REFERENCES `users` (`user_id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 75 DEFAULT CHARSET = utf8mb3;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `news`

--

LOCK TABLES `news` WRITE;

/*!40000 ALTER TABLE `news` DISABLE KEYS */

;

INSERT INTO `news`
VALUES (
        67,
        'O Corno, 11 de septiembre',
        'nn9nXGSOI7RNk8AYIVjgSGR02TrP1y.jpg',
        'Jaione Camborda',
        'Illa de Arousa, 1971. María es una mujer que se gana la vida recogiendo marisco. También es conocida en la isla por ayudar a otras mujeres en el parto con especial dedicación y cuidado. Tras un suceso inesperado, se ve obligada a huir y emprende un peligroso viaje que le hará luchar por su supervivencia. En busca de su libertad, María decide cruzar la frontera por una de las rutas de contrabandistas entre Galicia y Portugal.',
        NULL,
        '2023-10-09 10:19:21',
        NULL,
        5,
        2,
        0
    ), (
        68,
        'Mejores series de 2023',
        'AEYE1yB560MQqVac8fY7kpj2nphw75.jpg',
        'Rankin según imdb',
        '-Este mundo no me hará mala persona - The Last Of Us - Kimetsu no Yaiba - One Piece - Beef',
        NULL,
        '2023-10-09 10:21:21',
        NULL,
        5,
        5,
        1
    ), (
        69,
        'El chico y la garza, de Hayao Miyazaki',
        'h1MsQFsAYcXYYdtHPz4Lvpb3GQnfYo.jpg',
        'Titulo original: Kimitachi wa do ikiru ka',
        'Miyazaki se despide con un milagro fuera del tiempo (...) una suerte de vademécum anárquico, doloroso y feliz de su cine, su vida y hasta su muerte (...) Es una película desmesuradamente bella; bella hasta hacer daño',
        NULL,
        '2023-10-09 10:22:39',
        NULL,
        5,
        4,
        0
    ), (
        70,
        'Sound of Freedom, 11 de septiembre',
        'fRfVUmtHk0Mgbmibn72ivRQwsFbOMs.jpg',
        'Alejandro Monteverde',
        'Narra la historia de Tim Ballard, un ex Agente de Seguridad Nacional de Estados Unidos que dejó su trabajo para dedicar su vida, sumergiéndose en el submundo del tráfico de personas a lo largo de Latinoamérica, a intentar salvar las vidas de cientos de niños. ',
        NULL,
        '2023-10-09 10:25:51',
        NULL,
        6,
        2,
        0
    ), (
        71,
        'Orlando, mi biografía política',
        '9eLZ5H2diYLRs3ifOLvmpHkRHmpDZS.jpg',
        'Paul B. Preciado',
        'En 1928, Virginia Woolf publica Orlando, la primera novela en la que el personaje principal cambia de sexo en medio de la historia. Un siglo más tarde, el filósofo Paul B. Preciado decide escribirle una carta a Virginia Woolf: su Orlando ha salido de la ficción y lleva una vida que jamás habría imaginado',
        NULL,
        '2023-10-09 10:27:14',
        NULL,
        6,
        2,
        0
    ), (
        72,
        'Mejores películas del siglo XXI',
        'R1GR2rPXE5l9mocSXz1Ifgd4QfRSk2.jpg',
        'Ranking según imdb',
        '-Ciudad de Dios -El Pianista - Gran Torino -El Caballero Oscuro - El Secreto de sus ojos - El viaje de Chihiro',
        NULL,
        '2023-10-09 10:30:59',
        NULL,
        7,
        5,
        0
    ), (
        73,
        'Mejores documentales sobre historia del cine',
        'qpoY5eMOfRIcT0lHxNgQQSk9zU7XZh.jpg',
        'ranking según filmaffinity',
        '-	Shoah -	Human -	Samsara -	Life of Crime -	La batalla de Chile',
        NULL,
        '2023-10-09 10:32:39',
        NULL,
        7,
        5,
        0
    ), (
        74,
        'Prueba ',
        'imageNotFound.jpg',
        'ImageNotFound',
        'asdasdasdasd',
        NULL,
        '2023-10-11 09:54:26',
        NULL,
        8,
        6,
        0
    );

/*!40000 ALTER TABLE `news` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `themes`

--

DROP TABLE IF EXISTS `themes`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `themes` (
        `themes_id` int NOT NULL AUTO_INCREMENT,
        `theme_name` varchar(45) NOT NULL,
        PRIMARY KEY (`themes_id`),
        UNIQUE KEY `theme_name_UNIQUE` (`theme_name`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 7 DEFAULT CHARSET = utf8mb3;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `themes`

--

LOCK TABLES `themes` WRITE;

/*!40000 ALTER TABLE `themes` DISABLE KEYS */

;

INSERT INTO `themes`
VALUES (1, 'Celebrities'), (6, 'Festivals'), (3, 'Oscars 2024'), (2, 'Premieres'), (5, 'Ranking'), (4, 'Reviews');

/*!40000 ALTER TABLE `themes` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `users`

--

DROP TABLE IF EXISTS `users`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `users` (
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
    ) ENGINE = InnoDB AUTO_INCREMENT = 9 DEFAULT CHARSET = utf8mb3;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `users`

--

LOCK TABLES `users` WRITE;

/*!40000 ALTER TABLE `users` DISABLE KEYS */

;

INSERT INTO `users`
VALUES (
        1,
        'Lucia',
        'lu@lu.com',
        '$2b$10$h9gN1MNU0wLnN9E42oXpmOypBGcAsDBUQ6iGezWNnuxV07V2ALFii',
        'null',
        '2023-09-28 10:19:08',
        NULL,
        NULL
    ), (
        2,
        'lulu',
        'lulu@gmail.com',
        '$2b$10$tAZMdcLykZyMqCpzGDV7TuvMvwXQZqruhDXHwqmOh57ngLd8DDvWC',
        'null',
        '2023-09-28 16:32:47',
        NULL,
        NULL
    ), (
        3,
        'lula',
        'lula@gmail.com',
        '$2b$10$WtBRSG/28SW4H2xPoX.eROzN6I8skOiSGWhP7u3iO9FOR6Gqb1h8G',
        'null',
        '2023-10-06 09:38:53',
        NULL,
        NULL
    ), (
        4,
        'pepe',
        'pepe@pepe.com',
        '$2b$10$t/Cg9DUhEHq1jVoFbSdkVOxdEE2gTSBOX/fhdhvs7/ywd0YZlZBEC',
        'null',
        '2023-10-06 10:30:44',
        NULL,
        NULL
    ), (
        5,
        'Nana',
        'nana@nana.com',
        '$2b$10$BhaqNTAmY5iOxEF.IRPPiu105SadRLtPQAwaL5vMVx/eCmCntNejO',
        'null',
        '2023-10-09 10:18:09',
        NULL,
        NULL
    ), (
        6,
        'Juan',
        'juan@juan.com',
        '$2b$10$PKeCT/Z0KRKHy9p8IjPjRez3vEoSiq/Q8OGUeDkxf3mYiF8P3WyZy',
        'null',
        '2023-10-09 10:24:09',
        NULL,
        NULL
    ), (
        7,
        'David',
        'david@david.com',
        '$2b$10$CYDtz5zrR3yMmI/8BxJ1DugLYhlOjVTfwlWXbWunRKHgLL1yA4xEu',
        'null',
        '2023-10-09 10:29:24',
        NULL,
        NULL
    ), (
        8,
        'haess',
        'haess@haess.com',
        '$2b$10$8PjAgNrknN2R4RJ2mXL4IuSt89UeFvSPyALJRMZ5kocV4J0O4PSE2',
        'null',
        '2023-10-11 09:53:40',
        NULL,
        NULL
    );

/*!40000 ALTER TABLE `users` ENABLE KEYS */

;

UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */

;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */

;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */

;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */

;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */

;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */

;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */

;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */

;

-- Dump completed on 2023-10-11 10:27:11