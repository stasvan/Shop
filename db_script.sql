CREATE DATABASE  IF NOT EXISTS `shop` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `shop`;
-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: shop
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  `registration_date` datetime NOT NULL,
  `phone` varchar(45) NOT NULL,
  `address_id` int(11) NOT NULL,
  `avatar` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_account_user1_idx` (`user_id`),
  KEY `fk_account_address1_idx` (`address_id`),
  CONSTRAINT `fk_account_address1` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
  CONSTRAINT `fk_account_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=360 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,1,'Ivan','Staselovich','2019-03-15 13:19:21','+375(25)111-11-88',1,'empty.png'),(20,18,'Popo','Popop','2019-04-22 17:48:40','+375(25)342-66-33',19,'empty.png'),(23,21,'Vera','Staselovich','2019-04-22 18:15:43','+375(25)333-22-99',22,'empty.png'),(197,195,'Egor','Erogka','2019-05-22 19:37:56','+375(29)545-45-45',196,'empty.png'),(198,196,'a','a','2019-05-22 19:42:56','+111(11)111-11-11',198,'empty.png'),(285,283,'Roman','Neklukov','2019-05-23 22:53:04','+375(25)898-67-34',284,'empty.png'),(327,325,'Ffewf','wefwefwe','2019-05-24 00:53:31','+324(23)423-42-34',326,'empty.png'),(349,347,'Ivan','Staselovich','2019-05-24 10:17:43','+375(29)111-11-11',348,'empty.png'),(359,357,'Ivan','Staselovich','2019-06-27 16:44:56','+375(29)118-89-88',358,'empty.png');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `street` varchar(45) NOT NULL,
  `house` varchar(45) NOT NULL,
  `apartment` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=359 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'Belarus','Minsk','Pobediteley','75','281'),(2,'Belarus','Minsk','Pobediteley','80',NULL),(3,'Belarus','Minsk','Masherova','53',NULL),(19,'Belarus','Minsk','Masherova','50','21'),(22,'Russia','Moscow','Dadad','1','1'),(178,'Belarus','Gomel','Totar','56','23'),(196,'Belarus','Minsk','Egor','EG2','12'),(197,'Belarus','Minsk','Egor','EG2','13'),(198,'Belarus','Minsk','Aaaaa','A2',NULL),(284,'Belarus','Minsk','Pushkinskaya','7','16'),(285,'Belarus','Minsk','Pushkinskaya','7','17'),(326,'ttrgrth','rthrthtrhtr','hrthtrhtr','htrtr','htr'),(348,'Belarus','Minsk','Tolstogo','10','10'),(358,'Belarus','Minsk','Pobediteley','228','228');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `site` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'Apple','www.apple.com'),(2,'Samsung','www.samsung.com'),(3,'Huawei','www.huawei.com'),(4,'Honor','www.hihonor.com'),(5,'HP','www.hp.com'),(6,'Sony','www.sony.com'),(7,'Xiaomi','www.xiaomi.com');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_item`
--

DROP TABLE IF EXISTS `cart_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cart_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fixed_price` decimal(13,2) NOT NULL,
  `product_shop_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKl70asp4l4w0jmbm1tqyofho4o` (`user_id`),
  KEY `FKp75f02dv5tq422kn80jmn2cek` (`product_shop_id`),
  CONSTRAINT `FKl70asp4l4w0jmbm1tqyofho4o` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKp75f02dv5tq422kn80jmn2cek` FOREIGN KEY (`product_shop_id`) REFERENCES `product_shop` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=366 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_item`
--

LOCK TABLES `cart_item` WRITE;
/*!40000 ALTER TABLE `cart_item` DISABLE KEYS */;
INSERT INTO `cart_item` VALUES (261,550.00,2,196),(262,500.00,1,196),(263,650.00,6,196),(264,600.00,5,196),(346,499.00,21,325),(361,800.00,7,1),(362,1150.00,52,1),(363,1100.00,50,1),(364,310.00,14,1),(365,400.00,15,1);
/*!40000 ALTER TABLE `cart_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (366);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `laptop`
--

