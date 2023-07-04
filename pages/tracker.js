import { useState, useEffect } from 'react';
import utilStyles from '../styles/utils.module.css';
import Styles from '../styles/Tracker.module.css';
import { useRouter } from 'next/router';
import Card from "../components/card.js"
export default function tracker() {
    const router = useRouter();
    const { packageId } = router.query;
    const [packageData, setPackageData] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //
    useEffect(() => {
        if (packageId) {
            setLoading(true);
            fetch(`https://ahiva.correo.com.uy/servicioConsultaTntIps-wsWeb/seguimientoEnvios/eventosweb?codigoPieza=${packageId}`)
                .then((response) => response.json())
                .then((data) => {
                    setPackageData(data[0].eventos)
                    //console.log(packageData);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error)
                    setError(error);
                    setLoading(false);
                });
        }
    }, [packageId]);
    //
    if (loading) {
        return (<p>Loading...</p>)
    }

    if (error) {
        return (<p>Error: {error.message}</p>)
    }
    //https://ishadeed.com/article/stepper-component-html-css/
    return (
        <>
            <div className={Styles.aa}>
                {packageData && (
                    <div className={Styles.trackingContainer}>
                        <Card
                            packageData={packageData}
                        />
                    </div>
                )}
            </div>
        </>
    );
}

