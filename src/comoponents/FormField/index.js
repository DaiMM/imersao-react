import React from "react";


function FormField({ label, type, value, name, onChange, placeholder }){
    return(
        <div>
            <label>
                {label}
                <input
                    type={type}
                    value={value}
                    name={name}
                    onChange= {onChange}
                    placeholder={placeholder}
                    //onChange={function funcaoHandler(infoDoEvento){ setNomeDaCategoria(infoDoEvento.target.value);}}
                />
            </label>
        </div>
    )
}

export default FormField