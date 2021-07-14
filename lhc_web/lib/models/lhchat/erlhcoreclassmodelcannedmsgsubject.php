<?php

class erLhcoreClassModelCannedMsgSubject
{
    use erLhcoreClassDBTrait;

    public static $dbTable = 'lh_canned_msg_subject';

    public static $dbTableId = 'id';

    public static $dbSessionHandler = 'erLhcoreClassChat::getSession';

    public static $dbSortOrder = 'DESC';

    public function getState()
    {
        return array(
            'id' => $this->id,
            'canned_id' => $this->canned_id,
            'subject_id' => $this->subject_id
        );
    }

    public $id = null;
    public $canned_id = 0;
    public $subject_id = 0;
}

?>