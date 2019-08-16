
LOCK TABLES `hibernate_sequence` WRITE;
INSERT INTO `hibernate_sequence` VALUES
(370);
UNLOCK TABLES;

LOCK TABLES `address` WRITE;
INSERT INTO `address` VALUES
(1,'Belarus','Minsk','Pobediteley','75','281'),
(2,'Belarus','Minsk','Pobediteley','80',NULL),
(3,'Belarus','Minsk','Masherova','53',NULL),
(19,'Belarus','Minsk','Masherova','50','21'),
(22,'Russia','Moscow','Dadad','1','1'),
(178,'Belarus','Gomel','Totar','56','23'),
(196,'Belarus','Minsk','Egor','EG2','12'),
(197,'Belarus','Minsk','Egor','EG2','13'),
(198,'Belarus','Minsk','Aaaaa','A2',NULL),
(284,'Belarus','Minsk','Pushkinskaya','7','16'),
(285,'Belarus','Minsk','Pushkinskaya','7','17'),
(326,'ttrgrth','rthrthtrhtr','hrthtrhtr','htrtr','htr'),
(348,'Belarus','Minsk','Tolstogo','10','10'),
(358,'Belarus','Minsk','Pobediteley','228','228');
UNLOCK TABLES;

LOCK TABLES `brand` WRITE;
INSERT INTO `brand` VALUES
(1,'Apple','www.apple.com'),
(2,'Samsung','www.samsung.com'),
(3,'Huawei','www.huawei.com'),
(4,'Honor','www.hihonor.com'),
(5,'HP','www.hp.com'),
(6,'Sony','www.sony.com'),
(7,'Xiaomi','www.xiaomi.com');
UNLOCK TABLES;

LOCK TABLES `user` WRITE;
INSERT INTO `user` VALUES
(1,'s','$2a$10$82sA6F5dAb4xvoYAwqgxsuIgvFAgDoT2chWDXFfX2NSkt/CEwytPm','admin'),
(18,'popop@gmail.com','$2a$10$.U5Cq5HppVl5h2gPH7swKuHkTrPItKAR2Lvh4WHvLr7Vo5dGCBzPG','admin'),
(21,'vera.stas@mail.ru','$2a$10$a3hguHJXtM6/UX8qXyisDOy/dx/opzc88qSSCkHChtqMmK6DqNWxa','admin'),
(195,'egor@egor.ru','$2a$10$DvHLhKtM4FOJKTiNb2gb5.beAdBuUa.9tyTzhsTQ3cXir69b35Sme','admin'),
(196,'a','$2a$10$RwkxFXvSp2IMJ8SgQ9erseDE4TJmu.AmI0JeX6AgXM3sTDUaslvxu','user'),
(283,'romnek@gmail.com','$2a$10$c9GoJS5md4Jp3mbrSGNxcunEYo9GNk7uk1CJABA/aL0z4Mm6V01Jq','admin'),
(325,'ewfwfewf','$2a$10$82sA6F5dAb4xvoYAwqgxsuIgvFAgDoT2chWDXFfX2NSkt/CEwytPm','admin'),
(347,'vanya@mail.ru','$2a$10$vamFV31Qf.DwEvZwVRRmBe3jcHh45AIndju6xoqqL3NaF35VvPoXm','user'),
(357,'stasvan@mail.ru','$2a$10$7I0n53vKmOTpGlYBXcM71e.k7pVjZaeHmqq2rN4hMcgSncA2wE1Ke','user');
UNLOCK TABLES;

LOCK TABLES `product_type` WRITE;
INSERT INTO `product_type` VALUES
(1,'phone'),(2,'tv'),(3,'laptop');
UNLOCK TABLES;

LOCK TABLES `product` WRITE;
INSERT INTO `product` VALUES
(1,1),(2,1),(3,1),(4,1),(5,1),
(6,1),(7,1),(8,1),(9,1),(10,1),
(11,1),(18,2),(19,2),(20,2),
(21,2),(22,2),(12,3),(13,3),
(14,3),(15,3),(16,3),(17,3);
UNLOCK TABLES;

LOCK TABLES `tv` WRITE;
INSERT INTO `tv` VALUES
(1,18,2,'UE50RU7470U',2019,'3840x2160 pixels','50\"','LED','samsung_ue50Ru7470u.png'),
(2,19,6,'KD 55XF9005',2018,'3840x2160 pixels','54.6\"','LED','sony_kd_55xf9005.png'),
(3,20,2,'UE32M5500AU',2017,'1920x1080 pixels','32\"','LED','samsung_ue32m5500au.png'),
(4,21,7,'MI TV 4A Pro',2018,'1920x1080 pixels','43\"','LED','xiaomi_mi_tv_4a_pro.png'),
(5,22,6,'KD 55AF8',2018,'3840x2160 pixels','55\"','OLED','sony_kd_55af8.png');
UNLOCK TABLES;

