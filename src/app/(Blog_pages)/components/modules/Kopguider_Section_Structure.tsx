import React from 'react';
import Main_Kopguider_card from '../common/Main_Kopguider_card';

const Discussion_Section_Structure = ({ details }: any | undefined) => {

    return (
        <div className='grid sm:grid-cols-2 gap-4 grid-cols-1'>
            {Array(8).fill(1).map((item, index) => (
                <Main_Kopguider_card details={details} />
            ))}
        </div>
    );
};

export default Discussion_Section_Structure;