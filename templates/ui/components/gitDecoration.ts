import Component from "../component";
import { builder } from "../propertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ComponentType as component } from "../types/componentType";
import { StateType as state } from "../types/stateType";

export default class GitDecoration extends Component {
  public modifiedResourceForeground = builder
    .setName("gitDecoration.modifiedResourceForeground")
    .addTypes(component.GIT_DECORATION, state.MODIFIED, base.FOREGROUND)
    .build();

  public deletedResourceForeground = builder
    .setName("gitDecoration.deletedResourceForeground")
    .addTypes(component.GIT_DECORATION, state.DELETED, base.FOREGROUND)
    .build();

  public untrackedResourceForeground = builder
    .setName("gitDecoration.untrackedResourceForeground")
    .addTypes(component.GIT_DECORATION, state.UNTRACKED, base.FOREGROUND)
    .build();

  public ignoredResourceForeground = builder
    .setName("gitDecoration.ignoredResourceForeground")
    .addTypes(component.GIT_DECORATION, state.IGNORED, base.FOREGROUND)
    .build();

  public conflictingResourceForeground = builder
    .setName("gitDecoration.conflictingResourceForeground")
    .addTypes(component.GIT_DECORATION, state.CONFLICTING, base.FOREGROUND)
    .build();
}
