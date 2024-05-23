import { HookFormInput, HookTextEditor } from "components/FormInputs";
import * as React from "react";
import { useForm } from 'react-hook-form';


interface Props {

}

function HomeContainer(props: Props) {

    const {
        handleSubmit,
        formState: { errors, defaultValues },
        control,
        reset,
      } = useForm();


    return (
        <div>

            <HookFormInput
                validation={{}}
                control={control}
                errors={errors}
                baseClassName="width-100 padding-r-4"
                caption='(Upto 360 characters)'
                label='Title'
                id='resources_page_title'
                name={"testss"}
            />

<HookTextEditor
                validation={{}}
                control={control}
                errors={errors}
                baseClassName="width-100 padding-r-4"
                caption='(Upto 360 characters)'
                label='Title'
                id='resources1_page_title'
                name={"testss111"}
            />

        </div>
    )
}

export default HomeContainer;
