import "./sample.css";
import { PiletApi } from "app-shell";
import * as React from "react";
import DebugComponent from './DebugComponent';

export function setup(app: PiletApi) {
  app.registerTile(() => <DebugComponent data={"This is a test"} />, {
    initialColumns: 2,
    initialRows: 2
  });
  const connect = app.createConnector(() => fetch('/api/posts').then(res => res.json()));
  app.registerPage('/foo', connect(DebugComponent));
}
