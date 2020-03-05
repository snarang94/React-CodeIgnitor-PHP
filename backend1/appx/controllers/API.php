<?php
ini_set( "display_errors", 0);

require(APPPATH.'/libraries/REST_Controller.php');

class Api extends REST_Controller{

  public function __construct()
  {
    parent::__construct();
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    $this->load->model('Player_model');
    $this->load->library('form_validation');
    $this->load->helper('url', 'form');
  }

  function index_get()
  {
  }

// To upload a json
  function upload_post()
  {
    $config['upload_path'] = './upload/';
    $config['allowed_types'] = 'json';
    $this->load->library('upload', $config);

//checking if file if json or not
    if (!$this->upload->do_upload('myFile'))
    {
      $error = array('error' => $this->upload->display_errors());
      $this->response("Error uploading file : Check the type of file", 400);
    }
    else
    {
      $data = array('image_metadata' => $this->upload->data());
      $json = file_get_contents('./upload/' . $data["image_metadata"]["file_name"]);
      $obj  = json_decode($json, true);

      foreach ($obj["Players"]  as $key => $value) {
        $name  = $value['Name'];
        $age   = $value["Age"];
        $city  = $value["Location"]["City"];
        $province = $value["Location"]["Province"];
        $country  = $value["Location"]["Country"];

        if(!$name || !$age || !$city || !$province || !$country){
          $this->response("Enter complete player information to save (check JSON)", 406);
        }else{
// calling upload model to save player info
          $result = $this->Player_model->add(array("name"=>$name, "age"=>$age, "city"=>$city, "province"=>$province, "country"=>$country));
          if($result === 0){
            $this->response("Player information could not be saved. Try again.", 408);
          }else{
            $this->response("success", 200);
          }
        }
      }
    }
  }

  //API - client sends name and on valid name, player information is sent back
  function playerByName_get(){
    $name  = $this->get('name');
    if(!$name){
      $this->response("No Name specified", 400);
      exit;
    }

    $result = $this->Player_model->getplayersbyname( $name );
    if($result){
      $this->response($result, 200);
      exit;
    }
    else{
      $this->response("Invalid name", 404);
      exit;
    }
  }

  //API -  Fetch All players
  function players_get(){

    $result = $this->Player_model->getallplayers();

    if($result){
      $this->response($result, 200);
      exit;
    }
    else{
      $this->response("No record found", 404);
    }
  }


  //API - delete a player
  function deletePlayer_delete()
  {
    $id  = $this->delete('id');
    if(!$id){
      $this->response("Parameter missing".$id, 404);
    }
    if($this->Player_model->delete($id))
    {
      $this->response("Success", 200);
    }
    else
    {
      $this->response("Failed", 400);
    }
  }

}
