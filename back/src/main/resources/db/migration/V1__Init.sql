
# DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE `hibernate_sequence` (
                                      `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=UTF8MB4;

# DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
                           `id` int NOT NULL AUTO_INCREMENT,
                           `country` varchar(255) NOT NULL,
                           `city` varchar(255) NOT NULL,
                           `street` varchar(255) NOT NULL,
                           `house` varchar(255) NOT NULL,
                           `apartment` varchar(255) DEFAULT NULL,
                           PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=359 DEFAULT CHARSET=UTF8MB4;

# DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
                         `id` int NOT NULL AUTO_INCREMENT,
                         `name` varchar(255) NOT NULL,
                         `site` varchar(255) DEFAULT NULL,
                         PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=UTF8MB4;

# DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
                        `id` int NOT NULL AUTO_INCREMENT,
                        `email` varchar(255) NOT NULL,
                        `password` varchar(255) NOT NULL,
                        `role` varchar(255) NOT NULL,
                        PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=358 DEFAULT CHARSET=UTF8MB4;

# DROP TABLE IF EXISTS `product_type`;
CREATE TABLE `product_type` (
                                `id` int NOT NULL AUTO_INCREMENT,
                                `name` varchar(255) NOT NULL,
                                PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=UTF8MB4;

# DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
                           `id` int NOT NULL AUTO_INCREMENT,
                           `type_id` int NOT NULL,
                           PRIMARY KEY (`id`),
                           KEY `fk_product_type1_idx` (`type_id`),
                           CONSTRAINT `fk_product_type1` FOREIGN KEY (`type_id`) REFERENCES `product_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=UTF8MB4;

