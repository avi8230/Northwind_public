import { useNavigate, useParams } from "react-router-dom";

function withRouter(InnerComponent: Function): Function {
    return function (props: any) {
        const params = useParams();
        const navigate = useNavigate();

        return (
            <InnerComponent {...props} params={params} navigate={navigate} />
        );
    }
}

export default withRouter;
