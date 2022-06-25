import ComingSoon from "@/templates/ComingSoon";
import { useEffect, useState } from "react";

const Index = () => {
  const [countdown, setCountdown] = useState<number>(0);

  useEffect(() => {
    const firstAugustDay = new Date("2022-08-01T22:00:00");
    setCountdown((firstAugustDay.getTime() - Date.now()) / 1000);
  }, []);

  return (
    <ComingSoon description="Building Awesome Website" countdown={countdown} />
  );
};

export default Index;
