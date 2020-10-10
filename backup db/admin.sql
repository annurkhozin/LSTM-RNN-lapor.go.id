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

 Date: 01/07/2020 17:59:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nama` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `username` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `tgl_dibuat` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `tgl_dirubah` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`_id`) USING BTREE,
  UNIQUE INDEX `admin_username_unique`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 'Nur Khozin', 'root', '63a9f0ea7bb98050796b649e85481845', '2020-05-08 00:33:43', NULL);
INSERT INTO `admin` VALUES (2, 'Admin Demo', 'demo', 'fe01ce2a7fbac8fafaed7c982a04e229', '2020-06-27 20:52:28', NULL);

SET FOREIGN_KEY_CHECKS = 1;
