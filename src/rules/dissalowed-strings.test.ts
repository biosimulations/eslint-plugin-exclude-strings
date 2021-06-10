import { RuleTester } from "eslint";
import dissalowedStrings from "./dissalowed-strings";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });
tester.run("dissalowed-strings", dissalowedStrings, {
  valid: [{ code: `const x= "hi" ` }],
  invalid: [
    {
      code: `const x = "hello";`,
      errors: [{ message: "The string is not allowed" }],
    },
  ],
});
