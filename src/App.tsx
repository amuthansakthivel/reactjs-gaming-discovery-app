import "bootstrap/dist/css/bootstrap.css";
import Button from "./components/Button/Button.tsx";
import Alert from "./components/Alert.tsx";
import { useState } from "react";
import MyButton from "./components/Button/MyButton.tsx";
import Like from "./components/Like/Like.tsx";
import ExpandableText from "./components/Text/ExpandableText.tsx";
import FormUsingReactFormHookAndZod from "./components/Form/FormUsingReactFormHookAndZod.tsx";

function App() {
  const [shouldDisplayAlert, setAlertState] = useState(false);

  return (
    <div>
      {shouldDisplayAlert && (
        <Alert
          onDismiss={() => {
            setAlertState(false);
          }}
        >
          Test Alert
        </Alert>
      )}
      <Button
        onClick={() => {
          setAlertState(true);
        }}
      >
        Submit
      </Button>

      <MyButton
        color={"secondary"}
        onClick={() => {
          setAlertState(true);
        }}
      >
        Submit
      </MyButton>
      <Like onClick={() => {}} />
      <ExpandableText>Lorem sdfgffsdfjvdjfvdfjkvdvdfvndfsv</ExpandableText>
      <FormUsingReactFormHookAndZod />
    </div>
  );
}

export default App;
