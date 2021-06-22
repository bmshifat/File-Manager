<?php
/**
 * BM - veno file manager: include/head.php
 * main php setup
 *
 * PHP version >= 5.3
 *
 * @category  PHP
 * @package   VenoFileManager
 * @author    Nicola Franchini <support@veno.it>
 * @copyright 2013 Nicola Franchini
 * @license   Exclusively sold on CodeCanyon
 * @link      http://filemanager.veno.it/
 */
if (version_compare(phpversion(), '5.5', '<')) {
    // PHP version too low.
    header('Content-type: text/html; charset=utf-8');
    exit('<h2>Veno File Manager 3 requires PHP >= 5.5</h2><p>Current: PHP '.phpversion().', please update your server settings.</p>');
}

if (!defined('VFM_APP')) {
    return;
}

if (!file_exists('BM-Admin/config.php')) {
    if (!copy('BM-Admin/config-master.php', 'BM-Admin/config.php')) {
        exit("failed to create the main config.php file, check CHMOD on /BM-Admin/");
    }
}

if (!file_exists('BM-Admin/users/users.php')) {
    if (!copy('BM-Admin/users/users-master.php', 'BM-Admin/users/users.php')) {
        exit("failed to create the main users.php file, check CHMOD on /BM-Admin/users/");
    }
}

require_once 'BM-Admin/config.php';

if ($_CONFIG['debug_mode'] === true) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(E_ALL ^ E_NOTICE);
}

require_once 'BM-Admin/class.php';

// Redirect blacklisted IPs.
Utils::checkIP();

require_once 'BM-Admin/users/users.php';
require_once 'BM-Admin/users/remember.php';
global $translations_index;
$translations_index = json_decode(file_get_contents('BM-Admin/translations/index.json'), true);

$setUp = new SetUp();

if (SetUp::getConfig("firstrun") === true || strlen($_USERS[0]['pass']) < 1) {
    header('Location:BM-Admin/setup.php');
    exit;
}
require_once 'BM-Admin/translations/'.$setUp->lang.'.php';

$updater = new Updater();
$gateKeeper = new GateKeeper();
$gateKeeper->init();

$location = new Location();
$downloader = new Downloader();

$updater->init();
$template = new Template();
$imageServer = new ImageServer();

require_once 'BM-Admin/users/token.php';
$resetter = new Resetter();
$resetter->init();

if ($gateKeeper->isAccessAllowed()) {
    new Actions($location);
};

$getdownloadlist = filter_input(INPUT_GET, "dl", FILTER_SANITIZE_STRING);

require_once 'BM-Admin/fonts/BM-icons.php';
