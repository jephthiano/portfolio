import $ from 'jquery';
import { useMutation } from '@tanstack/react-query';
import { sendMessage } from 'addons/query/api';
import { err_msg } from 'addons/global_variable.inc.js';
import { r_m2, isEmptyObject } from 'addons/function/general.fuc.js';


export const useSendMessage = (data) => {
  return useMutation({
    mutationFn: () => sendMessage(data),
    onMutate: () => {
      $('.mg').html('');
    },
    onError: (error) => {
        r_m2(`${err_msg} Error occurred while sending message`);
    },
    onSuccess: (response) => {
      if(response.status){
        r_m2(response.message,'success');
        $('.ip').val('');
      }else{
        if(!isEmptyObject(response.errorData)){
          
          for(let x in response.errorData){$(`#${x}e`).html(`* ${response.errorData[x]}`);}
        }else{
          r_m2(response.message,'failed');
        }
      }
    },
  })
}