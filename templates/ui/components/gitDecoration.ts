import Component from "../component";
import { builder } from "../propertyBuilder";

export default class GitDecoration extends Component {
  public modifiedResourceForeground = builder
    .setName("gitDecoration.modifiedResourceForeground")
    .addTypes("git", "decoration", "")
    .build();

  public deletedResourceForeground = builder
    .setName("gitDecoration.deletedResourceForeground")
    .addTypes("git", "decoration", "deleted", "resource", "foreground")
    .build();

  public untrackedResourceForeground = builder
    .setName("gitDecoration.untrackedResourceForeground")
    .addTypes("git", "decoration", "untracked", "resource", "foreground")
    .build();

  public ignoredResourceForeground = builder
    .setName("gitDecoration.ignoredResourceForeground")
    .addTypes("git", "decoration", "ignored", "resource", "foreground")
    .build();

  public conflictingResourceForeground = builder
    .setName("gitDecoration.conflictingResourceForeground")
    .addTypes("git", "decoration", "conflicting", "resource", "foreground")
    .build();
}
