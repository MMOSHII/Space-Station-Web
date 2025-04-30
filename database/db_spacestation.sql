-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2025 at 08:28 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_spacestation`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id_admin`, `email`, `password`) VALUES
(1, 'admin@gmail.com', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `histori_booking`
--

CREATE TABLE `histori_booking` (
  `id_histori` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_tiket` int(11) NOT NULL,
  `asal` varchar(50) NOT NULL,
  `tujuan` varchar(50) NOT NULL,
  `tanggal` date NOT NULL,
  `pukul` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `histori_booking`
--

INSERT INTO `histori_booking` (`id_histori`, `id_user`, `id_tiket`, `asal`, `tujuan`, `tanggal`, `pukul`) VALUES
(5, 1, 4, '3', '6', '2025-04-30', '14:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `planet`
--

CREATE TABLE `planet` (
  `id_planet` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `planet`
--

INSERT INTO `planet` (`id_planet`, `nama`) VALUES
(1, 'Merkurius'),
(2, 'Venus'),
(3, 'Bumi'),
(4, 'Mars'),
(5, 'Jupiter'),
(6, 'Saturnus'),
(7, 'Uranus'),
(8, 'Neptunus');

-- --------------------------------------------------------

--
-- Table structure for table `tiket`
--

CREATE TABLE `tiket` (
  `id_tiket` int(11) NOT NULL,
  `kelas` enum('Economy','Premium Economy','Business Class','First Class') NOT NULL,
  `harga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tiket`
--

INSERT INTO `tiket` (`id_tiket`, `kelas`, `harga`) VALUES
(1, 'Economy', 5000000),
(2, 'Premium Economy', 7500000),
(3, 'Business Class', 10000000),
(4, 'First Class', 50000000);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `email`, `password`) VALUES
(1, 'dummy@gmail.com', '12345');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `histori_booking`
--
ALTER TABLE `histori_booking`
  ADD PRIMARY KEY (`id_histori`);

--
-- Indexes for table `planet`
--
ALTER TABLE `planet`
  ADD PRIMARY KEY (`id_planet`);

--
-- Indexes for table `tiket`
--
ALTER TABLE `tiket`
  ADD PRIMARY KEY (`id_tiket`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `histori_booking`
--
ALTER TABLE `histori_booking`
  MODIFY `id_histori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `planet`
--
ALTER TABLE `planet`
  MODIFY `id_planet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tiket`
--
ALTER TABLE `tiket`
  MODIFY `id_tiket` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
