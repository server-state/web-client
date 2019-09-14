import React from 'react';
import {Box, Button, CheckBox, Form, FormField, Heading, Layer} from "grommet";

export default function PreferencesPopup(props) {
    return (
        <>
            {props.open &&
            <Layer
                onEsc={() => props.onClose()}
                onClickOutside={() => props.onClose()}
                padding={'medium'}
            >
                <Box margin={'medium'}>
                    <Heading level={3}>Preferences</Heading>
                    <Form>
                        <FormField name={'baseUrl'} label={'Server Base URL'}/>
                        <CheckBox label={'Server requires authentication'}/>
                        <br />
                        <Button onClick={props.onClose} type={'submit'} primary label={'Save'}/>
                    </Form>
                </Box>
            </Layer>
            }
        </>
    )
}
