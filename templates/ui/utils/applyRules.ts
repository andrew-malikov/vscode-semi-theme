import Component from "../component";
import Property from "../property";
import Rule from "./rule";

export function applyToComponents(rules: Rule[], ...components: Component[]) {
  components.forEach(component => {
    applyToProperties(rules, ...component.toList());
  });
}

export function applyToProperties(rules: Rule[], ...props: Property[]) {
  props.forEach(property => {
    applyToProperty(rules, property);
  });
}

function applyToProperty(rules: Rule[], property: Property) {
  rules.forEach(rule => {
    if (property.contains(rule.types)) property.color = rule.color;
  });
}
