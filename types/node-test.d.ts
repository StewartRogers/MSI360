declare module "node:test" {
  type TestCallback = () => void | Promise<void>;

  function test(name: string, callback: TestCallback): void;
  function test(name: string, options: unknown, callback: TestCallback): void;

  export { test };
  export default test;
}

declare module "node:assert/strict" {
  type AssertionMessage = string | Error;

  function ok(value: unknown, message?: AssertionMessage): asserts value;
  function equal(actual: unknown, expected: unknown, message?: AssertionMessage): void;
  function deepEqual(actual: unknown, expected: unknown, message?: AssertionMessage): void;

  const assert: {
    ok: typeof ok;
    equal: typeof equal;
    deepEqual: typeof deepEqual;
  };

  export { ok, equal, deepEqual };
  export default assert;
}
