<?php

class erLhcoreClassModelChatIncoming {

    use erLhcoreClassDBTrait;

    public static $dbTable = 'lh_chat_incoming';

    public static $dbTableId = 'id';

    public static $dbSessionHandler = 'erLhcoreClassChat::getSession';

    public static $dbSortOrder = 'DESC';

    public function getState()
    {
        return array(
            'id'                => $this->id,
            'chat_external_id'  => $this->chat_external_id,
            'chat_id'           => $this->chat_id,
            'incoming_id'       => $this->incoming_id
        );
    }

    public function __get($var) {

        switch ($var) {

            case 'chat':
                $this->chat = erLhcoreClassModelChat::fetch($this->chat_id);
                return $this->chat;

            default:
                break;
        }
    }

    public $id = null;

    // Our main chat id
    public $chat_id = 0;

    // External chat id
    public $chat_external_id = '';

    // Which webhook was used
    public $incoming_id = 0;
}

?>