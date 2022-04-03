CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `roles` varchar(255) DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `provider` varchar(255) DEFAULT 'local',
  `provider_data` mediumtext,
  `provider_data_plus` mediumtext,
  `provider_ids` TEXT DEFAULT NULL,
  `reset_password_token` varchar(45) DEFAULT NULL,
  `reset_password_expires` timestamp(6) NULL DEFAULT NULL,
  `email_verification_token` varchar(255) DEFAULT NULL,
  `email_verified` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ;
