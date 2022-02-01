import Clock from "components/Clock";
import {
  Navigate,
  useParams,
} from "react-router-dom";

export default () => {
    const { params } = useParams();
    const searchParams = new URLSearchParams(params);
    const timeString = searchParams.get("time");
    if (!timeString) {
      return <Navigate replace to="/timers" />;
    }
    const timeMin = parseInt(timeString);
  
    if (isNaN(timeMin)) {
      return <Navigate replace to="/timers" />;
    }
  
    const incrementString = searchParams.get("increment");
    const incrementSec = incrementString ? parseInt(incrementString) : undefined;
  
    if (incrementString && isNaN(parseInt(incrementString))) {
      return <Navigate replace to="/timers" />;
    }
  
    return <Clock {...{ timeMin, incrementSec }} />;
  };