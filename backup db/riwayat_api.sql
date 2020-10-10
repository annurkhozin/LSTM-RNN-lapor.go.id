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

 Date: 01/07/2020 18:00:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for riwayat_api
-- ----------------------------
DROP TABLE IF EXISTS `riwayat_api`;
CREATE TABLE `riwayat_api`  (
  `_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `teks` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `prediksi_label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ip_address` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `tgl_akses` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of riwayat_api
-- ----------------------------
INSERT INTO `riwayat_api` VALUES (1, 'Saya sudah daftar bpjs mandiri, dengan pembayaran di potong otomatis rekening tabungan bank, katanya akan ada kartu bpjs di kirim ke alamat rumah namun sampai sekarang tidak ada kiriman kartu, kalau bayar bpjs gimana caranya. trus apakah keluarga saya sudah terdaftar di bpjs kesehatan? saya sudah daftar dari 3 bulan yg lalu', 'BADAN PENYELENGGARA JAMINAN SOSIAL KESEHATAN', '192.168.43.193', '2020-06-14 16:02:18');
INSERT INTO `riwayat_api` VALUES (2, 'Saya berusaha untuk mendaftar online antrean paspor di situs imigrasi. Berhubung saya lupa password yang sudah terdaftar, saya sudah mencoba menu reset password, tetapi e-mail saya tidak dikenal. Saya sudah mencoba daftar log-in baru tetapi ditolak karena data saya sudah terdaftar. Apa yang harus saya lakukan?', 'DIREKTORAT JENDERAL IMIGRASI', '192.168.43.193', '2020-06-14 16:02:58');
INSERT INTO `riwayat_api` VALUES (3, 'KIP NO KIP,T418KP ,Assalamu alaekum,iye ak mau brtanya,knpa anak ak udah brapa kali enga pernah trima bntuan dri , kip, pdahal tmanya pad udah trima smua, bhkan udah berkali kali, sedangkan anak ak tdak pernah trima sma skli,pdahal kip ya in bru , kls 3 udah dpat krtu kip in, tpi skrn udah kls v, dia blm terim juga.', 'KEMENTERIAN PENDIDIKAN DAN KEBUDAYAAN', '192.168.43.193', '2020-06-14 16:04:56');
INSERT INTO `riwayat_api` VALUES (4, 'Kartu jamsostek tidak ketemu dan sudah dicari, perusahaaan yg mendaftarkan kami sebagai peserta jamsostek jauh dari domisili, mohon bantuan untuk mendapatkan kembali nomor kpj (bpjs tk) yang hilang an. rido kurnia afatra , ttl : payakumbuh, 15 juni 1988, alamat : parit rantang kota payakumbuh, nama ibu kandung : fatmawati, nik : 1376011506880004 , perusahaan : pt. prima karya sarana sejahtera', 'BADAN PENYELENGGARA JAMINAN SOSIAL KETENAGAKERJAAN', '61.5.8.153', '2020-06-26 03:42:32');
INSERT INTO `riwayat_api` VALUES (5, 'Selamat siang, mau menanyajan terkait perpanjang passport, mohon infonya', 'KEPOLISIAN NEGARA REPUBLIK INDONESIA', '61.5.8.153', '2020-06-27 11:22:49');
INSERT INTO `riwayat_api` VALUES (6, 'Mohon pelayanan perpanjangan paspor untuk pelaut segera dibuka. karena tanpa paspor kami tidak bisa bekerja diatas kapal. kami pegawai swasta. tidak bekerja yaa tidak digaji. sudah hampir 1 bulan lebih saya menunggu untuk perpanjangan paspor tetapi sampai sekarang belum dibuka. tolong kasihani kami..', 'DIREKTORAT JENDERAL IMIGRASI', '61.5.8.153', '2020-06-27 11:23:47');
INSERT INTO `riwayat_api` VALUES (7, 'Yth pln wilayah jawa timur, cc. menteri bumn dan dirut pln. menindak lanjuti laporan saya perihal \"pengajuan pemasangan listrik baru yg blm terealisasi\"di dukuh tanjungrejo, desa kayutrejo, kec. widodaren, kab. ngawi, jawa timur.\na/n : sugiyanto cs\nno : 0096/aga 01.01/upl-mtn/2019\nlokasi : exit fj 013 d01\ntotal daya : 80.700 va (penambahan daftar pasang baru 20.000 va)\nsaya informasikan pemasangan kabel utama stroom sdh selesai hari selasa tgl 23 juni2020. sedangkan utk travo, kabel utama ke meteran dan meteran 5.500 va dan 4.500 va tdk ada kejelasan. menurut informasi dari cv. yg mengerjakan stock matrial di atas di gudang pln madiun kosong sdh lama sehingga proses pengerjaan terhambat. oleh krn itu mohon dgn hormat bpk/ibu pln sudi kiranya membantupenyelesaian pemasangan listrik yg kami ajukan agar tdk gagal panen musim ini. suwun', 'PT PLN (PERSERO)', '61.5.8.153', '2020-06-27 14:34:01');
INSERT INTO `riwayat_api` VALUES (8, 'Kami warga jln sukowaras rt 44 kel sukomoro kec talang kelapa kab banyuasin prop sumsel. sering padam aliran pln. bahkan setiap hari hisa 3 kali. padam bisa sampai 5 atau 7 jam. sedang dijalan samping tepatnya jalan pasir putih yg cumah bedah cuma berapa meter dari jlan kami. jarang kali padam karna di jlan pasir puti ini banyak industri atau pabrik.. yg kami tanyakan apa karna industri golongan. istimewa karna golongan orang2 berduit. sedang di tempat kami hanya golongan pemakaian rumah tangga. apa memang seperti itu layanan pln untuk pelangan nya. karna telat bayar tagihan kami didenda nungak se bulan kami dicabut... yg jadi masalah apa para pemakai industri itu apa memang jujur sesuai pemakaian dg standar kwa atau ada sesuatu.....', 'PT PLN (PERSERO)', '36.85.72.127', '2020-06-30 10:43:39');
INSERT INTO `riwayat_api` VALUES (9, 'Di daerah saya sering terjadi pemadaman listrik. padahal untuk desa atau daerah lain jarang terjadi hal tersebut.mohon untuk pihak pln kota gresik segera menindaklanjuti hal tersebut', 'PT PLN (PERSERO)', '36.85.72.127', '2020-06-30 10:55:53');
INSERT INTO `riwayat_api` VALUES (10, 'Selamat sore.. bapak / ibu yth\nsaya rachmat al amin mewakili kaka kandung saya yang bermama evi rusmanida yanthi\ningin mengadukan tindakan tidak ber adab salah satu collection wulling finance yang bernama daya komara.\nkaka saya adalah debitur willing finance\nnama. : evi rusmanida yanthi\nno kontrak : 19603100012\ntotal angsuran : rp. 3.826.000\ntenor. : 60 bulan\ntipe kendaraan : wulling confero db 1.5\njatoh tempo tgl 14 setiap bulan nya\n\nkaka saya ada keterlambatan pembayaran angsuaran di bulan juni ini yang harus nya tgl 14 kaka saya baru bisa bayar di tgl 27 . tetapi cara penagihan collection wulling finance sangat tidak ber adab berikut saya lampirkan isi whatsapp kaka saya dengan collection yg bernama daya komara\n\napakah bukti percakapan tersebut bisa saya jadikan dasar untuk melaporkan saudara daya komara ke pihak kepolisian .. mohon informasi nya. atas perhatiannya saya ucapkan terima kasih.', 'KEPOLISIAN NEGARA REPUBLIK INDONESIA', '36.85.72.127', '2020-06-30 11:01:40');
INSERT INTO `riwayat_api` VALUES (11, 'kepolisian menindaklanjuti kejadian pencurian listrik di kantor imigrasi', 'KEPOLISIAN NEGARA REPUBLIK INDONESIA', '36.85.72.127', '2020-06-30 11:05:00');

SET FOREIGN_KEY_CHECKS = 1;
