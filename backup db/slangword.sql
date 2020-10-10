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

 Date: 01/07/2020 18:01:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for slangword
-- ----------------------------
DROP TABLE IF EXISTS `slangword`;
CREATE TABLE `slangword`  (
  `_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `kata` varchar(33) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `kata_ganti` varchar(33) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `tgl_dibuat` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `tgl_dirubah` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 264 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of slangword
-- ----------------------------
INSERT INTO `slangword` VALUES (1, '&', 'dan', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (2, '+', 'tambah', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (3, '/', 'atau', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (4, '=', 'sama dengan', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (5, 'ababil', 'anak ingusan', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (6, 'abal2', 'palsu', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (7, 'abal', 'palsu', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (8, 'ad', 'ada', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (9, 'akooh', 'aku', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (10, 'alay', 'norak', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (11, 'albm', 'album', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (12, 'ampe', 'sampai', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (13, 'anjir', 'waw', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (14, 'anyway', 'ngomong-ngomong', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (15, 'aq', 'aku', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (16, 'asap', 'secepatnya', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (17, 'ato', 'atau', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (18, 'atw', 'atau', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (19, 'aval', 'foto profi', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (20, 'baget', 'keras kepala', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (21, 'baper', 'bawa perasaan', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (22, 'bapuk', 'rusak', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (23, 'bcr', 'bicara', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (24, 'bebeb', 'pacar', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (25, 'begin', 'awal', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (26, 'bejibun', 'bertumpuk banyak', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (27, 'bener', 'benar', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (28, 'ber2', 'berdua', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (29, 'ber3', 'bertiga', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (30, 'better', 'lebih baik', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (31, 'bf', 'pacar', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (32, 'bgt', 'banget', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (33, 'bhas', 'bahas', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (34, 'bhg', 'bahagia', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (35, 'bikin', 'buat', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (36, 'binggo', 'banget', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (37, 'bingit', 'banget', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (38, 'bklan', 'bakalan', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (39, 'bkn', 'bukan', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (40, 'blg', 'bilang', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (41, 'bnr', 'benar', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (42, 'bnyk', 'banyak', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (43, 'br', 'baru', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (44, 'brb', 'akakan segera kembali', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (45, 'brjaya', 'berjaya', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (46, 'bs', 'bisa', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (47, 'bsk', 'besok', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (48, 'btw', 'ngomong-ngomong', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (49, 'cm', 'cuma', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (50, 'cmiiw', 'koreksi saya', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (51, 'cnt', 'cinta', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (52, 'congrats', 'selamat', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (53, 'crop', 'potong', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (54, 'cya', 'sampai jumpa lagi', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (55, 'd', 'di', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (56, 'da', 'ada', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (57, 'dafuk', 'kurang ajar', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (58, 'damat', 'tidak peduli', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (59, 'dempa', 'demi apa', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (60, 'dgn', 'dengan', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (61, 'dkt', 'dekat', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (62, 'dlm', 'dalam', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (63, 'dlu', 'dulu', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (64, 'dmn', 'dimana', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (65, 'dpt', 'dapat', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (66, 'dr', 'dari', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (67, 'drpd', 'daripada', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (68, 'dsna', 'disana', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (69, 'dugem', 'dunia gemerlap', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (70, 'elo', 'kamu', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (71, 'elu', 'kamu', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (72, 'emg', 'memang', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (73, 'epsd', 'episode', '2020-04-01 20:36:52', NULL);
INSERT INTO `slangword` VALUES (74, 'fake', 'palsu', '2020-04-01 20:45:19', NULL);
INSERT INTO `slangword` VALUES (75, 'fans', 'penggemar', '2020-04-01 20:45:19', NULL);
INSERT INTO `slangword` VALUES (76, 'faq', 'pertanyaan umum', '2020-04-01 20:47:09', NULL);
INSERT INTO `slangword` VALUES (77, 'fham', 'paham', '2020-04-01 20:47:09', NULL);
INSERT INTO `slangword` VALUES (78, 'fhm', 'paham', '2020-04-01 20:47:09', NULL);
INSERT INTO `slangword` VALUES (79, 'fix', 'pasti', '2020-04-01 20:47:09', NULL);
INSERT INTO `slangword` VALUES (80, 'ft', 'foto', '2020-04-01 20:47:09', NULL);
INSERT INTO `slangword` VALUES (81, 'fyi', 'asal tahu saja', '2020-04-01 20:47:09', NULL);
INSERT INTO `slangword` VALUES (82, 'g', 'tidak', '2020-04-01 20:47:09', NULL);
INSERT INTO `slangword` VALUES (83, 'ga', 'tidak', '2020-04-01 20:47:09', NULL);
INSERT INTO `slangword` VALUES (84, 'gaada', 'tidak ada', '2020-04-01 20:47:09', NULL);
INSERT INTO `slangword` VALUES (85, 'gabut', 'gaji buta', '2020-04-01 20:47:09', NULL);
INSERT INTO `slangword` VALUES (86, 'gada', 'tidak ada', '2020-04-01 20:47:09', NULL);
INSERT INTO `slangword` VALUES (87, 'gj', 'tidak jelas', '2020-04-01 20:47:09', NULL);
INSERT INTO `slangword` VALUES (88, 'gak', 'tidak', '2020-04-01 20:47:09', NULL);
INSERT INTO `slangword` VALUES (89, 'galau', 'bimbang', '2020-04-01 20:47:09', NULL);
INSERT INTO `slangword` VALUES (90, 'garing', 'hambar', '2020-04-01 20:47:09', NULL);
INSERT INTO `slangword` VALUES (91, 'gatau', 'tidak tahu', '2020-04-01 20:47:09', NULL);
INSERT INTO `slangword` VALUES (92, 'geje', 'tidak jelas', '2020-04-01 20:50:14', NULL);
INSERT INTO `slangword` VALUES (93, 'gengges', 'ganggu', '2020-04-01 20:50:14', NULL);
INSERT INTO `slangword` VALUES (94, 'gf', 'pacar', '2020-04-01 20:50:14', NULL);
INSERT INTO `slangword` VALUES (95, 'ggl', 'pacar', '2020-04-01 20:50:14', NULL);
INSERT INTO `slangword` VALUES (96, 'gk', 'tidak', '2020-04-01 20:50:14', NULL);
INSERT INTO `slangword` VALUES (97, 'gmn', 'bagaimana', '2020-04-01 20:50:14', NULL);
INSERT INTO `slangword` VALUES (98, 'gmpng', 'gampang', '2020-04-01 20:50:14', NULL);
INSERT INTO `slangword` VALUES (99, 'gogon', 'go internasional', '2020-04-01 20:50:14', NULL);
INSERT INTO `slangword` VALUES (100, 'gokil', 'gila', '2020-04-01 20:50:14', NULL);
INSERT INTO `slangword` VALUES (101, 'gpp', 'tidak apa-apa', '2020-04-01 20:50:14', NULL);
INSERT INTO `slangword` VALUES (102, 'grammar', 'tata bahasa', '2020-04-01 20:50:14', NULL);
INSERT INTO `slangword` VALUES (103, 'gt', 'gitu', '2020-04-01 20:50:14', NULL);
INSERT INTO `slangword` VALUES (104, 'gue', 'aku', '2020-04-01 20:50:14', NULL);
INSERT INTO `slangword` VALUES (105, 'gw', 'aku', '2020-04-01 20:50:14', NULL);
INSERT INTO `slangword` VALUES (106, 'hater', 'pembenci', '2020-04-02 14:28:30', NULL);
INSERT INTO `slangword` VALUES (107, 'haters', 'pembenci', '2020-04-02 14:28:30', NULL);
INSERT INTO `slangword` VALUES (108, 'hbd', 'selamat ulang tahun', '2020-04-02 14:28:30', NULL);
INSERT INTO `slangword` VALUES (109, 'hdp', 'hidup', '2020-04-02 14:28:30', NULL);
INSERT INTO `slangword` VALUES (110, 'hdr', 'hadir', '2020-04-02 14:28:30', NULL);
INSERT INTO `slangword` VALUES (111, 'hit', 'populer', '2020-04-02 14:28:30', NULL);
INSERT INTO `slangword` VALUES (112, 'hits', 'terkini', '2020-04-02 14:28:30', NULL);
INSERT INTO `slangword` VALUES (113, 'hoax', 'palsu', '2020-04-02 14:28:30', NULL);
INSERT INTO `slangword` VALUES (114, 'ig', 'instagram', '2020-04-02 14:28:30', NULL);
INSERT INTO `slangword` VALUES (115, 'indo', 'indonesia', '2020-04-02 14:28:30', NULL);
INSERT INTO `slangword` VALUES (116, 'indon', 'indonesia', '2020-04-02 14:28:30', NULL);
INSERT INTO `slangword` VALUES (117, 'ipon', 'iphone', '2020-04-02 14:28:30', NULL);
INSERT INTO `slangword` VALUES (118, 'jd', 'jadi', '2020-04-02 14:28:30', NULL);
INSERT INTO `slangword` VALUES (119, 'jdi', 'jadi', '2020-04-02 14:28:30', NULL);
INSERT INTO `slangword` VALUES (120, 'jdnya', 'jadinya', '2020-04-02 14:28:31', NULL);
INSERT INTO `slangword` VALUES (121, 'jg', 'juga', '2020-04-02 14:28:31', NULL);
INSERT INTO `slangword` VALUES (122, 'jgan', 'jangan', '2020-04-02 14:28:31', NULL);
INSERT INTO `slangword` VALUES (123, 'jgn', 'jangan', '2020-04-02 14:28:31', NULL);
INSERT INTO `slangword` VALUES (124, 'jl', 'jalan', '2020-04-02 14:28:31', NULL);
INSERT INTO `slangword` VALUES (125, 'jln', 'jalan', '2020-04-02 14:28:31', NULL);
INSERT INTO `slangword` VALUES (126, 'jls', 'jelas', '2020-04-02 14:28:31', NULL);
INSERT INTO `slangword` VALUES (127, 'jutek', 'galak', '2020-04-02 14:28:31', NULL);
INSERT INTO `slangword` VALUES (128, 'kamseupay', 'kampungan', '2020-04-02 14:28:31', NULL);
INSERT INTO `slangword` VALUES (129, 'karn', 'karena', '2020-04-02 14:28:31', NULL);
INSERT INTO `slangword` VALUES (130, 'krn', 'karena', '2020-04-02 14:28:31', NULL);
INSERT INTO `slangword` VALUES (131, 'kbr', 'kabar', '2020-04-02 14:28:31', NULL);
INSERT INTO `slangword` VALUES (132, 'keknya', 'kayaknya', '2020-04-02 14:28:31', NULL);
INSERT INTO `slangword` VALUES (133, 'keles', 'kali', '2020-04-02 14:28:31', NULL);
INSERT INTO `slangword` VALUES (134, 'keleus', 'kali', '2020-04-02 14:28:31', NULL);
INSERT INTO `slangword` VALUES (135, 'kepo', 'penasaran', '2020-04-02 14:28:31', NULL);
INSERT INTO `slangword` VALUES (136, 'kgk', 'kagak', '2020-04-02 14:28:31', NULL);
INSERT INTO `slangword` VALUES (137, 'kicep', 'diam', '2020-04-02 14:33:11', NULL);
INSERT INTO `slangword` VALUES (138, 'kak', 'kakak', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (139, 'kk', 'kakak', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (140, 'kl', 'kalau', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (141, 'klo', 'kalau', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (142, 'kloning', 'duplikat', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (143, 'klrg', 'keluarga', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (144, 'klu', 'kalau', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (145, 'km', 'kamu', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (146, 'kmn', 'kemana', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (147, 'kmrn', 'kemarin', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (148, 'kn', 'kan', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (149, 'knp', 'kenapa', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (150, 'kpd', 'kepada', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (151, 'kpn', 'kapan', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (152, 'krn', 'karena', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (153, 'krna', 'karena', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (154, 'ktny', 'katanya', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (155, 'kyk', 'seperti', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (156, 'kon', 'kamu', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (157, 'kzl', 'kesal', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (158, 'lebay', 'berlebihan', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (159, 'lola', 'berlebihan', '2020-04-02 14:42:11', NULL);
INSERT INTO `slangword` VALUES (160, 'lgs', 'langsung', '2020-04-02 14:45:53', NULL);
INSERT INTO `slangword` VALUES (161, 'liat', 'lihat', '2020-04-02 14:45:53', NULL);
INSERT INTO `slangword` VALUES (162, 'lnjut', 'lanjut', '2020-04-02 14:45:53', NULL);
INSERT INTO `slangword` VALUES (163, 'lo', 'kamu', '2020-04-02 14:45:53', NULL);
INSERT INTO `slangword` VALUES (164, 'lol', 'tertawa', '2020-04-02 14:45:53', NULL);
INSERT INTO `slangword` VALUES (165, 'love', 'cinta', '2020-04-02 14:45:53', NULL);
INSERT INTO `slangword` VALUES (166, 'lwt', 'lewat', '2020-04-02 14:45:53', NULL);
INSERT INTO `slangword` VALUES (167, 'maaci', 'terima kasih', '2020-04-02 14:45:53', NULL);
INSERT INTO `slangword` VALUES (168, 'mabok', 'mabuk', '2020-04-02 14:45:53', NULL);
INSERT INTO `slangword` VALUES (169, 'mager', 'malas gerak', '2020-04-02 14:45:53', NULL);
INSERT INTO `slangword` VALUES (170, 'maharani', 'mahal', '2020-04-02 14:45:53', NULL);
INSERT INTO `slangword` VALUES (171, 'maho', 'homoseksual', '2020-04-02 14:45:53', NULL);
INSERT INTO `slangword` VALUES (172, 'mainstream', 'sangat umum', '2020-04-02 14:45:53', NULL);
INSERT INTO `slangword` VALUES (173, 'males', 'malas', '2020-04-02 14:45:53', NULL);
INSERT INTO `slangword` VALUES (174, 'mcm', 'macam', '2020-04-02 14:45:53', NULL);
INSERT INTO `slangword` VALUES (175, 'mehong', 'mahal', '2020-04-02 14:45:53', NULL);
INSERT INTO `slangword` VALUES (176, 'meneketehe', 'tidak tahu', '2020-04-02 14:45:53', NULL);
INSERT INTO `slangword` VALUES (177, 'mgkn', 'mungkin', '2020-04-02 14:47:12', NULL);
INSERT INTO `slangword` VALUES (178, 'mimin', 'admin', '2020-04-02 14:47:12', NULL);
INSERT INTO `slangword` VALUES (179, 'minn', 'admin', '2020-04-02 14:47:12', NULL);
INSERT INTO `slangword` VALUES (180, 'mkn', 'makan', '2020-04-02 14:47:12', NULL);
INSERT INTO `slangword` VALUES (181, 'mksd', 'maksud', '2020-04-02 14:47:12', NULL);
INSERT INTO `slangword` VALUES (182, 'mlm', 'malam', '2020-04-02 14:47:12', NULL);
INSERT INTO `slangword` VALUES (183, 'mls', ' malas', '2020-04-02 14:47:12', NULL);
INSERT INTO `slangword` VALUES (184, 'mmg', 'memang', '2020-04-02 14:50:19', NULL);
INSERT INTO `slangword` VALUES (185, 'modus', 'maksud lain', '2020-04-02 14:50:19', NULL);
INSERT INTO `slangword` VALUES (186, 'mrk', 'mereka', '2020-04-02 14:50:19', NULL);
INSERT INTO `slangword` VALUES (187, 'mrka', 'mereka', '2020-04-02 14:50:19', NULL);
INSERT INTO `slangword` VALUES (188, 'much', 'lebih', '2020-04-02 14:50:19', NULL);
INSERT INTO `slangword` VALUES (189, 'mure', 'murah', '2020-04-02 14:50:19', NULL);
INSERT INTO `slangword` VALUES (190, 'mw', 'mau', '2020-04-02 14:50:19', NULL);
INSERT INTO `slangword` VALUES (191, 'n', 'dan', '2020-04-02 14:50:19', NULL);
INSERT INTO `slangword` VALUES (192, 'ngeh', 'paham', '2020-04-02 14:50:19', NULL);
INSERT INTO `slangword` VALUES (193, 'ngeuh', 'paham', '2020-04-02 14:50:19', NULL);
INSERT INTO `slangword` VALUES (194, 'ndak', 'tidak', '2020-04-02 14:50:19', NULL);
INSERT INTO `slangword` VALUES (195, 'nggak', 'tidak', '2020-04-02 14:50:19', NULL);
INSERT INTO `slangword` VALUES (196, 'nice', 'bagus', '2020-04-02 14:50:34', NULL);
INSERT INTO `slangword` VALUES (197, 'nmr', 'nomor', '2020-04-02 14:52:24', NULL);
INSERT INTO `slangword` VALUES (198, 'nongkrong', 'kumpul-kumpul', '2020-04-02 14:52:24', NULL);
INSERT INTO `slangword` VALUES (199, 'ntn', 'nonton', '2020-04-02 14:52:24', NULL);
INSERT INTO `slangword` VALUES (200, 'nyungsep', 'jatuh', '2020-04-02 14:52:24', NULL);
INSERT INTO `slangword` VALUES (201, 'official', 'resmi', '2020-04-02 14:52:24', NULL);
INSERT INTO `slangword` VALUES (202, 'olh', 'oleh', '2020-04-02 14:52:24', NULL);
INSERT INTO `slangword` VALUES (203, 'or', 'atau', '2020-04-02 14:52:24', NULL);
INSERT INTO `slangword` VALUES (204, 'org', 'orang', '2020-04-02 14:52:24', NULL);
INSERT INTO `slangword` VALUES (205, 'pake', 'pakai', '2020-04-02 14:55:36', NULL);
INSERT INTO `slangword` VALUES (206, 'pcr', 'pacar', '2020-04-02 14:56:18', NULL);
INSERT INTO `slangword` VALUES (207, 'pcran', 'pacaran', '2020-04-02 14:56:18', NULL);
INSERT INTO `slangword` VALUES (208, 'pd', 'pada', '2020-04-02 14:56:18', NULL);
INSERT INTO `slangword` VALUES (209, 'pdhal', 'padahal', '2020-04-02 14:56:18', NULL);
INSERT INTO `slangword` VALUES (210, 'pg', 'pagi', '2020-04-02 15:01:09', NULL);
INSERT INTO `slangword` VALUES (211, 'php', 'pemberi harapan palsu', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (212, 'pk', 'pakai', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (213, 'plg', 'pulang', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (214, 'pls', 'tolong', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (215, 'pntg', 'penting', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (216, 'pny', 'punya', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (217, 'prcya', 'percaya', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (218, 'prnh', 'pernah', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (219, 'pst', 'pesat', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (220, 'recokin', 'ganggu', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (221, 'rempong', 'repot', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (222, 'ri', 'republik indonesia', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (223, 'schedule', 'jadwal', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (224, 'sdh', 'sudah', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (225, 'selow', 'santai', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (226, 'sgt', 'sangat', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (227, 'sgtu', 'segitu', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (228, 'sgtuny', 'segitunya', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (229, 'sjjurny', 'sejujurnya', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (230, 'skali', 'sekali', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (231, 'skrg', 'sekarang', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (232, 'slh', 'salah', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (233, 'sll', 'selalu', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (234, 'sm', 'sama', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (235, 'smg', 'semoga', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (236, 'smga', 'semoga', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (237, 'smw', 'semua', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (238, 'smwnya', 'semuanya', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (239, 'stj', 'setuju', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (240, 'stuju', 'setuju', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (241, 'sy', 'saya', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (242, 'sya', 'saya', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (243, 'syg', 'sayang', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (244, 'td', 'tadi', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (245, 'tdk', 'tidak', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (246, 'thn', 'tahun', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (247, 'tp:tapi', 'tapi', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (248, 'trs', 'terus', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (249, 'trus', 'terus', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (250, 'ttg', 'tentang', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (251, 'ttp', 'tetap', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (252, 'typo', 'salah tulis', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (253, 'u', 'kamu', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (254, 'unyu', 'menggemaskan', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (255, 'with', 'dengan', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (256, 'woles', 'santai', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (257, 'wtf', 'apa-apaan', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (258, 'x', 'kali', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (259, 'y', 'iya', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (260, 'yg:yang', 'yang', '2020-04-02 15:04:48', NULL);
INSERT INTO `slangword` VALUES (261, 'kpda', 'kepada', '2020-04-08 15:20:33', NULL);
INSERT INTO `slangword` VALUES (262, 'yg', 'yang', '2020-04-08 15:25:47', NULL);
INSERT INTO `slangword` VALUES (263, 'tsb', 'tersebut', '2020-05-15 17:44:17', NULL);

SET FOREIGN_KEY_CHECKS = 1;
