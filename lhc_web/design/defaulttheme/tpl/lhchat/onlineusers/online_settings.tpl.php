<ul class="list-inline float-right user-settings-list">
	<li class="li-icon list-inline-item"><a href="#" ng-click="online.disableNewUserSound()"><i class="material-icons" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Enable/Disable sound about new visitor');?>">{{online.soundEnabled ? '&#xf57e;':'&#xf581;'}}</i></a></li>
	<li class="li-icon list-inline-item"><a href="#" ng-click="online.disableNewUserBNotif()"><i class="material-icons"  title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Enable/Disable browser notifications about new visitor');?>">{{online.notificationEnabled ? '&#xf208;' : '&#xf209;'}}</i></a></li>
</ul>