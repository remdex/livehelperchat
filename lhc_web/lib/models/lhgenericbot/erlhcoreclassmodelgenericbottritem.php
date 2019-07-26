<?php

class erLhcoreClassModelGenericBotTrItem {

    use erLhcoreClassDBTrait;

    public static $dbTable = 'lh_generic_bot_tr_item';

    public static $dbTableId = 'id';

    public static $dbSessionHandler = 'erLhcoreClassGenericBot::getSession';

    public static $dbSortOrder = 'DESC';

    public function getState()
    {
        $stateArray = array(
            'id' => $this->id,
            'group_id' => $this->group_id,
            'identifier' => $this->identifier,
            'translation' => $this->translation
        );

        return $stateArray;
    }

    public function __toString()
    {
        return $this->name;
    }

    public function __get($var)
    {
        switch ($var) {
            case 'translation_array':
                $attr = str_replace('_array','',$var);
                if (!empty($this->{$attr})) {
                    $jsonData = json_decode($this->{$attr},true);
                    if ($jsonData !== null) {
                        $this->{$var} = $jsonData;
                    } else {
                        $this->{$var} = array('default' => ($this->{$attr} != '' ? $this->{$attr} : null), 'items' => array());
                    }
                } else {
                    $this->{$var} = array('default' => '', 'items' => array());
                }
                return $this->{$var};
                break;

            default:
                break;
        }
    }

    public $id = null;
    public $name = '';
    public $identifier = '';
    public $translation = '';
    public $group_id = 0;
}