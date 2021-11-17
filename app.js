import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState, Controller } from "react-hook-form";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePicker = () => {
//   const [startDate, setStartDate] = useState(new Date());
    const {handleSubmit, control, errors} = useForm();
    <div style={{padding: '50px'}}>
        <form>
            <Controller name="birthDate" control={control} defaultValue={null} 
            render ={
                ({onChange, value}) =><DatePicker onChange={onChange} selected={value} placeholderText="date" />
            }
            />
            <button type="submit"> Submit</button>
        </form>
    </div>
//   return (
//     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//   );
};

export default DatePicker;