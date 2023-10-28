import { Alert } from "react-bootstrap"

// para que sea un message solo de tipo string
type AlertGeneratorProps = {
    message: string;
}

//hijo tiene argumentos de tipo alertgeneratorprops
const AlertGenerator = ({message} : AlertGeneratorProps) => {
  return (
    <Alert variant="succes" className="mt-2 w-25">
        <Alert.Heading> Mensaje Recibido </Alert.Heading>
        <p>
            {message}
        </p>
    </Alert>
  )
}

export default AlertGenerator