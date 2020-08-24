import React from 'react';

function FormField({ value, onChange}) {
    return (
        <div>
            <label>
                Nome da categoria
                <input 
                    type="text" 
                    value={value} 
                    name="nome" 
                    onChange={onChange} 
                />
            </label>
        </div>
    )
}

export default FormField;