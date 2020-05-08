// works
export * as answersFromTs from "./answersFromTsToBeEexported";
// works
export * from "./answersFromTsToBeEexported";

// works
export * as answersFromJs from "./answersFromJsToBeReexported";
// does not work (comment this and uncomment next to see how it should work)
export * from "./answersFromJsToBeReexported";
// works (uncomment in order to see how it should work)
//export { halfTheAnswer } from "./answersFromJsToBeReexported";