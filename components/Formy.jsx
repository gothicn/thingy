import { Box, Button, Form, FormField, Heading } from 'grommet'
import React from 'react'
import { connect } from 'react-redux'
import { sendData } from '../actions'

const Formy = ({ loading, errors, sendData }) => {
    return (
        <Box
            align="center"
            round="xsmall"
            height="large"
            width="medium"
            background="dark-2"
        >
            <Heading level={3}>Регистрация котэ</Heading>

            <Box width="medium" pad="small">
                <Form
                    errors={errors}
                    onSubmit={() => {
                        sendData()
                    }}
                >
                    <FormField name={'name'} placeholder="Кличка" />
                    <FormField name={'insta'} placeholder="Инстаграм" />
                    <FormField name={'pass'} placeholder="Пароль" />
                    <Box
                        direction="row"
                        justify="between"
                        margin={{ top: 'medium' }}
                    >
                        <Button
                            disabled={loading}
                            type="submit"
                            label="Регистрация котэ"
                        />
                    </Box>
                </Form>
            </Box>
        </Box>
    )
}

export default connect(
    ({ errors, loading }) => ({ loading, errors }),
    dispatch => ({
        sendData: () => {
            dispatch(sendData())
        }
    })
)(Formy)