LOCK TABLES `phone` WRITE;
INSERT INTO `phone` VALUES
(1,1,1,'iPhone 5',2012,'640x1136 pixels','IPS LCD capacitive touchscreen, 16M colors','Dual-core 1.3 GHz Swift (ARM v7-based)','1GB','apple_iphone_5.png','8MP'),
(2,2,1,'iPhone 6 Plus',2014,'1080x1920 pixels','IPS LCD capacitive touchscreen, 16M colors','Dual-core 1.4 GHz Typhoon (ARM v8-based)','1GB','apple_iphone_6_plus.png','8MP'),
(3,3,2,'Galaxy S9',2018,'1440x2960 pixels','Super AMOLED capacitive touchscreen, 16M colors','Octa-core (4x2.7 GHz Mongoose M3 & 4x1.8 GHz Cortex-A55) - EMEA','4GB','samsung_galaxy_s9.png','12MP'),
(4,4,1,'iPhone 8',2017,'750x1334 pixels','IPS LCD capacitive touchscreen, 16M colors','Hexa-core (2x Monsoon + 4x Mistral)','2GB','apple_iphone_8.png','12MP'),
(5,5,1,'iPhone X',2017,'1125x2436 pixels','OLED capacitive touchscreen, 16M colors','Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)','3GB','apple_iphone_x.png','12MP'),
(6,6,2,'Galaxy S10 Plus',2019,'1440x3040 pixels','Dynamic AMOLED capacitive touchscreen, 16M colors','Octa-core (2x2.73 GHz Mongoose M4 & 2x2.31 GHz Cortex-A75 & 4x1.95 GHz Cortex-A55) - EMEA','12GB','samsung_galaxy_s10_plus.png','16MP'),
(7,7,2,'Galaxy A30',2019,'1080x2340 pixels','Super AMOLED capacitive touchscreen, 16M colors','Octa-core (2x1.8 GHz Cortex-A73 & 6x1.6 GHz Cortex-A53)','4GB','samsung_galaxy_a30.png','16MP'),
(8,8,3,'P20 Lite',2018,'1080x2280 pixels','LTPS IPS LCD capacitive touchscreen, 16M colors','Octa-core (4x2.36 GHz Cortex-A53 & 4x1.7 GHz Cortex-A53)','4GB','huawei_p20 _lite.png','16MP'),
(9,9,3,'P Smart 2019',2018,'1080x2340 pixels','LTPS IPS LCD capacitive touchscreen, 16M colors','Octa-core (4x2.2 GHz Cortex-A73 & 4x1.7 GHz Cortex-A53)','3GB','huawei_p_smart.png','13MP'),
(10,10,4,'8X',2018,'1080x2340 pixels','LTPS IPS LCD capacitive touchscreen, 16M colors','Octa-core (4x2.2 GHz Cortex-A73 & 4x1.7 GHz Cortex-A53)','6GB','honor_8x.png','20MP'),
(11,11,4,'10 Lite',2018,'1080x2340 pixels','IPS LCD capacitive touchscreen, 16M colors','Octa-core (4x2.2 GHz Cortex-A73 & 4x1.7 GHz Cortex-A53)','6GB','honor_10_lite.png','13MP');
UNLOCK TABLES;

LOCK TABLES `laptop` WRITE;
INSERT INTO `laptop` VALUES
(1,12,1,'MacBook Pro 15\" Touch Bar MR942',2018,'2880x1800 pixels','15.4\"','Retina','Intel Core i7 8850H','16 GB DDR4','0.92 MP','apple_macbook_pro_touch_bar_mr942.png','512 GB SSD'),
(2,13,3,'MateBook X Pro MACH W29C',2018,'3000x2000 pixels','13.9\"','IPS','Intel Core i7 8550U','16 GB LPDDR3','1 MP','huawei_matebook_x_pro_mach_w29c.png','512 GB SSD'),
(3,14,5,'OMEN 15 dc0004ur 4HF24EA',2018,'1920x1080 pixels','15.6\"','IPS','Intel Core i5 8300H','16 GB DDR4','1.3 MP','hp_omen_15_dc0004ur_4hf24ea.png','1000+256 GB HDD+SSD'),
(4,15,1,'MacBook Air 13\" MQD32',2017,'1440x900 pixels','13.3\"','TN+Film','Intel Core i5 5350U','8 GB LPDDR3','0.92 MP','apple_macbook_air_mqd32.png','128 GB SSD'),
(5,16,5,'Spectre x360 15 df0000ur 5KT17EA',2018,'3840x2160 pixels','15.6\"','IPS, touch screen','Intel Core i7 8565U','16 GB DDR4','2 MP','hp_spectre_x360_15_df0000ur_5kt17ea.png','512 GB SSD'),
(6,17,5,'Pavilion 15 bc402ur 5GV06EA',2018,'1920x1080 pixels','15.6\"','TN+Film','Intel Core i5 8300H','8 GB DDR4','1.3 MP','hp_pavilion_15_bc402ur_5gv06ea.png','1000 GB HDD');
UNLOCK TABLES;

