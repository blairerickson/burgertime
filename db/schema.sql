CREATE SCHEMA `burgers_db` ;

CREATE TABLE `burgers_db`.`burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(145) NOT NULL,
  `devoured` TINYINT NOT NULL,
  `date` TIMESTAMP() NULL,
  PRIMARY KEY (`id`));

/*
-- Query: SELECT * FROM burgers_db.burgers
LIMIT 0, 1000

-- Date: 2017-04-26 23:42
*/
INSERT INTO `burgers` (`id`,`burger_name`,`devoured`,`date`) VALUES (1,'Steak Burger',1,'');
INSERT INTO `burgers` (`id`,`burger_name`,`devoured`,`date`) VALUES (2,'BLT',0,'');
INSERT INTO `burgers` (`id`,`burger_name`,`devoured`,`date`) VALUES (3,'Big Mac',0,'');
INSERT INTO `burgers` (`id`,`burger_name`,`devoured`,`date`) VALUES (4,'Whopper',0,'');
INSERT INTO `burgers` (`id`,`burger_name`,`devoured`,`date`) VALUES (5,'Big Kahuna',1,'');
INSERT INTO `burgers` (`id`,`burger_name`,`devoured`,`date`) VALUES (6,'Western BBQ',0,'');
INSERT INTO `burgers` (`id`,`burger_name`,`devoured`,`date`) VALUES (7,'Double Deluxe',1,'');
