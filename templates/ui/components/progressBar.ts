import Component from "../component";
import { builder } from "../propertyBuilder";

export default class ProgressBar extends Component {
  public background = builder
    .setName("progressBar.background")
    .addTypes("pregressBar", "background")
    .build();
}
