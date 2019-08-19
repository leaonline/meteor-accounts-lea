// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by accounts-lea.js.
import { name as packageName } from "meteor/leaonline:accounts-lea";

// Write your tests here!
// Here is an example.
Tinytest.add('accounts-lea - example', function (test) {
  test.equal(packageName, "accounts-lea");
});
