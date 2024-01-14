import React,{useState,useEffect} from 'react';

const Register=()=>{
    const[selectedOption,setSelectedOption]=useState('usa');
    const handleSelectChange=(event)=>{
        setSelectedOption(event.target.value);
    };
    const initialValues={username:"",email:"",fathername:"",mothername:"",address:"",tenpercent:"",twelvepercent:"",pincode:"",schoolpin:"",schoolname:""};
    const [formValues,setFormValues]=useState(initialValues);
    const [formErrors,setFormErrors]=useState({});
    const[isSubmit,setIsSubmit]=useState(false);
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormValues({...formValues,[name]: value});
        console.log(formValues);
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        validate(formValues)
        setFormErrors(validate(formValues));

    };
    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length===0&& isSubmit){
            console.log(formValues);
        }
    }
    ,[formErrors])
    const validate=(values)=>{
        const errors={}
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.username){
            errors.username="Username required!"
        }
        if(!values.mothername){
            errors.mothername="mother name required!"
        }
        if(!values.fathername){
            errors.fathername="father name required!"
        }
        if(!values.email){
            errors.email="email required"
        }
        if(!values.phonenumber){
            errors.phonenumber="phonenumber required!"
        }
        if(!values.address){
            errors.address="address required!"
        }
        if(!values.pincode){
            errors.pincode="pincode required!"
        }
        if(!values.schoolname){
            errors.schoolname="schoolname required!"
        }
        if(!values.schoolpin){
            errors.schoolpin="schoolpin required!"
        }
        if(!values.twelvepercent){
            errors.twelvepercent="class 12 percentage required!"
        }
        if(!values.schoolname){
            errors.schoolpin="schoolname required!"
        }
        if(!values.schoolpin){
            errors.schoolpin="schoolpin required!"
        }
        if(!values.tenpercent){
            errors.tenpercent="class 10 percentage required!"
        }
        return errors;
        

    };
        
    
    return(
    <div className="mybody">
    <div className="register">
        {Object.keys(formErrors).length === 0 && isSubmit && (
        <div className="ui_message_success">Submitted successfully</div>    
         )}
    <form onSubmit={handleSubmit}>
          
    <div className="mainform">
        
    <p className="formheading">Registration portal</p>
    
    <li className="textbox"><label htmlFor="name">Enter name:</label>
        <input type="text" className="classtext" label="name" name="username" value={formValues.username} onChange={handleChange}/>
    </li>
    <p className="err">{formErrors.username}</p>
    <div className='family'>
    <li className="textbox"><label htmlFor="name">Enter Mother's name:</label>
         <input type="text" className="classtext" label="name" name="mothername" value={formValues.mothername} onChange={handleChange}/>
    </li>
    <p className="err">{formErrors.mothername}</p>
    <li className="textbox" id="father"><label htmlFor="name">Enter Father'sname:</label>
          <input type="text" className="classtext" label="name" name= "fathername"value={formValues.fathername} onChange={handleChange}/>
    </li>
    <p className="err">{formErrors.fathername}</p>
    </div>
     <li><div className="myselect"><label>Select Year</label>
         <select id="year" size="4" value={selectedOption} onChange={handleSelectChange}>
        <option value="I year"> I year</option> 
        <option value="II year"> II year</option> 
        <option value="III year"> III year</option>
        </select>
     
        </div>
    
    </li>
    

    <li className="textbox"><label htmlFor="EAddress">Enter email Address:</label>
        <input type="text" className="classtext" label="Address" name="email" value={formValues.email} onChange={handleChange}/>
    </li>
    <p className="err">{formErrors.email}</p>
    <li className="textbox"><label htmlFor="phone number">Enter Phone number:</label>
        <input type="text" className="classtext" label="phone number" name="phonenumber"value={formValues.phonenumber} onChange={handleChange}/>
    </li>
    <p className="err">{formErrors.phonenumber}</p>
    <li className="textbox"><label htmlFor="Address">Enter Address:</label>
        <input type="text" className="classtext" label="Address" name="address" value={formValues.address} onChange={handleChange}/>
    </li>
    <p className="err">{formErrors.address}</p>
    <li className="textbox"><label htmlFor="pincode">Enter pincode:</label>
        <input type="text" className="classtext" label="pincode" name="pincode" value={formValues.pincode} onChange={handleChange}/>
    </li>
    <p className="err">{formErrors.pincode}</p>
    </div>
    <div className="my12details">
    
    <h2>Class 12 details</h2>
    <li><div class="Board"><p>Select Board</p><select id="year" size="4"  >
        <option value="I year"> CBSE board</option> 
        <option value="II year"> ICSE board</option> 
        <option value="III year"> State board</option> 
        </select>
         </div>
     </li>
     <div className='twelvealign'>
    <li className="textbox">
        <label htmlFor="SchoolName">Enter Name of school</label>
        <input type="text" className="classtext" label="SchoolName" name="schoolname"value={formValues.schoolname} onChange={handleChange}/>
    </li>
    <li className="textbox"><label htmlFor="Schoolpin">Enter School pincode:</label>
        <input type="Schoolpin"className="classtext" label="Schoolpin"name="schoolpin" value={formValues.schoolpin} onChange={handleChange}/>
   </li>
   </div>
   <li className="textbox"><label htmlFor="12percent">Enter Class 10 percentage:</label>
    <input type="Schoolpin" className="classtext" label="12percent" name="twelvepercent" value={formValues.twelvepercent} onChange={handleChange}/>
    </li>
    <p className="err">{formErrors.twelvepercent}</p>
    </div>
    <div className="my10details">
    <h2>Class 10 details</h2>
    <li><div class="Board"><p>Select Board</p>
        <select id="year" size="4"  >
        <option value="I year"> CBSE board</option> 
        <option value="II year"> ICSE board</option> 
        <option value="III year"> State board</option> 
        </select>
         </div>
     </li>
    <div className='tenalign'>
    <li className="textbox">
        <label htmlFor="SchoolName">Enter Name of school</label>
        <input type="text" className="classtext" label="SchoolName"/>
    </li>
   
    <li className="textbox"><label htmlFor="Schoolpin">Enter School pincode:</label>
        <input type="Schoolpin" className="classtext" label="Schoolpin" value={formValues.schoolpin} onChange={handleChange}/>
   </li>
   </div>
   <li className="textbox"><label htmlFor="10percent">Enter Class 12 percentage:</label>
    <input type="Schoolpin" className="classtext" label="12percent" name="tenpercent" value={formValues.tenpercentpercent} onChange={handleChange}/>
    </li>
    <p className="err">{formErrors.tenpercent}</p>
    </div>
    <button className='submitbutton' type="submit">Submit</button>
    </form>
    </div>
    </div>
    
    );
};
export default Register;


