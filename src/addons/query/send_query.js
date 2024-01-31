import $ from 'jquery';
import { useMutation } from '@tanstack/react-query';
import { sendMessage } from 'addons/query/api';
import { err_msg } from 'addons/global_variable.inc.js';
import { r_m2 } from 'addons/function/general.fuc.js';


export const useSendMessage = (data) => {
  return useMutation({
    mutationFn: () => sendMessage(data),
    onMutate: () => {
      $('.mg').html('');
    },
    onError: () => {
        r_m2(`${err_msg} Error occurred while sending message`);
    },
    onSuccess: (response) => {
        let res = response.data;
        if(res === 'invalid request'){
          r_m2(`${err_msg} Error occurred while sending message`);
        }else if(res.status === 'error'){
          for(let x in res.errors){$('#'+x).html(res.errors[x]);}
        }else{
          r_m2(res.message);
          if(res.status === 'success'){$('.ip').val('');}
        }
    },
  })
}