import { Rule } from "eslint";

const dissalowedStrings: Rule.RuleModule = {
  create: (context) => {
    return {
      Literal: (node) => {
        if (node.value == "hello") {
          context.report({ message: "The string is not allowed", node });
        }
      },
    };
  },
};

export = dissalowedStrings;
