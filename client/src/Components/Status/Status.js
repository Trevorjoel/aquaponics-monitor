// Show the ideal ranges, fish type, and other data about the system
// State required: Fish type and the optimal ranges water in tanks
// Children components: Fish switch
import Aux from "../../HigherOrder/Aux";
import classes from './Status.module.scss';
const status = () => {


    return(
        <Aux>
            <div className={classes.Top}>
                <h3 className={classes.Top}>Status</h3>
            </div>
            <div className={classes.Overview}>
                <hr /><hr /><hr />

            </div>
        </Aux>
    )

}
export default status;