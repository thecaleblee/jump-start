<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'jump-user2');

/** MySQL database username */
define('DB_USER', 'jump-user2');

/** MySQL database password */
define('DB_PASSWORD', '2legit2quit');

/** MySQL hostname */
define('DB_HOST', 'localhost:8888');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'xebW:]e qg7x2Sdt;<KG]2/IgJz?SN8`b2IPiVShlp4x-A:K[7n+a:&ER}2 =9CH');
define('SECURE_AUTH_KEY',  'A|=O{OXJx(9ox3Vm257~xQ+:yu4l[Um!wGN:_~~#d|E<J_a&0xNU[dXrX8u?R:rv');
define('LOGGED_IN_KEY',    '@;!qDT<%H,M8V`Oj;pTH7-7V/#xo9q8QC,dJev#94L95E%/{vxS]t4HW$TLgWsc/');
define('NONCE_KEY',        'J*MV@k}iZJ>9bUNTtJdh3(o^)YdQ&?A4#Z+R6V9|(C @-CXNuxLm%3L~>7}yV{E1');
define('AUTH_SALT',        'TI1Jemb1*HOk,iZOZ!TUouT/i,?yi+(z :sEh_2s#OJU50<znVg.G*G HGRj7NS#');
define('SECURE_AUTH_SALT', 'U6igfQf:Qg_$kTanRj=cuE@`[0A&31Hn%Z+,hipqwj1z1rG$trpAqQ4}$MMRgny^');
define('LOGGED_IN_SALT',   '$`e>9sYO,Ti(.*,#|S_a+[g7EhVf3~W%tL{I)oMX|uLOgdKcPwq+#Qp[@rt1@=JN');
define('NONCE_SALT',       'gB$!kH_-5ziiN.d*h=h#UYbT3Y__9IJs%o?ZL}la|wk:KJoX+`5e xZjjDc;wU;p');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
