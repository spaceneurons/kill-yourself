CREATE DATABASE IF NOT EXISTS my_courier_schema_2
	CHARACTER SET = utf8
    COLLATE utf8_general_ci;
    USE my_courier_schema_2;

-- -----------------------------------------------------
-- Schema my_courier_schema
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `my_courier_schema_2` DEFAULT CHARACTER SET utf8 ;
USE `my_courier_schema_2` ;

-- -----------------------------------------------------
-- Table `my_courier_schema`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `my_courier_schema_2`.`role` (
  `role_id` INT(1) NOT NULL AUTO_INCREMENT,
  `role_name` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE INDEX `role_name_UNIQUE` (`role_name` ASC) VISIBLE,
  UNIQUE INDEX `role_id_UNIQUE` (`role_id` ASC) VISIBLE)
ENGINE = InnoDB;

INSERT INTO `role` (`role_name`)
VALUES ('ADMIN'), ('COURIER'), ('CUSTOMER');

-- -----------------------------------------------------
-- Table `my_courier_schema`.`transport`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `my_courier_schema_2`.`transport` (
  `transport_id` INT NOT NULL AUTO_INCREMENT,
  `transport_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`transport_id`))
ENGINE = InnoDB;

INSERT INTO `transport`(`transport_name`)
VALUES ('TRUCK'), ('CAR'), ('NONE');

-- -----------------------------------------------------
-- Table `my_courier_schema`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `my_courier_schema_2`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role_id` INT(1) NOT NULL,
  `transport_id` INT NULL,
  `rating` DECIMAL(2,1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `id_UNIQUE` (`user_id` ASC) VISIBLE,
  UNIQUE INDEX `login_UNIQUE` (`login` ASC) VISIBLE,
  INDEX `fk_user_role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_user_transport1_idx` (`transport_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `my_courier_schema_2`.`role` (`role_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_transport1`
    FOREIGN KEY (`transport_id`)
    REFERENCES `my_courier_schema_2`.`transport` (`transport_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `user`(`user_id`, `login`, `password`, `role_id`, `rating`)
VALUES (1, 'admin', SHA1('admin'), 1, 0.0);

-- -----------------------------------------------------
-- Table `my_courier_schema`.`order_status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `my_courier_schema_2`.`order_status` (
  `id_status` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id_status`),
  UNIQUE INDEX `id_status_UNIQUE` (`id_status` ASC) VISIBLE,
  UNIQUE INDEX `status_UNIQUE` (`status` ASC) VISIBLE)
ENGINE = InnoDB;

INSERT INTO `order_status`(`status`)
VALUES ('NEW'), ('PROCESSING'), ('DONE'), ('RATED');

-- -----------------------------------------------------
-- Table `my_courier_schema`.`shipping_order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `my_courier_schema_2`.`shipping_order` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `subject` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NULL,
  `customer_id` INT NOT NULL,
  `courier_id` INT NULL,
  `order_status_id` INT NOT NULL DEFAULT 1,
  `total_price` DECIMAL(6,2) NULL,
  `distance` INT NULL,
  `transport_id` INT NOT NULL,
  `express_rate` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`order_id`),
  UNIQUE INDEX `order_id_UNIQUE` (`order_id` ASC) VISIBLE,
  INDEX `fk_order_order_status1_idx` (`order_status_id` ASC) VISIBLE,
  INDEX `fk_order_user1_idx` (`customer_id` ASC) VISIBLE,
  INDEX `fk_order_user2_idx` (`courier_id` ASC) VISIBLE,
  INDEX `fk_order_transport1_idx` (`transport_id` ASC) VISIBLE,
  CONSTRAINT `fk_order_order_status1`
    FOREIGN KEY (`order_status_id`)
    REFERENCES `my_courier_schema_2`.`order_status` (`id_status`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_user1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `my_courier_schema_2`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_user2`
    FOREIGN KEY (`courier_id`)
    REFERENCES `my_courier_schema_2`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_transport1`
    FOREIGN KEY (`transport_id`)
    REFERENCES `my_courier_schema_2`.`transport` (`transport_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;
