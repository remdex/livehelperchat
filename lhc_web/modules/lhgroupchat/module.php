<?php

$Module = array( "name" => "Group chats module",
    'variable_params' => true );

$ViewList = array();

$ViewList['loadgroupchat'] = array(
    'params' => array('id'),
    'uparams' => array(),
    'functions' => array( 'use' ),
    'multiple_arguments' => array()
);

$ViewList['addmessage'] = array(
    'params' => array('id'),
    'uparams' => array(),
    'functions' => array( 'use' ),
    'multiple_arguments' => array()
);

$ViewList['sync'] = array(
    'params' => array('id'),
    'uparams' => array(),
    'functions' => array( 'use' ),
    'multiple_arguments' => array()
);

$ViewList['list'] = array(
    'params' => array(),
    'uparams' => array(),
    'functions' => array( 'manage' )
);

$ViewList['edit'] = array(
    'params' => array('id'),
    'uparams' => array(),
    'functions' => array( 'manage' )
);

$ViewList['edit'] = array(
    'params' => array('id'),
    'uparams' => array('csfr'),
    'functions' => array( 'manage' )
);

$ViewList['delete'] = array(
    'params' => array('id'),
    'uparams' => array('csfr'),
    'functions' => array( 'manage' )
);

$ViewList['new'] = array(
    'params' => array(),
    'uparams' => array(),
    'functions' => array( 'manage' )
);

$FunctionList['use'] = array('explain' => 'Permission to use group chat module');
$FunctionList['manage'] = array('explain' => 'Permission to manage group chat module');

?>