import React from 'react'
import { connect } from 'react-redux'
import { Box, Grommet } from 'grommet'
import Formy from '../components/Formy'

const Index = () => {
    return (
        <Grommet full plain>
            <Box fill background="dark-1" justify="center" align="center">
                <Formy />
            </Box>
        </Grommet>
    )
}

export default connect()(Index)
