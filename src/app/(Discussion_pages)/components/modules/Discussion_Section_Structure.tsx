import React from 'react';
import Main_Discussion_card from '../common/Main_Discussion_card';

const Discussion_Section_Structure = () => {
    return (
        <section className='flex flex-col gap-4'>
            {Array(8).fill(1).map((item, index) => (
                <Main_Discussion_card />
            ))}
        </section>
    );
};

export default Discussion_Section_Structure;