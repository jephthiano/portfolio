import $ from 'jquery';
import axios from 'axios';
import { err_msg, auth } from 'addons/global_variable.inc.js';


// click anywhere to hide modal
$(document).ready(
    function(){
        let m = document.getElementsByClassName('j-modal-click');
        window.onclick = function(event){
            for(let i = 0; i < m.length; i++){
                if(event.target == m[i]){
                    m[i].style.display = 'none';
                }
            }
        };
    }
)


// reverse string, get random number, add number, remove number
export const rvs = (str) => {return str.split("").reverse().join('');}
export const grn = () => {return Math.floor(Math.random() * 9) + 1;}
export const an = (str) => {let frt4 = grn()+''+grn()+''+grn()+''+grn();let lst3 = grn()+''+grn()+''+grn();return rvs(frt4+str+lst3)}
export const rn = (str) => {str = ''+str;return rvs(str.slice(3).slice(0,-4));}

//alert clearoff
function alertoff(){ setTimeout(thealert,5000); }
function thealert(){ $("#thealert").fadeOut('slow'); }

//check if object is empty
export const isEmptyObject = (obj) => {
   return Object.keys(obj).length < 1;
}

//extract object
export const extractObject = (obj,key,val) => {
    let dataArray = [];
    obj.map((data,index) => {
        if(data[key] === val){
            dataArray.push(data);
        }
    })
    
    return dataArray;
}

//loading
export const loading = (str='Loading',ty='id',id='sbtn') => {
    let rtrn= `
            <span className='j-spinner-border j-spinner-border-sm'style='margin-right:7px;'></span>"
            ${str}
            `
    if(ty==='id'){
        $('#'+id).html(rtrn);$('#'+id).prop('disabled',true);
    }else if(ty==='class'){
        $('.'+id).html(rtrn);$('.'+id).prop('disabled',true);
    }
 }

 //return button
 export const r_b = (str='Submit',ty='id',id='sbtn') => {
    if(ty==='id'){
        $('#'+id).html(str);$('#'+id).prop('disabled',false);
    }else if(ty==='class'){
        $('.'+id).html(str);$('.'+id).prop('disabled',false);
    }
}

// return mesage [for alert message]
export const r_m = (s='',d='st') => {
    if(s.length < 1){
        s='Error occurred';
    }
    var msg = `
    <span class='j-text-color4 j-button alert j-color1 j-bolder j-container j-padding j-round j-fixalert'id='thealert'>
    ${s}
    </span>
    `
    $('#'+d).html(msg);
    alertoff();
}

// return message [for box message]
export const r_m2 = (s='',type='failed',d='st') => {
    if(s.length < 1){
        s = `
            <span>Error occurred while running request, please try again later or reload page</span>
            `
    }

    const err = `
                <div id='return_message_modal'class='j-modal j-modal-click'>
                    <div class='j-card-4 j-modal-content j-color4'style="margin-top:200px">
                        <div class='j-padding'>
                            ${s}
                        </div>
                        <center class='j-padding'>
                            <div class='j-clickable j-text-color1 j-round j-border j-border-color1 j-padding'style='width:100%'
                            onClick="$('#return_message_modal').fadeOut('slow');">
                                Close
                            </div>
                        </center>
                    </div>
                </div>
                `
     $('#'+d).html(err);
     $('#return_message_modal').fadeIn('slow');
};


//toggle modal
export const toggle_modal = (type,id,mode='slow') => {
    //alert(300);
    if(type === 'show'){
        $('#'+id).fadeIn(mode)
    }else if(type === 'hide'){
        $('#'+id).fadeOut(mode)
    }
}

//change password input type
export const cpit = (i) => {
    let ps=$('#'+i).attr('type');
    if(ps==='password'){
        $('#'+i).attr('type','text');
        $('#eye'+i).html("<i class='fas fa-eye-slash'></i>");
    }else{
        $('#'+i).attr('type','password');
        $('#eye'+i).html("<i class='fas fa-eye'></i>");
    }
}

export const horNav = (clk_s,clk,itr='') =>{
    let x = document.getElementsByClassName("trigger"+itr);
    for(let i = 0; i < x.length; i++){x[i].style.display="none";} //hide all details
    $('#'+clk_s).show(); //show the click detail
    //set all button color to default
    $('.laucher'+itr).each(function(){
      if($('#base').hasClass('j-color4')){
        $(this).addClass('j-color4');$(this).removeClass('j-color3');
      }else{
        $(this).addClass('j-color3');$(this).removeClass('j-color4');
      }
    })
    //change the color of the clicked button
     if(clk.hasClass('j-color3')){
        clk.addClass('j-color4');clk.removeClass('j-color3');
     }else if(clk.hasClass('j-color4')){
        clk.addClass('j-color3');clk.removeClass('j-color4');
     }
  }

  //downloadfile
  export const downloadFile = (fileName) => {
    axios({
        method:'get',
        url:`http://localhost:4000/dcv/`,
        responseType:'arraybuffer',
        headers:{
            'Authorization':auth,
            'content-Type':'application/pdf',
        },
    })
    .then(response =>{
        console.log(response);
            const blob = new Blob([response.data], {type: 'application/pdf'});
            //create the object URL
            const url = window.URL.createObjectURL(blob);
            //create the a element and add the download and href attr
            const link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            //append the a attribute to body
            document.body.appendChild(link);
            //trigger clicking a element
            link.click();
            //remove a element
            link.parentNode.removeChild(link);
            r_m('CV downloaded');
        
    })
    //  .then(blob => {
        
    // })
    .catch(function (error) { // handle error
        r_m2(`${err_msg} Error occurred while downloading CV`);
    })
  }