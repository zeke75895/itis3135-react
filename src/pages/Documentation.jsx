export default function Documentation() {
  return (
    <>
      <h2>Documentation</h2>
      <article>
        <section>
          <h3>Variables and Scope</h3>
          <p>Variables are containers for storing data values. In JavaScript, variables are declared with <code>var</code>, <code>let</code>, or <code>const</code>.</p>
          <p>Scope determines accessibility; local is limited to block/function, global is accessible everywhere.</p>
        </section>
        <section>
          <h3>Data Types</h3>
          <p>Primitive types include string, number, boolean, null, undefined, symbol, bigint. Arrays and objects are reference types.</p>
        </section>
        <section>
          <h3>Functions and Closures</h3>
          <p>Functions are first-class; closures keep access to outer scope after function returns.</p>
        </section>
        <section>
          <h3>Control Flow</h3>
          <p>Use if/else, switch, for, while, and for...of to control execution flow.</p>
        </section>
        <section>
          <h3>Objects and Prototypes</h3>
          <p>Objects contain key-value pairs and use prototype chain for inheritance.</p>
        </section>
        <section>
          <h3>Error Handling</h3>
          <p>Use try/catch/finally and throw to manage runtime errors.</p>
        </section>
      </article>
    </>
  )
}
