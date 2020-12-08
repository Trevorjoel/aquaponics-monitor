// Show the ideal ranges, fish type, and other data about the system
// State required: Fish type and the optimal ranges water in tanks
// Children components: Fish switch
import Aux from "../../HigherOrder/Aux";
import classes from './Profile.module.scss';
const profile = () => {


    return(
        <Aux>
            <div className={classes.Top}>
                <h3 className={classes.Top}>System Profile</h3>
            </div>
            <div className={classes.Overview}>
                <p>Fish:</p>
                <p className={classes.Link}>Caring for Trout:</p>
                <p>Water in system:</p>
                <p>Optimal ranges:</p>

            </div>
        </Aux>
    )

}
export default profile;