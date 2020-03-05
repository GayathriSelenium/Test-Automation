import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, CircularProgress } from '@material-ui/core'

const styles = () => ({
    overlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: '1300',
    },
    loading: {
        position: 'fixed',
        width: '40px',
        height: '40px',
        top: '50%',
        left: '50%',
        textAlign: 'center',
        marginTop: '-20px',
        marginLeft: '-20px',
    },
})

const Loading = props => {
    const { classes } = props
    return (
        <>
            <div className={classes.overlay} />
            <div className={classes.loading}>
                <CircularProgress />
            </div>
        </>
    )
}

Loading.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(Loading)