LOCK TABLES `shop` WRITE;
INSERT INTO `shop` VALUES
(1,1,'Electrosila',2,'+375(29)777-55-45','Electrosila kryto','elektrosila.png'),
(2,21,'GoshaShop',3,'+375(29)462-99-55','Gosha\'s cool shop','goshaShop.png'),
(4,18,'CoolMarket',178,'+375(44)444-45-99','Best market in Gomel!','coolMarket.png'),
(7,195,'EGORRRR',197,'+375(29)545-45-35','EGOOOOOOOOOOOOR','EGORRRR.png'),
(8,283,'TechTech',285,'+375(25)898-67-35','Buy my stuff!!!','TechTech.png');
UNLOCK TABLES;

LOCK TABLES `account` WRITE;
INSERT INTO `account` VALUES
(1,1,'Ivan','Staselovich','2019-03-15 13:19:21','+375(25)111-11-88',1,'empty.png'),
(20,18,'Popo','Popop','2019-04-22 17:48:40','+375(25)342-66-33',19,'empty.png'),
(23,21,'Vera','Staselovich','2019-04-22 18:15:43','+375(25)333-22-99',22,'empty.png'),
(197,195,'Egor','Erogka','2019-05-22 19:37:56','+375(29)545-45-45',196,'empty.png'),
(198,196,'a','a','2019-05-22 19:42:56','+111(11)111-11-11',198,'empty.png'),
(285,283,'Roman','Neklukov','2019-05-23 22:53:04','+375(25)898-67-34',284,'empty.png'),
(327,325,'Ffewf','wefwefwe','2019-05-24 00:53:31','+324(23)423-42-34',326,'empty.png'),
(349,347,'Ivan','Staselovich','2019-05-24 10:17:43','+375(29)111-11-11',348,'empty.png'),
(359,357,'Ivan','Staselovich','2019-06-27 16:44:56','+375(29)118-89-88',358,'empty.png');
UNLOCK TABLES;

LOCK TABLES `product_shop` WRITE;
INSERT INTO `product_shop` VALUES
(1,1,1,500.00),(2,1,2,550.00),(5,2,1,600.00),(6,2,2,650.00),(7,3,1,800.00),
(8,13,2,2000.00),(9,18,2,800.00),(10,18,4,799.00),(11,18,7,840.00),(12,19,8,900.00),
(13,20,4,300.00),(14,20,1,310.00),(15,21,1,400.00),(16,21,2,399.00),(17,21,4,410.00),
(18,21,7,500.00),(19,21,8,399.00),(20,22,8,1200.00),(21,1,4,499.00),(22,1,7,500.00),
(23,1,8,600.00),(24,2,8,610.00),(25,3,2,800.00),(26,3,4,800.00),(27,3,8,750.00),
(28,4,7,700.00),(29,4,8,710.00),(30,4,1,700.00),(31,5,2,900.00),(32,5,7,950.00),
(33,5,4,900.00),(34,6,2,900.00),(35,6,8,990.00),(36,7,1,400.00),(37,8,1,350.00),
(38,9,2,400.00),(39,9,4,410.00),(40,9,8,400.00),(41,10,4,500.00),(42,10,7,510.00),
(43,11,4,600.00),(44,11,8,650.00),(45,12,1,2000.00),(46,12,2,2000.00),(47,12,7,2200.00),
(48,12,8,2250.00),(49,12,4,1990.00),(50,14,2,1100.00),(51,14,7,1200.00),(52,14,8,1150.00),
(54,15,4,700.00),(55,15,2,710.00),(56,16,2,2000.00),(57,16,4,1900.00),(58,16,8,1900.00),
(59,17,1,800.00),(60,17,2,810.00),(61,17,7,799.00);
UNLOCK TABLES;

LOCK TABLES `cart_item` WRITE;
INSERT INTO `cart_item` VALUES
(261,550.00,2,196),
(262,500.00,1,196),
(263,650.00,6,196),
(264,600.00,5,196),
(346,499.00,21,325),
(368,550.00,2,1);
UNLOCK TABLES;