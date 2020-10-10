/*
 Navicat Premium Data Transfer

 Source Server         : MySQL Local
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : localhost:3306
 Source Schema         : lapordb_v2

 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001

 Date: 01/07/2020 18:00:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for config
-- ----------------------------
DROP TABLE IF EXISTS `config`;
CREATE TABLE `config`  (
  `_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `scraping_status` tinyint(1) NULL DEFAULT 0,
  `scraping_page` int(11) NULL DEFAULT 1,
  PRIMARY KEY (`_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of config
-- ----------------------------
INSERT INTO `config` VALUES (1, 0, 82);

SET FOREIGN_KEY_CHECKS = 1;
