import Alert from "../components/Alert/Alert";
import Avatar from "../components/Avatar/Avatar";
import Badge from "../components/Badge/Badge";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Headings from "../components/Headings/Headings";
import Image from "../components/Image/Image";
import Installation from "../components/Installation/Installation";
import Text from "../components/Text/Text";

export const mainContentChooser = (category) => {
  switch (category) {
    case "installation": {
      return <Installation />;
    }
    case "avatar": {
      return <Avatar />;
    }

    case "alert": {
      return <Alert />;
    }
    case "badge": {
      return <Badge />;
    }
    case "button": {
      return <Button />;
    }
    case "image": {
      return <Image />;
    }

    case "card": {
      return <Card />;
    }
    case "headings": {
      return <Headings />;
    }
    case "text": {
      return <Text />;
    }

    default:
      return "";
  }
};
