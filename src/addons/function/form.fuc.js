import  {cpit} from 'addons/function/general.fuc.js';

const inputStyle = {
    width:'100%',maxWidth:'400px',outline:'none',position:'relative'    
}


//label
const Label = (props) => {
    if(props.label === false){
        var label = (
            <>
            <span className='mg j-text-color8 j-left'id={props.errorId}></span>
            <br className='j-clearfix'/>
            </>
        );
    }else{
        var label = (
            <>
            <label className="j-left">
                <b>{props.label}</b>
                <span className='mg j-text-color8'id={props.errorId}></span>
            </label>
            <br/> 
            </>
        );
    }
    return label;
}


//notice
const Notice = (props) => {
    if(props.notice !== false){
        var notice = (
            <>
            <span className='j-small j-text-color5 j-italic'style={{position:'relative',top:'-5px'}}>
                ({props.notice})
            </span>
            
            </>
        );
    }
    return notice;
}


const Eye = (props) => {
    let eyeId = 'eye'+props.id
    if(props.eye !== false){
        var eye = (
            <>
            <div className="j-eye"style={{width:'30px'}}>
                <span id={eyeId}className="j-clickable"onClick={() => cpit(props.id)}>
                    <i className="fas fa-eye"></i>
                </span>
            </div>            
            </>
        );
    }
    return eye;
}


//text input
const TextInput = (props) => {
    let errorId = props.id+'e';
    return(
        <>
        <div>
            <Label label={props.label} errorId={errorId}/>
            <input type={props.type}className="ip j-input j-medium j-border-2 j-border-color5 j-round"
                name={props.id}id={props.id}placeholder={props.placeholder}minLength={props.minLength}maxLength={props.maxLength}
				required={props.required} disabled={props.disabled} style={inputStyle}/>
            <Notice notice={props.notice}/>
        </div>
        </>
    )
}
TextInput.defaultProps = {
    type: "text",
    label: false,
    notice: false,
    required: false,
    disabled: false
};


//textarea
const TextArea = (props) => {
    let errorId = props.id+'e';
    return(
        <>
        <div>
            <Label label={props.label} errorId={errorId}/>
            <textarea className="ip j-input j-medium j-border-2 j-border-color5 j-round"
                name={props.id}id={props.id}placeholder={props.placeholder}minLength={props.minLength}maxLength={props.maxLength}
				required={props.required} disabled={props.disabled}row={props.row}style={inputStyle}/>
            <Notice notice={props.notice}/>
        </div>
        </>
    )
}
TextArea.defaultProps = {
    type: "text",
    label: false,
    notice: false,
    required: false,
    disabled: false
};


// password
const Password = (props) => {
    let errorId = props.id+'e';
    return(
        <>
        <div style={inputStyle}>
            <Label label={props.label} errorId={errorId}/>
            <input type='password'className="pss ip j-input j-medium j-border-2 j-border-color5 j-round"
                name={props.id}id={props.id}placeholder={props.placeholder}minLength={props.minLength}maxLength={props.maxLength}
				style={{width:'inherit',maxWidth:'inherit',outline:'none'}}required={props.required} disabled={props.disabled}/>
            <Eye eye={props.eye}id={props.id}/>
        </div>
        </>
    )
}
Password.defaultProps = {
    id: "pss",
    label: false,
    eye: false,
    placeholder: 'Password',
    required: false,
    disabled: false
};


//hidden
const Hidden = (props) => {
    return(
        <>
        <input type='hidden' id={props.id}value={props.value}/>
        </>
    )
}
Hidden.defaultProps = {
    id: 'id',
};


//checkbox
const Checkbox = (props) => {
    return(
        <>
        <input type="checkbox"name={props.name}id={props.id}value={props.value}
            class="j-check" checked={props.checked}/>
        </>
    )
}


//radio
const Radio = (props) => {
    return(
        <>
        <input type="radio"name={props.name}id={props.id}value={props.value}
            class="j-check" checked={props.checked}/>
        </>
    )
}


//select
const Select = (props) => {
    let errorId = props.id+'e';
    let options = '';

    if(props.options !== false){
         options = (
            props.options.map((list,index) => (
                <option key={index}value={list.value}>{list.data}</option>
            ))
        )
    }

    return(
        <>
        <div>
            <Label label={props.label} errorId={errorId}/>
            <select class='ip j-input j-select j-medium j-border-2 j-border-color5 j-round'
                name={props.id}id={props.id}style={inputStyle}>
                <option value="">Select {props.toSelect}</option>
                {options}
            </select>
            <Notice notice={props.notice}/>
        </div>
        </>
    )
}
Select.defaultProps = {
    label: false,
    notice: false,
    options: false
};


// button
const Button = (props) => {

    let loading = '';
    if(props.loading){
        loading = (
            <span className='j-spinner-border j-spinner-border-sm'style={{marginRight:'7px',position:'relative',top:'-2px'}}></span>
        )
    }
    const btnClass = `${props.color} j-btn j-medium j-round j-bolder j-padding`;
    return(
        <>
            <button type='submit'id={props.id}name={props.id}className={btnClass}style={inputStyle}disabled={props.disabled}>
            {loading} {props.value}
            </button>
        </>
    )
}
Button.defaultProps = {
    id: 'id',
    value: 'Submit',
    color: 'j-color1',
    disabled: false,
    loading: false,
}


export {TextInput, TextArea, Password, Hidden, Checkbox, Radio, Select, Button}