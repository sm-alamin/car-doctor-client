import { useLoaderData } from "react-router-dom";


const Checkout = () => {
    const loadedService = useLoaderData();
    const {_id, title} = loadedService;
    return (
        <div>
            <h3>Checkout page :{title}</h3>
        </div>
    );
};

export default Checkout;