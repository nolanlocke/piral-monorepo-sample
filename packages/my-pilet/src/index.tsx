import "./sample.css";
import { PiletApi } from "app-shell";
import * as React from "react";
import MyComponent from './MyComponent';

export function setup(app: PiletApi) {
  app.registerTile(() => <div className="foo">Welcome to Piral!</div>, {
    initialColumns: 2,
    initialRows: 2
  });
  const connect = app.createConnector(() => fetch('/api/posts').then(res => res.json()));
  app.registerPage('/foo', connect(MyComponent));
}
