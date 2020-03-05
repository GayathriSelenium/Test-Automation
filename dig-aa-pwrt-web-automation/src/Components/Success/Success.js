import React from 'react'
import { withStyles} from '@material-ui/core'

const styles = () => ({
    success: {
        position: 'fixed',
        width: '40px',
        height: '40px',
        top: '50%',
        left: '50%',
        textAlign: 'center',
        marginTop: '-20px',
        marginLeft: '-20px',
        color: 'green'
    },
})

const Success = props => {
    const { classes } = props
    return (
            <div className={classes.success}>
                Success!
            </div>
    )
}

export default withStyles(styles)(Success)
