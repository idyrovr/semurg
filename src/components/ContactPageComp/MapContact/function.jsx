import { useLoadScript} from 'google-maps-react'

export const FunctionS = () => {
    const {isLoaded} = useLoadScript ({
        googleMapsApiKey: "AIzaSyDi0PO74imPW7cc2PgTgZTihk8f8krkiEY"
    });

};