DROP TABLE IF EXISTS `laptop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `laptop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `model` varchar(45) NOT NULL,
  `year` int(11) NOT NULL,
  `screen_resolution` varchar(45) NOT NULL,
  `screen_diagonal` varchar(45) NOT NULL,
  `screen_technology` varchar(45) NOT NULL,
  `CPU` varchar(45) NOT NULL,
  `RAM` varchar(45) NOT NULL,
  `camera` varchar(45) DEFAULT NULL,
  `image_name` varchar(255) NOT NULL,
  `storage` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_laptop_brand1_idx` (`brand_id`),
  KEY `fk_laptop_product1_idx` (`product_id`),
  CONSTRAINT `fk_laptop_brand1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  CONSTRAINT `fk_laptop_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `laptop`
--

LOCK TABLES `laptop` WRITE;
/*!40000 ALTER TABLE `laptop` DISABLE KEYS */;
INSERT INTO `laptop` VALUES (1,12,1,'MacBook Pro 15\" Touch Bar MR942',2018,'2880x1800 pixels','15.4\"','Retina','Intel Core i7 8850H','16 GB DDR4','0.92 MP','apple_macbook_pro_touch_bar_mr942.png','512 GB SSD'),(2,13,3,'MateBook X Pro MACH W29C',2018,'3000x2000 pixels','13.9\"','IPS','Intel Core i7 8550U','16 GB LPDDR3','1 MP','huawei_matebook_x_pro_mach_w29c.png','512 GB SSD'),(3,14,5,'OMEN 15 dc0004ur 4HF24EA',2018,'1920x1080 pixels','15.6\"','IPS','Intel Core i5 8300H','16 GB DDR4','1.3 MP','hp_omen_15_dc0004ur_4hf24ea.png','1000+256 GB HDD+SSD'),(4,15,1,'MacBook Air 13\" MQD32',2017,'1440x900 pixels','13.3\"','TN+Film','Intel Core i5 5350U','8 GB LPDDR3','0.92 MP','apple_macbook_air_mqd32.png','128 GB SSD'),(5,16,5,'Spectre x360 15 df0000ur 5KT17EA',2018,'3840x2160 pixels','15.6\"','IPS, touch screen','Intel Core i7 8565U','16 GB DDR4','2 MP','hp_spectre_x360_15_df0000ur_5kt17ea.png','512 GB SSD'),(6,17,5,'Pavilion 15 bc402ur 5GV06EA',2018,'1920x1080 pixels','15.6\"','TN+Film','Intel Core i5 8300H','8 GB DDR4','1.3 MP','hp_pavilion_15_bc402ur_5gv06ea.png','1000 GB HDD');
/*!40000 ALTER TABLE `laptop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id_user` int(11) NOT NULL,
  `address_id` int(11) NOT NULL,
  `product_shop_price_id` int(11) NOT NULL,
  `fixed_price` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_order_user1_idx` (`user_id_user`),
  KEY `fk_order_address1_idx` (`address_id`),
  KEY `fk_order_product_shop_price1_idx` (`product_shop_price_id`),
  CONSTRAINT `fk_order_address1` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
  CONSTRAINT `fk_order_product_shop_price1` FOREIGN KEY (`product_shop_price_id`) REFERENCES `product_shop` (`id`),
  CONSTRAINT `fk_order_user1` FOREIGN KEY (`user_id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phone`
--

DROP TABLE IF EXISTS `phone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `phone` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `model` varchar(45) NOT NULL,
  `year` int(11) NOT NULL,
  `screen_resolution` varchar(45) NOT NULL,
  `screen_technology` varchar(100) NOT NULL,
  `CPU` varchar(100) NOT NULL,
  `RAM` varchar(45) NOT NULL,
  `image_name` varchar(255) NOT NULL,
  `camera` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_phone_product_idx` (`product_id`),
  KEY `fk_phone_brand1_idx` (`brand_id`),
  CONSTRAINT `fk_phone_brand1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  CONSTRAINT `fk_phone_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phone`
--

LOCK TABLES `phone` WRITE;
/*!40000 ALTER TABLE `phone` DISABLE KEYS */;
INSERT INTO `phone` VALUES (1,1,1,'iPhone 5',2012,'640x1136 pixels','IPS LCD capacitive touchscreen, 16M colors','Dual-core 1.3 GHz Swift (ARM v7-based)','1GB','apple_iphone_5.png','8MP'),(2,2,1,'iPhone 6 Plus',2014,'1080x1920 pixels','IPS LCD capacitive touchscreen, 16M colors','Dual-core 1.4 GHz Typhoon (ARM v8-based)','1GB','apple_iphone_6_plus.png','8MP'),(3,3,2,'Galaxy S9',2018,'1440x2960 pixels','Super AMOLED capacitive touchscreen, 16M colors','Octa-core (4x2.7 GHz Mongoose M3 & 4x1.8 GHz Cortex-A55) - EMEA','4GB','samsung_galaxy_s9.png','12MP'),(4,4,1,'iPhone 8',2017,'750x1334 pixels','IPS LCD capacitive touchscreen, 16M colors','Hexa-core (2x Monsoon + 4x Mistral)','2GB','apple_iphone_8.png','12MP'),(5,5,1,'iPhone X',2017,'1125x2436 pixels','OLED capacitive touchscreen, 16M colors','Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)','3GB','apple_iphone_x.png','12MP'),(6,6,2,'Galaxy S10 Plus',2019,'1440x3040 pixels','Dynamic AMOLED capacitive touchscreen, 16M colors','Octa-core (2x2.73 GHz Mongoose M4 & 2x2.31 GHz Cortex-A75 & 4x1.95 GHz Cortex-A55) - EMEA','12GB','samsung_galaxy_s10_plus.png','16MP'),(7,7,2,'Galaxy A30',2019,'1080x2340 pixels','Super AMOLED capacitive touchscreen, 16M colors','Octa-core (2x1.8 GHz Cortex-A73 & 6x1.6 GHz Cortex-A53)','4GB','samsung_galaxy_a30.png','16MP'),(8,8,3,'P20 Lite',2018,'1080x2280 pixels','LTPS IPS LCD capacitive touchscreen, 16M colors','Octa-core (4x2.36 GHz Cortex-A53 & 4x1.7 GHz Cortex-A53)','4GB','huawei_p20 _lite.png','16MP'),(9,9,3,'P Smart 2019',2018,'1080x2340 pixels','LTPS IPS LCD capacitive touchscreen, 16M colors','Octa-core (4x2.2 GHz Cortex-A73 & 4x1.7 GHz Cortex-A53)','3GB','huawei_p_smart.png','13MP'),(10,10,4,'8X',2018,'1080x2340 pixels','LTPS IPS LCD capacitive touchscreen, 16M colors','Octa-core (4x2.2 GHz Cortex-A73 & 4x1.7 GHz Cortex-A53)','6GB','honor_8x.png','20MP'),(11,11,4,'10 Lite',2018,'1080x2340 pixels','IPS LCD capacitive touchscreen, 16M colors','Octa-core (4x2.2 GHz Cortex-A73 & 4x1.7 GHz Cortex-A53)','6GB','honor_10_lite.png','13MP');
/*!40000 ALTER TABLE `phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_type1_idx` (`type_id`),
  CONSTRAINT `fk_product_type1` FOREIGN KEY (`type_id`) REFERENCES `product_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(18,2),(19,2),(20,2),(21,2),(22,2),(12,3),(13,3),(14,3),(15,3),(16,3),(17,3);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_shop`
--

DROP TABLE IF EXISTS `product_shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `product_shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `price` decimal(13,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_shop_price_product1_idx` (`product_id`),
  KEY `fk_product_shop_price_shop1_idx` (`shop_id`),
  CONSTRAINT `fk_product_shop_price_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  CONSTRAINT `fk_product_shop_price_shop1` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_shop`
--

LOCK TABLES `product_shop` WRITE;
/*!40000 ALTER TABLE `product_shop` DISABLE KEYS */;
INSERT INTO `product_shop` VALUES (1,1,1,500.00),(2,1,2,550.00),(5,2,1,600.00),(6,2,2,650.00),(7,3,1,800.00),(8,13,2,2000.00),(9,18,2,800.00),(10,18,4,799.00),(11,18,7,840.00),(12,19,8,900.00),(13,20,4,300.00),(14,20,1,310.00),(15,21,1,400.00),(16,21,2,399.00),(17,21,4,410.00),(18,21,7,500.00),(19,21,8,399.00),(20,22,8,1200.00),(21,1,4,499.00),(22,1,7,500.00),(23,1,8,600.00),(24,2,8,610.00),(25,3,2,800.00),(26,3,4,800.00),(27,3,8,750.00),(28,4,7,700.00),(29,4,8,710.00),(30,4,1,700.00),(31,5,2,900.00),(32,5,7,950.00),(33,5,4,900.00),(34,6,2,900.00),(35,6,8,990.00),(36,7,1,400.00),(37,8,1,350.00),(38,9,2,400.00),(39,9,4,410.00),(40,9,8,400.00),(41,10,4,500.00),(42,10,7,510.00),(43,11,4,600.00),(44,11,8,650.00),(45,12,1,2000.00),(46,12,2,2000.00),(47,12,7,2200.00),(48,12,8,2250.00),(49,12,4,1990.00),(50,14,2,1100.00),(51,14,7,1200.00),(52,14,8,1150.00),(54,15,4,700.00),(55,15,2,710.00),(56,16,2,2000.00),(57,16,4,1900.00),(58,16,8,1900.00),(59,17,1,800.00),(60,17,2,810.00),(61,17,7,799.00);
/*!40000 ALTER TABLE `product_shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_type`
--

DROP TABLE IF EXISTS `product_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `product_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_type`
--

LOCK TABLES `product_type` WRITE;
/*!40000 ALTER TABLE `product_type` DISABLE KEYS */;
INSERT INTO `product_type` VALUES (1,'phone'),(2,'tv'),(3,'laptop');
/*!40000 ALTER TABLE `product_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop`
--

DROP TABLE IF EXISTS `shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `address_id` int(11) NOT NULL,
  `phone_number` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `image_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_shop_user1_idx` (`user_id`),
  KEY `fk_shop_address1_idx` (`address_id`),
  CONSTRAINT `fk_shop_address1` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
  CONSTRAINT `fk_shop_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop`
--

LOCK TABLES `shop` WRITE;
/*!40000 ALTER TABLE `shop` DISABLE KEYS */;
INSERT INTO `shop` VALUES (1,1,'Electrosila',2,'+375(29)777-55-45','Electrosila kryto','elektrosila.png'),(2,21,'GoshaShop',3,'+375(29)462-99-55','Gosha\'s cool shop','goshaShop.png'),(4,18,'CoolMarket',178,'+375(44)444-45-99','Best market in Gomel!','coolMarket.png'),(7,195,'EGORRRR',197,'+375(29)545-45-35','EGOOOOOOOOOOOOR','EGORRRR.png'),(8,283,'TechTech',285,'+375(25)898-67-35','Buy my stuff!!!','TechTech.png');
/*!40000 ALTER TABLE `shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tv`
--

DROP TABLE IF EXISTS `tv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tv` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `model` varchar(45) NOT NULL,
  `year` int(11) NOT NULL,
  `resolution` varchar(45) NOT NULL,
  `diagonal` varchar(45) NOT NULL,
  `technology` varchar(45) NOT NULL,
  `image_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_TV_brand1_idx` (`brand_id`),
  KEY `fk_TV_product1_idx` (`product_id`),
  CONSTRAINT `fk_TV_brand1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  CONSTRAINT `fk_TV_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tv`
--

LOCK TABLES `tv` WRITE;
/*!40000 ALTER TABLE `tv` DISABLE KEYS */;
INSERT INTO `tv` VALUES (1,18,2,'UE50RU7470U',2019,'3840x2160 pixels','50\"','LED','samsung_ue50Ru7470u.png'),(2,19,6,'KD 55XF9005',2018,'3840x2160 pixels','54.6\"','LED','sony_kd_55xf9005.png'),(3,20,2,'UE32M5500AU',2017,'1920x1080 pixels','32\"','LED','samsung_ue32m5500au.png'),(4,21,7,'MI TV 4A Pro',2018,'1920x1080 pixels','43\"','LED','xiaomi_mi_tv_4a_pro.png'),(5,22,6,'KD 55AF8',2018,'3840x2160 pixels','55\"','OLED','sony_kd_55af8.png');
/*!40000 ALTER TABLE `tv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=358 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'s','$2a$10$82sA6F5dAb4xvoYAwqgxsuIgvFAgDoT2chWDXFfX2NSkt/CEwytPm','admin'),(18,'popop@gmail.com','$2a$10$.U5Cq5HppVl5h2gPH7swKuHkTrPItKAR2Lvh4WHvLr7Vo5dGCBzPG','admin'),(21,'vera.stas@mail.ru','$2a$10$a3hguHJXtM6/UX8qXyisDOy/dx/opzc88qSSCkHChtqMmK6DqNWxa','admin'),(195,'egor@egor.ru','$2a$10$DvHLhKtM4FOJKTiNb2gb5.beAdBuUa.9tyTzhsTQ3cXir69b35Sme','admin'),(196,'a','$2a$10$RwkxFXvSp2IMJ8SgQ9erseDE4TJmu.AmI0JeX6AgXM3sTDUaslvxu','user'),(283,'romnek@gmail.com','$2a$10$c9GoJS5md4Jp3mbrSGNxcunEYo9GNk7uk1CJABA/aL0z4Mm6V01Jq','admin'),(325,'ewfwfewf','$2a$10$82sA6F5dAb4xvoYAwqgxsuIgvFAgDoT2chWDXFfX2NSkt/CEwytPm','admin'),(347,'vanya@mail.ru','$2a$10$vamFV31Qf.DwEvZwVRRmBe3jcHh45AIndju6xoqqL3NaF35VvPoXm','user'),(357,'stasvan@mail.ru','$2a$10$7I0n53vKmOTpGlYBXcM71e.k7pVjZaeHmqq2rN4hMcgSncA2wE1Ke','user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-06 19:56:57
