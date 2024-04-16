import React from 'react';
import TextInput from "../../components/text-inputs/text-input.component";

const AdGroupForm = ({ errors, register, setCurrent }) => {
    return (
        <div className='min-h-[70vh] p-10 relative'>
            <TextInput
                isRequired
                id="campaign_name"
                label="Campaign Name"
                placeholder="Campaign Name"
                register={register}
                errorMessage={errors?.adItem_name?.message}
                customClass="mt-5"
            />
            <TextInput
                isRequired
                id="adItem_name"
                label="Ad Item Name"
                register={register}
                placeholder="Ad item name"
                errorMessage={errors.adItem_name?.message}
            />
            <button className='absolute bottom-5 right-5 mr-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => setCurrent(2)}
            >
                Next
            </button>
        </div>
    );
}

export default AdGroupForm;