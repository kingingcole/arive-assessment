import { useHistory } from "react-router-dom";
import Input from "./Input";

const Back = () => {
    let history = useHistory();

    return <Input type="submit" isBackButton={true} value='Back' onClick={() => history.goBack()}/>
}

export default Back