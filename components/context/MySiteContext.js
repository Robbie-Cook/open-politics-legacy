import { MyLink } from "@robbie-cook/react-components"

class MySiteContext {
  static name = "OpenPolitics";
  static links = [new MyLink("Home", "/"), new MyLink("News", "/news")];
}

export default MySiteContext