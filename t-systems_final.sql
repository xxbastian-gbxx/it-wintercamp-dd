-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 23. Feb 2023 um 10:42
-- Server-Version: 10.4.27-MariaDB
-- PHP-Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `t-systems`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `arbeitsmittel`
--

CREATE TABLE `arbeitsmittel` (
  `ID` int(4) NOT NULL,
  `Monitor` varchar(1) NOT NULL,
  `Handy` varchar(1) NOT NULL,
  `Pc` varchar(1) NOT NULL,
  `Kopfhoerer` varchar(1) NOT NULL,
  `Maus` varchar(1) NOT NULL,
  `Tastatur` varchar(1) NOT NULL,
  `Kamera` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `arbeitsmittel`
--

INSERT INTO `arbeitsmittel` (`ID`, `Monitor`, `Handy`, `Pc`, `Kopfhoerer`, `Maus`, `Tastatur`, `Kamera`) VALUES
(4, '1', '1', '1', '1', '1', '1', '1'),
(1, '3', '1', '1', '0', '1', '1', '1'),
(3, '5', '1', '1', '1', '0', '1', '1'),
(2, '2', '1', '1', '1', '1', '1', '1');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `rolle`
--

CREATE TABLE `rolle` (
  `ID` int(4) NOT NULL,
  `Taetigkeit` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `rolle`
--

INSERT INTO `rolle` (`ID`, `Taetigkeit`) VALUES
(1, 'TA'),
(2, 'FK'),
(3, 'PA'),
(4, 'MA');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `to_do`
--

CREATE TABLE `to_do` (
  `T_ID` int(4) NOT NULL,
  `ID` int(4) NOT NULL,
  `Aufgabenstellung` varchar(255) NOT NULL,
  `Start` varchar(8) NOT NULL,
  `Ende` varchar(8) NOT NULL,
  `Fertig` tinyint(1) NOT NULL,
  `Ergebnis` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `to_do`
--

INSERT INTO `to_do` (`T_ID`, `ID`, `Aufgabenstellung`, `Start`, `Ende`, `Fertig`, `Ergebnis`) VALUES
(1, 4, 'Zusendung unterschriebener Arbeitsvertrag​.', '-14', '-7', 0, ''),
(2, 4, 'Zusendung des polizeilichen Führungszeugnisses​', '-21', '-14', 1, ''),
(3, 4, 'Arbeitsschutzunterweisung', '0', '1', 0, ''),
(4, 4, 'Einladung zum Welcome-Day​', '-21', '-14', 1, '');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user` (
  `ID` int(4) NOT NULL,
  `Vorname` varchar(20) NOT NULL,
  `Nachname` varchar(40) NOT NULL,
  `Telefonnummer` varchar(19) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Plz` varchar(5) NOT NULL,
  `Ort_Name` varchar(30) NOT NULL,
  `Strasse` varchar(40) NOT NULL,
  `Hausnummer` varchar(4) NOT NULL,
  `Passwort` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`ID`, `Vorname`, `Nachname`, `Telefonnummer`, `Email`, `Plz`, `Ort_Name`, `Strasse`, `Hausnummer`, `Passwort`) VALUES
(1, 'Hans', 'Wurst', '+49 198 17834', 'Hans.Wurst@t-systems4.de', '12345', 'Bushausen', 'geiloBushausen', '10a', '30.02.2224'),
(2, 'Tomas', 'Einstein', '+49 839 82912', 'Tomas.Einstein@t-systems4.de', '92812', 'Bushausen2', 'rufbushausen2', '10p', '1.04.2006'),
(3, 'Olaf', 'Müller', '+49 198 29182', 'Olaf.Müller@t-systems4.de', '12354', 'bushausen3', 'busenhausen3', '2k', '07.06.2034'),
(4, 'gaul', 'stapf', '+49 198 93283', 'gaul.stapf@t-systems.de', '54321', 'Olafhausen', 'olafhausen8', '8p', '08.12.2022');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `arbeitsmittel`
--
ALTER TABLE `arbeitsmittel`
  ADD KEY `ID` (`ID`);

--
-- Indizes für die Tabelle `rolle`
--
ALTER TABLE `rolle`
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indizes für die Tabelle `to_do`
--
ALTER TABLE `to_do`
  ADD PRIMARY KEY (`T_ID`),
  ADD KEY `ID` (`ID`);

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `to_do`
--
ALTER TABLE `to_do`
  MODIFY `T_ID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `arbeitsmittel`
--
ALTER TABLE `arbeitsmittel`
  ADD CONSTRAINT `arbeitsmittel_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `user` (`ID`);

--
-- Constraints der Tabelle `rolle`
--
ALTER TABLE `rolle`
  ADD CONSTRAINT `rolle_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `user` (`ID`);

--
-- Constraints der Tabelle `to_do`
--
ALTER TABLE `to_do`
  ADD CONSTRAINT `to_do_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `user` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
