import React from 'react'
import { withStyles} from '@material-ui/core'


const styles = () => ({
    error: {
        position: 'fixed',
        width: '40px',
        height: '40px',
        top: '50%',
        left: '50%',
        textAlign: 'center',
        marginTop: '-20px',
        marginLeft: '-20px',
        color: 'red'
    },
})

const Error = props => {
    const { classes } = props
    return (
            <div className={classes.error}>
                Error!
            </div>
    )
}

export default withStyles(styles)(Error)
