import React from "react";

const Blog = () => {
  return (
    <div className="container my-5">
      <h3>Hot Topic</h3>
      <hr />
      <div className="card p-4 my-2">
        <h4>what is cors?</h4>
        <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </p>
      </div>
      <div className="card p-4 my-2">
        <h4>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <p>
          Firebase can be used when you do not want to spend a lot of time
          developing your own backend. It can be used for rapid development. I
          have been using it in my apps in production. You will not have to take
          care of servers, etc, Google will take care of it for you. <br /> I
          have to implement email-password,google,facebook and github
          authentication.
        </p>
      </div>
      <div className="card p-4 my-2">
        <h4>How does the private route work?</h4>
        <p>
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in)
        </p>
      </div>
      <div className="card p-4 my-2">
        <h4>What is Node? How does Node work?</h4>
        <p>
          Node.js is an open source server environment.Node.js runs on various
          platforms (Windows, Linux, Unix, Mac OS X, etc.).Node.js uses
          JavaScript on the server.
          <br />
          <strong>Working of Node.js:</strong> Node.js accepts the request from
          the clients and sends the response, while working with the request
          node.js handles them with a single thread. To operate I/O operations
          or requests node.js use the concept of threads. Thread is a sequence
          of instructions that the server needs to perform. It runs parallel on
          the server to provide the information to multiple clients. Node.js is
          an event loop single-threaded language. It can handle concurrent
          requests with a single thread without blocking it for one request.
        </p>
      </div>
    </div>
  );
};

export default Blog;
