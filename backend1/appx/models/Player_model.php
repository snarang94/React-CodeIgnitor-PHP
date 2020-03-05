<?php
class Player_model extends CI_Model {

  public function __construct(){
    $this->load->database();
  }

  //API call - get a player record by name
  public function getplayersbyname($name){

    $this->db->select('name, age, city, province, country, id');
    $this->db->from('players');
    $this->db->where('name',$name);

    $query = $this->db->get();

    if($query->num_rows() > 0)
    {
      return $query->result_array();
    }
    else
    {
      return 0;
    }
  }

  //API call - get all players record
  public function getallplayers(){

    $this->db->select('id, name, age, city, province, country');
    $this->db->from('players');
    $this->db->order_by("id", "asc");

    $query = $this->db->get();

    if($query->num_rows() > 0){
      return $query->result_array();
    }else{
      return 0;
    }
  }

  //API call - delete a player record
  public function delete($id){

    $this->db->where('id', $id);

    if($this->db->delete('players')){
      return true;
    }else{
      return false;
    }
  }

  //API call - add new player record
  public function add($data){

    if($this->db->insert('players', $data)){
      return true;
    }else{
      return false;
    }
  }

}