# DROP TABLE IF EXISTS `tv`;
CREATE TABLE `tv` (
                      `id` int NOT NULL AUTO_INCREMENT,
                      `product_id` int NOT NULL,
                      `brand_id` int NOT NULL,
                      `model` varchar(255) NOT NULL,
                      `year` int NOT NULL,
                      `resolution` varchar(255) NOT NULL,
                      `diagonal` varchar(255) NOT NULL,
                      `technology` varchar(255) NOT NULL,
                      `image_name` varchar(255) DEFAULT NULL,
                      PRIMARY KEY (`id`),
                      KEY `fk_TV_brand1_idx` (`brand_id`),
                      KEY `fk_TV_product1_idx` (`product_id`),
                      CONSTRAINT `fk_TV_brand1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
                      CONSTRAINT `fk_TV_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=UTF8MB4;

# DROP TABLE IF EXISTS `laptop`;
CREATE TABLE `laptop` (
                          `id` int NOT NULL AUTO_INCREMENT,
                          `product_id` int NOT NULL,
                          `brand_id` int NOT NULL,
                          `model` varchar(255) NOT NULL,
                          `year` int NOT NULL,
                          `screen_resolution` varchar(255) NOT NULL,
                          `screen_diagonal` varchar(255) NOT NULL,
                          `screen_technology` varchar(255) NOT NULL,
                          `CPU` varchar(255) NOT NULL,
                          `RAM` varchar(255) NOT NULL,
                          `camera` varchar(255) DEFAULT NULL,
                          `image_name` varchar(255) NOT NULL,
                          `storage` varchar(255) NOT NULL,
                          PRIMARY KEY (`id`),
                          KEY `fk_laptop_brand1_idx` (`brand_id`),
                          KEY `fk_laptop_product1_idx` (`product_id`),
                          CONSTRAINT `fk_laptop_brand1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
                          CONSTRAINT `fk_laptop_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=UTF8MB4;

# DROP TABLE IF EXISTS `phone`;
CREATE TABLE `phone` (
                         `id` int NOT NULL AUTO_INCREMENT,
                         `product_id` int NOT NULL,
                         `brand_id` int NOT NULL,
                         `model` varchar(255) NOT NULL,
                         `year` int NOT NULL,
                         `screen_resolution` varchar(255) NOT NULL,
                         `screen_technology` varchar(255) NOT NULL,
                         `CPU` varchar(100) NOT NULL,
                         `RAM` varchar(255) NOT NULL,
                         `image_name` varchar(255) NOT NULL,
                         `camera` varchar(255) DEFAULT NULL,
                         PRIMARY KEY (`id`),
                         KEY `fk_phone_product_idx` (`product_id`),
                         KEY `fk_phone_brand1_idx` (`brand_id`),
                         CONSTRAINT `fk_phone_brand1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
                         CONSTRAINT `fk_phone_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=UTF8MB4;

# DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
                        `id` int NOT NULL AUTO_INCREMENT,
                        `user_id` int NOT NULL,
                        `name` varchar(255) NOT NULL,
                        `address_id` int NOT NULL,
                        `phone_number` varchar(255) NOT NULL,
                        `description` varchar(255) NOT NULL,
                        `image_name` varchar(255) NOT NULL,
                        PRIMARY KEY (`id`),
                        KEY `fk_shop_user1_idx` (`user_id`),
                        KEY `fk_shop_address1_idx` (`address_id`),
                        CONSTRAINT `fk_shop_address1` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
                        CONSTRAINT `fk_shop_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=UTF8MB4;

# DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
                           `id` int NOT NULL AUTO_INCREMENT,
                           `user_id` int NOT NULL,
                           `name` varchar(255) NOT NULL,
                           `surname` varchar(255) NOT NULL,
                           `registration_date` datetime NOT NULL,
                           `phone` varchar(255) NOT NULL,
                           `address_id` int NOT NULL,
                           `avatar` varchar(255) NOT NULL,
                           PRIMARY KEY (`id`),
                           KEY `fk_account_user1_idx` (`user_id`),
                           KEY `fk_account_address1_idx` (`address_id`),
                           CONSTRAINT `fk_account_address1` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
                           CONSTRAINT `fk_account_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=360 DEFAULT CHARSET=UTF8MB4;

# DROP TABLE IF EXISTS `product_shop`;
CREATE TABLE `product_shop` (
                                `id` int NOT NULL AUTO_INCREMENT,
                                `product_id` int NOT NULL,
                                `shop_id` int NOT NULL,
                                `price` decimal(13,2) NOT NULL,
                                PRIMARY KEY (`id`),
                                KEY `fk_product_shop_price_product1_idx` (`product_id`),
                                KEY `fk_product_shop_price_shop1_idx` (`shop_id`),
                                CONSTRAINT `fk_product_shop_price_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
                                CONSTRAINT `fk_product_shop_price_shop1` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=UTF8MB4;

# DROP TABLE IF EXISTS `cart_item`;
CREATE TABLE `cart_item` (
                             `id` int NOT NULL AUTO_INCREMENT,
                             `fixed_price` decimal(13,2) NOT NULL,
                             `product_shop_id` int NOT NULL,
                             `user_id` int NOT NULL,
                             PRIMARY KEY (`id`),
                             KEY `FKl70asp4l4w0jmbm1tqyofho4o` (`user_id`),
                             KEY `FKp75f02dv5tq422kn80jmn2cek` (`product_shop_id`),
                             CONSTRAINT `FKl70asp4l4w0jmbm1tqyofho4o` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
                             CONSTRAINT `FKp75f02dv5tq422kn80jmn2cek` FOREIGN KEY (`product_shop_id`) REFERENCES `product_shop` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=370 DEFAULT CHARSET=UTF8MB4;

# DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
                         `id` int NOT NULL AUTO_INCREMENT,
                         `user_id_user` int NOT NULL,
                         `address_id` int NOT NULL,
                         `product_shop_price_id` int NOT NULL,
                         `fixed_price` decimal(10,0) NOT NULL,
                         PRIMARY KEY (`id`),
                         KEY `fk_order_user1_idx` (`user_id_user`),
                         KEY `fk_order_address1_idx` (`address_id`),
                         KEY `fk_order_product_shop_price1_idx` (`product_shop_price_id`),
                         CONSTRAINT `fk_order_address1` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
                         CONSTRAINT `fk_order_product_shop_price1` FOREIGN KEY (`product_shop_price_id`) REFERENCES `product_shop` (`id`),
                         CONSTRAINT `fk_order_user1` FOREIGN KEY (`user_id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;


